/**
 * DottedStrokeStyles.d.ts — indesign-uxp-types
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
import type { DottedStrokeStyle } from './DottedStrokeStyle';

/**
 * A collection of {@link DottedStrokeStyle} objects in an InDesign document or
 * the application. Dotted stroke styles allow you to define custom patterns
 * of dots for object strokes.
 *
 * @collection DottedStrokeStyle
 */
export interface DottedStrokeStyles
  extends
    BaseCollection<DottedStrokeStyle, DottedStrokeStyle, DottedStrokeStyle<'plural'>>,
    IdCollection<DottedStrokeStyle>,
    NamedCollection<DottedStrokeStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'DottedStrokeStyles';

  /**
   * Creates a new dotted stroke style.
   *
   * * **Duplicate Names:** If a stroke style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param withProperties Initial values for properties of the new DottedStrokeStyle.
   */
  add(withProperties?: PropertiesSetter<DottedStrokeStyle>): DottedStrokeStyle;
}
