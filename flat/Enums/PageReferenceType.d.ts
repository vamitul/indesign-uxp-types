/**
 * PageReferenceType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageReferenceType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageReferenceType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageReferenceType>): boolean;

  /**
   * @internal **WARNING:** `__PageReferenceType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageReferenceType]: never;
}


/**
 * The page on which the index entry is located.
 */
interface PageReferenceType_CURRENT_PAGE extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668444263;
}

/**
 * The range of pages from the page containing the index entry to the page containing the next paragraph style change.
 */
interface PageReferenceType_TO_NEXT_STYLE_CHANGE extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953395555;
}

/**
 * The range of pages from the page containing the index entry to the page that
 * contains the next occurrence of the specified paragraph style. If no paragraph
 * style is specified, the paragraph style of the index entry paragraph is used.
 */
interface PageReferenceType_TO_NEXT_USE_OF_STYLE extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953396083;
}

/**
 * The last page in the story containing the index entry.
 */
interface PageReferenceType_TO_END_OF_STORY extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701802868;
}

/**
 * The last page in the document.
 */
interface PageReferenceType_TO_END_OF_DOCUMENT extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701799011;
}

/**
 * The last page in the numbered section containing the index entry.
 */
interface PageReferenceType_TO_END_OF_SECTION extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701802851;
}

/**
 * The range of pages from the page containing the index entry to the page containing the nth full paragraph from the paragraph containing the index entry (where n is the number of paragraphs to include).
 */
interface PageReferenceType_FOR_NEXT_N_PARAGRAPHS extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718513778;
}

/**
 * The range of pages from the page containing the index entry to the nth page
 * after that page (where n is the number of pages to include).
 */
interface PageReferenceType_FOR_NEXT_N_PAGES extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718513767;
}

/**
 * Turns off page numbers for the index topic.
 */
interface PageReferenceType_SUPPRESS_PAGE_NUMBERS extends PageReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852863079;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for index page references.
 */
export declare namespace PageReferenceType {
/**
 * The page on which the index entry is located.
 */
type CURRENT_PAGE = PageReferenceType_CURRENT_PAGE;

/**
 * The range of pages from the page containing the index entry to the page containing the next paragraph style change.
 */
type TO_NEXT_STYLE_CHANGE = PageReferenceType_TO_NEXT_STYLE_CHANGE;

/**
 * The range of pages from the page containing the index entry to the page that
 * contains the next occurrence of the specified paragraph style. If no paragraph
 * style is specified, the paragraph style of the index entry paragraph is used.
 */
type TO_NEXT_USE_OF_STYLE = PageReferenceType_TO_NEXT_USE_OF_STYLE;

/**
 * The last page in the story containing the index entry.
 */
type TO_END_OF_STORY = PageReferenceType_TO_END_OF_STORY;

/**
 * The last page in the document.
 */
type TO_END_OF_DOCUMENT = PageReferenceType_TO_END_OF_DOCUMENT;

/**
 * The last page in the numbered section containing the index entry.
 */
type TO_END_OF_SECTION = PageReferenceType_TO_END_OF_SECTION;

/**
 * The range of pages from the page containing the index entry to the page containing the nth full paragraph from the paragraph containing the index entry (where n is the number of paragraphs to include).
 */
type FOR_NEXT_N_PARAGRAPHS = PageReferenceType_FOR_NEXT_N_PARAGRAPHS;

/**
 * The range of pages from the page containing the index entry to the nth page
 * after that page (where n is the number of pages to include).
 */
type FOR_NEXT_N_PAGES = PageReferenceType_FOR_NEXT_N_PAGES;

/**
 * Turns off page numbers for the index topic.
 */
type SUPPRESS_PAGE_NUMBERS = PageReferenceType_SUPPRESS_PAGE_NUMBERS;

}
/**
 * Options for index page references.
 */
