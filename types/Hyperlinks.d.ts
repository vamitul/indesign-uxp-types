/**
 * Hyperlinks.d.ts — indesign-uxp-types
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
import type { Hyperlink } from './Hyperlink';
import type { HyperlinkPageItemSource } from './HyperlinkPageItemSource';
import type { HyperlinkTextSource } from './HyperlinkTextSource';
import type { CrossReferenceSource } from './CrossReferenceSource';
import type { HyperlinkTextDestination } from './HyperlinkTextDestination';
import type { HyperlinkPageDestination } from './HyperlinkPageDestination';
import type { HyperlinkExternalPageDestination } from './HyperlinkExternalPageDestination';
import type { HyperlinkURLDestination } from './HyperlinkURLDestination';
import type { ParagraphDestination } from './ParagraphDestination';

/**
 * A collection of {@link Hyperlink} objects. Hyperlinks connect a clickable
 * source (like text, a page item, or a cross-reference) to a specific destination
 * (such as a URL, a page, or another text range).
 *
 * @collection Hyperlink
 */
export interface Hyperlinks
  extends
    BaseCollection<Hyperlink, Hyperlink, Hyperlink<'plural'>>,
    IdCollection<Hyperlink>,
    NamedCollection<Hyperlink> {
  /** The object's DOM class name. */
  readonly constructorName: 'Hyperlinks';

  /**
   * Creates a new hyperlink.
   *
   * @param hyperlinkSource The hyperlinked object source (text or page item).
   * @param hyperlinkDestination The destination that the hyperlink points to. Can be a destination object or an explicit external file linkage tuple.
   * @param withProperties Initial values for properties of the new Hyperlink.
   */
  add(
    hyperlinkSource:
      | HyperlinkPageItemSource
      | HyperlinkTextSource
      | CrossReferenceSource,
    hyperlinkDestination?:
      | [
          fileName: string,
          volume: string,
          directoryId: number,
          dataLinkClassId: number,
          destinationUid: number,
        ]
      | HyperlinkTextDestination
      | HyperlinkPageDestination
      | HyperlinkExternalPageDestination
      | HyperlinkURLDestination
      | ParagraphDestination,
    withProperties?: PropertiesSetter<Hyperlink>,
  ): Hyperlink;
}
