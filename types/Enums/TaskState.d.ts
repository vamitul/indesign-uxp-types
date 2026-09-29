/**
 * TaskState.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TaskState: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TaskState extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TaskState>): boolean;

  /**
   * @internal **WARNING:** `__TaskState` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TaskState]: never;
}


/**
 * Task was queued and is waiting to be scheduled for execution.
 */
interface TaskState_QUEUED extends TaskState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699837285;
}

/**
 * Task is running.
 */
interface TaskState_RUNNING extends TaskState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700033141;
}

/**
 * Task is waiting.
 */
interface TaskState_WAITING extends TaskState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700225396;
}

/**
 * Task was signalled to cancel but did not stop yet.
 */
interface TaskState_CANCELLING extends TaskState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700029281;
}

/**
 * Task completed execution (successfully or with errors).
 */
interface TaskState_COMPLETED extends TaskState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700029296;
}

/**
 * Task was cancelled (either before it ran or during execution).
 */
interface TaskState_CANCELLED extends TaskState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700029292;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where a background task is in its lifecycle — queued, running, waiting, being cancelled,
 * completed, or cancelled.
 */
export declare namespace TaskState {
/**
 * Task was queued and is waiting to be scheduled for execution.
 */
type QUEUED = TaskState_QUEUED;

/**
 * Task is running.
 */
type RUNNING = TaskState_RUNNING;

/**
 * Task is waiting.
 */
type WAITING = TaskState_WAITING;

/**
 * Task was signalled to cancel but did not stop yet.
 */
type CANCELLING = TaskState_CANCELLING;

/**
 * Task completed execution (successfully or with errors).
 */
type COMPLETED = TaskState_COMPLETED;

/**
 * Task was cancelled (either before it ran or during execution).
 */
type CANCELLED = TaskState_CANCELLED;

}
/**
 * Where a background task is in its lifecycle — queued, running, waiting, being cancelled,
 * completed, or cancelled.
 */
export declare const TaskState: typeof Enumeration & {

  /**
   * Task was queued and is waiting to be scheduled for execution.
   */
  readonly QUEUED: TaskState_QUEUED;
  /**
   * Task was queued and is waiting to be scheduled for execution.
   */
  readonly queued: TaskState_QUEUED;

  /**
   * Task is running.
   */
  readonly RUNNING: TaskState_RUNNING;
  /**
   * Task is running.
   */
  readonly running: TaskState_RUNNING;

  /**
   * Task is waiting.
   */
  readonly WAITING: TaskState_WAITING;
  /**
   * Task is waiting.
   */
  readonly waiting: TaskState_WAITING;

  /**
   * Task was signalled to cancel but did not stop yet.
   */
  readonly CANCELLING: TaskState_CANCELLING;
  /**
   * Task was signalled to cancel but did not stop yet.
   */
  readonly cancelling: TaskState_CANCELLING;

  /**
   * Task completed execution (successfully or with errors).
   */
  readonly COMPLETED: TaskState_COMPLETED;
  /**
   * Task completed execution (successfully or with errors).
   */
  readonly completed: TaskState_COMPLETED;

  /**
   * Task was cancelled (either before it ran or during execution).
   */
  readonly CANCELLED: TaskState_CANCELLED;
  /**
   * Task was cancelled (either before it ran or during execution).
   */
  readonly cancelled: TaskState_CANCELLED;

}
