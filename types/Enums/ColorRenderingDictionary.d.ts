/**
 * ColorRenderingDictionary.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ColorRenderingDictionary: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ColorRenderingDictionary extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ColorRenderingDictionary>): boolean;

  /**
   * @internal **WARNING:** `__ColorRenderingDictionary` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ColorRenderingDictionary]: never;
}


/**
 * Uses the default CRD.
 */
interface ColorRenderingDictionary_DEFAULT_VALUE extends ColorRenderingDictionary {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * Uses the document's CRD.
 */
interface ColorRenderingDictionary_USE_DOCUMENT extends ColorRenderingDictionary {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1967419235;
}

/**
 * Uses the working CRD.
 */
interface ColorRenderingDictionary_WORKING extends ColorRenderingDictionary {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1466921579;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The color-rendering dictionary (CRD) to use.
 */
export declare namespace ColorRenderingDictionary {
/**
 * Uses the default CRD.
 */
type DEFAULT_VALUE = ColorRenderingDictionary_DEFAULT_VALUE;

/**
 * Uses the document's CRD.
 */
type USE_DOCUMENT = ColorRenderingDictionary_USE_DOCUMENT;

/**
 * Uses the working CRD.
 */
type WORKING = ColorRenderingDictionary_WORKING;

}
/**
 * The color-rendering dictionary (CRD) to use.
 */
export declare const ColorRenderingDictionary: typeof Enumeration & {

  /**
   * Uses the default CRD.
   */
  readonly DEFAULT_VALUE: ColorRenderingDictionary_DEFAULT_VALUE;
  /**
   * Uses the default CRD.
   */
  readonly defaultValue: ColorRenderingDictionary_DEFAULT_VALUE;
  /**
   * Uses the default CRD.
   */
  readonly defaultvalue: ColorRenderingDictionary_DEFAULT_VALUE;

  /**
   * Uses the document's CRD.
   */
  readonly USE_DOCUMENT: ColorRenderingDictionary_USE_DOCUMENT;
  /**
   * Uses the document's CRD.
   */
  readonly useDocument: ColorRenderingDictionary_USE_DOCUMENT;
  /**
   * Uses the document's CRD.
   */
  readonly usedocument: ColorRenderingDictionary_USE_DOCUMENT;

  /**
   * Uses the working CRD.
   */
  readonly WORKING: ColorRenderingDictionary_WORKING;
  /**
   * Uses the working CRD.
   */
  readonly working: ColorRenderingDictionary_WORKING;

}
