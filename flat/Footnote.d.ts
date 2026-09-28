/**
 * Footnote.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { XmlStory } from './XmlStory';
import type { Cell } from './Cell';
import type { Story } from './Story';
import type { TextFrame } from './TextFrame';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { InsertionPoint } from './InsertionPoint';
import type { Text } from './Text';
import type { PageItem } from './PageItem';
import type { Graphic } from './Graphic';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { NothingEnum } from './Enums/NothingEnum';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { Paragraphs } from './Paragraphs';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { Texts } from './Texts';
import type { HiddenTexts } from './HiddenTexts';
import type { TextVariableInstances } from './TextVariableInstances';
import type { Ovals } from './Ovals';
import type { SplineItems } from './SplineItems';
import type { PageItems } from './PageItems';
import type { Rectangles } from './Rectangles';
import type { GraphicLines } from './GraphicLines';
import type { TextFrames } from './TextFrames';
import type { Polygons } from './Polygons';
import type { Groups } from './Groups';
import type { EPSTexts } from './EPSTexts';
import type { Character } from './Character';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';
import type { Endnote } from './Endnote';
import type { Line } from './Line';
import type { Paragraph } from './Paragraph';
import type { TextColumn } from './TextColumn';
import type { TextStyleRange } from './TextStyleRange';
import type { Word } from './Word';
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
 * A footnote anchored at a point in a story's main text — its marker appears
 * inline, while its content flows at the bottom of the column or page. See
 * also {@link Endnote} for note text collected at the end of the story instead.
 */
export interface Footnote {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: XmlStory | Cell | Story | TextFrame | EndnoteTextFrame | InsertionPoint;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Footnote, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Footnote, 'single'>);
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
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): string;
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): void;
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): string;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): string;
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'Footnote';
  /** Resolves the proxy into the individual {@link Footnote} objects it stands for. */
  getElements(): Footnote[];
  /** The unique ID of the footnote, stable across saves and reopens. */
  readonly id: number;
  /** The {@link InsertionPoint} in the parent story where the footnote marker sits. */
  readonly storyOffset: InsertionPoint;
  /** Every {@link PageItem} anywhere in the footnote's content. A snapshot array, not a live collection. */
  readonly allPageItems: AnyPageItem[];
  /** Every {@link Graphic} anywhere in the footnote's content. A snapshot array, not a live collection. */
  readonly allGraphics: AnyGraphic[];
  /** A collection of {@link TextColumn}s in the footnote's content. */
  readonly textColumns: TextColumns<Footnote>;
  /** A collection of {@link Text} objects spanning the footnote's content. */
  readonly texts: Texts<Footnote>;
  /** A collection of {@link TextStyleRange}s in the footnote's content. */
  readonly textStyleRanges: TextStyleRanges<Footnote>;
  /** A collection of {@link Paragraph}s in the footnote's content. */
  readonly paragraphs: Paragraphs<Footnote>;
  /** A collection of {@link Line}s in the footnote's content. */
  readonly lines: Lines<Footnote>;
  /** A collection of {@link Word}s in the footnote's content. */
  readonly words: Words<Footnote>;
  /** A collection of {@link Character}s in the footnote's content. */
  readonly characters: Characters<Footnote>;
  /** A collection of {@link InsertionPoint}s in the footnote's content. */
  readonly insertionPoints: InsertionPoints<Footnote>;
  /** {@link TextVariableInstances} resolved within the footnote's content. */
  readonly textVariableInstances: TextVariableInstances;
  /** {@link Ovals} (ellipses) directly in the footnote. */
  readonly ovals: Ovals<Character>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in the footnote. */
  readonly splineItems: SplineItems<Character>;
  /** All {@link PageItems} directly in the footnote, regardless of type. */
  readonly pageItems: PageItems<Character>;
  /** {@link Rectangles} directly in the footnote. */
  readonly rectangles: Rectangles<Character>;
  /** {@link GraphicLines} directly in the footnote. */
  readonly graphicLines: GraphicLines<Character>;
  /** {@link TextFrames} directly in the footnote. */
  readonly textFrames: TextFrames<Character>;
  /** {@link Polygons} directly in the footnote. */
  readonly polygons: Polygons<Character>;
  /** {@link Groups} directly in the footnote. */
  readonly groups: Groups<Character>;
  /** {@link EPSTexts} directly in the footnote. */
  readonly epstexts: EPSTexts<Character>;
  /** {@link HiddenTexts} (conditional/hidden runs) in the footnote's content. */
  readonly hiddenTexts: HiddenTexts;
  /** The footnote's plain-text content. Assigning `NothingEnum.NOTHING` (or an array item of it) clears that portion. */
  get contents(): string | SpecialCharacters | Array<string | SpecialCharacters | NothingEnum>;
  set contents(value: string | SpecialCharacters | Array<string | SpecialCharacters | NothingEnum>);
  /** Deletes the footnote and its marker. */
  remove(): void;
  /** Converts the footnote to regular story text, inserted at the former marker location, and removes the footnote. */
  convertToText(): Text;
}


