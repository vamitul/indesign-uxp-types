/**
 * StoryTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StoryTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StoryTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StoryTypes>): boolean;

  /**
   * @internal **WARNING:** `__StoryTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StoryTypes]: never;
}


/**
 * The story is a regular text story.
 */
interface StoryTypes_REGULAR_STORY extends StoryTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919382388;
}

/**
 * The story is a table of contents.
 */
interface StoryTypes_TOC_STORY extends StoryTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953461108;
}

/**
 * The story is an index.
 */
interface StoryTypes_INDEXING_STORY extends StoryTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768190836;
}

/**
 * The story is an endnote story.
 */
interface StoryTypes_ENDNOTE_STORY extends StoryTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701737332;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * What kind of content a story holds — regular text, a table of contents, an index, or
 * endnotes.
 */
export declare namespace StoryTypes {
/**
 * The story is a regular text story.
 */
type REGULAR_STORY = StoryTypes_REGULAR_STORY;

/**
 * The story is a table of contents.
 */
type TOC_STORY = StoryTypes_TOC_STORY;

/**
 * The story is an index.
 */
type INDEXING_STORY = StoryTypes_INDEXING_STORY;

/**
 * The story is an endnote story.
 */
type ENDNOTE_STORY = StoryTypes_ENDNOTE_STORY;

}
/**
 * What kind of content a story holds — regular text, a table of contents, an index, or
 * endnotes.
 */
export declare const StoryTypes: typeof Enumeration & {

  /**
   * The story is a regular text story.
   */
  readonly REGULAR_STORY: StoryTypes_REGULAR_STORY;
  /**
   * The story is a regular text story.
   */
  readonly regularStory: StoryTypes_REGULAR_STORY;
  /**
   * The story is a regular text story.
   */
  readonly regularstory: StoryTypes_REGULAR_STORY;

  /**
   * The story is a table of contents.
   */
  readonly TOC_STORY: StoryTypes_TOC_STORY;
  /**
   * The story is a table of contents.
   */
  readonly tocStory: StoryTypes_TOC_STORY;
  /**
   * The story is a table of contents.
   */
  readonly tocstory: StoryTypes_TOC_STORY;

  /**
   * The story is an index.
   */
  readonly INDEXING_STORY: StoryTypes_INDEXING_STORY;
  /**
   * The story is an index.
   */
  readonly indexingStory: StoryTypes_INDEXING_STORY;
  /**
   * The story is an index.
   */
  readonly indexingstory: StoryTypes_INDEXING_STORY;

  /**
   * The story is an endnote story.
   */
  readonly ENDNOTE_STORY: StoryTypes_ENDNOTE_STORY;
  /**
   * The story is an endnote story.
   */
  readonly endnoteStory: StoryTypes_ENDNOTE_STORY;
  /**
   * The story is an endnote story.
   */
  readonly endnotestory: StoryTypes_ENDNOTE_STORY;

}
