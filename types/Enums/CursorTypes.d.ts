/**
 * CursorTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CursorTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CursorTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CursorTypes>): boolean;

  /**
   * @internal **WARNING:** `__CursorTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CursorTypes]: never;
}


/**
 * Uses a standard cursor.
 */
interface CursorTypes_STANDARD_CURSOR extends CursorTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699968100;
}

/**
 * Uses a thick cursor.
 */
interface CursorTypes_THICK_CURSOR extends CursorTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700029291;
}

/**
 * Uses a barbell cursor.
 */
interface CursorTypes_BARBELL_CURSOR extends CursorTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1698841196;
}

/**
 * Uses a block cursor.
 */
interface CursorTypes_BLOCK_CURSOR extends CursorTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1698851951;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The pointer shown while a scripted operation runs.
 */
export declare namespace CursorTypes {
/**
 * Uses a standard cursor.
 */
type STANDARD_CURSOR = CursorTypes_STANDARD_CURSOR;

/**
 * Uses a thick cursor.
 */
type THICK_CURSOR = CursorTypes_THICK_CURSOR;

/**
 * Uses a barbell cursor.
 */
type BARBELL_CURSOR = CursorTypes_BARBELL_CURSOR;

/**
 * Uses a block cursor.
 */
type BLOCK_CURSOR = CursorTypes_BLOCK_CURSOR;

}
/**
 * The pointer shown while a scripted operation runs.
 */
export declare const CursorTypes: typeof Enumeration & {

  /**
   * Uses a standard cursor.
   */
  readonly STANDARD_CURSOR: CursorTypes_STANDARD_CURSOR;
  /**
   * Uses a standard cursor.
   */
  readonly standardCursor: CursorTypes_STANDARD_CURSOR;
  /**
   * Uses a standard cursor.
   */
  readonly standardcursor: CursorTypes_STANDARD_CURSOR;

  /**
   * Uses a thick cursor.
   */
  readonly THICK_CURSOR: CursorTypes_THICK_CURSOR;
  /**
   * Uses a thick cursor.
   */
  readonly thickCursor: CursorTypes_THICK_CURSOR;
  /**
   * Uses a thick cursor.
   */
  readonly thickcursor: CursorTypes_THICK_CURSOR;

  /**
   * Uses a barbell cursor.
   */
  readonly BARBELL_CURSOR: CursorTypes_BARBELL_CURSOR;
  /**
   * Uses a barbell cursor.
   */
  readonly barbellCursor: CursorTypes_BARBELL_CURSOR;
  /**
   * Uses a barbell cursor.
   */
  readonly barbellcursor: CursorTypes_BARBELL_CURSOR;

  /**
   * Uses a block cursor.
   */
  readonly BLOCK_CURSOR: CursorTypes_BLOCK_CURSOR;
  /**
   * Uses a block cursor.
   */
  readonly blockCursor: CursorTypes_BLOCK_CURSOR;
  /**
   * Uses a block cursor.
   */
  readonly blockcursor: CursorTypes_BLOCK_CURSOR;

}
