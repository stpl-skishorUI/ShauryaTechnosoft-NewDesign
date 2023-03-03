import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component {
  defaultClassNavbarScrollFlag:boolean =false;
  
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    
    if (!this.defaultClassNavbarScrollFlag) {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-scroll');
      } else {
        element.classList.remove('navbar-scroll');
      }
    }
  }
}
