/**
 * StateTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StateTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StateTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StateTypes>): boolean;

  /**
   * @internal **WARNING:** `__StateTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StateTypes]: never;
}


/**
 * The default appearance, used when there is no user activity on the button's area.
 */
interface StateTypes_UP extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971566;
}

/**
 * The mouse pointer moves into the button's area.
 */
interface StateTypes_ROLLOVER extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971574;
}

/**
 * The mouse pointer is clicked on the button's area.
 */
interface StateTypes_DOWN extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971556;
}

/**
 * Up-on state.
 */
interface StateTypes_UP_ON extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181970031;
}

/**
 * Rollover-on state.
 */
interface StateTypes_ROLLOVER_ON extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181972079;
}

/**
 * Down-on state.
 */
interface StateTypes_DOWN_ON extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181967471;
}

/**
 * Up-off state.
 */
interface StateTypes_UP_OFF extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181970022;
}

/**
 * Rollover-off state.
 */
interface StateTypes_ROLLOVER_OFF extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181972070;
}

/**
 * Down-off state.
 */
interface StateTypes_DOWN_OFF extends StateTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181967462;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying the events (user actions) that change a button's state.
 */
export declare namespace StateTypes {
/**
 * The default appearance, used when there is no user activity on the button's area.
 */
type UP = StateTypes_UP;

/**
 * The mouse pointer moves into the button's area.
 */
type ROLLOVER = StateTypes_ROLLOVER;

/**
 * The mouse pointer is clicked on the button's area.
 */
type DOWN = StateTypes_DOWN;

/**
 * Up-on state.
 */
type UP_ON = StateTypes_UP_ON;

/**
 * Rollover-on state.
 */
type ROLLOVER_ON = StateTypes_ROLLOVER_ON;

/**
 * Down-on state.
 */
type DOWN_ON = StateTypes_DOWN_ON;

/**
 * Up-off state.
 */
type UP_OFF = StateTypes_UP_OFF;

/**
 * Rollover-off state.
 */
type ROLLOVER_OFF = StateTypes_ROLLOVER_OFF;

/**
 * Down-off state.
 */
type DOWN_OFF = StateTypes_DOWN_OFF;

}
/**
 * Options for specifying the events (user actions) that change a button's state.
 */
export declare const StateTypes: typeof Enumeration & {

  /**
   * The default appearance, used when there is no user activity on the button's area.
   */
  readonly UP: StateTypes_UP;
  /**
   * The default appearance, used when there is no user activity on the button's area.
   */
  readonly up: StateTypes_UP;

  /**
   * The mouse pointer moves into the button's area.
   */
  readonly ROLLOVER: StateTypes_ROLLOVER;
  /**
   * The mouse pointer moves into the button's area.
   */
  readonly rollover: StateTypes_ROLLOVER;

  /**
   * The mouse pointer is clicked on the button's area.
   */
  readonly DOWN: StateTypes_DOWN;
  /**
   * The mouse pointer is clicked on the button's area.
   */
  readonly down: StateTypes_DOWN;

  /**
   * Up-on state.
   */
  readonly UP_ON: StateTypes_UP_ON;
  /**
   * Up-on state.
   */
  readonly upOn: StateTypes_UP_ON;
  /**
   * Up-on state.
   */
  readonly upon: StateTypes_UP_ON;

  /**
   * Rollover-on state.
   */
  readonly ROLLOVER_ON: StateTypes_ROLLOVER_ON;
  /**
   * Rollover-on state.
   */
  readonly rolloverOn: StateTypes_ROLLOVER_ON;
  /**
   * Rollover-on state.
   */
  readonly rolloveron: StateTypes_ROLLOVER_ON;

  /**
   * Down-on state.
   */
  readonly DOWN_ON: StateTypes_DOWN_ON;
  /**
   * Down-on state.
   */
  readonly downOn: StateTypes_DOWN_ON;
  /**
   * Down-on state.
   */
  readonly downon: StateTypes_DOWN_ON;

  /**
   * Up-off state.
   */
  readonly UP_OFF: StateTypes_UP_OFF;
  /**
   * Up-off state.
   */
  readonly upOff: StateTypes_UP_OFF;
  /**
   * Up-off state.
   */
  readonly upoff: StateTypes_UP_OFF;

  /**
   * Rollover-off state.
   */
  readonly ROLLOVER_OFF: StateTypes_ROLLOVER_OFF;
  /**
   * Rollover-off state.
   */
  readonly rolloverOff: StateTypes_ROLLOVER_OFF;
  /**
   * Rollover-off state.
   */
  readonly rolloveroff: StateTypes_ROLLOVER_OFF;

  /**
   * Down-off state.
   */
  readonly DOWN_OFF: StateTypes_DOWN_OFF;
  /**
   * Down-off state.
   */
  readonly downOff: StateTypes_DOWN_OFF;
  /**
   * Down-off state.
   */
  readonly downoff: StateTypes_DOWN_OFF;

}
