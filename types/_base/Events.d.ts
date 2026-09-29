/**
 * Events.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Event } from '../Event';
import type { DocumentEvent } from '../DocumentEvent';
import type { ImportExportEvent } from '../ImportExportEvent';
import type { PrintEvent } from '../PrintEvent';
import type { IdleEvent } from '../IdleEvent';
import type { MutationEvent } from '../MutationEvent';
import type { Document } from '../Document';
import type { IdleTask } from '../IdleTask';
import type { LayoutWindow } from '../LayoutWindow';
import type { ScriptMenuAction } from '../ScriptMenuAction';

/**
 * Which event object each event name delivers.
 *
 * Document lifecycle events — opening, saving, reverting, closing — deliver a
 * {@link DocumentEvent}; importing and exporting deliver an
 * {@link ImportExportEvent}; printing a {@link PrintEvent}; `onIdle` an
 * {@link IdleEvent}; `afterAttributeChanged` a {@link MutationEvent}. Every
 * other event delivers a plain {@link Event}.
 */
export interface InDesignEventMap {
  // --- document lifecycle -> DocumentEvent
  /** A document is about to be created. Cancellable with {@link Event.preventDefault}. */
  beforeNew: DocumentEvent;
  /** A document has been created and is ready to work on. */
  afterNew: DocumentEvent;
  /** A document is about to be opened. Cancellable; the file itself is not read yet. */
  beforeOpen: DocumentEvent;
  /** A document has finished opening. */
  afterOpen: DocumentEvent;
  /** A document is about to close. Cancellable — the usual hook for "are you sure?". */
  beforeClose: DocumentEvent;
  /** A document has closed. Its object is no longer valid, so read what you need before this. */
  afterClose: DocumentEvent;
  /**
   * A document is about to be saved to its existing file. Cancellable.
   *
   * `target` is the {@link Document}, and `fullName` is the file being written.
   */
  beforeSave: DocumentEvent;
  /**
   * A document has been saved to its existing file.
   *
   * `target` is the {@link Document}, and `fullName` is the file that was written.
   */
  afterSave: DocumentEvent;
  /**
   * A document is about to be saved under a new name. Cancellable.
   *
   * `target` is the {@link Document}.
   */
  beforeSaveAs: DocumentEvent;
  /**
   * A document has been saved under a new name, and now points at the new file.
   *
   * `target` is the {@link Document}, and `fullName` is the new file.
   */
  afterSaveAs: DocumentEvent;
  /** A copy of a document is about to be written. Cancellable; the open document is untouched either way. */
  beforeSaveACopy: DocumentEvent;
  /** A copy of a document has been written. The open document still points at its original file. */
  afterSaveACopy: DocumentEvent;
  /** A document is about to be reverted to its last saved state. Cancellable. */
  beforeRevert: DocumentEvent;
  /** A document has been reverted, discarding every change since the last save. */
  afterRevert: DocumentEvent;

  // --- import / export -> ImportExportEvent
  /** Content is about to be imported. Cancellable. */
  beforeImport: ImportExportEvent;
  /** Content has been imported. */
  afterImport: ImportExportEvent;
  /**
   * An export is about to run. Cancellable.
   *
   * `target` is the {@link Document}, and `fullName` is the file the export will write.
   */
  beforeExport: ImportExportEvent;
  /**
   * An export has completed.
   *
   * `target` is the {@link Document}, and `fullName` is the file that was written —
   * the export's own output, not the document.
   */
  afterExport: ImportExportEvent;
  /** An export was attempted and did not complete. */
  failedExport: ImportExportEvent;

  // --- printing -> PrintEvent
  /** A print job is about to be sent. Cancellable. */
  beforePrint: PrintEvent;
  /** A print job has been sent. */
  afterPrint: PrintEvent;

  // --- idle task -> IdleEvent
  /** The application is idle. Fires repeatedly on a timer rather than once, and only while an {@link IdleTask} is registered. */
  onIdle: IdleEvent;

  // --- attribute mutation -> MutationEvent
  /** An object's attribute has changed. The event names what changed. */
  afterAttributeChanged: MutationEvent;

  // --- everything else -> the base Event
  /** Something is about to be placed into the layout. Cancellable. */
  beforePlace: Event;
  /** Something has been placed into the layout. */
  afterPlace: Event;
  /** A link has been added, removed, relinked, or updated. */
  afterLinksChanged: Event;
  /** An object is about to be deleted. Cancellable, and the last point at which it can still be read. */
  beforeDelete: Event;
  /** An object has been deleted. */
  afterDelete: Event;
  /** A link is about to be updated from its source file. Cancellable. */
  beforeUpdate: Event;
  /** A link has been updated from its source file. */
  afterUpdate: Event;
  /** A link is about to be embedded in the document. Cancellable. */
  beforeEmbed: Event;
  /** A link has been embedded in the document. */
  afterEmbed: Event;
  /** An embedded link is about to be written back out to a file. Cancellable. */
  beforeUnembed: Event;
  /** An embedded link has been written back out to a file. */
  afterUnembed: Event;
  /** An object is about to be moved. Cancellable. */
  beforeMove: Event;
  /** An object has been moved. */
  afterMove: Event;
  /** A menu action has been chosen. The event a {@link ScriptMenuAction} does its work on. */
  onInvoke: Event;
  /** A menu action is about to run. Cancellable, which is what makes it useful for intercepting a built-in command. */
  beforeInvoke: Event;
  /** A menu action has finished running. */
  afterInvoke: Event;
  /** A menu is about to be shown, the moment to enable or rename its items. Unreliable in practice — work that must happen is better done on `onInvoke`. */
  beforeDisplay: Event;
  /** The application is about to quit. Cancellable. */
  beforeQuit: Event;
  /** The application is quitting and will not stop. */
  afterQuit: Event;
  /** A scripted method is about to run. */
  beforeScriptMethod: Event;
  /** A scripted method has finished running. */
  afterScriptMethod: Event;
  /** The active context has changed — a different document or window came to the front. */
  afterContextChanged: Event;
  /**
   * The selection now holds different objects.
   *
   * `target` is the {@link LayoutWindow}, not the document — selection is a property of
   * the window. Read the selection from the window rather than from the event.
   */
  afterSelectionChanged: Event;
  /** The selection is unchanged but something about the selected objects is not. */
  afterSelectionAttributeChanged: Event;
  /** The application is about to lose focus to another program. */
  beforeDeactivate: Event;
  /** The application has regained focus. */
  afterActivate: Event;
  /** The Home screen has been shown or hidden. */
  homeScreenVisibilityChange: Event;
}

/**
 * The name of an event, such as `beforeSave` or `afterOpen`. The names
 * InDesign defines are the keys of {@link InDesignEventMap}; any other name
 * is accepted too.
 */
export type EventString = keyof InDesignEventMap | (string & {});

/**
 * What runs when an event fires: a function, or a path to a script file on disk.
 */
export type EventHandler<K> = (
  event: InDesignEventMap[Extract<K, keyof InDesignEventMap>],
) => void;
