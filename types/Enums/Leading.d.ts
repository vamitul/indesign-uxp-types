/**
 * Leading.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Leading: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Leading extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Leading>): boolean;

  /**
   * @internal **WARNING:** `__Leading` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Leading]: never;
}


/**
 * Apply auto leading.
 */
interface Leading_AUTO extends Leading {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635019116;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Leading type options. 
 */
export declare namespace Leading {
/**
 * Apply auto leading.
 */
type AUTO = Leading_AUTO;

}
/**
 * Leading type options. 
 */
export declare const Leading: typeof Enumeration & {

  /**
   * Apply auto leading.
   */
  readonly AUTO: Leading_AUTO;
  /**
   * Apply auto leading.
   */
  readonly auto: Leading_AUTO;

}
