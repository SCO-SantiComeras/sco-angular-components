import { MenuItem } from './../../../../projects/sco-angular-components/src/components/sco-menu/model/menu-item';
import { Component, OnInit } from '@angular/core';

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
  selector: 'app-showcase-sco-menu',
  templateUrl: './showcase-sco-menu.component.html',
  styleUrls: ['./showcase-sco-menu.component.scss']
})
export class ShowcaseScoMenuComponent implements OnInit {

  public menuItems: MenuItem[];
  public borderRadius: boolean;

  constructor() { 
    this.menuItems = [];
    this.borderRadius = false;
  }

  ngOnInit() {
    this.menuItems = EXAMPLE_MENU;
  }

}
