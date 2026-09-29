/**
 * XMLElementPosition.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __XMLElementPosition: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface XMLElementPosition extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<XMLElementPosition>): boolean;

  /**
   * @internal **WARNING:** `__XMLElementPosition` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__XMLElementPosition]: never;
}


/**
 * Specifies the position before the XML element.
 */
interface XMLElementPosition_BEFORE_ELEMENT extends XMLElementPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1482843494;
}

/**
 * Specifies the position after the XML element.
 */
interface XMLElementPosition_AFTER_ELEMENT extends XMLElementPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1482778228;
}

/**
 * Specifies the position at the beginning of the XML element.
 */
interface XMLElementPosition_ELEMENT_START extends XMLElementPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1482844014;
}

/**
 * Specifies the position at the end of the XML element.
 */
interface XMLElementPosition_ELEMENT_END extends XMLElementPosition {
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
 * Where new XML content lands relative to a reference element — before or after it, or at the
 * start or end of its own content.
 */
export declare namespace XMLElementPosition {
/**
 * Specifies the position before the XML element.
 */
type BEFORE_ELEMENT = XMLElementPosition_BEFORE_ELEMENT;

/**
 * Specifies the position after the XML element.
 */
type AFTER_ELEMENT = XMLElementPosition_AFTER_ELEMENT;

/**
 * Specifies the position at the beginning of the XML element.
 */
type ELEMENT_START = XMLElementPosition_ELEMENT_START;

/**
 * Specifies the position at the end of the XML element.
 */
type ELEMENT_END = XMLElementPosition_ELEMENT_END;

}
/**
 * Where new XML content lands relative to a reference element — before or after it, or at the
 * start or end of its own content.
 */
export declare const XMLElementPosition: typeof Enumeration & {

  /**
   * Specifies the position before the XML element.
   */
  readonly BEFORE_ELEMENT: XMLElementPosition_BEFORE_ELEMENT;
  /**
   * Specifies the position before the XML element.
   */
  readonly beforeElement: XMLElementPosition_BEFORE_ELEMENT;
  /**
   * Specifies the position before the XML element.
   */
  readonly beforeelement: XMLElementPosition_BEFORE_ELEMENT;

  /**
   * Specifies the position after the XML element.
   */
  readonly AFTER_ELEMENT: XMLElementPosition_AFTER_ELEMENT;
  /**
   * Specifies the position after the XML element.
   */
  readonly afterElement: XMLElementPosition_AFTER_ELEMENT;
  /**
   * Specifies the position after the XML element.
   */
  readonly afterelement: XMLElementPosition_AFTER_ELEMENT;

  /**
   * Specifies the position at the beginning of the XML element.
   */
  readonly ELEMENT_START: XMLElementPosition_ELEMENT_START;
  /**
   * Specifies the position at the beginning of the XML element.
   */
  readonly elementStart: XMLElementPosition_ELEMENT_START;
  /**
   * Specifies the position at the beginning of the XML element.
   */
  readonly elementstart: XMLElementPosition_ELEMENT_START;

  /**
   * Specifies the position at the end of the XML element.
   */
  readonly ELEMENT_END: XMLElementPosition_ELEMENT_END;
  /**
   * Specifies the position at the end of the XML element.
   */
  readonly elementEnd: XMLElementPosition_ELEMENT_END;
  /**
   * Specifies the position at the end of the XML element.
   */
  readonly elementend: XMLElementPosition_ELEMENT_END;

}
