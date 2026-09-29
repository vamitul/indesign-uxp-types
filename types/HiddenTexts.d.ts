/**
 * HiddenTexts.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { HiddenText } from './HiddenText';

/**
 * A collection of {@link HiddenText} objects. Hidden text represents text content
 * that is not currently visible or printable in the layout, used for conditional text.
 *
 * @collection HiddenText
 */
export interface HiddenTexts
  extends
    BaseCollection<HiddenText, HiddenText, HiddenText<'plural'>>,
    IdCollection<HiddenText>,
    NamedCollection<HiddenText> {
  /** The object's DOM class name. */
  readonly constructorName: 'HiddenTexts';
}
