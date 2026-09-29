/**
 * PdfMagnificationOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PdfMagnificationOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PdfMagnificationOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PdfMagnificationOptions>): boolean;

  /**
   * @internal **WARNING:** `__PdfMagnificationOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PdfMagnificationOptions]: never;
}


/**
 * Uses default magnification.
 */
interface PdfMagnificationOptions_DEFAULT_VALUE extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * Uses the actual size.
 */
interface PdfMagnificationOptions_ACTUAL_SIZE extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053206906;
}

/**
 * Uses the fit page magnification option.
 */
interface PdfMagnificationOptions_FIT_PAGE extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053534832;
}

/**
 * Uses the fit width magnification option.
 */
interface PdfMagnificationOptions_FIT_WIDTH extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437335;
}

/**
 * Uses the fit height magnification option.
 */
interface PdfMagnificationOptions_FIT_HEIGHT extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437352;
}

/**
 * Uses the fit visible magnification option.
 */
interface PdfMagnificationOptions_FIT_VISIBLE extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212437334;
}

/**
 * Uses 25 percent magnification option.
 */
interface PdfMagnificationOptions_TWENTY_FIVE_PERCENT extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053534822;
}

/**
 * Uses 50 percent magnification option.
 */
interface PdfMagnificationOptions_FIFTY_PERCENT extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053531248;
}

/**
 * Uses 75 percent magnification option.
 */
interface PdfMagnificationOptions_SEVENTY_FIVE_PERCENT extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053534566;
}

/**
 * Uses 100 percent magnification option.
 */
interface PdfMagnificationOptions_ONE_HUNDRED_PERCENT extends PdfMagnificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053533544;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The zoom level a PDF reader opens the exported document at.
 */
export declare namespace PdfMagnificationOptions {
/**
 * Uses default magnification.
 */
type DEFAULT_VALUE = PdfMagnificationOptions_DEFAULT_VALUE;

/**
 * Uses the actual size.
 */
type ACTUAL_SIZE = PdfMagnificationOptions_ACTUAL_SIZE;

/**
 * Uses the fit page magnification option.
 */
type FIT_PAGE = PdfMagnificationOptions_FIT_PAGE;

/**
 * Uses the fit width magnification option.
 */
type FIT_WIDTH = PdfMagnificationOptions_FIT_WIDTH;

/**
 * Uses the fit height magnification option.
 */
type FIT_HEIGHT = PdfMagnificationOptions_FIT_HEIGHT;

/**
 * Uses the fit visible magnification option.
 */
type FIT_VISIBLE = PdfMagnificationOptions_FIT_VISIBLE;

/**
 * Uses 25 percent magnification option.
 */
type TWENTY_FIVE_PERCENT = PdfMagnificationOptions_TWENTY_FIVE_PERCENT;

/**
 * Uses 50 percent magnification option.
 */
type FIFTY_PERCENT = PdfMagnificationOptions_FIFTY_PERCENT;

/**
 * Uses 75 percent magnification option.
 */
type SEVENTY_FIVE_PERCENT = PdfMagnificationOptions_SEVENTY_FIVE_PERCENT;

/**
 * Uses 100 percent magnification option.
 */
type ONE_HUNDRED_PERCENT = PdfMagnificationOptions_ONE_HUNDRED_PERCENT;

}
/**
 * The zoom level a PDF reader opens the exported document at.
 */
