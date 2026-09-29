/**
 * StyleType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StyleType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StyleType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StyleType>): boolean;

  /**
   * @internal **WARNING:** `__StyleType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StyleType]: never;
}


/**
 * Character style.
 */
interface StyleType_CHARACTER_STYLE_TYPE extends StyleType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1665684340;
}

/**
 * Paragraph style.
 */
interface StyleType_PARAGRAPH_STYLE_TYPE extends StyleType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1883730548;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a style object is a character style or a paragraph style.
 */
export declare namespace StyleType {
/**
 * Character style.
 */
type CHARACTER_STYLE_TYPE = StyleType_CHARACTER_STYLE_TYPE;

/**
 * Paragraph style.
 */
type PARAGRAPH_STYLE_TYPE = StyleType_PARAGRAPH_STYLE_TYPE;

}
/**
 * Whether a style object is a character style or a paragraph style.
 */
export declare const StyleType: typeof Enumeration & {

  /**
   * Character style.
   */
  readonly CHARACTER_STYLE_TYPE: StyleType_CHARACTER_STYLE_TYPE;
  /**
   * Character style.
   */
  readonly characterStyleType: StyleType_CHARACTER_STYLE_TYPE;
  /**
   * Character style.
   */
  readonly characterstyletype: StyleType_CHARACTER_STYLE_TYPE;

  /**
   * Paragraph style.
   */
  readonly PARAGRAPH_STYLE_TYPE: StyleType_PARAGRAPH_STYLE_TYPE;
  /**
   * Paragraph style.
   */
  readonly paragraphStyleType: StyleType_PARAGRAPH_STYLE_TYPE;
  /**
   * Paragraph style.
   */
  readonly paragraphstyletype: StyleType_PARAGRAPH_STYLE_TYPE;

}
