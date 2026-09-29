/**
 * InkTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __InkTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface InkTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<InkTypes>): boolean;

  /**
   * @internal **WARNING:** `__InkTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__InkTypes]: never;
}


/**
 * Uses traditional process inks and most spot inks.
 */
interface InkTypes_NORMAL extends InkTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852797549;
}

/**
 * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for metallic inks.
 */
interface InkTypes_OPAQUE extends InkTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1769230192;
}

/**
 * Uses clear inks to ensure that underlying items trap. Best for varnishes and dieline inks.
 */
interface InkTypes_TRANSPARENT extends InkTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1769231474;
}

/**
 * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for inks that have undesirable interactions with other inks.
 */
interface InkTypes_OPAQUE_IGNORE extends InkTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1769228647;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Ink trapping type options.
 */
export declare namespace InkTypes {
/**
 * Uses traditional process inks and most spot inks.
 */
type NORMAL = InkTypes_NORMAL;

/**
 * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for metallic inks.
 */
type OPAQUE = InkTypes_OPAQUE;

/**
 * Uses clear inks to ensure that underlying items trap. Best for varnishes and dieline inks.
 */
type TRANSPARENT = InkTypes_TRANSPARENT;

/**
 * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for inks that have undesirable interactions with other inks.
 */
type OPAQUE_IGNORE = InkTypes_OPAQUE_IGNORE;

}
/**
 * Ink trapping type options.
 */
export declare const InkTypes: typeof Enumeration & {

  /**
   * Uses traditional process inks and most spot inks.
   */
  readonly NORMAL: InkTypes_NORMAL;
  /**
   * Uses traditional process inks and most spot inks.
   */
  readonly normal: InkTypes_NORMAL;

  /**
   * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for metallic inks.
   */
  readonly OPAQUE: InkTypes_OPAQUE;
  /**
   * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for metallic inks.
   */
  readonly opaque: InkTypes_OPAQUE;

  /**
   * Uses clear inks to ensure that underlying items trap. Best for varnishes and dieline inks.
   */
  readonly TRANSPARENT: InkTypes_TRANSPARENT;
  /**
   * Uses clear inks to ensure that underlying items trap. Best for varnishes and dieline inks.
   */
  readonly transparent: InkTypes_TRANSPARENT;

  /**
   * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for inks that have undesirable interactions with other inks.
   */
  readonly OPAQUE_IGNORE: InkTypes_OPAQUE_IGNORE;
  /**
   * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for inks that have undesirable interactions with other inks.
   */
  readonly opaqueIgnore: InkTypes_OPAQUE_IGNORE;
  /**
   * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for inks that have undesirable interactions with other inks.
   */
  readonly opaqueignore: InkTypes_OPAQUE_IGNORE;

}
