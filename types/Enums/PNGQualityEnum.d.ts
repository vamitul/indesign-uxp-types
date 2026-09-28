/**
 * PNGQualityEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PNGQualityEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PNGQualityEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PNGQualityEnum>): boolean;

  /**
   * @internal **WARNING:** `__PNGQualityEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PNGQualityEnum]: never;
}


/**
 * Low quality.
 */
interface PNGQualityEnum_LOW extends PNGQualityEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727351;
}

/**
 * Medium quality.
 */
interface PNGQualityEnum_MEDIUM extends PNGQualityEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * High quality.
 */
interface PNGQualityEnum_HIGH extends PNGQualityEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701726313;
}

/**
 * Maximum quality.
 */
interface PNGQualityEnum_MAXIMUM extends PNGQualityEnum {
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
 * Quality options for exported PNG images.
 */
export declare namespace PNGQualityEnum {
/**
 * Low quality.
 */
type LOW = PNGQualityEnum_LOW;

/**
 * Medium quality.
 */
type MEDIUM = PNGQualityEnum_MEDIUM;

/**
 * High quality.
 */
type HIGH = PNGQualityEnum_HIGH;

/**
 * Maximum quality.
 */
type MAXIMUM = PNGQualityEnum_MAXIMUM;

}
/**
 * Quality options for exported PNG images.
 */
export declare const PNGQualityEnum: typeof Enumeration & {

  /**
   * Low quality.
   */
  readonly LOW: PNGQualityEnum_LOW;
  /**
   * Low quality.
   */
  readonly low: PNGQualityEnum_LOW;

  /**
   * Medium quality.
   */
  readonly MEDIUM: PNGQualityEnum_MEDIUM;
  /**
   * Medium quality.
   */
  readonly medium: PNGQualityEnum_MEDIUM;

  /**
   * High quality.
   */
  readonly HIGH: PNGQualityEnum_HIGH;
  /**
   * High quality.
   */
  readonly high: PNGQualityEnum_HIGH;

  /**
   * Maximum quality.
   */
  readonly MAXIMUM: PNGQualityEnum_MAXIMUM;
  /**
   * Maximum quality.
   */
  readonly maximum: PNGQualityEnum_MAXIMUM;

}
