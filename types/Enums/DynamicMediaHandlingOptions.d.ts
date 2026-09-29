/**
 * DynamicMediaHandlingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DynamicMediaHandlingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DynamicMediaHandlingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DynamicMediaHandlingOptions>): boolean;

  /**
   * @internal **WARNING:** `__DynamicMediaHandlingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DynamicMediaHandlingOptions]: never;
}


/**
 * Include all interactive elements.
 */
interface DynamicMediaHandlingOptions_INCLUDE_ALL_MEDIA extends DynamicMediaHandlingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1231241580;
}

/**
 * Draws interactive elements using their appearance only.
 */
interface DynamicMediaHandlingOptions_APPEARANCE_ONLY extends DynamicMediaHandlingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097887823;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether interactive elements are exported in full or drawn using their appearance only.
 */
export declare namespace DynamicMediaHandlingOptions {
/**
 * Include all interactive elements.
 */
type INCLUDE_ALL_MEDIA = DynamicMediaHandlingOptions_INCLUDE_ALL_MEDIA;

/**
 * Draw interactive elements appearance only.
 */
type APPEARANCE_ONLY = DynamicMediaHandlingOptions_APPEARANCE_ONLY;

}
/**
 * Whether interactive elements are exported in full or drawn using their appearance only.
 */
export declare const DynamicMediaHandlingOptions: typeof Enumeration & {

  /**
   * Include all interactive elements.
   */
  readonly INCLUDE_ALL_MEDIA: DynamicMediaHandlingOptions_INCLUDE_ALL_MEDIA;
  /**
   * Include all interactive elements.
   */
  readonly includeAllMedia: DynamicMediaHandlingOptions_INCLUDE_ALL_MEDIA;
  /**
   * Include all interactive elements.
   */
  readonly includeallmedia: DynamicMediaHandlingOptions_INCLUDE_ALL_MEDIA;

  /**
   * Draws interactive elements using their appearance only.
   */
  readonly APPEARANCE_ONLY: DynamicMediaHandlingOptions_APPEARANCE_ONLY;
  /**
   * Draws interactive elements using their appearance only.
   */
  readonly appearanceOnly: DynamicMediaHandlingOptions_APPEARANCE_ONLY;
  /**
   * Draws interactive elements using their appearance only.
   */
  readonly appearanceonly: DynamicMediaHandlingOptions_APPEARANCE_ONLY;

}
