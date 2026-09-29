/**
 * StoryWindows.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { StoryWindow } from './StoryWindow';

/**
 * A collection of {@link StoryWindow} objects. Each story window represents
 * an open document window that specifically displays the story editor view
 * for a single story.
 *
 * @collection StoryWindow
 */
export interface StoryWindows
  extends BaseCollection<StoryWindow, StoryWindow, StoryWindow<'plural'>>, NamedCollection<StoryWindow> {
  /** The object's DOM class name. */
  readonly constructorName: 'StoryWindows';
}
