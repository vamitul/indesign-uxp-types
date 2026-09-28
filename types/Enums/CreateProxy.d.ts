/**
 * CreateProxy.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CreateProxy: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CreateProxy extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CreateProxy>): boolean;

  /**
   * @internal **WARNING:** `__CreateProxy` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CreateProxy]: never;
}


/**
 * Creates preview images as needed.
 */
interface CreateProxy_AS_NEEDED extends CreateProxy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699311204;
}

/**
 * Always creates preview images.
 */
interface CreateProxy_ALWAYS extends CreateProxy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699307895;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for creating preview images.
 */
export declare namespace CreateProxy {
/**
 * Creates preview images as needed.
 */
type AS_NEEDED = CreateProxy_AS_NEEDED;

/**
 * Always creates preview images.
 */
type ALWAYS = CreateProxy_ALWAYS;

}
/**
 * Options for creating preview images.
 */
export declare const CreateProxy: typeof Enumeration & {

  /**
   * Creates preview images as needed.
   */
  readonly AS_NEEDED: CreateProxy_AS_NEEDED;
  /**
   * Creates preview images as needed.
   */
  readonly asNeeded: CreateProxy_AS_NEEDED;
  /**
   * Creates preview images as needed.
   */
  readonly asneeded: CreateProxy_AS_NEEDED;

  /**
   * Always creates preview images.
   */
  readonly ALWAYS: CreateProxy_ALWAYS;
  /**
   * Always creates preview images.
   */
  readonly always: CreateProxy_ALWAYS;

}
