import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from './../../../../projects/sco-angular-components/src/components/sco-menu/model/menu-item';
import { ScoConstantsService } from './../../../../projects/sco-angular-components/src/services/sco-constants.service';
import { ScoDisplayResize } from './../../../../projects/sco-angular-components/src/components/sco-app/model/sco-display-resize';

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
  selector: 'app-showcase-sco-app',
  templateUrl: './showcase-sco-app.component.html',
  styleUrls: ['./showcase-sco-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowcaseScoAppComponent implements OnInit {

  public menuItems: MenuItem[];

  constructor(public readonly constantsService: ScoConstantsService) { }

  ngOnInit() {
    this.menuItems = EXAMPLE_MENU;
  }

  onClickMenuItem($event: MenuItem) {

  }

  onCLickLogo($event: boolean) {
    if (!$event) return;
  }

  onDisplayResize($event: ScoDisplayResize) {
    
  }
}
