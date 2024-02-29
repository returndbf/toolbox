import {Component, Input} from '@angular/core';
import {ToastService} from "./toast.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    NgIf
  ],
  template:`
  <main>
    <div class="toast" >
      <div class="toast-msg">{{message}}</div>
    </div>
  </main>
  `,
   styleUrl: './toast.component.css'
})
export class ToastComponent {
    message:string;

  constructor(protected toastService:ToastService) {
  }

}
