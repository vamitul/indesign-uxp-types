/**
 * DiacriticPositionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DiacriticPositionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DiacriticPositionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DiacriticPositionOptions>): boolean;

  /**
   * @internal **WARNING:** `__DiacriticPositionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DiacriticPositionOptions]: never;
}


/**
 * Uses the default diacritic position.
 */
interface DiacriticPositionOptions_DEFAULT_POSITION extends DiacriticPositionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685090150;
}

/**
 * Loose diacritic position.
 */
interface DiacriticPositionOptions_LOOSE_POSITION extends DiacriticPositionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685089391;
}

/**
 * Medium diacritic position.
 */
interface DiacriticPositionOptions_MEDIUM_POSITION extends DiacriticPositionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685089637;
}

/**
 * Tight diacritic position.
 */
interface DiacriticPositionOptions_TIGHT_POSITION extends DiacriticPositionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685091433;
}

/**
 * Uses the position defined by the OpenType font.
 */
interface DiacriticPositionOptions_OPENTYPE_POSITION extends DiacriticPositionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685090164;
}

/**
 * Uses the OpenType font's position, measured from the baseline.
 */
interface DiacriticPositionOptions_OPENTYPE_POSITION_FROM_BASELINE extends DiacriticPositionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685090146;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The vertical position of diacritical marks relative to the base character.
 */
export declare namespace DiacriticPositionOptions {
/**
 * Uses the default diacritic position.
 */
type DEFAULT_POSITION = DiacriticPositionOptions_DEFAULT_POSITION;

/**
 * Loose diacritic position.
 */
type LOOSE_POSITION = DiacriticPositionOptions_LOOSE_POSITION;

/**
 * Medium diacritic position.
 */
type MEDIUM_POSITION = DiacriticPositionOptions_MEDIUM_POSITION;

/**
 * Tight diacritic position.
 */
type TIGHT_POSITION = DiacriticPositionOptions_TIGHT_POSITION;

/**
 * Uses the position defined by the OpenType font.
 */
type OPENTYPE_POSITION = DiacriticPositionOptions_OPENTYPE_POSITION;

/**
 * Uses the OpenType font's position, measured from the baseline.
 */
type OPENTYPE_POSITION_FROM_BASELINE = DiacriticPositionOptions_OPENTYPE_POSITION_FROM_BASELINE;

}
/**
 * The vertical position of diacritical marks relative to the base character.
 */
export declare const DiacriticPositionOptions: typeof Enumeration & {

  /**
   * Uses the default diacritic position.
   */
  readonly DEFAULT_POSITION: DiacriticPositionOptions_DEFAULT_POSITION;
  /**
   * Uses the default diacritic position.
   */
  readonly defaultPosition: DiacriticPositionOptions_DEFAULT_POSITION;
  /**
   * Uses the default diacritic position.
   */
  readonly defaultposition: DiacriticPositionOptions_DEFAULT_POSITION;

  /**
   * Loose diacritic position.
   */
  readonly LOOSE_POSITION: DiacriticPositionOptions_LOOSE_POSITION;
  /**
   * Loose diacritic position.
   */
  readonly loosePosition: DiacriticPositionOptions_LOOSE_POSITION;
  /**
   * Loose diacritic position.
   */
  readonly looseposition: DiacriticPositionOptions_LOOSE_POSITION;

  /**
   * Medium diacritic position.
   */
  readonly MEDIUM_POSITION: DiacriticPositionOptions_MEDIUM_POSITION;
  /**
   * Medium diacritic position.
   */
  readonly mediumPosition: DiacriticPositionOptions_MEDIUM_POSITION;
  /**
   * Medium diacritic position.
   */
  readonly mediumposition: DiacriticPositionOptions_MEDIUM_POSITION;

  /**
   * Tight diacritic position.
   */
  readonly TIGHT_POSITION: DiacriticPositionOptions_TIGHT_POSITION;
  /**
   * Tight diacritic position.
   */
  readonly tightPosition: DiacriticPositionOptions_TIGHT_POSITION;
  /**
   * Tight diacritic position.
   */
  readonly tightposition: DiacriticPositionOptions_TIGHT_POSITION;

  /**
   * Uses the position defined by the OpenType font.
   */
  readonly OPENTYPE_POSITION: DiacriticPositionOptions_OPENTYPE_POSITION;
  /**
   * Uses the position defined by the OpenType font.
   */
  readonly opentypePosition: DiacriticPositionOptions_OPENTYPE_POSITION;
  /**
   * Uses the position defined by the OpenType font.
   */
  readonly opentypeposition: DiacriticPositionOptions_OPENTYPE_POSITION;

  /**
   * Uses the OpenType font's position, measured from the baseline.
   */
  readonly OPENTYPE_POSITION_FROM_BASELINE: DiacriticPositionOptions_OPENTYPE_POSITION_FROM_BASELINE;
  /**
   * Uses the OpenType font's position, measured from the baseline.
   */
  readonly opentypePositionFromBaseline: DiacriticPositionOptions_OPENTYPE_POSITION_FROM_BASELINE;
  /**
   * Uses the OpenType font's position, measured from the baseline.
   */
  readonly opentypepositionfrombaseline: DiacriticPositionOptions_OPENTYPE_POSITION_FROM_BASELINE;

}
