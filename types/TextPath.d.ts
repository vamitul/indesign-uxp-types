/**
 * TextPath.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { TextPathOwner } from './_base/Unions';
import type { Story } from './Story';
import type { TextThreadEnd } from './TextFrame';
import type { Texts } from './Texts';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { Paragraphs } from './Paragraphs';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { Text } from './Text';
import type { PathTypeAlignments } from './Enums/PathTypeAlignments';
import type { TextTypeAlignments } from './Enums/TextTypeAlignments';
import type { TextPathEffects } from './Enums/TextPathEffects';
import type { FlipValues } from './Enums/FlipValues';
import type { NothingEnum } from './Enums/NothingEnum';
import type { TextFrameContents } from './Enums/TextFrameContents';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { Path } from './Path';

/**
 * A text object flowed along a {@link Path} rather than inside a frame.
 */
export interface TextPath<M extends Mode = 'single'> extends EventTargetDOMObject<TextPathOwner, M>, IndexedDOMObject<TextPathOwner, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextPath';

  /** Resolves the proxy into the individual {@link TextPath} objects it stands for. */
  getElements(): TextPath<'single'>[];

  /** The unique numeric ID of the text path within its document. */
  readonly id: Read<M, number>;

  /** The halfway point between {@link startBracket} and {@link endBracket}. */
  readonly centerBracket: Read<M, number>;

  /** The {@link Story} that contains this text path's text. */
  readonly parentStory: Read<M, Story>;

  /** The first frame or text path in this object's text thread. */
  readonly startTextFrame: Read<M, TextThreadEnd>;

  /** The last frame or text path in this object's text thread. */
  readonly endTextFrame: Read<M, TextThreadEnd>;

  /** The index of this text path within its story's frame thread. */
  readonly textFrameIndex: Read<M, number>;

  /** Whether the story has overset (unplaced) text. */
  readonly overflows: Read<M, boolean>;

  /** A collection of text objects on the path. */
  readonly texts: Texts<TextPath>;

  /** A collection of characters on the path. */
  readonly characters: Characters<TextPath>;

  /** A collection of words on the path. */
  readonly words: Words<TextPath>;

  /** A collection of lines on the path. */
  readonly lines: Lines<TextPath>;

  /** A collection of text columns on the path. */
  readonly textColumns: TextColumns<TextPath>;

  /** A collection of paragraphs on the path. */
  readonly paragraphs: Paragraphs<TextPath>;

  /** A collection of insertion points on the path. */
  readonly insertionPoints: InsertionPoints<TextPath>;

  /** A collection of text style ranges on the path. */
  readonly textStyleRanges: TextStyleRanges<TextPath>;

  /** Where the type sits relative to the path's stroke — top, bottom, or center; see {@link PathTypeAlignments}. */
  get pathAlignment(): Read<M, PathTypeAlignments>;
  set pathAlignment(value: PathTypeAlignments);

  /** Which reference line of each glyph — baseline, ascender, descender, or em-box edge — sits on the path; see {@link TextTypeAlignments}. */
  get textAlignment(): Read<M, TextTypeAlignments>;
  set textAlignment(value: TextTypeAlignments);

  /** The distortion effect applied to type on the path. */
  get pathEffect(): Read<M, TextPathEffects>;
  set pathEffect(value: TextPathEffects);

  /** Whether the type-on-a-path effect is mirrored across the path; see {@link FlipValues}. */
  get flipPathEffect(): Read<M, FlipValues>;
  set flipPathEffect(value: FlipValues);

  /** The spacing applied to the type on the path. */
  get pathSpacing(): Read<M, number>;
  set pathSpacing(value: number);

  /** The start of the type on the path, in points measured from the path's first point. */
  get startBracket(): Read<M, number>;
  set startBracket(value: number);

  /**
   * The end of the type on the path, in points. Additional text becomes
   * overset unless the path is linked to another text frame or path.
   */
  get endBracket(): Read<M, number>;
  set endBracket(value: number);

  /** The previous frame or text path in this object's thread. Assign {@link NothingEnum.NOTHING} to unthread. */
  get previousTextFrame(): Read<M, TextThreadEnd | null>;
  set previousTextFrame(value: TextThreadEnd | NothingEnum | null);

  /** The next frame or text path in this object's thread. Assign {@link NothingEnum.NOTHING} to unthread. */
  get nextTextFrame(): Read<M, TextThreadEnd | null>;
  set nextTextFrame(value: TextThreadEnd | NothingEnum | null);

  /** The text path's plain-text contents. Reading yields the text as a `string`, or a {@link SpecialCharacters} value for special-character-only content. */
  get contents(): Read<M, string | TextFrameContents | SpecialCharacters>;
  set contents(value: string | TextFrameContents | SpecialCharacters);

  /** A property that can be set to any string, viewable and editable via the Script Label panel. */
  get label(): Read<M, string>;
  set label(value: string);

  /** The text path's name; an alias to its {@link label} property. */
  get name(): Read<M, string>;
  set name(value: string);

  /**
   * Sets the label to the value associated with the specified key.
   * @param key The key.
   * @param value The value.
   */
  insertLabel(key: string, value: string): Read<M, void>;

  /**
   * Gets the label value associated with the specified key.
   * @param key The key.
   */
  extractLabel(key: string): Read<M, string>;

  /**
   * Finds text that matches the find-what value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find-what value and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find-what GREP pattern.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find-what GREP pattern and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds glyphs that match the find-what value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds glyphs that match the find-what value and replaces them with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find-what character-type value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find-what character-type value and replaces it with the change-to character-type value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /** Deletes the text path. */
  remove(): Read<M, void>;
}
