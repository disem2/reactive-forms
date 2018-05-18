import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/';
import {ClickedNavButtonInterface} from '../form.interface';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class NavigationService {

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
  ) { }

  private navButtonClick$ = new Subject<ClickedNavButtonInterface>();
  navButtonClick = this.navButtonClick$.asObservable();

  clickedNavButton(navUrl, currentUrl) {
    this.navButtonClick$.next({
      navUrl,
      currentUrl
    });
  }

  preparationAndDisplayFormData (url, formControlValue) {
    setTimeout(() => {
      const formData = formControlValue;
      if ((this.validate(formData))) {
        console.log(formData);
        this.goTo(url);
      } else {
        this.openSnackBar('Form is not full!', 'Сontinue filling');
      }
    }, 1000);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }

  goTo(url) {
    this.router.navigate([url]);
  }

  private validate(formData): boolean {
    return true;
    // return Math.random() > 0.5;
  }

}
