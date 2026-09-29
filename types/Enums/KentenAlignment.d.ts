/**
 * KentenAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __KentenAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface KentenAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<KentenAlignment>): boolean;

  /**
   * @internal **WARNING:** `__KentenAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__KentenAlignment]: never;
}


/**
 * Aligns kenten with the left of parent characters.
 */
interface KentenAlignment_ALIGN_KENTEN_LEFT extends KentenAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248554604;
}

/**
 * Aligns kenten with the center of parent charactrers. 
 */
interface KentenAlignment_ALIGN_KENTEN_CENTER extends KentenAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248554595;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for aligning kenten characters relative to the parent characters.
 */
export declare namespace KentenAlignment {
/**
 * Aligns kenten with the left of parent characters.
 */
type ALIGN_KENTEN_LEFT = KentenAlignment_ALIGN_KENTEN_LEFT;

/**
 * Aligns kenten with the center of parent charactrers. 
 */
type ALIGN_KENTEN_CENTER = KentenAlignment_ALIGN_KENTEN_CENTER;

}
/**
 * Options for aligning kenten characters relative to the parent characters.
 */
export declare const KentenAlignment: typeof Enumeration & {

  /**
   * Aligns kenten with the left of parent characters.
   */
  readonly ALIGN_KENTEN_LEFT: KentenAlignment_ALIGN_KENTEN_LEFT;
  /**
   * Aligns kenten with the left of parent characters.
   */
  readonly alignKentenLeft: KentenAlignment_ALIGN_KENTEN_LEFT;
  /**
   * Aligns kenten with the left of parent characters.
   */
  readonly alignkentenleft: KentenAlignment_ALIGN_KENTEN_LEFT;

  /**
   * Aligns kenten with the center of parent charactrers. 
   */
  readonly ALIGN_KENTEN_CENTER: KentenAlignment_ALIGN_KENTEN_CENTER;
  /**
   * Aligns kenten with the center of parent charactrers. 
   */
  readonly alignKentenCenter: KentenAlignment_ALIGN_KENTEN_CENTER;
  /**
   * Aligns kenten with the center of parent charactrers. 
   */
  readonly alignkentencenter: KentenAlignment_ALIGN_KENTEN_CENTER;

}
