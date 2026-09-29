/**
 * Sections.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Page } from './Page';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Section } from './Section';
import type { Document } from './Document';

/**
 * A collection of {@link Section} objects in a {@link Document}.
 * Sections define page numbering patterns, prefixes, and markers for ranges of pages.
 * Adding a section creates a new logical division starting at the specified page.
 *
 * @collection Section
 */
export interface Sections
  extends
    BaseCollection<Section, Section, Section<'plural'>>,
    IdCollection<Section>,
    NamedCollection<Section> {
  /** The object's DOM class name. */
  readonly constructorName: 'Sections';

  /** Creates a new section from a properties bag alone. */
  add(withProperties: PropertiesSetter<Section>): Section;

  /**
   * Creates a new section starting at the specified page.
   * If a section already exists on the specified page, this method returns the existing section.
   *
   * @param reference The {@link Page} on which the section begins. If omitted, defaults to the first page of the document or active spread.
   * @param withProperties Initial values for properties of the new {@link Section}, such as `sectionPrefix` or `pageNumberStart`.
   */
  add(reference?: Page, withProperties?: PropertiesSetter<Section>): Section;
}
