/**
 * FootnoteOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { CharacterStyle } from './CharacterStyle';
import type { ParagraphStyle } from './ParagraphStyle';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { FootnoteFirstBaseline } from './Enums/FootnoteFirstBaseline';
import type { FootnoteMarkerPositioning } from './Enums/FootnoteMarkerPositioning';
import type { FootnoteNumberingStyle } from './Enums/FootnoteNumberingStyle';
import type { FootnotePrefixSuffix } from './Enums/FootnotePrefixSuffix';
import type { FootnoteRestarting } from './Enums/FootnoteRestarting';
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
 * Options for specifying default footnote formatting.
 */
export interface FootnoteOption {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: DocumentOrApplication;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<FootnoteOption, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FootnoteOption, 'single'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'FootnoteOption';
  /** Resolves the proxy into the individual {@link FootnoteOption} objects it stands for. */
  getElements(): FootnoteOption[];
  /** The numbering system footnote markers are drawn in — see {@link FootnoteNumberingStyle}. */
  get footnoteNumberingStyle(): FootnoteNumberingStyle | string;
  set footnoteNumberingStyle(value: FootnoteNumberingStyle | string);
  /** The number at which to start footnote numbering. */
  get startAt(): number;
  set startAt(value: number);
  /** The point at which to restart footnote numbering. */
  get restartNumbering(): FootnoteRestarting | string;
  set restartNumbering(value: FootnoteRestarting | string);
  /** The position of the footnote prefix and/or suffix. */
  get showPrefixSuffix(): FootnotePrefixSuffix | string;
  set showPrefixSuffix(value: FootnotePrefixSuffix | string);
  /** The prefix text of the footnote. (Limit: 0 to 100 characters). */
  get prefix(): string;
  set prefix(value: string);
  /** The suffix text of the footnote. (Limit: 0 to 100 characters). */
  get suffix(): string;
  set suffix(value: string);
  /** The paragraph style to apply to footnotes. Note: The space before and after the paragraph defined in the paragraph style is ignored for footnotes. To define space above and between footnotes, see spacer and space between. */
  get footnoteTextStyle(): ParagraphStyle;
  set footnoteTextStyle(value: ParagraphStyle);
  /** The character style to apply to footnote reference numbers in the main text. */
  get footnoteMarkerStyle(): CharacterStyle;
  set footnoteMarkerStyle(value: CharacterStyle);
  /** The position of footnote reference numbers in the main text. */
  get markerPositioning(): FootnoteMarkerPositioning | string;
  set markerPositioning(value: FootnoteMarkerPositioning | string);
  /** The text to insert between the footnote marker number and the footnote text. (Range: 0 to 100 characters). */
  get separatorText(): string;
  set separatorText(value: string);
  /** The amount of vertical space between footnotes. Note: The space before and space after defined for the paragraph style applied to the footnote is ignored. */
  get spaceBetween(): number;
  set spaceBetween(value: MeasurementValue);
  /** The minimum amount of vertical space between the bottom of the text column and the first footnote. Note: The space before amount defined in the paragraph style applied to the footnote is ignored for the first footnote. */
  get spacer(): number;
  set spacer(value: MeasurementValue);
  /** The distance between the top of the footnote container and the footnote text. */
  get footnoteFirstBaselineOffset(): FootnoteFirstBaseline;
  set footnoteFirstBaselineOffset(value: FootnoteFirstBaseline);
  /** The minimum distance between the baseline of the text and the top of the footnote container. */
  get footnoteMinimumFirstBaselineOffset(): number;
  set footnoteMinimumFirstBaselineOffset(value: MeasurementValue);
  /** If true, footnotes at the end of the story are placed just below the text. If false, footnotes at the end of the story are placed at the bottom of the column. */
  get eosPlacement(): boolean;
  set eosPlacement(value: boolean);
  /** If true, footnotes cannot split across columns. If false, footnotes flow into succeeding columns when the footnote text causes the footnote area to expand upward to reach the footnote reference number in the main text. */
  get noSplitting(): boolean;
  set noSplitting(value: boolean);
  /** If true, draws a rule between the text and the first footnote in the column. */
  get ruleOn(): boolean;
  set ruleOn(value: boolean);
  /** The stroke type of the rule above the first footnote in a column. Note: Valid when rule on is true. */
  get ruleType(): StrokeStyle;
  set ruleType(value: StrokeStyle | string);
  /** The stroke weight of the rule above the first footnote in the column. (Range: 0 to 1000) Note: Valid when rule on is true. */
  get ruleLineWeight(): number;
  set ruleLineWeight(value: MeasurementValue);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleColor(): Swatch;
  set ruleColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above the first footnote in the column. Note: Valid when rule type is not solid. */
  get ruleGapColor(): Swatch;
  set ruleGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule on is true. */
  get ruleTint(): number;
  set ruleTint(value: number);
  /** The tint (as a percentage) of the gap color of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule type is not solid. */
  get ruleGapTint(): number;
  set ruleGapTint(value: number);
  /** If true, overprints the gap color of the rule above the first footnote in the column. Note: Valid when rule type is not solid. */
  get ruleGapOverprint(): boolean;
  set ruleGapOverprint(value: boolean);
  /** If true, overprints the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleOverprint(): boolean;
  set ruleOverprint(value: boolean);
  /** The amount to left indent the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleLeftIndent(): number;
  set ruleLeftIndent(value: MeasurementValue);
  /** The length of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleWidth(): number;
  set ruleWidth(value: MeasurementValue);
  /** The vertical offset of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleOffset(): number;
  set ruleOffset(value: MeasurementValue);
  /** If true, draws a rule above footnote text that continues from a previous column. Note: Valid when no splitting is false or undefined. */
  get continuingRuleOn(): boolean;
  set continuingRuleOn(value: boolean);
  /** The stroke type of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleType(): StrokeStyle;
  set continuingRuleType(value: StrokeStyle | string);
  /** The stroke weight of the rule above continued footnote text. (Range: 0 to 1000) Note: Valid when continuing rule on is true. */
  get continuingRuleLineWeight(): number;
  set continuingRuleLineWeight(value: MeasurementValue);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleColor(): Swatch;
  set continuingRuleColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapColor(): Swatch;
  set continuingRuleGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid. */
  get continuingRuleTint(): number;
  set continuingRuleTint(value: number);
  /** The tint (as a percentage) of the gap color of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapTint(): number;
  set continuingRuleGapTint(value: number);
  /** If true, overprints the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleOverprint(): boolean;
  set continuingRuleOverprint(value: boolean);
  /** If true, overprints the gap color of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapOverprint(): boolean;
  set continuingRuleGapOverprint(value: boolean);
  /** The amount to left indent the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleLeftIndent(): number;
  set continuingRuleLeftIndent(value: MeasurementValue);
  /** The length of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleWidth(): number;
  set continuingRuleWidth(value: MeasurementValue);
  /** The vertical offset of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleOffset(): number;
  set continuingRuleOffset(value: MeasurementValue);
  /** If true, document will have straddling footnotes. If false, document will not have straddling footnotes. */
  get enableStraddling(): boolean;
  set enableStraddling(value: boolean);
}


