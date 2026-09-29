/**
 * FlexPosition.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { FlexEnum } from "./FlexEnum";
import type { FlexSpacing } from "./FlexSpacing";



declare const __FlexPosition: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FlexPosition extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FlexPosition, FlexSpacing | FlexEnum>): boolean;

  /**
   * @internal **WARNING:** `__FlexPosition` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FlexPosition]: never;
}


/**
 * Aligns items at the start.
 */
interface FlexPosition_FLEX_START extends FlexPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1632192115;
}

/**
 * Centers items.
 */
interface FlexPosition_FLEX_CENTER extends FlexPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1632191348;
}

/**
 * Aligns items at the end.
 */
interface FlexPosition_FLEX_END extends FlexPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1632192101;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Flex start, flex center, or flex end alignment.
 */
export declare namespace FlexPosition {
/**
 * Aligns items at the start.
 */
type FLEX_START = FlexPosition_FLEX_START;

/**
 * Centers items.
 */
type FLEX_CENTER = FlexPosition_FLEX_CENTER;

/**
 * Aligns items at the end.
 */
type FLEX_END = FlexPosition_FLEX_END;

}
/**
 * Flex start, flex center, or flex end alignment.
 */
export declare const FlexPosition: typeof Enumeration & {

  /**
   * Aligns items at the start.
   */
  readonly FLEX_START: FlexPosition_FLEX_START;
  /**
   * Aligns items at the start.
   */
  readonly flexStart: FlexPosition_FLEX_START;
  /**
   * Aligns items at the start.
   */
  readonly flexstart: FlexPosition_FLEX_START;

  /**
   * Centers items.
   */
  readonly FLEX_CENTER: FlexPosition_FLEX_CENTER;
  /**
   * Centers items.
   */
  readonly flexCenter: FlexPosition_FLEX_CENTER;
  /**
   * Centers items.
   */
  readonly flexcenter: FlexPosition_FLEX_CENTER;

  /**
   * Aligns items at the end.
   */
  readonly FLEX_END: FlexPosition_FLEX_END;
  /**
   * Aligns items at the end.
   */
  readonly flexEnd: FlexPosition_FLEX_END;
  /**
   * Aligns items at the end.
   */
  readonly flexend: FlexPosition_FLEX_END;

}
