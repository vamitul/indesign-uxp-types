/**
 * StoryWindow.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Window } from './Window';
import type { LayoutWindow } from './LayoutWindow';
import type { Document } from './Document';
import type { NothingEnum } from './Enums/NothingEnum';

/**
 * A story-editor {@link Window} showing a story's text in galley view,
 * independent of its page layout -- as opposed to a {@link LayoutWindow}'s
 * page-geometry view of the same {@link Document}.
 */
export interface StoryWindow<M extends Mode = 'single'> extends Window<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'StoryWindow';

  /** Resolves the proxy into the individual {@link StoryWindow} objects it stands for. */
  getElements(): StoryWindow<'single'>[];
}

// The event names StoryWindow carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the StoryWindow type.
export declare const StoryWindow: {
  /** Dispatched after the active selection changes. This event bubbles. This event is not cancelable. */
  readonly AFTER_SELECTION_CHANGED: 'afterSelectionChanged';
  /** Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable. */
  readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: 'afterSelectionAttributeChanged';
  /** Dispatched before the StoryWindow becomes inactive. This event bubbles. This event is not cancelable. */
  readonly BEFORE_DEACTIVATE: 'beforeDeactivate';
  /** Dispatched after the StoryWindow becomes active. This event bubbles. This event is not cancelable. */
  readonly AFTER_ACTIVATE: 'afterActivate';
  /** Dispatched when the value of a property changes on this StoryWindow. This event bubbles. This event is not cancelable. */
  readonly AFTER_ATTRIBUTE_CHANGED: 'afterAttributeChanged';
  /** Dispatched after a StoryWindow is opened. This event bubbles. This event is not cancelable. */
  readonly AFTER_OPEN: 'afterOpen';
  /** Dispatched before a StoryWindow is closed. This event bubbles. This event is cancelable. */
  readonly BEFORE_CLOSE: 'beforeClose';
  /** Dispatched when a StoryWindow is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable. */
  readonly AFTER_CLOSE: 'afterClose';
};
