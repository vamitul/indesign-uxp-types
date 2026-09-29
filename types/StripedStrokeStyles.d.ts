/**
 * StripedStrokeStyles.d.ts — indesign-uxp-types
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
import type { StripedStrokeStyle } from './StripedStrokeStyle';

/**
 * A collection of {@link StripedStrokeStyle} objects in an InDesign document or the application.
 * Striped stroke styles allow you to define custom patterns consisting of multiple parallel
 * lines (stripes) for object strokes.
 *
 * @collection StripedStrokeStyle
 */
export interface StripedStrokeStyles
  extends
    BaseCollection<StripedStrokeStyle, StripedStrokeStyle, StripedStrokeStyle<'plural'>>,
    IdCollection<StripedStrokeStyle>,
    NamedCollection<StripedStrokeStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'StripedStrokeStyles';

  /**
   * Creates a new striped stroke style.
   *
   * * **Duplicate Names:** If a stroke style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link StripedStrokeStyle}.
   */
  add(withProperties?: PropertiesSetter<StripedStrokeStyle>): StripedStrokeStyle;
}