/**
 * The broadcast proxy for {@link FootnoteOption} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link FootnoteOption} there.
 */
export interface FootnoteOptionPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (DocumentOrApplication)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<FootnoteOptionPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FootnoteOptionPlural, 'plural'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'FootnoteOption';
  /** Resolves the proxy into the individual {@link FootnoteOption} objects it stands for. */
  getElements(): FootnoteOption[];
  /** The numbering system footnote markers are drawn in — see {@link FootnoteNumberingStyle}. */
  get footnoteNumberingStyle(): (FootnoteNumberingStyle | string)[];
  set footnoteNumberingStyle(value: FootnoteNumberingStyle | string);
  /** The number at which to start footnote numbering. */
  get startAt(): (number)[];
  set startAt(value: number);
  /** The point at which to restart footnote numbering. */
  get restartNumbering(): (FootnoteRestarting | string)[];
  set restartNumbering(value: FootnoteRestarting | string);
  /** The position of the footnote prefix and/or suffix. */
  get showPrefixSuffix(): (FootnotePrefixSuffix | string)[];
  set showPrefixSuffix(value: FootnotePrefixSuffix | string);
  /** The prefix text of the footnote. (Limit: 0 to 100 characters). */
  get prefix(): (string)[];
  set prefix(value: string);
  /** The suffix text of the footnote. (Limit: 0 to 100 characters). */
  get suffix(): (string)[];
  set suffix(value: string);
  /** The paragraph style to apply to footnotes. Note: The space before and after the paragraph defined in the paragraph style is ignored for footnotes. To define space above and between footnotes, see spacer and space between. */
  get footnoteTextStyle(): (ParagraphStyle)[];
  set footnoteTextStyle(value: ParagraphStyle);
  /** The character style to apply to footnote reference numbers in the main text. */
  get footnoteMarkerStyle(): (CharacterStyle)[];
  set footnoteMarkerStyle(value: CharacterStyle);
  /** The position of footnote reference numbers in the main text. */
  get markerPositioning(): (FootnoteMarkerPositioning | string)[];
  set markerPositioning(value: FootnoteMarkerPositioning | string);
  /** The text to insert between the footnote marker number and the footnote text. (Range: 0 to 100 characters). */
  get separatorText(): (string)[];
  set separatorText(value: string);
  /** The amount of vertical space between footnotes. Note: The space before and space after defined for the paragraph style applied to the footnote is ignored. */
  get spaceBetween(): (number)[];
  set spaceBetween(value: MeasurementValue);
  /** The minimum amount of vertical space between the bottom of the text column and the first footnote. Note: The space before amount defined in the paragraph style applied to the footnote is ignored for the first footnote. */
  get spacer(): (number)[];
  set spacer(value: MeasurementValue);
  /** The distance between the top of the footnote container and the footnote text. */
  get footnoteFirstBaselineOffset(): (FootnoteFirstBaseline)[];
  set footnoteFirstBaselineOffset(value: FootnoteFirstBaseline);
  /** The minimum distance between the baseline of the text and the top of the footnote container. */
  get footnoteMinimumFirstBaselineOffset(): (number)[];
  set footnoteMinimumFirstBaselineOffset(value: MeasurementValue);
  /** If true, footnotes at the end of the story are placed just below the text. If false, footnotes at the end of the story are placed at the bottom of the column. */
  get eosPlacement(): (boolean)[];
  set eosPlacement(value: boolean);
  /** If true, footnotes cannot split across columns. If false, footnotes flow into succeeding columns when the footnote text causes the footnote area to expand upward to reach the footnote reference number in the main text. */
  get noSplitting(): (boolean)[];
  set noSplitting(value: boolean);
  /** If true, draws a rule between the text and the first footnote in the column. */
  get ruleOn(): (boolean)[];
  set ruleOn(value: boolean);
  /** The stroke type of the rule above the first footnote in a column. Note: Valid when rule on is true. */
  get ruleType(): (StrokeStyle)[];
  set ruleType(value: StrokeStyle | string);
  /** The stroke weight of the rule above the first footnote in the column. (Range: 0 to 1000) Note: Valid when rule on is true. */
  get ruleLineWeight(): (number)[];
  set ruleLineWeight(value: MeasurementValue);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleColor(): (Swatch)[];
  set ruleColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above the first footnote in the column. Note: Valid when rule type is not solid. */
  get ruleGapColor(): (Swatch)[];
  set ruleGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule on is true. */
  get ruleTint(): (number)[];
  set ruleTint(value: number);
  /** The tint (as a percentage) of the gap color of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule type is not solid. */
  get ruleGapTint(): (number)[];
  set ruleGapTint(value: number);
  /** If true, overprints the gap color of the rule above the first footnote in the column. Note: Valid when rule type is not solid. */
  get ruleGapOverprint(): (boolean)[];
  set ruleGapOverprint(value: boolean);
  /** If true, overprints the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleOverprint(): (boolean)[];
  set ruleOverprint(value: boolean);
  /** The amount to left indent the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleLeftIndent(): (number)[];
  set ruleLeftIndent(value: MeasurementValue);
  /** The length of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleWidth(): (number)[];
  set ruleWidth(value: MeasurementValue);
  /** The vertical offset of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleOffset(): (number)[];
  set ruleOffset(value: MeasurementValue);
  /** If true, draws a rule above footnote text that continues from a previous column. Note: Valid when no splitting is false or undefined. */
  get continuingRuleOn(): (boolean)[];
  set continuingRuleOn(value: boolean);
  /** The stroke type of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleType(): (StrokeStyle)[];
  set continuingRuleType(value: StrokeStyle | string);
  /** The stroke weight of the rule above continued footnote text. (Range: 0 to 1000) Note: Valid when continuing rule on is true. */
  get continuingRuleLineWeight(): (number)[];
  set continuingRuleLineWeight(value: MeasurementValue);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleColor(): (Swatch)[];
  set continuingRuleColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapColor(): (Swatch)[];
  set continuingRuleGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid. */
  get continuingRuleTint(): (number)[];
  set continuingRuleTint(value: number);
  /** The tint (as a percentage) of the gap color of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapTint(): (number)[];
  set continuingRuleGapTint(value: number);
  /** If true, overprints the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleOverprint(): (boolean)[];
  set continuingRuleOverprint(value: boolean);
  /** If true, overprints the gap color of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapOverprint(): (boolean)[];
  set continuingRuleGapOverprint(value: boolean);
  /** The amount to left indent the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleLeftIndent(): (number)[];
  set continuingRuleLeftIndent(value: MeasurementValue);
  /** The length of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleWidth(): (number)[];
  set continuingRuleWidth(value: MeasurementValue);
  /** The vertical offset of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleOffset(): (number)[];
  set continuingRuleOffset(value: MeasurementValue);
  /** If true, document will have straddling footnotes. If false, document will not have straddling footnotes. */
  get enableStraddling(): (boolean)[];
  set enableStraddling(value: boolean);
}
