/**
 * FootnoteMarkerPositioning.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FootnoteMarkerPositioning: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FootnoteMarkerPositioning extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FootnoteMarkerPositioning>): boolean;

  /**
   * @internal **WARNING:** `__FootnoteMarkerPositioning` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FootnoteMarkerPositioning]: never;
}


/**
 * Uses the position defined in the character style applied to footnote reference numbers. For information, see footnote marker style.
 */
interface FootnoteMarkerPositioning_NORMAL_MARKER extends FootnoteMarkerPositioning {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181576816;
}

/**
 * Superscripts footnote reference numbers.
 */
interface FootnoteMarkerPositioning_SUPERSCRIPT_MARKER extends FootnoteMarkerPositioning {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181569904;
}

/**
 * Subscripts footnote reference numbers.
 */
interface FootnoteMarkerPositioning_SUBSCRIPT_MARKER extends FootnoteMarkerPositioning {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181578096;
}

/**
 * Gives the marker ruby style positioning.
 */
interface FootnoteMarkerPositioning_RUBY_MARKER extends FootnoteMarkerPositioning {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181577840;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for positioning footnote reference numbers relative to characters the main text.
 */
export declare namespace FootnoteMarkerPositioning {
/**
 * Uses the position defined in the character style applied to footnote reference numbers. For information, see footnote marker style.
 */
type NORMAL_MARKER = FootnoteMarkerPositioning_NORMAL_MARKER;

/**
 * Superscripts footnote reference numbers.
 */
type SUPERSCRIPT_MARKER = FootnoteMarkerPositioning_SUPERSCRIPT_MARKER;

/**
 * Subscripts footnote reference numbers.
 */
type SUBSCRIPT_MARKER = FootnoteMarkerPositioning_SUBSCRIPT_MARKER;

/**
 * Gives the marker ruby style positioning.
 */
type RUBY_MARKER = FootnoteMarkerPositioning_RUBY_MARKER;

}
/**
 * Options for positioning footnote reference numbers relative to characters the main text.
 */
export declare const FootnoteMarkerPositioning: typeof Enumeration & {

  /**
   * Uses the position defined in the character style applied to footnote reference numbers. For information, see footnote marker style.
   */
  readonly NORMAL_MARKER: FootnoteMarkerPositioning_NORMAL_MARKER;
  /**
   * Uses the position defined in the character style applied to footnote reference numbers. For information, see footnote marker style.
   */
  readonly normalMarker: FootnoteMarkerPositioning_NORMAL_MARKER;
  /**
   * Uses the position defined in the character style applied to footnote reference numbers. For information, see footnote marker style.
   */
  readonly normalmarker: FootnoteMarkerPositioning_NORMAL_MARKER;

  /**
   * Superscripts footnote reference numbers.
   */
  readonly SUPERSCRIPT_MARKER: FootnoteMarkerPositioning_SUPERSCRIPT_MARKER;
  /**
   * Superscripts footnote reference numbers.
   */
  readonly superscriptMarker: FootnoteMarkerPositioning_SUPERSCRIPT_MARKER;
  /**
   * Superscripts footnote reference numbers.
   */
  readonly superscriptmarker: FootnoteMarkerPositioning_SUPERSCRIPT_MARKER;

  /**
   * Subscripts footnote reference numbers.
   */
  readonly SUBSCRIPT_MARKER: FootnoteMarkerPositioning_SUBSCRIPT_MARKER;
  /**
   * Subscripts footnote reference numbers.
   */
  readonly subscriptMarker: FootnoteMarkerPositioning_SUBSCRIPT_MARKER;
  /**
   * Subscripts footnote reference numbers.
   */
  readonly subscriptmarker: FootnoteMarkerPositioning_SUBSCRIPT_MARKER;

  /**
   * Gives the marker ruby style positioning.
   */
  readonly RUBY_MARKER: FootnoteMarkerPositioning_RUBY_MARKER;
  /**
   * Gives the marker ruby style positioning.
   */
  readonly rubyMarker: FootnoteMarkerPositioning_RUBY_MARKER;
  /**
   * Gives the marker ruby style positioning.
   */
  readonly rubymarker: FootnoteMarkerPositioning_RUBY_MARKER;

}
