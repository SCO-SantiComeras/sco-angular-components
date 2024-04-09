import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MenuItem } from './model/menu-item';

@Component({
  selector: 'sco-menu',
  templateUrl: './sco-menu.component.html',
  styleUrls: ['./sco-menu.component.scss']
})
export class ScoMenuComponent implements OnInit, OnChanges {

  @Input() menuItems: MenuItem[] = [];
  @Input() borderRadius: boolean = true;
  @Input() translatePipe: boolean = false;

  @Output() itemClick: EventEmitter<MenuItem>;

  public _showMenu: boolean;
  public _activeHover: boolean;
  public _subMenuItems: MenuItem[];
  public _selectedSubTitle: string;

  constructor() { 
    this.itemClick = new EventEmitter<MenuItem>();

    this._showMenu = false;
    this._activeHover = false;
    this._subMenuItems = [];
    this._selectedSubTitle = '';
  }

  ngOnInit() {
    if (this.menuItems && this.menuItems.length > 0) {
      this._showMenu = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes["menuItems"] && changes["menuItems"].currentValue) {
        const items: MenuItem[] = changes["menuItems"].currentValue;

        if (items && items.length > 0) {
          this.menuItems = items;
          this._showMenu = true;
        }
      }
    }
  }

   onMenuItemClick(item: MenuItem) {
    this.onLeftMenu();
    this.itemClick.emit(item);
  }

  onMenuItemHover(item: MenuItem) {
    this.onLeftMenu();
    this._activeHover = true;

    if (!item.children)
      return;

    for (const menuItem of item.children) {
      this._subMenuItems.push({
        text: menuItem.text,
        route: menuItem.route,
        icon: menuItem.icon
      });
    }

    if (this._subMenuItems && this._subMenuItems.length > 0) {
      this._selectedSubTitle = item.text;
    }
  }

  onLeftMenu() {
    this._selectedSubTitle = "";
    this._subMenuItems = [];
    this._activeHover = false;
  }
}
