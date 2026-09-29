/**
 * DataFormat.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DataFormat: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DataFormat extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DataFormat>): boolean;

  /**
   * @internal **WARNING:** `__DataFormat` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DataFormat]: never;
}


/**
 * Uses ASCII format.
 */
interface DataFormat_ASCII extends DataFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095975753;
}

/**
 * Uses binary format.
 */
interface DataFormat_BINARY extends DataFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114534521;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Format options for image data.
 */
export declare namespace DataFormat {
/**
 * Uses ASCII format.
 */
type ASCII = DataFormat_ASCII;

/**
 * Uses binary format.
 */
type BINARY = DataFormat_BINARY;

}
/**
 * Format options for image data.
 */
export declare const DataFormat: typeof Enumeration & {

  /**
   * Uses ASCII format.
   */
  readonly ASCII: DataFormat_ASCII;
  /**
   * Uses ASCII format.
   */
  readonly ascii: DataFormat_ASCII;

  /**
   * Uses binary format.
   */
  readonly BINARY: DataFormat_BINARY;
  /**
   * Uses binary format.
   */
  readonly binary: DataFormat_BINARY;

}
