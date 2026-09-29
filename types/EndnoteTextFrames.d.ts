/**
 * EndnoteTextFrames.d.ts — indesign-uxp-types
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
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link EndnoteTextFrame} page items. These special text frames
 * are automatically managed by InDesign to contain the text ranges for a story's endnotes.
 *
 * @collection EndnoteTextFrame
 */
export interface EndnoteTextFrames<TParent = PageItemParent>
  extends
    BaseCollection<EndnoteTextFrame<TParent>, EndnoteTextFrame, EndnoteTextFrame<TParent, 'plural'>>,
    IdCollection<EndnoteTextFrame<TParent>>,
    NamedCollection<EndnoteTextFrame<TParent>>,
    AddablePageItemCollection<EndnoteTextFrame<TParent>, EndnoteTextFrame> {
  /** The object's DOM class name. */
  readonly constructorName: 'EndnoteTextFrames';
}
