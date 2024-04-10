import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MenuItem } from './../sco-menu/model/menu-item';
import { ScoConstantsService } from './../../services/sco-constants.service';

@Component({
  selector: 'sco-menu-mobile',
  templateUrl: './sco-menu-mobile.component.html',
  styleUrls: ['./sco-menu-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScoMenuMobileComponent implements OnInit, OnChanges {

  @Input() menuItems: MenuItem[] = [];

  @Input() menuButtonTransparent: boolean = true;
  @Input() menuButtonIcon: string = 'fa fa-bars';
  @Input() menuButtonIconColorRevert: boolean = false;

  @Input() showMenuIcons: boolean = true;
  @Input() translatePipe: boolean = false;
  @Input() headerMargin: number = 0;

  @Output() itemClick: EventEmitter<MenuItem>;

  public showMobileMenu: boolean;
  public selectedMenuItem: string
  public submenuItems: MenuItem[];
  public forceCloseMobileMenu: boolean;
  public preventContentClick: boolean;

  public windowHeight: number;

  public _menuItems: MenuItem[];

  constructor(
    public readonly constantsService: ScoConstantsService,
  ) {
    this.itemClick = new EventEmitter<MenuItem>();

    this.showMobileMenu = false;
    this.selectedMenuItem = '';
    this.submenuItems = [];
    this.forceCloseMobileMenu = false;
    this.preventContentClick = false;

    this.windowHeight = window.innerHeight;

    this._menuItems = [];
   }

  ngOnInit(): void {
    if (this.menuItems && this.menuItems.length > 0) {
      this._menuItems = this.menuItems;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes["menuItems"] && changes["menuItems"].currentValue) {
        const items: MenuItem[] = changes["menuItems"].currentValue;

        if (items && items.length > 0) {
          this._menuItems = items;
        }
      }
    }
  }

  onClickMobileMenu($event: boolean) {
    if (!$event || this.showMobileMenu) return;

    this.showMobileMenu = !this.showMobileMenu;
    this.selectedMenuItem = '';
    this.submenuItems = [];
    this.forceCloseMobileMenu = false;
    this.preventContentClick = false;
  }

  onCLickMobileMenuItem($event: MenuItem) {
    if (!$event) return;

    this.selectedMenuItem = $event.text;
    this.submenuItems = [];
    this.preventContentClick = true;

    if ($event.children && $event.children.length > 0) {
      for (const menuItem of $event.children) {
        this.submenuItems.push(menuItem);
      }
    } else {
      this.itemClick.emit($event);
      this.forceCloseMobileMenu = true;
    }
  }

  onCloseMobileMenu() {
    this.showMobileMenu = false;
  }

  onClickMobileMenuContent() {
    if (this.preventContentClick) {
      return;
    }

    this.forceCloseMobileMenu = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }
}
