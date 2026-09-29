/**
 * MatrixContent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __MatrixContent: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MatrixContent extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MatrixContent>): boolean;

  /**
   * @internal **WARNING:** `__MatrixContent` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MatrixContent]: never;
}


/**
 * The matrix's scale values.
 */
interface MatrixContent_SCALE_VALUES extends MatrixContent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1735552887;
}

/**
 * The matrix's shear value.
 */
interface MatrixContent_SHEAR_VALUE extends MatrixContent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936486004;
}

/**
 * The matrix's rotation value.
 */
interface MatrixContent_ROTATION_VALUE extends MatrixContent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936746862;
}

/**
 * The matrix's translation values.
 */
interface MatrixContent_TRANSLATION_VALUES extends MatrixContent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936484720;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The transformation component (scale, shear, rotation, or translation) to read
 * from or write to a transformation matrix.
 */
export declare namespace MatrixContent {
/**
 * The matrix's scale values.
 */
type SCALE_VALUES = MatrixContent_SCALE_VALUES;

/**
 * The matrix's shear value.
 */
type SHEAR_VALUE = MatrixContent_SHEAR_VALUE;

/**
 * The matrix's rotation value.
 */
type ROTATION_VALUE = MatrixContent_ROTATION_VALUE;

/**
 * The matrix's translation values.
 */
type TRANSLATION_VALUES = MatrixContent_TRANSLATION_VALUES;

}
/**
 * The transformation component (scale, shear, rotation, or translation) to read
 * from or write to a transformation matrix.
 */
export declare const MatrixContent: typeof Enumeration & {

  /**
   * The matrix's scale values.
   */
  readonly SCALE_VALUES: MatrixContent_SCALE_VALUES;
  /**
   * The matrix's scale values.
   */
  readonly scaleValues: MatrixContent_SCALE_VALUES;
  /**
   * The matrix's scale values.
   */
  readonly scalevalues: MatrixContent_SCALE_VALUES;

  /**
   * The matrix's shear value.
   */
  readonly SHEAR_VALUE: MatrixContent_SHEAR_VALUE;
  /**
   * The matrix's shear value.
   */
  readonly shearValue: MatrixContent_SHEAR_VALUE;
  /**
   * The matrix's shear value.
   */
  readonly shearvalue: MatrixContent_SHEAR_VALUE;

  /**
   * The matrix's rotation value.
   */
  readonly ROTATION_VALUE: MatrixContent_ROTATION_VALUE;
  /**
   * The matrix's rotation value.
   */
  readonly rotationValue: MatrixContent_ROTATION_VALUE;
  /**
   * The matrix's rotation value.
   */
  readonly rotationvalue: MatrixContent_ROTATION_VALUE;

  /**
   * The matrix's translation values.
   */
  readonly TRANSLATION_VALUES: MatrixContent_TRANSLATION_VALUES;
  /**
   * The matrix's translation values.
   */
  readonly translationValues: MatrixContent_TRANSLATION_VALUES;
  /**
   * The matrix's translation values.
   */
  readonly translationvalues: MatrixContent_TRANSLATION_VALUES;

}
