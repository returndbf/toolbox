import {Component, Input} from '@angular/core';
import {ModalService} from "./modal.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf
  ],
 template:`
   <main *ngIf="modalService.open">
     <div class="modal-overlay">
   <div class="modal">
     <div class="modal-header">
       <div>{{title}}</div>
       <div style="background: black;width: 10px;height: 10px" (click)="modalService.closeModal()"></div>
     </div>
     <hr/>
     <div class="modal-body">
<!--       插槽-->
       <ng-content></ng-content>
     </div>
     <div class="modal-footer">footer</div>
   </div>
     </div>
 </main>`,
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title = "Modal Title"

  constructor(public modalService: ModalService) {
  }
  click() {
    this.modalService.openModal();
  }

}
