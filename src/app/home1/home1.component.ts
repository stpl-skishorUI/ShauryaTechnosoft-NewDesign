import { Component, HostListener, ElementRef } from '@angular/core';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component {
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
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

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
