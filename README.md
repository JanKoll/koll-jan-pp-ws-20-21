# Praxisprojekt Wintersemester 2020/2021

## Konzeption und prototypische Entwicklung eines digitalen Guides zur Informationsanreicherung einer Ausstellung für Verhaltensbiologie

### Setup - Entwicklung

**Projekt Klonen und Ionic CLI installieren**
```
$ git clone https://github.com/JanKoll/koll-jan-pp-ws-20-21.git
$ npm install -g @ionic/cli
```

**Code Kompilieren**
```
$ ionic build
```

**Code Entwickeln**
```
$ ionic serve
```
---
### Setup - Xcode
Xcode muss installiert sein. Wenn ein externes Ios Gerät bespielt werden soll muss die Xcode Version die Ios version unterstützen (zB Xcode 12.**1** unterstütz iOS 14.**1**).

**Wenn Code verändert wurde**
```
$ ionic capacitor copy ios
```

**Xcode öffnen**
```
$ ionic capacitor open ios
```

oder

In Xcode Projektordner  `/ios/` öffnen.

Dann gewünschte platform und Developer Account auswählen und Code ausführen.

---

### Setup - Android

Android Studio muss installiert sein.

**Wenn Code verändert wurde**
```
$ ionic capacitor copy android
```

In der Aktuellen Version des GPS Plugins gibt es einen Fehler in `android/capacitor-cordova-android-plugins/src/main/AndroidManifest.xml` dort muss in Zeile 10 die Bedingung true sein.
```
9
10 <uses-feature android:name="android.hardware.location.gps" android:required="true"/>
11
```

**Android Studio öffnen**
```
$ ionic capacitor open android
```

oder

In Android Studio Repoordner  `/android/` öffnen.

Dann gewünschte Plattform auswählen und Code ausführen.
