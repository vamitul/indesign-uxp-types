/**
 * DimensionAttributes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DimensionAttributes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DimensionAttributes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DimensionAttributes>): boolean;

  /**
   * @internal **WARNING:** `__DimensionAttributes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DimensionAttributes]: never;
}


/**
 * Width attribute of dimension.
 */
interface DimensionAttributes_WIDTH_ATTRIBUTE extends DimensionAttributes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700226127;
}

/**
 * Height attribute of dimension.
 */
interface DimensionAttributes_HEIGHT_ATTRIBUTE extends DimensionAttributes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699247183;
}

/**
 * Both height and width of dimension.
 */
interface DimensionAttributes_BOTH_HEIGHT_WIDTH_ATTRIBUTE extends DimensionAttributes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700227170;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Dimension attribute which you want to control.
 */
export declare namespace DimensionAttributes {
/**
 * Width attribute of dimension.
 */
type WIDTH_ATTRIBUTE = DimensionAttributes_WIDTH_ATTRIBUTE;

/**
 * Height attribute of dimension.
 */
type HEIGHT_ATTRIBUTE = DimensionAttributes_HEIGHT_ATTRIBUTE;

/**
 * Both height and width of dimension.
 */
type BOTH_HEIGHT_WIDTH_ATTRIBUTE = DimensionAttributes_BOTH_HEIGHT_WIDTH_ATTRIBUTE;

}
/**
 * Dimension attribute which you want to control.
 */
export declare const DimensionAttributes: typeof Enumeration & {

  /**
   * Width attribute of dimension.
   */
  readonly WIDTH_ATTRIBUTE: DimensionAttributes_WIDTH_ATTRIBUTE;
  /**
   * Width attribute of dimension.
   */
  readonly widthAttribute: DimensionAttributes_WIDTH_ATTRIBUTE;
  /**
   * Width attribute of dimension.
   */
  readonly widthattribute: DimensionAttributes_WIDTH_ATTRIBUTE;

  /**
   * Height attribute of dimension.
   */
  readonly HEIGHT_ATTRIBUTE: DimensionAttributes_HEIGHT_ATTRIBUTE;
  /**
   * Height attribute of dimension.
   */
  readonly heightAttribute: DimensionAttributes_HEIGHT_ATTRIBUTE;
  /**
   * Height attribute of dimension.
   */
  readonly heightattribute: DimensionAttributes_HEIGHT_ATTRIBUTE;

  /**
   * Both height and width of dimension.
   */
  readonly BOTH_HEIGHT_WIDTH_ATTRIBUTE: DimensionAttributes_BOTH_HEIGHT_WIDTH_ATTRIBUTE;
  /**
   * Both height and width of dimension.
   */
  readonly bothHeightWidthAttribute: DimensionAttributes_BOTH_HEIGHT_WIDTH_ATTRIBUTE;
  /**
   * Both height and width of dimension.
   */
  readonly bothheightwidthattribute: DimensionAttributes_BOTH_HEIGHT_WIDTH_ATTRIBUTE;

}
