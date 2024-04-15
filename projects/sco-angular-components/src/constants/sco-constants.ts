export class ScoToastConstants {
    static TYPE_INFO: string = 'info';
    static TYPE_WARNING: string = 'warning';
    static TYPE_ERROR: string = 'danger';
    static TYPE_SUCCESS: string = 'success';

    static TIMEOUT: number = 5000; // 5 segundos

    static ORIENTATION_TOP_RIGHT: string = 'top-right';
    static ORIENTATION_TOP_LEFT: string = 'top-left';
    static ORIENTATION_BOTTOM_RIGHT: string = 'bottom-right';
    static ORIENTATION_BOTTOM_LEFT: string = 'bottom-left';

    static MAX_TOAST: number = 5;
}

export class ScoBlockListConstants {
    static PAGINATION_DEFAULT: number = 5;
}

export class ScoResolutionConstants {
    static MOBILE: string = 'mobile';
    static TABLET: string = 'tablet';
    static WEB: string = 'web';

    static MOBILE_MIN: number = 0;
    static MOBILE_MAX: number = 568;

    static TABLET_MIN: number = 568;
    static TABLET_MAX: number = 1050;

    static WEB_MIN: number = 1050;
    static WEB_MAX: number = 9999;
}

export class ScoAccordionConstants {
    static OPEN: string = 'open';
    static CLOSE: string = 'close';
}

export class ScoModalTypeConstants {
    static CONFIRM: string = "confirm";
    static INFO: string = "info";
    static NO_BUTTONS: string = "no-buttons";

    static SIZE_UNITY_PIXELS: string = 'px';
    static SIZE_UNITY_PERCENTAGE: string = 'percentage';
}

export class ScoThemeConstants {
    static THEME_DEFAULT: string = "theme-default";
    static THEME_DARK: string = "theme-dark";
    static THEME_BLUE: string = "theme-blue";
}

export class ScoInputTypeConstants {
    static TEXT: string = "text";
    static PASSWORD: string = "password";
    static NUMBER: string = "number";
    static EMAIL: string = "email";
}

export class ScoTableConstants {
    static PAGINATION_DEFAULT: number = 5;
}

export class ScoButtonConstants {
    static MODE_DEFAULT: string = 'default';
    static MODE_SAVE: string = 'save';
    static MODE_DANGER: string = 'danger';
    static MODE_INFO: string = 'info';
    static MODE_WARNING: string = 'warning';
    static MODE_DISABLED: string = 'disabled';
    static MODE_LINK: string = 'link';
    static MODE_ICON: string = 'icon';

    static TYPE_BUTTON: string = 'button';
    static TYPE_SUBMIT: string = 'submit';

    static SIZE_LARGE: string = 'large';
    static SIZE_MEDIUM: string = 'medium';
    static SIZE_SMALL: string = 'small';

    static FLOAT_POSITION_LEFT_BOTTOM: string = 'left_bottom';
    static FLOAT_POSITION_CENTER_BOTTOM: string = 'center_bottom';
    static FLOAT_POSITION_RIGHT_BOTTOM: string = 'right_bottom';
}

export class ScoBadgeConstants {
    static INFO: string = 'info';
    static WARNING: string = 'warning';
    static DANGER: string = 'danger';
    static SUCCESS: string = 'success';

    static SIZE_LARGE: string = 'large';
    static SIZE_MEDIUM: string = 'medium';
    static SIZE_SMALL: string = 'small';
}

export class ScoGridConstants {
    static STATUS_EMPTY: string = 'empty';
    static STATUS_FREE: string = 'free';
    static STATUS_OCCUPIED: string = 'occupied';
    static STATUS_RESERVED: string = 'reserved';
}

export class ScoFormCrudConstants {
    static SHOW_TABLE: string = 'table';
    static SHOW_BLOCK_LIST: string = 'block-list';
    static SHOW_FORM: string = 'form';

    static MODE_NEW: string = 'new';
    static MODE_UPDATE: string = 'update';

    static FORM_BUTTONS_POSITION_LEFT: string = 'left';
    static FORM_BUTTONS_POSITION_CENTER: string = 'center';
    static FORM_BUTTONS_POSITION_RIGHT: string = 'right';

    static UPDATE_ACTION: string = 'update';
    static DELETE_ACTION: string = 'delete';
}

export class ScoCalendarConstants {
    static LOCALE_ES: string = 'es';
    static LOCALE_EN: string = 'en';

    static SELECTION_SINGLE: string = 'single';
    static SELECTION_MULTIPLE: string = 'multiple';
    static SELECTION_RANGE: string = 'range';
}

export class ScoGraphicsConstants {
    static TYPE_LINE: string = 'line';
    static TYPE_PIE: string = 'pie';
    static TYPE_BAR: string = 'bar';
    static TYPE_DOUGHNUT: string = 'doughnut';
    static TYPE_POLAR_AREA: string = 'polarArea';
    static TYPE_RADAR: string = 'radar';
}

export class ScoTranslateConstants {
    static DEFAULT_LANGUAGE: string = 'en';
    static LANGUAGES: any = {
        ES: 'es',
        EN: 'en'
    };
}

export class ScoPdfViewerConstants {
    static HEADER_POSITION_LEFT: string = 'text-left';
    static HEADER_POSITION_CENTER: string = 'text-center';
    static HEADER_POSITION_RIGHT: string = 'text-right';

    static ZOOM_STEP: number = 0.10;
    static DEFAULT_ZOOM: number = 0.5;

    static DEFAULT_FILE_NAME: string = 'sco-pdf-viewer.pdf';
}