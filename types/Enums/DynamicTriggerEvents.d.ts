/**
 * DynamicTriggerEvents.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DynamicTriggerEvents: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DynamicTriggerEvents extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DynamicTriggerEvents>): boolean;

  /**
   * @internal **WARNING:** `__DynamicTriggerEvents` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DynamicTriggerEvents]: never;
}


/**
 * target is triggered on loading of the page.
 */
interface DynamicTriggerEvents_ON_PAGE_LOAD extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953321036;
}

/**
 * target is triggered on clicking on the page.
 */
interface DynamicTriggerEvents_ON_PAGE_CLICK extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953321027;
}

/**
 * target is triggered on loading of the state in a multi-state object.
 */
interface DynamicTriggerEvents_ON_STATE_LOAD extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953321804;
}

/**
 * target is triggered on a button or self click.
 */
interface DynamicTriggerEvents_ON_CLICK extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953317740;
}

/**
 * target is triggered on a button or self rollover.
 */
interface DynamicTriggerEvents_ON_ROLLOVER extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953321590;
}

/**
 * target is triggered on a button release.
 */
interface DynamicTriggerEvents_ON_RELEASE extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953321580;
}

/**
 * target is triggered on a button rolloff.
 */
interface DynamicTriggerEvents_ON_ROLLOFF extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953321574;
}

/**
 * target is triggered on self click.
 */
interface DynamicTriggerEvents_ON_SELF_CLICK extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1951613804;
}

/**
 * target is triggered on self rollover.
 */
interface DynamicTriggerEvents_ON_SELF_ROLLOVER extends DynamicTriggerEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1951617638;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The event that triggers a list of dynamic target objects to play.
 */
export declare namespace DynamicTriggerEvents {
/**
 * target is triggered on loading of the page.
 */
type ON_PAGE_LOAD = DynamicTriggerEvents_ON_PAGE_LOAD;

/**
 * target is triggered on clicking on the page.
 */
type ON_PAGE_CLICK = DynamicTriggerEvents_ON_PAGE_CLICK;

/**
 * target is triggered on loading of the state in a multi-state object.
 */
type ON_STATE_LOAD = DynamicTriggerEvents_ON_STATE_LOAD;

/**
 * target is triggered on a button or self click.
 */
type ON_CLICK = DynamicTriggerEvents_ON_CLICK;

/**
 * target is triggered on a button or self rollover.
 */
type ON_ROLLOVER = DynamicTriggerEvents_ON_ROLLOVER;

/**
 * target is triggered on a button release.
 */
type ON_RELEASE = DynamicTriggerEvents_ON_RELEASE;

/**
 * target is triggered on a button rolloff.
 */
type ON_ROLLOFF = DynamicTriggerEvents_ON_ROLLOFF;

/**
 * target is triggered on self click.
 */
type ON_SELF_CLICK = DynamicTriggerEvents_ON_SELF_CLICK;

/**
 * target is triggered on self rollover.
 */
type ON_SELF_ROLLOVER = DynamicTriggerEvents_ON_SELF_ROLLOVER;

}
/**
 * The event that triggers a list of dynamic target objects to play.
 */
export declare const DynamicTriggerEvents: typeof Enumeration & {

  /**
   * target is triggered on loading of the page.
   */
  readonly ON_PAGE_LOAD: DynamicTriggerEvents_ON_PAGE_LOAD;
  /**
   * target is triggered on loading of the page.
   */
  readonly onPageLoad: DynamicTriggerEvents_ON_PAGE_LOAD;
  /**
   * target is triggered on loading of the page.
   */
  readonly onpageload: DynamicTriggerEvents_ON_PAGE_LOAD;

  /**
   * target is triggered on clicking on the page.
   */
  readonly ON_PAGE_CLICK: DynamicTriggerEvents_ON_PAGE_CLICK;
  /**
   * target is triggered on clicking on the page.
   */
  readonly onPageClick: DynamicTriggerEvents_ON_PAGE_CLICK;
  /**
   * target is triggered on clicking on the page.
   */
  readonly onpageclick: DynamicTriggerEvents_ON_PAGE_CLICK;

  /**
   * target is triggered on loading of the state in a multi-state object.
   */
  readonly ON_STATE_LOAD: DynamicTriggerEvents_ON_STATE_LOAD;
  /**
   * target is triggered on loading of the state in a multi-state object.
   */
  readonly onStateLoad: DynamicTriggerEvents_ON_STATE_LOAD;
  /**
   * target is triggered on loading of the state in a multi-state object.
   */
  readonly onstateload: DynamicTriggerEvents_ON_STATE_LOAD;

  /**
   * target is triggered on a button or self click.
   */
  readonly ON_CLICK: DynamicTriggerEvents_ON_CLICK;
  /**
   * target is triggered on a button or self click.
   */
  readonly onClick: DynamicTriggerEvents_ON_CLICK;
  /**
   * target is triggered on a button or self click.
   */
  readonly onclick: DynamicTriggerEvents_ON_CLICK;

  /**
   * target is triggered on a button or self rollover.
   */
  readonly ON_ROLLOVER: DynamicTriggerEvents_ON_ROLLOVER;
  /**
   * target is triggered on a button or self rollover.
   */
  readonly onRollover: DynamicTriggerEvents_ON_ROLLOVER;
  /**
   * target is triggered on a button or self rollover.
   */
  readonly onrollover: DynamicTriggerEvents_ON_ROLLOVER;

  /**
   * target is triggered on a button release.
   */
  readonly ON_RELEASE: DynamicTriggerEvents_ON_RELEASE;
  /**
   * target is triggered on a button release.
   */
  readonly onRelease: DynamicTriggerEvents_ON_RELEASE;
  /**
   * target is triggered on a button release.
   */
  readonly onrelease: DynamicTriggerEvents_ON_RELEASE;

  /**
   * target is triggered on a button rolloff.
   */
  readonly ON_ROLLOFF: DynamicTriggerEvents_ON_ROLLOFF;
  /**
   * target is triggered on a button rolloff.
   */
  readonly onRolloff: DynamicTriggerEvents_ON_ROLLOFF;
  /**
   * target is triggered on a button rolloff.
   */
  readonly onrolloff: DynamicTriggerEvents_ON_ROLLOFF;

  /**
   * target is triggered on self click.
   */
  readonly ON_SELF_CLICK: DynamicTriggerEvents_ON_SELF_CLICK;
  /**
   * target is triggered on self click.
   */
  readonly onSelfClick: DynamicTriggerEvents_ON_SELF_CLICK;
  /**
   * target is triggered on self click.
   */
  readonly onselfclick: DynamicTriggerEvents_ON_SELF_CLICK;

  /**
   * target is triggered on self rollover.
   */
  readonly ON_SELF_ROLLOVER: DynamicTriggerEvents_ON_SELF_ROLLOVER;
  /**
   * target is triggered on self rollover.
   */
  readonly onSelfRollover: DynamicTriggerEvents_ON_SELF_ROLLOVER;
  /**
   * target is triggered on self rollover.
   */
  readonly onselfrollover: DynamicTriggerEvents_ON_SELF_ROLLOVER;

}
