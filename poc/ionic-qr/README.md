## QR Code auslesen mit Ionic

### Installationen (IOS Platform)

1. Xcode command line tools installieren
`xcode-select --install`

2. 2 In Xcode Anmelden und IOS Simulator Herunterladen und zu Simulierendes Gerät auswählen.

3. Cordova Aufsetzen
`npm install -g ios-sim`
`brew install ios-deploy`


### Ionic Installieren

1. Ionic auf Gerät installieren
`npm install -g @ionic/cli`

2. Um die App zu starten muss im Verzeichnis der Befehl `ionic serve` ausgeführt werden.


### Projekt in Xcode ausführen

Nach der Ionic Installation muss im Projektordner der Befehl `ionic capacitor open ios` ausgeführt werden und in Xcode die Passenden Zertifikate für den Appstore und den Benutzer hinterlegt werden um es auszurollen.
