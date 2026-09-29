/**
 * IndexSection.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Index } from './Index';
import type { Topics } from './Topics';
import type { Topic } from './Topic';

/**
 * A section within an {@link Index} (for example, a letter-of-the-alphabet
 * grouping), used to organize {@link Topic}s in the generated index.
 */
export interface IndexSection<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Index, M>,
    IndexedDOMObject<Index, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'IndexSection';

  /** Resolves the proxy into the individual {@link IndexSection} objects it stands for. */
  getElements(): IndexSection<'single'>[];

  /** The unique ID of the index section. */
  readonly id: Read<M, number>;

  /** The name of the index section. */
  readonly name: Read<M, string>;

  /** All topics contained in this index section. */
  readonly allTopics: Read<M, Topic[]>;

  /** The topics in this index section. */
  readonly topics: Topics;
}
