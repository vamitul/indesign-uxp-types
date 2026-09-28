/**
 * IconSizes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __IconSizes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface IconSizes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<IconSizes>): boolean;

  /**
   * @internal **WARNING:** `__IconSizes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__IconSizes]: never;
}


/**
 * Extra small icon.
 */
interface IconSizes_EXTRA_SMALL_ICON extends IconSizes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885696877;
}

/**
 * Small icon.
 */
interface IconSizes_SMALL_ICON extends IconSizes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886612844;
}

/**
 * Medium icon.
 */
interface IconSizes_MEDIUM_ICON extends IconSizes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886217572;
}

/**
 * Large icon.
 */
interface IconSizes_LARGE_ICON extends IconSizes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884058215;
}

/**
 * Extra large icon.
 */
interface IconSizes_EXTRA_LARGE_ICON extends IconSizes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885695079;
}

/**
 * Jumbo icon.
 */
interface IconSizes_JUMBO_ICON extends IconSizes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886943340;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Icon size options.
 */
export declare namespace IconSizes {
/**
 * Extra small icon.
 */
type EXTRA_SMALL_ICON = IconSizes_EXTRA_SMALL_ICON;

/**
 * Small icon.
 */
type SMALL_ICON = IconSizes_SMALL_ICON;

/**
 * Medium icon.
 */
type MEDIUM_ICON = IconSizes_MEDIUM_ICON;

/**
 * Large icon.
 */
type LARGE_ICON = IconSizes_LARGE_ICON;

/**
 * Extra large icon.
 */
type EXTRA_LARGE_ICON = IconSizes_EXTRA_LARGE_ICON;

/**
 * Jumbo icon.
 */
type JUMBO_ICON = IconSizes_JUMBO_ICON;

}
/**
 * Icon size options.
 */
export declare const IconSizes: typeof Enumeration & {

  /**
   * Extra small icon.
   */
  readonly EXTRA_SMALL_ICON: IconSizes_EXTRA_SMALL_ICON;
  /**
   * Extra small icon.
   */
  readonly extraSmallIcon: IconSizes_EXTRA_SMALL_ICON;
  /**
   * Extra small icon.
   */
  readonly extrasmallicon: IconSizes_EXTRA_SMALL_ICON;

  /**
   * Small icon.
   */
  readonly SMALL_ICON: IconSizes_SMALL_ICON;
  /**
   * Small icon.
   */
  readonly smallIcon: IconSizes_SMALL_ICON;
  /**
   * Small icon.
   */
  readonly smallicon: IconSizes_SMALL_ICON;

  /**
   * Medium icon.
   */
  readonly MEDIUM_ICON: IconSizes_MEDIUM_ICON;
  /**
   * Medium icon.
   */
  readonly mediumIcon: IconSizes_MEDIUM_ICON;
  /**
   * Medium icon.
   */
  readonly mediumicon: IconSizes_MEDIUM_ICON;

  /**
   * Large icon.
   */
  readonly LARGE_ICON: IconSizes_LARGE_ICON;
  /**
   * Large icon.
   */
  readonly largeIcon: IconSizes_LARGE_ICON;
  /**
   * Large icon.
   */
  readonly largeicon: IconSizes_LARGE_ICON;

  /**
   * Extra large icon.
   */
  readonly EXTRA_LARGE_ICON: IconSizes_EXTRA_LARGE_ICON;
  /**
   * Extra large icon.
   */
  readonly extraLargeIcon: IconSizes_EXTRA_LARGE_ICON;
  /**
   * Extra large icon.
   */
  readonly extralargeicon: IconSizes_EXTRA_LARGE_ICON;

  /**
   * Jumbo icon.
   */
  readonly JUMBO_ICON: IconSizes_JUMBO_ICON;
  /**
   * Jumbo icon.
   */
  readonly jumboIcon: IconSizes_JUMBO_ICON;
  /**
   * Jumbo icon.
   */
  readonly jumboicon: IconSizes_JUMBO_ICON;

}
