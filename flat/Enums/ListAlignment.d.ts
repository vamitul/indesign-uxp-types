/**
 * ListAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ListAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ListAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ListAlignment>): boolean;

  /**
   * @internal **WARNING:** `__ListAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ListAlignment]: never;
}


/**
 * Align left.
 */
interface ListAlignment_LEFT_ALIGN extends ListAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Align center.
 */
interface ListAlignment_CENTER_ALIGN extends ListAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}

/**
 * Align right.
 */
interface ListAlignment_RIGHT_ALIGN extends ListAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How a list's bullet or number is aligned within the space reserved for it.
 */
export declare namespace ListAlignment {
/**
 * Align left.
 */
type LEFT_ALIGN = ListAlignment_LEFT_ALIGN;

/**
 * Align center.
 */
type CENTER_ALIGN = ListAlignment_CENTER_ALIGN;

/**
 * Align right.
 */
type RIGHT_ALIGN = ListAlignment_RIGHT_ALIGN;

}
/**
 * How a list's bullet or number is aligned within the space reserved for it.
 */
export declare const ListAlignment: typeof Enumeration & {

  /**
   * Align left.
   */
  readonly LEFT_ALIGN: ListAlignment_LEFT_ALIGN;
  /**
   * Align left.
   */
  readonly leftAlign: ListAlignment_LEFT_ALIGN;
  /**
   * Align left.
   */
  readonly leftalign: ListAlignment_LEFT_ALIGN;

  /**
   * Align center.
   */
  readonly CENTER_ALIGN: ListAlignment_CENTER_ALIGN;
  /**
   * Align center.
   */
  readonly centerAlign: ListAlignment_CENTER_ALIGN;
  /**
   * Align center.
   */
  readonly centeralign: ListAlignment_CENTER_ALIGN;

  /**
   * Align right.
   */
  readonly RIGHT_ALIGN: ListAlignment_RIGHT_ALIGN;
  /**
   * Align right.
   */
  readonly rightAlign: ListAlignment_RIGHT_ALIGN;
  /**
   * Align right.
   */
  readonly rightalign: ListAlignment_RIGHT_ALIGN;

}
