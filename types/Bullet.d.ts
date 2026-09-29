/**
 * Bullet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { ChangeGrepPreference } from './ChangeGrepPreference';
import type { ChangeTextPreference } from './ChangeTextPreference';
import type { ChangeTransliteratePreference } from './ChangeTransliteratePreference';
import type { Character } from './Character';
import type { FindGrepPreference } from './FindGrepPreference';
import type { FindTextPreference } from './FindTextPreference';
import type { FindTransliteratePreference } from './FindTransliteratePreference';
import type { Font } from './Font';
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
import type { AutoEnum } from './Enums/AutoEnum';
import type { BulletCharacterType } from './Enums/BulletCharacterType';
import type { NothingEnum } from './Enums/NothingEnum';

/**
 * The bullet character used by a paragraph's bulleted list.
 */
export interface Bullet<M extends Mode = 'single'> extends EventTargetDOMObject<TextDefault | ParagraphStyle | Text | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word | Character | Story | XmlStory | FindTextPreference | ChangeTextPreference | FindGrepPreference | ChangeGrepPreference | FindTransliteratePreference | ChangeTransliteratePreference, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Bullet';

  /** Resolves the proxy into the individual {@link Bullet} objects it stands for. */
  getElements(): Bullet<'single'>[];

  /** Where the character comes from — a literal character, a Unicode code point, or a glyph chosen from a specific font. See {@link BulletCharacterType}. */
  get characterType(): Read<M, BulletCharacterType>;
  set characterType(value: BulletCharacterType);

  /** The bullet character as a unicode ID or a glyph ID. */
  get characterValue(): Read<M, number>;
  set characterValue(value: number);

  /** Font of the bullet character. */
  get bulletsFont(): Read<M, Font | AutoEnum>;
  set bulletsFont(value: Font | AutoEnum | string);

  /** Font style of the bullet character. */
  get bulletsFontStyle(): Read<M, string | NothingEnum.NOTHING | AutoEnum>;
  set bulletsFontStyle(value: string | NothingEnum.NOTHING | AutoEnum);
}
