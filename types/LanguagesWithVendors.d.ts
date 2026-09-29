/**
 * LanguagesWithVendors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { LanguageWithVendors } from './LanguageWithVendors';

/**
 * A collection of {@link LanguageWithVendors} objects. These represent languages
 * associated with specific hyphenation or spelling service providers.
 *
 * @collection LanguageWithVendors
 */
export interface LanguagesWithVendors
  extends
    BaseCollection<LanguageWithVendors, LanguageWithVendors, LanguageWithVendors<'plural'>>,
    IdCollection<LanguageWithVendors>,
    NamedCollection<LanguageWithVendors> {
  /** The object's DOM class name. */
  readonly constructorName: 'LanguagesWithVendors';
}
