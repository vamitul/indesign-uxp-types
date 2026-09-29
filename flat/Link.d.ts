/**
 * Link.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
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
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * A link to a placed or embedded file — an image, story, movie, or sound —
 * tracking the source file's status ({@link status}, {@link edited},
 * {@link needed}) and providing update/relink/embed operations.
 */
export interface Link {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Story | Graphic | Movie | Sound;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Link, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Link, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): string;
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): void;
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): string;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The object's DOM class name. */
  readonly constructorName: 'Link';
  /** Resolves the proxy into the individual {@link Link} objects it stands for. */
  getElements(): Link[];
  /** The unique ID of the link. */
  readonly id: number;
  /** The name of the link (its source file name). */
  readonly name: string;
  /** The Version Cue version state of the source file. */
  readonly versionState: VersionState;
  /** The Version Cue editing state of the source file. */
  readonly editingState: EditingState;
  /** XMP metadata for the link's source file. */
  readonly linkXmp: LinkMetadata;
  /** The asset URL of the linked object. */
  readonly assetURL: string;
  /** The asset ID of the linked object. */
  readonly assetID: string;
  /** Whether the linked object has been edited in the document without the source file being updated to match. */
  readonly edited: boolean;
  /** Whether a link to a full-resolution version of the source file is needed. `false` means the object is embedded. */
  readonly needed: boolean;
  /** The current status of the link (up to date, out of date, missing, embedded…). */
  readonly status: LinkStatus;
  /** The file type of the linked object. */
  readonly linkType: string;
  /** The date and time the link was created. */
  readonly date: Date;
  /** The size, in bytes, of the link's source file. */
  readonly size: number;
  /** Whether the linked object is showing a for-position-only (FPO) proxy or the original file; see {@link LinkResourceRenditionType}. */
  readonly renditionData: LinkResourceRenditionType;
  /** The URI of the linked resource. */
  readonly linkResourceURI: string;
  /** The file path of the source file (colon-delimited on macOS). */
  readonly filePath: string;
  /** The document's other links. */
  readonly links: Links;
  /** The link's preferences. */
  readonly preferences: Preferences;
  /**
   * Checks the link in to Version Cue.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  checkIn(versionComments?: string, forceSave?: boolean): void;
  /** Points the link to a new source file. */
  relink(to: FilePath): void;
  /** Embeds the source file in the document. */
  unlink(): void;
  /** Updates the link if the source file has changed. */
  update(): Link;
  /**
   * Unembeds the source file. If `to` is omitted, links to the original
   * source file; otherwise copies the file to `to` and links to the copy.
   * @param to The folder to copy the unembedded file to.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  unembed(to?: FolderPath, versionComments?: string, forceSave?: boolean): void;
  /** Downloads the original asset and replaces the FPO (for-position-only) proxy with it. */
  replaceWithOriginal(): void;
  /** Relinks the text fragment link to a new resource URI. */
  relinkTextFragmentLink(linkResourceURI: string, name?: string): void;
  /** Reinitializes the link to a new resource URI. */
  reinitLink(linkResourceURI: string): void;
  /** Opens the source file in the default editor for its file type. */
  editOriginal(): void;
  /** Selects the link in the document. */
  show(): void;
  /** Opens the file system to the folder containing the source file and selects it. */
  revealInSystem(): void;
  /** Opens Adobe Bridge and selects the source file. */
  revealInBridge(): void;
  /**
   * Copies the link's file to the specified location.
   * @param to The file or folder to copy the file to.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  copyLink(to: FilePath | FolderPath, versionComments?: string, forceSave?: boolean): void;
  /** Opens the source file in InDesign for SharedContent links. */
  goToSource(): void;
}


/**
 * The broadcast proxy for {@link Link} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Link} there.
 */
export interface LinkPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Story | Graphic | Movie | Sound)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<LinkPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<LinkPlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): (string)[];
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): (void)[];
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): (string)[];
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The object's DOM class name. */
  readonly constructorName: 'Link';
  /** Resolves the proxy into the individual {@link Link} objects it stands for. */
  getElements(): Link[];
  /** The unique ID of the link. */
  readonly id: (number)[];
  /** The name of the link (its source file name). */
  readonly name: (string)[];
  /** The Version Cue version state of the source file. */
  readonly versionState: (VersionState)[];
  /** The Version Cue editing state of the source file. */
  readonly editingState: (EditingState)[];
  /** XMP metadata for the link's source file. */
  readonly linkXmp: (LinkMetadata)[];
  /** The asset URL of the linked object. */
  readonly assetURL: (string)[];
  /** The asset ID of the linked object. */
  readonly assetID: (string)[];
  /** Whether the linked object has been edited in the document without the source file being updated to match. */
  readonly edited: (boolean)[];
  /** Whether a link to a full-resolution version of the source file is needed. `false` means the object is embedded. */
  readonly needed: (boolean)[];
  /** The current status of the link (up to date, out of date, missing, embedded…). */
  readonly status: (LinkStatus)[];
  /** The file type of the linked object. */
  readonly linkType: (string)[];
  /** The date and time the link was created. */
  readonly date: (Date)[];
  /** The size, in bytes, of the link's source file. */
  readonly size: (number)[];
  /** Whether the linked object is showing a for-position-only (FPO) proxy or the original file; see {@link LinkResourceRenditionType}. */
  readonly renditionData: (LinkResourceRenditionType)[];
  /** The URI of the linked resource. */
  readonly linkResourceURI: (string)[];
  /** The file path of the source file (colon-delimited on macOS). */
  readonly filePath: (string)[];
  /** The document's other links. */
  readonly links: Links;
  /** The link's preferences. */
  readonly preferences: Preferences;
  /**
   * Checks the link in to Version Cue.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  checkIn(versionComments?: string, forceSave?: boolean): (void)[];
  /** Points the link to a new source file. */
  relink(to: FilePath): (void)[];
  /** Embeds the source file in the document. */
  unlink(): (void)[];
  /** Updates the link if the source file has changed. */
  update(): (Link)[];
  /**
   * Unembeds the source file. If `to` is omitted, links to the original
   * source file; otherwise copies the file to `to` and links to the copy.
   * @param to The folder to copy the unembedded file to.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  unembed(to?: FolderPath, versionComments?: string, forceSave?: boolean): (void)[];
  /** Downloads the original asset and replaces the FPO (for-position-only) proxy with it. */
  replaceWithOriginal(): (void)[];
  /** Relinks the text fragment link to a new resource URI. */
  relinkTextFragmentLink(linkResourceURI: string, name?: string): (void)[];
  /** Reinitializes the link to a new resource URI. */
  reinitLink(linkResourceURI: string): (void)[];
  /** Opens the source file in the default editor for its file type. */
  editOriginal(): (void)[];
  /** Selects the link in the document. */
  show(): (void)[];
  /** Opens the file system to the folder containing the source file and selects it. */
  revealInSystem(): (void)[];
  /** Opens Adobe Bridge and selects the source file. */
  revealInBridge(): (void)[];
  /**
   * Copies the link's file to the specified location.
   * @param to The file or folder to copy the file to.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  copyLink(to: FilePath | FolderPath, versionComments?: string, forceSave?: boolean): (void)[];
  /** Opens the source file in InDesign for SharedContent links. */
  goToSource(): (void)[];
}
