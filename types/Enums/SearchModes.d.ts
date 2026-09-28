/**
 * SearchModes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SearchModes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SearchModes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SearchModes>): boolean;

  /**
   * @internal **WARNING:** `__SearchModes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SearchModes]: never;
}


/**
 * Text search.
 */
interface SearchModes_TEXT_SEARCH extends SearchModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1182038131;
}

/**
 * Grep search.
 */
interface SearchModes_GREP_SEARCH extends SearchModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181184627;
}

/**
 * Glyph search.
 */
interface SearchModes_GLYPH_SEARCH extends SearchModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181183091;
}

/**
 * Object search.
 */
interface SearchModes_OBJECT_SEARCH extends SearchModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181704819;
}

/**
 * Color search.
 */
interface SearchModes_COLOR_SEARCH extends SearchModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1180921708;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which find/change engine a search uses — plain text, GREP, glyph, object, or colour.
 */
export declare namespace SearchModes {
/**
 * Text search.
 */
type TEXT_SEARCH = SearchModes_TEXT_SEARCH;

/**
 * Grep search.
 */
type GREP_SEARCH = SearchModes_GREP_SEARCH;

/**
 * Glyph search.
 */
type GLYPH_SEARCH = SearchModes_GLYPH_SEARCH;

/**
 * Object search.
 */
type OBJECT_SEARCH = SearchModes_OBJECT_SEARCH;

/**
 * Color search.
 */
type COLOR_SEARCH = SearchModes_COLOR_SEARCH;

}
/**
 * Which find/change engine a search uses — plain text, GREP, glyph, object, or colour.
 */
export declare const SearchModes: typeof Enumeration & {

  /**
   * Text search.
   */
  readonly TEXT_SEARCH: SearchModes_TEXT_SEARCH;
  /**
   * Text search.
   */
  readonly textSearch: SearchModes_TEXT_SEARCH;
  /**
   * Text search.
   */
  readonly textsearch: SearchModes_TEXT_SEARCH;

  /**
   * Grep search.
   */
  readonly GREP_SEARCH: SearchModes_GREP_SEARCH;
  /**
   * Grep search.
   */
  readonly grepSearch: SearchModes_GREP_SEARCH;
  /**
   * Grep search.
   */
  readonly grepsearch: SearchModes_GREP_SEARCH;

  /**
   * Glyph search.
   */
  readonly GLYPH_SEARCH: SearchModes_GLYPH_SEARCH;
  /**
   * Glyph search.
   */
  readonly glyphSearch: SearchModes_GLYPH_SEARCH;
  /**
   * Glyph search.
   */
  readonly glyphsearch: SearchModes_GLYPH_SEARCH;

  /**
   * Object search.
   */
  readonly OBJECT_SEARCH: SearchModes_OBJECT_SEARCH;
  /**
   * Object search.
   */
  readonly objectSearch: SearchModes_OBJECT_SEARCH;
  /**
   * Object search.
   */
  readonly objectsearch: SearchModes_OBJECT_SEARCH;

  /**
   * Color search.
   */
  readonly COLOR_SEARCH: SearchModes_COLOR_SEARCH;
  /**
   * Color search.
   */
  readonly colorSearch: SearchModes_COLOR_SEARCH;
  /**
   * Color search.
   */
  readonly colorsearch: SearchModes_COLOR_SEARCH;

}
