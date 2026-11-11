/**
 * DocumentEvent.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Event } from './Event';
import type { DocumentOrApplication } from './_base/Parents';
import type { File } from './_base/Types';
import type { UserInteractionLevels } from './Enums/UserInteractionLevels';
import type { Document } from './Document';
import type { LayoutWindow } from './LayoutWindow';

/**
 * An event dispatched during a document lifecycle transition — creation,
 * opening, saving, reverting, or closing.
 */
export interface DocumentEvent<M extends Mode = 'single'> extends Event<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'DocumentEvent';

  /** Resolves the proxy into the individual {@link DocumentEvent} objects it stands for. */
  getElements(): DocumentEvent<'single'>[];

  readonly parent: Read<M, DocumentOrApplication>;

  /** The full path to the document, including its name. */
  readonly fullName: Read<M, Promise<File>>;

  /** Controls the display of dialogs and alerts while this event's handler runs. */
  get userInteractionLevel(): Read<M, UserInteractionLevels>;
  set userInteractionLevel(value: UserInteractionLevels);
}

// The event names DocumentEvent carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the DocumentEvent type.
export declare const DocumentEvent: {
  /** Dispatched before a Document is created. This event bubbles. This event is cancelable. */
  readonly BEFORE_NEW: 'beforeNew';
  /** Dispatched after a Document is created. This event bubbles. This event is not cancelable. */
  readonly AFTER_NEW: 'afterNew';
  /** Dispatched before a Document is opened. This event bubbles. This event is cancelable. */
  readonly BEFORE_OPEN: 'beforeOpen';
  /** Dispatched after a Document is opened. This event bubbles. This event is not cancelable. */
  readonly AFTER_OPEN: 'afterOpen';
  /** Dispatched before a Document is saved. This event bubbles. This event is cancelable. */
  readonly BEFORE_SAVE: 'beforeSave';
  /** Dispatched after a Document is saved. This event bubbles. This event is not cancelable. */
  readonly AFTER_SAVE: 'afterSave';
  /** Dispatched before a Document is saved under a new name. This event bubbles. This event is cancelable. */
  readonly BEFORE_SAVE_AS: 'beforeSaveAs';
  /** Dispatched after a Document is saved under a new name. This event bubbles. This event is not cancelable. */
  readonly AFTER_SAVE_AS: 'afterSaveAs';
  /** Dispatched before a copy of a Document is saved. This event bubbles. This event is cancelable. */
  readonly BEFORE_SAVE_A_COPY: 'beforeSaveACopy';
  /** Dispatched after a copy of a Document is saved. This event bubbles. This event is not cancelable. */
  readonly AFTER_SAVE_A_COPY: 'afterSaveACopy';
  /** Dispatched before a Document is reverted. This event bubbles. This event is cancelable. */
  readonly BEFORE_REVERT: 'beforeRevert';
  /** Dispatched after a Document is reverted. This event bubbles. This event is not cancelable. */
  readonly AFTER_REVERT: 'afterRevert';
  /** Dispatched before a Document is closed. This event bubbles. This event is not cancelable. */
  readonly BEFORE_CLOSE: 'beforeClose';
  /** Dispatched after a Document is closed. This event bubbles. This event is not cancelable. */
  readonly AFTER_CLOSE: 'afterClose';
};
