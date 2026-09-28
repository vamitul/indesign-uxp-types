/**
 * PDFComments.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { PDFComment } from './PDFComment';

/**
 * A collection of {@link PDFComment} objects. These represent comments and
 * annotations imported from a PDF file for collaborative review within InDesign.
 *
 * @collection PDFComment
 */
export interface PDFComments
  extends
    BaseCollection<PDFComment, PDFComment, PDFComment<'plural'>>,
    IdCollection<PDFComment>,
    NamedCollection<PDFComment> {
  /** The object's DOM class name. */
  readonly constructorName: 'PDFComments';
}
