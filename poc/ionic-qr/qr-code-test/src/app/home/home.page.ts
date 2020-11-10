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

  constructor(
    public platform: Platform,
    private qrScanner: QRScanner
  ) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName('body')[0].style.opacity = '1';
      this.scanSub.unsubscribe();
    });
  }

  startScanning() {
    // Optionally request the permission early
    this.qrScanner.prepare().
      then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          this.scanSub = document.getElementsByTagName('body')[0].style.opacity = '0';
          debugger
          this.scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {
              document.getElementsByTagName('body')[0].style.opacity = '1';
              this.qrScanner.hide();
              this.scanSub.unsubscribe();

              this.qrText = textFound;
            }, (err) => {
              alert(JSON.stringify(err));
            });

        } else if (status.denied) {
        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}


// import { Component } from '@angular/core';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {
//
//   constructor(private qrScanner: QRScanner) { }
//
// }
//
// // Optionally request the permission early
// this.qrScanner.prepare()
//   .then((status: QRScannerStatus) => {
//      if (status.authorized) {
//        // camera permission was granted
//
//
//        // start scanning
//        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
//          console.log('Scanned something', text);
//
//          this.qrScanner.hide(); // hide camera preview
//          scanSub.unsubscribe(); // stop scanning
//        });
//
//      } else if (status.denied) {
//        // camera permission was permanently denied
//        // you must use QRScanner.openSettings() method to guide the user to the settings page
//        // then they can grant the permission from there
//      } else {
//        // permission was denied, but not permanently. You can ask for permission again at a later time.
//      }
//   })
//   .catch((e: any) => console.log('Error is', e));