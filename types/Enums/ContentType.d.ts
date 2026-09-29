/**
 * ContentType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ContentType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ContentType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ContentType>): boolean;

  /**
   * @internal **WARNING:** `__ContentType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ContentType]: never;
}


/**
 * No content type assigned.
 */
interface ContentType_UNASSIGNED extends ContentType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1970168179;
}

/**
 * The frame is a graphics frame.
 */
interface ContentType_GRAPHIC_TYPE extends ContentType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1735553140;
}

/**
 * The frame is a text frame.
 */
interface ContentType_TEXT_TYPE extends ContentType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952412773;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a frame's content is unassigned, a graphic, or text.
 */
export declare namespace ContentType {
/**
 * No content type assigned.
 */
type UNASSIGNED = ContentType_UNASSIGNED;

/**
 * The frame is a graphics frame.
 */
type GRAPHIC_TYPE = ContentType_GRAPHIC_TYPE;

/**
 * The frame is a text frame.
 */
type TEXT_TYPE = ContentType_TEXT_TYPE;

}
/**
 * Whether a frame's content is unassigned, a graphic, or text.
 */
export declare const ContentType: typeof Enumeration & {

  /**
   * No content type assigned.
   */
  readonly UNASSIGNED: ContentType_UNASSIGNED;
  /**
   * No content type assigned.
   */
  readonly unassigned: ContentType_UNASSIGNED;

  /**
   * The frame is a graphics frame.
   */
  readonly GRAPHIC_TYPE: ContentType_GRAPHIC_TYPE;
  /**
   * The frame is a graphics frame.
   */
  readonly graphicType: ContentType_GRAPHIC_TYPE;
  /**
   * The frame is a graphics frame.
   */
  readonly graphictype: ContentType_GRAPHIC_TYPE;

  /**
   * The frame is a text frame.
   */
  readonly TEXT_TYPE: ContentType_TEXT_TYPE;
  /**
   * The frame is a text frame.
   */
  readonly textType: ContentType_TEXT_TYPE;
  /**
   * The frame is a text frame.
   */
  readonly texttype: ContentType_TEXT_TYPE;

}
