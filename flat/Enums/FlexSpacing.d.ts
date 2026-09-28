/**
 * FlexSpacing.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { FlexPosition } from "./FlexPosition";



declare const __FlexSpacing: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FlexSpacing extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FlexSpacing, FlexPosition>): boolean;

  /**
   * @internal **WARNING:** `__FlexSpacing` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FlexSpacing]: never;
}


/**
 * Space between items.
 */
interface FlexSpacing_FLEX_SPACE_BETWEEN extends FlexSpacing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1782797154;
}

/**
 * Space around items.
 */
interface FlexSpacing_FLEX_SPACE_AROUND extends FlexSpacing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1782797153;
}

/**
 * Space evenly between items.
 */
interface FlexSpacing_FLEX_SPACE_EVENLY extends FlexSpacing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1782797157;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Specifies the spacing to be used to justify contents inside flex container.
 */
export declare namespace FlexSpacing {
/**
 * Space between items.
 */
type FLEX_SPACE_BETWEEN = FlexSpacing_FLEX_SPACE_BETWEEN;

/**
 * Space around items.
 */
type FLEX_SPACE_AROUND = FlexSpacing_FLEX_SPACE_AROUND;

/**
 * Space evenly between items.
 */
type FLEX_SPACE_EVENLY = FlexSpacing_FLEX_SPACE_EVENLY;

}
/**
 * Specifies the spacing to be used to justify contents inside flex container.
 */
export declare const FlexSpacing: typeof Enumeration & {

  /**
   * Space between items.
   */
  readonly FLEX_SPACE_BETWEEN: FlexSpacing_FLEX_SPACE_BETWEEN;
  /**
   * Space between items.
   */
  readonly flexSpaceBetween: FlexSpacing_FLEX_SPACE_BETWEEN;
  /**
   * Space between items.
   */
  readonly flexspacebetween: FlexSpacing_FLEX_SPACE_BETWEEN;

  /**
   * Space around items.
   */
  readonly FLEX_SPACE_AROUND: FlexSpacing_FLEX_SPACE_AROUND;
  /**
   * Space around items.
   */
  readonly flexSpaceAround: FlexSpacing_FLEX_SPACE_AROUND;
  /**
   * Space around items.
   */
  readonly flexspacearound: FlexSpacing_FLEX_SPACE_AROUND;

  /**
   * Space evenly between items.
   */
  readonly FLEX_SPACE_EVENLY: FlexSpacing_FLEX_SPACE_EVENLY;
  /**
   * Space evenly between items.
   */
  readonly flexSpaceEvenly: FlexSpacing_FLEX_SPACE_EVENLY;
  /**
   * Space evenly between items.
   */
  readonly flexspaceevenly: FlexSpacing_FLEX_SPACE_EVENLY;

}
