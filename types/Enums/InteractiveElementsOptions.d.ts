/**
 * InteractiveElementsOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __InteractiveElementsOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface InteractiveElementsOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<InteractiveElementsOptions>): boolean;

  /**
   * @internal **WARNING:** `__InteractiveElementsOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__InteractiveElementsOptions]: never;
}


/**
 * Do not include interactive elements.
 */
interface InteractiveElementsOptions_DO_NOT_INCLUDE extends InteractiveElementsOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145981283;
}

/**
 * Draw interactive elements appearance only.
 */
interface InteractiveElementsOptions_APPEARANCE_ONLY extends InteractiveElementsOptions {
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
 * Whether interactive elements are left out of the export entirely, or drawn using their current appearance only.
 */
export declare namespace InteractiveElementsOptions {
/**
 * Do not include interactive elements.
 */
type DO_NOT_INCLUDE = InteractiveElementsOptions_DO_NOT_INCLUDE;

/**
 * Draw interactive elements appearance only.
 */
type APPEARANCE_ONLY = InteractiveElementsOptions_APPEARANCE_ONLY;

}
export declare const InteractiveElementsOptions: typeof Enumeration & {

  /**
   * Do not include interactive elements.
   */
  readonly DO_NOT_INCLUDE: InteractiveElementsOptions_DO_NOT_INCLUDE;
  /**
   * Do not include interactive elements.
   */
  readonly doNotInclude: InteractiveElementsOptions_DO_NOT_INCLUDE;
  /**
   * Do not include interactive elements.
   */
  readonly donotinclude: InteractiveElementsOptions_DO_NOT_INCLUDE;

  /**
   * Draw interactive elements appearance only.
   */
  readonly APPEARANCE_ONLY: InteractiveElementsOptions_APPEARANCE_ONLY;
  /**
   * Draw interactive elements appearance only.
   */
  readonly appearanceOnly: InteractiveElementsOptions_APPEARANCE_ONLY;
  /**
   * Draw interactive elements appearance only.
   */
  readonly appearanceonly: InteractiveElementsOptions_APPEARANCE_ONLY;

}
