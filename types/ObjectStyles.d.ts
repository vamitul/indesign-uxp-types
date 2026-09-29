/**
 * ObjectStyles.d.ts — indesign-uxp-types
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
import type { ObjectStyle } from './ObjectStyle';

/**
 * A collection of {@link ObjectStyle} objects in an InDesign document or the application.
 * Object styles allow you to apply consistent formatting (strokes, fills,
 * effects, and text frame options) to page items.
 *
 * @collection ObjectStyle
 */
export interface ObjectStyles
  extends
    BaseCollection<ObjectStyle, ObjectStyle, ObjectStyle<'plural'>>,
    IdCollection<ObjectStyle>,
    NamedCollection<ObjectStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyles';

  /**
   * Creates a new object style.
   *
   * * **Duplicate Names:** If an object style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link ObjectStyle}.
   */
  add(withProperties?: PropertiesSetter<ObjectStyle>): ObjectStyle;
}
