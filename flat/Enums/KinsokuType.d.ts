/**
 * KinsokuType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __KinsokuType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface KinsokuType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<KinsokuType>): boolean;

  /**
   * @internal **WARNING:** `__KinsokuType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__KinsokuType]: never;
}


/**
 * Attempts to move characters to the previous line; if the push-in is not possible, pushes characters to the next line.
 */
interface KinsokuType_KINSOKU_PUSH_IN_FIRST extends KinsokuType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248553318;
}

/**
 * Attempts to move characters to the next line; if the push-out is not possible, pushes characters to the previous line.
 */
interface KinsokuType_KINSOKU_PUSH_OUT_FIRST extends KinsokuType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248554854;
}

/**
 * Always moves characters to the next line. Does not attempt a push-in.
 */
interface KinsokuType_KINSOKU_PUSH_OUT_ONLY extends KinsokuType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248554863;
}

/**
 * The kinsoku prioritize adjustment amount.
 */
interface KinsokuType_KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT extends KinsokuType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248553313;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Kinsoku processing options.
 */
export declare namespace KinsokuType {
/**
 * Attempts to move characters to the previous line; if the push-in is not possible, pushes characters to the next line.
 */
type KINSOKU_PUSH_IN_FIRST = KinsokuType_KINSOKU_PUSH_IN_FIRST;

/**
 * Attempts to move characters to the next line; if the push-out is not possible, pushes characters to the previous line.
 */
type KINSOKU_PUSH_OUT_FIRST = KinsokuType_KINSOKU_PUSH_OUT_FIRST;

/**
 * Always moves characters to the next line. Does not attempt a push-in.
 */
type KINSOKU_PUSH_OUT_ONLY = KinsokuType_KINSOKU_PUSH_OUT_ONLY;

/**
 * The kinsoku prioritize adjustment amount.
 */
type KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT = KinsokuType_KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT;

}
/**
 * Kinsoku processing options.
 */
export declare const KinsokuType: typeof Enumeration & {

  /**
   * Attempts to move characters to the previous line; if the push-in is not possible, pushes characters to the next line.
   */
  readonly KINSOKU_PUSH_IN_FIRST: KinsokuType_KINSOKU_PUSH_IN_FIRST;
  /**
   * Attempts to move characters to the previous line; if the push-in is not possible, pushes characters to the next line.
   */
  readonly kinsokuPushInFirst: KinsokuType_KINSOKU_PUSH_IN_FIRST;
  /**
   * Attempts to move characters to the previous line; if the push-in is not possible, pushes characters to the next line.
   */
  readonly kinsokupushinfirst: KinsokuType_KINSOKU_PUSH_IN_FIRST;

  /**
   * Attempts to move characters to the next line; if the push-out is not possible, pushes characters to the previous line.
   */
  readonly KINSOKU_PUSH_OUT_FIRST: KinsokuType_KINSOKU_PUSH_OUT_FIRST;
  /**
   * Attempts to move characters to the next line; if the push-out is not possible, pushes characters to the previous line.
   */
  readonly kinsokuPushOutFirst: KinsokuType_KINSOKU_PUSH_OUT_FIRST;
  /**
   * Attempts to move characters to the next line; if the push-out is not possible, pushes characters to the previous line.
   */
  readonly kinsokupushoutfirst: KinsokuType_KINSOKU_PUSH_OUT_FIRST;

  /**
   * Always moves characters to the next line. Does not attempt a push-in.
   */
  readonly KINSOKU_PUSH_OUT_ONLY: KinsokuType_KINSOKU_PUSH_OUT_ONLY;
  /**
   * Always moves characters to the next line. Does not attempt a push-in.
   */
  readonly kinsokuPushOutOnly: KinsokuType_KINSOKU_PUSH_OUT_ONLY;
  /**
   * Always moves characters to the next line. Does not attempt a push-in.
   */
  readonly kinsokupushoutonly: KinsokuType_KINSOKU_PUSH_OUT_ONLY;

  /**
   * The kinsoku prioritize adjustment amount.
   */
  readonly KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT: KinsokuType_KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT;
  /**
   * The kinsoku prioritize adjustment amount.
   */
  readonly kinsokuPrioritizeAdjustmentAmount: KinsokuType_KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT;
  /**
   * The kinsoku prioritize adjustment amount.
   */
  readonly kinsokuprioritizeadjustmentamount: KinsokuType_KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT;

}