export declare const PdfMagnificationOptions: typeof Enumeration & {

  /**
   * Uses default magnification.
   */
  readonly DEFAULT_VALUE: PdfMagnificationOptions_DEFAULT_VALUE;
  /**
   * Uses default magnification.
   */
  readonly defaultValue: PdfMagnificationOptions_DEFAULT_VALUE;
  /**
   * Uses default magnification.
   */
  readonly defaultvalue: PdfMagnificationOptions_DEFAULT_VALUE;

  /**
   * Uses the actual size.
   */
  readonly ACTUAL_SIZE: PdfMagnificationOptions_ACTUAL_SIZE;
  /**
   * Uses the actual size.
   */
  readonly actualSize: PdfMagnificationOptions_ACTUAL_SIZE;
  /**
   * Uses the actual size.
   */
  readonly actualsize: PdfMagnificationOptions_ACTUAL_SIZE;

  /**
   * Uses the fit page magnification option.
   */
  readonly FIT_PAGE: PdfMagnificationOptions_FIT_PAGE;
  /**
   * Uses the fit page magnification option.
   */
  readonly fitPage: PdfMagnificationOptions_FIT_PAGE;
  /**
   * Uses the fit page magnification option.
   */
  readonly fitpage: PdfMagnificationOptions_FIT_PAGE;

  /**
   * Uses the fit width magnification option.
   */
  readonly FIT_WIDTH: PdfMagnificationOptions_FIT_WIDTH;
  /**
   * Uses the fit width magnification option.
   */
  readonly fitWidth: PdfMagnificationOptions_FIT_WIDTH;
  /**
   * Uses the fit width magnification option.
   */
  readonly fitwidth: PdfMagnificationOptions_FIT_WIDTH;

  /**
   * Uses the fit height magnification option.
   */
  readonly FIT_HEIGHT: PdfMagnificationOptions_FIT_HEIGHT;
  /**
   * Uses the fit height magnification option.
   */
  readonly fitHeight: PdfMagnificationOptions_FIT_HEIGHT;
  /**
   * Uses the fit height magnification option.
   */
  readonly fitheight: PdfMagnificationOptions_FIT_HEIGHT;

  /**
   * Uses the fit visible magnification option.
   */
  readonly FIT_VISIBLE: PdfMagnificationOptions_FIT_VISIBLE;
  /**
   * Uses the fit visible magnification option.
   */
  readonly fitVisible: PdfMagnificationOptions_FIT_VISIBLE;
  /**
   * Uses the fit visible magnification option.
   */
  readonly fitvisible: PdfMagnificationOptions_FIT_VISIBLE;

  /**
   * Uses 25 percent magnification option.
   */
  readonly TWENTY_FIVE_PERCENT: PdfMagnificationOptions_TWENTY_FIVE_PERCENT;
  /**
   * Uses 25 percent magnification option.
   */
  readonly twentyFivePercent: PdfMagnificationOptions_TWENTY_FIVE_PERCENT;
  /**
   * Uses 25 percent magnification option.
   */
  readonly twentyfivepercent: PdfMagnificationOptions_TWENTY_FIVE_PERCENT;

  /**
   * Uses 50 percent magnification option.
   */
  readonly FIFTY_PERCENT: PdfMagnificationOptions_FIFTY_PERCENT;
  /**
   * Uses 50 percent magnification option.
   */
  readonly fiftyPercent: PdfMagnificationOptions_FIFTY_PERCENT;
  /**
   * Uses 50 percent magnification option.
   */
  readonly fiftypercent: PdfMagnificationOptions_FIFTY_PERCENT;

  /**
   * Uses 75 percent magnification option.
   */
  readonly SEVENTY_FIVE_PERCENT: PdfMagnificationOptions_SEVENTY_FIVE_PERCENT;
  /**
   * Uses 75 percent magnification option.
   */
  readonly seventyFivePercent: PdfMagnificationOptions_SEVENTY_FIVE_PERCENT;
  /**
   * Uses 75 percent magnification option.
   */
  readonly seventyfivepercent: PdfMagnificationOptions_SEVENTY_FIVE_PERCENT;

  /**
   * Uses 100 percent magnification option.
   */
  readonly ONE_HUNDRED_PERCENT: PdfMagnificationOptions_ONE_HUNDRED_PERCENT;
  /**
   * Uses 100 percent magnification option.
   */
  readonly oneHundredPercent: PdfMagnificationOptions_ONE_HUNDRED_PERCENT;
  /**
   * Uses 100 percent magnification option.
   */
  readonly onehundredpercent: PdfMagnificationOptions_ONE_HUNDRED_PERCENT;

}
