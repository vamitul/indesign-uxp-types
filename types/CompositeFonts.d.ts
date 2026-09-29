/**
 * CompositeFonts.d.ts — indesign-uxp-types
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
import type { CompositeFont } from './CompositeFont';

/**
 * A collection of {@link CompositeFont} objects. Composite fonts allow you to
 * combine characters from multiple fonts (e.g., using a specific font for Kanji
 * and another for Roman characters) into a single logical font.
 *
 * @collection CompositeFont
 */
export interface CompositeFonts
  extends
    BaseCollection<CompositeFont, CompositeFont, CompositeFont<'plural'>>,
    IdCollection<CompositeFont>,
    NamedCollection<CompositeFont> {
  /** The object's DOM class name. */
  readonly constructorName: 'CompositeFonts';

  /**
   * Creates a new composite font.
   *
   * * **Duplicate Names:** If a composite font with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param withProperties Initial values for properties of the new CompositeFont.
   */
  add(withProperties?: PropertiesSetter<CompositeFont>): CompositeFont;
}
