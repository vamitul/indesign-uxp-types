/**
 * SelectAll.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SelectAll: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SelectAll extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SelectAll>): boolean;

  /**
   * @internal **WARNING:** `__SelectAll` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SelectAll]: never;
}


/**
 * Selects all.
 */
interface SelectAll_ALL extends SelectAll {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634495520;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * A single value meaning "everything", passed where a selection is expected.
 */
export declare namespace SelectAll {
/**
 * Selects all.
 */
type ALL = SelectAll_ALL;

}
/**
 * A single value meaning "everything", passed where a selection is expected.
 */
export declare const SelectAll: typeof Enumeration & {

  /**
   * Selects all.
   */
  readonly ALL: SelectAll_ALL;
  /**
   * Selects all.
   */
  readonly all: SelectAll_ALL;

}
