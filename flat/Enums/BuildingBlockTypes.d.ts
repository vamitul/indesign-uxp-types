/**
 * BuildingBlockTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BuildingBlockTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BuildingBlockTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BuildingBlockTypes>): boolean;

  /**
   * @internal **WARNING:** `__BuildingBlockTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BuildingBlockTypes]: never;
}


/**
 * Custom string building block type.
 */
interface BuildingBlockTypes_CUSTOM_STRING_BUILDING_BLOCK extends BuildingBlockTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650615155;
}

/**
 * File name building block type.
 */
interface BuildingBlockTypes_FILE_NAME_BUILDING_BLOCK extends BuildingBlockTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650615918;
}

/**
 * Chapter number building block type.
 */
interface BuildingBlockTypes_CHAPTER_NUMBER_BUILDING_BLOCK extends BuildingBlockTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650615150;
}

/**
 * Page number building block type.
 */
interface BuildingBlockTypes_PAGE_NUMBER_BUILDING_BLOCK extends BuildingBlockTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650618478;
}

/**
 * Full paragraph building block type.
 */
interface BuildingBlockTypes_FULL_PARAGRAPH_BUILDING_BLOCK extends BuildingBlockTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650615920;
}

/**
 * Paragraph number building block type.
 */
interface BuildingBlockTypes_PARAGRAPH_NUMBER_BUILDING_BLOCK extends BuildingBlockTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651533678;
}

/**
 * Paragraph text building block type.
 */
interface BuildingBlockTypes_PARAGRAPH_TEXT_BUILDING_BLOCK extends BuildingBlockTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650618484;
}

/**
 * Bookmark name building block type.
 */
interface BuildingBlockTypes_BOOKMARK_NAME_BUILDING_BLOCK extends BuildingBlockTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650614894;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Cross reference building block types.
 */
export declare namespace BuildingBlockTypes {
/**
 * Custom string building block type.
 */
type CUSTOM_STRING_BUILDING_BLOCK = BuildingBlockTypes_CUSTOM_STRING_BUILDING_BLOCK;

/**
 * File name building block type.
 */
type FILE_NAME_BUILDING_BLOCK = BuildingBlockTypes_FILE_NAME_BUILDING_BLOCK;

/**
 * Chapter number building block type.
 */
type CHAPTER_NUMBER_BUILDING_BLOCK = BuildingBlockTypes_CHAPTER_NUMBER_BUILDING_BLOCK;

/**
 * Page number building block type.
 */
type PAGE_NUMBER_BUILDING_BLOCK = BuildingBlockTypes_PAGE_NUMBER_BUILDING_BLOCK;

/**
 * Full paragraph building block type.
 */
type FULL_PARAGRAPH_BUILDING_BLOCK = BuildingBlockTypes_FULL_PARAGRAPH_BUILDING_BLOCK;

/**
 * Paragraph number building block type.
 */
type PARAGRAPH_NUMBER_BUILDING_BLOCK = BuildingBlockTypes_PARAGRAPH_NUMBER_BUILDING_BLOCK;

/**
 * Paragraph text building block type.
 */
type PARAGRAPH_TEXT_BUILDING_BLOCK = BuildingBlockTypes_PARAGRAPH_TEXT_BUILDING_BLOCK;

/**
 * Bookmark name building block type.
 */
type BOOKMARK_NAME_BUILDING_BLOCK = BuildingBlockTypes_BOOKMARK_NAME_BUILDING_BLOCK;

}
/**
 * Cross reference building block types.
 */
