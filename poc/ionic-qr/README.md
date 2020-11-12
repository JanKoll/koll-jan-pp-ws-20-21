## QR Code auslesen mit Ionic

### Platform Installationen (IOS/Android)

**Ios** (Xcode)
Dokumentation zur Installation [hier](https://ionicframework.com/docs/developing/ios).

**Android** (Android Studio)
Dokumentation zur Installation [hier](https://ionicframework.com/docs/developing/android).

Notiz:
Unter Android muss für das __ActivityCompat__ Modul die AndroidX version verwendet werden. Dazu muss in `src/main/java/com/bitpay/cordova/qrscanner/QRScanner.java` folgendes verändert werden.
```
// import android.support.v4.app.ActivityCompat;
import androidx.core.app.ActivityCompat; // <- AndroidX Libary
```

### Ionic Installieren

1. Ionic auf Gerät installieren
`npm install -g @ionic/cli`

2. Um die App zu starten muss im Verzeichnis der Befehl `ionic serve` ausgeführt werden.

<!--
### Projekt in Xcode ausführen

Nach der Ionic Installation muss im Projektordner der Befehl `ionic capacitor copy ios` ausgeführt werden um das Projekt in Xcode zu Clonen. Dann kann es mit `ionic capacitor open ios` in Xcode geöffnet werden (alternativ in Xcode zu Verzeichnis navigieren). -->
