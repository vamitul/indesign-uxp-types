/**
 * FontTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FontTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FontTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FontTypes>): boolean;

  /**
   * @internal **WARNING:** `__FontTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FontTypes]: never;
}


/**
 * Type 1.
 */
interface FontTypes_TYPE_1 extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718899761;
}

/**
 * TrueType.
 */
interface FontTypes_TRUETYPE extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718899796;
}

/**
 * CID.
 */
interface FontTypes_CID extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718895433;
}

/**
 * ATC.
 */
interface FontTypes_ATC extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718894932;
}

/**
 * Bitmap.
 */
interface FontTypes_BITMAP extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718895209;
}

/**
 * OCF.
 */
interface FontTypes_OCF extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718898499;
}

/**
 * OpenType CFF.
 */
interface FontTypes_OPENTYPE_CFF extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718898502;
}

/**
 * OpenType CID.
 */
interface FontTypes_OPENTYPE_CID extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718898505;
}

/**
 * OpenType TT.
 */
interface FontTypes_OPENTYPE_TT extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718898516;
}

/**
 * The font type is unknown.
 */
interface FontTypes_UNKNOWN extends FontTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1433299822;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Font type options.
 */
export declare namespace FontTypes {
/**
 * Type 1.
 */
type TYPE_1 = FontTypes_TYPE_1;

/**
 * TrueType.
 */
type TRUETYPE = FontTypes_TRUETYPE;

/**
 * CID.
 */
type CID = FontTypes_CID;

/**
 * ATC.
 */
type ATC = FontTypes_ATC;

/**
 * Bitmap.
 */
type BITMAP = FontTypes_BITMAP;

/**
 * OCF.
 */
type OCF = FontTypes_OCF;

/**
 * OpenType CFF.
 */
type OPENTYPE_CFF = FontTypes_OPENTYPE_CFF;

/**
 * OpenType CID.
 */
type OPENTYPE_CID = FontTypes_OPENTYPE_CID;

/**
 * OpenType TT.
 */
type OPENTYPE_TT = FontTypes_OPENTYPE_TT;

/**
 * The font type is unknown.
 */
type UNKNOWN = FontTypes_UNKNOWN;

}
/**
 * Font type options.
 */
export declare const FontTypes: typeof Enumeration & {

  /**
   * Type 1.
   */
  readonly TYPE_1: FontTypes_TYPE_1;
  /**
   * Type 1.
   */
  readonly type1: FontTypes_TYPE_1;

  /**
   * TrueType.
   */
  readonly TRUETYPE: FontTypes_TRUETYPE;
  /**
   * TrueType.
   */
  readonly truetype: FontTypes_TRUETYPE;

  /**
   * CID.
   */
  readonly CID: FontTypes_CID;
  /**
   * CID.
   */
  readonly cid: FontTypes_CID;

  /**
   * ATC.
   */
  readonly ATC: FontTypes_ATC;
  /**
   * ATC.
   */
  readonly atc: FontTypes_ATC;

  /**
   * Bitmap.
   */
  readonly BITMAP: FontTypes_BITMAP;
  /**
   * Bitmap.
   */
  readonly bitmap: FontTypes_BITMAP;

  /**
   * OCF.
   */
  readonly OCF: FontTypes_OCF;
  /**
   * OCF.
   */
  readonly ocf: FontTypes_OCF;

  /**
   * OpenType CFF.
   */
  readonly OPENTYPE_CFF: FontTypes_OPENTYPE_CFF;
  /**
   * OpenType CFF.
   */
  readonly opentypeCff: FontTypes_OPENTYPE_CFF;
  /**
   * OpenType CFF.
   */
  readonly opentypecff: FontTypes_OPENTYPE_CFF;

  /**
   * OpenType CID.
   */
  readonly OPENTYPE_CID: FontTypes_OPENTYPE_CID;
  /**
   * OpenType CID.
   */
  readonly opentypeCid: FontTypes_OPENTYPE_CID;
  /**
   * OpenType CID.
   */
  readonly opentypecid: FontTypes_OPENTYPE_CID;

  /**
   * OpenType TT.
   */
  readonly OPENTYPE_TT: FontTypes_OPENTYPE_TT;
  /**
   * OpenType TT.
   */
  readonly opentypeTt: FontTypes_OPENTYPE_TT;
  /**
   * OpenType TT.
   */
  readonly opentypett: FontTypes_OPENTYPE_TT;

  /**
   * The font type is unknown.
   */
  readonly UNKNOWN: FontTypes_UNKNOWN;
  /**
   * The font type is unknown.
   */
  readonly unknown: FontTypes_UNKNOWN;

}
