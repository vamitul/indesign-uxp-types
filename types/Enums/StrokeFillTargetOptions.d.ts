/**
 * StrokeFillTargetOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StrokeFillTargetOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StrokeFillTargetOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StrokeFillTargetOptions>): boolean;

  /**
   * @internal **WARNING:** `__StrokeFillTargetOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StrokeFillTargetOptions]: never;
}


/**
 * Formatting affects the container.
 */
interface StrokeFillTargetOptions_FORMATTING_AFFECTS_CONTAINER extends StrokeFillTargetOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181696323;
}

/**
 * Formatting affects the text.
 */
interface StrokeFillTargetOptions_FORMATTING_AFFECTS_TEXT extends StrokeFillTargetOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181696340;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether formatting applied through the stroke/fill proxy affects the container or its text.
 */
export declare namespace StrokeFillTargetOptions {
/**
 * Formatting affects the container.
 */
type FORMATTING_AFFECTS_CONTAINER = StrokeFillTargetOptions_FORMATTING_AFFECTS_CONTAINER;

/**
 * Formatting affects the text.
 */
type FORMATTING_AFFECTS_TEXT = StrokeFillTargetOptions_FORMATTING_AFFECTS_TEXT;

}
/**
 * Whether formatting applied through the stroke/fill proxy affects the container or its text.
 */
export declare const StrokeFillTargetOptions: typeof Enumeration & {

  /**
   * Formatting affects the container.
   */
  readonly FORMATTING_AFFECTS_CONTAINER: StrokeFillTargetOptions_FORMATTING_AFFECTS_CONTAINER;
  /**
   * Formatting affects the container.
   */
  readonly formattingAffectsContainer: StrokeFillTargetOptions_FORMATTING_AFFECTS_CONTAINER;
  /**
   * Formatting affects the container.
   */
  readonly formattingaffectscontainer: StrokeFillTargetOptions_FORMATTING_AFFECTS_CONTAINER;

  /**
   * Formatting affects the text.
   */
  readonly FORMATTING_AFFECTS_TEXT: StrokeFillTargetOptions_FORMATTING_AFFECTS_TEXT;
  /**
   * Formatting affects the text.
   */
  readonly formattingAffectsText: StrokeFillTargetOptions_FORMATTING_AFFECTS_TEXT;
  /**
   * Formatting affects the text.
   */
  readonly formattingaffectstext: StrokeFillTargetOptions_FORMATTING_AFFECTS_TEXT;

}
