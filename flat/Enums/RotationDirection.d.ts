/**
 * RotationDirection.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RotationDirection: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RotationDirection extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RotationDirection>): boolean;

  /**
   * @internal **WARNING:** `__RotationDirection` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RotationDirection]: never;
}


/**
 * Rotate the list forward (move the front item to the end).
 */
interface RotationDirection_FORWARD extends RotationDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181708919;
}

/**
 * Rotate the list backward (move the backmost item to the front).
 */
interface RotationDirection_BACKWARD extends RotationDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1113680759;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which way to cycle through the items waiting in the place gun.
 */
export declare namespace RotationDirection {
/**
 * Rotate the list forward (move the front item to the end).
 */
type FORWARD = RotationDirection_FORWARD;

/**
 * Rotate the list backward (move the backmost item to the front).
 */
type BACKWARD = RotationDirection_BACKWARD;

}
/**
 * Which way to cycle through the items waiting in the place gun.
 */
export declare const RotationDirection: typeof Enumeration & {

  /**
   * Rotate the list forward (move the front item to the end).
   */
  readonly FORWARD: RotationDirection_FORWARD;
  /**
   * Rotate the list forward (move the front item to the end).
   */
  readonly forward: RotationDirection_FORWARD;

  /**
   * Rotate the list backward (move the backmost item to the front).
   */
  readonly BACKWARD: RotationDirection_BACKWARD;
  /**
   * Rotate the list backward (move the backmost item to the front).
   */
  readonly backward: RotationDirection_BACKWARD;

}
