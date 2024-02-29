import {Injectable} from "@angular/core";
import {Overlay, OverlayConfig, OverlayRef} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {ToastComponent} from "./toast.component";

@Injectable({
  providedIn: 'root'
})
export class ToastService{
  constructor(private overlay: Overlay) {
  }
  show :boolean = false
  message:string=''
overlayRef: OverlayRef | null;

  showToast(duration=5000) {
    this.show = true
    setTimeout(() => {
      this.show = false
    }, duration);
  }
  // closeToast() {
  //   this.show = false
  // }
  createToast(message:string,duration = 5000){
    // this.message = message
    // this.showToast(duration)
    const overlayRef = this.overlay.create({
      hasBackdrop: false,
      // positionStrategy: this.overlay.position().flexibleConnectedTo(document.getElementsByTagName('app-root')[0])
       positionStrategy: this.overlay.position().global()
    });

    const toastPortal = new ComponentPortal(ToastComponent);
    const componentRef = overlayRef.attach(toastPortal);
    componentRef.instance.message = message;
    //
    // setTimeout(() => {
    //   overlayRef.detach();
    // }, 3000); // Toast 持续时间
  }

  closeToast(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}
