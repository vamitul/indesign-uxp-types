/**
 * Replies.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Reply } from './Reply';
import type { PDFComment } from './PDFComment';

/**
 * A collection of {@link Reply} objects. Replies are threaded responses
 * to {@link PDFComment} objects, used in the document review workflow.
 *
 * @collection Reply
 */
export interface Replies
  extends BaseCollection<Reply, Reply, Reply<'plural'>>, IdCollection<Reply>, NamedCollection<Reply> {
  /** The object's DOM class name. */
  readonly constructorName: 'Replies';
}
