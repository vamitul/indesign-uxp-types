/**
 * GraphicLayer.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { GraphicLayerParent } from './_base/Parents';
import type { GraphicLayers } from './GraphicLayers';

/**
 * A single layer of an imported layered graphic (PSD, AI, PDF).
 */
export interface GraphicLayer<M extends Mode = 'single'>
  extends EventTargetDOMObject<GraphicLayerParent, M>,
    IndexedDOMObject<GraphicLayerParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GraphicLayer';

  /** Resolves the proxy into the individual {@link GraphicLayer} objects it stands for. */
  getElements(): GraphicLayer<'single'>[];

  /** The unique ID of the GraphicLayer. */
  readonly id: Read<M, number>;

  /** The name of the GraphicLayer. */
  readonly name: Read<M, string>;

  /** The layer's visibility as stored in the original source file. */
  readonly originalVisibility: Read<M, boolean>;

  /** If `true`, this layer is a color-separator layer. */
  readonly separatorLayer: Read<M, boolean>;

  /** If `true`, this layer is an adjustment layer. */
  readonly adjustmentLayer: Read<M, boolean>;

  /** If `true`, this layer is an effects (FX) layer. */
  readonly fxLayer: Read<M, boolean>;

  /** If `true`, this layer is locked in the source file. */
  readonly locked: Read<M, boolean>;

  /** If `true`, this layer is a section-divider layer. */
  readonly sectionDividerLayer: Read<M, boolean>;

  /** If `true`, the source file defines a screen (view) visibility state for this layer. */
  readonly hasViewState: Read<M, boolean>;

  /** The layer's screen (view) visibility, when {@link hasViewState} is `true`. */
  readonly viewState: Read<M, boolean>;

  /** If `true`, the source file defines an export visibility state for this layer. */
  readonly hasExportState: Read<M, boolean>;

  /** The layer's export visibility, when {@link hasExportState} is `true`. */
  readonly exportState: Read<M, boolean>;

  /** If `true`, the source file defines a print visibility state for this layer. */
  readonly hasPrintState: Read<M, boolean>;

  /** The layer's print visibility, when {@link hasPrintState} is `true`. */
  readonly printState: Read<M, boolean>;

  /** Nested sub-layers, for layer groups. */
  readonly graphicLayers: GraphicLayers;

  /** The layer's current, script-controllable visibility in the placed graphic. */
  get currentVisibility(): Read<M, boolean>;
  set currentVisibility(value: boolean);
}
