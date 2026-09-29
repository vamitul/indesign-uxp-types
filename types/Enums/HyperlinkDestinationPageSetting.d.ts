/**
 * HyperlinkDestinationPageSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __HyperlinkDestinationPageSetting: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface HyperlinkDestinationPageSetting extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<HyperlinkDestinationPageSetting>): boolean;

  /**
   * @internal **WARNING:** `__HyperlinkDestinationPageSetting` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__HyperlinkDestinationPageSetting]: never;
}


/**
 * Fits the destination page within the specified rectangle. For information on specifying the rectangle size and position, see the entry for view bounds.
 */
interface HyperlinkDestinationPageSetting_FIXED extends HyperlinkDestinationPageSetting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437350;
}

/**
 * Displays the visible portion of the destination page as the destination.
 */
interface HyperlinkDestinationPageSetting_FIT_VIEW extends HyperlinkDestinationPageSetting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437366;
}

/**
 * Fits the entire destination page in the document window. Note: The magnification changes automatically when the window is resized.
 */
interface HyperlinkDestinationPageSetting_FIT_WINDOW extends HyperlinkDestinationPageSetting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437367;
}

/**
 * Fits the destination page to the width of the window; may obscure the lower portion of the page. Note: The magnification changes automatically when the window is resized horizontally.
 */
interface HyperlinkDestinationPageSetting_FIT_WIDTH extends HyperlinkDestinationPageSetting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437335;
}

/**
 * Fits the destination page to the window height; may obscure the right side the page. Note: The magnification changes automatically when the window is resized vertically.
 */
interface HyperlinkDestinationPageSetting_FIT_HEIGHT extends HyperlinkDestinationPageSetting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437352;
}

/**
 * Fits the text area of the destination page to the window width; obscures page
 * margins and may obscure the lower portion of the page. Note: The magnification
 * changes automatically when the window is resized horizontally.
 */
interface HyperlinkDestinationPageSetting_FIT_VISIBLE extends HyperlinkDestinationPageSetting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437334;
}

/**
 * The destination page is displayed at the same zoom percent as the previously displayed page. Note: The magnification changes automatically when the window is resized.
 */
interface HyperlinkDestinationPageSetting_INHERIT_ZOOM extends HyperlinkDestinationPageSetting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437370;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Hyperlink destination page display options.
 */
export declare namespace HyperlinkDestinationPageSetting {
/**
 * Fits the destination page within the specified rectangle. For information on specifying the rectangle size and position, see the entry for view bounds.
 */
type FIXED = HyperlinkDestinationPageSetting_FIXED;

/**
 * Displays the visible portion of the destination page as the destination.
 */
type FIT_VIEW = HyperlinkDestinationPageSetting_FIT_VIEW;

/**
 * Fits the entire destination page in the document window. Note: The magnification changes automatically when the window is resized.
 */
type FIT_WINDOW = HyperlinkDestinationPageSetting_FIT_WINDOW;

/**
 * Fits the destination page to the width of the window; may obscure the lower portion of the page. Note: The magnification changes automatically when the window is resized horizontally.
 */
type FIT_WIDTH = HyperlinkDestinationPageSetting_FIT_WIDTH;

/**
 * Fits the destination page to the window height; may obscure the right side the page. Note: The magnification changes automatically when the window is resized vertically.
 */
type FIT_HEIGHT = HyperlinkDestinationPageSetting_FIT_HEIGHT;

/**
 * Fits the text area of the destination page to the window width; obscures page
 * margins and may obscure the lower portion of the page. Note: The magnification
 * changes automatically when the window is resized horizontally.
 */
type FIT_VISIBLE = HyperlinkDestinationPageSetting_FIT_VISIBLE;

/**
 * The destination page is displayed at the same zoom percent as the previously displayed page. Note: The magnification changes automatically when the window is resized.
 */
type INHERIT_ZOOM = HyperlinkDestinationPageSetting_INHERIT_ZOOM;

}
/**
 * Hyperlink destination page display options.
 */
