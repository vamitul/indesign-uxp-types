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
export interface PDFComment<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PDFComment';

  /** Resolves the proxy into the individual {@link PDFComment}s it stands for. */
  getElements(): PDFComment<'single'>[];

  /** The unique ID of the PDFComment. */
  readonly id: Read<M, number>;

  /** The reviewer who authored the comment. */
  readonly commentReviewer: Read<M, string>;

  /** The text content of the comment. */
  readonly commentContent: Read<M, string>;

  /** The date the comment was made. */
  readonly commentDate: Read<M, Date>;

  /** The kind of PDF markup annotation this comment represents. */
  readonly commentType: Read<M, CommentTypeEnum>;

  /** The path to the source PDF file the comment was imported from. */
  readonly commentFilePath: Read<M, string>;

  /** The drawn path geometry of the comment, as groups of path points. */
  readonly commentPathGeometry: Read<M, PDFCommentPathPoint[][]>;

  /** The current review status of the comment. */
  readonly commentStatus: Read<M, CommentStatusEnum>;

  /** If `true`, the comment no longer has a corresponding location in the document. */
  readonly commentIsOrphan: Read<M, boolean>;

  /** If `true`, the comment has been applied to the document content. */
  readonly commentIsApplied: Read<M, boolean>;

  /** The replies posted to this comment. */
  readonly replies: Replies;

  /** Deletes the comment. */
  remove(): Read<M, void>;

  /** Changes the review status of the comment. */
  changeStatus(commentStatus: CommentStatusEnum, withProperties?: object): Read<M, void>;
}
