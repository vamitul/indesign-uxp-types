/**
 * Justification.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Justification: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Justification extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Justification>): boolean;

  /**
   * @internal **WARNING:** `__Justification` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Justification]: never;
}


/**
 * Left aligns the text.
 */
interface Justification_LEFT_ALIGN extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Center aligns the text.
 */
interface Justification_CENTER_ALIGN extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}

/**
 * Right aligns the text.
 */
interface Justification_RIGHT_ALIGN extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}

/**
 * Justifies the text and left aligns the last line in the paragraph.
 */
interface Justification_LEFT_JUSTIFIED extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818915700;
}

/**
 * Justifies the text and right aligns the last line in the paragraph.
 */
interface Justification_RIGHT_JUSTIFIED extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919578996;
}

/**
 * Justifies the text and center aligns the last line in the paragraph.
 */
interface Justification_CENTER_JUSTIFIED extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667920756;
}

/**
 * Justifies the text, including the last line in the paragraph.
 */
interface Justification_FULLY_JUSTIFIED extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718971500;
}

/**
 * Aligns text to the binding spine of the page or spread.
 */
interface Justification_TO_BINDING_SIDE extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1630691955;
}

/**
 * Aligns text to the side opposite the binding spine of the page.
 */
interface Justification_AWAY_FROM_BINDING_SIDE extends Justification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1633772147;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Text alignment options.
 */
export declare namespace Justification {
/**
 * Left aligns the text.
 */
type LEFT_ALIGN = Justification_LEFT_ALIGN;

/**
 * Center aligns the text.
 */
type CENTER_ALIGN = Justification_CENTER_ALIGN;

/**
 * Right aligns the text.
 */
type RIGHT_ALIGN = Justification_RIGHT_ALIGN;

/**
 * Justifies the text and left aligns the last line in the paragraph.
 */
type LEFT_JUSTIFIED = Justification_LEFT_JUSTIFIED;

/**
 * Justifies the text and right aligns the last line in the paragraph.
 */
type RIGHT_JUSTIFIED = Justification_RIGHT_JUSTIFIED;

/**
 * Justifies the text and center aligns the last line in the paragraph.
 */
type CENTER_JUSTIFIED = Justification_CENTER_JUSTIFIED;

/**
 * Justifies the text, including the last line in the paragraph.
 */
type FULLY_JUSTIFIED = Justification_FULLY_JUSTIFIED;

/**
 * Aligns text to the binding spine of the page or spread.
 */
type TO_BINDING_SIDE = Justification_TO_BINDING_SIDE;

/**
 * Aligns text to the side opposite the binding spine of the page.
 */
type AWAY_FROM_BINDING_SIDE = Justification_AWAY_FROM_BINDING_SIDE;

}
/**
 * Text alignment options.
 */
export declare const Justification: typeof Enumeration & {

  /**
   * Left aligns the text.
   */
  readonly LEFT_ALIGN: Justification_LEFT_ALIGN;
  /**
   * Left aligns the text.
   */
  readonly leftAlign: Justification_LEFT_ALIGN;
  /**
   * Left aligns the text.
   */
  readonly leftalign: Justification_LEFT_ALIGN;

  /**
   * Center aligns the text.
   */
  readonly CENTER_ALIGN: Justification_CENTER_ALIGN;
  /**
   * Center aligns the text.
   */
  readonly centerAlign: Justification_CENTER_ALIGN;
  /**
   * Center aligns the text.
   */
  readonly centeralign: Justification_CENTER_ALIGN;

  /**
   * Right aligns the text.
   */
  readonly RIGHT_ALIGN: Justification_RIGHT_ALIGN;
  /**
   * Right aligns the text.
   */
  readonly rightAlign: Justification_RIGHT_ALIGN;
  /**
   * Right aligns the text.
   */
  readonly rightalign: Justification_RIGHT_ALIGN;

  /**
   * Justifies the text and left aligns the last line in the paragraph.
   */
  readonly LEFT_JUSTIFIED: Justification_LEFT_JUSTIFIED;
  /**
   * Justifies the text and left aligns the last line in the paragraph.
   */
  readonly leftJustified: Justification_LEFT_JUSTIFIED;
  /**
   * Justifies the text and left aligns the last line in the paragraph.
   */
  readonly leftjustified: Justification_LEFT_JUSTIFIED;

  /**
   * Justifies the text and right aligns the last line in the paragraph.
   */
  readonly RIGHT_JUSTIFIED: Justification_RIGHT_JUSTIFIED;
  /**
   * Justifies the text and right aligns the last line in the paragraph.
   */
  readonly rightJustified: Justification_RIGHT_JUSTIFIED;
  /**
   * Justifies the text and right aligns the last line in the paragraph.
   */
  readonly rightjustified: Justification_RIGHT_JUSTIFIED;

  /**
   * Justifies the text and center aligns the last line in the paragraph.
   */
  readonly CENTER_JUSTIFIED: Justification_CENTER_JUSTIFIED;
  /**
   * Justifies the text and center aligns the last line in the paragraph.
   */
  readonly centerJustified: Justification_CENTER_JUSTIFIED;
  /**
   * Justifies the text and center aligns the last line in the paragraph.
   */
  readonly centerjustified: Justification_CENTER_JUSTIFIED;

  /**
   * Justifies the text, including the last line in the paragraph.
   */
  readonly FULLY_JUSTIFIED: Justification_FULLY_JUSTIFIED;
  /**
   * Justifies the text, including the last line in the paragraph.
   */
  readonly fullyJustified: Justification_FULLY_JUSTIFIED;
  /**
   * Justifies the text, including the last line in the paragraph.
   */
  readonly fullyjustified: Justification_FULLY_JUSTIFIED;

  /**
   * Aligns text to the binding spine of the page or spread.
   */
  readonly TO_BINDING_SIDE: Justification_TO_BINDING_SIDE;
  /**
   * Aligns text to the binding spine of the page or spread.
   */
  readonly toBindingSide: Justification_TO_BINDING_SIDE;
  /**
   * Aligns text to the binding spine of the page or spread.
   */
  readonly tobindingside: Justification_TO_BINDING_SIDE;

  /**
   * Aligns text to the side opposite the binding spine of the page.
   */
  readonly AWAY_FROM_BINDING_SIDE: Justification_AWAY_FROM_BINDING_SIDE;
  /**
   * Aligns text to the side opposite the binding spine of the page.
   */
  readonly awayFromBindingSide: Justification_AWAY_FROM_BINDING_SIDE;
  /**
   * Aligns text to the side opposite the binding spine of the page.
   */
  readonly awayfrombindingside: Justification_AWAY_FROM_BINDING_SIDE;

}
