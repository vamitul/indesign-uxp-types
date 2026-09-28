/**
 * Dialogs.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link Dialog} objects. Dialogs are custom modal windows
 * created via scripting to gather user input or display information.
 *
 * @collection Dialog
 */
export interface Dialogs
  extends
    BaseCollection<Dialog, Dialog, Dialog<'plural'>>,
    IdCollection<Dialog>,
    NamedCollection<Dialog> {
  /** The object's DOM class name. */
  readonly constructorName: 'Dialogs';

  /**
   * Creates a new dialog.
   * @param withProperties Initial values for properties of the new {@link Dialog}.
   */
  add(withProperties?: PropertiesSetter<Dialog>): Dialog;
}
