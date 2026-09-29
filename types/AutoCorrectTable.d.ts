/**
 * AutoCorrectTable.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * A named auto-correct word-pair table.
 */
export interface AutoCorrectTable<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'AutoCorrectTable';

  /** Resolves the proxy into the individual {@link AutoCorrectTable} objects it stands for. */
  getElements(): AutoCorrectTable<'single'>[];

  /** The name of the AutoCorrectTable. */
  readonly name: Read<M, string>;

  /** The misspelled/corrected word pairs, as `[misspelled, corrected]` tuples. */
  get autoCorrectWordPairList(): Read<M, [string, string][]>;
  set autoCorrectWordPairList(value: [string, string][]);
}
