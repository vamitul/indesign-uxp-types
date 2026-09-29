/**
 * MonoBitmapCompression.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __MonoBitmapCompression: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MonoBitmapCompression extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MonoBitmapCompression>): boolean;

  /**
   * @internal **WARNING:** `__MonoBitmapCompression` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MonoBitmapCompression]: never;
}


/**
 * Uses no compression.
 */
interface MonoBitmapCompression_NONE extends MonoBitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses CCITT Group 3 compression.
 */
interface MonoBitmapCompression_CCIT3 extends MonoBitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1128879155;
}

/**
 * Uses CCITT Group 4 compression.
 */
interface MonoBitmapCompression_CCIT4 extends MonoBitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1128879156;
}

/**
 * Uses ZIP compression.
 */
interface MonoBitmapCompression_ZIP extends MonoBitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053730371;
}

/**
 * Uses Run Length compression.
 */
interface MonoBitmapCompression_RUN_LENGTH extends MonoBitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919839299;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The amount and type of compression to apply to monochrome bitmap images.
 */
export declare namespace MonoBitmapCompression {
/**
 * Uses no compression.
 */
type NONE = MonoBitmapCompression_NONE;

/**
 * Uses CCITT Group 3 compression.
 */
type CCIT3 = MonoBitmapCompression_CCIT3;

/**
 * Uses CCITT Group 4 compression.
 */
type CCIT4 = MonoBitmapCompression_CCIT4;

/**
 * Uses ZIP compression.
 */
type ZIP = MonoBitmapCompression_ZIP;

/**
 * Uses Run Length compression.
 */
type RUN_LENGTH = MonoBitmapCompression_RUN_LENGTH;

}
/**
 * The amount and type of compression to apply to monochrome bitmap images.
 */
export declare const MonoBitmapCompression: typeof Enumeration & {

  /**
   * Uses no compression.
   */
  readonly NONE: MonoBitmapCompression_NONE;
  /**
   * Uses no compression.
   */
  readonly none: MonoBitmapCompression_NONE;

  /**
   * Uses CCITT Group 3 compression.
   */
  readonly CCIT3: MonoBitmapCompression_CCIT3;
  /**
   * Uses CCITT Group 3 compression.
   */
  readonly ccit3: MonoBitmapCompression_CCIT3;

  /**
   * Uses CCITT Group 4 compression.
   */
  readonly CCIT4: MonoBitmapCompression_CCIT4;
  /**
   * Uses CCITT Group 4 compression.
   */
  readonly ccit4: MonoBitmapCompression_CCIT4;

  /**
   * Uses ZIP compression.
   */
  readonly ZIP: MonoBitmapCompression_ZIP;
  /**
   * Uses ZIP compression.
   */
  readonly zip: MonoBitmapCompression_ZIP;

  /**
   * Uses Run Length compression.
   */
  readonly RUN_LENGTH: MonoBitmapCompression_RUN_LENGTH;
  /**
   * Uses Run Length compression.
   */
  readonly runLength: MonoBitmapCompression_RUN_LENGTH;
  /**
   * Uses Run Length compression.
   */
  readonly runlength: MonoBitmapCompression_RUN_LENGTH;

}
