/**
 * FontEmbedding.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FontEmbedding: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FontEmbedding extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FontEmbedding>): boolean;

  /**
   * @internal **WARNING:** `__FontEmbedding` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FontEmbedding]: never;
}


/**
 * Embeds only references to fonts.
 */
interface FontEmbedding_NONE extends FontEmbedding {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Embeds all fonts once per page.
 */
interface FontEmbedding_COMPLETE extends FontEmbedding {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2003332197;
}

/**
 * Embeds only the characters (glyphs) used in the document. Glyphs are downloaded once per page.
 */
interface FontEmbedding_SUBSET extends FontEmbedding {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768842098;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for embedding fonts in the exported EPS.
 */
export declare namespace FontEmbedding {
/**
 * Embeds only references to fonts.
 */
type NONE = FontEmbedding_NONE;

/**
 * Embeds all fonts once per page.
 */
type COMPLETE = FontEmbedding_COMPLETE;

/**
 * Embeds only the characters (glyphs) used in the document. Glyphs are downloaded once per page.
 */
type SUBSET = FontEmbedding_SUBSET;

}
/**
 * Options for embedding fonts in the exported EPS.
 */
export declare const FontEmbedding: typeof Enumeration & {

  /**
   * Embeds only references to fonts.
   */
  readonly NONE: FontEmbedding_NONE;
  /**
   * Embeds only references to fonts.
   */
  readonly none: FontEmbedding_NONE;

  /**
   * Embeds all fonts once per page.
   */
  readonly COMPLETE: FontEmbedding_COMPLETE;
  /**
   * Embeds all fonts once per page.
   */
  readonly complete: FontEmbedding_COMPLETE;

  /**
   * Embeds only the characters (glyphs) used in the document. Glyphs are downloaded once per page.
   */
  readonly SUBSET: FontEmbedding_SUBSET;
  /**
   * Embeds only the characters (glyphs) used in the document. Glyphs are downloaded once per page.
   */
  readonly subset: FontEmbedding_SUBSET;

}
