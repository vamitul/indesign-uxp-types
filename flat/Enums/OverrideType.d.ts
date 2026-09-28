/**
 * OverrideType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __OverrideType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface OverrideType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<OverrideType>): boolean;

  /**
   * @internal **WARNING:** `__OverrideType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__OverrideType]: never;
}


/**
 * Clears all types of override.
 */
interface OverrideType_ALL extends OverrideType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634495520;
}

/**
 * Clears only character style overrides.
 */
interface OverrideType_CHARACTER_ONLY extends OverrideType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667789423;
}

/**
 * Clears only paragraph style overrides.
 */
interface OverrideType_PARAGRAPH_ONLY extends OverrideType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885434479;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which style overrides to clear — all of them, or only the character or paragraph ones.
 */
export declare namespace OverrideType {
/**
 * Clears all types of override.
 */
type ALL = OverrideType_ALL;

/**
 * Clears only character style overrides.
 */
type CHARACTER_ONLY = OverrideType_CHARACTER_ONLY;

/**
 * Clears only paragraph style overrides.
 */
type PARAGRAPH_ONLY = OverrideType_PARAGRAPH_ONLY;

}
/**
 * Which style overrides to clear — all of them, or only the character or paragraph ones.
 */
export declare const OverrideType: typeof Enumeration & {

  /**
   * Clears all types of override.
   */
  readonly ALL: OverrideType_ALL;
  /**
   * Clears all types of override.
   */
  readonly all: OverrideType_ALL;

  /**
   * Clears only character style overrides.
   */
  readonly CHARACTER_ONLY: OverrideType_CHARACTER_ONLY;
  /**
   * Clears only character style overrides.
   */
  readonly characterOnly: OverrideType_CHARACTER_ONLY;
  /**
   * Clears only character style overrides.
   */
  readonly characteronly: OverrideType_CHARACTER_ONLY;

  /**
   * Clears only paragraph style overrides.
   */
  readonly PARAGRAPH_ONLY: OverrideType_PARAGRAPH_ONLY;
  /**
   * Clears only paragraph style overrides.
   */
  readonly paragraphOnly: OverrideType_PARAGRAPH_ONLY;
  /**
   * Clears only paragraph style overrides.
   */
  readonly paragraphonly: OverrideType_PARAGRAPH_ONLY;

}
