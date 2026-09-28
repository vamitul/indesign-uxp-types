/**
 * StrokeOrderTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StrokeOrderTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StrokeOrderTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StrokeOrderTypes>): boolean;

  /**
   * @internal **WARNING:** `__StrokeOrderTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StrokeOrderTypes]: never;
}


/**
 * Places row strokes in front of column strokes.
 */
interface StrokeOrderTypes_ROW_ON_TOP extends StrokeOrderTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936879476;
}

/**
 * Places column strokes in front of row strokes.
 */
interface StrokeOrderTypes_COLUMN_ON_TOP extends StrokeOrderTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1935896436;
}

/**
 * Places row strokes in front of column strokes when row and column strokes are different colors; joins striped strokes and connects crossing points.
 */
interface StrokeOrderTypes_BEST_JOINS extends StrokeOrderTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1935828330;
}

/**
 * Places row strokes in front when row and column strokes are different colors; joins striped strokes only at points where strokes cross in a T-shape.
 */
interface StrokeOrderTypes_INDESIGN_2_COMPATIBILITY extends StrokeOrderTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936286819;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for displaying row and column strokes at corners.
 */
export declare namespace StrokeOrderTypes {
/**
 * Places row strokes in front of column strokes.
 */
type ROW_ON_TOP = StrokeOrderTypes_ROW_ON_TOP;

/**
 * Places column strokes in front of row strokes.
 */
type COLUMN_ON_TOP = StrokeOrderTypes_COLUMN_ON_TOP;

/**
 * Places row strokes in front of column strokes when row and column strokes are different colors; joins striped strokes and connects crossing points.
 */
type BEST_JOINS = StrokeOrderTypes_BEST_JOINS;

/**
 * Places row strokes in front when row and column strokes are different colors; joins striped strokes only at points where strokes cross in a T-shape.
 */
type INDESIGN_2_COMPATIBILITY = StrokeOrderTypes_INDESIGN_2_COMPATIBILITY;

}
/**
 * Options for displaying row and column strokes at corners.
 */
export declare const StrokeOrderTypes: typeof Enumeration & {

  /**
   * Places row strokes in front of column strokes.
   */
  readonly ROW_ON_TOP: StrokeOrderTypes_ROW_ON_TOP;
  /**
   * Places row strokes in front of column strokes.
   */
  readonly rowOnTop: StrokeOrderTypes_ROW_ON_TOP;
  /**
   * Places row strokes in front of column strokes.
   */
  readonly rowontop: StrokeOrderTypes_ROW_ON_TOP;

  /**
   * Places column strokes in front of row strokes.
   */
  readonly COLUMN_ON_TOP: StrokeOrderTypes_COLUMN_ON_TOP;
  /**
   * Places column strokes in front of row strokes.
   */
  readonly columnOnTop: StrokeOrderTypes_COLUMN_ON_TOP;
  /**
   * Places column strokes in front of row strokes.
   */
  readonly columnontop: StrokeOrderTypes_COLUMN_ON_TOP;

  /**
   * Places row strokes in front of column strokes when row and column strokes are different colors; joins striped strokes and connects crossing points.
   */
  readonly BEST_JOINS: StrokeOrderTypes_BEST_JOINS;
  /**
   * Places row strokes in front of column strokes when row and column strokes are different colors; joins striped strokes and connects crossing points.
   */
  readonly bestJoins: StrokeOrderTypes_BEST_JOINS;
  /**
   * Places row strokes in front of column strokes when row and column strokes are different colors; joins striped strokes and connects crossing points.
   */
  readonly bestjoins: StrokeOrderTypes_BEST_JOINS;

  /**
   * Places row strokes in front when row and column strokes are different colors; joins striped strokes only at points where strokes cross in a T-shape.
   */
  readonly INDESIGN_2_COMPATIBILITY: StrokeOrderTypes_INDESIGN_2_COMPATIBILITY;
  /**
   * Places row strokes in front when row and column strokes are different colors; joins striped strokes only at points where strokes cross in a T-shape.
   */
  readonly indesign2Compatibility: StrokeOrderTypes_INDESIGN_2_COMPATIBILITY;
  /**
   * Places row strokes in front when row and column strokes are different colors; joins striped strokes only at points where strokes cross in a T-shape.
   */
  readonly indesign2compatibility: StrokeOrderTypes_INDESIGN_2_COMPATIBILITY;

}
