/**
 * MoviePlayOperations.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __MoviePlayOperations: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MoviePlayOperations extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MoviePlayOperations>): boolean;

  /**
   * @internal **WARNING:** `__MoviePlayOperations` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MoviePlayOperations]: never;
}


/**
 * Starts playback.
 */
interface MoviePlayOperations_PLAY extends MoviePlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886151033;
}

/**
 * Starts playback from the specified navigation point.
 */
interface MoviePlayOperations_PLAY_FROM_NAVIGATION_POINT extends MoviePlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886154358;
}

/**
 * Stops playback.
 */
interface MoviePlayOperations_STOP extends MoviePlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937010544;
}

/**
 * Pauses playback.
 */
interface MoviePlayOperations_PAUSE extends MoviePlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885435251;
}

/**
 * Resumes playback.
 */
interface MoviePlayOperations_RESUME extends MoviePlayOperations {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919251317;
}

/**
 * Stops all playback (SWF only).
 */
interface MoviePlayOperations_STOP_ALL extends MoviePlayOperations {
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
 * What a behaviour does to a movie's playback — start it from the beginning or from a named navigation point, stop, pause, or resume.
 */
export declare namespace MoviePlayOperations {
/**
 * Starts playback.
 */
type PLAY = MoviePlayOperations_PLAY;

/**
 * Starts playback from the specified navigation point.
 */
type PLAY_FROM_NAVIGATION_POINT = MoviePlayOperations_PLAY_FROM_NAVIGATION_POINT;

/**
 * Stops playback.
 */
type STOP = MoviePlayOperations_STOP;

/**
 * Pauses playback.
 */
type PAUSE = MoviePlayOperations_PAUSE;

/**
 * Resumes playback.
 */
type RESUME = MoviePlayOperations_RESUME;

/**
 * Stops all playback (SWF only).
 */
type STOP_ALL = MoviePlayOperations_STOP_ALL;

}
export declare const MoviePlayOperations: typeof Enumeration & {

  /**
   * Starts playback.
   */
  readonly PLAY: MoviePlayOperations_PLAY;
  /**
   * Starts playback.
   */
  readonly play: MoviePlayOperations_PLAY;

  /**
   * Starts playback from the specified navigation point.
   */
  readonly PLAY_FROM_NAVIGATION_POINT: MoviePlayOperations_PLAY_FROM_NAVIGATION_POINT;
  /**
   * Starts playback from the specified navigation point.
   */
  readonly playFromNavigationPoint: MoviePlayOperations_PLAY_FROM_NAVIGATION_POINT;
  /**
   * Starts playback from the specified navigation point.
   */
  readonly playfromnavigationpoint: MoviePlayOperations_PLAY_FROM_NAVIGATION_POINT;

  /**
   * Stops playback.
   */
  readonly STOP: MoviePlayOperations_STOP;
  /**
   * Stops playback.
   */
  readonly stop: MoviePlayOperations_STOP;

  /**
   * Pauses playback.
   */
  readonly PAUSE: MoviePlayOperations_PAUSE;
  /**
   * Pauses playback.
   */
  readonly pause: MoviePlayOperations_PAUSE;

  /**
   * Resumes playback.
   */
  readonly RESUME: MoviePlayOperations_RESUME;
  /**
   * Resumes playback.
   */
  readonly resume: MoviePlayOperations_RESUME;

  /**
   * Stops all playback (SWF only).
   */
  readonly STOP_ALL: MoviePlayOperations_STOP_ALL;
  /**
   * Stops all playback (SWF only).
   */
  readonly stopAll: MoviePlayOperations_STOP_ALL;
  /**
   * Stops all playback (SWF only).
   */
  readonly stopall: MoviePlayOperations_STOP_ALL;

}
