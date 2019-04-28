(function () {
    let translations    = {
            'Passwords'                           : 'Passwörter',
            'All'                                 : 'Alle',
            'Folders'                             : 'Ordner',
            'Recent'                              : 'Aktuelle',
            'Favorites'                           : 'Favoriten',
            'Shared'                              : 'Geteilt',
            'Tags'                                : 'Tags',
            'Security'                            : 'Sicherheit',
            'Trash'                               : 'Papierkorb',
            'Details'                             : 'Details',
            'Edit'                                : 'Bearbeiten',
            'Rename'                              : 'Umbenennen',
            'Delete'                              : 'Löschen',
            'Restore'                             : 'Wiederherstellen',
            'New Password'                        : 'Neues Passwort',
            'New Folder'                          : 'Neuer Ordner',
            'New Tag'                             : 'Neuer Tag',
            'Secure'                              : 'Sicher',
            'Weak'                                : 'Unsicher',
            'Weak (Duplicate)'                    : 'Unsicher (Duplikat)',
            'Weak (Outdated)'                     : 'Unsicher (Veraltet)',
            'Breached'                            : 'Kompromittiert',
            'Notes'                               : 'Notizen',
            'Share'                               : 'Teilen',
            'Revisions'                           : 'Versionen',
            'QR Code'                             : 'QR Code',
            'Password'                            : 'Passwort',
            'Username'                            : 'Benutzer',
            'Website'                             : 'Webseite',
            'Add Tags...'                         : 'Tags hinzufügen...',
            'Color'                               : 'Farbe',
            'Name'                                : 'Name',
            'Label'                               : 'Name',
            'General'                             : 'Allgemein',
            'Properties'                          : 'Eigenschaften',
            'Numbers'                             : 'Zahlen',
            'Special Characters'                  : 'Sonderzeichen',
            'More Options'                        : 'Erweiterte Optionen',
            'Favorite'                            : 'Favorit',
            'Encryption'                          : 'Verschlüsselung',
            'On the server'                       : 'Auf dem Server',
            'Custom Fields'                       : 'Eigene Felder',
            'Secret'                              : 'Geheimnis',
            'Text'                                : 'Text',
            'File'                                : 'Datei',
            'Value'                               : 'Wert',
            'Toggle visibility'                   : 'Sichtbarkeit umschalten',
            'Generate password'                   : 'Passwort generieren',
            'Simple Server Side Encryption V1'    : 'Verwende die einfache serverseitige Verschlüsselung in Variante 1',
            'Take some notes'                     : 'Schreibe deine Notizen',
            'Save'                                : 'Speichern',
            'Create folder'                       : 'Ordner erstellen',
            'Folder created'                      : 'Ordner erstellt',
            'Creating folder failed'              : 'Erstellen des Ordners fehlgeschlagen',
            'Rename folder'                       : 'Ordner umbenennen',
            'Folder renamed'                      : 'Ordner umbenannt',
            'Renaming folder failed'              : 'Umbenennen des Ordners fehlgeschlagen',
            'Folder moved'                        : 'Ordner verschoben',
            'Moving folder failed'                : 'Verschieben des Ordners fehlgeschlagen',
            'Delete folder'                       : 'Ordner löschen',
            'Do you want to delete the folder'    : 'Möchtest du den Ordner und alle enthaltenen Elemente löschen?',
            'Folder deleted'                      : 'Ordner gelöscht',
            'Deleting folder failed'              : 'Löschen des Ordners fehlgeschlagen',
            'Folder restored'                     : 'Ordner wiederhergestellt',
            'Restoring folder failed'             : 'Wiederherstellen des Ordners fehlgeschlagen',
            'Create tag'                          : 'Tag erstellen',
            'Tag created'                         : 'Tag erstellt',
            'Creating tag failed'                 : 'Erstellen des Tags fehlgeschlagen',
            'Edit tag'                            : 'Tag bearbeiten',
            'Tag saved'                           : 'Tag gespeichert',
            'Saving tag failed'                   : 'Speichern des Tags fehlgeschlagen',
            'Delete tag'                          : 'Tag löschen',
            'Do you want to delete the tag'       : 'Möchtest du den Tag löschen?',
            'Tag deleted'                         : 'Tag gelöscht',
            'Deleting tag failed'                 : 'Löschen des Tags fehlgeschlagen',
            'Tag restored'                        : 'Tag wiederhergestellt',
            'Restoring tag failed'                : 'Wiederherstellen des Tags fehlgeschlagen',
            'Create password'                     : 'Neues Passwort erstellen',
            'Password created'                    : 'Passwort erstellt',
            'Creating password failed'            : 'Erstellen des Passworts fehlgeschlagen',
            'Edit password'                       : 'Passwort bearbeiten',
            'Password saved'                      : 'Passwort gespeichert',
            'Saving password failed'              : 'Speichern des Passworts fehlgeschlagen',
            'Password moved'                      : 'Passwort verschoben',
            'Moving password failed'              : 'Verschieben des Passworts fehlgeschlagen',
            'Delete password'                     : 'Passwort löschen',
            'Do you want to delete the password'  : 'Möchtest du das Passwort löschen?',
            'Password deleted'                    : 'Passwort gelöscht',
            'Password restored'                   : 'Passwort wiederhergestellt',
            'Restoring password failed'           : 'Wiederherstellen des Passworts fehlgeschlagen',
            'Open Url'                            : 'Webseite öffnen',
            'Copy Url'                            : 'Webseite kopieren',
            'Copy User'                           : 'Benutzer kopieren',
            'Copy Password'                       : 'Passwort kopieren',
            '{element} was copied to clipboard'   : '{element} wurde in die Zwischenablage kopiert',
            'Error copying {element} to clipboard': '{element} konnte nicht in die Zwischenablage kopiert werden',
            'Last modified on {date}'             : 'Zuletzt geändert am {date}',
            'Restore revision'                    : 'Version wiederherstellen',
            'Revision restored'                   : 'Version wiederhergestellt',
            'Restoring revision failed'           : 'Wiederherstellen der Version fehlgeschlagen',
            'Do you want to restore the revision?': 'Möchtest du die Version wiederherstellen?',
            'Shared with you'                     : 'Mit dir geteilt',
            'Shared by you'                       : 'Von dir geteilt',
            'Statistics'                          : 'Statistiken',
            'Created on'                          : 'Erstellt am',
            'Last updated'                        : 'Zuletzt geändert',
            '{count} revisions'                   : '{count} Versionen',
            'Shares'                              : 'Freigaben',
            '{count} shares'                      : '{count} mal geteilt',
            'Server-side encryption'              : 'Serverseitige Verschlüsselung',
            'Advanced server-side encryption'     : 'Erweiterte serverseitige Verschlüsselung',
            'Client-side encryption'              : 'Verschlüsselung auf dem Endgerät',
            'More'                                : 'Mehr',
            'Backup and Restore'                  : 'Sichern & Wiederherstellen',
            'Browser Extension'                   : 'Browser Extension',
            'Handbook'                            : 'Handbuch',
            'Search user'                         : 'Benutzer suchen',
            'Set expiration date'                 : 'Ablaufdatum setzen',
            'Expires {date}'                      : 'Läuft {date} ab',
            'Choose expiration date'              : 'Wähle ein Ablaufdatum oder lass das Feld leer um endlos zu teilen',
            'Please choose a date in the future'  : 'Bitte Ablaufdatum in der Zukunft auswählen',
            'Invalid date'                        : 'Ungültiges Datum',
            'The user {uid} does not exist'       : 'Der Nutzer {uid} existiert nicht',
            'Unable to share password: {message}' : 'Kann Passwort nicht teilen: {message}',
            'Toggle write permissions'            : 'Schreibrechte umschalten',
            'Toggle share permissions'            : 'Weiterverteilrechte umschalten',
            'Stop sharing'                        : 'Teilen beenden',
            'Date'                                : 'Datum',
            'Default Cache (0 files, 0 B)'        : 'Standard Cache (0 Dateien, 0 B)',
            'Avatars Cache (0 files, 0 B)'        : 'Profilbilder (0 Dateien, 0 B)',
            'Favicon Cache (0 files, 0 B)'        : 'Favicon (0 Dateien, 0 B)',
            'Preview Cache (0 files, 0 B)'        : 'Webseitenansichten (0 Dateien, 0 B)',
            'Passwords Cache (0 files, 0 B)'      : 'Schlechte Passwörter (0 Dateien, 0 B)',
            'Backup or export'                    : 'Sichern/Exportieren',
            'Choose Format'                       : 'Format auswählen',
            'Please choose'                       : 'Bitte wählen',
            'Database Backup'                     : 'Datenbank Backup',
            'Predefined CSV'                      : 'Vordefiniertes CSV',
            'Backup password'                     : 'Backup-Passwort',
            '(Optional) Encrypts the backup'      : '(Optional) Verschlüsselt das Backup mit einem mindestens 10 Zeichen langen Passwort',
            'The import only supports CSV'        : 'Der Import unterstützt nur CSV-Dateien',
            'Export Passwords'                    : 'Passwörter exportieren',
            'Export Folders'                      : 'Ordner exportieren',
            'Export Tags'                         : 'Tags exportieren',
            'FolderLabel'                         : 'Ordner',
            'TagLabels'                           : 'Tags',
            'ParentLabel'                         : 'Überordner',
            'FolderId'                            : 'Ordner Id',
            'TagIds'                              : 'Tag Ids',
            'ParentId'                            : 'Überordner Id',
            'Empty'                               : 'Leer',
            'Add Header Line'                     : 'Kopfzeile hinzufügen',
            'Export passwords shared with me'     : 'Passwörter exportieren die mit mir geteilt wurden',
            'Don\'t edit passwords shared with me': 'Keine Passwörter ändern, die mit mir geteilt wurden',
            'Don\'t import empty fields'          : 'Überspringe leere Felder',
            'Run Export'                          : 'Export ausführen',
            'Export'                              : 'Exportieren',
            'Waiting...'                          : 'Läuft...',
            'Export error'                        : 'Export Fehler',
            'Download {format}'                   : '{format}-Datei herunterladen',
            'Nothing to export'                   : 'Nichts zu exportieren',
            'There is no data to export'          : 'Es sind keine Daten zum Exportieren vorhanden',
            'Restore or import'                   : 'Wiederherstellen/Importieren',
            'Passwords CSV'                       : 'Passwörter CSV',
            'Folder CSV'                          : 'Ordner CSV',
            'Custom CSV'                          : 'Anderes CSV',
            'Select File'                         : 'Datei auswählen',
            'Select Options'                      : 'Optionen auswählen',
            'Conflict handling'                   : 'Bei Konflikten',
            'Skip if same revision'               : 'Überschreiben wenn andere Version',
            'Skip always'                         : 'Immer überspringen',
            'Overwrite existing'                  : 'Bestehendes überschreiben',
            'Merge with existing'                 : 'Mit Bestehendem zusammenführen',
            'Create new entry'                    : 'Neuen Eintrag erstellen',
            'For encrypted backups'               : 'Notwendig bei verschlüsselten Backups',
            'CSV Options'                         : 'CSV Optionen',
            'Database'                            : 'Datenbank',
            'Quote Character'                     : 'Feldzeichen',
            'Escape Character'                    : 'Fluchtsymbol',
            'Field Delimiter'                     : 'Trennzeichen',
            'Quote'                               : 'Hochkomma',
            'Single Quote'                        : 'Einfaches Hochkomma',
            'Backslash'                           : 'Umgekehrter Schrägstrich',
            'Detect'                              : 'Automatisch ermitteln',
            'Comma'                               : 'Komma',
            'Semicolon'                           : 'Semikolon',
            'Space'                               : 'Leerzeichen',
            'Tab'                                 : 'Tabulator',
            'Detect unescaped quotes'             : 'Nicht maskierte Fluchtzeichen erkennen',
            'Skip first line'                     : 'Kopfzeile überspringen',
            'Interpolate missing fields'          : 'Fehlende Felder interpolieren',
            'CSV Field Mapping'                   : 'CSV Felder zuordnen',
            'Preview Line'                        : 'Zeige Zeile',
            'Line {line}'                         : 'Zeile {line}',
            'Ignore'                              : 'Ignorieren',
            'Changed'                             : 'Geändert',
            'Modified'                            : 'Geändert',
            'Edited'                              : 'Bearbeitet am',
            'Created'                             : 'Erstellt am',
            'Folder'                              : 'Ordner',
            'Revision'                            : 'Version',
            'Url'                                 : 'Webseite',
            'Parent'                              : 'Überordner',
            'Run Import'                          : 'Import ausführen',
            'Import'                              : 'Importieren',
            'Parsing input file'                  : 'Verarbeite Eingabedatei',
            'Analyzing tags'                      : 'Analysiere Tags',
            'Analyzing folders'                   : 'Analysiere Ordner',
            'Reading tags'                        : 'Lade Tags',
            'Importing tags'                      : 'Importiere Tags',
            'Reading folders'                     : 'Lade Ordner',
            'Importing folders'                   : 'Importiere Ordner',
            'Reading passwords'                   : 'Lade Passwörter',
            'Importing passwords'                 : 'Importiere Passwörter',
            'Import failed'                       : 'Import fehlgeschlagen',
            'Import partially failed'             : 'Import teilweise fehlerhaft',
            'Import successful'                   : 'Import erfolgreich',
            'Import error'                        : 'Importfehler',
            'Some objects had errors:'            : 'Einige Einträge hatten Probleme:',
            'Invalid file type "{type}"'          : 'Falscher Dateityp "{type}"',
            'Password required'                   : 'Passwort erforderlich',
            'Password invalid'                    : 'Falsches Passwort',
            'Failed to decrypt passwords'         : 'Konnte Passwörter nicht entschlüsseln',
            'Failed to decrypt folders'           : 'Konnte Ordner nicht entschlüsseln',
            'Failed to decrypt tags'              : 'Konnte Tags nicht entschlüsseln',
            'CSV file can not be mapped'          : 'CSV Felder passen nicht zur Zuordnung',
            'Delete All Items'                    : 'Alles löschen',
            'Restore All Items'                   : 'Alles wiederherstellen',
            'Restore Items'                       : 'Objekte wiederherstellen',
            'Restore all items in trash?'         : 'Möchtest du alle Objekte im Papierkorb wiederherstellen?',
            'Restore this item'                   : 'Dieses Objekt wiederherstellen',
            'Items restored'                      : 'Objekte wiederhergestellt',
            'Empty Trash'                         : 'Papierkorb leeren',
            'Delete all items in trash?'          : 'Möchtest du alle Objekte im Papierkorb permanent löschen?',
            'Trash emptied'                       : 'Papierkorb geleert',
            'Search'                              : 'Suche',
            'Use the search box to search'        : 'Benutze die Suchbox zum suchen',
            'Search everywhere for "{query}"'     : 'Suche überall nach "{query}"',
            'Settings'                            : 'Einstellungen',
            'Password Rules'                      : 'Regeln für Passwörter',
            'Mark duplicates'                     : 'Markiere Duplikate',
            'Maximum age in days'                 : 'Maximales Alter in Tagen',
            'Password Generator'                  : 'Passwortgenerator',
            'Password strength'                   : 'Stärke',
            'Include numbers'                     : 'Nummern verwenden',
            'Include special characters'          : 'Sonderzeichen verwenden',
            'User Interface'                      : 'Benutzeroberfläche',
            'Initial section'                     : 'Initialer Bereich',
            'All Passwords'                       : 'Alle Passwörter',
            'Passwords List View'                 : 'Passwörter in der Listenansicht',
            'Set title from'                      : 'Dieses Feld als Titel verwenden',
            'Sort by'                             : 'Sortiere nach',
            'Title field'                         : 'Titel-Feld',
            'Single click action'                 : 'Aktion bei Klick',
            'Double click action'                 : 'Aktion bei Doppelklick',
            'Copy password'                       : 'Kopiere Passwort',
            'Copy username'                       : 'Kopiere Benutzer',
            'Copy website'                        : 'Kopiere Webseite',
            'Show details'                        : 'Zeige Details',
            'Add copy options in menu'            : 'Zeige "Kopieren"-Einträge im Menü',
            'Show username in list view'          : 'Zeige Benutzer in der Listenansicht',
            'Show tags in list view'              : 'Zeige Tags in der Listenansicht',
            'Passwords Detail View'               : 'Detailansicht für Passwörter',
            'Show website preview'                : 'Zeige Webseitenvorschau',
            'Show hidden custom fields'           : 'Zeige versteckte eigene Felder',
            'Search as i type'                    : 'Suche wenn ich tippe',
            'Search everywhere with Enter'        : 'Enter drücken sucht überall',
            'Always show search section'          : 'Zeige die Suche-Sektion immer an',
            'Notifications'                       : 'Benachrichtigungen',
            'Send Emails for'                     : 'Sende E-Mails für',
            'Security issues'                     : 'Sicherheitsrelevante Ereignisse',
            'Passwords shared with me'            : 'Mit mir geteilte Passwörter',
            'Show Notifications for'              : 'Sende Benachrichtigungen für',
            'Other errors'                        : 'Andere Fehler',
            'Danger Zone'                         : 'Gefahrenzone',
            'Reset all settings'                  : 'Einstellungen Zurücksetzen',
            'Reset'                               : 'Zurücksetzen',
            'Delete everything'                   : 'Alles löschen',
            'DELETE EVERYTHING'                   : 'ALLES LÖSCHEN',
            'Account reset requested'             : 'Benutzerkonto zurücksetzen',
            'View'                                : 'Ansicht',
            'Default'                             : 'Standard',
            'Advanced'                            : 'Erweitert',
            'There is nothing here'               : 'Hier ist nichts',
            'Click on "+" to add something'       : 'Drücke auf das "+"-Symbol, um etwas hinzuzufügen',
            'Deleted items will appear here'      : 'Gelöschte Objekte werden hier erscheinen',
            'No passwords were shared with you'   : 'Es sind derzeit keine Passwörter mit dir geteilt',
            'You did not share any passwords'     : 'Du hast derzeit keine Passwörter geteilt',
            'Your favorites will appear here'     : 'Deine Favoriten werden hier erscheinen',
            'Better check the other sections'     : 'Schau besser mal in den anderen Bereichen nach',
            'That\'s probably a good sign'        : 'Das ist wohl besser so',
            'Go to {href}'                        : 'Öffne {href}',
            'Contents'                            : 'Inhalt',
            'Figure {count}: {title}'             : 'Abbildung {count}: {title}',
            'Unable to fetch page: {message}.'    : 'Die Seite kann nicht angezeigt werden: {message}.',
            'Not Found'                           : 'Seite nicht gefunden',
            'Still need help?'                    : 'Noch Fragen?',
            'Ask in our forum!'                   : 'Wir helfen gerne!',
            'Found an error?'                     : 'Fehler gefunden?',
            'Tell us!'                            : 'Sag uns bescheid!',
            'Network error'                       : 'Netzwerkfehler',
            'Unable to load {module}'             : 'Das Modul {module} konnte nicht geladen werden. Möglicherweise ist die Verbindung zu Nextcloud unterbrochen',
            'Sort by name'                        : 'Sortiere nach Name',
            'Sort by modified date'               : 'Sortiere nach zuletzt geändert',
            '{passwords} passwords'               : '{passwords} Passwörter',
            '1 password'                          : '1 Passwort',
            '{folders} folders'                   : '{folders} Ordner',
            '1 folder'                            : '1 Ordner',
            '{tags} tags'                         : '{tags} Tags',
            '1 tag'                               : '1 Tag',
            'Nothing'                             : 'Nichts',
            ' and '                               : ' und ',
            'match'                               : 'passen zu',
            'matches'                             : 'passt zu',
            'Browsers'                            : 'Browser',
            'Official Firefox Client'             : 'Offizieller Firefox Client',
            'Official Chrome Client'              : 'Offizieller Chrome Client',
            'official'                            : 'offiziell',
            'created by {author}'                 : 'erstellt von {author}',
            'sources'                             : 'Quelltext',
            'true'                                : 'ja',
            'false'                               : 'nein',
            'yes'                                 : 'ja',
            'no'                                  : 'nein'
        },
        helpTexts       = {
            'Mark passwords as weak if they are being used for multiple accounts'        : 'Markiert Passwörter als "Unsicher" wenn sie für mehr als ein Konto verwendet werden',
            'Mark passwords as weak if they surpass the specified amount of days'        : 'Markiert Passwörter als "Unsicher" wenn sie das in Tagen angegebene Alter überschreiten',
            'A higher strength results in longer, more complex passwords'                : 'Ein höherer Stärke-Level erzeugt längere und komplexere Passwörter',
            'Show the selected property as title in the list view'                       : 'Zeigt das ausgewählte Attribut in der Listenansicht als Titel an',
            'Sorts passwords by the selected property when sorting by name is selected'  : 'Sortiert Passwörter nach dem angegebenen Attribut anstatt nach dem Namen',
            'Action to perform when clicking on a password in the list view'             : 'Aktion die beim Klick auf ein Passwort ausgeführt wird',
            'Action to perform when double clicking on a password in the list view'      : 'Aktion die beim Doppelklick auf ein Passwort ausgeführt wird',
            'Shows options to copy the password and user name in the menu'               : 'Zeigt die Optionen zum Kopieren von Passwort und Benutzername im Menü',
            'The initial section to be shown when the app is opened'                     : 'Der Bereich der angezeigt wird wenn die App geöffnet wird',
            'Always show the username related to the password in the list view'          : 'Zeigt immer den Benutzernamen für ein Passwort in der Listenansicht an',
            'Show the tags for each password in the list view. Increases loading times'  : 'Zeigt die Tags für jedes Passwort in der Listenansicht. Erhöht die Ladezeit',
            'Show a preview of the associated website in the details. (Not on mobiles)'  : 'Zeigt eine Vorschau der Webseite in den Details. (Nicht auf Mobilgeräten)',
            'Show hidden custom fields in the edit form and detail section of a password': 'Zeigt versteckte selbst definierte Felder im Bearbeiten-Formular und in den Passwortdetails',
            'Start search when a key is pressed anywhere on the page'                    : 'Startet die Suche sobald eine Taste gedrückt wird',
            'Search everywhere when the enter key is pressed in the search box'          : 'Sucht überall wenn die Enter-Taste im Suchfeld gedrückt wird',
            'Always show the section for global search in the navigation'                : 'Zeigt die Sektion für die globale Suche immer in der Navigation an',
            'Sends you e-mails about compromised passwords and other security issues'    : 'Sendet dir E-Mails wenn Passwörter komprommitiert werden oder Sicherheitsprobleme auftreten',
            'Sends you e-mails when other people share passwords with you'               : 'Sendet dir E-Mails wenn andere Passwörter mit dir teilen',
            'Notifies you about compromised passwords and other security issues'         : 'Benachrichtigt dich bei kompromittierten Passwörtern und anderen Sicherheitsproblemen',
            'Notifies you when other people share passwords with you'                    : 'Benachrichtigt dich, wenn andere Passwörter mit dir teilen',
            'Notifies you when a background operation fails'                             : 'Benachrichtigt dich, wenn Hintergrundaufgaben fehlschlagen',
            'Reset all settings on this page to their defaults'                          : 'Alle Einstellungen auf dieser Seite zurücksetzen',
            'This will reset all settings to their defaults. Do you want to continue?'   : 'Dies wird alle Einstellungen auf den Standardwert zurücksetzen. Möchtest du fortfahren?',
            'Start over and delete all configuration, passwords, folders and tags'       : 'Werkseinstellungen wiederherstellen und Passwörter, Ordner und Tags löschen',
            'You have reached the maximum length of 4096 characters'                     : 'Du hast die Maximallänge von 4096 Zeichern erreicht',
            'Invalid trailing quote in quoted field'                                     : 'Das Feldzeichen ist falsch maskiert',
            'We could not find anything for "{query}"'                                   : 'Wir konnten nichts zu "{query}" finden',
            'The file could not be parsed: {errors}'                                     : 'Die Datei konnte nicht verarbeitet werden',
            'You have to wait {seconds} seconds before you can reset your account.'      : 'Du musst {seconds} Sekunden warten bevor du dein Benutzerkonto zurücksetzen kannst.',
            'The page "{page}" could not be fetched from the handbook server.'           : 'Die Seite "{page}" konnte nicht vom Handbuch-Server geholt werden.',
            'Some data is waiting to be synchronized'                                    : 'Einige Daten warten darauf synchronisiert zu werden',
            '{message} in line {line} character {character}.'                            : '{message} in Zeile {line}, Zeichen {character}.',
            '"{label}" has files attached which can not be imported.'                    : 'An "{label}" sind Dateien angehängt die nicht importiert werden können.',
            'The type of "{field}" in "{label}" is unknown and can not be imported.'     : 'Der Typ von "{field}" in "{label}" ist unbekannt und kann nicht importiert werden.',
            'The label of "{field}" in "{label}" exceeds 48 characters and was cut.'     : 'Der Name von "{field}" in "{label}" ist länger als 48 Zeichen und wurde gekürtzt.',
            'The value of "{field}" in "{label}" exceeds 320 characters and was cut.'    : 'Der Inhalt von "{field}" in "{label}" ist länger als 320 Zeichen und wurde gekürtzt.',
            'More information can be found in the log. (Press F12)'                      : 'Mehr Details können im Protokoll gefunden werden. (Drücke F12)',
            'This app uses an api which is no longer supported.'                         : 'Diese App verwendet eine nicht mehr unterstützte API.'
        },
        longTexts       = {
            'The file has the type "{actual}" but "{expected}" is expected. You might have chosen the wrong file or importer.' : 'Die Datei ist vom Type "{actual}" aber "{expected}" wird erwartet. Möglicherweise wurde die falsche Datei oder der falschen Importer dafür gewählt.',
            'Do you want to delete all your settings, passwords, folders and tags?\nIt will NOT be possible to undo this.'     : 'Möchtest du wirklich alle deine Einstellungen, Passwörter, Ordner und Tags löschen und von vorne beginnen?\nDies lässt sich NICHT rückgängig machen.',
            '{service} is known to to generate faulty export files. Consult the manual for help if the file can not be parsed.': '{service} ist bekannt dafür, fehlerhafte Exportdateien zu erstellen. Schau in der Hilfe nach, wenn die Datei nicht verarbeitet werden kann.',
            'Today in 2018, the first version of passwords was published. Thank you for using the app.'                        : 'Heute im Jahr 2018 wurde die erste Version von Passwords veröffentlicht. Danke, dass du die App benutzt.'
        },
        appDescriptions = {
            'Access and manage all your passwords easily within Firefox thanks to our official extension from the Firefox Add-on store.'                                     : 'Dank unserer offiziellen Erweiterung aus dem Firefox Add-on Store kannst du auf alle deine Passwörter einfach von Firefox aus zugreifen und neue hinzufügen.',
            'Our official Chrome extension lets you manage all your passwords from your browser and is available for many Chromium based Browsers from the Chrome Web Store.': 'Unsere offizielle Chrome-Erweiterung ermöglicht es dir, alle deine Passwörter über deinen Browser zu verwalten und ist für viele auf Chromium basierenden Browsern im Chrome Web Store verfügbar.',
            'Finally a modern, fast and lightweight app to access and manage your passwords from your Android device. Get it from Google Play.'                              : 'Endlich eine moderne, schnelle und benutzerfreundliche App für den Zugriff und die Verwaltung deiner Passwörter von deinem Android-Gerät aus. Holen Sie dir von Google Play.',
            'Cloud Password Manager is a password manager that puts you in control. Access all the passwords stored on your Nextcloud from your Android Phone.'              : 'Cloud Password Manager ist ein Passwortmanager, bei dem du die Kontrolle hast. Von deinem Android-Telefon aus kannst du auf die in deiner Nextcloud gespeicherten Passwörter zugreifen.'
        };

    OC.L10N.register(
        'passwords',
        Object.assign(translations, helpTexts, longTexts, appDescriptions),
        'nplurals=2; plural=(n != 1);'
    );
}());