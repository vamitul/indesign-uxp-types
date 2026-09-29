/**
 * Index.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { IndexSections } from './IndexSections';
import type { Topics } from './Topics';
import type { Topic } from './Topic';
import type { Story } from './Story';
import type { Page } from './Page';
import type { Spread } from './Spread';
import type { MasterSpread } from './MasterSpread';
import type { Layer } from './Layer';
import type { IndexCapitalizationOptions } from './Enums/IndexCapitalizationOptions';
import type { MeasurementValue, FilePath } from './_base/Types';
import type { IndexSection } from './IndexSection';

/**
 * An index for the document, containing {@link IndexSection}s and
 * {@link Topic}s that define its entries and generate an index {@link Story}.
 */
export interface Index<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Index';

  /** Resolves the proxy into the individual {@link Index} objects it stands for. */
  getElements(): Index<'single'>[];

  /** The unique ID of the index. */
  readonly id: Read<M, number>;

  /** All topics in the index, across every {@link IndexSection}. */
  readonly allTopics: Read<M, Topic[]>;

  /** The index's sections, used to group topics (e.g. alphabetically). */
  readonly indexSections: IndexSections;

  /** The index's top-level topics. */
  readonly topics: Topics;

  /** Imports a list of index topics from a file. */
  importTopics(from: FilePath): Read<M, void>;

  /** Removes all index topics that do not have any index entries. */
  removeUnusedTopics(): Read<M, void>;

  /**
   * Makes the initial letter for the specified index topic or group of index
   * topics upper case.
   * @param capitalizationOption Which entries are affected. Defaults to
   * {@link IndexCapitalizationOptions.ALL_ENTRIES}.
   */
  capitalize(capitalizationOption?: IndexCapitalizationOptions): Read<M, void>;

  /** Updates the index preview pane. Does not update the index itself. */
  update(): Read<M, void>;

  /**
   * Generates a new index story.
   * @param on The spread or page on which to place the story. Defaults to the current page.
   * @param placePoint The `[x, y]` coordinates of the story's upper-left corner.
   * @param autoflowing If `true`, flows the story onto subsequent pages (creating
   * them if needed) rather than leaving it overset. Defaults to `false`.
   * @param includeOverset If `true`, includes topics located in overset text. Defaults to `false`.
   */
  generate(
    on?: Page | Spread | MasterSpread,
    placePoint?: [MeasurementValue, MeasurementValue],
    destinationLayer?: Layer,
    autoflowing?: boolean,
    includeOverset?: boolean,
  ): Story[];
}
