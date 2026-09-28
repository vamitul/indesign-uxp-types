/**
 * FeatherMode.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FeatherMode: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FeatherMode extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FeatherMode>): boolean;

  /**
   * @internal **WARNING:** `__FeatherMode` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FeatherMode]: never;
}


/**
 * Does not use feathering.
 */
interface FeatherMode_NONE extends FeatherMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses standard feathering.
 */
interface FeatherMode_STANDARD extends FeatherMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020623970;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * On/off options for feathering. 
 */
export declare namespace FeatherMode {
/**
 * Does not use feathering.
 */
type NONE = FeatherMode_NONE;

/**
 * Uses standard feathering.
 */
type STANDARD = FeatherMode_STANDARD;

}
/**
 * On/off options for feathering. 
 */
export declare const FeatherMode: typeof Enumeration & {

  /**
   * Does not use feathering.
   */
  readonly NONE: FeatherMode_NONE;
  /**
   * Does not use feathering.
   */
  readonly none: FeatherMode_NONE;

  /**
   * Uses standard feathering.
   */
  readonly STANDARD: FeatherMode_STANDARD;
  /**
   * Uses standard feathering.
   */
  readonly standard: FeatherMode_STANDARD;

}
