/**
 * AlignDistributeBounds.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AlignDistributeBounds: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AlignDistributeBounds extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AlignDistributeBounds>): boolean;

  /**
   * @internal **WARNING:** `__AlignDistributeBounds` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AlignDistributeBounds]: never;
}


/**
 * Align or distribute to the bounds of the objects.
 */
interface AlignDistributeBounds_ITEM_BOUNDS extends AlignDistributeBounds {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416587604;
}

/**
 * Align or distribute to the bounds of the page.
 */
interface AlignDistributeBounds_PAGE_BOUNDS extends AlignDistributeBounds {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416589377;
}

/**
 * Align or distribute to the margins of the page.
 */
interface AlignDistributeBounds_MARGIN_BOUNDS extends AlignDistributeBounds {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416588609;
}

/**
 * Align or distribute to the bounds of the spread.
 */
interface AlignDistributeBounds_SPREAD_BOUNDS extends AlignDistributeBounds {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416590160;
}

/**
 * Align or distribute to the bounds of the bleed.
 */
interface AlignDistributeBounds_BLEED_BOUNDS extends AlignDistributeBounds {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416577644;
}

/**
 * Align or distribute to a key object.
 */
interface AlignDistributeBounds_KEY_OBJECT extends AlignDistributeBounds {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699439993;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for aligning or distributing objects.
 */
export declare namespace AlignDistributeBounds {
/**
 * Align or distribute to the bounds of the objects.
 */
type ITEM_BOUNDS = AlignDistributeBounds_ITEM_BOUNDS;

/**
 * Align or distribute to the bounds of the page.
 */
type PAGE_BOUNDS = AlignDistributeBounds_PAGE_BOUNDS;

/**
 * Align or distribute to the margins of the page.
 */
type MARGIN_BOUNDS = AlignDistributeBounds_MARGIN_BOUNDS;

/**
 * Align or distribute to the bounds of the spread.
 */
type SPREAD_BOUNDS = AlignDistributeBounds_SPREAD_BOUNDS;

/**
 * Align or distribute to the bounds of the bleed.
 */
type BLEED_BOUNDS = AlignDistributeBounds_BLEED_BOUNDS;

/**
 * Align or distribute to a key object.
 */
type KEY_OBJECT = AlignDistributeBounds_KEY_OBJECT;

}
/**
 * Options for aligning or distributing objects.
 */
export declare const AlignDistributeBounds: typeof Enumeration & {

  /**
   * Align or distribute to the bounds of the objects.
   */
  readonly ITEM_BOUNDS: AlignDistributeBounds_ITEM_BOUNDS;
  /**
   * Align or distribute to the bounds of the objects.
   */
  readonly itemBounds: AlignDistributeBounds_ITEM_BOUNDS;
  /**
   * Align or distribute to the bounds of the objects.
   */
  readonly itembounds: AlignDistributeBounds_ITEM_BOUNDS;

  /**
   * Align or distribute to the bounds of the page.
   */
  readonly PAGE_BOUNDS: AlignDistributeBounds_PAGE_BOUNDS;
  /**
   * Align or distribute to the bounds of the page.
   */
  readonly pageBounds: AlignDistributeBounds_PAGE_BOUNDS;
  /**
   * Align or distribute to the bounds of the page.
   */
  readonly pagebounds: AlignDistributeBounds_PAGE_BOUNDS;

  /**
   * Align or distribute to the margins of the page.
   */
  readonly MARGIN_BOUNDS: AlignDistributeBounds_MARGIN_BOUNDS;
  /**
   * Align or distribute to the margins of the page.
   */
  readonly marginBounds: AlignDistributeBounds_MARGIN_BOUNDS;
  /**
   * Align or distribute to the margins of the page.
   */
  readonly marginbounds: AlignDistributeBounds_MARGIN_BOUNDS;

  /**
   * Align or distribute to the bounds of the spread.
   */
  readonly SPREAD_BOUNDS: AlignDistributeBounds_SPREAD_BOUNDS;
  /**
   * Align or distribute to the bounds of the spread.
   */
  readonly spreadBounds: AlignDistributeBounds_SPREAD_BOUNDS;
  /**
   * Align or distribute to the bounds of the spread.
   */
  readonly spreadbounds: AlignDistributeBounds_SPREAD_BOUNDS;

  /**
   * Align or distribute to the bounds of the bleed.
   */
  readonly BLEED_BOUNDS: AlignDistributeBounds_BLEED_BOUNDS;
  /**
   * Align or distribute to the bounds of the bleed.
   */
  readonly bleedBounds: AlignDistributeBounds_BLEED_BOUNDS;
  /**
   * Align or distribute to the bounds of the bleed.
   */
  readonly bleedbounds: AlignDistributeBounds_BLEED_BOUNDS;

  /**
   * Align or distribute to a key object.
   */
  readonly KEY_OBJECT: AlignDistributeBounds_KEY_OBJECT;
  /**
   * Align or distribute to a key object.
   */
  readonly keyObject: AlignDistributeBounds_KEY_OBJECT;
  /**
   * Align or distribute to a key object.
   */
  readonly keyobject: AlignDistributeBounds_KEY_OBJECT;

}
