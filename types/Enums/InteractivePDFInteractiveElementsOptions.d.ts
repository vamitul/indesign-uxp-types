/**
 * InteractivePDFInteractiveElementsOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __InteractivePDFInteractiveElementsOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface InteractivePDFInteractiveElementsOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<InteractivePDFInteractiveElementsOptions>): boolean;

  /**
   * @internal **WARNING:** `__InteractivePDFInteractiveElementsOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__InteractivePDFInteractiveElementsOptions]: never;
}


/**
 * Include all interactive elements.
 */
interface InteractivePDFInteractiveElementsOptions_INCLUDE_ALL_MEDIA extends InteractivePDFInteractiveElementsOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1231241580;
}

/**
 * Draw interactive elements appearance only.
 */
interface InteractivePDFInteractiveElementsOptions_APPEARANCE_ONLY extends InteractivePDFInteractiveElementsOptions {
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
 * Whether an interactive PDF export embeds all media, or draws interactive elements using their current appearance only.
 */
export declare namespace InteractivePDFInteractiveElementsOptions {
/**
 * Include all interactive elements.
 */
type INCLUDE_ALL_MEDIA = InteractivePDFInteractiveElementsOptions_INCLUDE_ALL_MEDIA;

/**
 * Draw interactive elements appearance only.
 */
type APPEARANCE_ONLY = InteractivePDFInteractiveElementsOptions_APPEARANCE_ONLY;

}
export declare const InteractivePDFInteractiveElementsOptions: typeof Enumeration & {

  /**
   * Include all interactive elements.
   */
  readonly INCLUDE_ALL_MEDIA: InteractivePDFInteractiveElementsOptions_INCLUDE_ALL_MEDIA;
  /**
   * Include all interactive elements.
   */
  readonly includeAllMedia: InteractivePDFInteractiveElementsOptions_INCLUDE_ALL_MEDIA;
  /**
   * Include all interactive elements.
   */
  readonly includeallmedia: InteractivePDFInteractiveElementsOptions_INCLUDE_ALL_MEDIA;

  /**
   * Draw interactive elements appearance only.
   */
  readonly APPEARANCE_ONLY: InteractivePDFInteractiveElementsOptions_APPEARANCE_ONLY;
  /**
   * Draw interactive elements appearance only.
   */
  readonly appearanceOnly: InteractivePDFInteractiveElementsOptions_APPEARANCE_ONLY;
  /**
   * Draw interactive elements appearance only.
   */
  readonly appearanceonly: InteractivePDFInteractiveElementsOptions_APPEARANCE_ONLY;

}
