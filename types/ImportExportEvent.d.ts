/**
 * ImportExportEvent.d.ts — indesign-uxp-types
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
 * An event dispatched before or after a file is imported into, or exported from, a document.
 */
export interface ImportExportEvent<M extends Mode = 'single'> extends Event<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'ImportExportEvent';

  /** Resolves the proxy into the individual {@link ImportExportEvent} objects it stands for. */
  getElements(): ImportExportEvent<'single'>[];

  readonly parent: Read<M, DocumentOrApplication>;

  /** The full path to the imported or exported file, including its name. */
  readonly fullName: Read<M, Promise<File>>;

  /** The import/export file format. */
  readonly format: Read<M, string>;

  /** Controls the display of dialogs and alerts while this event's handler runs. */
  get userInteractionLevel(): Read<M, UserInteractionLevels>;
  set userInteractionLevel(value: UserInteractionLevels);
}

// The event names ImportExportEvent carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the ImportExportEvent type.
export declare const ImportExportEvent: {
  /** Dispatched before a ImportExportEvent is exported. This event bubbles. This event is cancelable. */
  readonly BEFORE_EXPORT: 'beforeExport';
  /** Dispatched after a ImportExportEvent is exported. This event bubbles. This event is not cancelable. */
  readonly AFTER_EXPORT: 'afterExport';
  /** Dispatched before importing a file into a ImportExportEvent. This event bubbles. This event is cancelable. */
  readonly BEFORE_IMPORT: 'beforeImport';
  /** Dispatched after importing a file into a ImportExportEvent. This event bubbles. This event is not cancelable. */
  readonly AFTER_IMPORT: 'afterImport';
  /** Dispatched after a ImportExportEvent export is canceled or fails. This event bubbles. This event is not cancelable. */
  readonly FAILED_EXPORT: 'failedExport';
};
