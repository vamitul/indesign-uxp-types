/**
 * Assignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  LabelableEventDOMObject,
  IndexedDOMObject,
  NamableDOMObject,
} from './_base/DomObjects';
import type { Document } from './Document';
import type { AssignedStories } from './AssignedStories';
import type { AssignmentStatus } from './Enums/AssignmentStatus';
import type { AssignmentExportOptions } from './Enums/AssignmentExportOptions';
import type { UIColors } from './Enums/UIColors';
import type { NothingEnum } from './Enums/NothingEnum';
import type { File, FilePath } from './_base/Types';

/** The frame-color choice returned by {@link Assignment.frameColor}: an explicit RGB triplet (0-255), a UI color, or {@link NothingEnum.NOTHING}. */
export type AssignmentFrameColor = [number, number, number] | UIColors | NothingEnum;

/**
 * An InCopy assignment — a portable subset of a document's stories and page
 * items exported for editing outside InDesign.
 */
export interface Assignment<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Assignment';

  /** Resolves the proxy into the individual {@link Assignment} objects it stands for. */
  getElements(): Assignment<'single'>[];

  /** The unique ID of the Assignment. */
  readonly id: Read<M, number>;

  /** The path to the document the assignment belongs to. */
  readonly documentPath: Read<M, Promise<File>>;

  /** The status of the assignment file. */
  readonly assignmentFileStatus: Read<M, AssignmentStatus>;

  /** If `true`, the assignment is packaged. */
  readonly packaged: Read<M, boolean>;

  /** If `true`, the assignment package is up to date with the current content. */
  readonly packageUpToDate: Read<M, boolean>;

  /** The file path (colon-delimited on macOS). */
  readonly filePath: Read<M, string>;

  /** The stories assigned to this Assignment. */
  readonly assignedStories: AssignedStories;

  /** The user name assigned to tracked changes and notes made within this assignment. */
  get userName(): Read<M, string>;
  set userName(value: string);

  /** The content exported when the assignment is updated. */
  get exportOptions(): Read<M, AssignmentExportOptions>;
  set exportOptions(value: AssignmentExportOptions);

  /** The color of the assignment's frames in the InDesign UI. */
  get frameColor(): Read<M, AssignmentFrameColor>;
  set frameColor(value: AssignmentFrameColor);

  /** If `true`, linked files are included when packaging the assignment. */
  get includeLinksWhenPackage(): Read<M, boolean>;
  set includeLinksWhenPackage(value: boolean);

  /**
   * Updates the assignment file.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  update(versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Deletes the assignment and its file. */
  remove(): Read<M, void>;

  /**
   * Creates an assignment package.
   * @param submit If `true`, submits assigned stories before packaging. Defaults to `true`.
   * @param withProperties Initial values for properties of the new Assignment.
   */
  createPackage(filePath: FilePath, submit?: boolean, withProperties?: object): Read<M, Promise<File>>;

  /** Cancels the package for this assignment. */
  cancelPackage(): Read<M, void>;
}
