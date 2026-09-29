/**
 * Preference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { PageItemUnion } from './_base/Unions';
import type { Application } from './Application';
import type { Book } from './Book';
import type { ChangeGrepPreference } from './ChangeGrepPreference';
import type { ChangeObjectPreference } from './ChangeObjectPreference';
import type { ChangeTextPreference } from './ChangeTextPreference';
import type { ChangeTransliteratePreference } from './ChangeTransliteratePreference';
import type { Character } from './Character';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { DataMerge } from './DataMerge';
import type { Document } from './Document';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { FindGrepPreference } from './FindGrepPreference';
import type { FindObjectPreference } from './FindObjectPreference';
import type { FindTextPreference } from './FindTextPreference';
import type { FindTransliteratePreference } from './FindTransliteratePreference';
import type { FormField } from './FormField';
import type { InsertionPoint } from './InsertionPoint';
import type { Line } from './Line';
import type { Link } from './Link';
import type { MasterSpread } from './MasterSpread';
import type { NamedGrid } from './NamedGrid';
import type { ObjectStyle } from './ObjectStyle';
import type { Page } from './Page';
import type { PageItemDefault } from './PageItemDefault';
import type { Paragraph } from './Paragraph';
import type { ParagraphStyle } from './ParagraphStyle';
import type { Spread } from './Spread';
import type { Story } from './Story';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Text } from './Text';
import type { TextColumn } from './TextColumn';
import type { TextDefault } from './TextDefault';
import type { TextStyleRange } from './TextStyleRange';
import type { TextVariable } from './TextVariable';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TransparencySetting } from './TransparencySetting';
import type { Word } from './Word';
import type { XmlStory } from './XmlStory';
import type { Preferences } from './Preferences';

/**
 * A settings object reached through a {@link Preferences} collection before you know which
 * kind it is — transparency, text wrap, find/change, and so on.
 */
export interface Preference<M extends Mode = 'single'> extends EventTargetDOMObject<PageItemUnion | Application | Document | Book | DataMerge | XmlStory | Spread | FindChangeTransparencySetting | FindChangeStrokeTransparencySetting | FindChangeFillTransparencySetting | FindChangeContentTransparencySetting | FormField | PageItemDefault | TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting | FindObjectPreference | ChangeObjectPreference | Story | TextVariable | TextWrapPreference | Page | Link | ObjectStyle | MasterSpread | NamedGrid | TextDefault | ParagraphStyle | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word | Character | Text | FindTextPreference | ChangeTextPreference | FindGrepPreference | ChangeGrepPreference | FindTransliteratePreference | ChangeTransliteratePreference, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Preference';

  /** Resolves the proxy into the individual {@link Preference} objects it stands for. */
  getElements(): Preference<'single'>[];

}
