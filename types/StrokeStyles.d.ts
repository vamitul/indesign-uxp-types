/**
 * StrokeStyles.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { StrokeStyle } from './StrokeStyle';

/**
 * A collection of {@link StrokeStyle} objects in an InDesign document or the
 * application. This collection provides access to all available stroke patterns,
 * including dashes, dots, and stripes.
 *
 * @collection StrokeStyle
 */
export interface StrokeStyles
  extends
    BaseCollection<StrokeStyle, StrokeStyle, StrokeStyle<'plural'>>,
    IdCollection<StrokeStyle>,
    NamedCollection<StrokeStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'StrokeStyles';
}
