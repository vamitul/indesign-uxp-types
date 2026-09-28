/**
 * PDFComment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  LabelableEventDOMObject,
  IndexedDOMObject,
  NamableDOMObject,
} from './_base/DomObjects';
import type { Document } from './Document';
import type { Replies } from './Replies';
import type { CommentTypeEnum } from './Enums/CommentTypeEnum';
import type { CommentStatusEnum } from './Enums/CommentStatusEnum';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';

/** A single anchor/handle point on a {@link PDFComment}'s drawn path. */
export interface PDFCommentPathPoint<M extends Mode = 'single'> {
  /** Resolves the proxy into the individual {@link PDFCommentPathPoint} objects it stands for. */
  getElements(): PDFCommentPathPoint<'single'>[];

  /** The point's anchor coordinate, as `[x, y]`. */
  get anchor(): Read<M, [number, number]>;
  set anchor(value: [number, number]);
  /** The incoming Bezier handle, as `[x, y]`. */
  get leftDirection(): Read<M, [number, number]>;
  set leftDirection(value: [number, number]);
  /** The outgoing Bezier handle, as `[x, y]`. */
  get rightDirection(): Read<M, [number, number]>;
  set rightDirection(value: [number, number]);
  /** If `true`, the path segment ending at this point is open. */
  get pathOpen(): Read<M, boolean>;
  set pathOpen(value: boolean);
}
/**
 * An imported PDF comment (markup annotation) attached to a document.
 */
export interface PDFComment {
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
  get properties(): PropertiesGetter<PDFComment, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PDFComment, 'single'>);
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
  readonly constructorName: 'PDFComment';
  /** Resolves the proxy into the individual {@link PDFComment}s it stands for. */
  getElements(): PDFComment[];
  /** The unique ID of the PDFComment. */
  readonly id: number;
  /** The reviewer who authored the comment. */
  readonly commentReviewer: string;
  /** The text content of the comment. */
  readonly commentContent: string;
  /** The date the comment was made. */
  readonly commentDate: Date;
  /** The kind of PDF markup annotation this comment represents. */
  readonly commentType: CommentTypeEnum;
  /** The path to the source PDF file the comment was imported from. */
  readonly commentFilePath: string;
  /** The drawn path geometry of the comment, as groups of path points. */
  readonly commentPathGeometry: PDFCommentPathPoint[][];
  /** The current review status of the comment. */
  readonly commentStatus: CommentStatusEnum;
  /** If `true`, the comment no longer has a corresponding location in the document. */
  readonly commentIsOrphan: boolean;
  /** If `true`, the comment has been applied to the document content. */
  readonly commentIsApplied: boolean;
  /** The replies posted to this comment. */
  readonly replies: Replies;
  /** Deletes the comment. */
  remove(): void;
  /** Changes the review status of the comment. */
  changeStatus(commentStatus: CommentStatusEnum, withProperties?: object): void;
}


/**
 * The broadcast proxy for {@link PDFComment} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PDFComment} there.
 */
export interface PDFCommentPlural {
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
  get properties(): (PropertiesGetter<PDFCommentPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PDFCommentPlural, 'plural'>);
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
  readonly constructorName: 'PDFComment';
  /** Resolves the proxy into the individual {@link PDFComment}s it stands for. */
  getElements(): PDFComment[];
  /** The unique ID of the PDFComment. */
  readonly id: (number)[];
  /** The reviewer who authored the comment. */
  readonly commentReviewer: (string)[];
  /** The text content of the comment. */
  readonly commentContent: (string)[];
  /** The date the comment was made. */
  readonly commentDate: (Date)[];
  /** The kind of PDF markup annotation this comment represents. */
  readonly commentType: (CommentTypeEnum)[];
  /** The path to the source PDF file the comment was imported from. */
  readonly commentFilePath: (string)[];
  /** The drawn path geometry of the comment, as groups of path points. */
  readonly commentPathGeometry: (PDFCommentPathPoint[][])[];
  /** The current review status of the comment. */
  readonly commentStatus: (CommentStatusEnum)[];
  /** If `true`, the comment no longer has a corresponding location in the document. */
  readonly commentIsOrphan: (boolean)[];
  /** If `true`, the comment has been applied to the document content. */
  readonly commentIsApplied: (boolean)[];
  /** The replies posted to this comment. */
  readonly replies: Replies;
  /** Deletes the comment. */
  remove(): (void)[];
  /** Changes the review status of the comment. */
  changeStatus(commentStatus: CommentStatusEnum, withProperties?: object): (void)[];
}
