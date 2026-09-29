/**
 * TextFrames.d.ts — indesign-uxp-types
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
import type { TextFrame } from './TextFrame';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link TextFrame} page items. Text frames are containers for text
 * on a page or spread, supporting multiple columns, threading with other frames,
 * and automated text flow.
 *
 * @collection TextFrame
 */
export interface TextFrames<TParent = PageItemParent>
  extends
    BaseCollection<TextFrame<TParent>, TextFrame, TextFrame<TParent, 'plural'>>,
    IdCollection<TextFrame<TParent>>,
    NamedCollection<TextFrame<TParent>>,
    AddablePageItemCollection<TextFrame<TParent>, TextFrame> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextFrames';
}
