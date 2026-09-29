/**
 * PathTypeAlignments.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PathTypeAlignments: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PathTypeAlignments extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PathTypeAlignments>): boolean;

  /**
   * @internal **WARNING:** `__PathTypeAlignments` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PathTypeAlignments]: never;
}


/**
 * The text is aligned to the top of the path stroke.
 */
interface PathTypeAlignments_TOP_PATH_ALIGNMENT extends PathTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885434975;
}

/**
 * The text is aligned to the bottom of the path stroke.
 */
interface PathTypeAlignments_BOTTOM_PATH_ALIGNMENT extends PathTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885430367;
}

/**
 * The text is aligned to the center of the path stroke.
 */
interface PathTypeAlignments_CENTER_PATH_ALIGNMENT extends PathTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885430623;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for aligning text to the path's stroke. 
 */
export declare namespace PathTypeAlignments {
/**
 * The text is aligned to the top of the path stroke.
 */
type TOP_PATH_ALIGNMENT = PathTypeAlignments_TOP_PATH_ALIGNMENT;

/**
 * The text is aligned to the bottom of the path stroke.
 */
type BOTTOM_PATH_ALIGNMENT = PathTypeAlignments_BOTTOM_PATH_ALIGNMENT;

/**
 * The text is aligned to the center of the path stroke.
 */
type CENTER_PATH_ALIGNMENT = PathTypeAlignments_CENTER_PATH_ALIGNMENT;

}
/**
 * Options for aligning text to the path's stroke. 
 */
export declare const PathTypeAlignments: typeof Enumeration & {

  /**
   * The text is aligned to the top of the path stroke.
   */
  readonly TOP_PATH_ALIGNMENT: PathTypeAlignments_TOP_PATH_ALIGNMENT;
  /**
   * The text is aligned to the top of the path stroke.
   */
  readonly topPathAlignment: PathTypeAlignments_TOP_PATH_ALIGNMENT;
  /**
   * The text is aligned to the top of the path stroke.
   */
  readonly toppathalignment: PathTypeAlignments_TOP_PATH_ALIGNMENT;

  /**
   * The text is aligned to the bottom of the path stroke.
   */
  readonly BOTTOM_PATH_ALIGNMENT: PathTypeAlignments_BOTTOM_PATH_ALIGNMENT;
  /**
   * The text is aligned to the bottom of the path stroke.
   */
  readonly bottomPathAlignment: PathTypeAlignments_BOTTOM_PATH_ALIGNMENT;
  /**
   * The text is aligned to the bottom of the path stroke.
   */
  readonly bottompathalignment: PathTypeAlignments_BOTTOM_PATH_ALIGNMENT;

  /**
   * The text is aligned to the center of the path stroke.
   */
  readonly CENTER_PATH_ALIGNMENT: PathTypeAlignments_CENTER_PATH_ALIGNMENT;
  /**
   * The text is aligned to the center of the path stroke.
   */
  readonly centerPathAlignment: PathTypeAlignments_CENTER_PATH_ALIGNMENT;
  /**
   * The text is aligned to the center of the path stroke.
   */
  readonly centerpathalignment: PathTypeAlignments_CENTER_PATH_ALIGNMENT;

}
