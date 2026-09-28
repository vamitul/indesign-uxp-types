/**
 * BulletListExportOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BulletListExportOption: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BulletListExportOption extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BulletListExportOption>): boolean;

  /**
   * @internal **WARNING:** `__BulletListExportOption` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BulletListExportOption]: never;
}


/**
 * Maps to an HTML unordered list.
 */
interface BulletListExportOption_UNORDERED_LIST extends BulletListExportOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700949333;
}

/**
 * Converts the list to plain text.
 */
interface BulletListExportOption_AS_TEXT extends BulletListExportOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700946804;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for exporting an unordered (bulleted) list to HTML or EPUB.
 */
export declare namespace BulletListExportOption {
/**
 * Maps to an HTML unordered list.
 */
type UNORDERED_LIST = BulletListExportOption_UNORDERED_LIST;

/**
 * Converts the list to plain text.
 */
type AS_TEXT = BulletListExportOption_AS_TEXT;

}
/**
 * Options for exporting an unordered (bulleted) list to HTML or EPUB.
 */
export declare const BulletListExportOption: typeof Enumeration & {

  /**
   * Maps to an HTML unordered list.
   */
  readonly UNORDERED_LIST: BulletListExportOption_UNORDERED_LIST;
  /**
   * Maps to an HTML unordered list.
   */
  readonly unorderedList: BulletListExportOption_UNORDERED_LIST;
  /**
   * Maps to an HTML unordered list.
   */
  readonly unorderedlist: BulletListExportOption_UNORDERED_LIST;

  /**
   * Converts the list to plain text.
   */
  readonly AS_TEXT: BulletListExportOption_AS_TEXT;
  /**
   * Converts the list to plain text.
   */
  readonly asText: BulletListExportOption_AS_TEXT;
  /**
   * Converts the list to plain text.
   */
  readonly astext: BulletListExportOption_AS_TEXT;

}
