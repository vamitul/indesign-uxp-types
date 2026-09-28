/**
 * ViewZoomStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ViewZoomStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ViewZoomStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ViewZoomStyle>): boolean;

  /**
   * @internal **WARNING:** `__ViewZoomStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ViewZoomStyle]: never;
}


/**
 * Fills the screen with the page; hides the toolbar, command bar, menu bar, and window controls. 
 */
interface ViewZoomStyle_FULL_SCREEN extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1987733107;
}

/**
 * Magnifies the view to the next preset percentage.
 */
interface ViewZoomStyle_ZOOM_IN extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053990766;
}

/**
 * Reduces the view to the previous preset percentage.
 */
interface ViewZoomStyle_ZOOM_OUT extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2054124916;
}

/**
 * Fits the entire page in the window. 
 */
interface ViewZoomStyle_FIT_PAGE extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053534832;
}

/**
 * Displays the page at 100% magnification.
 */
interface ViewZoomStyle_ACTUAL_SIZE extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053206906;
}

/**
 * Fits the page to the width of the window; may obscure the lower portion of the page.
 */
interface ViewZoomStyle_FIT_WIDTH extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437335;
}

/**
 * Fits the the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
 */
interface ViewZoomStyle_FIT_VISIBLE extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437334;
}

/**
 * Displays one page in the document pane at a time.
 */
interface ViewZoomStyle_SINGLE_PAGE extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1987736432;
}

/**
 * Arranges the pages in a continuous vertical column that is one page wide.
 */
interface ViewZoomStyle_ONE_COLUMN extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1987735395;
}

/**
 * Arranges the pages side by side in a continuous vertical column that is two pages wide.
 */
interface ViewZoomStyle_TWO_COLUMN extends ViewZoomStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1987736675;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The zoom level and page layout a view opens with — full screen, a zoom step, a fit mode, a
 * specific magnification, or single/continuous-column paging.
 */
export declare namespace ViewZoomStyle {
/**
 * Fills the screen with the page; hides the toolbar, command bar, menu bar, and window controls. 
 */
type FULL_SCREEN = ViewZoomStyle_FULL_SCREEN;

/**
 * Magnifies the view to the next preset percentage.
 */
type ZOOM_IN = ViewZoomStyle_ZOOM_IN;

/**
 * Reduces the view to the previous preset percentage.
 */
type ZOOM_OUT = ViewZoomStyle_ZOOM_OUT;

/**
 * Fits the entire page in the window. 
 */
type FIT_PAGE = ViewZoomStyle_FIT_PAGE;

/**
 * Displays the page at 100% magnification.
 */
type ACTUAL_SIZE = ViewZoomStyle_ACTUAL_SIZE;

/**
 * Fits the page to the width of the window; may obscure the lower portion of the page.
 */
type FIT_WIDTH = ViewZoomStyle_FIT_WIDTH;

/**
 * Fits the the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
 */
type FIT_VISIBLE = ViewZoomStyle_FIT_VISIBLE;

/**
 * Displays one page in the document pane at a time.
 */
type SINGLE_PAGE = ViewZoomStyle_SINGLE_PAGE;

/**
 * Arranges the pages in a continuous vertical column that is one page wide.
 */
type ONE_COLUMN = ViewZoomStyle_ONE_COLUMN;

/**
 * Arranges the pages side by side in a continuous vertical column that is two pages wide.
 */
type TWO_COLUMN = ViewZoomStyle_TWO_COLUMN;

}
/**
 * The zoom level and page layout a view opens with — full screen, a zoom step, a fit mode, a
 * specific magnification, or single/continuous-column paging.
 */
