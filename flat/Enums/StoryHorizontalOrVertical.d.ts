/**
 * StoryHorizontalOrVertical.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StoryHorizontalOrVertical: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StoryHorizontalOrVertical extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StoryHorizontalOrVertical>): boolean;

  /**
   * @internal **WARNING:** `__StoryHorizontalOrVertical` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StoryHorizontalOrVertical]: never;
}


/**
 * Orients the text horizontally.
 */
interface StoryHorizontalOrVertical_HORIZONTAL extends StoryHorizontalOrVertical {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1752134266;
}

/**
 * Orients the text vertically.
 */
interface StoryHorizontalOrVertical_VERTICAL extends StoryHorizontalOrVertical {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986359924;
}

/**
 * The text direction is unknown. 
 */
interface StoryHorizontalOrVertical_UNKNOWN extends StoryHorizontalOrVertical {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1433299822;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a story's text runs horizontally or vertically.
 */
export declare namespace StoryHorizontalOrVertical {
/**
 * Orients the text horizontally.
 */
type HORIZONTAL = StoryHorizontalOrVertical_HORIZONTAL;

/**
 * Orients the text vertically.
 */
type VERTICAL = StoryHorizontalOrVertical_VERTICAL;

/**
 * The text direction is unknown. 
 */
type UNKNOWN = StoryHorizontalOrVertical_UNKNOWN;

}
/**
 * Whether a story's text runs horizontally or vertically.
 */
export declare const StoryHorizontalOrVertical: typeof Enumeration & {

  /**
   * Orients the text horizontally.
   */
  readonly HORIZONTAL: StoryHorizontalOrVertical_HORIZONTAL;
  /**
   * Orients the text horizontally.
   */
  readonly horizontal: StoryHorizontalOrVertical_HORIZONTAL;

  /**
   * Orients the text vertically.
   */
  readonly VERTICAL: StoryHorizontalOrVertical_VERTICAL;
  /**
   * Orients the text vertically.
   */
  readonly vertical: StoryHorizontalOrVertical_VERTICAL;

  /**
   * The text direction is unknown. 
   */
  readonly UNKNOWN: StoryHorizontalOrVertical_UNKNOWN;
  /**
   * The text direction is unknown. 
   */
  readonly unknown: StoryHorizontalOrVertical_UNKNOWN;

}
