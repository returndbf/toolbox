import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ModalService{
  constructor() {
  }
  open :boolean = false
  openModal() {
    this.open = true
  }
  closeModal() {
    this.open = false
  }
}
