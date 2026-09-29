/**
 * Properties.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { BaseCollection } from './Collections';
import type { MeasurementValue, FilePath, File, FolderPath, Folder, Mode } from './Types';
import type { Font } from '../Font';
import type { ParagraphStyle } from '../ParagraphStyle';
import type { NumberingList } from '../NumberingList';
import type { XMLTag } from '../XMLTag';
import type { NamedGrid } from '../NamedGrid';
import type { InsertionPoint } from '../InsertionPoint';
import type { Text } from '../Text';
import type { PageItem } from '../PageItem';
import type { ICCProfiles } from '../Enums/ICCProfiles';
import type { Language } from '../Language';
import type { LanguageWithVendors } from '../LanguageWithVendors';
import type { Layer } from '../Layer';
import type { MasterSpread } from '../MasterSpread';
import type { ObjectStyle } from '../ObjectStyle';
import type { CharacterStyle } from '../CharacterStyle';
import type { TableStyle } from '../TableStyle';
import type { CellStyle } from '../CellStyle';
import type { TextFrame } from '../TextFrame';
import type { TextPath } from '../TextPath';
import type { NothingEnum } from '../Enums/NothingEnum';
import type { SpecialCharacters } from '../Enums/SpecialCharacters';
import type { TextFrameContents } from '../Enums/TextFrameContents';
import type { Swatch } from '../Swatch';
import type { StrokeStyle } from '../StrokeStyle';
import type { Profile } from '../Enums/Profile';
import type { Condition } from '../Condition';

/**
 * Lets a property that reads back an object — a swatch, style, font or tag — also be *set*
 * by that object's name.
 *
 * Only where the property really does hold such an object: `ChangeColorPreference.changeTo`
 * is a {@link Swatch} and takes a swatch name, while `ChangeTextPreference.changeTo` is
 * already a plain string and is unaffected.
 */
type ByName<Value, Target> = Value extends Target ? string : never;

/**
 * The find/change preference objects work the other way round: a property such as
 * `appliedParagraphStyle` reads back the style's *name* there, and accepts the
 * {@link ParagraphStyle} object itself on assignment.
 *
 * Everywhere else the same property reads back the object and accepts its name — see
 * {@link ByName}.
 */
type ByObject<Value, Target> = Value extends string ? Target : never;

/**
 * The find/change preference sets, each of which can be cleared in one assignment by
 * setting it to {@link NothingEnum.NOTHING}.
 */
type PreferenceResetKey =
  | 'findTextPreferences' | 'changeTextPreferences'
  | 'findGrepPreferences' | 'changeGrepPreferences'
  | 'findGlyphPreferences' | 'changeGlyphPreferences'
  | 'findObjectPreferences' | 'changeObjectPreferences'
  | 'findColorPreferences' | 'changeColorPreferences'
  | 'findTransliteratePreferences' | 'changeTransliteratePreferences'
  | 'findChangeTextOptions' | 'findChangeGrepOptions'
  | 'findChangeGlyphOptions' | 'findChangeObjectOptions'
  | 'findChangeColorOptions' | 'findChangeTransliterateOptions';

/** Keys whose value, when it is a {@link Swatch}, is settable by swatch name. */
type SwatchKey =
  | 'fillColor' | 'strokeColor' | 'gapColor'
  | 'topBorderStrokeColor' | 'topBorderStrokeGapColor'
  | 'bottomBorderStrokeColor' | 'bottomBorderStrokeGapColor'
  | 'leftBorderStrokeColor' | 'leftBorderStrokeGapColor'
  | 'rightBorderStrokeColor' | 'rightBorderStrokeGapColor'
  | 'topEdgeStrokeColor' | 'topEdgeStrokeGapColor'
  | 'bottomEdgeStrokeColor' | 'bottomEdgeStrokeGapColor'
  | 'leftEdgeStrokeColor' | 'leftEdgeStrokeGapColor'
  | 'rightEdgeStrokeColor' | 'rightEdgeStrokeGapColor'
  | 'innerRowStrokeColor' | 'innerRowStrokeGapColor'
  | 'innerColumnStrokeColor' | 'innerColumnStrokeGapColor'
  | 'diagonalLineStrokeColor' | 'diagonalLineStrokeGapColor'
  | 'underlineColor' | 'underlineGapColor'
  | 'strikeThroughColor' | 'strikeThroughGapColor'
  | 'kentenFillColor' | 'kentenStrokeColor'
  | 'rubyFill' | 'rubyStroke'
  | 'ruleAboveColor' | 'ruleAboveGapColor'
  | 'ruleBelowColor' | 'ruleBelowGapColor'
  | 'ruleColor' | 'ruleGapColor'
  | 'continuingRuleColor' | 'continuingRuleGapColor'
  | 'paragraphBorderColor' | 'paragraphBorderGapColor'
  | 'paragraphShadingColor'
  | 'appliedMathMLSwatch'
  | 'changeTo' | 'findWhat';

