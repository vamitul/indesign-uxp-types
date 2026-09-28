/**
 * LockStateValues.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LockStateValues: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LockStateValues extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LockStateValues>): boolean;

  /**
   * @internal **WARNING:** `__LockStateValues` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LockStateValues]: never;
}


/**
 * No lock state.
 */
interface LockStateValues_NONE extends LockStateValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * The story is unmanaged.
 */
interface LockStateValues_UNMANAGED_STORY extends LockStateValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112700269;
}

/**
 * The story has been checked in.
 */
interface LockStateValues_CHECKED_IN_STORY extends LockStateValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112695657;
}

/**
 * The story has been checked out.
 */
interface LockStateValues_CHECKED_OUT_STORY extends LockStateValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112695663;
}

/**
 * The story is locked.
 */
interface LockStateValues_LOCKED_STORY extends LockStateValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112697963;
}

/**
 * The story is embedded.
 */
interface LockStateValues_EMBEDDED_STORY extends LockStateValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112696173;
}

/**
 * The story file is missing.
 */
interface LockStateValues_MISSING_LOCK_STATE extends LockStateValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112698227;
}

/**
 * The stories have a mixed lock state.
 */
interface LockStateValues_MIXED_LOCK_STATE extends LockStateValues {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112698232;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The InCopy check-in state of a story — unmanaged, checked in or out, locked, embedded, or
 * missing.
 */
export declare namespace LockStateValues {
/**
 * No lock state.
 */
type NONE = LockStateValues_NONE;

/**
 * The story is unmanaged.
 */
type UNMANAGED_STORY = LockStateValues_UNMANAGED_STORY;

/**
 * The story has been checked in.
 */
type CHECKED_IN_STORY = LockStateValues_CHECKED_IN_STORY;

/**
 * The story has been checked out.
 */
type CHECKED_OUT_STORY = LockStateValues_CHECKED_OUT_STORY;

/**
 * The story is locked.
 */
type LOCKED_STORY = LockStateValues_LOCKED_STORY;

/**
 * The story is embedded.
 */
type EMBEDDED_STORY = LockStateValues_EMBEDDED_STORY;

/**
 * The story file is missing.
 */
type MISSING_LOCK_STATE = LockStateValues_MISSING_LOCK_STATE;

/**
 * The stories have a mixed lock state.
 */
type MIXED_LOCK_STATE = LockStateValues_MIXED_LOCK_STATE;

}
/**
 * The InCopy check-in state of a story — unmanaged, checked in or out, locked, embedded, or
 * missing.
 */
export declare const LockStateValues: typeof Enumeration & {

  /**
   * No lock state.
   */
  readonly NONE: LockStateValues_NONE;
  /**
   * No lock state.
   */
  readonly none: LockStateValues_NONE;

  /**
   * The story is unmanaged.
   */
  readonly UNMANAGED_STORY: LockStateValues_UNMANAGED_STORY;
  /**
   * The story is unmanaged.
   */
  readonly unmanagedStory: LockStateValues_UNMANAGED_STORY;
  /**
   * The story is unmanaged.
   */
  readonly unmanagedstory: LockStateValues_UNMANAGED_STORY;

  /**
   * The story has been checked in.
   */
  readonly CHECKED_IN_STORY: LockStateValues_CHECKED_IN_STORY;
  /**
   * The story has been checked in.
   */
  readonly checkedInStory: LockStateValues_CHECKED_IN_STORY;
  /**
   * The story has been checked in.
   */
  readonly checkedinstory: LockStateValues_CHECKED_IN_STORY;

  /**
   * The story has been checked out.
   */
  readonly CHECKED_OUT_STORY: LockStateValues_CHECKED_OUT_STORY;
  /**
   * The story has been checked out.
   */
  readonly checkedOutStory: LockStateValues_CHECKED_OUT_STORY;
  /**
   * The story has been checked out.
   */
  readonly checkedoutstory: LockStateValues_CHECKED_OUT_STORY;

  /**
   * The story is locked.
   */
  readonly LOCKED_STORY: LockStateValues_LOCKED_STORY;
  /**
   * The story is locked.
   */
  readonly lockedStory: LockStateValues_LOCKED_STORY;
  /**
   * The story is locked.
   */
  readonly lockedstory: LockStateValues_LOCKED_STORY;

  /**
   * The story is embedded.
   */
  readonly EMBEDDED_STORY: LockStateValues_EMBEDDED_STORY;
  /**
   * The story is embedded.
   */
  readonly embeddedStory: LockStateValues_EMBEDDED_STORY;
  /**
   * The story is embedded.
   */
  readonly embeddedstory: LockStateValues_EMBEDDED_STORY;

  /**
   * The story file is missing.
   */
  readonly MISSING_LOCK_STATE: LockStateValues_MISSING_LOCK_STATE;
  /**
   * The story file is missing.
   */
  readonly missingLockState: LockStateValues_MISSING_LOCK_STATE;
  /**
   * The story file is missing.
   */
  readonly missinglockstate: LockStateValues_MISSING_LOCK_STATE;

  /**
   * The stories have a mixed lock state.
   */
  readonly MIXED_LOCK_STATE: LockStateValues_MIXED_LOCK_STATE;
  /**
   * The stories have a mixed lock state.
   */
  readonly mixedLockState: LockStateValues_MIXED_LOCK_STATE;
  /**
   * The stories have a mixed lock state.
   */
  readonly mixedlockstate: LockStateValues_MIXED_LOCK_STATE;

}
