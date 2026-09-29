/**
 * PrintLayerOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PrintLayerOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PrintLayerOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PrintLayerOptions>): boolean;

  /**
   * @internal **WARNING:** `__PrintLayerOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PrintLayerOptions]: never;
}


/**
 * Prints all layers.
 */
interface PrintLayerOptions_ALL_LAYERS extends PrintLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634495564;
}

/**
 * Prints all visible layers.
 */
interface PrintLayerOptions_VISIBLE_LAYERS extends PrintLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986622284;
}

/**
 * Prints only layers that are both visible and printable. 
 */
interface PrintLayerOptions_VISIBLE_PRINTABLE_LAYERS extends PrintLayerOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1987080780;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which layers are sent to the printer.
 */
export declare namespace PrintLayerOptions {
/**
 * Prints all layers.
 */
type ALL_LAYERS = PrintLayerOptions_ALL_LAYERS;

/**
 * Prints all visible layers.
 */
type VISIBLE_LAYERS = PrintLayerOptions_VISIBLE_LAYERS;

/**
 * Prints only layers that are both visible and printable. 
 */
type VISIBLE_PRINTABLE_LAYERS = PrintLayerOptions_VISIBLE_PRINTABLE_LAYERS;

}
/**
 * Which layers are sent to the printer.
 */
export declare const PrintLayerOptions: typeof Enumeration & {

  /**
   * Prints all layers.
   */
  readonly ALL_LAYERS: PrintLayerOptions_ALL_LAYERS;
  /**
   * Prints all layers.
   */
  readonly allLayers: PrintLayerOptions_ALL_LAYERS;
  /**
   * Prints all layers.
   */
  readonly alllayers: PrintLayerOptions_ALL_LAYERS;

  /**
   * Prints all visible layers.
   */
  readonly VISIBLE_LAYERS: PrintLayerOptions_VISIBLE_LAYERS;
  /**
   * Prints all visible layers.
   */
  readonly visibleLayers: PrintLayerOptions_VISIBLE_LAYERS;
  /**
   * Prints all visible layers.
   */
  readonly visiblelayers: PrintLayerOptions_VISIBLE_LAYERS;

  /**
   * Prints only layers that are both visible and printable. 
   */
  readonly VISIBLE_PRINTABLE_LAYERS: PrintLayerOptions_VISIBLE_PRINTABLE_LAYERS;
  /**
   * Prints only layers that are both visible and printable. 
   */
  readonly visiblePrintableLayers: PrintLayerOptions_VISIBLE_PRINTABLE_LAYERS;
  /**
   * Prints only layers that are both visible and printable. 
   */
  readonly visibleprintablelayers: PrintLayerOptions_VISIBLE_PRINTABLE_LAYERS;

}
