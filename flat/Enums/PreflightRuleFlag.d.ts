/**
 * PreflightRuleFlag.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PreflightRuleFlag: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PreflightRuleFlag extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PreflightRuleFlag>): boolean;

  /**
   * @internal **WARNING:** `__PreflightRuleFlag` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PreflightRuleFlag]: never;
}


/**
 * Rule is currently disabled.
 */
interface PreflightRuleFlag_RULE_IS_DISABLED extends PreflightRuleFlag {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699890274;
}

/**
 * Treat as error if rule check failed.
 */
interface PreflightRuleFlag_RETURN_AS_ERROR extends PreflightRuleFlag {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699890546;
}

/**
 * Treat as warning if rule check failed.
 */
interface PreflightRuleFlag_RETURN_AS_WARNING extends PreflightRuleFlag {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699893879;
}

/**
 * Treat as information only if rule check failed.
 */
interface PreflightRuleFlag_RETURN_AS_INFORMATIONAL extends PreflightRuleFlag {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699893865;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The flag indicating whether the rule is disabled, set for error, warning, or just informational.
 */
export declare namespace PreflightRuleFlag {
/**
 * Rule is currently disabled.
 */
type RULE_IS_DISABLED = PreflightRuleFlag_RULE_IS_DISABLED;

/**
 * Treat as error if rule check failed.
 */
type RETURN_AS_ERROR = PreflightRuleFlag_RETURN_AS_ERROR;

/**
 * Treat as warning if rule check failed.
 */
type RETURN_AS_WARNING = PreflightRuleFlag_RETURN_AS_WARNING;

/**
 * Treat as information only if rule check failed.
 */
type RETURN_AS_INFORMATIONAL = PreflightRuleFlag_RETURN_AS_INFORMATIONAL;

}
/**
 * The flag indicating whether the rule is disabled, set for error, warning, or just informational.
 */
export declare const PreflightRuleFlag: typeof Enumeration & {

  /**
   * Rule is currently disabled.
   */
  readonly RULE_IS_DISABLED: PreflightRuleFlag_RULE_IS_DISABLED;
  /**
   * Rule is currently disabled.
   */
  readonly ruleIsDisabled: PreflightRuleFlag_RULE_IS_DISABLED;
  /**
   * Rule is currently disabled.
   */
  readonly ruleisdisabled: PreflightRuleFlag_RULE_IS_DISABLED;

  /**
   * Treat as error if rule check failed.
   */
  readonly RETURN_AS_ERROR: PreflightRuleFlag_RETURN_AS_ERROR;
  /**
   * Treat as error if rule check failed.
   */
  readonly returnAsError: PreflightRuleFlag_RETURN_AS_ERROR;
  /**
   * Treat as error if rule check failed.
   */
  readonly returnaserror: PreflightRuleFlag_RETURN_AS_ERROR;

  /**
   * Treat as warning if rule check failed.
   */
  readonly RETURN_AS_WARNING: PreflightRuleFlag_RETURN_AS_WARNING;
  /**
   * Treat as warning if rule check failed.
   */
  readonly returnAsWarning: PreflightRuleFlag_RETURN_AS_WARNING;
  /**
   * Treat as warning if rule check failed.
   */
  readonly returnaswarning: PreflightRuleFlag_RETURN_AS_WARNING;

  /**
   * Treat as information only if rule check failed.
   */
  readonly RETURN_AS_INFORMATIONAL: PreflightRuleFlag_RETURN_AS_INFORMATIONAL;
  /**
   * Treat as information only if rule check failed.
   */
  readonly returnAsInformational: PreflightRuleFlag_RETURN_AS_INFORMATIONAL;
  /**
   * Treat as information only if rule check failed.
   */
  readonly returnasinformational: PreflightRuleFlag_RETURN_AS_INFORMATIONAL;

}
