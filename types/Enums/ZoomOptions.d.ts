/**
 * ZoomOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ZoomOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ZoomOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ZoomOptions>): boolean;

  /**
   * @internal **WARNING:** `__ZoomOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ZoomOptions]: never;
}


/**
 * Magnifies the view to the next preset percentage. 
 */
interface ZoomOptions_ZOOM_IN extends ZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053990766;
}

/**
 * Reduces the view to the next preset percentage.
 */
interface ZoomOptions_ZOOM_OUT extends ZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2054124916;
}

/**
 * Centers the active spread in the window.
 */
interface ZoomOptions_FIT_SPREAD extends ZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053534835;
}

/**
 * Centers the active page in the window.
 */
interface ZoomOptions_FIT_PAGE extends ZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053534832;
}

/**
 * Fits the entire pasteboard in the window.
 */
interface ZoomOptions_SHOW_PASTEBOARD extends ZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2054385762;
}

/**
 * Zooms to 100%.
 */
interface ZoomOptions_ACTUAL_SIZE extends ZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053206906;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How the window's zoom changes — one step in or out, fit to the spread or page, the full
 * pasteboard, or 100%.
 */
export declare namespace ZoomOptions {
/**
 * Magnifies the view to the next preset percentage. 
 */
type ZOOM_IN = ZoomOptions_ZOOM_IN;

/**
 * Reduces the view to the next preset percentage.
 */
type ZOOM_OUT = ZoomOptions_ZOOM_OUT;

/**
 * Centers the active spread in the window.
 */
type FIT_SPREAD = ZoomOptions_FIT_SPREAD;

/**
 * Centers the active page in the window.
 */
type FIT_PAGE = ZoomOptions_FIT_PAGE;

/**
 * Fits the entire pasteboard in the window.
 */
type SHOW_PASTEBOARD = ZoomOptions_SHOW_PASTEBOARD;

/**
 * Zooms to 100%.
 */
type ACTUAL_SIZE = ZoomOptions_ACTUAL_SIZE;

}
/**
 * How the window's zoom changes — one step in or out, fit to the spread or page, the full
 * pasteboard, or 100%.
 */
export declare const ZoomOptions: typeof Enumeration & {

  /**
   * Magnifies the view to the next preset percentage. 
   */
  readonly ZOOM_IN: ZoomOptions_ZOOM_IN;
  /**
   * Magnifies the view to the next preset percentage. 
   */
  readonly zoomIn: ZoomOptions_ZOOM_IN;
  /**
   * Magnifies the view to the next preset percentage. 
   */
  readonly zoomin: ZoomOptions_ZOOM_IN;

  /**
   * Reduces the view to the next preset percentage.
   */
  readonly ZOOM_OUT: ZoomOptions_ZOOM_OUT;
  /**
   * Reduces the view to the next preset percentage.
   */
  readonly zoomOut: ZoomOptions_ZOOM_OUT;
  /**
   * Reduces the view to the next preset percentage.
   */
  readonly zoomout: ZoomOptions_ZOOM_OUT;

  /**
   * Centers the active spread in the window.
   */
  readonly FIT_SPREAD: ZoomOptions_FIT_SPREAD;
  /**
   * Centers the active spread in the window.
   */
  readonly fitSpread: ZoomOptions_FIT_SPREAD;
  /**
   * Centers the active spread in the window.
   */
  readonly fitspread: ZoomOptions_FIT_SPREAD;

  /**
   * Centers the active page in the window.
   */
  readonly FIT_PAGE: ZoomOptions_FIT_PAGE;
  /**
   * Centers the active page in the window.
   */
  readonly fitPage: ZoomOptions_FIT_PAGE;
  /**
   * Centers the active page in the window.
   */
  readonly fitpage: ZoomOptions_FIT_PAGE;

  /**
   * Fits the entire pasteboard in the window.
   */
  readonly SHOW_PASTEBOARD: ZoomOptions_SHOW_PASTEBOARD;
  /**
   * Fits the entire pasteboard in the window.
   */
  readonly showPasteboard: ZoomOptions_SHOW_PASTEBOARD;
  /**
   * Fits the entire pasteboard in the window.
   */
  readonly showpasteboard: ZoomOptions_SHOW_PASTEBOARD;

  /**
   * Zooms to 100%.
   */
  readonly ACTUAL_SIZE: ZoomOptions_ACTUAL_SIZE;
  /**
   * Zooms to 100%.
   */
  readonly actualSize: ZoomOptions_ACTUAL_SIZE;
  /**
   * Zooms to 100%.
   */
  readonly actualsize: ZoomOptions_ACTUAL_SIZE;

}
