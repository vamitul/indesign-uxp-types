/**
 * NothingEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __NothingEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface NothingEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<NothingEnum, Enumerator>): boolean;

  /**
   * @internal **WARNING:** `__NothingEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__NothingEnum]: never;
}


/**
 * Nothing
 */
interface NothingEnum_NOTHING extends NothingEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1851876449;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The absence of a value — assign `NothingEnum.NOTHING` to clear a property that
 * holds an object or a measurement, rather than assigning `null` or `undefined`.
 */
export declare namespace NothingEnum {
/**
 * Nothing
 */
type NOTHING = NothingEnum_NOTHING;

}
/**
 * The absence of a value — assign `NothingEnum.NOTHING` to clear a property that
 * holds an object or a measurement, rather than assigning `null` or `undefined`.
 */
export declare const NothingEnum: typeof Enumeration & {

  /**
   * Nothing
   */
  readonly NOTHING: NothingEnum_NOTHING;
  /**
   * Nothing
   */
  readonly nothing: NothingEnum_NOTHING;

}
