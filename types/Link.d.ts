/**
 * Link.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Story } from './Story';
import type { Graphic } from './Graphic';
import type { Movie } from './Movie';
import type { Sound } from './Sound';
import type { Preferences } from './Preferences';
import type { Links } from './Links';
import type { LinkMetadata } from './LinkMetadata';
import type { VersionState } from './Enums/VersionState';
import type { EditingState } from './Enums/EditingState';
import type { LinkStatus } from './Enums/LinkStatus';
import type { LinkResourceRenditionType } from './Enums/LinkResourceRenditionType';
import type { FilePath, FolderPath } from './_base/Types';

/**
 * A link to a placed or embedded file — an image, story, movie, or sound —
 * tracking the source file's status ({@link status}, {@link edited},
 * {@link needed}) and providing update/relink/embed operations.
 */
export interface Link<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Story | Graphic | Movie | Sound, M>,
    IndexedDOMObject<Story | Graphic | Movie | Sound, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Link';

  /** Resolves the proxy into the individual {@link Link} objects it stands for. */
  getElements(): Link<'single'>[];

  /** The unique ID of the link. */
  readonly id: Read<M, number>;

  /** The name of the link (its source file name). */
  readonly name: Read<M, string>;

  /** The Version Cue version state of the source file. */
  readonly versionState: Read<M, VersionState>;

  /** The Version Cue editing state of the source file. */
  readonly editingState: Read<M, EditingState>;

  /** XMP metadata for the link's source file. */
  readonly linkXmp: Read<M, LinkMetadata>;

  /** The asset URL of the linked object. */
  readonly assetURL: Read<M, string>;

  /** The asset ID of the linked object. */
  readonly assetID: Read<M, string>;

  /** Whether the linked object has been edited in the document without the source file being updated to match. */
  readonly edited: Read<M, boolean>;

  /** Whether a link to a full-resolution version of the source file is needed. `false` means the object is embedded. */
  readonly needed: Read<M, boolean>;

  /** The current status of the link (up to date, out of date, missing, embedded…). */
  readonly status: Read<M, LinkStatus>;

  /** The file type of the linked object. */
  readonly linkType: Read<M, string>;

  /** The date and time the link was created. */
  readonly date: Read<M, Date>;

  /** The size, in bytes, of the link's source file. */
  readonly size: Read<M, number>;

  /** Whether the linked object is showing a for-position-only (FPO) proxy or the original file; see {@link LinkResourceRenditionType}. */
  readonly renditionData: Read<M, LinkResourceRenditionType>;

  /** The URI of the linked resource. */
  readonly linkResourceURI: Read<M, string>;

  /** The file path of the source file (colon-delimited on macOS). */
  readonly filePath: Read<M, string>;

  /** The document's other links. */
  readonly links: Links;

  /** The link's preferences. */
  readonly preferences: Preferences;

  /**
   * Checks the link in to Version Cue.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  checkIn(versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Points the link to a new source file. */
  relink(to: FilePath): Read<M, void>;

  /** Embeds the source file in the document. */
  unlink(): Read<M, void>;

  /** Updates the link if the source file has changed. */
  update(): Read<M, Link>;

  /**
   * Unembeds the source file. If `to` is omitted, links to the original
   * source file; otherwise copies the file to `to` and links to the copy.
   * @param to The folder to copy the unembedded file to.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  unembed(to?: FolderPath, versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Downloads the original asset and replaces the FPO (for-position-only) proxy with it. */
  replaceWithOriginal(): Read<M, void>;

  /** Relinks the text fragment link to a new resource URI. */
  relinkTextFragmentLink(linkResourceURI: string, name?: string): Read<M, void>;

  /** Reinitializes the link to a new resource URI. */
  reinitLink(linkResourceURI: string): Read<M, void>;

  /** Opens the source file in the default editor for its file type. */
  editOriginal(): Read<M, void>;

  /** Selects the link in the document. */
  show(): Read<M, void>;

  /** Opens the file system to the folder containing the source file and selects it. */
  revealInSystem(): Read<M, void>;

  /** Opens Adobe Bridge and selects the source file. */
  revealInBridge(): Read<M, void>;

  /**
   * Copies the link's file to the specified location.
   * @param to The file or folder to copy the file to.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  copyLink(to: FilePath | FolderPath, versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Opens the source file in InDesign for SharedContent links. */
  goToSource(): Read<M, void>;
}
