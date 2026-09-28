/**
 * AnchorPosition.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AnchorPosition: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AnchorPosition extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AnchorPosition>): boolean;

  /**
   * @internal **WARNING:** `__AnchorPosition` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AnchorPosition]: never;
}


/**
 * Align the anchored object with the baseline of the line that contains the object.
 */
interface AnchorPosition_INLINE_POSITION extends AnchorPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095716969;
}

/**
 * Place the anchored object above the line of text that contains the object. 
 */
interface AnchorPosition_ABOVE_LINE extends AnchorPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095716961;
}

/**
 * Custom anchor position.
 */
interface AnchorPosition_ANCHORED extends AnchorPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097814113;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying the position of an anchored object relative to its anchor point in the text.
 */
export declare namespace AnchorPosition {
/**
 * Align the anchored object with the baseline of the line that contains the object.
 */
type INLINE_POSITION = AnchorPosition_INLINE_POSITION;

/**
 * Place the anchored object above the line of text that contains the object. 
 */
type ABOVE_LINE = AnchorPosition_ABOVE_LINE;

/**
 * Custom anchor position.
 */
type ANCHORED = AnchorPosition_ANCHORED;

}
/**
 * Options for specifying the position of an anchored object relative to its anchor point in the text.
 */
export declare const AnchorPosition: typeof Enumeration & {

  /**
   * Align the anchored object with the baseline of the line that contains the object.
   */
  readonly INLINE_POSITION: AnchorPosition_INLINE_POSITION;
  /**
   * Align the anchored object with the baseline of the line that contains the object.
   */
  readonly inlinePosition: AnchorPosition_INLINE_POSITION;
  /**
   * Align the anchored object with the baseline of the line that contains the object.
   */
  readonly inlineposition: AnchorPosition_INLINE_POSITION;

  /**
   * Place the anchored object above the line of text that contains the object. 
   */
  readonly ABOVE_LINE: AnchorPosition_ABOVE_LINE;
  /**
   * Place the anchored object above the line of text that contains the object. 
   */
  readonly aboveLine: AnchorPosition_ABOVE_LINE;
  /**
   * Place the anchored object above the line of text that contains the object. 
   */
  readonly aboveline: AnchorPosition_ABOVE_LINE;

  /**
   * Custom anchor position.
   */
  readonly ANCHORED: AnchorPosition_ANCHORED;
  /**
   * Custom anchor position.
   */
  readonly anchored: AnchorPosition_ANCHORED;

}
