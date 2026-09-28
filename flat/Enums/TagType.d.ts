/**
 * TagType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TagType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TagType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TagType>): boolean;

  /**
   * @internal **WARNING:** `__TagType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TagType]: never;
}


/**
 * Determine the tag from XML structure, or fall back to the standard tag.
 */
interface TagType_TAG_FROM_STRUCTURE extends TagType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952928613;
}

/**
 * Tag as an artifact.
 */
interface TagType_TAG_ARTIFACT extends TagType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952924006;
}

/**
 * Tag as Story or Figure based on object type.
 */
interface TagType_TAG_BASED_ON_OBJECT extends TagType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952924271;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The tag type of a page item, used when tagging content for export.
 */
export declare namespace TagType {
/**
 * Determine the tag from XML structure, or fall back to the standard tag.
 */
type TAG_FROM_STRUCTURE = TagType_TAG_FROM_STRUCTURE;

/**
 * Tag as an artifact.
 */
type TAG_ARTIFACT = TagType_TAG_ARTIFACT;

/**
 * Tag as Story or Figure based on object type.
 */
type TAG_BASED_ON_OBJECT = TagType_TAG_BASED_ON_OBJECT;

}
/**
 * The tag type of a page item, used when tagging content for export.
 */
export declare const TagType: typeof Enumeration & {

  /**
   * Determine the tag from XML structure, or fall back to the standard tag.
   */
  readonly TAG_FROM_STRUCTURE: TagType_TAG_FROM_STRUCTURE;
  /**
   * Determine the tag from XML structure, or fall back to the standard tag.
   */
  readonly tagFromStructure: TagType_TAG_FROM_STRUCTURE;
  /**
   * Determine the tag from XML structure, or fall back to the standard tag.
   */
  readonly tagfromstructure: TagType_TAG_FROM_STRUCTURE;

  /**
   * Tag as an artifact.
   */
  readonly TAG_ARTIFACT: TagType_TAG_ARTIFACT;
  /**
   * Tag as an artifact.
   */
  readonly tagArtifact: TagType_TAG_ARTIFACT;
  /**
   * Tag as an artifact.
   */
  readonly tagartifact: TagType_TAG_ARTIFACT;

  /**
   * Tag as Story or Figure based on object type.
   */
  readonly TAG_BASED_ON_OBJECT: TagType_TAG_BASED_ON_OBJECT;
  /**
   * Tag as Story or Figure based on object type.
   */
  readonly tagBasedOnObject: TagType_TAG_BASED_ON_OBJECT;
  /**
   * Tag as Story or Figure based on object type.
   */
  readonly tagbasedonobject: TagType_TAG_BASED_ON_OBJECT;

}
