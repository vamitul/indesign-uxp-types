/**
 * GraphicLine.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { SplineItem } from './SplineItem';
import type { PageItemParent } from './_base/Parents';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { EPSTexts } from './EPSTexts';
import type { EPSs } from './EPSs';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Graphics } from './Graphics';
import type { Groups } from './Groups';
import type { HtmlItems } from './HtmlItems';
import type { Images } from './Images';
import type { ImportedPages } from './ImportedPages';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ListBoxes } from './ListBoxes';
import type { MediaItems } from './MediaItems';
import type { Movies } from './Movies';
import type { MultiStateObjects } from './MultiStateObjects';
import type { ObjectExportOption } from './ObjectExportOption';
import type { ObjectStyle } from './ObjectStyle';
import type { Ovals } from './Ovals';
import type { PDFs } from './PDFs';
import type { PICTs } from './PICTs';
import type { Page } from './Page';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { Paths } from './Paths';
import type { Polygons } from './Polygons';
import type { Preferences } from './Preferences';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SVGs } from './SVGs';
import type { SignatureFields } from './SignatureFields';
import type { Sounds } from './Sounds';
import type { SplineItems } from './SplineItems';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { TextPaths } from './TextPaths';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { WMFs } from './WMFs';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * A straight line defined by two endpoints. It cannot hold placed content, so
 * it has no frame-fitting options.
 */
export interface GraphicLine<TParent = PageItemParent, M extends Mode = 'single'> extends SplineItem<TParent, GraphicLine, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GraphicLine';

  /** Resolves the proxy into the individual {@link GraphicLine} objects it stands for. */
  getElements(): GraphicLine<TParent, 'single'>[];
}
