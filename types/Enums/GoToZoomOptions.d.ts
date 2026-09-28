/**
 * GoToZoomOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __GoToZoomOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface GoToZoomOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<GoToZoomOptions>): boolean;

  /**
   * @internal **WARNING:** `__GoToZoomOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__GoToZoomOptions]: never;
}


/**
 * Inherits the zoom setting from the previously displayed page.
 */
interface GoToZoomOptions_INHERIT_ZOOM extends GoToZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437370;
}

/**
 * Fits the page in the display window.
 */
interface GoToZoomOptions_FIT_WINDOW extends GoToZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437367;
}

/**
 * Fits the page to the width of the window; may obscure the lower portion of the page.
 */
interface GoToZoomOptions_FIT_WIDTH extends GoToZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437335;
}

/**
 * Fits the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
 */
interface GoToZoomOptions_FIT_VISIBLE extends GoToZoomOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437334;
}

/**
 * Displays the page at 100% magnification.
 */
interface GoToZoomOptions_ACTUAL_SIZE extends GoToZoomOptions {
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
 * Zoom options for the goto destination page.
 */
export declare namespace GoToZoomOptions {
/**
 * Inherits the zoom setting from the previously displayed page.
 */
type INHERIT_ZOOM = GoToZoomOptions_INHERIT_ZOOM;

/**
 * Fits the page in the display window.
 */
type FIT_WINDOW = GoToZoomOptions_FIT_WINDOW;

/**
 * Fits the page to the width of the window; may obscure the lower portion of the page.
 */
type FIT_WIDTH = GoToZoomOptions_FIT_WIDTH;

/**
 * Fits the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
 */
type FIT_VISIBLE = GoToZoomOptions_FIT_VISIBLE;

/**
 * Displays the page at 100% magnification.
 */
type ACTUAL_SIZE = GoToZoomOptions_ACTUAL_SIZE;

}
/**
 * Zoom options for the goto destination page.
 */
export declare const GoToZoomOptions: typeof Enumeration & {

  /**
   * Inherits the zoom setting from the previously displayed page.
   */
  readonly INHERIT_ZOOM: GoToZoomOptions_INHERIT_ZOOM;
  /**
   * Inherits the zoom setting from the previously displayed page.
   */
  readonly inheritZoom: GoToZoomOptions_INHERIT_ZOOM;
  /**
   * Inherits the zoom setting from the previously displayed page.
   */
  readonly inheritzoom: GoToZoomOptions_INHERIT_ZOOM;

  /**
   * Fits the page in the display window.
   */
  readonly FIT_WINDOW: GoToZoomOptions_FIT_WINDOW;
  /**
   * Fits the page in the display window.
   */
  readonly fitWindow: GoToZoomOptions_FIT_WINDOW;
  /**
   * Fits the page in the display window.
   */
  readonly fitwindow: GoToZoomOptions_FIT_WINDOW;

  /**
   * Fits the page to the width of the window; may obscure the lower portion of the page.
   */
  readonly FIT_WIDTH: GoToZoomOptions_FIT_WIDTH;
  /**
   * Fits the page to the width of the window; may obscure the lower portion of the page.
   */
  readonly fitWidth: GoToZoomOptions_FIT_WIDTH;
  /**
   * Fits the page to the width of the window; may obscure the lower portion of the page.
   */
  readonly fitwidth: GoToZoomOptions_FIT_WIDTH;

  /**
   * Fits the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
   */
  readonly FIT_VISIBLE: GoToZoomOptions_FIT_VISIBLE;
  /**
   * Fits the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
   */
  readonly fitVisible: GoToZoomOptions_FIT_VISIBLE;
  /**
   * Fits the text area of the page to the window width; obscures page margins and may obscure the lower portion of the page.
   */
  readonly fitvisible: GoToZoomOptions_FIT_VISIBLE;

  /**
   * Displays the page at 100% magnification.
   */
  readonly ACTUAL_SIZE: GoToZoomOptions_ACTUAL_SIZE;
  /**
   * Displays the page at 100% magnification.
   */
  readonly actualSize: GoToZoomOptions_ACTUAL_SIZE;
  /**
   * Displays the page at 100% magnification.
   */
  readonly actualsize: GoToZoomOptions_ACTUAL_SIZE;

}
