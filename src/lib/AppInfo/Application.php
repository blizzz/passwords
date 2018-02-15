<?php
/**
 * Created by PhpStorm.
 * User: marius
 * Date: 26.08.17
 * Time: 17:01
 */

namespace OCA\Passwords\AppInfo;

use OCA\Passwords\Controller\AdminSettingsController;
use OCA\Passwords\Controller\Api\FolderApiController;
use OCA\Passwords\Controller\Api\Legacy\LegacyCategoryApiController;
use OCA\Passwords\Controller\Api\Legacy\LegacyPasswordApiController;
use OCA\Passwords\Controller\Api\Legacy\LegacyVersionApiController;
use OCA\Passwords\Controller\Api\PasswordApiController;
use OCA\Passwords\Controller\Api\ServiceApiController;
use OCA\Passwords\Controller\Api\SettingsApiController;
use OCA\Passwords\Controller\Api\ShareApiController;
use OCA\Passwords\Controller\Api\TagApiController;
use OCA\Passwords\Db\Folder;
use OCA\Passwords\Db\Password;
use OCA\Passwords\Db\Share;
use OCA\Passwords\Db\Tag;
use OCA\Passwords\Helper\ApiObjects\ShareObjectHelper;
use OCA\Passwords\Helper\Words\LocalWordsHelper;
use OCA\Passwords\Hooks\FolderHook;
use OCA\Passwords\Hooks\Manager\HookManager;
use OCA\Passwords\Hooks\PasswordHook;
use OCA\Passwords\Hooks\ShareHook;
use OCA\Passwords\Hooks\TagHook;
use OCA\Passwords\Middleware\ApiSecurityMiddleware;
use OCA\Passwords\Middleware\LegacyMiddleware;
use OCA\Passwords\Notification\Notifier;
use OCA\Passwords\Services\Object\PasswordRevisionService;
use OCA\Passwords\Services\Object\PasswordService;
use OCA\Passwords\Services\Object\ShareService;
use OCP\AppFramework\App;
use OCP\AppFramework\IAppContainer;
use OCP\IGroupManager;
use OCP\IL10N;
use OCP\IRequest;
use OCP\L10N\IFactory;

/**
 * Class Application
 *
 * @package OCA\Passwords\AppInfo
 */
class Application extends App {

    const APP_NAME = 'passwords';

    /**
     * Application constructor.
     *
     * @param array $urlParams
     *
     * @throws \OCP\AppFramework\QueryException
     */
    public function __construct(array $urlParams = []) {
        parent::__construct(self::APP_NAME, $urlParams);

        //$this->registerPersonalSettings();
        $this->registerDiClasses();
        $this->registerInternalHooks();
        $this->registerMiddleware();
        $this->registerNotificationNotifier();
    }

    /**
     *
     */
    protected function registerPersonalSettings(): void {
        \OCP\App::registerPersonal(self::APP_NAME, 'personal/index');
    }

    /**
     */
    protected function registerDiClasses(): void {
        $container = $this->getContainer();

        /**
         * Controllers
         */
        $this->registerController();

        /**
         * Helper
         */
        $container->registerService(LocalWordsHelper::class,
            function (IAppContainer $c) {
                return new LocalWordsHelper(
                    $c->query(IFactory::class)->get('core')->getLanguageCode()
                );
            });

        /**
         * Register Legacy Api Controller Classes
         */
        $this->registerLegacyApiControllers();
    }

    /**
     *
     */
    protected function registerMiddleware(): void {
        $container = $this->getContainer();

        $container->registerAlias('ApiSecurityMiddleware', ApiSecurityMiddleware::class);
        $container->registerMiddleware('ApiSecurityMiddleware');

        if($container->getServer()->getConfig()->getAppValue(Application::APP_NAME, 'legacy_api_enabled', true)) {
            $container->registerAlias('LegacyMiddleware', LegacyMiddleware::class);
            $container->registerMiddleware('LegacyMiddleware');
        }
    }

