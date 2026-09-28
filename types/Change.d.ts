/**
 * Change.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { ChangeParent } from './_base/Parents';
import type { ChangeTypes } from './Enums/ChangeTypes';
import type { InsertionPoint } from './InsertionPoint';
import type { Texts } from './Texts';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { Paragraphs } from './Paragraphs';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { TextVariableInstances } from './TextVariableInstances';

/**
 * A single tracked change recorded in a story with Track Changes enabled.
 */
export interface Change<M extends Mode = 'single'>
  extends EventTargetDOMObject<ChangeParent, M>,
    IndexedDOMObject<ChangeParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Change';

  /** Resolves the proxy into the individual {@link Change} objects it stands for. */
  getElements(): Change<'single'>[];

  /** {@link TextVariableInstances} resolved within the changed text. */
  readonly textVariableInstances: TextVariableInstances;

  /** The date the tracked change was made. Valid only when track changes is enabled. */
  readonly date: Read<M, Date>;

  /** The kind of tracked change (insertion, deletion, format change, and so on). Valid only when track changes is enabled. */
  readonly changeType: Read<M, ChangeTypes>;

  /** The user who made the change. Valid only when track changes is enabled. */
  readonly userName: Read<M, string>;

  /** The location of the first insertion point of the change, relative to the beginning of the story. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** A collection of text objects covered by the change. */
  readonly texts: Texts<Change>;

  /** A collection of characters covered by the change. */
  readonly characters: Characters<Change>;

  /** A collection of words covered by the change. */
  readonly words: Words<Change>;

  /** A collection of lines covered by the change. */
  readonly lines: Lines<Change>;

  /** A collection of text columns covered by the change. */
  readonly textColumns: TextColumns<Change>;

  /** A collection of paragraphs covered by the change. */
  readonly paragraphs: Paragraphs<Change>;

  /** A collection of insertion points covered by the change. */
  readonly insertionPoints: InsertionPoints<Change>;

  /** A collection of text style ranges covered by the change. */
  readonly textStyleRanges: TextStyleRanges<Change>;

  /** Accepts the tracked change. Valid only when track changes is enabled. */
  accept(): Read<M, void>;

  /** Rejects the tracked change. Valid only when track changes is enabled. */
  reject(): Read<M, void>;
}
