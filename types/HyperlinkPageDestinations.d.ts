/**
 * HyperlinkPageDestinations.d.ts — indesign-uxp-types
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
import type { HyperlinkPageDestination } from './HyperlinkPageDestination';

/**
 * A collection of {@link HyperlinkPageDestination} objects. These destinations
 * point to a specific page within the current document.
 *
 * @collection HyperlinkPageDestination
 */
export interface HyperlinkPageDestinations
  extends
    BaseCollection<HyperlinkPageDestination, HyperlinkPageDestination, HyperlinkPageDestination<'plural'>>,
    IdCollection<HyperlinkPageDestination>,
    NamedCollection<HyperlinkPageDestination> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkPageDestinations';

  /**
   * Creates a new hyperlink page destination from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link HyperlinkPageDestination}.
   */
  add(withProperties: PropertiesSetter<HyperlinkPageDestination>): HyperlinkPageDestination;

  /**
   * Creates a new hyperlink page destination.
   * @param destination The {@link Page} that the hyperlink points to.
   * @param withProperties Initial values for properties of the new HyperlinkPageDestination.
   */
  add(
    destination?: Page,
    withProperties?: PropertiesSetter<HyperlinkPageDestination>,
  ): HyperlinkPageDestination;
}
