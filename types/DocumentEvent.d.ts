/**
 * DocumentEvent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
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
