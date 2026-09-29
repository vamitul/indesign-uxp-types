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
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';

/** The frame-color choice returned by {@link Assignment.frameColor}: an explicit RGB triplet (0-255), a UI color, or {@link NothingEnum.NOTHING}. */
export type AssignmentFrameColor = [number, number, number] | UIColors | NothingEnum;
/**
 * An InCopy assignment — a portable subset of a document's stories and page
 * items exported for editing outside InDesign.
 */
export interface Assignment {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Assignment, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Assignment, 'single'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): string;
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'Assignment';
  /** Resolves the proxy into the individual {@link Assignment} objects it stands for. */
  getElements(): Assignment[];
  /** The unique ID of the Assignment. */
  readonly id: number;
  /** The path to the document the assignment belongs to. */
  readonly documentPath: Promise<File>;
  /** The status of the assignment file. */
  readonly assignmentFileStatus: AssignmentStatus;
  /** If `true`, the assignment is packaged. */
  readonly packaged: boolean;
  /** If `true`, the assignment package is up to date with the current content. */
  readonly packageUpToDate: boolean;
  /** The file path (colon-delimited on macOS). */
  readonly filePath: string;
  /** The stories assigned to this Assignment. */
  readonly assignedStories: AssignedStories;
  /** The user name assigned to tracked changes and notes made within this assignment. */
  get userName(): string;
  set userName(value: string);
  /** The content exported when the assignment is updated. */
  get exportOptions(): AssignmentExportOptions;
  set exportOptions(value: AssignmentExportOptions);
  /** The color of the assignment's frames in the InDesign UI. */
  get frameColor(): AssignmentFrameColor;
  set frameColor(value: AssignmentFrameColor);
  /** If `true`, linked files are included when packaging the assignment. */
  get includeLinksWhenPackage(): boolean;
  set includeLinksWhenPackage(value: boolean);
  /**
   * Updates the assignment file.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  update(versionComments?: string, forceSave?: boolean): void;
  /** Deletes the assignment and its file. */
  remove(): void;
  /**
   * Creates an assignment package.
   * @param submit If `true`, submits assigned stories before packaging. Defaults to `true`.
   * @param withProperties Initial values for properties of the new Assignment.
   */
  createPackage(filePath: FilePath, submit?: boolean, withProperties?: object): Promise<File>;
  /** Cancels the package for this assignment. */
  cancelPackage(): void;
}


/**
 * The broadcast proxy for {@link Assignment} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Assignment} there.
 */
export interface AssignmentPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<AssignmentPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<AssignmentPlural, 'plural'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): (string)[];
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'Assignment';
  /** Resolves the proxy into the individual {@link Assignment} objects it stands for. */
  getElements(): Assignment[];
  /** The unique ID of the Assignment. */
  readonly id: (number)[];
  /** The path to the document the assignment belongs to. */
  readonly documentPath: (Promise<File>)[];
  /** The status of the assignment file. */
  readonly assignmentFileStatus: (AssignmentStatus)[];
  /** If `true`, the assignment is packaged. */
  readonly packaged: (boolean)[];
  /** If `true`, the assignment package is up to date with the current content. */
  readonly packageUpToDate: (boolean)[];
  /** The file path (colon-delimited on macOS). */
  readonly filePath: (string)[];
  /** The stories assigned to this Assignment. */
  readonly assignedStories: AssignedStories;
  /** The user name assigned to tracked changes and notes made within this assignment. */
  get userName(): (string)[];
  set userName(value: string);
  /** The content exported when the assignment is updated. */
  get exportOptions(): (AssignmentExportOptions)[];
  set exportOptions(value: AssignmentExportOptions);
  /** The color of the assignment's frames in the InDesign UI. */
  get frameColor(): (AssignmentFrameColor)[];
  set frameColor(value: AssignmentFrameColor);
  /** If `true`, linked files are included when packaging the assignment. */
  get includeLinksWhenPackage(): (boolean)[];
  set includeLinksWhenPackage(value: boolean);
  /**
   * Updates the assignment file.
   * @param versionComments The comment for this version.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  update(versionComments?: string, forceSave?: boolean): (void)[];
  /** Deletes the assignment and its file. */
  remove(): (void)[];
  /**
   * Creates an assignment package.
   * @param submit If `true`, submits assigned stories before packaging. Defaults to `true`.
   * @param withProperties Initial values for properties of the new Assignment.
   */
  createPackage(filePath: FilePath, submit?: boolean, withProperties?: object): (Promise<File>)[];
  /** Cancels the package for this assignment. */
  cancelPackage(): (void)[];
}
