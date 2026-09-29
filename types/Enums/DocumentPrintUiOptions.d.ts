/**
 * DocumentPrintUiOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DocumentPrintUiOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DocumentPrintUiOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DocumentPrintUiOptions>): boolean;

  /**
   * @internal **WARNING:** `__DocumentPrintUiOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DocumentPrintUiOptions]: never;
}


/**
 * Do not show progress bar during printing.
 */
interface DocumentPrintUiOptions_SUPPRESS_PRINT_PROGRESS extends DocumentPrintUiOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936748659;
}

/**
 * Do not show warning dialog during printing.
 */
interface DocumentPrintUiOptions_SUPPRESS_PRINT_WARNINGS extends DocumentPrintUiOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936750450;
}

/**
 * Do not show print dialog. 
 */
interface DocumentPrintUiOptions_SUPPRESS_PRINT_DIALOG extends DocumentPrintUiOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936745575;
}

/**
 * Do not show file save dialog during printing. 
 */
interface DocumentPrintUiOptions_SUPPRESS_FILE_SAVE_DIALOG extends DocumentPrintUiOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936089444;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which print-related dialogs and prompts to suppress when printing.
 */
export declare namespace DocumentPrintUiOptions {
/**
 * Do not show progress bar during printing.
 */
type SUPPRESS_PRINT_PROGRESS = DocumentPrintUiOptions_SUPPRESS_PRINT_PROGRESS;

/**
 * Do not show warning dialog during printing.
 */
type SUPPRESS_PRINT_WARNINGS = DocumentPrintUiOptions_SUPPRESS_PRINT_WARNINGS;

/**
 * Do not show print dialog. 
 */
type SUPPRESS_PRINT_DIALOG = DocumentPrintUiOptions_SUPPRESS_PRINT_DIALOG;

/**
 * Do not show file save dialog during printing. 
 */
type SUPPRESS_FILE_SAVE_DIALOG = DocumentPrintUiOptions_SUPPRESS_FILE_SAVE_DIALOG;

}
/**
 * Which print-related dialogs and prompts to suppress when printing.
 */
export declare const DocumentPrintUiOptions: typeof Enumeration & {

  /**
   * Do not show progress bar during printing.
   */
  readonly SUPPRESS_PRINT_PROGRESS: DocumentPrintUiOptions_SUPPRESS_PRINT_PROGRESS;
  /**
   * Do not show progress bar during printing.
   */
  readonly suppressPrintProgress: DocumentPrintUiOptions_SUPPRESS_PRINT_PROGRESS;
  /**
   * Do not show progress bar during printing.
   */
  readonly suppressprintprogress: DocumentPrintUiOptions_SUPPRESS_PRINT_PROGRESS;

  /**
   * Do not show warning dialog during printing.
   */
  readonly SUPPRESS_PRINT_WARNINGS: DocumentPrintUiOptions_SUPPRESS_PRINT_WARNINGS;
  /**
   * Do not show warning dialog during printing.
   */
  readonly suppressPrintWarnings: DocumentPrintUiOptions_SUPPRESS_PRINT_WARNINGS;
  /**
   * Do not show warning dialog during printing.
   */
  readonly suppressprintwarnings: DocumentPrintUiOptions_SUPPRESS_PRINT_WARNINGS;

  /**
   * Do not show print dialog. 
   */
  readonly SUPPRESS_PRINT_DIALOG: DocumentPrintUiOptions_SUPPRESS_PRINT_DIALOG;
  /**
   * Do not show print dialog. 
   */
  readonly suppressPrintDialog: DocumentPrintUiOptions_SUPPRESS_PRINT_DIALOG;
  /**
   * Do not show print dialog. 
   */
  readonly suppressprintdialog: DocumentPrintUiOptions_SUPPRESS_PRINT_DIALOG;

  /**
   * Do not show file save dialog during printing. 
   */
  readonly SUPPRESS_FILE_SAVE_DIALOG: DocumentPrintUiOptions_SUPPRESS_FILE_SAVE_DIALOG;
  /**
   * Do not show file save dialog during printing. 
   */
  readonly suppressFileSaveDialog: DocumentPrintUiOptions_SUPPRESS_FILE_SAVE_DIALOG;
  /**
   * Do not show file save dialog during printing. 
   */
  readonly suppressfilesavedialog: DocumentPrintUiOptions_SUPPRESS_FILE_SAVE_DIALOG;

}
