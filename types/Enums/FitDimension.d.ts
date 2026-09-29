/**
 * FitDimension.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FitDimension: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FitDimension extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FitDimension>): boolean;

  /**
   * @internal **WARNING:** `__FitDimension` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FitDimension]: never;
}


/**
 * Fit to 1280x800 dimension.
 */
interface FitDimension_FIT1280X800 extends FitDimension {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718906725;
}

/**
 * Fit to 1240x620 dimension.
 */
interface FitDimension_FIT1240X620 extends FitDimension {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718908023;
}

/**
 * Fit to 1024x768 dimension.
 */
interface FitDimension_FIT1024X768 extends FitDimension {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718906726;
}

/**
 * Fit to 984x588 dimension.
 */
interface FitDimension_FIT984X588 extends FitDimension {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718906470;
}

/**
 * Fit to 800x600 dimension.
 */
interface FitDimension_FIT800X600 extends FitDimension {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718904179;
}

/**
 * Fit to 760x420 dimension.
 */
interface FitDimension_FIT760X420 extends FitDimension {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718907750;
}

/**
 * Fit to 640x480 dimension.
 */
interface FitDimension_FIT640X480 extends FitDimension {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718907753;
}

/**
 * Fit to 600x300 dimension.
 */
interface FitDimension_FIT600X300 extends FitDimension {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718907764;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for fitting to dimension.
 */
export declare namespace FitDimension {
/**
 * Fit to 1280x800 dimension.
 */
type FIT1280X800 = FitDimension_FIT1280X800;

/**
 * Fit to 1240x620 dimension.
 */
type FIT1240X620 = FitDimension_FIT1240X620;

/**
 * Fit to 1024x768 dimension.
 */
type FIT1024X768 = FitDimension_FIT1024X768;

/**
 * Fit to 984x588 dimension.
 */
type FIT984X588 = FitDimension_FIT984X588;

/**
 * Fit to 800x600 dimension.
 */
type FIT800X600 = FitDimension_FIT800X600;

/**
 * Fit to 760x420 dimension.
 */
type FIT760X420 = FitDimension_FIT760X420;

/**
 * Fit to 640x480 dimension.
 */
type FIT640X480 = FitDimension_FIT640X480;

/**
 * Fit to 600x300 dimension.
 */
type FIT600X300 = FitDimension_FIT600X300;

}
/**
 * Options for fitting to dimension.
 */
export declare const FitDimension: typeof Enumeration & {

  /**
   * Fit to 1280x800 dimension.
   */
  readonly FIT1280X800: FitDimension_FIT1280X800;
  /**
   * Fit to 1280x800 dimension.
   */
  readonly fit1280x800: FitDimension_FIT1280X800;

  /**
   * Fit to 1240x620 dimension.
   */
  readonly FIT1240X620: FitDimension_FIT1240X620;
  /**
   * Fit to 1240x620 dimension.
   */
  readonly fit1240x620: FitDimension_FIT1240X620;

  /**
   * Fit to 1024x768 dimension.
   */
  readonly FIT1024X768: FitDimension_FIT1024X768;
  /**
   * Fit to 1024x768 dimension.
   */
  readonly fit1024x768: FitDimension_FIT1024X768;

  /**
   * Fit to 984x588 dimension.
   */
  readonly FIT984X588: FitDimension_FIT984X588;
  /**
   * Fit to 984x588 dimension.
   */
  readonly fit984x588: FitDimension_FIT984X588;

  /**
   * Fit to 800x600 dimension.
   */
  readonly FIT800X600: FitDimension_FIT800X600;
  /**
   * Fit to 800x600 dimension.
   */
  readonly fit800x600: FitDimension_FIT800X600;

  /**
   * Fit to 760x420 dimension.
   */
  readonly FIT760X420: FitDimension_FIT760X420;
  /**
   * Fit to 760x420 dimension.
   */
  readonly fit760x420: FitDimension_FIT760X420;

  /**
   * Fit to 640x480 dimension.
   */
  readonly FIT640X480: FitDimension_FIT640X480;
  /**
   * Fit to 640x480 dimension.
   */
  readonly fit640x480: FitDimension_FIT640X480;

  /**
   * Fit to 600x300 dimension.
   */
  readonly FIT600X300: FitDimension_FIT600X300;
  /**
   * Fit to 600x300 dimension.
   */
  readonly fit600x300: FitDimension_FIT600X300;

}
