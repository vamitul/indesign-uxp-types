/**
 * MotionPresets.d.ts — indesign-uxp-types
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
import type { MotionPreset } from './MotionPreset';

/**
 * A collection of {@link MotionPreset} objects. Motion presets define predefined
 * animation paths, easing, and duration settings that can be applied to page items
 * for interactive digital exports.
 *
 * @collection MotionPreset
 */
export interface MotionPresets
  extends
    BaseCollection<MotionPreset, MotionPreset, MotionPreset<'plural'>>,
    IdCollection<MotionPreset>,
    NamedCollection<MotionPreset> {
  /** The object's DOM class name. */
  readonly constructorName: 'MotionPresets';

  /**
   * Creates a new motion preset.
   * @param withProperties Initial values for properties of the new {@link MotionPreset}.
   */
  add(withProperties?: PropertiesSetter<MotionPreset>): MotionPreset;
}
