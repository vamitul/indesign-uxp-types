/**
 * HyperlinkExternalPageDestinations.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Page } from './Page';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { HyperlinkExternalPageDestination } from './HyperlinkExternalPageDestination';

/**
 * A collection of {@link HyperlinkExternalPageDestination} objects. These
 * destinations point to a specific page in a different InDesign document.
 *
 * @collection HyperlinkExternalPageDestination
 */
export interface HyperlinkExternalPageDestinations
  extends
    BaseCollection<HyperlinkExternalPageDestination, HyperlinkExternalPageDestination, HyperlinkExternalPageDestination<'plural'>>,
    IdCollection<HyperlinkExternalPageDestination>,
    NamedCollection<HyperlinkExternalPageDestination> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkExternalPageDestinations';

  /**
   * Creates a new hyperlink external page destination from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link HyperlinkExternalPageDestination}.
   */
  add(withProperties: PropertiesSetter<HyperlinkExternalPageDestination>): HyperlinkExternalPageDestination;

  /**
   * Creates a new hyperlink external page destination.
   * @param destination The {@link Page} in the external document that the hyperlink points to.
   * @param withProperties Initial values for properties of the new HyperlinkExternalPageDestination.
   */
  add(
    destination?: Page,
    withProperties?: PropertiesSetter<HyperlinkExternalPageDestination>,
  ): HyperlinkExternalPageDestination;
}
