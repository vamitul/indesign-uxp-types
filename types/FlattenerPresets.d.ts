/**
 * FlattenerPresets.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { FlattenerPreset } from './FlattenerPreset';

/**
 * A collection of transparency flattener presets available to the application.
 *
 * Flattener presets define how transparent objects are handled during output (printing or
 * exporting to formats like PDF 1.3), controlling the balance between rasterization and
 * vector preservation.
 * @collection FlattenerPreset
 */
export interface FlattenerPresets
  extends
    BaseCollection<FlattenerPreset, FlattenerPreset, FlattenerPreset<'plural'>>,
    IdCollection<FlattenerPreset>,
    NamedCollection<FlattenerPreset> {
  /** The object's DOM class name. */
  readonly constructorName: 'FlattenerPresets';

  /**
   * Creates a new transparency {@link FlattenerPreset}, controlling the balance
   * between rasterization and vector preservation during output.
   * @param withProperties Initial values for properties of the new {@link FlattenerPreset}.
   */
  add(withProperties?: PropertiesSetter<FlattenerPreset>): FlattenerPreset;
}
