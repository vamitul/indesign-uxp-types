/**
 * ShadowMode.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ShadowMode: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ShadowMode extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ShadowMode>): boolean;

  /**
   * @internal **WARNING:** `__ShadowMode` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ShadowMode]: never;
}


/**
 * Does not use a shadow.
 */
interface ShadowMode_NONE extends ShadowMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses a standard blurred drop shadow.
 */
interface ShadowMode_DROP extends ShadowMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020623440;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a drop shadow is drawn at all.
 */
export declare namespace ShadowMode {
/**
 * Does not use a shadow.
 */
type NONE = ShadowMode_NONE;

/**
 * Uses a standard blurred drop shadow.
 */
type DROP = ShadowMode_DROP;

}
/**
 * Whether a drop shadow is drawn at all.
 */
export declare const ShadowMode: typeof Enumeration & {

  /**
   * Does not use a shadow.
   */
  readonly NONE: ShadowMode_NONE;
  /**
   * Does not use a shadow.
   */
  readonly none: ShadowMode_NONE;

  /**
   * Uses a standard blurred drop shadow.
   */
  readonly DROP: ShadowMode_DROP;
  /**
   * Uses a standard blurred drop shadow.
   */
  readonly drop: ShadowMode_DROP;

}
