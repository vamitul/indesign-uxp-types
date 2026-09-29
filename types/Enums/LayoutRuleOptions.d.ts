/**
 * LayoutRuleOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LayoutRuleOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LayoutRuleOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LayoutRuleOptions>): boolean;

  /**
   * @internal **WARNING:** `__LayoutRuleOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LayoutRuleOptions]: never;
}


/**
 * No layout rule on the page as it resizes.
 */
interface LayoutRuleOptions_OFF extends LayoutRuleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330005536;
}

/**
 * Scale objects on the page as it resizes.
 */
interface LayoutRuleOptions_SCALE extends LayoutRuleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280332643;
}

/**
 * Recenter objects on the page as it resizes.
 */
interface LayoutRuleOptions_RECENTER extends LayoutRuleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280332387;
}

/**
 * Use guide slicing to resize objects on the page as it resizes.
 */
interface LayoutRuleOptions_GUIDE_BASED extends LayoutRuleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280329538;
}

/**
 * Reposition and resize objects on the page as it resizes.
 */
interface LayoutRuleOptions_OBJECT_BASED extends LayoutRuleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280331586;
}

/**
 * Use layout rule from the page's applied master page.
 */
interface LayoutRuleOptions_USE_MASTER extends LayoutRuleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280333133;
}

/**
 * Use existing layout rule setting on the page. Used for creating alternate layouts.
 */
interface LayoutRuleOptions_PRESERVE_EXISTING extends LayoutRuleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280331890;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for setting the layout rule on a page.
 */
export declare namespace LayoutRuleOptions {
/**
 * No layout rule on the page as it resizes.
 */
type OFF = LayoutRuleOptions_OFF;

/**
 * Scale objects on the page as it resizes.
 */
type SCALE = LayoutRuleOptions_SCALE;

/**
 * Recenter objects on the page as it resizes.
 */
type RECENTER = LayoutRuleOptions_RECENTER;

/**
 * Use guide slicing to resize objects on the page as it resizes.
 */
type GUIDE_BASED = LayoutRuleOptions_GUIDE_BASED;

/**
 * Reposition and resize objects on the page as it resizes.
 */
type OBJECT_BASED = LayoutRuleOptions_OBJECT_BASED;

/**
 * Use layout rule from the page's applied master page.
 */
type USE_MASTER = LayoutRuleOptions_USE_MASTER;

/**
 * Use existing layout rule setting on the page. Used for creating alternate layouts.
 */
type PRESERVE_EXISTING = LayoutRuleOptions_PRESERVE_EXISTING;

}
/**
 * Options for setting the layout rule on a page.
 */
export declare const LayoutRuleOptions: typeof Enumeration & {

  /**
   * No layout rule on the page as it resizes.
   */
  readonly OFF: LayoutRuleOptions_OFF;
  /**
   * No layout rule on the page as it resizes.
   */
  readonly off: LayoutRuleOptions_OFF;

  /**
   * Scale objects on the page as it resizes.
   */
  readonly SCALE: LayoutRuleOptions_SCALE;
  /**
   * Scale objects on the page as it resizes.
   */
  readonly scale: LayoutRuleOptions_SCALE;

  /**
   * Recenter objects on the page as it resizes.
   */
  readonly RECENTER: LayoutRuleOptions_RECENTER;
  /**
   * Recenter objects on the page as it resizes.
   */
  readonly recenter: LayoutRuleOptions_RECENTER;

  /**
   * Use guide slicing to resize objects on the page as it resizes.
   */
  readonly GUIDE_BASED: LayoutRuleOptions_GUIDE_BASED;
  /**
   * Use guide slicing to resize objects on the page as it resizes.
   */
  readonly guideBased: LayoutRuleOptions_GUIDE_BASED;
  /**
   * Use guide slicing to resize objects on the page as it resizes.
   */
  readonly guidebased: LayoutRuleOptions_GUIDE_BASED;

  /**
   * Reposition and resize objects on the page as it resizes.
   */
  readonly OBJECT_BASED: LayoutRuleOptions_OBJECT_BASED;
  /**
   * Reposition and resize objects on the page as it resizes.
   */
  readonly objectBased: LayoutRuleOptions_OBJECT_BASED;
  /**
   * Reposition and resize objects on the page as it resizes.
   */
  readonly objectbased: LayoutRuleOptions_OBJECT_BASED;

  /**
   * Use layout rule from the page's applied master page.
   */
  readonly USE_MASTER: LayoutRuleOptions_USE_MASTER;
  /**
   * Use layout rule from the page's applied master page.
   */
  readonly useMaster: LayoutRuleOptions_USE_MASTER;
  /**
   * Use layout rule from the page's applied master page.
   */
  readonly usemaster: LayoutRuleOptions_USE_MASTER;

  /**
   * Use existing layout rule setting on the page. Used for creating alternate layouts.
   */
  readonly PRESERVE_EXISTING: LayoutRuleOptions_PRESERVE_EXISTING;
  /**
   * Use existing layout rule setting on the page. Used for creating alternate layouts.
   */
  readonly preserveExisting: LayoutRuleOptions_PRESERVE_EXISTING;
  /**
   * Use existing layout rule setting on the page. Used for creating alternate layouts.
   */
  readonly preserveexisting: LayoutRuleOptions_PRESERVE_EXISTING;

}
