/**
 * ICCProfiles.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ICCProfiles: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ICCProfiles extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ICCProfiles>): boolean;

  /**
   * @internal **WARNING:** `__ICCProfiles` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ICCProfiles]: never;
}


/**
 * Does not include ICC profiles.
 */
interface ICCProfiles_INCLUDE_NONE extends ICCProfiles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229144942;
}

/**
 * Includes all ICC profiles.
 */
interface ICCProfiles_INCLUDE_ALL extends ICCProfiles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229144929;
}

/**
 * Includes tagged source profiles.
 */
interface ICCProfiles_INCLUDE_TAGGED extends ICCProfiles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229144948;
}

/**
 * Includes RGB and tagged source CMYK profiles.
 */
interface ICCProfiles_INCLUDE_RGB_AND_TAGGED extends ICCProfiles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229144946;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The ICC profiles to include in the PDF document.
 */
export declare namespace ICCProfiles {
/**
 * Does not include ICC profiles.
 */
type INCLUDE_NONE = ICCProfiles_INCLUDE_NONE;

/**
 * Includes all ICC profiles.
 */
type INCLUDE_ALL = ICCProfiles_INCLUDE_ALL;

/**
 * Includes tagged source profiles.
 */
type INCLUDE_TAGGED = ICCProfiles_INCLUDE_TAGGED;

/**
 * Includes RGB and tagged source CMYK profiles.
 */
type INCLUDE_RGB_AND_TAGGED = ICCProfiles_INCLUDE_RGB_AND_TAGGED;

}
/**
 * The ICC profiles to include in the PDF document.
 */
export declare const ICCProfiles: typeof Enumeration & {

  /**
   * Does not include ICC profiles.
   */
  readonly INCLUDE_NONE: ICCProfiles_INCLUDE_NONE;
  /**
   * Does not include ICC profiles.
   */
  readonly includeNone: ICCProfiles_INCLUDE_NONE;
  /**
   * Does not include ICC profiles.
   */
  readonly includenone: ICCProfiles_INCLUDE_NONE;

  /**
   * Includes all ICC profiles.
   */
  readonly INCLUDE_ALL: ICCProfiles_INCLUDE_ALL;
  /**
   * Includes all ICC profiles.
   */
  readonly includeAll: ICCProfiles_INCLUDE_ALL;
  /**
   * Includes all ICC profiles.
   */
  readonly includeall: ICCProfiles_INCLUDE_ALL;

  /**
   * Includes tagged source profiles.
   */
  readonly INCLUDE_TAGGED: ICCProfiles_INCLUDE_TAGGED;
  /**
   * Includes tagged source profiles.
   */
  readonly includeTagged: ICCProfiles_INCLUDE_TAGGED;
  /**
   * Includes tagged source profiles.
   */
  readonly includetagged: ICCProfiles_INCLUDE_TAGGED;

  /**
   * Includes RGB and tagged source CMYK profiles.
   */
  readonly INCLUDE_RGB_AND_TAGGED: ICCProfiles_INCLUDE_RGB_AND_TAGGED;
  /**
   * Includes RGB and tagged source CMYK profiles.
   */
  readonly includeRgbAndTagged: ICCProfiles_INCLUDE_RGB_AND_TAGGED;
  /**
   * Includes RGB and tagged source CMYK profiles.
   */
  readonly includergbandtagged: ICCProfiles_INCLUDE_RGB_AND_TAGGED;

}
