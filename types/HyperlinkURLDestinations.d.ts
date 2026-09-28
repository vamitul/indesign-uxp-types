/**
 * HyperlinkURLDestinations.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { HyperlinkURLDestination } from './HyperlinkURLDestination';

/**
 * A collection of {@link HyperlinkURLDestination} objects. These destinations
 * point to external web URLs (e.g., "https://www.adobe.com").
 *
 * @collection HyperlinkURLDestination
 */
export interface HyperlinkURLDestinations
  extends
    BaseCollection<HyperlinkURLDestination, HyperlinkURLDestination, HyperlinkURLDestination<'plural'>>,
    IdCollection<HyperlinkURLDestination>,
    NamedCollection<HyperlinkURLDestination> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkURLDestinations';

  /**
   * Creates a new hyperlink URL destination from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link HyperlinkURLDestination}.
   */
  add(withProperties: PropertiesSetter<HyperlinkURLDestination>): HyperlinkURLDestination;

  /**
   * Creates a new hyperlink URL destination.
   * @param destination The external URL that the hyperlink points to.
   * @param withProperties Initial values for properties of the new HyperlinkURLDestination.
   */
  add(
    destination?: string,
    withProperties?: PropertiesSetter<HyperlinkURLDestination>,
  ): HyperlinkURLDestination;
}
