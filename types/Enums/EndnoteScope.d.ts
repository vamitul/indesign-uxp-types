/**
 * EndnoteScope.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EndnoteScope: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EndnoteScope extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EndnoteScope>): boolean;

  /**
   * @internal **WARNING:** `__EndnoteScope` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EndnoteScope]: never;
}


/**
 * Endnotes specific to each story.
 */
interface EndnoteScope_STORY_SCOPE extends EndnoteScope {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162769267;
}

/**
 * Endnotes specific to each document.
 */
interface EndnoteScope_ENDNOTE_DOCUMENT_SCOPE extends EndnoteScope {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162765427;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for scope of endnote placement.
 */
export declare namespace EndnoteScope {
/**
 * Endnotes specific to each story.
 */
type STORY_SCOPE = EndnoteScope_STORY_SCOPE;

/**
 * Endnotes specific to each document.
 */
type ENDNOTE_DOCUMENT_SCOPE = EndnoteScope_ENDNOTE_DOCUMENT_SCOPE;

}
/**
 * Options for scope of endnote placement.
 */
export declare const EndnoteScope: typeof Enumeration & {

  /**
   * Endnotes specific to each story.
   */
  readonly STORY_SCOPE: EndnoteScope_STORY_SCOPE;
  /**
   * Endnotes specific to each story.
   */
  readonly storyScope: EndnoteScope_STORY_SCOPE;
  /**
   * Endnotes specific to each story.
   */
  readonly storyscope: EndnoteScope_STORY_SCOPE;

  /**
   * Endnotes specific to each document.
   */
  readonly ENDNOTE_DOCUMENT_SCOPE: EndnoteScope_ENDNOTE_DOCUMENT_SCOPE;
  /**
   * Endnotes specific to each document.
   */
  readonly endnoteDocumentScope: EndnoteScope_ENDNOTE_DOCUMENT_SCOPE;
  /**
   * Endnotes specific to each document.
   */
  readonly endnotedocumentscope: EndnoteScope_ENDNOTE_DOCUMENT_SCOPE;

}
