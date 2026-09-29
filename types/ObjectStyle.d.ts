/**
 * ObjectStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { ObjectStyleGroup } from './ObjectStyleGroup';
import type { GraphicAttributesBase } from './_base/GraphicAttributes';
import type { ObjectStyleExportTagMaps } from './ObjectStyleExportTagMaps';
import type { Preferences } from './Preferences';
import type { ObjectExportOption } from './ObjectExportOption';
import type { TransparencySetting } from './TransparencySetting';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { ObjectStyleObjectEffectsCategorySettings } from './ObjectStyleObjectEffectsCategorySettings';
import type { ObjectStyleStrokeEffectsCategorySettings } from './ObjectStyleStrokeEffectsCategorySettings';
import type { ObjectStyleFillEffectsCategorySettings } from './ObjectStyleFillEffectsCategorySettings';
import type { ObjectStyleContentEffectsCategorySettings } from './ObjectStyleContentEffectsCategorySettings';
import type { TransformAttributeOption } from './TransformAttributeOption';
import type { FlexLayoutAttributeOption } from './FlexLayoutAttributeOption';
import type { TextFramePreference } from './TextFramePreference';
import type { BaselineFrameGridOption } from './BaselineFrameGridOption';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { StoryPreference } from './StoryPreference';
import type { FrameFittingOption } from './FrameFittingOption';
import type { ParagraphStyle } from './ParagraphStyle';
import type { LocationOptions } from './Enums/LocationOptions';
import type { EpubAriaLabelSourceType } from './Enums/EpubAriaLabelSourceType';
import type { DimensionAttributes } from './Enums/DimensionAttributes';
import type { PositionAttributes } from './Enums/PositionAttributes';
import type { ObjectStyles } from './ObjectStyles';
import type { FlexObject } from './FlexObject';

/**
 * A named object style definition, held in a document's or the application's {@link ObjectStyles} collection (optionally nested inside an {@link ObjectStyleGroup}).
 *
 * An enabling flag gates each category independently — {@link enableFill}, {@link enableStroke},
 * {@link enableParagraphStyle}, and similar — so applying the style overrides only the
 * categories it enables, leaving everything else on the target object untouched.
 *
 * It carries the same fill, stroke, gradient, overprint, corner-effect and arrowhead
 * attributes any drawable object has, but none of the geometry — a gradient's start point and
 * length, and the dash-and-gap pattern, belong to the drawn object rather than to the style.
 */
