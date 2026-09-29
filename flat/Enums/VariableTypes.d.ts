/**
 * VariableTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __VariableTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface VariableTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<VariableTypes>): boolean;

  /**
   * @internal **WARNING:** `__VariableTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__VariableTypes]: never;
}


/**
 * Custom text variable.
 */
interface VariableTypes_CUSTOM_TEXT_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414947700;
}

/**
 * File name variable.
 */
interface VariableTypes_FILE_NAME_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414948462;
}

/**
 * Last page number variable.
 */
interface VariableTypes_LAST_PAGE_NUMBER_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414952048;
}

/**
 * Chapter number variable.
 */
interface VariableTypes_CHAPTER_NUMBER_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668183152;
}

/**
 * Output date variable.
 */
interface VariableTypes_OUTPUT_DATE_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414950756;
}

/**
 * Creation date variable.
 */
interface VariableTypes_CREATION_DATE_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414947684;
}

/**
 * Modification date variable.
 */
interface VariableTypes_MODIFICATION_DATE_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414950244;
}

/**
 * Running header (character style) variable.
 */
interface VariableTypes_MATCH_CHARACTER_STYLE_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414947667;
}

/**
 * Running header (paragraph style) variable.
 */
interface VariableTypes_MATCH_PARAGRAPH_STYLE_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414950995;
}

/**
 * Private cross reference page number variable.
 */
interface VariableTypes_XREF_PAGE_NUMBER_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414953074;
}

/**
 * Private cross reference chapter number variable.
 */
interface VariableTypes_XREF_CHAPTER_NUMBER_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414947694;
}

/**
 * Live Caption variable.
 */
interface VariableTypes_LIVE_CAPTION_TYPE extends VariableTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414947693;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * What kind of live content a text variable inserts — custom text, the file name, a page or
 * chapter number, a date, a running header, a cross-reference number, or a live caption.
 */
export declare namespace VariableTypes {
/**
 * Custom text variable.
 */
type CUSTOM_TEXT_TYPE = VariableTypes_CUSTOM_TEXT_TYPE;

/**
 * File name variable.
 */
type FILE_NAME_TYPE = VariableTypes_FILE_NAME_TYPE;

/**
 * Last page number variable.
 */
type LAST_PAGE_NUMBER_TYPE = VariableTypes_LAST_PAGE_NUMBER_TYPE;

/**
 * Chapter number variable.
 */
type CHAPTER_NUMBER_TYPE = VariableTypes_CHAPTER_NUMBER_TYPE;

/**
 * Output date variable.
 */
type OUTPUT_DATE_TYPE = VariableTypes_OUTPUT_DATE_TYPE;

/**
 * Creation date variable.
 */
type CREATION_DATE_TYPE = VariableTypes_CREATION_DATE_TYPE;

/**
 * Modification date variable.
 */
type MODIFICATION_DATE_TYPE = VariableTypes_MODIFICATION_DATE_TYPE;

/**
 * Running header (character style) variable.
 */
type MATCH_CHARACTER_STYLE_TYPE = VariableTypes_MATCH_CHARACTER_STYLE_TYPE;

/**
 * Running header (paragraph style) variable.
 */
type MATCH_PARAGRAPH_STYLE_TYPE = VariableTypes_MATCH_PARAGRAPH_STYLE_TYPE;

/**
 * Private cross reference page number variable.
 */
type XREF_PAGE_NUMBER_TYPE = VariableTypes_XREF_PAGE_NUMBER_TYPE;

/**
 * Private cross reference chapter number variable.
 */
type XREF_CHAPTER_NUMBER_TYPE = VariableTypes_XREF_CHAPTER_NUMBER_TYPE;

/**
 * Live Caption variable.
 */
type LIVE_CAPTION_TYPE = VariableTypes_LIVE_CAPTION_TYPE;

}
/**
 * What kind of live content a text variable inserts — custom text, the file name, a page or
 * chapter number, a date, a running header, a cross-reference number, or a live caption.
 */
