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
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * A text object flowed along a {@link Path} rather than inside a frame.
 */
export interface TextPath {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: TextPathOwner;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<TextPath, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextPath, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The object's DOM class name. */
  readonly constructorName: 'TextPath';
  /** Resolves the proxy into the individual {@link TextPath} objects it stands for. */
  getElements(): TextPath[];
  /** The unique numeric ID of the text path within its document. */
  readonly id: number;
  /** The halfway point between {@link startBracket} and {@link endBracket}. */
  readonly centerBracket: number;
  /** The {@link Story} that contains this text path's text. */
  readonly parentStory: Story;
  /** The first frame or text path in this object's text thread. */
  readonly startTextFrame: TextThreadEnd;
  /** The last frame or text path in this object's text thread. */
  readonly endTextFrame: TextThreadEnd;
  /** The index of this text path within its story's frame thread. */
  readonly textFrameIndex: number;
  /** Whether the story has overset (unplaced) text. */
  readonly overflows: boolean;
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
  get pathAlignment(): PathTypeAlignments;
  set pathAlignment(value: PathTypeAlignments);
  /** Which reference line of each glyph — baseline, ascender, descender, or em-box edge — sits on the path; see {@link TextTypeAlignments}. */
  get textAlignment(): TextTypeAlignments;
  set textAlignment(value: TextTypeAlignments);
  /** The distortion effect applied to type on the path. */
  get pathEffect(): TextPathEffects;
  set pathEffect(value: TextPathEffects);
  /** Whether the type-on-a-path effect is mirrored across the path; see {@link FlipValues}. */
  get flipPathEffect(): FlipValues;
  set flipPathEffect(value: FlipValues);
  /** The spacing applied to the type on the path. */
  get pathSpacing(): number;
  set pathSpacing(value: number);
  /** The start of the type on the path, in points measured from the path's first point. */
  get startBracket(): number;
  set startBracket(value: number);
  /**
   * The end of the type on the path, in points. Additional text becomes
   * overset unless the path is linked to another text frame or path.
   */
  get endBracket(): number;
  set endBracket(value: number);
  /** The previous frame or text path in this object's thread. Assign {@link NothingEnum.NOTHING} to unthread. */
  get previousTextFrame(): TextThreadEnd | null;
  set previousTextFrame(value: TextThreadEnd | NothingEnum | null);
  /** The next frame or text path in this object's thread. Assign {@link NothingEnum.NOTHING} to unthread. */
  get nextTextFrame(): TextThreadEnd | null;
  set nextTextFrame(value: TextThreadEnd | NothingEnum | null);
  /** The text path's plain-text contents. Reading yields the text as a `string`, or a {@link SpecialCharacters} value for special-character-only content. */
  get contents(): string | TextFrameContents | SpecialCharacters;
  set contents(value: string | TextFrameContents | SpecialCharacters);
  /** A property that can be set to any string, viewable and editable via the Script Label panel. */
  get label(): string;
  set label(value: string);
  /** The text path's name; an alias to its {@link label} property. */
  get name(): string;
  set name(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   * @param key The key.
   * @param value The value.
   */
  insertLabel(key: string, value: string): void;
  /**
   * Gets the label value associated with the specified key.
   * @param key The key.
   */
  extractLabel(key: string): string;
  /**
   * Finds text that matches the find-what value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findText(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find-what value and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeText(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find-what GREP pattern.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find-what GREP pattern and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Text[];
  /**
   * Finds glyphs that match the find-what value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): Text[];
  /**
   * Finds glyphs that match the find-what value and replaces them with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find-what character-type value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find-what character-type value and replaces it with the change-to character-type value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Text[];
  /** Deletes the text path. */
  remove(): void;
}


/**
 * The broadcast proxy for {@link TextPath} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TextPath} there.
 */
export interface TextPathPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (TextPathOwner)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<TextPathPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextPathPlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The object's DOM class name. */
  readonly constructorName: 'TextPath';
  /** Resolves the proxy into the individual {@link TextPath} objects it stands for. */
  getElements(): TextPath[];
  /** The unique numeric ID of the text path within its document. */
  readonly id: (number)[];
  /** The halfway point between {@link startBracket} and {@link endBracket}. */
  readonly centerBracket: (number)[];
  /** The {@link Story} that contains this text path's text. */
  readonly parentStory: (Story)[];
  /** The first frame or text path in this object's text thread. */
  readonly startTextFrame: (TextThreadEnd)[];
  /** The last frame or text path in this object's text thread. */
  readonly endTextFrame: (TextThreadEnd)[];
  /** The index of this text path within its story's frame thread. */
  readonly textFrameIndex: (number)[];
  /** Whether the story has overset (unplaced) text. */
  readonly overflows: (boolean)[];
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
  get pathAlignment(): (PathTypeAlignments)[];
  set pathAlignment(value: PathTypeAlignments);
  /** Which reference line of each glyph — baseline, ascender, descender, or em-box edge — sits on the path; see {@link TextTypeAlignments}. */
  get textAlignment(): (TextTypeAlignments)[];
  set textAlignment(value: TextTypeAlignments);
  /** The distortion effect applied to type on the path. */
  get pathEffect(): (TextPathEffects)[];
  set pathEffect(value: TextPathEffects);
  /** Whether the type-on-a-path effect is mirrored across the path; see {@link FlipValues}. */
  get flipPathEffect(): (FlipValues)[];
  set flipPathEffect(value: FlipValues);
  /** The spacing applied to the type on the path. */
  get pathSpacing(): (number)[];
  set pathSpacing(value: number);
  /** The start of the type on the path, in points measured from the path's first point. */
  get startBracket(): (number)[];
  set startBracket(value: number);
  /**
   * The end of the type on the path, in points. Additional text becomes
   * overset unless the path is linked to another text frame or path.
   */
  get endBracket(): (number)[];
  set endBracket(value: number);
  /** The previous frame or text path in this object's thread. Assign {@link NothingEnum.NOTHING} to unthread. */
  get previousTextFrame(): (TextThreadEnd | null)[];
  set previousTextFrame(value: TextThreadEnd | NothingEnum | null);
  /** The next frame or text path in this object's thread. Assign {@link NothingEnum.NOTHING} to unthread. */
  get nextTextFrame(): (TextThreadEnd | null)[];
  set nextTextFrame(value: TextThreadEnd | NothingEnum | null);
  /** The text path's plain-text contents. Reading yields the text as a `string`, or a {@link SpecialCharacters} value for special-character-only content. */
  get contents(): (string | TextFrameContents | SpecialCharacters)[];
  set contents(value: string | TextFrameContents | SpecialCharacters);
  /** A property that can be set to any string, viewable and editable via the Script Label panel. */
  get label(): (string)[];
  set label(value: string);
  /** The text path's name; an alias to its {@link label} property. */
  get name(): (string)[];
  set name(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   * @param key The key.
   * @param value The value.
   */
  insertLabel(key: string, value: string): (void)[];
  /**
   * Gets the label value associated with the specified key.
   * @param key The key.
   */
  extractLabel(key: string): (string)[];
  /**
   * Finds text that matches the find-what value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findText(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find-what value and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeText(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find-what GREP pattern.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findGrep(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find-what GREP pattern and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds glyphs that match the find-what value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds glyphs that match the find-what value and replaces them with the change-to value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find-what character-type value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find-what character-type value and replaces it with the change-to character-type value.
   * @param reverseOrder If `true`, returns results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): (Text[])[];
  /** Deletes the text path. */
  remove(): (void)[];
}
