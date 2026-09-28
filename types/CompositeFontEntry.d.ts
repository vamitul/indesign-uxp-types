/**
 * CompositeFontEntry.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { CompositeFont } from './CompositeFont';
import type { Font } from './Font';

/**
 * One font-substitution slot within a {@link CompositeFont}, covering a single
 * character range with its own font, scaling, and baseline-shift adjustment.
 */
export interface CompositeFontEntry<M extends Mode = 'single'>
  extends LabelableEventDOMObject<CompositeFont, M>,
    IndexedDOMObject<CompositeFont, M>,
    NamableDOMObject<CompositeFont, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CompositeFontEntry';

  /** Resolves the proxy into the individual {@link CompositeFontEntry} objects it stands for. */
  getElements(): CompositeFontEntry<'single'>[];

  /** The unique ID of the entry, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** Whether the entry is the composite font's base entry, which cannot be modified. */
  readonly locked: Read<M, boolean>;

  /** The font applied to this entry. Accepts a {@link Font} object or its family name. */
  get appliedFont(): Read<M, Font>;
  set appliedFont(value: Font | string);

  /** The name of the font style applied to this entry. */
  get fontStyle(): Read<M, string>;
  set fontStyle(value: string);

  /** The size of this entry's text relative to the base entry's size, as a percentage. */
  get relativeSize(): Read<M, number>;
  set relativeSize(value: number);

  /** The horizontal scaling applied to this entry's characters, as a percentage. */
  get horizontalScale(): Read<M, number>;
  set horizontalScale(value: number);

  /** The vertical scaling applied to this entry's characters, as a percentage. */
  get verticalScale(): Read<M, number>;
  set verticalScale(value: number);

  /** The characters this entry applies to, e.g. a punctuation or Kana range. */
  get customCharacters(): Read<M, string>;
  set customCharacters(value: string);

  /** Whether scaled characters are scaled from their center rather than their baseline origin. */
  get scaleOption(): Read<M, boolean>;
  set scaleOption(value: boolean);

  /** The baseline shift applied to this entry's characters, in points. */
  get baselineShift(): Read<M, number>;
  set baselineShift(value: number);

  /** Deletes the entry from its composite font. */
  remove(): Read<M, void>;
}
