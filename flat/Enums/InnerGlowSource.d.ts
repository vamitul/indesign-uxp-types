/**
 * InnerGlowSource.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __InnerGlowSource: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface InnerGlowSource extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<InnerGlowSource>): boolean;

  /**
   * @internal **WARNING:** `__InnerGlowSource` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__InnerGlowSource]: never;
}


/**
 * The glow radiates from the object's center.
 */
interface InnerGlowSource_CENTER_SOURCED extends InnerGlowSource {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020618593;
}

/**
 * The glow radiates from the edge of the object.
 */
interface InnerGlowSource_EDGE_SOURCED extends InnerGlowSource {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020618594;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Inner glow source options.
 */
export declare namespace InnerGlowSource {
/**
 * The glow radiates from the object's center.
 */
type CENTER_SOURCED = InnerGlowSource_CENTER_SOURCED;

/**
 * The glow radiates from the edge of the object.
 */
type EDGE_SOURCED = InnerGlowSource_EDGE_SOURCED;

}
/**
 * Inner glow source options.
 */
export declare const InnerGlowSource: typeof Enumeration & {

  /**
   * The glow radiates from the object's center.
   */
  readonly CENTER_SOURCED: InnerGlowSource_CENTER_SOURCED;
  /**
   * The glow radiates from the object's center.
   */
  readonly centerSourced: InnerGlowSource_CENTER_SOURCED;
  /**
   * The glow radiates from the object's center.
   */
  readonly centersourced: InnerGlowSource_CENTER_SOURCED;

  /**
   * The glow radiates from the edge of the object.
   */
  readonly EDGE_SOURCED: InnerGlowSource_EDGE_SOURCED;
  /**
   * The glow radiates from the edge of the object.
   */
  readonly edgeSourced: InnerGlowSource_EDGE_SOURCED;
  /**
   * The glow radiates from the edge of the object.
   */
  readonly edgesourced: InnerGlowSource_EDGE_SOURCED;

}
