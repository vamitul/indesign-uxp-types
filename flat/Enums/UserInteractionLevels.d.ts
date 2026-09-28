/**
 * UserInteractionLevels.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __UserInteractionLevels: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface UserInteractionLevels extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<UserInteractionLevels>): boolean;

  /**
   * @internal **WARNING:** `__UserInteractionLevels` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__UserInteractionLevels]: never;
}


/**
 * The script does not display any dialogs or alerts.
 */
interface UserInteractionLevels_NEVER_INTERACT extends UserInteractionLevels {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699640946;
}

/**
 * The script displays all dialogs and alerts.
 */
interface UserInteractionLevels_INTERACT_WITH_ALL extends UserInteractionLevels {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699311169;
}

/**
 * Displays alerts but not dialogs.
 */
interface UserInteractionLevels_INTERACT_WITH_ALERTS extends UserInteractionLevels {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699311170;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How much a running script is allowed to interrupt with dialogs and alerts — never, for
 * everything, or only for alerts.
 */
export declare namespace UserInteractionLevels {
/**
 * The script does not display any dialogs or alerts.
 */
type NEVER_INTERACT = UserInteractionLevels_NEVER_INTERACT;

/**
 * The script displays all dialogs and alerts.
 */
type INTERACT_WITH_ALL = UserInteractionLevels_INTERACT_WITH_ALL;

/**
 * Displays alerts but not dialogs.
 */
type INTERACT_WITH_ALERTS = UserInteractionLevels_INTERACT_WITH_ALERTS;

}
/**
 * How much a running script is allowed to interrupt with dialogs and alerts — never, for
 * everything, or only for alerts.
 */
export declare const UserInteractionLevels: typeof Enumeration & {

  /**
   * The script does not display any dialogs or alerts.
   */
  readonly NEVER_INTERACT: UserInteractionLevels_NEVER_INTERACT;
  /**
   * The script does not display any dialogs or alerts.
   */
  readonly neverInteract: UserInteractionLevels_NEVER_INTERACT;
  /**
   * The script does not display any dialogs or alerts.
   */
  readonly neverinteract: UserInteractionLevels_NEVER_INTERACT;

  /**
   * The script displays all dialogs and alerts.
   */
  readonly INTERACT_WITH_ALL: UserInteractionLevels_INTERACT_WITH_ALL;
  /**
   * The script displays all dialogs and alerts.
   */
  readonly interactWithAll: UserInteractionLevels_INTERACT_WITH_ALL;
  /**
   * The script displays all dialogs and alerts.
   */
  readonly interactwithall: UserInteractionLevels_INTERACT_WITH_ALL;

  /**
   * Displays alerts but not dialogs.
   */
  readonly INTERACT_WITH_ALERTS: UserInteractionLevels_INTERACT_WITH_ALERTS;
  /**
   * Displays alerts but not dialogs.
   */
  readonly interactWithAlerts: UserInteractionLevels_INTERACT_WITH_ALERTS;
  /**
   * Displays alerts but not dialogs.
   */
  readonly interactwithalerts: UserInteractionLevels_INTERACT_WITH_ALERTS;

}
