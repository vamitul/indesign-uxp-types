/**
 * AssignmentStatus.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AssignmentStatus: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AssignmentStatus extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AssignmentStatus>): boolean;

  /**
   * @internal **WARNING:** `__AssignmentStatus` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AssignmentStatus]: never;
}


/**
 * The assignment has not been modified.
 */
interface AssignmentStatus_ASSIGNMENT_UP_TO_DATE extends AssignmentStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096119364;
}

/**
 * The assignment has been modified and needs to be updated.
 */
interface AssignmentStatus_ASSIGNMENT_OUT_OF_DATE extends AssignmentStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095724868;
}

/**
 * The assignment file is missing.
 */
interface AssignmentStatus_ASSIGNMENT_FILE_MISSING extends AssignmentStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095126387;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The status of the assignment.
 */
export declare namespace AssignmentStatus {
/**
 * The assignment has not been modified.
 */
type ASSIGNMENT_UP_TO_DATE = AssignmentStatus_ASSIGNMENT_UP_TO_DATE;

/**
 * The assignment has been modified and needs to be updated.
 */
type ASSIGNMENT_OUT_OF_DATE = AssignmentStatus_ASSIGNMENT_OUT_OF_DATE;

/**
 * The assignment file is missing.
 */
type ASSIGNMENT_FILE_MISSING = AssignmentStatus_ASSIGNMENT_FILE_MISSING;

}
/**
 * The status of the assignment.
 */
export declare const AssignmentStatus: typeof Enumeration & {

  /**
   * The assignment has not been modified.
   */
  readonly ASSIGNMENT_UP_TO_DATE: AssignmentStatus_ASSIGNMENT_UP_TO_DATE;
  /**
   * The assignment has not been modified.
   */
  readonly assignmentUpToDate: AssignmentStatus_ASSIGNMENT_UP_TO_DATE;
  /**
   * The assignment has not been modified.
   */
  readonly assignmentuptodate: AssignmentStatus_ASSIGNMENT_UP_TO_DATE;

  /**
   * The assignment has been modified and needs to be updated.
   */
  readonly ASSIGNMENT_OUT_OF_DATE: AssignmentStatus_ASSIGNMENT_OUT_OF_DATE;
  /**
   * The assignment has been modified and needs to be updated.
   */
  readonly assignmentOutOfDate: AssignmentStatus_ASSIGNMENT_OUT_OF_DATE;
  /**
   * The assignment has been modified and needs to be updated.
   */
  readonly assignmentoutofdate: AssignmentStatus_ASSIGNMENT_OUT_OF_DATE;

  /**
   * The assignment file is missing.
   */
  readonly ASSIGNMENT_FILE_MISSING: AssignmentStatus_ASSIGNMENT_FILE_MISSING;
  /**
   * The assignment file is missing.
   */
  readonly assignmentFileMissing: AssignmentStatus_ASSIGNMENT_FILE_MISSING;
  /**
   * The assignment file is missing.
   */
  readonly assignmentfilemissing: AssignmentStatus_ASSIGNMENT_FILE_MISSING;

}
