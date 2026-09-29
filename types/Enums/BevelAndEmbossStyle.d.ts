/**
 * BevelAndEmbossStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BevelAndEmbossStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BevelAndEmbossStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BevelAndEmbossStyle>): boolean;

  /**
   * @internal **WARNING:** `__BevelAndEmbossStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BevelAndEmbossStyle]: never;
}


/**
 * The outside edges of the object are beveled.
 */
interface BevelAndEmbossStyle_OUTER_BEVEL extends BevelAndEmbossStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020618849;
}

/**
 * The inside edges of the object are beveled.
 */
interface BevelAndEmbossStyle_INNER_BEVEL extends BevelAndEmbossStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020618850;
}

/**
 * An emboss effect is applied to the object.
 */
interface BevelAndEmbossStyle_EMBOSS extends BevelAndEmbossStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020618851;
}

/**
 * An emboss effect is applied to the edges of the object.
 */
interface BevelAndEmbossStyle_PILLOW_EMBOSS extends BevelAndEmbossStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020618852;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Bevel and emboss style options.
 */
export declare namespace BevelAndEmbossStyle {
/**
 * The outside edges of the object are beveled.
 */
type OUTER_BEVEL = BevelAndEmbossStyle_OUTER_BEVEL;

/**
 * The inside edges of the object are beveled.
 */
type INNER_BEVEL = BevelAndEmbossStyle_INNER_BEVEL;

/**
 * An emboss effect is applied to the object.
 */
type EMBOSS = BevelAndEmbossStyle_EMBOSS;

/**
 * An emboss effect is applied to the edges of the object.
 */
type PILLOW_EMBOSS = BevelAndEmbossStyle_PILLOW_EMBOSS;

}
/**
 * Bevel and emboss style options.
 */
export declare const BevelAndEmbossStyle: typeof Enumeration & {

  /**
   * The outside edges of the object are beveled.
   */
  readonly OUTER_BEVEL: BevelAndEmbossStyle_OUTER_BEVEL;
  /**
   * The outside edges of the object are beveled.
   */
  readonly outerBevel: BevelAndEmbossStyle_OUTER_BEVEL;
  /**
   * The outside edges of the object are beveled.
   */
  readonly outerbevel: BevelAndEmbossStyle_OUTER_BEVEL;

  /**
   * The inside edges of the object are beveled.
   */
  readonly INNER_BEVEL: BevelAndEmbossStyle_INNER_BEVEL;
  /**
   * The inside edges of the object are beveled.
   */
  readonly innerBevel: BevelAndEmbossStyle_INNER_BEVEL;
  /**
   * The inside edges of the object are beveled.
   */
  readonly innerbevel: BevelAndEmbossStyle_INNER_BEVEL;

  /**
   * An emboss effect is applied to the object.
   */
  readonly EMBOSS: BevelAndEmbossStyle_EMBOSS;
  /**
   * An emboss effect is applied to the object.
   */
  readonly emboss: BevelAndEmbossStyle_EMBOSS;

  /**
   * An emboss effect is applied to the edges of the object.
   */
  readonly PILLOW_EMBOSS: BevelAndEmbossStyle_PILLOW_EMBOSS;
  /**
   * An emboss effect is applied to the edges of the object.
   */
  readonly pillowEmboss: BevelAndEmbossStyle_PILLOW_EMBOSS;
  /**
   * An emboss effect is applied to the edges of the object.
   */
  readonly pillowemboss: BevelAndEmbossStyle_PILLOW_EMBOSS;

}
