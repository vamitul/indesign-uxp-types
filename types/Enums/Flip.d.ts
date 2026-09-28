/**
 * Flip.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Flip: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Flip extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Flip>): boolean;

  /**
   * @internal **WARNING:** `__Flip` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Flip]: never;
}


/**
 * The printed image is not flipped.
 */
interface Flip_NONE extends Flip {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Flips the printed image horizontally.
 */
interface Flip_HORIZONTAL extends Flip {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1752134266;
}

/**
 * Flips the printed image vertically.
 */
interface Flip_VERTICAL extends Flip {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986359924;
}

/**
 * Flips both ways at once — the same result as rotating 180°.
 *
 * `BOTH` has the same effect but is a distinct value, so the two are not interchangeable in
 * an `equals()` test.
 */
interface Flip_HORIZONTAL_AND_VERTICAL extends Flip {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215977068;
}

/**
 * Flips both ways at once — the same result as rotating 180°.
 *
 * Has the same effect as `HORIZONTAL_AND_VERTICAL` but is a distinct value, so the two are
 * not interchangeable in an `equals()` test.
 */
interface Flip_BOTH extends Flip {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651471464;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Flip direction options.
 */
export declare namespace Flip {
/**
 * The printed image is not flipped.
 */
type NONE = Flip_NONE;

/**
 * Flips the printed image horizontally.
 */
type HORIZONTAL = Flip_HORIZONTAL;

/**
 * Flips the printed image vertically.
 */
type VERTICAL = Flip_VERTICAL;

/**
 * Flips the printed image horizontally and vertically (same as rotate 180).
 */
type HORIZONTAL_AND_VERTICAL = Flip_HORIZONTAL_AND_VERTICAL;

/**
 * Flips the printed image horizontally and vertically (same as rotate 180).
 */
type BOTH = Flip_BOTH;

}
/**
 * Flip direction options.
 */
export declare const Flip: typeof Enumeration & {

  /**
   * The printed image is not flipped.
   */
  readonly NONE: Flip_NONE;
  /**
   * The printed image is not flipped.
   */
  readonly none: Flip_NONE;

  /**
   * Flips the printed image horizontally.
   */
  readonly HORIZONTAL: Flip_HORIZONTAL;
  /**
   * Flips the printed image horizontally.
   */
  readonly horizontal: Flip_HORIZONTAL;

  /**
   * Flips the printed image vertically.
   */
  readonly VERTICAL: Flip_VERTICAL;
  /**
   * Flips the printed image vertically.
   */
  readonly vertical: Flip_VERTICAL;

  /**
   * Flips both ways at once — the same result as rotating 180°.
   *
   * `BOTH` has the same effect but is a distinct value, so the two are not
   * interchangeable in an `equals()` test.
   */
  readonly HORIZONTAL_AND_VERTICAL: Flip_HORIZONTAL_AND_VERTICAL;
  /**
   * Flips the printed image horizontally and vertically (same as rotate 180).
   */
  readonly horizontalAndVertical: Flip_HORIZONTAL_AND_VERTICAL;
  /**
   * Flips the printed image horizontally and vertically (same as rotate 180).
   */
  readonly horizontalandvertical: Flip_HORIZONTAL_AND_VERTICAL;

  /**
   * Flips both ways at once — the same result as rotating 180°.
   *
   * Has the same effect as `HORIZONTAL_AND_VERTICAL` but is a distinct value, so the two
   * are not interchangeable in an `equals()` test.
   */
  readonly BOTH: Flip_BOTH;
  /**
   * Flips the printed image horizontally and vertically (same as rotate 180).
   */
  readonly both: Flip_BOTH;

}
