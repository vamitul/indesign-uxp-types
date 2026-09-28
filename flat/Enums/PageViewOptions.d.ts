/**
 * PageViewOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageViewOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageViewOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageViewOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageViewOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageViewOptions]: never;
}


/**
 * Pages arranged in horizontal rows.
 */
interface PageViewOptions_HORIZONTALLY extends PageViewOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1752396907;
}

/**
 * Pages arranged in a vertical column.
 */
interface PageViewOptions_VERTICALLY extends PageViewOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1987211127;
}

/**
 * Pages arranged in vertical columns by alternate layout.
 */
interface PageViewOptions_BY_ALTERNATE_LAYOUT extends PageViewOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1987277931;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for arranging page thumbnails in the Pages panel.
 */
export declare namespace PageViewOptions {
/**
 * Pages arranged in horizontal rows.
 */
type HORIZONTALLY = PageViewOptions_HORIZONTALLY;

/**
 * Pages arranged in a vertical column.
 */
type VERTICALLY = PageViewOptions_VERTICALLY;

/**
 * Pages arranged in vertical columns by alternate layout.
 */
type BY_ALTERNATE_LAYOUT = PageViewOptions_BY_ALTERNATE_LAYOUT;

}
/**
 * Options for arranging page thumbnails in the Pages panel.
 */
export declare const PageViewOptions: typeof Enumeration & {

  /**
   * Pages arranged in horizontal rows.
   */
  readonly HORIZONTALLY: PageViewOptions_HORIZONTALLY;
  /**
   * Pages arranged in horizontal rows.
   */
  readonly horizontally: PageViewOptions_HORIZONTALLY;

  /**
   * Pages arranged in a vertical column.
   */
  readonly VERTICALLY: PageViewOptions_VERTICALLY;
  /**
   * Pages arranged in a vertical column.
   */
  readonly vertically: PageViewOptions_VERTICALLY;

  /**
   * Pages arranged in vertical columns by alternate layout.
   */
  readonly BY_ALTERNATE_LAYOUT: PageViewOptions_BY_ALTERNATE_LAYOUT;
  /**
   * Pages arranged in vertical columns by alternate layout.
   */
  readonly byAlternateLayout: PageViewOptions_BY_ALTERNATE_LAYOUT;
  /**
   * Pages arranged in vertical columns by alternate layout.
   */
  readonly byalternatelayout: PageViewOptions_BY_ALTERNATE_LAYOUT;

}
