/**
 * PlacedVectorProfilePolicy.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PlacedVectorProfilePolicy: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PlacedVectorProfilePolicy extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PlacedVectorProfilePolicy>): boolean;

  /**
   * @internal **WARNING:** `__PlacedVectorProfilePolicy` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PlacedVectorProfilePolicy]: never;
}


/**
 * Ignores all profiles and output intent.
 */
interface PlacedVectorProfilePolicy_IGNORE_ALL extends PlacedVectorProfilePolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1148217697;
}

/**
 * Ignores output intent; honors calibrated spaces.
 */
interface PlacedVectorProfilePolicy_IGNORE_OUTPUT_INTENT extends PlacedVectorProfilePolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1148217711;
}

/**
 * Honors all profiles and output intent.
 */
interface PlacedVectorProfilePolicy_HONOR_ALL_PROFILES extends PlacedVectorProfilePolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1148217441;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The color profile policy for placed vector files (PDF or EPS).
 */
export declare namespace PlacedVectorProfilePolicy {
/**
 * Ignores all profiles and output intent.
 */
type IGNORE_ALL = PlacedVectorProfilePolicy_IGNORE_ALL;

/**
 * Ignores output intent; honors calibrated spaces.
 */
type IGNORE_OUTPUT_INTENT = PlacedVectorProfilePolicy_IGNORE_OUTPUT_INTENT;

/**
 * Honors all profiles and output intent.
 */
type HONOR_ALL_PROFILES = PlacedVectorProfilePolicy_HONOR_ALL_PROFILES;

}
/**
 * The color profile policy for placed vector files (PDF or EPS).
 */
export declare const PlacedVectorProfilePolicy: typeof Enumeration & {

  /**
   * Ignores all profiles and output intent.
   */
  readonly IGNORE_ALL: PlacedVectorProfilePolicy_IGNORE_ALL;
  /**
   * Ignores all profiles and output intent.
   */
  readonly ignoreAll: PlacedVectorProfilePolicy_IGNORE_ALL;
  /**
   * Ignores all profiles and output intent.
   */
  readonly ignoreall: PlacedVectorProfilePolicy_IGNORE_ALL;

  /**
   * Ignores output intent; honors calibrated spaces.
   */
  readonly IGNORE_OUTPUT_INTENT: PlacedVectorProfilePolicy_IGNORE_OUTPUT_INTENT;
  /**
   * Ignores output intent; honors calibrated spaces.
   */
  readonly ignoreOutputIntent: PlacedVectorProfilePolicy_IGNORE_OUTPUT_INTENT;
  /**
   * Ignores output intent; honors calibrated spaces.
   */
  readonly ignoreoutputintent: PlacedVectorProfilePolicy_IGNORE_OUTPUT_INTENT;

  /**
   * Honors all profiles and output intent.
   */
  readonly HONOR_ALL_PROFILES: PlacedVectorProfilePolicy_HONOR_ALL_PROFILES;
  /**
   * Honors all profiles and output intent.
   */
  readonly honorAllProfiles: PlacedVectorProfilePolicy_HONOR_ALL_PROFILES;
  /**
   * Honors all profiles and output intent.
   */
  readonly honorallprofiles: PlacedVectorProfilePolicy_HONOR_ALL_PROFILES;

}
