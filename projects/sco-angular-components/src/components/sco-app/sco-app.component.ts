import { MenuItem } from './../sco-menu/model/menu-item';
import { ScoResolutionService } from './../../services/sco-resolution/sco-resolution.service';
import { ScoThemeService } from './../../services/sco-theme.service';
import { ScoSpinnerService } from './../sco-spinner/sco-spinner.service';
import { ScoConstantsService } from './../../services/sco-constants.service';
import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ScoDisplayResize } from './model/sco-display-resize';

@Component({
  selector: 'sco-app',
  templateUrl: './sco-app.component.html',
  styleUrls: ['./sco-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScoAppComponent implements OnInit, OnChanges {

  @Input() headerFixed: boolean = false;
  @Input() translatePipe: boolean = false;
  @Input() showMenus: boolean = true;
  @Input() alwaysMenuMobile: boolean = false;

  @Input() logoPath: string = './../../../resources/img/sco-logo.png';
  @Input() logoWidth: number = 80;
  @Input() logoHeight: number = 40;

  @Input() maxMenuItems: number = 6;
  @Input() menuItems: MenuItem[] = [];
  @Input() menuBorderRadius: boolean = true;

  @Input() contentPadding: number = 0;
  @Input() contentBackgroundColor: string = 'lightgray';

  @Input() toastEnabled: boolean = true;
  @Input() toastOrientation: string = this.constantsService.ScoToastConstants.ORIENTATION_TOP_RIGHT;
  @Input() toastBlock: boolean = false;

  @Input() spinnerEnabled: boolean = true;
  @Input() spinnerEmbedded: boolean = false;
  @Input() spinnerImgPath: string = './../../../resources/img/spinner.gif';

  @Input() menuMobileTransparent: boolean = true;
  @Input() menuMobileIcon: string = 'fa fa-bars';
  @Input() menuMobileColorRevert: boolean = true;
  @Input() menuMobileShowIcons: boolean = true;
  @Input() menuMobileHeaderMargin: number = 60;

  @Output() logoClick: EventEmitter<boolean>;
  @Output() itemClick: EventEmitter<MenuItem>;
  @Output() displayResize: EventEmitter<ScoDisplayResize>;

  public _viewMode: string;
  public _alwaysMenuMobile: boolean;

  constructor(
    public readonly constantsService: ScoConstantsService,
    public readonly spinnerService: ScoSpinnerService,
    public readonly themeService: ScoThemeService,
    public readonly resolutionService: ScoResolutionService,
  ) { 
    this.logoClick = new EventEmitter<boolean>();
    this.itemClick = new EventEmitter<MenuItem>();
    this.displayResize = new EventEmitter<ScoDisplayResize>();
  }

  ngOnInit(): void {
    this._viewMode = this.resolutionService.size;
    this.displayResize.emit({ width: window.innerWidth, height: window.innerHeight, mode: this._viewMode })

    this._alwaysMenuMobile = false;
    if (this.menuItems && this.menuItems.length > 0 && this.menuItems.length > this.maxMenuItems) {
      this._alwaysMenuMobile = true;
    }

    if (this.alwaysMenuMobile) {
      this._alwaysMenuMobile = true;
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes["maxMenuItems"] && changes["maxMenuItems"].currentValue) { 
        this.maxMenuItems = changes["maxMenuItems"].currentValue;
      }

      if (changes["menuItems"] && changes["menuItems"].currentValue) {
        const items: MenuItem[] = changes["menuItems"].currentValue;

        if (items && items.length > 0 && items.length > this.maxMenuItems) {
          this._alwaysMenuMobile = true;
        }

        if (this.alwaysMenuMobile) {
          this._alwaysMenuMobile = true;
        }
      }

      if (changes['alwaysMenuMobile'] && changes['alwaysMenuMobile'] != undefined) {
        this._alwaysMenuMobile = changes['alwaysMenuMobile'].currentValue;
      }
    }
  }

  showMenu() {
    if (this._viewMode != this.constantsService.ScoResolutionConstants.WEB) {
      return true;
    }

    if (this._alwaysMenuMobile) {
      return true;
    }
  
    return false;
  }

  showMenuMobile() {
    if (this._viewMode == this.constantsService.ScoResolutionConstants.WEB) {
      if (this._alwaysMenuMobile) {
        return false;
      }

      return true;
    }
    
    return false;
  }

  onClickMenuItem($event: MenuItem) {
    this.itemClick.emit($event);
  }

  onCLickLogo() {
    this.logoClick.emit(true);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this._viewMode = this.resolutionService.setSize(event.target.innerWidth);
    this.displayResize.emit({ width: event.target.innerWidth, height: event.target.innerHeight, mode: this._viewMode })
  }
}
