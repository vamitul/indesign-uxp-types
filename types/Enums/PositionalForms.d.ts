/**
 * PositionalForms.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PositionalForms: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PositionalForms extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PositionalForms>): boolean;

  /**
   * @internal **WARNING:** `__PositionalForms` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PositionalForms]: never;
}


/**
 * None.
 */
interface PositionalForms_NONE extends PositionalForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Calculated forms.
 */
interface PositionalForms_CALCULATE extends PositionalForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634756205;
}

/**
 * Initial form.
 */
interface PositionalForms_INITIAL extends PositionalForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768843636;
}

/**
 * Medial form.
 */
interface PositionalForms_MEDIAL extends PositionalForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835361385;
}

/**
 * Final form.
 */
interface PositionalForms_FINAL extends PositionalForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718185569;
}

/**
 * Isolated form.
 */
interface PositionalForms_ISOLATED extends PositionalForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1769172844;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which positional variant of a glyph to use in a connected script such as Arabic — initial,
 * medial, final, or isolated.
 */
export declare namespace PositionalForms {
/**
 * None.
 */
type NONE = PositionalForms_NONE;

/**
 * Calculated forms.
 */
type CALCULATE = PositionalForms_CALCULATE;

/**
 * Initial form.
 */
type INITIAL = PositionalForms_INITIAL;

/**
 * Medial form.
 */
type MEDIAL = PositionalForms_MEDIAL;

/**
 * Final form.
 */
type FINAL = PositionalForms_FINAL;

/**
 * Isolated form.
 */
type ISOLATED = PositionalForms_ISOLATED;

}
/**
 * Which positional variant of a glyph to use in a connected script such as Arabic — initial,
 * medial, final, or isolated.
 */
export declare const PositionalForms: typeof Enumeration & {

  /**
   * None.
   */
  readonly NONE: PositionalForms_NONE;
  /**
   * None.
   */
  readonly none: PositionalForms_NONE;

  /**
   * Calculated forms.
   */
  readonly CALCULATE: PositionalForms_CALCULATE;
  /**
   * Calculated forms.
   */
  readonly calculate: PositionalForms_CALCULATE;

  /**
   * Initial form.
   */
  readonly INITIAL: PositionalForms_INITIAL;
  /**
   * Initial form.
   */
  readonly initial: PositionalForms_INITIAL;

  /**
   * Medial form.
   */
  readonly MEDIAL: PositionalForms_MEDIAL;
  /**
   * Medial form.
   */
  readonly medial: PositionalForms_MEDIAL;

  /**
   * Final form.
   */
  readonly FINAL: PositionalForms_FINAL;
  /**
   * Final form.
   */
  readonly final: PositionalForms_FINAL;

  /**
   * Isolated form.
   */
  readonly ISOLATED: PositionalForms_ISOLATED;
  /**
   * Isolated form.
   */
  readonly isolated: PositionalForms_ISOLATED;

}
