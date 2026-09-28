/**
 * HorizontalAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __HorizontalAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface HorizontalAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<HorizontalAlignment>): boolean;

  /**
   * @internal **WARNING:** `__HorizontalAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__HorizontalAlignment]: never;
}


/**
 * Place the anchored object to the right of the reference. 
 */
interface HorizontalAlignment_RIGHT_ALIGN extends HorizontalAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}

/**
 * Place the anchored object to the left of the reference.
 */
interface HorizontalAlignment_LEFT_ALIGN extends HorizontalAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Place the anchored object at the center of the reference.
 */
interface HorizontalAlignment_CENTER_ALIGN extends HorizontalAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}

/**
 * Place the anchored object relative to the text alignment.
 */
interface HorizontalAlignment_TEXT_ALIGN extends HorizontalAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1954046316;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The horizontal alignment of an anchored object. Not valid when anchored position is inline.
 */
export declare namespace HorizontalAlignment {
/**
 * Place the anchored object to the right of the reference. 
 */
type RIGHT_ALIGN = HorizontalAlignment_RIGHT_ALIGN;

/**
 * Place the anchored object to the left of the reference.
 */
type LEFT_ALIGN = HorizontalAlignment_LEFT_ALIGN;

/**
 * Place the anchored object at the center of the reference.
 */
type CENTER_ALIGN = HorizontalAlignment_CENTER_ALIGN;

/**
 * Place the anchored object relative to the text alignment.
 */
type TEXT_ALIGN = HorizontalAlignment_TEXT_ALIGN;

}
/**
 * The horizontal alignment of an anchored object. Not valid when anchored position is inline.
 */
export declare const HorizontalAlignment: typeof Enumeration & {

  /**
   * Place the anchored object to the right of the reference. 
   */
  readonly RIGHT_ALIGN: HorizontalAlignment_RIGHT_ALIGN;
  /**
   * Place the anchored object to the right of the reference. 
   */
  readonly rightAlign: HorizontalAlignment_RIGHT_ALIGN;
  /**
   * Place the anchored object to the right of the reference. 
   */
  readonly rightalign: HorizontalAlignment_RIGHT_ALIGN;

  /**
   * Place the anchored object to the left of the reference.
   */
  readonly LEFT_ALIGN: HorizontalAlignment_LEFT_ALIGN;
  /**
   * Place the anchored object to the left of the reference.
   */
  readonly leftAlign: HorizontalAlignment_LEFT_ALIGN;
  /**
   * Place the anchored object to the left of the reference.
   */
  readonly leftalign: HorizontalAlignment_LEFT_ALIGN;

  /**
   * Place the anchored object at the center of the reference.
   */
  readonly CENTER_ALIGN: HorizontalAlignment_CENTER_ALIGN;
  /**
   * Place the anchored object at the center of the reference.
   */
  readonly centerAlign: HorizontalAlignment_CENTER_ALIGN;
  /**
   * Place the anchored object at the center of the reference.
   */
  readonly centeralign: HorizontalAlignment_CENTER_ALIGN;

  /**
   * Place the anchored object relative to the text alignment.
   */
  readonly TEXT_ALIGN: HorizontalAlignment_TEXT_ALIGN;
  /**
   * Place the anchored object relative to the text alignment.
   */
  readonly textAlign: HorizontalAlignment_TEXT_ALIGN;
  /**
   * Place the anchored object relative to the text alignment.
   */
  readonly textalign: HorizontalAlignment_TEXT_ALIGN;

}
