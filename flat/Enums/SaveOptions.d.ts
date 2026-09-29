/**
 * SaveOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SaveOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SaveOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SaveOptions>): boolean;

  /**
   * @internal **WARNING:** `__SaveOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SaveOptions]: never;
}


/**
 * Does not save changes.
 */
interface SaveOptions_NO extends SaveOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852776480;
}

/**
 * Displays a prompt asking whether to save changes.
 */
interface SaveOptions_ASK extends SaveOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634954016;
}

/**
 * Saves changes.
 */
interface SaveOptions_YES extends SaveOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2036691744;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for saving a document before closing or quitting.
 */
export declare namespace SaveOptions {
/**
 * Does not save changes.
 */
type NO = SaveOptions_NO;

/**
 * Displays a prompt asking whether to save changes.
 */
type ASK = SaveOptions_ASK;

/**
 * Saves changes.
 */
type YES = SaveOptions_YES;

}
/**
 * Options for saving a document before closing or quitting.
 */
export declare const SaveOptions: typeof Enumeration & {

  /**
   * Does not save changes.
   */
  readonly NO: SaveOptions_NO;
  /**
   * Does not save changes.
   */
  readonly no: SaveOptions_NO;

  /**
   * Displays a prompt asking whether to save changes.
   */
  readonly ASK: SaveOptions_ASK;
  /**
   * Displays a prompt asking whether to save changes.
   */
  readonly ask: SaveOptions_ASK;

  /**
   * Saves changes.
   */
  readonly YES: SaveOptions_YES;
  /**
   * Saves changes.
   */
  readonly yes: SaveOptions_YES;

}
