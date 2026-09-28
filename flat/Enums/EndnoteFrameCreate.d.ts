/**
 * EndnoteFrameCreate.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EndnoteFrameCreate: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EndnoteFrameCreate extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EndnoteFrameCreate>): boolean;

  /**
   * @internal **WARNING:** `__EndnoteFrameCreate` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EndnoteFrameCreate]: never;
}


/**
 * Endnotes are loaded in placegun to be placed anywhere in document.
 */
interface EndnoteFrameCreate_LOAD_ENDNOTE_PLACE_GUN extends EndnoteFrameCreate {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162768487;
}

/**
 * Creates a new page and frame for the endnotes automatically.
 */
interface EndnoteFrameCreate_NEW_PAGE extends EndnoteFrameCreate {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162767984;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for frame creation of endnotes.
 */
export declare namespace EndnoteFrameCreate {
/**
 * Endnotes are loaded in placegun to be placed anywhere in document.
 */
type LOAD_ENDNOTE_PLACE_GUN = EndnoteFrameCreate_LOAD_ENDNOTE_PLACE_GUN;

/**
 * Endnotes created on a new page and frame which are automatically created.
 */
type NEW_PAGE = EndnoteFrameCreate_NEW_PAGE;

}
/**
 * Options for frame creation of endnotes.
 */
export declare const EndnoteFrameCreate: typeof Enumeration & {

  /**
   * Endnotes are loaded in placegun to be placed anywhere in document.
   */
  readonly LOAD_ENDNOTE_PLACE_GUN: EndnoteFrameCreate_LOAD_ENDNOTE_PLACE_GUN;
  /**
   * Endnotes are loaded in placegun to be placed anywhere in document.
   */
  readonly loadEndnotePlaceGun: EndnoteFrameCreate_LOAD_ENDNOTE_PLACE_GUN;
  /**
   * Endnotes are loaded in placegun to be placed anywhere in document.
   */
  readonly loadendnoteplacegun: EndnoteFrameCreate_LOAD_ENDNOTE_PLACE_GUN;

  /**
   * Creates a new page and frame for the endnotes automatically.
   */
  readonly NEW_PAGE: EndnoteFrameCreate_NEW_PAGE;
  /**
   * Creates a new page and frame for the endnotes automatically.
   */
  readonly newPage: EndnoteFrameCreate_NEW_PAGE;
  /**
   * Creates a new page and frame for the endnotes automatically.
   */
  readonly newpage: EndnoteFrameCreate_NEW_PAGE;

}
