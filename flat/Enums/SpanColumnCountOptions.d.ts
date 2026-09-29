/**
 * SpanColumnCountOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SpanColumnCountOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SpanColumnCountOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SpanColumnCountOptions>): boolean;

  /**
   * @internal **WARNING:** `__SpanColumnCountOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SpanColumnCountOptions]: never;
}


/**
 * Paragraph spans all columns.
 */
interface SpanColumnCountOptions_ALL extends SpanColumnCountOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634495520;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a paragraph spans a fixed number of columns or all of them.
 */
export declare namespace SpanColumnCountOptions {
/**
 * Paragraph spans all columns.
 */
type ALL = SpanColumnCountOptions_ALL;

}
/**
 * Whether a paragraph spans a fixed number of columns or all of them.
 */
export declare const SpanColumnCountOptions: typeof Enumeration & {

  /**
   * Paragraph spans all columns.
   */
  readonly ALL: SpanColumnCountOptions_ALL;
  /**
   * Paragraph spans all columns.
   */
  readonly all: SpanColumnCountOptions_ALL;

}
