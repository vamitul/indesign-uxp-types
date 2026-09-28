/**
 * Documents.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { DocumentPreset } from './DocumentPreset';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Document } from './Document';

/**
 * A collection of open {@link Document} objects in the current InDesign application session.
 * Indexed documents correspond to open InDesign files; adding to this collection
 * creates and opens a new document.
 *
 * @collection Document
 */
export interface Documents
  extends
    BaseCollection<Document, Document, Document<'plural'>>,
    IdCollection<Document>,
    NamedCollection<Document> {
  /** The object's DOM class name. */
  readonly constructorName: 'Documents';

  /**
   * Creates a new document from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link Document}.
   */
  add(withProperties: PropertiesSetter<Document>): Document;

  /**
   * Creates and optionally displays a new InDesign document.
   *
   * If a `documentPreset` is supplied, the new document is initialized with the preset's page
   * size, margins, columns, and other settings. Without a preset, InDesign applies the
   * current application defaults.
   * @param showingWindow If `true`, the new document window is displayed immediately. If `false`, the document is created in the background for faster processing. Defaults to `true`.
   * @param documentPreset The {@link DocumentPreset} to apply to the new document.
   * @param withProperties Initial values for properties of the new Document.
   */
  add(
    showingWindow?: boolean,
    documentPreset?: DocumentPreset,
    withProperties?: PropertiesSetter<Document>,
  ): Document;
}