export declare const PageReferenceType: typeof Enumeration & {

  /**
   * The page on which the index entry is located.
   */
  readonly CURRENT_PAGE: PageReferenceType_CURRENT_PAGE;
  /**
   * The page on which the index entry is located.
   */
  readonly currentPage: PageReferenceType_CURRENT_PAGE;
  /**
   * The page on which the index entry is located.
   */
  readonly currentpage: PageReferenceType_CURRENT_PAGE;

  /**
   * The range of pages from the page containing the index entry to the page containing the next paragraph style change.
   */
  readonly TO_NEXT_STYLE_CHANGE: PageReferenceType_TO_NEXT_STYLE_CHANGE;
  /**
   * The range of pages from the page containing the index entry to the page containing the next paragraph style change.
   */
  readonly toNextStyleChange: PageReferenceType_TO_NEXT_STYLE_CHANGE;
  /**
   * The range of pages from the page containing the index entry to the page containing the next paragraph style change.
   */
  readonly tonextstylechange: PageReferenceType_TO_NEXT_STYLE_CHANGE;

  /**
   * The range of pages from the page containing the index entry to the page that
   * contains the next occurrence of the specified paragraph style. If no paragraph
   * style is specified, the paragraph style of the index entry paragraph is used.
   */
  readonly TO_NEXT_USE_OF_STYLE: PageReferenceType_TO_NEXT_USE_OF_STYLE;
  /**
   * The range of pages from the page containing the index entry to the page that
   * contains the next occurrence of the specified paragraph style. If no paragraph
   * style is specified, the paragraph style of the index entry paragraph is used.
   */
  readonly toNextUseOfStyle: PageReferenceType_TO_NEXT_USE_OF_STYLE;
  /**
   * The range of pages from the page containing the index entry to the page that
   * contains the next occurrence of the specified paragraph style. If no paragraph
   * style is specified, the paragraph style of the index entry paragraph is used.
   */
  readonly tonextuseofstyle: PageReferenceType_TO_NEXT_USE_OF_STYLE;

  /**
   * The last page in the story containing the index entry.
   */
  readonly TO_END_OF_STORY: PageReferenceType_TO_END_OF_STORY;
  /**
   * The last page in the story containing the index entry.
   */
  readonly toEndOfStory: PageReferenceType_TO_END_OF_STORY;
  /**
   * The last page in the story containing the index entry.
   */
  readonly toendofstory: PageReferenceType_TO_END_OF_STORY;

  /**
   * The last page in the document.
   */
  readonly TO_END_OF_DOCUMENT: PageReferenceType_TO_END_OF_DOCUMENT;
  /**
   * The last page in the document.
   */
  readonly toEndOfDocument: PageReferenceType_TO_END_OF_DOCUMENT;
  /**
   * The last page in the document.
   */
  readonly toendofdocument: PageReferenceType_TO_END_OF_DOCUMENT;

  /**
   * The last page in the numbered section containing the index entry.
   */
  readonly TO_END_OF_SECTION: PageReferenceType_TO_END_OF_SECTION;
  /**
   * The last page in the numbered section containing the index entry.
   */
  readonly toEndOfSection: PageReferenceType_TO_END_OF_SECTION;
  /**
   * The last page in the numbered section containing the index entry.
   */
  readonly toendofsection: PageReferenceType_TO_END_OF_SECTION;

  /**
   * The range of pages from the page containing the index entry to the page containing the nth full paragraph from the paragraph containing the index entry (where n is the number of paragraphs to include).
   */
  readonly FOR_NEXT_N_PARAGRAPHS: PageReferenceType_FOR_NEXT_N_PARAGRAPHS;
  /**
   * The range of pages from the page containing the index entry to the page containing the nth full paragraph from the paragraph containing the index entry (where n is the number of paragraphs to include).
   */
  readonly forNextNParagraphs: PageReferenceType_FOR_NEXT_N_PARAGRAPHS;
  /**
   * The range of pages from the page containing the index entry to the page containing the nth full paragraph from the paragraph containing the index entry (where n is the number of paragraphs to include).
   */
  readonly fornextnparagraphs: PageReferenceType_FOR_NEXT_N_PARAGRAPHS;

  /**
   * The range of pages from the page containing the index entry to the nth page
   * after that page (where n is the number of pages to include).
   */
  readonly FOR_NEXT_N_PAGES: PageReferenceType_FOR_NEXT_N_PAGES;
  /**
   * The range of pages from the page containing the index entry to the nth page
   * after that page (where n is the number of pages to include).
   */
  readonly forNextNPages: PageReferenceType_FOR_NEXT_N_PAGES;
  /**
   * The range of pages from the page containing the index entry to the nth page
   * after that page (where n is the number of pages to include).
   */
  readonly fornextnpages: PageReferenceType_FOR_NEXT_N_PAGES;

  /**
   * Turns off page numbers for the index topic.
   */
  readonly SUPPRESS_PAGE_NUMBERS: PageReferenceType_SUPPRESS_PAGE_NUMBERS;
  /**
   * Turns off page numbers for the index topic.
   */
  readonly suppressPageNumbers: PageReferenceType_SUPPRESS_PAGE_NUMBERS;
  /**
   * Turns off page numbers for the index topic.
   */
  readonly suppresspagenumbers: PageReferenceType_SUPPRESS_PAGE_NUMBERS;

}
