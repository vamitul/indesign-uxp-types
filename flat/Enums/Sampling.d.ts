/**
 * Sampling.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Sampling: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Sampling extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Sampling>): boolean;

  /**
   * @internal **WARNING:** `__Sampling` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Sampling]: never;
}


/**
 * Uses no resampling.
 */
interface Sampling_NONE extends Sampling {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Averages the pixels in a sample area and replaces the entire area with the average pixel color.
 */
interface Sampling_DOWNSAMPLE extends Sampling {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684951917;
}

/**
 * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color.
 */
interface Sampling_SUBSAMPLE extends Sampling {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1935823725;
}

/**
 * Uses a weighted average to determine pixel color.
 */
interface Sampling_BICUBIC_DOWNSAMPLE extends Sampling {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650742125;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The resampling method.
 */
export declare namespace Sampling {
/**
 * Uses no resampling.
 */
type NONE = Sampling_NONE;

/**
 * Averages the pixels in a sample area and replaces the entire area with the average pixel color.
 */
type DOWNSAMPLE = Sampling_DOWNSAMPLE;

/**
 * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color.
 */
type SUBSAMPLE = Sampling_SUBSAMPLE;

/**
 * Uses a weighted average to determine pixel color.
 */
type BICUBIC_DOWNSAMPLE = Sampling_BICUBIC_DOWNSAMPLE;

}
/**
 * The resampling method.
 */
export declare const Sampling: typeof Enumeration & {

  /**
   * Uses no resampling.
   */
  readonly NONE: Sampling_NONE;
  /**
   * Uses no resampling.
   */
  readonly none: Sampling_NONE;

  /**
   * Averages the pixels in a sample area and replaces the entire area with the average pixel color.
   */
  readonly DOWNSAMPLE: Sampling_DOWNSAMPLE;
  /**
   * Averages the pixels in a sample area and replaces the entire area with the average pixel color.
   */
  readonly downsample: Sampling_DOWNSAMPLE;

  /**
   * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color.
   */
  readonly SUBSAMPLE: Sampling_SUBSAMPLE;
  /**
   * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color.
   */
  readonly subsample: Sampling_SUBSAMPLE;

  /**
   * Uses a weighted average to determine pixel color.
   */
  readonly BICUBIC_DOWNSAMPLE: Sampling_BICUBIC_DOWNSAMPLE;
  /**
   * Uses a weighted average to determine pixel color.
   */
  readonly bicubicDownsample: Sampling_BICUBIC_DOWNSAMPLE;
  /**
   * Uses a weighted average to determine pixel color.
   */
  readonly bicubicdownsample: Sampling_BICUBIC_DOWNSAMPLE;

}
