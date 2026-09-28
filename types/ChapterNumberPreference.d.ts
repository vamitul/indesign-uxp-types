/**
 * ChapterNumberPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { ChapterNumberSources } from './Enums/ChapterNumberSources';
import type { NumberingStyle } from './Enums/NumberingStyle';

/**
 * Chapter numbering preferences.
 */
export interface ChapterNumberPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ChapterNumberPreference';

  /** Resolves the proxy into the individual {@link ChapterNumberPreference} objects it stands for. */
  getElements(): ChapterNumberPreference<'single'>[];

  /** The chapter number, used when {@link chapterNumberSource} is {@link ChapterNumberSources.USER_DEFINED}. */
  get chapterNumber(): Read<M, number>;
  set chapterNumber(value: number);

  /** Where the chapter number comes from — see {@link ChapterNumberSources}. */
  get chapterNumberSource(): Read<M, ChapterNumberSources>;
  set chapterNumberSource(value: ChapterNumberSources);

  /** The numeral style the chapter number is displayed in — a {@link NumberingStyle}, or a custom string format. */
  get chapterNumberFormat(): Read<M, NumberingStyle | string>;
  set chapterNumberFormat(value: NumberingStyle | string);
}
