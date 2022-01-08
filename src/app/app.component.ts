import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <p>
      click on the <i>show</i> button below to see the
      <i>ExpressionChangedAfterItHasBeenCheckedError</i> error in the console
      <br>
      <sub>PS: toggling the showing with the button will trigger the error every time</sub>
    </p>
    <br>
    <button (click)="show = !show">{{ show ? 'hide' : 'show' }}</button>
    <main *ngIf="show">
      <p>route data text: {{ getRouteDataText(outlet) }}</p>
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
})
export class AppComponent {
  show = false;

  getRouteDataText(outlet: RouterOutlet){
    return outlet?.activatedRouteData?.['text'];
  }
}
