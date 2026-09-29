/**
 * Rectangles.d.ts — indesign-uxp-types
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
import type { Rectangle } from './Rectangle';
import type { PageItemParent } from './_base/Parents';
import type { Page } from './Page';
import type { Spread } from './Spread';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link Rectangle} page items.
 *
 * Rectangles are rectangular geometric frames that can be placed on a {@link Page}, {@link Spread}, or other container. They can serve as graphic frames, text frames (when
 * converted), or unassigned frames for layout placeholders.
 * @collection Rectangle
 */
export interface Rectangles<TParent = PageItemParent>
  extends
    BaseCollection<Rectangle<TParent>, Rectangle, Rectangle<TParent, 'plural'>>,
    IdCollection<Rectangle<TParent>>,
    NamedCollection<Rectangle<TParent>>,
    AddablePageItemCollection<Rectangle<TParent>, Rectangle> {
  /** The object's DOM class name. */
  readonly constructorName: 'Rectangles';
}
