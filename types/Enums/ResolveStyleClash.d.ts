/**
 * ResolveStyleClash.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ResolveStyleClash: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ResolveStyleClash extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ResolveStyleClash>): boolean;

  /**
   * @internal **WARNING:** `__ResolveStyleClash` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ResolveStyleClash]: never;
}


/**
 * Uses the existing style.
 */
interface ResolveStyleClash_RESOLVE_CLASH_USE_EXISTING extends ResolveStyleClash {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2001879877;
}

/**
 * Automatically renames the new style.
 */
interface ResolveStyleClash_RESOLVE_CLASH_AUTO_RENAME extends ResolveStyleClash {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2001879873;
}

/**
 * Uses the new style.
 */
interface ResolveStyleClash_RESOLVE_CLASH_USE_NEW extends ResolveStyleClash {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2001879886;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for resolving clashes that result from matching style names.
 */
export declare namespace ResolveStyleClash {
/**
 * Uses the existing style.
 */
type RESOLVE_CLASH_USE_EXISTING = ResolveStyleClash_RESOLVE_CLASH_USE_EXISTING;

/**
 * Automatically renames the new style.
 */
type RESOLVE_CLASH_AUTO_RENAME = ResolveStyleClash_RESOLVE_CLASH_AUTO_RENAME;

/**
 * Uses the new style.
 */
type RESOLVE_CLASH_USE_NEW = ResolveStyleClash_RESOLVE_CLASH_USE_NEW;

}
/**
 * Options for resolving clashes that result from matching style names.
 */
export declare const ResolveStyleClash: typeof Enumeration & {

  /**
   * Uses the existing style.
   */
  readonly RESOLVE_CLASH_USE_EXISTING: ResolveStyleClash_RESOLVE_CLASH_USE_EXISTING;
  /**
   * Uses the existing style.
   */
  readonly resolveClashUseExisting: ResolveStyleClash_RESOLVE_CLASH_USE_EXISTING;
  /**
   * Uses the existing style.
   */
  readonly resolveclashuseexisting: ResolveStyleClash_RESOLVE_CLASH_USE_EXISTING;

  /**
   * Automatically renames the new style.
   */
  readonly RESOLVE_CLASH_AUTO_RENAME: ResolveStyleClash_RESOLVE_CLASH_AUTO_RENAME;
  /**
   * Automatically renames the new style.
   */
  readonly resolveClashAutoRename: ResolveStyleClash_RESOLVE_CLASH_AUTO_RENAME;
  /**
   * Automatically renames the new style.
   */
  readonly resolveclashautorename: ResolveStyleClash_RESOLVE_CLASH_AUTO_RENAME;

  /**
   * Uses the new style.
   */
  readonly RESOLVE_CLASH_USE_NEW: ResolveStyleClash_RESOLVE_CLASH_USE_NEW;
  /**
   * Uses the new style.
   */
  readonly resolveClashUseNew: ResolveStyleClash_RESOLVE_CLASH_USE_NEW;
  /**
   * Uses the new style.
   */
  readonly resolveclashusenew: ResolveStyleClash_RESOLVE_CLASH_USE_NEW;

}
