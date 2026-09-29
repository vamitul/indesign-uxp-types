/**
 * EpubFixedLayoutSpreadControl.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EpubFixedLayoutSpreadControl: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EpubFixedLayoutSpreadControl extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EpubFixedLayoutSpreadControl>): boolean;

  /**
   * @internal **WARNING:** `__EpubFixedLayoutSpreadControl` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EpubFixedLayoutSpreadControl]: never;
}


/**
 * Spreads based on document.
 */
interface EpubFixedLayoutSpreadControl_SPREADS_BASED_ON_DOC extends EpubFixedLayoutSpreadControl {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700949860;
}

/**
 * Physical spreads.
 */
interface EpubFixedLayoutSpreadControl_PHYSICAL_SPREADS extends EpubFixedLayoutSpreadControl {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701865593;
}

/**
 * Synthetic spreads.
 */
interface EpubFixedLayoutSpreadControl_SYNTHETIC_SPREADS extends EpubFixedLayoutSpreadControl {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702066542;
}

/**
 * No spreads.
 */
interface EpubFixedLayoutSpreadControl_NO_SPREADS extends EpubFixedLayoutSpreadControl {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702063727;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Choices for spread control for fixed layout EPub.
 */
export declare namespace EpubFixedLayoutSpreadControl {
/**
 * Spreads based on document.
 */
type SPREADS_BASED_ON_DOC = EpubFixedLayoutSpreadControl_SPREADS_BASED_ON_DOC;

/**
 * Physical spreads.
 */
type PHYSICAL_SPREADS = EpubFixedLayoutSpreadControl_PHYSICAL_SPREADS;

/**
 * Synthetic spreads.
 */
type SYNTHETIC_SPREADS = EpubFixedLayoutSpreadControl_SYNTHETIC_SPREADS;

/**
 * No spreads.
 */
type NO_SPREADS = EpubFixedLayoutSpreadControl_NO_SPREADS;

}
/**
 * Choices for spread control for fixed layout EPub.
 */
export declare const EpubFixedLayoutSpreadControl: typeof Enumeration & {

  /**
   * Spreads based on document.
   */
  readonly SPREADS_BASED_ON_DOC: EpubFixedLayoutSpreadControl_SPREADS_BASED_ON_DOC;
  /**
   * Spreads based on document.
   */
  readonly spreadsBasedOnDoc: EpubFixedLayoutSpreadControl_SPREADS_BASED_ON_DOC;
  /**
   * Spreads based on document.
   */
  readonly spreadsbasedondoc: EpubFixedLayoutSpreadControl_SPREADS_BASED_ON_DOC;

  /**
   * Physical spreads.
   */
  readonly PHYSICAL_SPREADS: EpubFixedLayoutSpreadControl_PHYSICAL_SPREADS;
  /**
   * Physical spreads.
   */
  readonly physicalSpreads: EpubFixedLayoutSpreadControl_PHYSICAL_SPREADS;
  /**
   * Physical spreads.
   */
  readonly physicalspreads: EpubFixedLayoutSpreadControl_PHYSICAL_SPREADS;

  /**
   * Synthetic spreads.
   */
  readonly SYNTHETIC_SPREADS: EpubFixedLayoutSpreadControl_SYNTHETIC_SPREADS;
  /**
   * Synthetic spreads.
   */
  readonly syntheticSpreads: EpubFixedLayoutSpreadControl_SYNTHETIC_SPREADS;
  /**
   * Synthetic spreads.
   */
  readonly syntheticspreads: EpubFixedLayoutSpreadControl_SYNTHETIC_SPREADS;

  /**
   * No spreads.
   */
  readonly NO_SPREADS: EpubFixedLayoutSpreadControl_NO_SPREADS;
  /**
   * No spreads.
   */
  readonly noSpreads: EpubFixedLayoutSpreadControl_NO_SPREADS;
  /**
   * No spreads.
   */
  readonly nospreads: EpubFixedLayoutSpreadControl_NO_SPREADS;

}