/** Keys whose value, when it is a {@link StrokeStyle}, is settable by style name. */
type StrokeStyleKey =
  | 'strokeType'
  | 'topEdgeStrokeType' | 'bottomEdgeStrokeType'
  | 'leftEdgeStrokeType' | 'rightEdgeStrokeType'
  | 'innerRowStrokeType' | 'innerColumnStrokeType'
  | 'diagonalLineStrokeType'
  | 'topBorderStrokeType' | 'bottomBorderStrokeType'
  | 'leftBorderStrokeType' | 'rightBorderStrokeType'
  | 'startRowStrokeType' | 'endRowStrokeType'
  | 'startColumnStrokeType' | 'endColumnLineStyle'
  | 'underlineType' | 'strikeThroughType'
  | 'ruleAboveType' | 'ruleBelowType' | 'ruleType' | 'continuingRuleType'
  | 'paragraphBorderType';

/**
 * The extra values a property accepts on assignment beyond what it reads back.
 *
 * A measurement property gettable as a number also takes `'3pt'`; a property holding a swatch,
 * style, font or tag also takes that object's name; a find/change preference set can be
 * cleared with {@link NothingEnum.NOTHING}.
 */
type FlexSetter<Key, Value> =
  Key extends PreferenceResetKey ? Value | NothingEnum | null
  : Key extends 'appliedParagraphStyle' ? ByName<Value, ParagraphStyle> | ByObject<Value, ParagraphStyle>
  : Key extends 'appliedCharacterStyle' ? ByName<Value, CharacterStyle> | ByObject<Value, CharacterStyle>
  : Key extends 'appliedObjectStyles' ? ByObject<Value, ObjectStyle>
  : Key extends 'markupTag' ? ByName<Value, XMLTag> | ByObject<Value, XMLTag>
  : Key extends SwatchKey ? ByName<Value, Swatch> | ByObject<Value, Swatch>
  : Key extends StrokeStyleKey ? ByName<Value, StrokeStyle>
  : Key extends 'appliedFont' | 'kentenFont' | 'rubyFont' | 'bulletsFont' ? ByName<Value, Font>
  : Key extends 'bulletsCharacterStyle' | 'numberingCharacterStyle' | 'dropCapStyle' ? ByName<Value, CharacterStyle>
  : Key extends 'titleStyle' ? ByName<Value, ParagraphStyle>
  : Key extends 'appliedCellStyle' | 'headerRegionCellStyle' | 'footerRegionCellStyle'
      | 'bodyRegionCellStyle' | 'leftColumnRegionCellStyle' | 'rightColumnRegionCellStyle'
      | 'headerColumnCellStyle' ? ByName<Value, CellStyle>
  : Key extends 'appliedTableStyle' ? ByName<Value, TableStyle>
  : Key extends 'appliedObjectStyle' | 'appliedGraphicObjectStyle'
      | 'appliedTextObjectStyle' | 'appliedGridObjectStyle' ? ByName<Value, ObjectStyle>
  : Key extends 'appliedNumberingList' ? ByName<Value, NumberingList>
  : Key extends 'appliedNamedGrid' ? ByName<Value, NamedGrid>
  : Key extends 'appliedConditions' ? (Condition | string)[]
  : Key extends 'mappedStyle' ? string
  : Key extends 'pointSize' ? number | string
  : Key extends 'appliedLanguage' ? LanguageWithVendors | Language | string
  : Key extends 'itemLayer' | 'activeLayer' ? Layer | string
  : Key extends 'contents' ? string | TextFrameContents | SpecialCharacters | PageItem | NothingEnum | (string | SpecialCharacters | PageItem | NothingEnum)[]
  : Key extends 'previousTextFrame' | 'nextTextFrame' ? TextFrame | TextPath | NothingEnum
  : Key extends 'appliedMaster' ? MasterSpread | string | NothingEnum
  : Key extends 'primaryTextFrame' ? PageItem | string | NothingEnum
  : Key extends 'destinationText' ? InsertionPoint | Text
  : Key extends 'selection' ? Value extends readonly (infer E)[] ? E | NothingEnum : never
  : Key extends 'includeICCProfiles' ? boolean
  : Key extends 'entirePath' ? (MeasurementValue[] | MeasurementValue[][])[]
  : Key extends 'profile' ? Profile | string
  : never;

