import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mycompany',
  templateUrl: './header-mycompany.component.html',
  styleUrls: ['./header-mycompany.component.sass']
})
export class HeaderMycompanyComponent implements OnInit {

  onClick =  () => {
    const x = document.getElementById('myTopNav');

    if (x.className === 'top-nav') {
      x.className += ' responsive';
    } else {
      x.className = 'top-nav';
    }
  }

  constructor() {}

  ngOnInit() {}

}
