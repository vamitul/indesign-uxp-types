/**
 * AssignmentExportOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AssignmentExportOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AssignmentExportOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AssignmentExportOptions>): boolean;

  /**
   * @internal **WARNING:** `__AssignmentExportOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AssignmentExportOptions]: never;
}


/**
 * Exports frames but does not export content. 
 */
interface AssignmentExportOptions_EMPTY_FRAMES extends AssignmentExportOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1098073446;
}

/**
 * Exports only spreads with assigned frames.
 */
interface AssignmentExportOptions_ASSIGNED_SPREADS extends AssignmentExportOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1098073459;
}

/**
 * Exports the entire document.
 */
interface AssignmentExportOptions_EVERYTHING extends AssignmentExportOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1098073441;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Export options for assignment files.
 */
export declare namespace AssignmentExportOptions {
/**
 * Exports frames but does not export content. 
 */
type EMPTY_FRAMES = AssignmentExportOptions_EMPTY_FRAMES;

/**
 * Exports only spreads with assigned frames.
 */
type ASSIGNED_SPREADS = AssignmentExportOptions_ASSIGNED_SPREADS;

/**
 * Exports the entire document.
 */
type EVERYTHING = AssignmentExportOptions_EVERYTHING;

}
/**
 * Export options for assignment files.
 */
export declare const AssignmentExportOptions: typeof Enumeration & {

  /**
   * Exports frames but does not export content. 
   */
  readonly EMPTY_FRAMES: AssignmentExportOptions_EMPTY_FRAMES;
  /**
   * Exports frames but does not export content. 
   */
  readonly emptyFrames: AssignmentExportOptions_EMPTY_FRAMES;
  /**
   * Exports frames but does not export content. 
   */
  readonly emptyframes: AssignmentExportOptions_EMPTY_FRAMES;

  /**
   * Exports only spreads with assigned frames.
   */
  readonly ASSIGNED_SPREADS: AssignmentExportOptions_ASSIGNED_SPREADS;
  /**
   * Exports only spreads with assigned frames.
   */
  readonly assignedSpreads: AssignmentExportOptions_ASSIGNED_SPREADS;
  /**
   * Exports only spreads with assigned frames.
   */
  readonly assignedspreads: AssignmentExportOptions_ASSIGNED_SPREADS;

  /**
   * Exports the entire document.
   */
  readonly EVERYTHING: AssignmentExportOptions_EVERYTHING;
  /**
   * Exports the entire document.
   */
  readonly everything: AssignmentExportOptions_EVERYTHING;

}
