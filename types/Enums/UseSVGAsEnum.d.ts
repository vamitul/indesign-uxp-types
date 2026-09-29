/**
 * UseSVGAsEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __UseSVGAsEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface UseSVGAsEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<UseSVGAsEnum>): boolean;

  /**
   * @internal **WARNING:** `__UseSVGAsEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__UseSVGAsEnum]: never;
}


/**
 * SVG will be exported as embedded code.
 */
interface UseSVGAsEnum_EMBED_CODE extends UseSVGAsEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701667427;
}

/**
 * SVG will be exported as object tags.
 */
interface UseSVGAsEnum_OBJECT_TAGS extends UseSVGAsEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1868720756;
}

/**
 * SVG will be exported as image tags.
 */
interface UseSVGAsEnum_IMAGE_TAGS extends UseSVGAsEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768780903;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for how SVG content is embedded when exporting.
 */
export declare namespace UseSVGAsEnum {
/**
 * SVG will be exported as embedded code.
 */
type EMBED_CODE = UseSVGAsEnum_EMBED_CODE;

/**
 * SVG will be exported as object tags.
 */
type OBJECT_TAGS = UseSVGAsEnum_OBJECT_TAGS;

/**
 * SVG will be exported as image tags.
 */
type IMAGE_TAGS = UseSVGAsEnum_IMAGE_TAGS;

}
/**
 * Options for how SVG content is embedded when exporting.
 */
export declare const UseSVGAsEnum: typeof Enumeration & {

  /**
   * SVG will be exported as embedded code.
   */
  readonly EMBED_CODE: UseSVGAsEnum_EMBED_CODE;
  /**
   * SVG will be exported as embedded code.
   */
  readonly embedCode: UseSVGAsEnum_EMBED_CODE;
  /**
   * SVG will be exported as embedded code.
   */
  readonly embedcode: UseSVGAsEnum_EMBED_CODE;

  /**
   * SVG will be exported as object tags.
   */
  readonly OBJECT_TAGS: UseSVGAsEnum_OBJECT_TAGS;
  /**
   * SVG will be exported as object tags.
   */
  readonly objectTags: UseSVGAsEnum_OBJECT_TAGS;
  /**
   * SVG will be exported as object tags.
   */
  readonly objecttags: UseSVGAsEnum_OBJECT_TAGS;

  /**
   * SVG will be exported as image tags.
   */
  readonly IMAGE_TAGS: UseSVGAsEnum_IMAGE_TAGS;
  /**
   * SVG will be exported as image tags.
   */
  readonly imageTags: UseSVGAsEnum_IMAGE_TAGS;
  /**
   * SVG will be exported as image tags.
   */
  readonly imagetags: UseSVGAsEnum_IMAGE_TAGS;

}
