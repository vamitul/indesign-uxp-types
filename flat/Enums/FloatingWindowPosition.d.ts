/**
 * FloatingWindowPosition.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FloatingWindowPosition: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FloatingWindowPosition extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FloatingWindowPosition>): boolean;

  /**
   * @internal **WARNING:** `__FloatingWindowPosition` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FloatingWindowPosition]: never;
}


/**
 * Positions the window in the upper left corner of the screen.
 */
interface FloatingWindowPosition_UPPER_LEFT extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668183118;
}

/**
 * Positions the window at the top of the screen midway between the left and right edges.
 */
interface FloatingWindowPosition_UPPER_MIDDLE extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299541348;
}

/**
 * Positions the window in the upper right corner of the screen.
 */
interface FloatingWindowPosition_UPPER_RIGHT extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299542644;
}

/**
 * Positions the window on the left side of the screen midway between the top and bottom.
 */
interface FloatingWindowPosition_CENTER_LEFT extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298361446;
}

/**
 * Positions the window in the center of the screen.
 */
interface FloatingWindowPosition_CENTER extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298359662;
}

/**
 * Positions the window on the right side of the screen midway between the top and bottom.
 */
interface FloatingWindowPosition_CENTER_RIGHT extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298362996;
}

/**
 * Positions the window in the lower left corner of the screen.
 */
interface FloatingWindowPosition_LOWER_LEFT extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298951270;
}

/**
 * Positions the window at the bottom of the screen midway between the left and right edges.
 */
interface FloatingWindowPosition_LOWER_MIDDLE extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298951524;
}

/**
 * Positions the window in the lower right corner of the screen.
 */
interface FloatingWindowPosition_LOWER_RIGHT extends FloatingWindowPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298952820;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying the position of a movie's display window. 
 */
export declare namespace FloatingWindowPosition {
/**
 * Positions the window in the upper left corner of the screen.
 */
type UPPER_LEFT = FloatingWindowPosition_UPPER_LEFT;

/**
 * Positions the window at the top of the screen midway between the left and right edges.
 */
type UPPER_MIDDLE = FloatingWindowPosition_UPPER_MIDDLE;

/**
 * Positions the window in the upper right corner of the screen.
 */
type UPPER_RIGHT = FloatingWindowPosition_UPPER_RIGHT;

/**
 * Positions the window on the left side of the screen midway between the top and bottom.
 */
type CENTER_LEFT = FloatingWindowPosition_CENTER_LEFT;

/**
 * Positions the window in the center of the screen.
 */
type CENTER = FloatingWindowPosition_CENTER;

/**
 * Positions the window on the right side of the screen midway between the top and bottom.
 */
type CENTER_RIGHT = FloatingWindowPosition_CENTER_RIGHT;

/**
 * Positions the window in the lower left corner of the screen.
 */
type LOWER_LEFT = FloatingWindowPosition_LOWER_LEFT;

/**
 * Positions the window at the bottom of the screen midway between the left and right edges.
 */
type LOWER_MIDDLE = FloatingWindowPosition_LOWER_MIDDLE;

/**
 * Positions the window in the lower right corner of the screen.
 */
type LOWER_RIGHT = FloatingWindowPosition_LOWER_RIGHT;

}
/**
 * Options for specifying the position of a movie's display window. 
 */
export declare const FloatingWindowPosition: typeof Enumeration & {

  /**
   * Positions the window in the upper left corner of the screen.
   */
  readonly UPPER_LEFT: FloatingWindowPosition_UPPER_LEFT;
  /**
   * Positions the window in the upper left corner of the screen.
   */
  readonly upperLeft: FloatingWindowPosition_UPPER_LEFT;
  /**
   * Positions the window in the upper left corner of the screen.
   */
  readonly upperleft: FloatingWindowPosition_UPPER_LEFT;

  /**
   * Positions the window at the top of the screen midway between the left and right edges.
   */
  readonly UPPER_MIDDLE: FloatingWindowPosition_UPPER_MIDDLE;
  /**
   * Positions the window at the top of the screen midway between the left and right edges.
   */
  readonly upperMiddle: FloatingWindowPosition_UPPER_MIDDLE;
  /**
   * Positions the window at the top of the screen midway between the left and right edges.
   */
  readonly uppermiddle: FloatingWindowPosition_UPPER_MIDDLE;

  /**
   * Positions the window in the upper right corner of the screen.
   */
  readonly UPPER_RIGHT: FloatingWindowPosition_UPPER_RIGHT;
  /**
   * Positions the window in the upper right corner of the screen.
   */
  readonly upperRight: FloatingWindowPosition_UPPER_RIGHT;
  /**
   * Positions the window in the upper right corner of the screen.
   */
  readonly upperright: FloatingWindowPosition_UPPER_RIGHT;

  /**
   * Positions the window on the left side of the screen midway between the top and bottom.
   */
  readonly CENTER_LEFT: FloatingWindowPosition_CENTER_LEFT;
  /**
   * Positions the window on the left side of the screen midway between the top and bottom.
   */
  readonly centerLeft: FloatingWindowPosition_CENTER_LEFT;
  /**
   * Positions the window on the left side of the screen midway between the top and bottom.
   */
  readonly centerleft: FloatingWindowPosition_CENTER_LEFT;

  /**
   * Positions the window in the center of the screen.
   */
  readonly CENTER: FloatingWindowPosition_CENTER;
  /**
   * Positions the window in the center of the screen.
   */
  readonly center: FloatingWindowPosition_CENTER;

  /**
   * Positions the window on the right side of the screen midway between the top and bottom.
   */
  readonly CENTER_RIGHT: FloatingWindowPosition_CENTER_RIGHT;
  /**
   * Positions the window on the right side of the screen midway between the top and bottom.
   */
  readonly centerRight: FloatingWindowPosition_CENTER_RIGHT;
  /**
   * Positions the window on the right side of the screen midway between the top and bottom.
   */
  readonly centerright: FloatingWindowPosition_CENTER_RIGHT;

  /**
   * Positions the window in the lower left corner of the screen.
   */
  readonly LOWER_LEFT: FloatingWindowPosition_LOWER_LEFT;
  /**
   * Positions the window in the lower left corner of the screen.
   */
  readonly lowerLeft: FloatingWindowPosition_LOWER_LEFT;
  /**
   * Positions the window in the lower left corner of the screen.
   */
  readonly lowerleft: FloatingWindowPosition_LOWER_LEFT;

  /**
   * Positions the window at the bottom of the screen midway between the left and right edges.
   */
  readonly LOWER_MIDDLE: FloatingWindowPosition_LOWER_MIDDLE;
  /**
   * Positions the window at the bottom of the screen midway between the left and right edges.
   */
  readonly lowerMiddle: FloatingWindowPosition_LOWER_MIDDLE;
  /**
   * Positions the window at the bottom of the screen midway between the left and right edges.
   */
  readonly lowermiddle: FloatingWindowPosition_LOWER_MIDDLE;

  /**
   * Positions the window in the lower right corner of the screen.
   */
  readonly LOWER_RIGHT: FloatingWindowPosition_LOWER_RIGHT;
  /**
   * Positions the window in the lower right corner of the screen.
   */
  readonly lowerRight: FloatingWindowPosition_LOWER_RIGHT;
  /**
   * Positions the window in the lower right corner of the screen.
   */
  readonly lowerright: FloatingWindowPosition_LOWER_RIGHT;

}
