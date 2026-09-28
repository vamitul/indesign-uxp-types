/**
 * HyphenationExceptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { HyphenationException } from './HyphenationException';

/**
 * A collection of {@link HyphenationException} objects for different languages.
 * These exceptions define custom hyphenation points for specific words,
 * overriding the automated hyphenation engine.
 *
 * @collection HyphenationException
 */
export interface HyphenationExceptions
  extends
    BaseCollection<HyphenationException, HyphenationException, HyphenationException<'plural'>>,
    NamedCollection<HyphenationException> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyphenationExceptions';
}
