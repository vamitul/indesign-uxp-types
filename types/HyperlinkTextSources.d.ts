/**
 * HyperlinkTextSources.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Text } from './Text';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { HyperlinkTextSource } from './HyperlinkTextSource';
import type { Hyperlink } from './Hyperlink';

/**
 * A collection of {@link HyperlinkTextSource} objects. A text source is a range
 * of text that acts as the clickable "hotspot" for a {@link Hyperlink}.
 *
 * @collection HyperlinkTextSource
 */
export interface HyperlinkTextSources
  extends
    BaseCollection<HyperlinkTextSource, HyperlinkTextSource, HyperlinkTextSource<'plural'>>,
    IdCollection<HyperlinkTextSource>,
    NamedCollection<HyperlinkTextSource> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkTextSources';

  /**
   * Creates a new hyperlink text source.
   *
   * @param source The text to act as the hyperlink source.
   * @param withProperties Initial values for properties of the new HyperlinkTextSource.
   */
  add(
    source: Text,
    withProperties?: PropertiesSetter<HyperlinkTextSource>,
  ): HyperlinkTextSource;
}
