/**
 * SpellPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { UIColors } from './Enums/UIColors';

/**
 * Spell-check preferences.
 */
export interface SpellPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'SpellPreference';

  /** Resolves the proxy into the individual {@link SpellPreference} objects it stands for. */
  getElements(): SpellPreference<'single'>[];

  /**
   * If true, underlines misspelled and repeated words, uncapitalized proper
   * nouns, and uncapitalized first words in sentences.
   *
   * Only underlines a given category if its own check is also enabled:
   * {@link checkMisspelledWords}, {@link checkRepeatedWords}, {@link checkCapitalizedWords},
   * and {@link checkCapitalizedSentences}.
   */
  get dynamicSpellCheck(): Read<M, boolean>;
  set dynamicSpellCheck(value: boolean);

  /**
   * The underline color for misspelled words, specified either as an array of three doubles,
   * each in the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Applies only when both {@link dynamicSpellCheck} and {@link checkMisspelledWords} are `true`.
   */
  get misspelledWordColor(): Read<M, number[] | UIColors>;
  set misspelledWordColor(value: number[] | UIColors);

  /**
   * The underline color for repeated words, specified either as an array of three doubles,
   * each in the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Applies only when both {@link dynamicSpellCheck} and {@link checkRepeatedWords} are `true`.
   */
  get repeatedWordColor(): Read<M, number[] | UIColors>;
  set repeatedWordColor(value: number[] | UIColors);

  /**
   * The underline color for uncapitalized proper nouns, specified either as an array of three
   * doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI
   * color.
   *
   * Applies only when both {@link dynamicSpellCheck} and {@link checkCapitalizedWords} are `true`.
   */
  get uncapitalizedWordColor(): Read<M, number[] | UIColors>;
  set uncapitalizedWordColor(value: number[] | UIColors);

  /**
   * The underline color for the first word in sentences that do not begin with a capital
   * letter, specified either as an array of three doubles, each in the range 0 to 255 and
   * representing R, G, and B values, or as a UI color.
   *
   * Applies only when both {@link dynamicSpellCheck} and {@link checkCapitalizedSentences} are `true`.
   */
  get uncapitalizedSentenceColor(): Read<M, number[] | UIColors>;
  set uncapitalizedSentenceColor(value: number[] | UIColors);

  /** If true, checks for misspelled words. */
  get checkMisspelledWords(): Read<M, boolean>;
  set checkMisspelledWords(value: boolean);

  /** If true, checks for repeated words. */
  get checkRepeatedWords(): Read<M, boolean>;
  set checkRepeatedWords(value: boolean);

  /** If true, checks for uncapitalized proper nouns. */
  get checkCapitalizedWords(): Read<M, boolean>;
  set checkCapitalizedWords(value: boolean);

  /** If true, checks for uncapitalized first words in sentences. */
  get checkCapitalizedSentences(): Read<M, boolean>;
  set checkCapitalizedSentences(value: boolean);
}