export declare const HyperlinkDestinationPageSetting: typeof Enumeration & {

  /**
   * Fits the destination page within the specified rectangle. For information on specifying the rectangle size and position, see the entry for view bounds.
   */
  readonly FIXED: HyperlinkDestinationPageSetting_FIXED;
  /**
   * Fits the destination page within the specified rectangle. For information on specifying the rectangle size and position, see the entry for view bounds.
   */
  readonly fixed: HyperlinkDestinationPageSetting_FIXED;

  /**
   * Displays the visible portion of the destination page as the destination.
   */
  readonly FIT_VIEW: HyperlinkDestinationPageSetting_FIT_VIEW;
  /**
   * Displays the visible portion of the destination page as the destination.
   */
  readonly fitView: HyperlinkDestinationPageSetting_FIT_VIEW;
  /**
   * Displays the visible portion of the destination page as the destination.
   */
  readonly fitview: HyperlinkDestinationPageSetting_FIT_VIEW;

  /**
   * Fits the entire destination page in the document window. Note: The magnification changes automatically when the window is resized.
   */
  readonly FIT_WINDOW: HyperlinkDestinationPageSetting_FIT_WINDOW;
  /**
   * Fits the entire destination page in the document window. Note: The magnification changes automatically when the window is resized.
   */
  readonly fitWindow: HyperlinkDestinationPageSetting_FIT_WINDOW;
  /**
   * Fits the entire destination page in the document window. Note: The magnification changes automatically when the window is resized.
   */
  readonly fitwindow: HyperlinkDestinationPageSetting_FIT_WINDOW;

  /**
   * Fits the destination page to the width of the window; may obscure the lower portion of the page. Note: The magnification changes automatically when the window is resized horizontally.
   */
  readonly FIT_WIDTH: HyperlinkDestinationPageSetting_FIT_WIDTH;
  /**
   * Fits the destination page to the width of the window; may obscure the lower portion of the page. Note: The magnification changes automatically when the window is resized horizontally.
   */
  readonly fitWidth: HyperlinkDestinationPageSetting_FIT_WIDTH;
  /**
   * Fits the destination page to the width of the window; may obscure the lower portion of the page. Note: The magnification changes automatically when the window is resized horizontally.
   */
  readonly fitwidth: HyperlinkDestinationPageSetting_FIT_WIDTH;

  /**
   * Fits the destination page to the window height; may obscure the right side the page. Note: The magnification changes automatically when the window is resized vertically.
   */
  readonly FIT_HEIGHT: HyperlinkDestinationPageSetting_FIT_HEIGHT;
  /**
   * Fits the destination page to the window height; may obscure the right side the page. Note: The magnification changes automatically when the window is resized vertically.
   */
  readonly fitHeight: HyperlinkDestinationPageSetting_FIT_HEIGHT;
  /**
   * Fits the destination page to the window height; may obscure the right side the page. Note: The magnification changes automatically when the window is resized vertically.
   */
  readonly fitheight: HyperlinkDestinationPageSetting_FIT_HEIGHT;

  /**
   * Fits the text area of the destination page to the window width; obscures page
   * margins and may obscure the lower portion of the page. Note: The magnification
   * changes automatically when the window is resized horizontally.
   */
  readonly FIT_VISIBLE: HyperlinkDestinationPageSetting_FIT_VISIBLE;
  /**
   * Fits the text area of the destination page to the window width; obscures page
   * margins and may obscure the lower portion of the page. Note: The magnification
   * changes automatically when the window is resized horizontally.
   */
  readonly fitVisible: HyperlinkDestinationPageSetting_FIT_VISIBLE;
  /**
   * Fits the text area of the destination page to the window width; obscures page
   * margins and may obscure the lower portion of the page. Note: The magnification
   * changes automatically when the window is resized horizontally.
   */
  readonly fitvisible: HyperlinkDestinationPageSetting_FIT_VISIBLE;

  /**
   * The destination page is displayed at the same zoom percent as the previously displayed page. Note: The magnification changes automatically when the window is resized.
   */
  readonly INHERIT_ZOOM: HyperlinkDestinationPageSetting_INHERIT_ZOOM;
  /**
   * The destination page is displayed at the same zoom percent as the previously displayed page. Note: The magnification changes automatically when the window is resized.
   */
  readonly inheritZoom: HyperlinkDestinationPageSetting_INHERIT_ZOOM;
  /**
   * The destination page is displayed at the same zoom percent as the previously displayed page. Note: The magnification changes automatically when the window is resized.
   */
  readonly inheritzoom: HyperlinkDestinationPageSetting_INHERIT_ZOOM;

}
