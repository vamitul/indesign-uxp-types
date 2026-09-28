/**
 * NumberingRestartPolicy.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { ChangeGrepPreference } from './ChangeGrepPreference';
import type { ChangeTextPreference } from './ChangeTextPreference';
import type { Character } from './Character';
import type { FindGrepPreference } from './FindGrepPreference';
import type { FindTextPreference } from './FindTextPreference';
import type { InsertionPoint } from './InsertionPoint';
import type { Line } from './Line';
import type { Paragraph } from './Paragraph';
import type { ParagraphStyle } from './ParagraphStyle';
import type { Story } from './Story';
import type { Text } from './Text';
import type { TextColumn } from './TextColumn';
import type { TextDefault } from './TextDefault';
import type { TextStyleRange } from './TextStyleRange';
import type { Word } from './Word';
import type { XmlStory } from './XmlStory';
import type { RestartPolicy } from './Enums/RestartPolicy';

/**
 * Controls where automatic numbering restarts within a list, and the range
 * of levels the restart applies to.
 */
export interface NumberingRestartPolicy<M extends Mode = 'single'> extends EventTargetDOMObject<TextDefault | ParagraphStyle | Text | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word | Character | Story | XmlStory | FindTextPreference | ChangeTextPreference | FindGrepPreference | ChangeGrepPreference, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'NumberingRestartPolicy';

  /** Resolves the proxy into the individual {@link NumberingRestartPolicy} objects it stands for. */
  getElements(): NumberingRestartPolicy<'single'>[];

  /** Which numbering level triggers a restart — see {@link RestartPolicy}. */
  get numberingPolicy(): Read<M, RestartPolicy>;
  set numberingPolicy(value: RestartPolicy);

  /** The lower numbering level for a numbered list. */
  get numberingLowerLevel(): Read<M, number>;
  set numberingLowerLevel(value: number);

  /** The upper numbering level for a numbered list. */
  get numberingUpperLevel(): Read<M, number>;
  set numberingUpperLevel(value: number);
}