export declare const BuildingBlockTypes: typeof Enumeration & {

  /**
   * Custom string building block type.
   */
  readonly CUSTOM_STRING_BUILDING_BLOCK: BuildingBlockTypes_CUSTOM_STRING_BUILDING_BLOCK;
  /**
   * Custom string building block type.
   */
  readonly customStringBuildingBlock: BuildingBlockTypes_CUSTOM_STRING_BUILDING_BLOCK;
  /**
   * Custom string building block type.
   */
  readonly customstringbuildingblock: BuildingBlockTypes_CUSTOM_STRING_BUILDING_BLOCK;

  /**
   * File name building block type.
   */
  readonly FILE_NAME_BUILDING_BLOCK: BuildingBlockTypes_FILE_NAME_BUILDING_BLOCK;
  /**
   * File name building block type.
   */
  readonly fileNameBuildingBlock: BuildingBlockTypes_FILE_NAME_BUILDING_BLOCK;
  /**
   * File name building block type.
   */
  readonly filenamebuildingblock: BuildingBlockTypes_FILE_NAME_BUILDING_BLOCK;

  /**
   * Chapter number building block type.
   */
  readonly CHAPTER_NUMBER_BUILDING_BLOCK: BuildingBlockTypes_CHAPTER_NUMBER_BUILDING_BLOCK;
  /**
   * Chapter number building block type.
   */
  readonly chapterNumberBuildingBlock: BuildingBlockTypes_CHAPTER_NUMBER_BUILDING_BLOCK;
  /**
   * Chapter number building block type.
   */
  readonly chapternumberbuildingblock: BuildingBlockTypes_CHAPTER_NUMBER_BUILDING_BLOCK;

  /**
   * Page number building block type.
   */
  readonly PAGE_NUMBER_BUILDING_BLOCK: BuildingBlockTypes_PAGE_NUMBER_BUILDING_BLOCK;
  /**
   * Page number building block type.
   */
  readonly pageNumberBuildingBlock: BuildingBlockTypes_PAGE_NUMBER_BUILDING_BLOCK;
  /**
   * Page number building block type.
   */
  readonly pagenumberbuildingblock: BuildingBlockTypes_PAGE_NUMBER_BUILDING_BLOCK;

  /**
   * Full paragraph building block type.
   */
  readonly FULL_PARAGRAPH_BUILDING_BLOCK: BuildingBlockTypes_FULL_PARAGRAPH_BUILDING_BLOCK;
  /**
   * Full paragraph building block type.
   */
  readonly fullParagraphBuildingBlock: BuildingBlockTypes_FULL_PARAGRAPH_BUILDING_BLOCK;
  /**
   * Full paragraph building block type.
   */
  readonly fullparagraphbuildingblock: BuildingBlockTypes_FULL_PARAGRAPH_BUILDING_BLOCK;

  /**
   * Paragraph number building block type.
   */
  readonly PARAGRAPH_NUMBER_BUILDING_BLOCK: BuildingBlockTypes_PARAGRAPH_NUMBER_BUILDING_BLOCK;
  /**
   * Paragraph number building block type.
   */
  readonly paragraphNumberBuildingBlock: BuildingBlockTypes_PARAGRAPH_NUMBER_BUILDING_BLOCK;
  /**
   * Paragraph number building block type.
   */
  readonly paragraphnumberbuildingblock: BuildingBlockTypes_PARAGRAPH_NUMBER_BUILDING_BLOCK;

  /**
   * Paragraph text building block type.
   */
  readonly PARAGRAPH_TEXT_BUILDING_BLOCK: BuildingBlockTypes_PARAGRAPH_TEXT_BUILDING_BLOCK;
  /**
   * Paragraph text building block type.
   */
  readonly paragraphTextBuildingBlock: BuildingBlockTypes_PARAGRAPH_TEXT_BUILDING_BLOCK;
  /**
   * Paragraph text building block type.
   */
  readonly paragraphtextbuildingblock: BuildingBlockTypes_PARAGRAPH_TEXT_BUILDING_BLOCK;

  /**
   * Bookmark name building block type.
   */
  readonly BOOKMARK_NAME_BUILDING_BLOCK: BuildingBlockTypes_BOOKMARK_NAME_BUILDING_BLOCK;
  /**
   * Bookmark name building block type.
   */
  readonly bookmarkNameBuildingBlock: BuildingBlockTypes_BOOKMARK_NAME_BUILDING_BLOCK;
  /**
   * Bookmark name building block type.
   */
  readonly bookmarknamebuildingblock: BuildingBlockTypes_BOOKMARK_NAME_BUILDING_BLOCK;

}
