/**
 * PreserveAppearanceFromLayoutEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PreserveAppearanceFromLayoutEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PreserveAppearanceFromLayoutEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PreserveAppearanceFromLayoutEnum>): boolean;

  /**
   * @internal **WARNING:** `__PreserveAppearanceFromLayoutEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PreserveAppearanceFromLayoutEnum]: never;
}


/**
 * Export preferences will be honoured.
 */
interface PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_DEFAULT extends PreserveAppearanceFromLayoutEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1349665893;
}

/**
 * Existing image will be used.
 */
interface PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_USE_EXISTING_IMAGE extends PreserveAppearanceFromLayoutEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1349670245;
}

/**
 * Container and content will both be rasterized, if possible.
 */
interface PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTAINER extends PreserveAppearanceFromLayoutEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1349669490;
}

/**
 * Content will be rasterized, if possible.
 */
interface PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTENT extends PreserveAppearanceFromLayoutEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1349669492;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for preserving the appearance of content from the layout when
 * exporting.
 */
export declare namespace PreserveAppearanceFromLayoutEnum {
/**
 * Export preferences will be honoured.
 */
type PRESERVE_APPEARANCE_DEFAULT = PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_DEFAULT;

/**
 * Existing image will be used.
 */
type PRESERVE_APPEARANCE_USE_EXISTING_IMAGE = PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_USE_EXISTING_IMAGE;

/**
 * Container and content will both be rasterized, if possible.
 */
type PRESERVE_APPEARANCE_RASTERIZE_CONTAINER = PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTAINER;

/**
 * Content will be rasterized, if possible.
 */
type PRESERVE_APPEARANCE_RASTERIZE_CONTENT = PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTENT;

}
/**
 * Options for preserving the appearance of content from the layout when
 * exporting.
 */
export declare const PreserveAppearanceFromLayoutEnum: typeof Enumeration & {

  /**
   * Export preferences will be honoured.
   */
  readonly PRESERVE_APPEARANCE_DEFAULT: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_DEFAULT;
  /**
   * Export preferences will be honoured.
   */
  readonly preserveAppearanceDefault: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_DEFAULT;
  /**
   * Export preferences will be honoured.
   */
  readonly preserveappearancedefault: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_DEFAULT;

  /**
   * Existing image will be used.
   */
  readonly PRESERVE_APPEARANCE_USE_EXISTING_IMAGE: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_USE_EXISTING_IMAGE;
  /**
   * Existing image will be used.
   */
  readonly preserveAppearanceUseExistingImage: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_USE_EXISTING_IMAGE;
  /**
   * Existing image will be used.
   */
  readonly preserveappearanceuseexistingimage: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_USE_EXISTING_IMAGE;

  /**
   * Container and content will both be rasterized, if possible.
   */
  readonly PRESERVE_APPEARANCE_RASTERIZE_CONTAINER: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTAINER;
  /**
   * Container and content will both be rasterized, if possible.
   */
  readonly preserveAppearanceRasterizeContainer: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTAINER;
  /**
   * Container and content will both be rasterized, if possible.
   */
  readonly preserveappearancerasterizecontainer: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTAINER;

  /**
   * Content will be rasterized, if possible.
   */
  readonly PRESERVE_APPEARANCE_RASTERIZE_CONTENT: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTENT;
  /**
   * Content will be rasterized, if possible.
   */
  readonly preserveAppearanceRasterizeContent: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTENT;
  /**
   * Content will be rasterized, if possible.
   */
  readonly preserveappearancerasterizecontent: PreserveAppearanceFromLayoutEnum_PRESERVE_APPEARANCE_RASTERIZE_CONTENT;

}