/**
 * The broadcast proxy for {@link Footnote} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Footnote} there.
 */
export interface FootnotePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (XmlStory | Cell | Story | TextFrame | EndnoteTextFrame | InsertionPoint)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<FootnotePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FootnotePlural, 'plural'>);
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
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): (string)[];
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): (void)[];
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): (string)[];
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): (string)[];
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'Footnote';
  /** Resolves the proxy into the individual {@link Footnote} objects it stands for. */
  getElements(): Footnote[];
  /** The unique ID of the footnote, stable across saves and reopens. */
  readonly id: (number)[];
  /** The {@link InsertionPoint} in the parent story where the footnote marker sits. */
  readonly storyOffset: (InsertionPoint)[];
  /** Every {@link PageItem} anywhere in the footnote's content. A snapshot array, not a live collection. */
  readonly allPageItems: (AnyPageItem[])[];
  /** Every {@link Graphic} anywhere in the footnote's content. A snapshot array, not a live collection. */
  readonly allGraphics: (AnyGraphic[])[];
  /** A collection of {@link TextColumn}s in the footnote's content. */
  readonly textColumns: TextColumns<Footnote>;
  /** A collection of {@link Text} objects spanning the footnote's content. */
  readonly texts: Texts<Footnote>;
  /** A collection of {@link TextStyleRange}s in the footnote's content. */
  readonly textStyleRanges: TextStyleRanges<Footnote>;
  /** A collection of {@link Paragraph}s in the footnote's content. */
  readonly paragraphs: Paragraphs<Footnote>;
  /** A collection of {@link Line}s in the footnote's content. */
  readonly lines: Lines<Footnote>;
  /** A collection of {@link Word}s in the footnote's content. */
  readonly words: Words<Footnote>;
  /** A collection of {@link Character}s in the footnote's content. */
  readonly characters: Characters<Footnote>;
  /** A collection of {@link InsertionPoint}s in the footnote's content. */
  readonly insertionPoints: InsertionPoints<Footnote>;
  /** {@link TextVariableInstances} resolved within the footnote's content. */
  readonly textVariableInstances: TextVariableInstances;
  /** {@link Ovals} (ellipses) directly in the footnote. */
  readonly ovals: Ovals<Character>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in the footnote. */
  readonly splineItems: SplineItems<Character>;
  /** All {@link PageItems} directly in the footnote, regardless of type. */
  readonly pageItems: PageItems<Character>;
  /** {@link Rectangles} directly in the footnote. */
  readonly rectangles: Rectangles<Character>;
  /** {@link GraphicLines} directly in the footnote. */
  readonly graphicLines: GraphicLines<Character>;
  /** {@link TextFrames} directly in the footnote. */
  readonly textFrames: TextFrames<Character>;
  /** {@link Polygons} directly in the footnote. */
  readonly polygons: Polygons<Character>;
  /** {@link Groups} directly in the footnote. */
  readonly groups: Groups<Character>;
  /** {@link EPSTexts} directly in the footnote. */
  readonly epstexts: EPSTexts<Character>;
  /** {@link HiddenTexts} (conditional/hidden runs) in the footnote's content. */
  readonly hiddenTexts: HiddenTexts;
  /** The footnote's plain-text content. Assigning `NothingEnum.NOTHING` (or an array item of it) clears that portion. */
  get contents(): (string | SpecialCharacters | Array<string | SpecialCharacters | NothingEnum>)[];
  set contents(value: string | SpecialCharacters | Array<string | SpecialCharacters | NothingEnum>);
  /** Deletes the footnote and its marker. */
  remove(): (void)[];
  /** Converts the footnote to regular story text, inserted at the former marker location, and removes the footnote. */
  convertToText(): (Text)[];
}
