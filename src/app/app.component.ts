import { Component } from '@angular/core';
import { LCDClient  } from '@terra-money/terra.js';

const terra = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'terra-frontend-app';

  chainID = 'Not connected';
  url = 'Not connected';
  gasPrices = 'Not connected';

  async  test_connection() {
    this.chainID = await terra.config.chainID;
    this.url = await terra.config.URL;
    this.gasPrices = await JSON.stringify(terra.config.gasPrices);
  }
}
