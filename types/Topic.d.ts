/**
 * Topic.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { IndexSection } from './IndexSection';
import type { Index } from './Index';
import type { Topics } from './Topics';
import type { CrossReferences } from './CrossReferences';
import type { PageReferences } from './PageReferences';
import type { IndexCapitalizationOptions } from './Enums/IndexCapitalizationOptions';
import type { CrossReference } from './CrossReference';
import type { PageReference } from './PageReference';
import type { CrossReferenceSource } from './CrossReferenceSource';
import type { Hyperlink } from './Hyperlink';

/**
 * A topic (entry) in an {@link Index}. Topics nest arbitrarily deep via their
 * own {@link topics} collection, and carry the {@link CrossReference}s and
 * {@link PageReference}s that make up the generated index entry.
 */
export interface Topic<M extends Mode = 'single'>
  extends EventTargetDOMObject<IndexSection | Topic | Index, M>,
    IndexedDOMObject<IndexSection | Topic | Index, M>,
    NamableDOMObject<IndexSection | Topic | Index, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Topic';

  /** Resolves the proxy into the individual {@link Topic} objects it stands for. */
  getElements(): Topic<'single'>[];

  /** The child topics nested under this topic. */
  readonly topics: Topics;

  /**
   * The index cross references for this topic. For cross references embedded
   * in text, use {@link CrossReferenceSource} and {@link Hyperlink} instead.
   */
  readonly crossReferences: CrossReferences;

  /** The index page references for this topic. */
  readonly pageReferences: PageReferences;

  /**
   * The string the topic is sorted by, instead of its name. The topic's own
   * name, not this sort string, still appears in the generated index.
   */
  get sortOrder(): Read<M, string>;
  set sortOrder(value: string);

  /** Deletes the topic. */
  remove(): Read<M, void>;

  /**
   * Makes the initial letter for the specified index topic or group of index
   * topics upper case.
   * @param capitalizationOption Which entries are affected. Defaults to
   * {@link IndexCapitalizationOptions.ALL_ENTRIES}.
   */
  capitalize(capitalizationOption?: IndexCapitalizationOptions): Read<M, void>;
}