export declare const ViewZoomStyle: typeof Enumeration & {

  /**
   * Fills the screen with the page; hides the toolbar, command bar, menu bar, and window controls. 
   */
  readonly FULL_SCREEN: ViewZoomStyle_FULL_SCREEN;
  /**
   * Fills the screen with the page; hides the toolbar, command bar, menu bar, and window controls. 
   */
  readonly fullScreen: ViewZoomStyle_FULL_SCREEN;
  /**
   * Fills the screen with the page; hides the toolbar, command bar, menu bar, and window controls. 
   */
  readonly fullscreen: ViewZoomStyle_FULL_SCREEN;

  /**
   * Magnifies the view to the next preset percentage.
   */
  readonly ZOOM_IN: ViewZoomStyle_ZOOM_IN;
  /**
   * Magnifies the view to the next preset percentage.
   */
  readonly zoomIn: ViewZoomStyle_ZOOM_IN;
  /**
   * Magnifies the view to the next preset percentage.
   */
  readonly zoomin: ViewZoomStyle_ZOOM_IN;

  /**
   * Reduces the view to the previous preset percentage.
   */
  readonly ZOOM_OUT: ViewZoomStyle_ZOOM_OUT;
  /**
   * Reduces the view to the previous preset percentage.
   */
  readonly zoomOut: ViewZoomStyle_ZOOM_OUT;
  /**
   * Reduces the view to the previous preset percentage.
   */
  readonly zoomout: ViewZoomStyle_ZOOM_OUT;

  /**
   * Fits the entire page in the window. 
   */
  readonly FIT_PAGE: ViewZoomStyle_FIT_PAGE;
  /**
   * Fits the entire page in the window. 
   */
  readonly fitPage: ViewZoomStyle_FIT_PAGE;
  /**
   * Fits the entire page in the window. 
   */
  readonly fitpage: ViewZoomStyle_FIT_PAGE;

  /**
   * Displays the page at 100% magnification.
   */
  readonly ACTUAL_SIZE: ViewZoomStyle_ACTUAL_SIZE;
  /**
   * Displays the page at 100% magnification.
   */
  readonly actualSize: ViewZoomStyle_ACTUAL_SIZE;
  /**
   * Displays the page at 100% magnification.
   */
  readonly actualsize: ViewZoomStyle_ACTUAL_SIZE;

  /**
   * Fits the page to the width of the window; may obscure the lower portion of the page.
   */
  readonly FIT_WIDTH: ViewZoomStyle_FIT_WIDTH;
  /**
   * Fits the page to the width of the window; may obscure the lower portion of the page.
   */
  readonly fitWidth: ViewZoomStyle_FIT_WIDTH;
  /**
   * Fits the page to the width of the window; may obscure the lower portion of the page.
   */
  readonly fitwidth: ViewZoomStyle_FIT_WIDTH;

  /**
   * Fits the the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
   */
  readonly FIT_VISIBLE: ViewZoomStyle_FIT_VISIBLE;
  /**
   * Fits the the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
   */
  readonly fitVisible: ViewZoomStyle_FIT_VISIBLE;
  /**
   * Fits the the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
   */
  readonly fitvisible: ViewZoomStyle_FIT_VISIBLE;

  /**
   * Displays one page in the document pane at a time.
   */
  readonly SINGLE_PAGE: ViewZoomStyle_SINGLE_PAGE;
  /**
   * Displays one page in the document pane at a time.
   */
  readonly singlePage: ViewZoomStyle_SINGLE_PAGE;
  /**
   * Displays one page in the document pane at a time.
   */
  readonly singlepage: ViewZoomStyle_SINGLE_PAGE;

  /**
   * Arranges the pages in a continuous vertical column that is one page wide.
   */
  readonly ONE_COLUMN: ViewZoomStyle_ONE_COLUMN;
  /**
   * Arranges the pages in a continuous vertical column that is one page wide.
   */
  readonly oneColumn: ViewZoomStyle_ONE_COLUMN;
  /**
   * Arranges the pages in a continuous vertical column that is one page wide.
   */
  readonly onecolumn: ViewZoomStyle_ONE_COLUMN;

  /**
   * Arranges the pages side by side in a continuous vertical column that is two pages wide.
   */
  readonly TWO_COLUMN: ViewZoomStyle_TWO_COLUMN;
  /**
   * Arranges the pages side by side in a continuous vertical column that is two pages wide.
   */
  readonly twoColumn: ViewZoomStyle_TWO_COLUMN;
  /**
   * Arranges the pages side by side in a continuous vertical column that is two pages wide.
   */
  readonly twocolumn: ViewZoomStyle_TWO_COLUMN;

}
