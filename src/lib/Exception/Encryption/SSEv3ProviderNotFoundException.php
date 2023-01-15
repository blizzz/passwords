<?php
/*
 * @copyright 2023 Passwords App
 *
 * @author Marius David Wieschollek
 * @license AGPL-3.0
 *
 * This file is part of the Passwords App
 * created by Marius David Wieschollek.
 */

namespace OCA\Passwords\Exception\Encryption;

use Exception;
use JetBrains\PhpStorm\Pure;
use Throwable;

class SSEv3ProviderNotFoundException extends Exception {

    /**
     * @param string          $message
     * @param int             $code
     * @param Throwable|null $previous
     */
    #[Pure] public function __construct(string $message = "", int $code = 0, ?Throwable $previous = null) {
        if(empty($message)) {
            $message = 'No SSEv3 provider could be found';
        }
        parent::__construct($message, $code, $previous);
    }
}