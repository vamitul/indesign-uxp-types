/**
 * EndnoteTextFrame.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { TextFrame } from './TextFrame';
import type { PageItemParent } from './_base/Parents';
import type { EndnoteRange } from './EndnoteRange';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { BaselineFrameGridOption } from './BaselineFrameGridOption';
import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FitOptions } from './Enums/FitOptions';
import type { NothingEnum } from './Enums/NothingEnum';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { TextFrameContents } from './Enums/TextFrameContents';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { Footnotes } from './Footnotes';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Graphics } from './Graphics';
import type { GridDataInformation } from './GridDataInformation';
import type { Groups } from './Groups';
import type { HiddenTexts } from './HiddenTexts';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Notes } from './Notes';
import type { ObjectExportOption } from './ObjectExportOption';
import type { ObjectStyle } from './ObjectStyle';
import type { Ovals } from './Ovals';
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
import type { SplineItems } from './SplineItems';
import type { Story } from './Story';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Tables } from './Tables';
import type { TextBoxes } from './TextBoxes';
import type { TextFramePreference } from './TextFramePreference';
import type { TextFrames } from './TextFrames';
import type { TextPath } from './TextPath';
import type { TextPaths } from './TextPaths';
import type { TextVariableInstances } from './TextVariableInstances';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * The text frame InDesign automatically creates and manages to hold a story's collected
 * {@link EndnoteRange} content at the end of the story.
 *
 * Behaves exactly like a regular {@link TextFrame}; InDesign creates, resizes, and threads
 * these frames itself as endnotes are added or removed.
 */
export interface EndnoteTextFrame<TParent = PageItemParent, M extends Mode = 'single'> extends TextFrame<TParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EndnoteTextFrame';

  /** Resolves the proxy into the individual {@link EndnoteTextFrame} objects it stands for. */
  getElements(): EndnoteTextFrame<TParent, 'single'>[];
}
