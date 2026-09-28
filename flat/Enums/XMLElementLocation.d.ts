/**
 * XMLElementLocation.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __XMLElementLocation: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface XMLElementLocation extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<XMLElementLocation>): boolean;

  /**
   * @internal **WARNING:** `__XMLElementLocation` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__XMLElementLocation]: never;
}


/**
 * Locates the element at the beginning of the containing object.
 */
interface XMLElementLocation_ELEMENT_START extends XMLElementLocation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1482844014;
}

/**
 * Locates the element at the end of the containing object.
 */
interface XMLElementLocation_ELEMENT_END extends XMLElementLocation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1483042404;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether an XML element is placed at the start or the end of its containing object.
 */
export declare namespace XMLElementLocation {
/**
 * Locates the element at the beginning of the containing object.
 */
type ELEMENT_START = XMLElementLocation_ELEMENT_START;

/**
 * Locates the element at the end of the containing object.
 */
type ELEMENT_END = XMLElementLocation_ELEMENT_END;

}
/**
 * Whether an XML element is placed at the start or the end of its containing object.
 */
export declare const XMLElementLocation: typeof Enumeration & {

  /**
   * Locates the element at the beginning of the containing object.
   */
  readonly ELEMENT_START: XMLElementLocation_ELEMENT_START;
  /**
   * Locates the element at the beginning of the containing object.
   */
  readonly elementStart: XMLElementLocation_ELEMENT_START;
  /**
   * Locates the element at the beginning of the containing object.
   */
  readonly elementstart: XMLElementLocation_ELEMENT_START;

  /**
   * Locates the element at the end of the containing object.
   */
  readonly ELEMENT_END: XMLElementLocation_ELEMENT_END;
  /**
   * Locates the element at the end of the containing object.
   */
  readonly elementEnd: XMLElementLocation_ELEMENT_END;
  /**
   * Locates the element at the end of the containing object.
   */
  readonly elementend: XMLElementLocation_ELEMENT_END;

}
