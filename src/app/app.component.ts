import {Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ModalComponent} from "./modal/modal.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  todayDiet = ''
  list:string[] = ['汉堡', '米村拌饭', '洋葱牛肉饭', '冒菜','超意兴' ,'烤鸭', '铁锅焖面' ,'鸡公煲', '麻辣烫' ,'肉夹馍', '疙瘩汤', '牛腩堡', '把子肉' ,'咖喱饭' ,'重庆小面', '赛百味']

  async selectToday(){
    let now = new Date().getTime()
    let futureDate = now - 3000
    let a = 0
    while(now > futureDate){
      a+=1
      const randomNumber = Math.floor(Math.random()*this.list.length)
      this.todayDiet = this.list[randomNumber]
      futureDate += 100
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
    }
    console.log(a)
  }

  async addListItem(){

  }

}
