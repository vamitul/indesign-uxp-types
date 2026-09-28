/**
 * TextBoxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  AddablePageItemCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { TextBox } from './TextBox';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link TextBox} page items. Text boxes are interactive form
 * elements that allow users to enter multi-line text into a PDF document.
 *
 * @collection TextBox
 */
export interface TextBoxes<TParent = PageItemParent>
  extends
    BaseCollection<TextBox<TParent>, TextBox, TextBox<TParent, 'plural'>>,
    IdCollection<TextBox<TParent>>,
    NamedCollection<TextBox<TParent>>,
    AddablePageItemCollection<TextBox<TParent>, TextBox> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextBoxes';
}
