/**
 * TrapPresets.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { TrapPreset } from './TrapPreset';

/**
 * A collection of {@link TrapPreset} objects. Trap presets encapsulate complex
 * trapping settings used to compensate for potential misregistration during
 * high-end commercial printing.
 *
 * @collection TrapPreset
 */
export interface TrapPresets
  extends
    BaseCollection<TrapPreset, TrapPreset, TrapPreset<'plural'>>,
    IdCollection<TrapPreset>,
    NamedCollection<TrapPreset> {
  /** The object's DOM class name. */
  readonly constructorName: 'TrapPresets';

  /**
   * Creates a new trap preset.
   *
   * * **Duplicate Names:** If a trap preset with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link TrapPreset}.
   */
  add(withProperties?: PropertiesSetter<TrapPreset>): TrapPreset;
}
