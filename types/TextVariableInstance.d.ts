/**
 * TextVariableInstance.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { XmlStory } from './XmlStory';
import type { TextFrame } from './TextFrame';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { Story } from './Story';
import type { Note } from './Note';
import type { Cell } from './Cell';
import type { Footnote } from './Footnote';
import type { Change } from './Change';
import type { InsertionPoint } from './InsertionPoint';
import type { Text } from './Text';
import type { TextVariable } from './TextVariable';

/**
 * A placed instance of a {@link TextVariable} within a story's text —
 * the anchor that displays the variable's resolved {@link resultText} at a
 * specific position.
 */
export interface TextVariableInstance<M extends Mode = 'single'>
  extends LabelableEventDOMObject<XmlStory | TextFrame | EndnoteTextFrame | Story | Note | Cell | Footnote | Change, M>,
    IndexedDOMObject<XmlStory | TextFrame | EndnoteTextFrame | Story | Note | Cell | Footnote | Change, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextVariableInstance';

  /** Resolves the proxy into the individual {@link TextVariableInstance} objects it stands for. */
  getElements(): TextVariableInstance<'single'>[];

  /** The unique ID of the instance, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the instance, inherited from its {@link associatedTextVariable}. */
  readonly name: Read<M, string>;

  /** The text currently substituted for this instance. Read-only — update the underlying {@link TextVariable} to change it. */
  readonly resultText: Read<M, string>;

  /** The {@link InsertionPoint} in the parent story where this instance is anchored. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** The {@link TextVariable} this instance displays the resolved value of. */
  get associatedTextVariable(): Read<M, TextVariable>;
  set associatedTextVariable(value: TextVariable);

  /** Removes this instance from the text, leaving no replacement content. */
  remove(): Read<M, void>;

  /** Converts this instance to its currently resolved plain text. */
  convertToText(): Read<M, Text>;
}
