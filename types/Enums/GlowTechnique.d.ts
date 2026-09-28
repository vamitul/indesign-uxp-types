/**
 * GlowTechnique.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __GlowTechnique: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface GlowTechnique extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<GlowTechnique>): boolean;

  /**
   * @internal **WARNING:** `__GlowTechnique` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__GlowTechnique]: never;
}


/**
 * Softer.
 */
interface GlowTechnique_SOFTER extends GlowTechnique {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020618337;
}

/**
 * Precise.
 */
interface GlowTechnique_PRECISE extends GlowTechnique {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020618338;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Glow technique options.
 */
export declare namespace GlowTechnique {
/**
 * Softer.
 */
type SOFTER = GlowTechnique_SOFTER;

/**
 * Precise.
 */
type PRECISE = GlowTechnique_PRECISE;

}
/**
 * Glow technique options.
 */
export declare const GlowTechnique: typeof Enumeration & {

  /**
   * Softer.
   */
  readonly SOFTER: GlowTechnique_SOFTER;
  /**
   * Softer.
   */
  readonly softer: GlowTechnique_SOFTER;

  /**
   * Precise.
   */
  readonly PRECISE: GlowTechnique_PRECISE;
  /**
   * Precise.
   */
  readonly precise: GlowTechnique_PRECISE;

}
