/**
 * GraphicLayers.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { GraphicLayer } from './GraphicLayer';

/**
 * A collection of {@link GraphicLayer} objects within a placed graphic (e.g.,
 * a Photoshop or Illustrator file). These layers allow programmatic control
 * over the visibility and blending of individual components within the placed graphic.
 *
 * @collection GraphicLayer
 */
export interface GraphicLayers
  extends
    BaseCollection<GraphicLayer, GraphicLayer, GraphicLayer<'plural'>>,
    IdCollection<GraphicLayer>,
    NamedCollection<GraphicLayer> {
  /** The object's DOM class name. */
  readonly constructorName: 'GraphicLayers';
}
