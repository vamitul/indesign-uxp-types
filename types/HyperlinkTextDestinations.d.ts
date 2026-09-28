/**
 * HyperlinkTextDestinations.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Text } from './Text';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { HyperlinkTextDestination } from './HyperlinkTextDestination';

/**
 * A collection of {@link HyperlinkTextDestination} objects. These destinations
 * point to a specific text range or location within the document's stories.
 *
 * @collection HyperlinkTextDestination
 */
export interface HyperlinkTextDestinations
  extends
    BaseCollection<HyperlinkTextDestination, HyperlinkTextDestination, HyperlinkTextDestination<'plural'>>,
    IdCollection<HyperlinkTextDestination>,
    NamedCollection<HyperlinkTextDestination> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkTextDestinations';

  /**
   * Creates a new hyperlink text destination.
   *
   * @param destination The text location that the hyperlink points to.
   * @param withProperties Initial values for properties of the new HyperlinkTextDestination.
   */
  add(
    destination: Text,
    withProperties?: PropertiesSetter<HyperlinkTextDestination>,
  ): HyperlinkTextDestination;
}
