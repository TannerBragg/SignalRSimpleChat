import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SignalRModule } from '@dharapvj/ngx-signalr';
import { SignalRConfiguration } from '@dharapvj/ngx-signalr';

import { AppComponent } from './app.component';


// v2.0.0
export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'ChatHub';
  // c.qs = { user: 'donald' };
  c.url = 'http://localhost:56422/signalr';
  c.logging = true;
  return c;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SignalRModule.forRoot(createConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
