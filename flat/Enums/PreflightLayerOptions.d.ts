/**
 * PreflightLayerOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PreflightLayerOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PreflightLayerOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PreflightLayerOptions>): boolean;

  /**
   * @internal **WARNING:** `__PreflightLayerOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PreflightLayerOptions]: never;
}


/**
 * Preflight all layers.
 */
interface PreflightLayerOptions_PREFLIGHT_ALL_LAYERS extends PreflightLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886142796;
}

/**
 * Preflight visible layers.
 */
interface PreflightLayerOptions_PREFLIGHT_VISIBLE_LAYERS extends PreflightLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886148172;
}

/**
 * Preflight visible and printable layers.
 */
interface PreflightLayerOptions_PREFLIGHT_VISIBLE_PRINTABLE_LAYERS extends PreflightLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886148176;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which layers preflight inspects.
 */
export declare namespace PreflightLayerOptions {
/**
 * Preflight all layers.
 */
type PREFLIGHT_ALL_LAYERS = PreflightLayerOptions_PREFLIGHT_ALL_LAYERS;

/**
 * Preflight visible layers.
 */
type PREFLIGHT_VISIBLE_LAYERS = PreflightLayerOptions_PREFLIGHT_VISIBLE_LAYERS;

/**
 * Preflight visible and printable layers.
 */
type PREFLIGHT_VISIBLE_PRINTABLE_LAYERS = PreflightLayerOptions_PREFLIGHT_VISIBLE_PRINTABLE_LAYERS;

}
/**
 * Which layers preflight inspects.
 */
export declare const PreflightLayerOptions: typeof Enumeration & {

  /**
   * Preflight all layers.
   */
  readonly PREFLIGHT_ALL_LAYERS: PreflightLayerOptions_PREFLIGHT_ALL_LAYERS;
  /**
   * Preflight all layers.
   */
  readonly preflightAllLayers: PreflightLayerOptions_PREFLIGHT_ALL_LAYERS;
  /**
   * Preflight all layers.
   */
  readonly preflightalllayers: PreflightLayerOptions_PREFLIGHT_ALL_LAYERS;

  /**
   * Preflight visible layers.
   */
  readonly PREFLIGHT_VISIBLE_LAYERS: PreflightLayerOptions_PREFLIGHT_VISIBLE_LAYERS;
  /**
   * Preflight visible layers.
   */
  readonly preflightVisibleLayers: PreflightLayerOptions_PREFLIGHT_VISIBLE_LAYERS;
  /**
   * Preflight visible layers.
   */
  readonly preflightvisiblelayers: PreflightLayerOptions_PREFLIGHT_VISIBLE_LAYERS;

  /**
   * Preflight visible and printable layers.
   */
  readonly PREFLIGHT_VISIBLE_PRINTABLE_LAYERS: PreflightLayerOptions_PREFLIGHT_VISIBLE_PRINTABLE_LAYERS;
  /**
   * Preflight visible and printable layers.
   */
  readonly preflightVisiblePrintableLayers: PreflightLayerOptions_PREFLIGHT_VISIBLE_PRINTABLE_LAYERS;
  /**
   * Preflight visible and printable layers.
   */
  readonly preflightvisibleprintablelayers: PreflightLayerOptions_PREFLIGHT_VISIBLE_PRINTABLE_LAYERS;

}