    /**
     *
     */
    protected function registerController(): void {
        $container = $this->getContainer();

        $container->registerAlias('AdminSettingsController', AdminSettingsController::class);
        $container->registerAlias('PasswordApiController', PasswordApiController::class);
        $container->registerAlias('SettingsApiController', SettingsApiController::class);
        $container->registerAlias('ServiceApiController', ServiceApiController::class);
        $container->registerAlias('FolderApiController', FolderApiController::class);
        $container->registerAlias('TagApiController', TagApiController::class);

        $container->registerService(ShareApiController::class,
            function (IAppContainer $c) {
                $server = $c->getServer();

                return new ShareApiController(
                    $server->getUserSession()->getUser(),
                    $server->getConfig(),
                    $c->query(IRequest::class),
                    $server->getShareManager(),
                    $server->getUserManager(),
                    $c->query(ShareService::class),
                    $c->query(IGroupManager::class),
                    $c->query(ShareObjectHelper::class),
                    $c->query(PasswordService::class),
                    $c->query(PasswordRevisionService::class)
                );
            });
    }

    /**
     *
     */
    protected function registerLegacyApiControllers(): void {
        $container = $this->getContainer();

        if($container->getServer()->getConfig()->getAppValue(Application::APP_NAME, 'legacy_api_enabled', true)) {
            $container->registerAlias('LegacyVersionApiController', LegacyVersionApiController::class);
            $container->registerAlias('LegacyPasswordApiController', LegacyPasswordApiController::class);
            $container->registerAlias('LegacyCategoryApiController', LegacyCategoryApiController::class);
        }
    }

    /**
     * @throws \OCP\AppFramework\QueryException
     */
    protected function registerInternalHooks(): void {
        $container = $this->getContainer();
        /** @var HookManager $hookManager */
        $hookManager = $container->query(HookManager::class);
        /** @var FolderHook $folderHook */
        $folderHook = $container->query(FolderHook::class);
        $hookManager->listen(Folder::class, 'postClone', [$folderHook, 'postClone']);
        $hookManager->listen(Folder::class, 'preDelete', [$folderHook, 'preDelete']);
        $hookManager->listen(Folder::class, 'postDelete', [$folderHook, 'postDelete']);
        $hookManager->listen(Folder::class, 'preSetRevision', [$folderHook, 'preSetRevision']);
        /** @var PasswordHook $passwordHook */
        $passwordHook = $container->query(PasswordHook::class);
        $hookManager->listen(Password::class, 'postClone', [$passwordHook, 'postClone']);
        $hookManager->listen(Password::class, 'preDelete', [$passwordHook, 'preDelete']);
        $hookManager->listen(Password::class, 'postDelete', [$passwordHook, 'postDelete']);
        $hookManager->listen(Password::class, 'preSetRevision', [$passwordHook, 'preSetRevision']);
        /** @var TagHook $tagHook */
        $tagHook = $container->query(TagHook::class);
        $hookManager->listen(Tag::class, 'postClone', [$tagHook, 'postClone']);
        $hookManager->listen(Tag::class, 'preDelete', [$tagHook, 'preDelete']);
        $hookManager->listen(Tag::class, 'postDelete', [$tagHook, 'postDelete']);
        $hookManager->listen(Tag::class, 'preSetRevision', [$tagHook, 'preSetRevision']);
        /** @var ShareHook $shareHook */
        $shareHook = $container->query(ShareHook::class);
        $hookManager->listen(Share::class, 'postDelete', [$shareHook, 'postDelete']);
    }

    /**
     *
     */
    protected function registerNotificationNotifier(): void {
        $this->getContainer()->getServer()->getNotificationManager()->registerNotifier(
            function () {
                return $this->getContainer()->query(Notifier::class);
            },
            function () {
                $l = $this->getContainer()->query(IL10N::class);

                return ['id' => self::APP_NAME, 'name' => $l->t('Passwords'),];
            }
        );
    }
}