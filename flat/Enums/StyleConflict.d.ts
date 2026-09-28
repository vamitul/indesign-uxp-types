/**
 * StyleConflict.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StyleConflict: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StyleConflict extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StyleConflict>): boolean;

  /**
   * @internal **WARNING:** `__StyleConflict` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StyleConflict]: never;
}


/**
 * Uses the publication style.
 */
interface StyleConflict_PUBLICATION_DEFINITION extends StyleConflict {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414819940;
}

/**
 * Uses the tag file style.
 */
interface StyleConflict_TAG_FILE_DEFINITION extends StyleConflict {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1413903460;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for resolving style conflicts when importing tagged text.
 */
export declare namespace StyleConflict {
/**
 * Uses the publication style.
 */
type PUBLICATION_DEFINITION = StyleConflict_PUBLICATION_DEFINITION;

/**
 * Uses the tag file style.
 */
type TAG_FILE_DEFINITION = StyleConflict_TAG_FILE_DEFINITION;

}
/**
 * Options for resolving style conflicts when importing tagged text.
 */
export declare const StyleConflict: typeof Enumeration & {

  /**
   * Uses the publication style.
   */
  readonly PUBLICATION_DEFINITION: StyleConflict_PUBLICATION_DEFINITION;
  /**
   * Uses the publication style.
   */
  readonly publicationDefinition: StyleConflict_PUBLICATION_DEFINITION;
  /**
   * Uses the publication style.
   */
  readonly publicationdefinition: StyleConflict_PUBLICATION_DEFINITION;

  /**
   * Uses the tag file style.
   */
  readonly TAG_FILE_DEFINITION: StyleConflict_TAG_FILE_DEFINITION;
  /**
   * Uses the tag file style.
   */
  readonly tagFileDefinition: StyleConflict_TAG_FILE_DEFINITION;
  /**
   * Uses the tag file style.
   */
  readonly tagfiledefinition: StyleConflict_TAG_FILE_DEFINITION;

}
