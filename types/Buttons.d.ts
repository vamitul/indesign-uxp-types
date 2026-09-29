/**
 * Buttons.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  AddablePageItemCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Button } from './Button';
import type { PageItemParent } from './_base/Parents';
import type { State } from './State';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link Button} objects.
 *
 * Buttons are interactive page items that can trigger actions such as navigation, form
 * submission, or media playback. They are defined by one or more {@link State} objects
 * representing different appearance modes.
 * @collection Button
 */
export interface Buttons<TParent = PageItemParent>
  extends
    BaseCollection<Button<TParent>, Button, Button<TParent, 'plural'>>,
    IdCollection<Button<TParent>>,
    NamedCollection<Button<TParent>>,
    AddablePageItemCollection<Button<TParent>, Button> {
  /** The object's DOM class name. */
  readonly constructorName: 'Buttons';
}
