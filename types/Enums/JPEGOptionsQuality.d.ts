/**
 * JPEGOptionsQuality.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __JPEGOptionsQuality: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface JPEGOptionsQuality extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<JPEGOptionsQuality>): boolean;

  /**
   * @internal **WARNING:** `__JPEGOptionsQuality` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__JPEGOptionsQuality]: never;
}


/**
 * Low quality.
 */
interface JPEGOptionsQuality_LOW extends JPEGOptionsQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727351;
}

/**
 * Medium quality.
 */
interface JPEGOptionsQuality_MEDIUM extends JPEGOptionsQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * High quality.
 */
interface JPEGOptionsQuality_HIGH extends JPEGOptionsQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701726313;
}

/**
 * Maximum quality.
 */
interface JPEGOptionsQuality_MAXIMUM extends JPEGOptionsQuality {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727608;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Quality options for converted JPEG images.
 */
export declare namespace JPEGOptionsQuality {
/**
 * Low quality.
 */
type LOW = JPEGOptionsQuality_LOW;

/**
 * Medium quality.
 */
type MEDIUM = JPEGOptionsQuality_MEDIUM;

/**
 * High quality.
 */
type HIGH = JPEGOptionsQuality_HIGH;

/**
 * Maximum quality.
 */
type MAXIMUM = JPEGOptionsQuality_MAXIMUM;

}
/**
 * Quality options for converted JPEG images.
 */
export declare const JPEGOptionsQuality: typeof Enumeration & {

  /**
   * Low quality.
   */
  readonly LOW: JPEGOptionsQuality_LOW;
  /**
   * Low quality.
   */
  readonly low: JPEGOptionsQuality_LOW;

  /**
   * Medium quality.
   */
  readonly MEDIUM: JPEGOptionsQuality_MEDIUM;
  /**
   * Medium quality.
   */
  readonly medium: JPEGOptionsQuality_MEDIUM;

  /**
   * High quality.
   */
  readonly HIGH: JPEGOptionsQuality_HIGH;
  /**
   * High quality.
   */
  readonly high: JPEGOptionsQuality_HIGH;

  /**
   * Maximum quality.
   */
  readonly MAXIMUM: JPEGOptionsQuality_MAXIMUM;
  /**
   * Maximum quality.
   */
  readonly maximum: JPEGOptionsQuality_MAXIMUM;

}
