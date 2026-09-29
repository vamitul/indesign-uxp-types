/**
 * SmartMatchOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SmartMatchOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SmartMatchOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SmartMatchOptions>): boolean;

  /**
   * @internal **WARNING:** `__SmartMatchOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SmartMatchOptions]: never;
}


/**
 * Match the full path of style while finding styles in target.
 */
interface SmartMatchOptions_MATCH_STYLE_PATH extends SmartMatchOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936549488;
}

/**
 * Match only the style name while finding styles in target.
 */
interface SmartMatchOptions_MATCH_STYLE_NAME extends SmartMatchOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936552814;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for matching names when synchronizing styles in a book.
 */
export declare namespace SmartMatchOptions {
/**
 * Match the full path of style while finding styles in target.
 */
type MATCH_STYLE_PATH = SmartMatchOptions_MATCH_STYLE_PATH;

/**
 * Match only the style name while finding styles in target.
 */
type MATCH_STYLE_NAME = SmartMatchOptions_MATCH_STYLE_NAME;

}
/**
 * Options for matching names when synchronizing styles in a book.
 */
export declare const SmartMatchOptions: typeof Enumeration & {

  /**
   * Match the full path of style while finding styles in target.
   */
  readonly MATCH_STYLE_PATH: SmartMatchOptions_MATCH_STYLE_PATH;
  /**
   * Match the full path of style while finding styles in target.
   */
  readonly matchStylePath: SmartMatchOptions_MATCH_STYLE_PATH;
  /**
   * Match the full path of style while finding styles in target.
   */
  readonly matchstylepath: SmartMatchOptions_MATCH_STYLE_PATH;

  /**
   * Match only the style name while finding styles in target.
   */
  readonly MATCH_STYLE_NAME: SmartMatchOptions_MATCH_STYLE_NAME;
  /**
   * Match only the style name while finding styles in target.
   */
  readonly matchStyleName: SmartMatchOptions_MATCH_STYLE_NAME;
  /**
   * Match only the style name while finding styles in target.
   */
  readonly matchstylename: SmartMatchOptions_MATCH_STYLE_NAME;

}
