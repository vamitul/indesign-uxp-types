/**
 * EPubExportPreviewAppPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * The list of external applications available for previewing an exported EPUB,
 * and whether the export result opens automatically.
 */
export interface EPubExportPreviewAppPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPubExportPreviewAppPreference';

  /** Resolves the proxy into the individual {@link EPubExportPreviewAppPreference} objects it stands for. */
  getElements(): EPubExportPreviewAppPreference<'single'>[];

  /** If true, opens the document in the viewer after export. */
  get viewDocumentAfterExport(): Read<M, boolean>;
  set viewDocumentAfterExport(value: boolean);

  /**
   * Add a new preview application preference
   * @param applicationPath The full path of the application to be added.
   * @param selectedForReflowableEpub Check if the app is selected in Reflowable ePub export.
   * @param selectedForFixedLayoutEpub Check if the app is selected in Fixed Layout ePub export.
   * @param withProperties Initial values for properties of the new EPubExportPreviewAppPreference.
   */
  addApplication(applicationPath: string, selectedForReflowableEpub: boolean, selectedForFixedLayoutEpub: boolean, withProperties?: object): Read<M, void>;

  /**
   * Remove an application at specified index.
   * @param indexOfApp The index of the application to be removed.
   * @param withProperties Listed by the dictionary but described there as initial values for a
   * *new* entry, copied from `addApplication`. Nothing is created when an entry is removed, so
   * what it does here is undocumented.
   */
  removeApplication(indexOfApp: number, withProperties?: object): Read<M, void>;

  /**
   * Get the application at index.
   * @param indexOfApp The index of the application to get information for.
   * @param withProperties Listed by the dictionary but described there as initial values for a
   * *new* entry, copied from `addApplication`. Nothing is created when an entry is read, so
   * what it does here is undocumented.
   */
  getApplicationAtIndex(indexOfApp: number, withProperties?: object): Read<M, unknown>;

  /** Number of applications added for ePub Preview. */
  getApplicationCount(): Read<M, number>;
}
