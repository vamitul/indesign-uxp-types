/**
 * AcrobatCompatibility.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AcrobatCompatibility: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AcrobatCompatibility extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AcrobatCompatibility>): boolean;

  /**
   * @internal **WARNING:** `__AcrobatCompatibility` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AcrobatCompatibility]: never;
}


/**
 * Makes the file compatible with Acrobat 4.0 and later.
 */
interface AcrobatCompatibility_ACROBAT_4 extends AcrobatCompatibility {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097020464;
}

/**
 * Makes the file compatible with Acrobat 5.0 and later.
 */
interface AcrobatCompatibility_ACROBAT_5 extends AcrobatCompatibility {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097020720;
}

/**
 * Makes the file compatible with Acrobat 6.0 and later.
 */
interface AcrobatCompatibility_ACROBAT_6 extends AcrobatCompatibility {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097020976;
}

/**
 * Makes the file compatible with Acrobat 7.0 and later.
 */
interface AcrobatCompatibility_ACROBAT_7 extends AcrobatCompatibility {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097021232;
}

/**
 * Makes the file compatible with Acrobat 8.0 and later.
 */
interface AcrobatCompatibility_ACROBAT_8 extends AcrobatCompatibility {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097021488;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The exported PDF document's Acrobat compatibility.
 */
export declare namespace AcrobatCompatibility {
/**
 * Makes the file compatible with Acrobat 4.0 and later.
 */
type ACROBAT_4 = AcrobatCompatibility_ACROBAT_4;

/**
 * Makes the file compatible with Acrobat 5.0 and later.
 */
type ACROBAT_5 = AcrobatCompatibility_ACROBAT_5;

/**
 * Makes the file compatible with Acrobat 6.0 and later.
 */
type ACROBAT_6 = AcrobatCompatibility_ACROBAT_6;

/**
 * Makes the file compatible with Acrobat 7.0 or higher.
 */
type ACROBAT_7 = AcrobatCompatibility_ACROBAT_7;

/**
 * Acrobat 8.0 compatibility.
 */
type ACROBAT_8 = AcrobatCompatibility_ACROBAT_8;

}
/**
 * The exported PDF document's Acrobat compatibility.
 */
export declare const AcrobatCompatibility: typeof Enumeration & {

  /**
   * Makes the file compatible with Acrobat 4.0 and later.
   */
  readonly ACROBAT_4: AcrobatCompatibility_ACROBAT_4;
  /**
   * Makes the file compatible with Acrobat 4.0 and later.
   */
  readonly acrobat4: AcrobatCompatibility_ACROBAT_4;

  /**
   * Makes the file compatible with Acrobat 5.0 and later.
   */
  readonly ACROBAT_5: AcrobatCompatibility_ACROBAT_5;
  /**
   * Makes the file compatible with Acrobat 5.0 and later.
   */
  readonly acrobat5: AcrobatCompatibility_ACROBAT_5;

  /**
   * Makes the file compatible with Acrobat 6.0 and later.
   */
  readonly ACROBAT_6: AcrobatCompatibility_ACROBAT_6;
  /**
   * Makes the file compatible with Acrobat 6.0 and later.
   */
  readonly acrobat6: AcrobatCompatibility_ACROBAT_6;

  /**
   * Makes the file compatible with Acrobat 7.0 and later.
   */
  readonly ACROBAT_7: AcrobatCompatibility_ACROBAT_7;
  /**
   * Makes the file compatible with Acrobat 7.0 and later.
   */
  readonly acrobat7: AcrobatCompatibility_ACROBAT_7;

  /**
   * Makes the file compatible with Acrobat 8.0 and later.
   */
  readonly ACROBAT_8: AcrobatCompatibility_ACROBAT_8;
  /**
   * Makes the file compatible with Acrobat 8.0 and later.
   */
  readonly acrobat8: AcrobatCompatibility_ACROBAT_8;

}
