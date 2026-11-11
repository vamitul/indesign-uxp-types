/**
 * EndnoteRanges.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { EndnoteRange } from './EndnoteRange';

/**
 * A collection of {@link EndnoteRange} objects. These represent the specific
 * text ranges within an endnote story that correspond to individual endnote entries.
 *
 * @collection EndnoteRange
 */
export interface EndnoteRanges
  extends
    BaseCollection<EndnoteRange, EndnoteRange, EndnoteRange<'plural'>>,
    IdCollection<EndnoteRange>,
    NamedCollection<EndnoteRange> {
  /** The object's DOM class name. */
  readonly constructorName: 'EndnoteRanges';
}
