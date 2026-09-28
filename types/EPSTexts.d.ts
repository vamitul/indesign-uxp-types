/**
 * EPSTexts.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { EPSText } from './EPSText';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of {@link EPSText} objects representing text elements embedded within
 * placed EPS graphics. These objects provide read-only access to text content,
 * fonts, and styling information parsed from the vector data of an EPS file.
 *
 * Note: {@link EPSText} elements are only available if the text in the source EPS
 * has not been converted to outlines.
 *
 * @collection EPSText
 */
export interface EPSTexts<TParent = PageItemParent>
  extends
    BaseCollection<EPSText<TParent>, EPSText, EPSText<TParent, 'plural'>>,
    IdCollection<EPSText<TParent>>,
    NamedCollection<EPSText<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPSTexts';
}
