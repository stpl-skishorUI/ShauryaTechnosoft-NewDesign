import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss']
})
export class Home3Component {
  isShow: boolean | undefined;
  topPosToStartShowing = 100;
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
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
