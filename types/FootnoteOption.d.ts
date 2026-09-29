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

/**
 * Options for specifying default footnote formatting.
 */
export interface FootnoteOption<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FootnoteOption';

  /** Resolves the proxy into the individual {@link FootnoteOption} objects it stands for. */
  getElements(): FootnoteOption<'single'>[];

  /** The numbering system footnote markers are drawn in — see {@link FootnoteNumberingStyle}. */
  get footnoteNumberingStyle(): Read<M, FootnoteNumberingStyle | string>;
  set footnoteNumberingStyle(value: FootnoteNumberingStyle | string);

  /** The number at which to start footnote numbering. */
  get startAt(): Read<M, number>;
  set startAt(value: number);

  /** The point at which to restart footnote numbering. */
  get restartNumbering(): Read<M, FootnoteRestarting | string>;
  set restartNumbering(value: FootnoteRestarting | string);

  /** The position of the footnote prefix and/or suffix. */
  get showPrefixSuffix(): Read<M, FootnotePrefixSuffix | string>;
  set showPrefixSuffix(value: FootnotePrefixSuffix | string);

  /** The prefix text of the footnote. (Limit: 0 to 100 characters). */
  get prefix(): Read<M, string>;
  set prefix(value: string);

  /** The suffix text of the footnote. (Limit: 0 to 100 characters). */
  get suffix(): Read<M, string>;
  set suffix(value: string);

  /** The paragraph style to apply to footnotes. Note: The space before and after the paragraph defined in the paragraph style is ignored for footnotes. To define space above and between footnotes, see spacer and space between. */
  get footnoteTextStyle(): Read<M, ParagraphStyle>;
  set footnoteTextStyle(value: ParagraphStyle);

  /** The character style to apply to footnote reference numbers in the main text. */
  get footnoteMarkerStyle(): Read<M, CharacterStyle>;
  set footnoteMarkerStyle(value: CharacterStyle);

  /** The position of footnote reference numbers in the main text. */
  get markerPositioning(): Read<M, FootnoteMarkerPositioning | string>;
  set markerPositioning(value: FootnoteMarkerPositioning | string);

  /** The text to insert between the footnote marker number and the footnote text. (Range: 0 to 100 characters). */
  get separatorText(): Read<M, string>;
  set separatorText(value: string);

  /** The amount of vertical space between footnotes. Note: The space before and space after defined for the paragraph style applied to the footnote is ignored. */
  get spaceBetween(): Read<M, number>;
  set spaceBetween(value: MeasurementValue);

  /** The minimum amount of vertical space between the bottom of the text column and the first footnote. Note: The space before amount defined in the paragraph style applied to the footnote is ignored for the first footnote. */
  get spacer(): Read<M, number>;
  set spacer(value: MeasurementValue);

  /** The distance between the top of the footnote container and the footnote text. */
  get footnoteFirstBaselineOffset(): Read<M, FootnoteFirstBaseline>;
  set footnoteFirstBaselineOffset(value: FootnoteFirstBaseline);

  /** The minimum distance between the baseline of the text and the top of the footnote container. */
  get footnoteMinimumFirstBaselineOffset(): Read<M, number>;
  set footnoteMinimumFirstBaselineOffset(value: MeasurementValue);

  /** If true, footnotes at the end of the story are placed just below the text. If false, footnotes at the end of the story are placed at the bottom of the column. */
  get eosPlacement(): Read<M, boolean>;
  set eosPlacement(value: boolean);

  /** If true, footnotes cannot split across columns. If false, footnotes flow into succeeding columns when the footnote text causes the footnote area to expand upward to reach the footnote reference number in the main text. */
  get noSplitting(): Read<M, boolean>;
  set noSplitting(value: boolean);

  /** If true, draws a rule between the text and the first footnote in the column. */
  get ruleOn(): Read<M, boolean>;
  set ruleOn(value: boolean);

  /** The stroke type of the rule above the first footnote in a column. Note: Valid when rule on is true. */
  get ruleType(): Read<M, StrokeStyle>;
  set ruleType(value: StrokeStyle | string);

  /** The stroke weight of the rule above the first footnote in the column. (Range: 0 to 1000) Note: Valid when rule on is true. */
  get ruleLineWeight(): Read<M, number>;
  set ruleLineWeight(value: MeasurementValue);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleColor(): Read<M, Swatch>;
  set ruleColor(value: Swatch | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above the first footnote in the column. Note: Valid when rule type is not solid. */
  get ruleGapColor(): Read<M, Swatch>;
  set ruleGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule on is true. */
  get ruleTint(): Read<M, number>;
  set ruleTint(value: number);

  /** The tint (as a percentage) of the gap color of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule type is not solid. */
  get ruleGapTint(): Read<M, number>;
  set ruleGapTint(value: number);

  /** If true, overprints the gap color of the rule above the first footnote in the column. Note: Valid when rule type is not solid. */
  get ruleGapOverprint(): Read<M, boolean>;
  set ruleGapOverprint(value: boolean);

  /** If true, overprints the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleOverprint(): Read<M, boolean>;
  set ruleOverprint(value: boolean);

  /** The amount to left indent the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleLeftIndent(): Read<M, number>;
  set ruleLeftIndent(value: MeasurementValue);

  /** The length of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleWidth(): Read<M, number>;
  set ruleWidth(value: MeasurementValue);

  /** The vertical offset of the rule above the first footnote in the column. Note: Valid when rule on is true. */
  get ruleOffset(): Read<M, number>;
  set ruleOffset(value: MeasurementValue);

  /** If true, draws a rule above footnote text that continues from a previous column. Note: Valid when no splitting is false or undefined. */
  get continuingRuleOn(): Read<M, boolean>;
  set continuingRuleOn(value: boolean);

  /** The stroke type of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleType(): Read<M, StrokeStyle>;
  set continuingRuleType(value: StrokeStyle | string);

  /** The stroke weight of the rule above continued footnote text. (Range: 0 to 1000) Note: Valid when continuing rule on is true. */
  get continuingRuleLineWeight(): Read<M, number>;
  set continuingRuleLineWeight(value: MeasurementValue);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleColor(): Read<M, Swatch>;
  set continuingRuleColor(value: Swatch | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapColor(): Read<M, Swatch>;
  set continuingRuleGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid. */
  get continuingRuleTint(): Read<M, number>;
  set continuingRuleTint(value: number);

  /** The tint (as a percentage) of the gap color of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapTint(): Read<M, number>;
  set continuingRuleGapTint(value: number);

  /** If true, overprints the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleOverprint(): Read<M, boolean>;
  set continuingRuleOverprint(value: boolean);

  /** If true, overprints the gap color of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. */
  get continuingRuleGapOverprint(): Read<M, boolean>;
  set continuingRuleGapOverprint(value: boolean);

  /** The amount to left indent the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleLeftIndent(): Read<M, number>;
  set continuingRuleLeftIndent(value: MeasurementValue);

  /** The length of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleWidth(): Read<M, number>;
  set continuingRuleWidth(value: MeasurementValue);

  /** The vertical offset of the rule above continued footnote text. Note: Valid when continuing rule on is true. */
  get continuingRuleOffset(): Read<M, number>;
  set continuingRuleOffset(value: MeasurementValue);

  /** If true, document will have straddling footnotes. If false, document will not have straddling footnotes. */
  get enableStraddling(): Read<M, boolean>;
  set enableStraddling(value: boolean);
}
