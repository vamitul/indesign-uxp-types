/**
 * CompressionQuality.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CompressionQuality: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CompressionQuality extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CompressionQuality>): boolean;

  /**
   * @internal **WARNING:** `__CompressionQuality` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CompressionQuality]: never;
}


/**
 * Uses minimum compression. Not valid when bitmap compression is ZIP. 
 */
interface CompressionQuality_MINIMUM extends CompressionQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727598;
}

/**
 * Uses low compression. Not valid when bitmap compression is ZIP. 
 */
interface CompressionQuality_LOW extends CompressionQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727351;
}

/**
 * Uses medium compression. Not valid when bitmap compression is ZIP.
 */
interface CompressionQuality_MEDIUM extends CompressionQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * Uses high compression. Not valid when bitmap compression is ZIP.
 */
interface CompressionQuality_HIGH extends CompressionQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701726313;
}

/**
 * Uses maximum compression. Not valid when bitmap compression is ZIP.
 */
interface CompressionQuality_MAXIMUM extends CompressionQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727608;
}

/**
 * Uses 4-bit compression. Valid only when bitmap compression is ZIP. 
 */
interface CompressionQuality_FOUR_BIT extends CompressionQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701721186;
}

/**
 * Uses 8-bit compression. Valid only when bitmap compression is ZIP.
 */
interface CompressionQuality_EIGHT_BIT extends CompressionQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701722210;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The amount and type of compression to use for bitmap images.
 */
export declare namespace CompressionQuality {
/**
 * Uses minimum compression. Not valid when bitmap compression is ZIP. 
 */
type MINIMUM = CompressionQuality_MINIMUM;

/**
 * Uses low compression. Not valid when bitmap compression is ZIP. 
 */
type LOW = CompressionQuality_LOW;

/**
 * Uses medium compression. Not valid when bitmap compression is ZIP.
 */
type MEDIUM = CompressionQuality_MEDIUM;

/**
 * Uses high compression. Not valid when bitmap compression is ZIP.
 */
type HIGH = CompressionQuality_HIGH;

/**
 * Uses maximum compression. Not valid when bitmap compression is ZIP.
 */
type MAXIMUM = CompressionQuality_MAXIMUM;

/**
 * Uses 4-bit compression. Valid only when bitmap compression is ZIP. 
 */
type FOUR_BIT = CompressionQuality_FOUR_BIT;

/**
 * Uses 8-bit compression. Valid only when bitmap compression is ZIP.
 */
type EIGHT_BIT = CompressionQuality_EIGHT_BIT;

}
/**
 * The amount and type of compression to use for bitmap images.
 */
export declare const CompressionQuality: typeof Enumeration & {

  /**
   * Uses minimum compression. Not valid when bitmap compression is ZIP. 
   */
  readonly MINIMUM: CompressionQuality_MINIMUM;
  /**
   * Uses minimum compression. Not valid when bitmap compression is ZIP. 
   */
  readonly minimum: CompressionQuality_MINIMUM;

  /**
   * Uses low compression. Not valid when bitmap compression is ZIP. 
   */
  readonly LOW: CompressionQuality_LOW;
  /**
   * Uses low compression. Not valid when bitmap compression is ZIP. 
   */
  readonly low: CompressionQuality_LOW;

  /**
   * Uses medium compression. Not valid when bitmap compression is ZIP.
   */
  readonly MEDIUM: CompressionQuality_MEDIUM;
  /**
   * Uses medium compression. Not valid when bitmap compression is ZIP.
   */
  readonly medium: CompressionQuality_MEDIUM;

  /**
   * Uses high compression. Not valid when bitmap compression is ZIP.
   */
  readonly HIGH: CompressionQuality_HIGH;
  /**
   * Uses high compression. Not valid when bitmap compression is ZIP.
   */
  readonly high: CompressionQuality_HIGH;

  /**
   * Uses maximum compression. Not valid when bitmap compression is ZIP.
   */
  readonly MAXIMUM: CompressionQuality_MAXIMUM;
  /**
   * Uses maximum compression. Not valid when bitmap compression is ZIP.
   */
  readonly maximum: CompressionQuality_MAXIMUM;

  /**
   * Uses 4-bit compression. Valid only when bitmap compression is ZIP. 
   */
  readonly FOUR_BIT: CompressionQuality_FOUR_BIT;
  /**
   * Uses 4-bit compression. Valid only when bitmap compression is ZIP. 
   */
  readonly fourBit: CompressionQuality_FOUR_BIT;
  /**
   * Uses 4-bit compression. Valid only when bitmap compression is ZIP. 
   */
  readonly fourbit: CompressionQuality_FOUR_BIT;

  /**
   * Uses 8-bit compression. Valid only when bitmap compression is ZIP.
   */
  readonly EIGHT_BIT: CompressionQuality_EIGHT_BIT;
  /**
   * Uses 8-bit compression. Valid only when bitmap compression is ZIP.
   */
  readonly eightBit: CompressionQuality_EIGHT_BIT;
  /**
   * Uses 8-bit compression. Valid only when bitmap compression is ZIP.
   */
  readonly eightbit: CompressionQuality_EIGHT_BIT;

}
