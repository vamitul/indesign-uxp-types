/**
 * GraphicLayerOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { GraphicLayers } from './GraphicLayers';
import type { Image } from './Image';
import type { ImportedPage } from './ImportedPage';
import type { PDF } from './PDF';
import type { UpdateLinkOptions } from './Enums/UpdateLinkOptions';

/**
 * Layer visibility and link-update settings for a placed multi-layered
 * graphic, such as a layered PDF or Photoshop file.
 */
export interface GraphicLayerOption<M extends Mode = 'single'> extends EventTargetDOMObject<Image | PDF | ImportedPage, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GraphicLayerOption';

  /** Resolves the proxy into the individual {@link GraphicLayerOption} objects it stands for. */
  getElements(): GraphicLayerOption<'single'>[];

  /** A collection of graphic layers. */
  readonly graphicLayers: GraphicLayers;

  /** Options for updating a graphic link after the visibility settings for the graphic layer have been modified in a different application. */
  get updateLinkOption(): Read<M, UpdateLinkOptions>;
  set updateLinkOption(value: UpdateLinkOptions);
}
