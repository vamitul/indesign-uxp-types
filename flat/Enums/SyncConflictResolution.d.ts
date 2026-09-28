/**
 * SyncConflictResolution.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SyncConflictResolution: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SyncConflictResolution extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SyncConflictResolution>): boolean;

  /**
   * @internal **WARNING:** `__SyncConflictResolution` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SyncConflictResolution]: never;
}


/**
 * Skips conflicting files.
 */
interface SyncConflictResolution_SKIP_CONFLICTS extends SyncConflictResolution {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986216787;
}

/**
 * Asks the user how to resolve conflicts.
 */
interface SyncConflictResolution_ASK_ABOUT_CONFLICTS extends SyncConflictResolution {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986216769;
}

/**
 * Uses the local version.
 */
interface SyncConflictResolution_PREFER_LOCAL extends SyncConflictResolution {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986216780;
}

/**
 * Uses the project version.
 */
interface SyncConflictResolution_PREFER_PROJECT extends SyncConflictResolution {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986216784;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The type of conflict resolution to employ during Version Cue synchronization.
 */
export declare namespace SyncConflictResolution {
/**
 * Skips conflicting files.
 */
type SKIP_CONFLICTS = SyncConflictResolution_SKIP_CONFLICTS;

/**
 * Asks the user how to resolve conflicts.
 */
type ASK_ABOUT_CONFLICTS = SyncConflictResolution_ASK_ABOUT_CONFLICTS;

/**
 * Uses the local version.
 */
type PREFER_LOCAL = SyncConflictResolution_PREFER_LOCAL;

/**
 * Uses the project version.
 */
type PREFER_PROJECT = SyncConflictResolution_PREFER_PROJECT;

}
/**
 * The type of conflict resolution to employ during Version Cue synchronization.
 */
export declare const SyncConflictResolution: typeof Enumeration & {

  /**
   * Skips conflicting files.
   */
  readonly SKIP_CONFLICTS: SyncConflictResolution_SKIP_CONFLICTS;
  /**
   * Skips conflicting files.
   */
  readonly skipConflicts: SyncConflictResolution_SKIP_CONFLICTS;
  /**
   * Skips conflicting files.
   */
  readonly skipconflicts: SyncConflictResolution_SKIP_CONFLICTS;

  /**
   * Asks the user how to resolve conflicts.
   */
  readonly ASK_ABOUT_CONFLICTS: SyncConflictResolution_ASK_ABOUT_CONFLICTS;
  /**
   * Asks the user how to resolve conflicts.
   */
  readonly askAboutConflicts: SyncConflictResolution_ASK_ABOUT_CONFLICTS;
  /**
   * Asks the user how to resolve conflicts.
   */
  readonly askaboutconflicts: SyncConflictResolution_ASK_ABOUT_CONFLICTS;

  /**
   * Uses the local version.
   */
  readonly PREFER_LOCAL: SyncConflictResolution_PREFER_LOCAL;
  /**
   * Uses the local version.
   */
  readonly preferLocal: SyncConflictResolution_PREFER_LOCAL;
  /**
   * Uses the local version.
   */
  readonly preferlocal: SyncConflictResolution_PREFER_LOCAL;

  /**
   * Uses the project version.
   */
  readonly PREFER_PROJECT: SyncConflictResolution_PREFER_PROJECT;
  /**
   * Uses the project version.
   */
  readonly preferProject: SyncConflictResolution_PREFER_PROJECT;
  /**
   * Uses the project version.
   */
  readonly preferproject: SyncConflictResolution_PREFER_PROJECT;

}
