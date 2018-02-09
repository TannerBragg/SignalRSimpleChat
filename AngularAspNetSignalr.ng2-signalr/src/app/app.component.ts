import { Component } from '@angular/core';
import { SignalR } from '@dharapvj/ngx-signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _signalR: SignalR) {
    this.connect();
  }

  connect() {
    this._signalR.connect().then((c) => {
      console.warn('SignalR Connected!');
    });
  }
}
