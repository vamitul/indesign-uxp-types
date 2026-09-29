/**
 * Windows.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { Window } from './Window';
import type {LayoutWindow} from './LayoutWindow';
import type {StoryWindow} from './StoryWindow';
import type { Document } from './Document';
import type { Story } from './Story';

/**
 * A collection of {@link Window} objects representing the open layout and story windows
 * in the InDesign application.
 *
 * @collection Window
 */
export interface Windows
  extends BaseCollection<Window, Window, Window<'plural'>>, NamedCollection<Window> {
  /** The object's DOM class name. */
  readonly constructorName: 'Windows';

  /**
   * Creates a new window. Adding it to a {@link Document} creates a {@link LayoutWindow};
   * adding it to a {@link Story} creates a {@link StoryWindow}.
   * @param withProperties Initial values for properties of the new window.
   */
  add(withProperties?: PropertiesSetter<Window>): Window|LayoutWindow|StoryWindow;
}
