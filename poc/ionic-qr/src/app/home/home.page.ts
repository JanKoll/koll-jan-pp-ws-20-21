import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanSub: any;
  qrText: string;

  constructor(
    public platform: Platform,
    private qrScanner: QRScanner,
    private route: Router,
    public alertController: AlertController,
  ) {
    this.platform.backButton.subscribeWithPriority(0, () => {

      // Android Physical Back Button???
      // document.getElementsByTagName('body')[0].style.opacity = '1';
      // Use Class to Toggle Backgound Visibility
      this.scanSub = document.getElementsByTagName('body')[0].classList.toggle("qractive");

      this.qrScanner.destroy();

    });
  }

  async accessCamera() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Kamera deaktiviert',
      message: 'Wenn du einen QR-Code Scannen möchtest, erlaube bitte den Kamera zugriff in den Einstellungen.',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Einstellungen',
          handler: () => {
            this.qrScanner.openSettings()
          }
        }
      ]
    });

    await alert.present();
  }

  async undefinedQrCode() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Fehler',
      message: 'Der QR-Code ist entweder nicht leserlich oder gehört nicht zur Tour.',
      buttons: ['Okay']
    });

    await alert.present();
  }

  startScanning() {
  // Optionally request the permission early
    this.qrScanner.prepare().
      then((status: QRScannerStatus) => {

        if (status.authorized) {
          this.qrScanner.show();
          // this.scanSub = document.getElementsByTagName('body')[0].style.opacity = '.5';
          // Use Class to Toggle Backgound Visibility
          this.scanSub = document.getElementsByTagName('body')[0].classList.toggle("qractive");

          // debugger
          this.scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {
              // document.getElementsByTagName('body')[0].style.opacity = '1';
              // Use Class to Toggle Backgound Visibility
              this.scanSub = document.getElementsByTagName('body')[0].classList.toggle("qractive");

              // Route to Page with textFound var

                // Array contains all possible routings
                var routs = [];
                this.route.config.forEach(elements => {
                  routs.push(elements.path)
                });

                // Check if QR-Code is valid
                if (routs.includes(textFound)) {
                  this.route.navigate(['/' + textFound]);
                  this.qrScanner.destroy();
                } else {
                  this.undefinedQrCode();
                  this.qrScanner.destroy();
                }
            }, (err) => {
              alert(JSON.stringify(err));
            });

        } else if (status.denied) {
          // The video preview will remain black, and scanning is disabled. We can
          // try to ask the user to change their mind, but we'll have to send them
          // to their device settings with `QRScanner.openSettings()`.
        } else {
          // we didn't get permission, but we didn't get permanently denied. (On
          // Android, a denial isn't permanent unless the user checks the "Don't
          // ask again" box.) We can ask again at the next relevant opportunity.
        }
      })
      .catch((e: any) => {
        console.log('Error is', e);
        this.accessCamera();
      });
  }

  stopScanning() {
    // document.getElementsByTagName('body')[0].style.opacity = '1';
    // Use Class to Toggle Backgound Visibility
    this.scanSub = document.getElementsByTagName('body')[0].classList.toggle("qractive");
    this.qrScanner.destroy();
  }
}
