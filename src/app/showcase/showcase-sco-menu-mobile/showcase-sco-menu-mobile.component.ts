import { Component, OnInit } from '@angular/core';
import { MenuItem } from './../../../../projects/sco-angular-components/src/components/sco-menu/model/menu-item';

export const EXAMPLE_MENU: MenuItem[] = [
  {
    icon: "fa fa-caret-down",
    text: "Gest. usuarios",
    children: [
      {
        text: "Usuarios",
        route: "users",
        icon: "fa fa-user"
      },
      {
        text: "Roles",
        route: "roles",
        icon: "fa fa-user"
      },
      {
        text: "Permisos",
        route: "permissions",
        icon: "fa fa-user"
      }
    ]
  },
  {
    icon: "fa fa-gear",
    text: "Opciones",
    route: "/options",
  },
  {
    icon: "fa fa-sign-out",
    text: "Cerrar sesión",
    route: "/auth/logout",
  },
];

@Component({
  selector: 'app-showcase-sco-menu-mobile',
  templateUrl: './showcase-sco-menu-mobile.component.html',
  styleUrls: ['./showcase-sco-menu-mobile.component.scss']
})
export class ShowcaseScoMenuMobileComponent implements OnInit {

  public menuItems: MenuItem[];

  constructor() { 
    this.menuItems = [];
  }

  ngOnInit() {
    this.menuItems = EXAMPLE_MENU;
  }

  onClickMenuMobileItem($event: MenuItem) {

  }

}
