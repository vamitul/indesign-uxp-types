/**
 * MojikumiUiPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';

/**
 * Mojikumi UI preferences.
 */
export interface MojikumiUiPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MojikumiUiPreference';

  /** Resolves the proxy into the individual {@link MojikumiUiPreference} objects it stands for. */
  getElements(): MojikumiUiPreference<'single'>[];

  /** If true, uses half-width spacing for all characters. */
  get lineEndAllOneHalfEm(): Read<M, boolean>;
  set lineEndAllOneHalfEm(value: boolean);

  /** If true, indents lines one space and uses line end uke one half space. */
  get oneEmIndentLineEndUkeOneHalfEm(): Read<M, boolean>;
  set oneEmIndentLineEndUkeOneHalfEm(value: boolean);

  /** If true, indents lines one full or half space and uses line end uke one half space. */
  get oneOrOneHalfEmIndentLineEndUkeOneHalfEm(): Read<M, boolean>;
  set oneOrOneHalfEmIndentLineEndUkeOneHalfEm(value: boolean);

  /** If true, Uses full-witdh spacing for all characters except the last character in the line, which uses either full- or half-width spacing. */
  get oneOrOneHalfEmIndentLineEndAllOneEm(): Read<M, boolean>;
  set oneOrOneHalfEmIndentLineEndAllOneEm(value: boolean);

  /** If true, indents lines one full space and uses full-width spacing for all characters. */
  get oneEmIndentLineEndAllOneEm(): Read<M, boolean>;
  set oneEmIndentLineEndAllOneEm(value: boolean);

  /** If true, indents lines one full space and uses no float for all characters. */
  get oneEmIndentLineEndAllNoFloat(): Read<M, boolean>;
  set oneEmIndentLineEndAllNoFloat(value: boolean);

  /** If true, indents lines one full space and uses line end uke no float. */
  get oneEmIndentLineEndUkeNoFloat(): Read<M, boolean>;
  set oneEmIndentLineEndUkeNoFloat(value: boolean);

  /** If true, indents lines one half space or one full space and uses line end uke no float. */
  get oneOrOneHalfEmIndentLineEndUkeNoFloat(): Read<M, boolean>;
  set oneOrOneHalfEmIndentLineEndUkeNoFloat(value: boolean);

  /** If true, indents lines one full space and uses half-width spacing for all characters. */
  get oneEmIndentLineEndAllOneHalfEm(): Read<M, boolean>;
  set oneEmIndentLineEndAllOneHalfEm(value: boolean);

  /** If true, uses full-width spacing for all characters. */
  get lineEndAllOneEm(): Read<M, boolean>;
  set lineEndAllOneEm(value: boolean);

  /** If true, uses line end uke no float. */
  get lineEndUkeNoFloat(): Read<M, boolean>;
  set lineEndUkeNoFloat(value: boolean);

  /** If true, indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line. */
  get oneOrOneHalfEmIndentLineEndPeriodOneEm(): Read<M, boolean>;
  set oneOrOneHalfEmIndentLineEndPeriodOneEm(value: boolean);

  /** If true, indents lines one space and uses full-width spacing for punctuation and for the last character in the line. */
  get oneEmIndentLineEndPeriodOneEm(): Read<M, boolean>;
  set oneEmIndentLineEndPeriodOneEm(value: boolean);

  /** If true, uses full-width spacing for punctuation and for the last character in the line. */
  get lineEndPeriodOneEm(): Read<M, boolean>;
  set lineEndPeriodOneEm(value: boolean);
}
