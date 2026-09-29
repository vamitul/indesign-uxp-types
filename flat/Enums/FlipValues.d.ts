/**
 * FlipValues.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FlipValues: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FlipValues extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FlipValues>): boolean;

  /**
   * @internal **WARNING:** `__FlipValues` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FlipValues]: never;
}


/**
 * No flip effect applied.
 */
interface FlipValues_NOT_FLIPPED extends FlipValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852206192;
}

/**
 * Flips the text across the path.
 */
interface FlipValues_FLIPPED extends FlipValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2036755568;
}

/**
 * Undefined flip effect.
 */
interface FlipValues_UNDEFINED_FLIP_VALUE extends FlipValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1969646704;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for flipping or unflipping text relative to the path.
 */
export declare namespace FlipValues {
/**
 * No flip effect applied.
 */
type NOT_FLIPPED = FlipValues_NOT_FLIPPED;

/**
 * Flips the text across the path.
 */
type FLIPPED = FlipValues_FLIPPED;

/**
 * Undefined flip effect.
 */
type UNDEFINED_FLIP_VALUE = FlipValues_UNDEFINED_FLIP_VALUE;

}
/**
 * Options for flipping or unflipping text relative to the path.
 */
export declare const FlipValues: typeof Enumeration & {

  /**
   * No flip effect applied.
   */
  readonly NOT_FLIPPED: FlipValues_NOT_FLIPPED;
  /**
   * No flip effect applied.
   */
  readonly notFlipped: FlipValues_NOT_FLIPPED;
  /**
   * No flip effect applied.
   */
  readonly notflipped: FlipValues_NOT_FLIPPED;

  /**
   * Flips the text across the path.
   */
  readonly FLIPPED: FlipValues_FLIPPED;
  /**
   * Flips the text across the path.
   */
  readonly flipped: FlipValues_FLIPPED;

  /**
   * Undefined flip effect.
   */
  readonly UNDEFINED_FLIP_VALUE: FlipValues_UNDEFINED_FLIP_VALUE;
  /**
   * Undefined flip effect.
   */
  readonly undefinedFlipValue: FlipValues_UNDEFINED_FLIP_VALUE;
  /**
   * Undefined flip effect.
   */
  readonly undefinedflipvalue: FlipValues_UNDEFINED_FLIP_VALUE;

}
