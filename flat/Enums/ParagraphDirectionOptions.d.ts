/**
 * ParagraphDirectionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ParagraphDirectionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ParagraphDirectionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ParagraphDirectionOptions>): boolean;

  /**
   * @internal **WARNING:** `__ParagraphDirectionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ParagraphDirectionOptions]: never;
}


/**
 * Left-to-right paragraph direction.
 */
interface ParagraphDirectionOptions_LEFT_TO_RIGHT_DIRECTION extends ParagraphDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1278366308;
}

/**
 * Right-to-left paragraph direction.
 */
interface ParagraphDirectionOptions_RIGHT_TO_LEFT_DIRECTION extends ParagraphDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1379028068;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a paragraph reads left to right or right to left.
 */
export declare namespace ParagraphDirectionOptions {
/**
 * Left-to-right paragraph direction.
 */
type LEFT_TO_RIGHT_DIRECTION = ParagraphDirectionOptions_LEFT_TO_RIGHT_DIRECTION;

/**
 * Right-to-left paragraph direction.
 */
type RIGHT_TO_LEFT_DIRECTION = ParagraphDirectionOptions_RIGHT_TO_LEFT_DIRECTION;

}
/**
 * Whether a paragraph reads left to right or right to left.
 */
export declare const ParagraphDirectionOptions: typeof Enumeration & {

  /**
   * Left-to-right paragraph direction.
   */
  readonly LEFT_TO_RIGHT_DIRECTION: ParagraphDirectionOptions_LEFT_TO_RIGHT_DIRECTION;
  /**
   * Left-to-right paragraph direction.
   */
  readonly leftToRightDirection: ParagraphDirectionOptions_LEFT_TO_RIGHT_DIRECTION;
  /**
   * Left-to-right paragraph direction.
   */
  readonly lefttorightdirection: ParagraphDirectionOptions_LEFT_TO_RIGHT_DIRECTION;

  /**
   * Right-to-left paragraph direction.
   */
  readonly RIGHT_TO_LEFT_DIRECTION: ParagraphDirectionOptions_RIGHT_TO_LEFT_DIRECTION;
  /**
   * Right-to-left paragraph direction.
   */
  readonly rightToLeftDirection: ParagraphDirectionOptions_RIGHT_TO_LEFT_DIRECTION;
  /**
   * Right-to-left paragraph direction.
   */
  readonly righttoleftdirection: ParagraphDirectionOptions_RIGHT_TO_LEFT_DIRECTION;

}
