import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
 template:`
   <main>
     <div class="modal-overlay">
   <div class="modal">
     <div class="modal-header">{{title }}</div>
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
}
