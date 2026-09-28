/**
 * AnimationPlayOperations.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AnimationPlayOperations: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AnimationPlayOperations extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AnimationPlayOperations>): boolean;

  /**
   * @internal **WARNING:** `__AnimationPlayOperations` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AnimationPlayOperations]: never;
}


/**
 * Starts playback.
 */
interface AnimationPlayOperations_PLAY extends AnimationPlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886151033;
}

/**
 * Stops playback.
 */
interface AnimationPlayOperations_STOP extends AnimationPlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937010544;
}

/**
 * Pauses playback.
 */
interface AnimationPlayOperations_PAUSE extends AnimationPlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885435251;
}

/**
 * Resumes playback.
 */
interface AnimationPlayOperations_RESUME extends AnimationPlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919251317;
}

/**
 * Reverses playback.
 */
interface AnimationPlayOperations_REVERSE_PLAYBACK extends AnimationPlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919252069;
}

/**
 * Stops all playback.
 */
interface AnimationPlayOperations_STOP_ALL extends AnimationPlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937010785;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * What a behaviour does to an animation's playback — start, stop, pause, resume, or play it in reverse.
 */
export declare namespace AnimationPlayOperations {
/**
 * Starts playback.
 */
type PLAY = AnimationPlayOperations_PLAY;

/**
 * Stops playback.
 */
type STOP = AnimationPlayOperations_STOP;

/**
 * Pauses playback.
 */
type PAUSE = AnimationPlayOperations_PAUSE;

/**
 * Resumes playback.
 */
type RESUME = AnimationPlayOperations_RESUME;

/**
 * Reverses playback.
 */
type REVERSE_PLAYBACK = AnimationPlayOperations_REVERSE_PLAYBACK;

/**
 * Stops all playback.
 */
type STOP_ALL = AnimationPlayOperations_STOP_ALL;

}
export declare const AnimationPlayOperations: typeof Enumeration & {

  /**
   * Starts playback.
   */
  readonly PLAY: AnimationPlayOperations_PLAY;
  /**
   * Starts playback.
   */
  readonly play: AnimationPlayOperations_PLAY;

  /**
   * Stops playback.
   */
  readonly STOP: AnimationPlayOperations_STOP;
  /**
   * Stops playback.
   */
  readonly stop: AnimationPlayOperations_STOP;

  /**
   * Pauses playback.
   */
  readonly PAUSE: AnimationPlayOperations_PAUSE;
  /**
   * Pauses playback.
   */
  readonly pause: AnimationPlayOperations_PAUSE;

  /**
   * Resumes playback.
   */
  readonly RESUME: AnimationPlayOperations_RESUME;
  /**
   * Resumes playback.
   */
  readonly resume: AnimationPlayOperations_RESUME;

  /**
   * Reverses playback.
   */
  readonly REVERSE_PLAYBACK: AnimationPlayOperations_REVERSE_PLAYBACK;
  /**
   * Reverses playback.
   */
  readonly reversePlayback: AnimationPlayOperations_REVERSE_PLAYBACK;
  /**
   * Reverses playback.
   */
  readonly reverseplayback: AnimationPlayOperations_REVERSE_PLAYBACK;

  /**
   * Stops all playback.
   */
  readonly STOP_ALL: AnimationPlayOperations_STOP_ALL;
  /**
   * Stops all playback.
   */
  readonly stopAll: AnimationPlayOperations_STOP_ALL;
  /**
   * Stops all playback.
   */
  readonly stopall: AnimationPlayOperations_STOP_ALL;

}
