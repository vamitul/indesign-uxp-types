/**
 * PageColorOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { UIColors } from "./UIColors";



declare const __PageColorOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageColorOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageColorOptions, UIColors>): boolean;

  /**
   * @internal **WARNING:** `__PageColorOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageColorOptions]: never;
}


/**
 * No color.
 */
interface PageColorOptions_NOTHING extends PageColorOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1851876449;
}

/**
 * Uses the color label of the page's master page.
 */
interface PageColorOptions_USE_MASTER_COLOR extends PageColorOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346594413;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for page color label.
 */
export declare namespace PageColorOptions {
/**
 * No color.
 */
type NOTHING = PageColorOptions_NOTHING;

/**
 * Uses the color label of the page's master page.
 */
type USE_MASTER_COLOR = PageColorOptions_USE_MASTER_COLOR;

}
/**
 * Options for page color label.
 */
export declare const PageColorOptions: typeof Enumeration & {

  /**
   * No color.
   */
  readonly NOTHING: PageColorOptions_NOTHING;
  /**
   * No color.
   */
  readonly nothing: PageColorOptions_NOTHING;

  /**
   * Uses the color label of the page's master page.
   */
  readonly USE_MASTER_COLOR: PageColorOptions_USE_MASTER_COLOR;
  /**
   * Uses the color label of the page's master page.
   */
  readonly useMasterColor: PageColorOptions_USE_MASTER_COLOR;
  /**
   * Uses the color label of the page's master page.
   */
  readonly usemastercolor: PageColorOptions_USE_MASTER_COLOR;

}
