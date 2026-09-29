/**
 * Reply.d.ts — indesign-uxp-types
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
import type { PDFComment } from './PDFComment';

/**
 * A reply posted to a {@link PDFComment} thread.
 */
export interface Reply<M extends Mode = 'single'>
  extends LabelableEventDOMObject<PDFComment, M>,
    IndexedDOMObject<PDFComment, M>,
    NamableDOMObject<PDFComment, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Reply';

  /** Resolves the proxy into the individual {@link Reply} objects it stands for. */
  getElements(): Reply<'single'>[];

  /** The unique ID of the Reply. */
  readonly id: Read<M, number>;

  /** The reviewer who authored the reply. */
  readonly replyReviewer: Read<M, string>;

  /** The text content of the reply. */
  readonly replyContent: Read<M, string>;

  /** The date the reply was made. */
  readonly replyDate: Read<M, Date>;
}
