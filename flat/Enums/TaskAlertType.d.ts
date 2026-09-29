/**
 * TaskAlertType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TaskAlertType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TaskAlertType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TaskAlertType>): boolean;

  /**
   * @internal **WARNING:** `__TaskAlertType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TaskAlertType]: never;
}


/**
 * Information message.
 */
interface TaskAlertType_TASK_INFORMATION extends TaskAlertType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699302771;
}

/**
 * Warning message.
 */
interface TaskAlertType_TASK_WARNING extends TaskAlertType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700220275;
}

/**
 * Error message.
 */
interface TaskAlertType_TASK_ERROR extends TaskAlertType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699040627;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The severity of a background task alert — information, warning, or error.
 */
export declare namespace TaskAlertType {
/**
 * Information message.
 */
type TASK_INFORMATION = TaskAlertType_TASK_INFORMATION;

/**
 * Warning message.
 */
type TASK_WARNING = TaskAlertType_TASK_WARNING;

/**
 * Error message.
 */
type TASK_ERROR = TaskAlertType_TASK_ERROR;

}
/**
 * The severity of a background task alert — information, warning, or error.
 */
export declare const TaskAlertType: typeof Enumeration & {

  /**
   * Information message.
   */
  readonly TASK_INFORMATION: TaskAlertType_TASK_INFORMATION;
  /**
   * Information message.
   */
  readonly taskInformation: TaskAlertType_TASK_INFORMATION;
  /**
   * Information message.
   */
  readonly taskinformation: TaskAlertType_TASK_INFORMATION;

  /**
   * Warning message.
   */
  readonly TASK_WARNING: TaskAlertType_TASK_WARNING;
  /**
   * Warning message.
   */
  readonly taskWarning: TaskAlertType_TASK_WARNING;
  /**
   * Warning message.
   */
  readonly taskwarning: TaskAlertType_TASK_WARNING;

  /**
   * Error message.
   */
  readonly TASK_ERROR: TaskAlertType_TASK_ERROR;
  /**
   * Error message.
   */
  readonly taskError: TaskAlertType_TASK_ERROR;
  /**
   * Error message.
   */
  readonly taskerror: TaskAlertType_TASK_ERROR;

}
