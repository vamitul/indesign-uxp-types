/**
 * IndexCapitalizationOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __IndexCapitalizationOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface IndexCapitalizationOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<IndexCapitalizationOptions>): boolean;

  /**
   * @internal **WARNING:** `__IndexCapitalizationOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__IndexCapitalizationOptions]: never;
}


/**
 * Capitalizes the specified topic but does not capitalize its nested topics.
 *
 * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
 * the index capitalize method. Note: Must occur after the specified topic and its nested
 * topics are created.
 */
interface IndexCapitalizationOptions_SELECTED_ENTRY extends IndexCapitalizationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1398042725;
}

/**
 * Capitalizes the specified topic and its nested topics.
 *
 * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
 * the index capitalize method. Note: Must occur after the selected topic and its nested
 * subtopics are created.
 */
interface IndexCapitalizationOptions_INCLUDE_SUBENTRIES extends IndexCapitalizationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1767072325;
}

/**
 * Capitalizes all level 1 entries. Note: Capitalizes only topics created before the capitalization statement appears in the script. 
 */
interface IndexCapitalizationOptions_ALL_LEVEL_1_ENTRIES extends IndexCapitalizationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095517556;
}

/**
 * Capitalizes all index entries. Note: Capitalizes only topics created before the capitalization statement appears in the script.
 */
interface IndexCapitalizationOptions_ALL_ENTRIES extends IndexCapitalizationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097624645;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Index entry capitalization options.
 */
export declare namespace IndexCapitalizationOptions {
/**
 * Capitalizes the specified topic but does not capitalize its nested topics.
 *
 * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
 * the index capitalize method. Note: Must occur after the specified topic and its nested
 * topics are created.
 */
type SELECTED_ENTRY = IndexCapitalizationOptions_SELECTED_ENTRY;

/**
 * Capitalizes the specified topic and its nested topics.
 *
 * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
 * the index capitalize method. Note: Must occur after the selected topic and its nested
 * subtopics are created.
 */
type INCLUDE_SUBENTRIES = IndexCapitalizationOptions_INCLUDE_SUBENTRIES;

/**
 * Capitalizes all level 1 entries. Note: Capitalizes only topics created before the capitalization statement appears in the script. 
 */
type ALL_LEVEL_1_ENTRIES = IndexCapitalizationOptions_ALL_LEVEL_1_ENTRIES;

/**
 * Capitalizes all index entries. Note: Capitalizes only topics created before the capitalization statement appears in the script.
 */
type ALL_ENTRIES = IndexCapitalizationOptions_ALL_ENTRIES;

}
/**
 * Index entry capitalization options.
 */
export declare const IndexCapitalizationOptions: typeof Enumeration & {

  /**
   * Capitalizes the specified topic but does not capitalize its nested topics.
   *
   * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
   * the index capitalize method. Note: Must occur after the specified topic and its nested
   * topics are created.
   */
  readonly SELECTED_ENTRY: IndexCapitalizationOptions_SELECTED_ENTRY;
  /**
   * Capitalizes the specified topic but does not capitalize its nested topics.
   *
   * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
   * the index capitalize method. Note: Must occur after the specified topic and its nested
   * topics are created.
   */
  readonly selectedEntry: IndexCapitalizationOptions_SELECTED_ENTRY;
  /**
   * Capitalizes the specified topic but does not capitalize its nested topics.
   *
   * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
   * the index capitalize method. Note: Must occur after the specified topic and its nested
   * topics are created.
   */
  readonly selectedentry: IndexCapitalizationOptions_SELECTED_ENTRY;

  /**
   * Capitalizes the specified topic and its nested topics.
   *
   * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
   * the index capitalize method. Note: Must occur after the selected topic and its nested
   * subtopics are created.
   */
  readonly INCLUDE_SUBENTRIES: IndexCapitalizationOptions_INCLUDE_SUBENTRIES;
  /**
   * Capitalizes the specified topic and its nested topics.
   *
   * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
   * the index capitalize method. Note: Must occur after the selected topic and its nested
   * subtopics are created.
   */
  readonly includeSubentries: IndexCapitalizationOptions_INCLUDE_SUBENTRIES;
  /**
   * Capitalizes the specified topic and its nested topics.
   *
   * Valid only as parameter of the topic capitalize method; cannot be used as a parameter of
   * the index capitalize method. Note: Must occur after the selected topic and its nested
   * subtopics are created.
   */
  readonly includesubentries: IndexCapitalizationOptions_INCLUDE_SUBENTRIES;

  /**
   * Capitalizes all level 1 entries. Note: Capitalizes only topics created before the capitalization statement appears in the script. 
   */
  readonly ALL_LEVEL_1_ENTRIES: IndexCapitalizationOptions_ALL_LEVEL_1_ENTRIES;
  /**
   * Capitalizes all level 1 entries. Note: Capitalizes only topics created before the capitalization statement appears in the script. 
   */
  readonly allLevel1Entries: IndexCapitalizationOptions_ALL_LEVEL_1_ENTRIES;
  /**
   * Capitalizes all level 1 entries. Note: Capitalizes only topics created before the capitalization statement appears in the script. 
   */
  readonly alllevel1entries: IndexCapitalizationOptions_ALL_LEVEL_1_ENTRIES;

  /**
   * Capitalizes all index entries. Note: Capitalizes only topics created before the capitalization statement appears in the script.
   */
  readonly ALL_ENTRIES: IndexCapitalizationOptions_ALL_ENTRIES;
  /**
   * Capitalizes all index entries. Note: Capitalizes only topics created before the capitalization statement appears in the script.
   */
  readonly allEntries: IndexCapitalizationOptions_ALL_ENTRIES;
  /**
   * Capitalizes all index entries. Note: Capitalizes only topics created before the capitalization statement appears in the script.
   */
  readonly allentries: IndexCapitalizationOptions_ALL_ENTRIES;

}
