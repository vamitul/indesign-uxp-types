/**
 * DashedStrokeStyles.d.ts — indesign-uxp-types
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
import type { DashedStrokeStyle } from './DashedStrokeStyle';

/**
 * A collection of {@link DashedStrokeStyle} objects in an InDesign document or
 * the application. Dashed stroke styles allow you to define custom patterns
 * of dashes and gaps for object strokes.
 *
 * @collection DashedStrokeStyle
 */
export interface DashedStrokeStyles
  extends
    BaseCollection<DashedStrokeStyle, DashedStrokeStyle, DashedStrokeStyle<'plural'>>,
    IdCollection<DashedStrokeStyle>,
    NamedCollection<DashedStrokeStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'DashedStrokeStyles';

  /**
   * Creates a new dashed stroke style.
   *
   * * **Duplicate Names:** If a stroke style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param withProperties Initial values for properties of the new DashedStrokeStyle.
   */
  add(withProperties?: PropertiesSetter<DashedStrokeStyle>): DashedStrokeStyle;
}
