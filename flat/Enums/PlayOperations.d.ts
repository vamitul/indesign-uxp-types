/**
 * PlayOperations.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PlayOperations: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PlayOperations extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PlayOperations>): boolean;

  /**
   * @internal **WARNING:** `__PlayOperations` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PlayOperations]: never;
}


/**
 * Starts playback.
 */
interface PlayOperations_PLAY extends PlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886151033;
}

/**
 * Stops playback.
 */
interface PlayOperations_STOP extends PlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937010544;
}

/**
 * Pauses playback.
 */
interface PlayOperations_PAUSE extends PlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885435251;
}

/**
 * Resumes playback.
 */
interface PlayOperations_RESUME extends PlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919251317;
}

/**
 * Stops all playback (SWF only).
 */
interface PlayOperations_STOP_ALL extends PlayOperations {
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
 * What a media behaviour does to playback — start, stop, pause, or resume it.
 */
export declare namespace PlayOperations {
/**
 * Starts playback.
 */
type PLAY = PlayOperations_PLAY;

/**
 * Stops playback.
 */
type STOP = PlayOperations_STOP;

/**
 * Pauses playback.
 */
type PAUSE = PlayOperations_PAUSE;

/**
 * Resumes playback.
 */
type RESUME = PlayOperations_RESUME;

/**
 * Stops all playback (SWF only).
 */
type STOP_ALL = PlayOperations_STOP_ALL;

}
/**
 * What a media behaviour does to playback — start, stop, pause, or resume it.
 */
export declare const PlayOperations: typeof Enumeration & {

  /**
   * Starts playback.
   */
  readonly PLAY: PlayOperations_PLAY;
  /**
   * Starts playback.
   */
  readonly play: PlayOperations_PLAY;

  /**
   * Stops playback.
   */
  readonly STOP: PlayOperations_STOP;
  /**
   * Stops playback.
   */
  readonly stop: PlayOperations_STOP;

  /**
   * Pauses playback.
   */
  readonly PAUSE: PlayOperations_PAUSE;
  /**
   * Pauses playback.
   */
  readonly pause: PlayOperations_PAUSE;

  /**
   * Resumes playback.
   */
  readonly RESUME: PlayOperations_RESUME;
  /**
   * Resumes playback.
   */
  readonly resume: PlayOperations_RESUME;

  /**
   * Stops all playback (SWF only).
   */
  readonly STOP_ALL: PlayOperations_STOP_ALL;
  /**
   * Stops all playback (SWF only).
   */
  readonly stopAll: PlayOperations_STOP_ALL;
  /**
   * Stops all playback (SWF only).
   */
  readonly stopall: PlayOperations_STOP_ALL;

}