export interface ObjectStyle<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | ObjectStyleGroup, M>,
    IndexedDOMObject<Document | Application | ObjectStyleGroup, M>,
    GraphicAttributesBase<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyle';

  /** Resolves the proxy into the individual {@link ObjectStyle} objects it stands for. */
  getElements(): ObjectStyle<'single'>[];

  /** The unique ID of the object style, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the object style. */
  get name(): Read<M, string>;
  set name(value: string);

  /** The style this style is based on. Accepts an {@link ObjectStyle} or its name. */
  get basedOn(): Read<M, ObjectStyle | string>;
  set basedOn(value: ObjectStyle | string);

  /** A collection of object style export tag maps, mapping the style to markup tags for each export format. */
  readonly objectStyleExportTagMaps: ObjectStyleExportTagMaps;

  /** A collection of preferences objects holding this style's default settings for each preference category. */
  readonly preferences: Preferences;

  /** Export options (alt text, tagging, reflowable-format conversion) applied by this style. */
  readonly objectExportOptions: Read<M, ObjectExportOption>;

  /** Transparency settings applied by this style. */
  readonly transparencySettings: Read<M, TransparencySetting>;

  /** Stroke transparency settings applied by this style. */
  readonly strokeTransparencySettings: Read<M, StrokeTransparencySetting>;

  /** Fill transparency settings applied by this style. */
  readonly fillTransparencySettings: Read<M, FillTransparencySetting>;

  /** Content (placed graphic or text) transparency settings applied by this style. */
  readonly contentTransparencySettings: Read<M, ContentTransparencySetting>;

  /** Which object-effect categories this style enables. */
  readonly objectEffectsEnablingSettings: Read<M, ObjectStyleObjectEffectsCategorySettings>;

  /** Which stroke-effect categories this style enables. */
  readonly strokeEffectsEnablingSettings: Read<M, ObjectStyleStrokeEffectsCategorySettings>;

  /** Which fill-effect categories this style enables. */
  readonly fillEffectsEnablingSettings: Read<M, ObjectStyleFillEffectsCategorySettings>;

  /** Which content-effect categories this style enables. */
  readonly contentEffectsEnablingSettings: Read<M, ObjectStyleContentEffectsCategorySettings>;

  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): Read<M, boolean>;
  set includeClass(value: boolean);

  /** The ARIA role to emit for objects in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): Read<M, string>;
  set epubAriaRole(value: string);

  /** The ARIA label to emit for objects in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaLabel(): Read<M, string>;
  set epubAriaLabel(value: string);

  /** The source used to generate the ARIA label during EPUB export. */
  get epubAriaLabelSourceType(): Read<M, EpubAriaLabelSourceType>;
  set epubAriaLabelSourceType(value: EpubAriaLabelSourceType);

  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): Read<M, boolean>;
  set emitCss(value: boolean);

  /** The dimension and position attribute overrides this style applies to any page item it is used on. */
  get transformAttributeOptions(): Read<M, TransformAttributeOption>;
  set transformAttributeOptions(value: TransformAttributeOption);

  /** If `true`, this style enables its {@link transformAttributeOptions} (dimension and position) overrides. */
  get enableTransformAttributes(): Read<M, boolean>;
  set enableTransformAttributes(value: boolean);

  /** If `true`, this style enables auto-sizing text frame options. */
  get enableTextFrameAutoSizingOptions(): Read<M, boolean>;
  set enableTextFrameAutoSizingOptions(value: boolean);

  /** If `true`, this style enables text frame column rule options. */
  get enableTextFrameColumnRuleOptions(): Read<M, boolean>;
  set enableTextFrameColumnRuleOptions(value: boolean);

  /** If `true`, this style enables its {@link flexLayoutAttributeOptions} on a {@link FlexObject}. */
  get enableFlexLayoutAttributes(): Read<M, boolean>;
  set enableFlexLayoutAttributes(value: boolean);

  /** The flex layout attribute overrides this style applies to a {@link FlexObject}. */
  get flexLayoutAttributeOptions(): Read<M, FlexLayoutAttributeOption>;
  set flexLayoutAttributeOptions(value: FlexLayoutAttributeOption);

  /** If `true`, this style applies an EPUB export tag and CSS class. */
  get enableExportTagging(): Read<M, boolean>;
  set enableExportTagging(value: boolean);

  /** If `true`, this style applies alt-text export options. */
  get enableObjectExportAltTextOptions(): Read<M, boolean>;
  set enableObjectExportAltTextOptions(value: boolean);

  /** If `true`, this style applies tagged-PDF export options. */
  get enableObjectExportTaggedPdfOptions(): Read<M, boolean>;
  set enableObjectExportTaggedPdfOptions(value: boolean);

  /** If `true`, this style applies EPUB export options. */
  get enableObjectExportEpubOptions(): Read<M, boolean>;
  set enableObjectExportEpubOptions(value: boolean);

  /** The paragraph style this object style applies to the frame's text. Accepts a {@link ParagraphStyle} or its name. */
  get appliedParagraphStyle(): Read<M, ParagraphStyle | string>;
  set appliedParagraphStyle(value: ParagraphStyle | string);

  /**
   * If `true`, applies each paragraph's {@link ParagraphStyle.nextStyle} chain
   * starting from {@link appliedParagraphStyle}'s next style, rather than
   * reapplying {@link appliedParagraphStyle} to every paragraph.
   */
  get applyNextParagraphStyle(): Read<M, boolean>;
  set applyNextParagraphStyle(value: boolean);

  /** If `true`, this style enables its fill attributes. */
  get enableFill(): Read<M, boolean>;
  set enableFill(value: boolean);

  /** If `true`, this style enables its stroke attributes. */
  get enableStroke(): Read<M, boolean>;
  set enableStroke(value: boolean);

  /** If `true`, this style enables {@link appliedParagraphStyle}. */
  get enableParagraphStyle(): Read<M, boolean>;
  set enableParagraphStyle(value: boolean);

  /** If `true`, this style enables general text frame options. */
  get enableTextFrameGeneralOptions(): Read<M, boolean>;
  set enableTextFrameGeneralOptions(value: boolean);

  /** If `true`, this style enables baseline text frame options. */
  get enableTextFrameBaselineOptions(): Read<M, boolean>;
  set enableTextFrameBaselineOptions(value: boolean);

  /** If `true`, this style enables its {@link storyPreferences}. */
  get enableStoryOptions(): Read<M, boolean>;
  set enableStoryOptions(value: boolean);

  /** If `true`, this style enables its {@link textWrapPreferences} plus contour and non-printing settings. */
  get enableTextWrapAndOthers(): Read<M, boolean>;
  set enableTextWrapAndOthers(value: boolean);

  /** If `true`, this style enables its {@link anchoredObjectSettings}. */
  get enableAnchoredObjectOptions(): Read<M, boolean>;
  set enableAnchoredObjectOptions(value: boolean);

  /** Text frame preference settings this style applies. */
  get textFramePreferences(): Read<M, TextFramePreference>;
  set textFramePreferences(value: TextFramePreference);

  /** Baseline frame grid option settings this style applies. */
  get baselineFrameGridOptions(): Read<M, BaselineFrameGridOption>;
  set baselineFrameGridOptions(value: BaselineFrameGridOption);

  /** Anchored object settings this style applies. */
  get anchoredObjectSettings(): Read<M, AnchoredObjectSetting>;
  set anchoredObjectSettings(value: AnchoredObjectSetting);

  /** Default text wrap settings this style applies for wrapping text around the object. */
  get textWrapPreferences(): Read<M, TextWrapPreference>;
  set textWrapPreferences(value: TextWrapPreference);

  /** Story preference settings this style applies. */
  get storyPreferences(): Read<M, StoryPreference>;
  set storyPreferences(value: StoryPreference);

  /** The frame fitting options this style applies to placed or pasted content. */
  get frameFittingOptions(): Read<M, FrameFittingOption>;
  set frameFittingOptions(value: FrameFittingOption);

  /** If `true`, this style enables its {@link frameFittingOptions}. */
  get enableFrameFittingOptions(): Read<M, boolean>;
  set enableFrameFittingOptions(value: boolean);

  /** If `true`, this style enables its stroke and corner options. */
  get enableStrokeAndCornerOptions(): Read<M, boolean>;
  set enableStrokeAndCornerOptions(value: boolean);

  /** If `true`, this style enables text frame footnote options. */
  get enableTextFrameFootnoteOptions(): Read<M, boolean>;
  set enableTextFrameFootnoteOptions(value: boolean);

  /**
   * Enables or disables one of this style's dimension attributes.
   * @param whichAttributes The dimension attribute to enable or disable.
   * @param attributeState `true` to enable, `false` to disable.
   */
  setDimensionAttributeState(whichAttributes: DimensionAttributes, attributeState: boolean): Read<M, boolean>;

  /**
   * Enables or disables one of this style's position attributes.
   * @param whichAttributes The position attribute to enable or disable.
   * @param attributeState `true` to enable, `false` to disable.
   */
  setPositionAttributeState(whichAttributes: PositionAttributes, attributeState: boolean): Read<M, boolean>;

  /** Duplicates the object style. */
  duplicate(): Read<M, ObjectStyle>;

  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(
    to: LocationOptions,
    reference?: ObjectStyle | ObjectStyleGroup | Document | Application,
  ): ObjectStyle;

  /**
   * Deletes the style.
   * @param replacingWith The style applied to any objects currently tagged with this style. Objects are left unstyled if omitted.
   */
  remove(replacingWith?: ObjectStyle | string): Read<M, void>;
}