export declare const VariableTypes: typeof Enumeration & {

  /**
   * Custom text variable.
   */
  readonly CUSTOM_TEXT_TYPE: VariableTypes_CUSTOM_TEXT_TYPE;
  /**
   * Custom text variable.
   */
  readonly customTextType: VariableTypes_CUSTOM_TEXT_TYPE;
  /**
   * Custom text variable.
   */
  readonly customtexttype: VariableTypes_CUSTOM_TEXT_TYPE;

  /**
   * File name variable.
   */
  readonly FILE_NAME_TYPE: VariableTypes_FILE_NAME_TYPE;
  /**
   * File name variable.
   */
  readonly fileNameType: VariableTypes_FILE_NAME_TYPE;
  /**
   * File name variable.
   */
  readonly filenametype: VariableTypes_FILE_NAME_TYPE;

  /**
   * Last page number variable.
   */
  readonly LAST_PAGE_NUMBER_TYPE: VariableTypes_LAST_PAGE_NUMBER_TYPE;
  /**
   * Last page number variable.
   */
  readonly lastPageNumberType: VariableTypes_LAST_PAGE_NUMBER_TYPE;
  /**
   * Last page number variable.
   */
  readonly lastpagenumbertype: VariableTypes_LAST_PAGE_NUMBER_TYPE;

  /**
   * Chapter number variable.
   */
  readonly CHAPTER_NUMBER_TYPE: VariableTypes_CHAPTER_NUMBER_TYPE;
  /**
   * Chapter number variable.
   */
  readonly chapterNumberType: VariableTypes_CHAPTER_NUMBER_TYPE;
  /**
   * Chapter number variable.
   */
  readonly chapternumbertype: VariableTypes_CHAPTER_NUMBER_TYPE;

  /**
   * Output date variable.
   */
  readonly OUTPUT_DATE_TYPE: VariableTypes_OUTPUT_DATE_TYPE;
  /**
   * Output date variable.
   */
  readonly outputDateType: VariableTypes_OUTPUT_DATE_TYPE;
  /**
   * Output date variable.
   */
  readonly outputdatetype: VariableTypes_OUTPUT_DATE_TYPE;

  /**
   * Creation date variable.
   */
  readonly CREATION_DATE_TYPE: VariableTypes_CREATION_DATE_TYPE;
  /**
   * Creation date variable.
   */
  readonly creationDateType: VariableTypes_CREATION_DATE_TYPE;
  /**
   * Creation date variable.
   */
  readonly creationdatetype: VariableTypes_CREATION_DATE_TYPE;

  /**
   * Modification date variable.
   */
  readonly MODIFICATION_DATE_TYPE: VariableTypes_MODIFICATION_DATE_TYPE;
  /**
   * Modification date variable.
   */
  readonly modificationDateType: VariableTypes_MODIFICATION_DATE_TYPE;
  /**
   * Modification date variable.
   */
  readonly modificationdatetype: VariableTypes_MODIFICATION_DATE_TYPE;

  /**
   * Running header (character style) variable.
   */
  readonly MATCH_CHARACTER_STYLE_TYPE: VariableTypes_MATCH_CHARACTER_STYLE_TYPE;
  /**
   * Running header (character style) variable.
   */
  readonly matchCharacterStyleType: VariableTypes_MATCH_CHARACTER_STYLE_TYPE;
  /**
   * Running header (character style) variable.
   */
  readonly matchcharacterstyletype: VariableTypes_MATCH_CHARACTER_STYLE_TYPE;

  /**
   * Running header (paragraph style) variable.
   */
  readonly MATCH_PARAGRAPH_STYLE_TYPE: VariableTypes_MATCH_PARAGRAPH_STYLE_TYPE;
  /**
   * Running header (paragraph style) variable.
   */
  readonly matchParagraphStyleType: VariableTypes_MATCH_PARAGRAPH_STYLE_TYPE;
  /**
   * Running header (paragraph style) variable.
   */
  readonly matchparagraphstyletype: VariableTypes_MATCH_PARAGRAPH_STYLE_TYPE;

  /**
   * Private cross reference page number variable.
   */
  readonly XREF_PAGE_NUMBER_TYPE: VariableTypes_XREF_PAGE_NUMBER_TYPE;
  /**
   * Private cross reference page number variable.
   */
  readonly xrefPageNumberType: VariableTypes_XREF_PAGE_NUMBER_TYPE;
  /**
   * Private cross reference page number variable.
   */
  readonly xrefpagenumbertype: VariableTypes_XREF_PAGE_NUMBER_TYPE;

  /**
   * Private cross reference chapter number variable.
   */
  readonly XREF_CHAPTER_NUMBER_TYPE: VariableTypes_XREF_CHAPTER_NUMBER_TYPE;
  /**
   * Private cross reference chapter number variable.
   */
  readonly xrefChapterNumberType: VariableTypes_XREF_CHAPTER_NUMBER_TYPE;
  /**
   * Private cross reference chapter number variable.
   */
  readonly xrefchapternumbertype: VariableTypes_XREF_CHAPTER_NUMBER_TYPE;

  /**
   * Live Caption variable.
   */
  readonly LIVE_CAPTION_TYPE: VariableTypes_LIVE_CAPTION_TYPE;
  /**
   * Live Caption variable.
   */
  readonly liveCaptionType: VariableTypes_LIVE_CAPTION_TYPE;
  /**
   * Live Caption variable.
   */
  readonly livecaptiontype: VariableTypes_LIVE_CAPTION_TYPE;

}
