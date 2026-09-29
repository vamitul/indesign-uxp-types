/**
 * DynamicDocumentsTextExportPolicy.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DynamicDocumentsTextExportPolicy: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DynamicDocumentsTextExportPolicy extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DynamicDocumentsTextExportPolicy>): boolean;

  /**
   * @internal **WARNING:** `__DynamicDocumentsTextExportPolicy` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DynamicDocumentsTextExportPolicy]: never;
}


/**
 * Text is exported as live text.
 */
interface DynamicDocumentsTextExportPolicy_LIVE extends DynamicDocumentsTextExportPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952804972;
}

/**
 * Text is to be rasterized.
 */
interface DynamicDocumentsTextExportPolicy_RASTERIZE extends DynamicDocumentsTextExportPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952804978;
}

/**
 * Text is to be vectorized.
 */
interface DynamicDocumentsTextExportPolicy_VECTORIZE extends DynamicDocumentsTextExportPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952804982;
}

/**
 * Text is exported as Text Layout Framework text.
 */
interface DynamicDocumentsTextExportPolicy_TLF extends DynamicDocumentsTextExportPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952804980;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How text is exported in dynamic documents — as live text, rasterized, vectorized, or as Text
 * Layout Framework text.
 */
export declare namespace DynamicDocumentsTextExportPolicy {
/**
 * Text is exported as live text.
 */
type LIVE = DynamicDocumentsTextExportPolicy_LIVE;

/**
 * Text is to be rasterized.
 */
type RASTERIZE = DynamicDocumentsTextExportPolicy_RASTERIZE;

/**
 * Text is to be vectorized.
 */
type VECTORIZE = DynamicDocumentsTextExportPolicy_VECTORIZE;

/**
 * Text is exported as Text Layout Framework text.
 */
type TLF = DynamicDocumentsTextExportPolicy_TLF;

}
/**
 * How text is exported in dynamic documents — as live text, rasterized, vectorized, or as Text
 * Layout Framework text.
 */
export declare const DynamicDocumentsTextExportPolicy: typeof Enumeration & {

  /**
   * Text is exported as live text.
   */
  readonly LIVE: DynamicDocumentsTextExportPolicy_LIVE;
  /**
   * Text is exported as live text.
   */
  readonly live: DynamicDocumentsTextExportPolicy_LIVE;

  /**
   * Text is to be rasterized.
   */
  readonly RASTERIZE: DynamicDocumentsTextExportPolicy_RASTERIZE;
  /**
   * Text is to be rasterized.
   */
  readonly rasterize: DynamicDocumentsTextExportPolicy_RASTERIZE;

  /**
   * Text is to be vectorized.
   */
  readonly VECTORIZE: DynamicDocumentsTextExportPolicy_VECTORIZE;
  /**
   * Text is to be vectorized.
   */
  readonly vectorize: DynamicDocumentsTextExportPolicy_VECTORIZE;

  /**
   * Text is exported as Text Layout Framework text.
   */
  readonly TLF: DynamicDocumentsTextExportPolicy_TLF;
  /**
   * Text is exported as Text Layout Framework text.
   */
  readonly tlf: DynamicDocumentsTextExportPolicy_TLF;

}
