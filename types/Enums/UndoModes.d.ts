/**
 * UndoModes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __UndoModes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface UndoModes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<UndoModes>): boolean;

  /**
   * @internal **WARNING:** `__UndoModes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__UndoModes]: never;
}


/**
 * Undo each script request as a separate step.
 */
interface UndoModes_SCRIPT_REQUEST extends UndoModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699967573;
}

/**
 * Undo the entire script as a single step.
 */
interface UndoModes_ENTIRE_SCRIPT extends UndoModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699963733;
}

/**
 * Automatically undo the entire script as part of the previous step.
 */
interface UndoModes_AUTO_UNDO extends UndoModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699963221;
}

/**
 * Fast undo the entire script as a single step.
 */
interface UndoModes_FAST_ENTIRE_SCRIPT extends UndoModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699964501;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Undo options for executing a script.
 */
export declare namespace UndoModes {
/**
 * Undo each script request as a separate step.
 */
type SCRIPT_REQUEST = UndoModes_SCRIPT_REQUEST;

/**
 * Undo the entire script as a single step.
 */
type ENTIRE_SCRIPT = UndoModes_ENTIRE_SCRIPT;

/**
 * Automatically undo the entire script as part of the previous step.
 */
type AUTO_UNDO = UndoModes_AUTO_UNDO;

/**
 * Fast undo the entire script as a single step.
 */
type FAST_ENTIRE_SCRIPT = UndoModes_FAST_ENTIRE_SCRIPT;

}
/**
 * Undo options for executing a script.
 */
export declare const UndoModes: typeof Enumeration & {

  /**
   * Undo each script request as a separate step.
   */
  readonly SCRIPT_REQUEST: UndoModes_SCRIPT_REQUEST;
  /**
   * Undo each script request as a separate step.
   */
  readonly scriptRequest: UndoModes_SCRIPT_REQUEST;
  /**
   * Undo each script request as a separate step.
   */
  readonly scriptrequest: UndoModes_SCRIPT_REQUEST;

  /**
   * Undo the entire script as a single step.
   */
  readonly ENTIRE_SCRIPT: UndoModes_ENTIRE_SCRIPT;
  /**
   * Undo the entire script as a single step.
   */
  readonly entireScript: UndoModes_ENTIRE_SCRIPT;
  /**
   * Undo the entire script as a single step.
   */
  readonly entirescript: UndoModes_ENTIRE_SCRIPT;

  /**
   * Automatically undo the entire script as part of the previous step.
   */
  readonly AUTO_UNDO: UndoModes_AUTO_UNDO;
  /**
   * Automatically undo the entire script as part of the previous step.
   */
  readonly autoUndo: UndoModes_AUTO_UNDO;
  /**
   * Automatically undo the entire script as part of the previous step.
   */
  readonly autoundo: UndoModes_AUTO_UNDO;

  /**
   * Fast undo the entire script as a single step.
   */
  readonly FAST_ENTIRE_SCRIPT: UndoModes_FAST_ENTIRE_SCRIPT;
  /**
   * Fast undo the entire script as a single step.
   */
  readonly fastEntireScript: UndoModes_FAST_ENTIRE_SCRIPT;
  /**
   * Fast undo the entire script as a single step.
   */
  readonly fastentirescript: UndoModes_FAST_ENTIRE_SCRIPT;

}
