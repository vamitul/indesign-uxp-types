/**
 * SoundPosterTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SoundPosterTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SoundPosterTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SoundPosterTypes>): boolean;

  /**
   * @internal **WARNING:** `__SoundPosterTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SoundPosterTypes]: never;
}


/**
 * No sound poster.
 */
interface SoundPosterTypes_NONE extends SoundPosterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Generic sound poster.
 */
interface SoundPosterTypes_STANDARD extends SoundPosterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020623970;
}

/**
 * Proxy image sound poster.
 */
interface SoundPosterTypes_PROXY_IMAGE extends SoundPosterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299216505;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * What is shown in place of a sound clip on the page — nothing, a generic icon, or a chosen
 * image.
 */
export declare namespace SoundPosterTypes {
/**
 * No sound poster.
 */
type NONE = SoundPosterTypes_NONE;

/**
 * Generic sound poster.
 */
type STANDARD = SoundPosterTypes_STANDARD;

/**
 * Proxy image sound poster.
 */
type PROXY_IMAGE = SoundPosterTypes_PROXY_IMAGE;

}
/**
 * What is shown in place of a sound clip on the page — nothing, a generic icon, or a chosen
 * image.
 */
export declare const SoundPosterTypes: typeof Enumeration & {

  /**
   * No sound poster.
   */
  readonly NONE: SoundPosterTypes_NONE;
  /**
   * No sound poster.
   */
  readonly none: SoundPosterTypes_NONE;

  /**
   * Generic sound poster.
   */
  readonly STANDARD: SoundPosterTypes_STANDARD;
  /**
   * Generic sound poster.
   */
  readonly standard: SoundPosterTypes_STANDARD;

  /**
   * Proxy image sound poster.
   */
  readonly PROXY_IMAGE: SoundPosterTypes_PROXY_IMAGE;
  /**
   * Proxy image sound poster.
   */
  readonly proxyImage: SoundPosterTypes_PROXY_IMAGE;
  /**
   * Proxy image sound poster.
   */
  readonly proxyimage: SoundPosterTypes_PROXY_IMAGE;

}
