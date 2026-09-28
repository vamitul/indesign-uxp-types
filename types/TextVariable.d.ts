/**
 * TextVariable.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { TextVariableInstance } from './TextVariableInstance';
import type { VariableTypes } from './Enums/VariableTypes';
import type { Text } from './Text';
import type { Preferences } from './Preferences';
import type { PageNumberVariablePreference } from './PageNumberVariablePreference';
import type { ChapterNumberVariablePreference } from './ChapterNumberVariablePreference';
import type { DateVariablePreference } from './DateVariablePreference';
import type { FileNameVariablePreference } from './FileNameVariablePreference';
import type { MatchCharacterStylePreference } from './MatchCharacterStylePreference';
import type { MatchParagraphStylePreference } from './MatchParagraphStylePreference';
import type { CustomTextVariablePreference } from './CustomTextVariablePreference';
import type { CaptionMetadataVariablePreference } from './CaptionMetadataVariablePreference';

/**
 * The type of preference settings object returned by
 * {@link TextVariable.variableOptions}, resolved by that variable's
 * {@link TextVariable.variableType}.
 */
export type TextVariableOptions =
  | PageNumberVariablePreference
  | ChapterNumberVariablePreference
  | DateVariablePreference
  | FileNameVariablePreference
  | MatchCharacterStylePreference
  | MatchParagraphStylePreference
  | CustomTextVariablePreference
  | CaptionMetadataVariablePreference;

/**
 * A text variable definition in a document or application — a named,
 * document-wide placeholder (page number, date, running header/footer text,
 * and so on).
 *
 * Its resolved text is inserted wherever a {@link TextVariableInstance} of it
 * is placed in a story.
 */
export interface TextVariable<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M>,
    NamableDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextVariable';

  /** Resolves the proxy into the individual {@link TextVariable} objects it stands for. */
  getElements(): TextVariable<'single'>[];

  /** Every {@link TextVariableInstance} placed in the document that resolves to this variable. */
  readonly associatedInstances: Read<M, TextVariableInstance[]>;

  /**
   * The settings that define how this variable resolves to text, whose
   * concrete shape depends on {@link variableType}. See {@link TextVariableOptions}.
   */
  readonly variableOptions: Read<M, TextVariableOptions>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;

  /** The kind of variable — page number, date, running text, and so on — which determines the shape of {@link variableOptions}. */
  get variableType(): Read<M, VariableTypes>;
  set variableType(value: VariableTypes);

  /** Deletes the variable definition. Existing instances of it in text become plain text at their last-resolved value. */
  remove(): Read<M, void>;

  /** Converts every {@link TextVariableInstance} of this variable in the document to plain, resolved text. */
  convertToText(): Read<M, Text[]>;
}
