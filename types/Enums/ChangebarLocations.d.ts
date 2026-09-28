/**
 * ChangebarLocations.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ChangebarLocations: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ChangebarLocations extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ChangebarLocations>): boolean;

  /**
   * @internal **WARNING:** `__ChangebarLocations` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ChangebarLocations]: never;
}


/**
 * Change bars are in the left margin.
 */
interface ChangebarLocations_LEFT_ALIGN extends ChangebarLocations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Change bars are in the right margin.
 */
interface ChangebarLocations_RIGHT_ALIGN extends ChangebarLocations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Change bar location options.
 */
export declare namespace ChangebarLocations {
/**
 * Change bars are in the left margin.
 */
type LEFT_ALIGN = ChangebarLocations_LEFT_ALIGN;

/**
 * Change bars are in the right margin.
 */
type RIGHT_ALIGN = ChangebarLocations_RIGHT_ALIGN;

}
/**
 * Change bar location options.
 */
export declare const ChangebarLocations: typeof Enumeration & {

  /**
   * Change bars are in the left margin.
   */
  readonly LEFT_ALIGN: ChangebarLocations_LEFT_ALIGN;
  /**
   * Change bars are in the left margin.
   */
  readonly leftAlign: ChangebarLocations_LEFT_ALIGN;
  /**
   * Change bars are in the left margin.
   */
  readonly leftalign: ChangebarLocations_LEFT_ALIGN;

  /**
   * Change bars are in the right margin.
   */
  readonly RIGHT_ALIGN: ChangebarLocations_RIGHT_ALIGN;
  /**
   * Change bars are in the right margin.
   */
  readonly rightAlign: ChangebarLocations_RIGHT_ALIGN;
  /**
   * Change bars are in the right margin.
   */
  readonly rightalign: ChangebarLocations_RIGHT_ALIGN;

}
