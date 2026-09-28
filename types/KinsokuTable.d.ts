/**
 * KinsokuTable.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  LabelableEventDOMObject,
  IndexedDOMObject,
  NamableDOMObject,
} from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';

/**
 * A named kinsoku (Japanese line-breaking rule) table.
 */
export interface KinsokuTable<M extends Mode = 'single'>
  extends LabelableEventDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M>,
    NamableDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'KinsokuTable';

  /** Resolves the proxy into the individual {@link KinsokuTable} objects it stands for. */
  getElements(): KinsokuTable<'single'>[];

  /** The unique ID of the KinsokuTable. */
  readonly id: Read<M, number>;

  /** Characters that cannot begin a line. */
  get cantBeginLineChars(): Read<M, string>;
  set cantBeginLineChars(value: string);

  /** Characters that cannot end a line. */
  get cantEndLineChars(): Read<M, string>;
  set cantEndLineChars(value: string);

  /** Characters that hang outside the margin rather than force a line break. */
  get hangingPunctuationChars(): Read<M, string>;
  set hangingPunctuationChars(value: string);

  /** Characters that cannot be separated from the character before or after them. */
  get cantBeSeparatedChars(): Read<M, string>;
  set cantBeSeparatedChars(value: string);

  /** Deletes the KinsokuTable. */
  remove(): Read<M, void>;
}
