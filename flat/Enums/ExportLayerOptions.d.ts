/**
 * ExportLayerOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ExportLayerOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ExportLayerOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ExportLayerOptions>): boolean;

  /**
   * @internal **WARNING:** `__ExportLayerOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ExportLayerOptions]: never;
}


/**
 * Exports all layers.
 */
interface ExportLayerOptions_EXPORT_ALL_LAYERS extends ExportLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702388076;
}

/**
 * Exports visible layers only.
 */
interface ExportLayerOptions_EXPORT_VISIBLE_LAYERS extends ExportLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702393452;
}

/**
 * Exports layers that are both visible and printable.
 */
interface ExportLayerOptions_EXPORT_VISIBLE_PRINTABLE_LAYERS extends ExportLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702260844;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which layers to include when exporting — all layers, only visible layers, or only visible and
 * printable layers.
 */
export declare namespace ExportLayerOptions {
/**
 * Export all layers
 */
type EXPORT_ALL_LAYERS = ExportLayerOptions_EXPORT_ALL_LAYERS;

/**
 * Export visible layers
 */
type EXPORT_VISIBLE_LAYERS = ExportLayerOptions_EXPORT_VISIBLE_LAYERS;

/**
 * Export visible and printable layers
 */
type EXPORT_VISIBLE_PRINTABLE_LAYERS = ExportLayerOptions_EXPORT_VISIBLE_PRINTABLE_LAYERS;

}
/**
 * Which layers to include when exporting — all layers, only visible layers, or only visible and
 * printable layers.
 */
export declare const ExportLayerOptions: typeof Enumeration & {

  /**
   * Exports all layers.
   */
  readonly EXPORT_ALL_LAYERS: ExportLayerOptions_EXPORT_ALL_LAYERS;
  /**
   * Exports all layers.
   */
  readonly exportAllLayers: ExportLayerOptions_EXPORT_ALL_LAYERS;
  /**
   * Exports all layers.
   */
  readonly exportalllayers: ExportLayerOptions_EXPORT_ALL_LAYERS;

  /**
   * Exports visible layers only.
   */
  readonly EXPORT_VISIBLE_LAYERS: ExportLayerOptions_EXPORT_VISIBLE_LAYERS;
  /**
   * Exports visible layers only.
   */
  readonly exportVisibleLayers: ExportLayerOptions_EXPORT_VISIBLE_LAYERS;
  /**
   * Exports visible layers only.
   */
  readonly exportvisiblelayers: ExportLayerOptions_EXPORT_VISIBLE_LAYERS;

  /**
   * Exports layers that are both visible and printable.
   */
  readonly EXPORT_VISIBLE_PRINTABLE_LAYERS: ExportLayerOptions_EXPORT_VISIBLE_PRINTABLE_LAYERS;
  /**
   * Exports layers that are both visible and printable.
   */
  readonly exportVisiblePrintableLayers: ExportLayerOptions_EXPORT_VISIBLE_PRINTABLE_LAYERS;
  /**
   * Exports layers that are both visible and printable.
   */
  readonly exportvisibleprintablelayers: ExportLayerOptions_EXPORT_VISIBLE_PRINTABLE_LAYERS;

}
