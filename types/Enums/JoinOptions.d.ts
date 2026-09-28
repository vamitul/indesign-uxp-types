/**
 * JoinOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __JoinOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface JoinOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<JoinOptions>): boolean;

  /**
   * @internal **WARNING:** `__JoinOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__JoinOptions]: never;
}


/**
 * Connect two end points (default).
 */
interface JoinOptions_CONNECT extends JoinOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668178804;
}

/**
 * Combine two end points and replace with a single averaged point.
 */
interface JoinOptions_COMBINE extends JoinOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668113006;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for joining two path points.
 */
export declare namespace JoinOptions {
/**
 * Connect two end points (default).
 */
type CONNECT = JoinOptions_CONNECT;

/**
 * Combine two end points and replace with an single averaged point.
 */
type COMBINE = JoinOptions_COMBINE;

}
/**
 * Options for joining two path points.
 */
export declare const JoinOptions: typeof Enumeration & {

  /**
   * Connect two end points (default).
   */
  readonly CONNECT: JoinOptions_CONNECT;
  /**
   * Connect two end points (default).
   */
  readonly connect: JoinOptions_CONNECT;

  /**
   * Combine two end points and replace with a single averaged point.
   */
  readonly COMBINE: JoinOptions_COMBINE;
  /**
   * Combine two end points and replace with a single averaged point.
   */
  readonly combine: JoinOptions_COMBINE;

}
