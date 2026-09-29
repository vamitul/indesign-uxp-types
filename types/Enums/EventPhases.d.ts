/**
 * EventPhases.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EventPhases: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EventPhases extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EventPhases>): boolean;

  /**
   * @internal **WARNING:** `__EventPhases` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EventPhases]: never;
}


/**
 * Not yet propagating.
 */
interface EventPhases_NOT_DISPATCHING extends EventPhases {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727812;
}

/**
 * The at-target phase of propagation.
 */
interface EventPhases_AT_TARGET extends EventPhases {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701724500;
}

/**
 * The bubbling phase of propagation.
 */
interface EventPhases_BUBBLING_PHASE extends EventPhases {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701724789;
}

/**
 * The propagation is complete.
 */
interface EventPhases_DONE extends EventPhases {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701725252;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Phase options for event propagation.
 */
export declare namespace EventPhases {
/**
 * Not yet propagating.
 */
type NOT_DISPATCHING = EventPhases_NOT_DISPATCHING;

/**
 * The at-target phase of propagation.
 */
type AT_TARGET = EventPhases_AT_TARGET;

/**
 * The bubbling phase of propagation.
 */
type BUBBLING_PHASE = EventPhases_BUBBLING_PHASE;

/**
 * The propagation is complete.
 */
type DONE = EventPhases_DONE;

}
/**
 * Phase options for event propagation.
 */
export declare const EventPhases: typeof Enumeration & {

  /**
   * Not yet propagating.
   */
  readonly NOT_DISPATCHING: EventPhases_NOT_DISPATCHING;
  /**
   * Not yet propagating.
   */
  readonly notDispatching: EventPhases_NOT_DISPATCHING;
  /**
   * Not yet propagating.
   */
  readonly notdispatching: EventPhases_NOT_DISPATCHING;

  /**
   * The at-target phase of propagation.
   */
  readonly AT_TARGET: EventPhases_AT_TARGET;
  /**
   * The at-target phase of propagation.
   */
  readonly atTarget: EventPhases_AT_TARGET;
  /**
   * The at-target phase of propagation.
   */
  readonly attarget: EventPhases_AT_TARGET;

  /**
   * The bubbling phase of propagation.
   */
  readonly BUBBLING_PHASE: EventPhases_BUBBLING_PHASE;
  /**
   * The bubbling phase of propagation.
   */
  readonly bubblingPhase: EventPhases_BUBBLING_PHASE;
  /**
   * The bubbling phase of propagation.
   */
  readonly bubblingphase: EventPhases_BUBBLING_PHASE;

  /**
   * The propagation is complete.
   */
  readonly DONE: EventPhases_DONE;
  /**
   * The propagation is complete.
   */
  readonly done: EventPhases_DONE;

}
