/**
 * ImageResolution.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImageResolution: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImageResolution extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImageResolution>): boolean;

  /**
   * @internal **WARNING:** `__ImageResolution` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImageResolution]: never;
}


/**
 * 72 pixels per inch.
 */
interface ImageResolution_PPI_72 extends ImageResolution {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920160628;
}

/**
 * 96 pixels per inch.
 */
interface ImageResolution_PPI_96 extends ImageResolution {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920159347;
}

/**
 * 150 pixels per inch.
 */
interface ImageResolution_PPI_150 extends ImageResolution {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920151654;
}

/**
 * 300 pixels per inch.
 */
interface ImageResolution_PPI_300 extends ImageResolution {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920160872;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Image resolution for the converted object.
 */
export declare namespace ImageResolution {
/**
 * 72 pixels per inch.
 */
type PPI_72 = ImageResolution_PPI_72;

/**
 * 96 pixels per inch.
 */
type PPI_96 = ImageResolution_PPI_96;

/**
 * 150 pixels per inch.
 */
type PPI_150 = ImageResolution_PPI_150;

/**
 * 300 pixels per inch.
 */
type PPI_300 = ImageResolution_PPI_300;

}
/**
 * Image resolution for the converted object.
 */
export declare const ImageResolution: typeof Enumeration & {

  /**
   * 72 pixels per inch.
   */
  readonly PPI_72: ImageResolution_PPI_72;
  /**
   * 72 pixels per inch.
   */
  readonly ppi72: ImageResolution_PPI_72;

  /**
   * 96 pixels per inch.
   */
  readonly PPI_96: ImageResolution_PPI_96;
  /**
   * 96 pixels per inch.
   */
  readonly ppi96: ImageResolution_PPI_96;

  /**
   * 150 pixels per inch.
   */
  readonly PPI_150: ImageResolution_PPI_150;
  /**
   * 150 pixels per inch.
   */
  readonly ppi150: ImageResolution_PPI_150;

  /**
   * 300 pixels per inch.
   */
  readonly PPI_300: ImageResolution_PPI_300;
  /**
   * 300 pixels per inch.
   */
  readonly ppi300: ImageResolution_PPI_300;

}
