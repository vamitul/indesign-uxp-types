/**
 * RasterResolutionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RasterResolutionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RasterResolutionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RasterResolutionOptions>): boolean;

  /**
   * @internal **WARNING:** `__RasterResolutionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RasterResolutionOptions]: never;
}


/**
 * 72 pixels per inch.
 */
interface RasterResolutionOptions_SEVENTY_TWO_PPI extends RasterResolutionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937010800;
}

/**
 * 96 pixels per inch.
 */
interface RasterResolutionOptions_NINETY_SIX_PPI extends RasterResolutionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1853059184;
}

/**
 * 144 pixels per inch.
 */
interface RasterResolutionOptions_ONE_HUNDRED_FORTY_FOUR_PPI extends RasterResolutionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1868984432;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The resolution rasterised content is written at in the exported PDF.
 */
export declare namespace RasterResolutionOptions {
/**
 * 72 pixels per inch.
 */
type SEVENTY_TWO_PPI = RasterResolutionOptions_SEVENTY_TWO_PPI;

/**
 * 96 pixels per inch.
 */
type NINETY_SIX_PPI = RasterResolutionOptions_NINETY_SIX_PPI;

/**
 * 144 pixels per inch.
 */
type ONE_HUNDRED_FORTY_FOUR_PPI = RasterResolutionOptions_ONE_HUNDRED_FORTY_FOUR_PPI;

}
/**
 * The resolution rasterised content is written at in the exported PDF.
 */
export declare const RasterResolutionOptions: typeof Enumeration & {

  /**
   * 72 pixels per inch.
   */
  readonly SEVENTY_TWO_PPI: RasterResolutionOptions_SEVENTY_TWO_PPI;
  /**
   * 72 pixels per inch.
   */
  readonly seventyTwoPpi: RasterResolutionOptions_SEVENTY_TWO_PPI;
  /**
   * 72 pixels per inch.
   */
  readonly seventytwoppi: RasterResolutionOptions_SEVENTY_TWO_PPI;

  /**
   * 96 pixels per inch.
   */
  readonly NINETY_SIX_PPI: RasterResolutionOptions_NINETY_SIX_PPI;
  /**
   * 96 pixels per inch.
   */
  readonly ninetySixPpi: RasterResolutionOptions_NINETY_SIX_PPI;
  /**
   * 96 pixels per inch.
   */
  readonly ninetysixppi: RasterResolutionOptions_NINETY_SIX_PPI;

  /**
   * 144 pixels per inch.
   */
  readonly ONE_HUNDRED_FORTY_FOUR_PPI: RasterResolutionOptions_ONE_HUNDRED_FORTY_FOUR_PPI;
  /**
   * 144 pixels per inch.
   */
  readonly oneHundredFortyFourPpi: RasterResolutionOptions_ONE_HUNDRED_FORTY_FOUR_PPI;
  /**
   * 144 pixels per inch.
   */
  readonly onehundredfortyfourppi: RasterResolutionOptions_ONE_HUNDRED_FORTY_FOUR_PPI;

}
