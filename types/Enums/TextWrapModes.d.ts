/**
 * TextWrapModes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TextWrapModes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextWrapModes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextWrapModes>): boolean;

  /**
   * @internal **WARNING:** `__TextWrapModes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextWrapModes]: never;
}


/**
 * No text wrap.
 */
interface TextWrapModes_NONE extends TextWrapModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Forces text to jump above or below the object, so that no text appears on the object's right or left.
 */
interface TextWrapModes_JUMP_OBJECT_TEXT_WRAP extends TextWrapModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650552420;
}

/**
 * Forces text to jump to the next available column.
 */
interface TextWrapModes_NEXT_COLUMN_TEXT_WRAP extends TextWrapModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1853384306;
}

/**
 * Wraps text around the object's bounding box. 
 */
interface TextWrapModes_BOUNDING_BOX_TEXT_WRAP extends TextWrapModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651729523;
}

/**
 * Wraps text around the object following the specified contour options.
 */
interface TextWrapModes_CONTOUR extends TextWrapModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835233134;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for wrapping text around an object.
 */
export declare namespace TextWrapModes {
/**
 * No text wrap.
 */
type NONE = TextWrapModes_NONE;

/**
 * Forces text to jump above or below the object, so that no text appears on the object's right or left.
 */
type JUMP_OBJECT_TEXT_WRAP = TextWrapModes_JUMP_OBJECT_TEXT_WRAP;

/**
 * Forces text to jump to the next available column.
 */
type NEXT_COLUMN_TEXT_WRAP = TextWrapModes_NEXT_COLUMN_TEXT_WRAP;

/**
 * Wraps text around the object's bounding box. 
 */
type BOUNDING_BOX_TEXT_WRAP = TextWrapModes_BOUNDING_BOX_TEXT_WRAP;

/**
 * Wraps text around the object following the specified contour options.
 */
type CONTOUR = TextWrapModes_CONTOUR;

}
/**
 * Options for wrapping text around an object.
 */
export declare const TextWrapModes: typeof Enumeration & {

  /**
   * No text wrap.
   */
  readonly NONE: TextWrapModes_NONE;
  /**
   * No text wrap.
   */
  readonly none: TextWrapModes_NONE;

  /**
   * Forces text to jump above or below the object, so that no text appears on the object's right or left.
   */
  readonly JUMP_OBJECT_TEXT_WRAP: TextWrapModes_JUMP_OBJECT_TEXT_WRAP;
  /**
   * Forces text to jump above or below the object, so that no text appears on the object's right or left.
   */
  readonly jumpObjectTextWrap: TextWrapModes_JUMP_OBJECT_TEXT_WRAP;
  /**
   * Forces text to jump above or below the object, so that no text appears on the object's right or left.
   */
  readonly jumpobjecttextwrap: TextWrapModes_JUMP_OBJECT_TEXT_WRAP;

  /**
   * Forces text to jump to the next available column.
   */
  readonly NEXT_COLUMN_TEXT_WRAP: TextWrapModes_NEXT_COLUMN_TEXT_WRAP;
  /**
   * Forces text to jump to the next available column.
   */
  readonly nextColumnTextWrap: TextWrapModes_NEXT_COLUMN_TEXT_WRAP;
  /**
   * Forces text to jump to the next available column.
   */
  readonly nextcolumntextwrap: TextWrapModes_NEXT_COLUMN_TEXT_WRAP;

  /**
   * Wraps text around the object's bounding box. 
   */
  readonly BOUNDING_BOX_TEXT_WRAP: TextWrapModes_BOUNDING_BOX_TEXT_WRAP;
  /**
   * Wraps text around the object's bounding box. 
   */
  readonly boundingBoxTextWrap: TextWrapModes_BOUNDING_BOX_TEXT_WRAP;
  /**
   * Wraps text around the object's bounding box. 
   */
  readonly boundingboxtextwrap: TextWrapModes_BOUNDING_BOX_TEXT_WRAP;

  /**
   * Wraps text around the object following the specified contour options.
   */
  readonly CONTOUR: TextWrapModes_CONTOUR;
  /**
   * Wraps text around the object following the specified contour options.
   */
  readonly contour: TextWrapModes_CONTOUR;

}
