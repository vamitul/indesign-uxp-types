/**
 * EditingState.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EditingState: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EditingState extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EditingState>): boolean;

  /**
   * @internal **WARNING:** `__EditingState` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EditingState]: never;
}


/**
 * The editing status is not known.
 */
interface EditingState_EDITING_UNKNOWN extends EditingState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986217301;
}

/**
 * The file is not currently in use and is not locked.
 */
interface EditingState_EDITING_NOWHERE extends EditingState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986217294;
}

/**
 * Lock held but not usable.
 */
interface EditingState_EDITING_REMOTELY extends EditingState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986217298;
}

/**
 * The file has been modified locally and not locked.
 */
interface EditingState_EDITING_LOCALLY extends EditingState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986217292;
}

/**
 * The file has been locked locally and may be modified.
 */
interface EditingState_EDITING_LOCALLY_LOCKED extends EditingState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986217291;
}

/**
 * The file was modified locally or remotely while it was locked and therefore two versions exist.
 */
interface EditingState_EDITING_CONFLICT extends EditingState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986217283;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The editing state of the file in Version Cue.
 */
export declare namespace EditingState {
/**
 * The editing status is not known.
 */
type EDITING_UNKNOWN = EditingState_EDITING_UNKNOWN;

/**
 * The file is not currently in use and is not locked.
 */
type EDITING_NOWHERE = EditingState_EDITING_NOWHERE;

/**
 * Lock held but not usable.
 */
type EDITING_REMOTELY = EditingState_EDITING_REMOTELY;

/**
 * The file has been modified locally and not locked.
 */
type EDITING_LOCALLY = EditingState_EDITING_LOCALLY;

/**
 * The file has been locked locally and may be modified.
 */
type EDITING_LOCALLY_LOCKED = EditingState_EDITING_LOCALLY_LOCKED;

/**
 * The file was modified locally or remotely while it was locked and therefore two versions exist.
 */
type EDITING_CONFLICT = EditingState_EDITING_CONFLICT;

}
/**
 * The editing state of the file in Version Cue.
 */
export declare const EditingState: typeof Enumeration & {

  /**
   * The editing status is not known.
   */
  readonly EDITING_UNKNOWN: EditingState_EDITING_UNKNOWN;
  /**
   * The editing status is not known.
   */
  readonly editingUnknown: EditingState_EDITING_UNKNOWN;
  /**
   * The editing status is not known.
   */
  readonly editingunknown: EditingState_EDITING_UNKNOWN;

  /**
   * The file is not currently in use and is not locked.
   */
  readonly EDITING_NOWHERE: EditingState_EDITING_NOWHERE;
  /**
   * The file is not currently in use and is not locked.
   */
  readonly editingNowhere: EditingState_EDITING_NOWHERE;
  /**
   * The file is not currently in use and is not locked.
   */
  readonly editingnowhere: EditingState_EDITING_NOWHERE;

  /**
   * Lock held but not usable.
   */
  readonly EDITING_REMOTELY: EditingState_EDITING_REMOTELY;
  /**
   * Lock held but not usable.
   */
  readonly editingRemotely: EditingState_EDITING_REMOTELY;
  /**
   * Lock held but not usable.
   */
  readonly editingremotely: EditingState_EDITING_REMOTELY;

  /**
   * The file has been modified locally and not locked.
   */
  readonly EDITING_LOCALLY: EditingState_EDITING_LOCALLY;
  /**
   * The file has been modified locally and not locked.
   */
  readonly editingLocally: EditingState_EDITING_LOCALLY;
  /**
   * The file has been modified locally and not locked.
   */
  readonly editinglocally: EditingState_EDITING_LOCALLY;

  /**
   * The file has been locked locally and may be modified.
   */
  readonly EDITING_LOCALLY_LOCKED: EditingState_EDITING_LOCALLY_LOCKED;
  /**
   * The file has been locked locally and may be modified.
   */
  readonly editingLocallyLocked: EditingState_EDITING_LOCALLY_LOCKED;
  /**
   * The file has been locked locally and may be modified.
   */
  readonly editinglocallylocked: EditingState_EDITING_LOCALLY_LOCKED;

  /**
   * The file was modified locally or remotely while it was locked and therefore two versions exist.
   */
  readonly EDITING_CONFLICT: EditingState_EDITING_CONFLICT;
  /**
   * The file was modified locally or remotely while it was locked and therefore two versions exist.
   */
  readonly editingConflict: EditingState_EDITING_CONFLICT;
  /**
   * The file was modified locally or remotely while it was locked and therefore two versions exist.
   */
  readonly editingconflict: EditingState_EDITING_CONFLICT;

}
