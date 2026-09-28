/**
 * LiveDrawingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LiveDrawingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LiveDrawingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LiveDrawingOptions>): boolean;

  /**
   * @internal **WARNING:** `__LiveDrawingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LiveDrawingOptions]: never;
}


/**
 * Never use live screen drawing during mouse operations, use sprite mode.
 */
interface LiveDrawingOptions_NEVER extends LiveDrawingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347767926;
}

/**
 * Use live screen drawing during mouse operations.
 */
interface LiveDrawingOptions_IMMEDIATELY extends LiveDrawingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347766637;
}

/**
 * Use live screen drawing during mouse operations after a delay if user pauses before the mouse moves.
 */
interface LiveDrawingOptions_DELAYED extends LiveDrawingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347765349;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Live drawing options for when user mouse actions trigger live screen drawing of page items.
 */
export declare namespace LiveDrawingOptions {
/**
 * Never use live screen drawing during mouse operations, use sprite mode.
 */
type NEVER = LiveDrawingOptions_NEVER;

/**
 * Use live screen drawing during mouse operations.
 */
type IMMEDIATELY = LiveDrawingOptions_IMMEDIATELY;

/**
 * Use live screen drawing during mouse operations after a delay if user pauses before the mouse moves.
 */
type DELAYED = LiveDrawingOptions_DELAYED;

}
/**
 * Live drawing options for when user mouse actions trigger live screen drawing of page items.
 */
export declare const LiveDrawingOptions: typeof Enumeration & {

  /**
   * Never use live screen drawing during mouse operations, use sprite mode.
   */
  readonly NEVER: LiveDrawingOptions_NEVER;
  /**
   * Never use live screen drawing during mouse operations, use sprite mode.
   */
  readonly never: LiveDrawingOptions_NEVER;

  /**
   * Use live screen drawing during mouse operations.
   */
  readonly IMMEDIATELY: LiveDrawingOptions_IMMEDIATELY;
  /**
   * Use live screen drawing during mouse operations.
   */
  readonly immediately: LiveDrawingOptions_IMMEDIATELY;

  /**
   * Use live screen drawing during mouse operations after a delay if user pauses before the mouse moves.
   */
  readonly DELAYED: LiveDrawingOptions_DELAYED;
  /**
   * Use live screen drawing during mouse operations after a delay if user pauses before the mouse moves.
   */
  readonly delayed: LiveDrawingOptions_DELAYED;

}