/**
 * Any property you read back as a number (or array of numbers) can be *set* with a unit
 * string instead — `'3pt'`, `'1in'`, `'10mm'` — or with a raw number in the document's
 * current measurement units. Applies to every measurement property in the DOM.
 */
type MeasurementWiden<V> =
  V extends number ? MeasurementValue
  : V extends number[] ? MeasurementValue[]
  : never;

/**
 * A {@link CharacterStyle} or {@link CellStyle} carries only the attributes actually set on
 * it, so an object-valued attribute that was never set reads back `null`. Assign
 * {@link NothingEnum.NOTHING} to clear one back to unset.
 */
type SparseStyleWiden<V> = [null] extends [V] ? NothingEnum : never;

/**
 * Any property you read back as a {@link File} or {@link Folder} — which arrives as a promise
 * you `await` — is *set* with a plain path string instead. Applies to every path property in
 * the DOM.
 */
type PathWiden<V> =
  V extends Promise<File> ? FilePath
  : V extends Promise<Folder> ? FolderPath
  : never;

/**
 * One item's worth of a value that a plural proxy reports as an array — the type you get
 * back from a single object rather than from `everyItem()`.
 */
type Unplural<M extends Mode, V> = M extends 'plural'
  ? V extends readonly (infer U)[] ? U : V
  : V;

//Remove methods
/**
 * The property names of a type, with its methods left out.
 */
type NonMethodKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K;
}[keyof T];
//Remove collections
/**
 * The property names of a type, with its child collections left out — a collection is
 * reached, not assigned.
 */
type NonCollections<T> = {
  [K in keyof T]: T[K] extends BaseCollection<any> ? never : K;
}[keyof T];
//Other excluded members of the base type
/**
 * The two members no property bag carries: `isValid` and `properties` itself.
 */
type ExcludedProperties = 'isValid' | 'properties';
/**
 * Every property name except the two a property bag never carries.
 */
type NonExcluded<T> = Exclude<keyof T, ExcludedProperties>;

/**
 * The property names a `properties` bag actually contains: no methods, no collections,
 * and neither `isValid` nor `properties`.
 */
type ValidKeys<T> = NonMethodKeys<T> & NonCollections<T> & NonExcluded<T>;


/**
 * The full, readable property set of `T` returned by `object.properties`.
 * Excludes `isValid` and `properties`.
 */
export type PropertiesGetter<T, M extends Mode = 'single'> = {
  [K in Exclude<keyof T, ExcludedProperties>]: Unplural<M, T[K]>;
};

/**
 * A nested settings object inside a property bag, which may itself be written as a plain
 * object literal rather than assigned member by member.
 */
type NestedBag<V> =
  V extends readonly unknown[] ? never
  : V extends (...args: never[]) => unknown ? never
  : V extends BaseCollection<unknown> ? never
  : V extends object ? Bag<V>
  : never;

/**
 * The object literal form of a type's settable properties, used by `properties = {…}` and by
 * a collection's `add(…, withProperties)`.
 */
type Bag<T> = {
  [K in keyof T as K extends ValidKeys<T> ? (K extends 'parent' ? never : K) : never]?:
    | FlexSetter<K, T[K]>
    | MeasurementWiden<T[K]>
    | PathWiden<T[K]>
    | NestedBag<T[K]>
    | T[K];
};

/**
 * The object literal accepted by `object.properties = {...}` and by collection `add(...,
 * withProperties)`.
 *
 * Methods, collections, `isValid`, and `properties` are left out. Some keys accept a wider
 * value here than their getter returns: an object-or-name property (a style, swatch, font,
 * or tag) takes either the object or its name, a measurement property takes a plain number
 * or a unit string such as `'3pt'`, and a path property takes a plain path string.
 * @remarks
 * Assigning an object literal is equivalent to setting each key individually
 * but can be far faster, since it is dispatched as a single API call. Read-only,
 * nonexistent, and generally invalid properties are silently ignored.
 *
 * **Contextual instability:** a property that is valid in general but unavailable in
 * the current context (for example `geometricBounds` on an anchored frame inside
 * overset text) makes the whole assignment non-deterministic — some keys apply,
 * others are silently dropped, with no error and no indication of which
 * succeeded. Validate context-sensitive properties before batch assignment.
 */
export type PropertiesSetter<T, M extends Mode = 'single'> = {
  [K in keyof T as K extends ValidKeys<T> ? K : never]?:
    | FlexSetter<K, Unplural<M, T[K]>>
    | MeasurementWiden<Unplural<M, T[K]>>
    | PathWiden<Unplural<M, T[K]>>
    | SparseStyleWiden<Unplural<M, T[K]>>
    | NestedBag<Unplural<M, T[K]>>
    | Unplural<M, T[K]>;
};
