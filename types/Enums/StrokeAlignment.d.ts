/**
 * StrokeAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StrokeAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StrokeAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StrokeAlignment>): boolean;

  /**
   * @internal **WARNING:** `__StrokeAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StrokeAlignment]: never;
}


/**
 * The stroke straddles the path.
 */
interface StrokeAlignment_CENTER_ALIGNMENT extends StrokeAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936998723;
}

/**
 * The stroke is inside the path. 
 */
interface StrokeAlignment_INSIDE_ALIGNMENT extends StrokeAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936998729;
}

/**
 * The stroke is outside the path, like a picture frame.
 */
interface StrokeAlignment_OUTSIDE_ALIGNMENT extends StrokeAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936998735;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for positioning the stroke relative to its path.
 */
export declare namespace StrokeAlignment {
/**
 * The stroke straddles the path.
 */
type CENTER_ALIGNMENT = StrokeAlignment_CENTER_ALIGNMENT;

/**
 * The stroke is inside the path. 
 */
type INSIDE_ALIGNMENT = StrokeAlignment_INSIDE_ALIGNMENT;

/**
 * The stroke is outside the path, like a picture frame.
 */
type OUTSIDE_ALIGNMENT = StrokeAlignment_OUTSIDE_ALIGNMENT;

}
/**
 * Options for positioning the stroke relative to its path.
 */
export declare const StrokeAlignment: typeof Enumeration & {

  /**
   * The stroke straddles the path.
   */
  readonly CENTER_ALIGNMENT: StrokeAlignment_CENTER_ALIGNMENT;
  /**
   * The stroke straddles the path.
   */
  readonly centerAlignment: StrokeAlignment_CENTER_ALIGNMENT;
  /**
   * The stroke straddles the path.
   */
  readonly centeralignment: StrokeAlignment_CENTER_ALIGNMENT;

  /**
   * The stroke is inside the path. 
   */
  readonly INSIDE_ALIGNMENT: StrokeAlignment_INSIDE_ALIGNMENT;
  /**
   * The stroke is inside the path. 
   */
  readonly insideAlignment: StrokeAlignment_INSIDE_ALIGNMENT;
  /**
   * The stroke is inside the path. 
   */
  readonly insidealignment: StrokeAlignment_INSIDE_ALIGNMENT;

  /**
   * The stroke is outside the path, like a picture frame.
   */
  readonly OUTSIDE_ALIGNMENT: StrokeAlignment_OUTSIDE_ALIGNMENT;
  /**
   * The stroke is outside the path, like a picture frame.
   */
  readonly outsideAlignment: StrokeAlignment_OUTSIDE_ALIGNMENT;
  /**
   * The stroke is outside the path, like a picture frame.
   */
  readonly outsidealignment: StrokeAlignment_OUTSIDE_ALIGNMENT;

}
