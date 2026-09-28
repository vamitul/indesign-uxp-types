/**
 * OTFFigureStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __OTFFigureStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface OTFFigureStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<OTFFigureStyle>): boolean;

  /**
   * @internal **WARNING:** `__OTFFigureStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__OTFFigureStyle]: never;
}


/**
 * Use monospaced lining figures.
 */
interface OTFFigureStyle_TABULAR_LINING extends OTFFigureStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330931316;
}

/**
 * Use proportional width oldstyle figures.
 */
interface OTFFigureStyle_PROPORTIONAL_OLDSTYLE extends OTFFigureStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330933619;
}

/**
 * Use proportional width lining figures.
 */
interface OTFFigureStyle_PROPORTIONAL_LINING extends OTFFigureStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330932848;
}

/**
 * Use monospaced oldstyle figures.
 */
interface OTFFigureStyle_TABULAR_OLDSTYLE extends OTFFigureStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330933620;
}

/**
 * Use the default figure style for the font.
 */
interface OTFFigureStyle_DEFAULT_VALUE extends OTFFigureStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Figure style options for OpenType fonts.
 */
export declare namespace OTFFigureStyle {
/**
 * Use monospaced lining figures.
 */
type TABULAR_LINING = OTFFigureStyle_TABULAR_LINING;

/**
 * Use proportional width oldstyle figures.
 */
type PROPORTIONAL_OLDSTYLE = OTFFigureStyle_PROPORTIONAL_OLDSTYLE;

/**
 * Use proportional width lining figures.
 */
type PROPORTIONAL_LINING = OTFFigureStyle_PROPORTIONAL_LINING;

/**
 * Use monospaced oldstyle figures.
 */
type TABULAR_OLDSTYLE = OTFFigureStyle_TABULAR_OLDSTYLE;

/**
 * Use the default figure style for the font.
 */
type DEFAULT_VALUE = OTFFigureStyle_DEFAULT_VALUE;

}
/**
 * Figure style options for OpenType fonts.
 */
export declare const OTFFigureStyle: typeof Enumeration & {

  /**
   * Use monospaced lining figures.
   */
  readonly TABULAR_LINING: OTFFigureStyle_TABULAR_LINING;
  /**
   * Use monospaced lining figures.
   */
  readonly tabularLining: OTFFigureStyle_TABULAR_LINING;
  /**
   * Use monospaced lining figures.
   */
  readonly tabularlining: OTFFigureStyle_TABULAR_LINING;

  /**
   * Use proportional width oldstyle figures.
   */
  readonly PROPORTIONAL_OLDSTYLE: OTFFigureStyle_PROPORTIONAL_OLDSTYLE;
  /**
   * Use proportional width oldstyle figures.
   */
  readonly proportionalOldstyle: OTFFigureStyle_PROPORTIONAL_OLDSTYLE;
  /**
   * Use proportional width oldstyle figures.
   */
  readonly proportionaloldstyle: OTFFigureStyle_PROPORTIONAL_OLDSTYLE;

  /**
   * Use proportional width lining figures.
   */
  readonly PROPORTIONAL_LINING: OTFFigureStyle_PROPORTIONAL_LINING;
  /**
   * Use proportional width lining figures.
   */
  readonly proportionalLining: OTFFigureStyle_PROPORTIONAL_LINING;
  /**
   * Use proportional width lining figures.
   */
  readonly proportionallining: OTFFigureStyle_PROPORTIONAL_LINING;

  /**
   * Use monospaced oldstyle figures.
   */
  readonly TABULAR_OLDSTYLE: OTFFigureStyle_TABULAR_OLDSTYLE;
  /**
   * Use monospaced oldstyle figures.
   */
  readonly tabularOldstyle: OTFFigureStyle_TABULAR_OLDSTYLE;
  /**
   * Use monospaced oldstyle figures.
   */
  readonly tabularoldstyle: OTFFigureStyle_TABULAR_OLDSTYLE;

  /**
   * Use the default figure style for the font.
   */
  readonly DEFAULT_VALUE: OTFFigureStyle_DEFAULT_VALUE;
  /**
   * Use the default figure style for the font.
   */
  readonly defaultValue: OTFFigureStyle_DEFAULT_VALUE;
  /**
   * Use the default figure style for the font.
   */
  readonly defaultvalue: OTFFigureStyle_DEFAULT_VALUE;

}
