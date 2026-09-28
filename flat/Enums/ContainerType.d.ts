/**
 * ContainerType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ContainerType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ContainerType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ContainerType>): boolean;

  /**
   * @internal **WARNING:** `__ContainerType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ContainerType]: never;
}


/**
 * The container contains unordered items.
 */
interface ContainerType_BAG extends ContainerType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298424423;
}

/**
 * The container contains ordered or sequential items.
 */
interface ContainerType_SEQ extends ContainerType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298428785;
}

/**
 * The container contains alternative values of which only one can be used.
 */
interface ContainerType_ALT extends ContainerType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298424180;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether the container's items are unordered, ordered, or a set of mutually exclusive
 * alternatives.
 */
export declare namespace ContainerType {
/**
 * The container contains unordered items.
 */
type BAG = ContainerType_BAG;

/**
 * The container contains ordered or sequential items.
 */
type SEQ = ContainerType_SEQ;

/**
 * The container contains alternative values of which only one can be used.
 */
type ALT = ContainerType_ALT;

}
/**
 * Whether the container's items are unordered, ordered, or a set of mutually exclusive
 * alternatives.
 */
export declare const ContainerType: typeof Enumeration & {

  /**
   * The container contains unordered items.
   */
  readonly BAG: ContainerType_BAG;
  /**
   * The container contains unordered items.
   */
  readonly bag: ContainerType_BAG;

  /**
   * The container contains ordered or sequential items.
   */
  readonly SEQ: ContainerType_SEQ;
  /**
   * The container contains ordered or sequential items.
   */
  readonly seq: ContainerType_SEQ;

  /**
   * The container contains alternative values of which only one can be used.
   */
  readonly ALT: ContainerType_ALT;
  /**
   * The container contains alternative values of which only one can be used.
   */
  readonly alt: ContainerType_ALT;

}
