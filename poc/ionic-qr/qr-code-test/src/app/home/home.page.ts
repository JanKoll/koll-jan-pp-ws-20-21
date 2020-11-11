import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanSub: any;
  qrText: string;
  error: boolean = false;

  constructor(
    public platform: Platform,
    private qrScanner: QRScanner,
    private route: Router,
  ) {
    this.platform.backButton.subscribeWithPriority(0, () => {

      // Android Physical Back Button???
      // document.getElementsByTagName('body')[0].style.opacity = '1';
      // Use Class to Toggle Backgound Visibility
      this.scanSub = document.getElementsByTagName('body')[0].classList.toggle("qractive");

      this.qrScanner.destroy();


    });
  }

  toPage(name) {
    this.route.navigate(['/' + name]);
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

              // this.qrText = textFound;

              // Route to Page with textFound var
              var array = [];

              this.route.config.forEach(elements => {
                array.push(elements.path)
              });

              if (array.includes(textFound)) {
                this.route.navigate(['/' + textFound]);
                console.log(this.error);
                this.qrScanner.destroy();
              } else {
                this.error = true
                console.log(this.error);

                this.qrScanner.destroy();

                // Send errormessage
              }




            }, (err) => {
              alert(JSON.stringify(err));
            });

        } else if (status.denied) {
          // The video preview will remain black, and scanning is disabled. We can
          // try to ask the user to change their mind, but we'll have to send them
          // to their device settings with `QRScanner.openSettings()`.

          confirm("Would you like to enable QR code scanning? You can allow camera access in your settings.");

        } else {
          // we didn't get permission, but we didn't get permanently denied. (On
          // Android, a denial isn't permanent unless the user checks the "Don't
          // ask again" box.) We can ask again at the next relevant opportunity.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  stopScanning() {
    // document.getElementsByTagName('body')[0].style.opacity = '1';
    // Use Class to Toggle Backgound Visibility
    this.scanSub = document.getElementsByTagName('body')[0].classList.toggle("qractive");
    this.qrScanner.destroy();
  }
}
