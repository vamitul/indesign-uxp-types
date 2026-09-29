/**
 * Stories.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Story } from './Story';
import type { Document } from './Document';

/**
 * A collection of all {@link Story} objects in a {@link Document}.
 *
 * A story is the complete flow of text content across one or more linked text frames. Note
 * that stories are created implicitly when you create a new text frame, or by calling
 * `place()` on a frame. They do not have an independent `add()` method.
 * @collection Story
 */
export interface Stories
  extends BaseCollection<Story, Story, Story<'plural'>>, IdCollection<Story>, NamedCollection<Story> {
  /** The object's DOM class name. */
  readonly constructorName: 'Stories';
}
