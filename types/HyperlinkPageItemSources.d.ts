/**
 * HyperlinkPageItemSources.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { PageItem } from './PageItem';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { HyperlinkPageItemSource } from './HyperlinkPageItemSource';
import type { Hyperlink } from './Hyperlink';

/**
 * A collection of {@link HyperlinkPageItemSource} objects. A page item source
 * is a specific page item (e.g., a rectangle, image, or group) that acts as the
 * clickable "hotspot" for a {@link Hyperlink}.
 *
 * @collection HyperlinkPageItemSource
 */
export interface HyperlinkPageItemSources
  extends
    BaseCollection<HyperlinkPageItemSource, HyperlinkPageItemSource, HyperlinkPageItemSource<'plural'>>,
    IdCollection<HyperlinkPageItemSource>,
    NamedCollection<HyperlinkPageItemSource> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkPageItemSources';

  /**
   * Creates a new hyperlink page item source.
   *
   * @param source The {@link PageItem} to act as the hyperlink source.
   * @param withProperties Initial values for properties of the new HyperlinkPageItemSource.
   */
  add(
    source: PageItem,
    withProperties?: PropertiesSetter<HyperlinkPageItemSource>,
  ): HyperlinkPageItemSource;
}
