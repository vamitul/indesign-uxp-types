/**
 * TextFrame.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type {
  EndnoteFrameContainer,
  FormFieldContainer,
  ShapeContainer,
} from './_base/PageItemMixins';
import type { TextContainerContent } from './_base/TextContent';

import type { ContentType } from './Enums/ContentType';
import type { NothingEnum } from './Enums/NothingEnum';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { TextFrameContents } from './Enums/TextFrameContents';

import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { BaselineFrameGridOption } from './BaselineFrameGridOption';
import type { Footnotes } from './Footnotes';
import type { GridDataInformation } from './GridDataInformation';
import type { HiddenTexts } from './HiddenTexts';
import type { Notes } from './Notes';
import type { ObjectExportOption } from './ObjectExportOption';
import type { Paths } from './Paths';
import type { Story } from './Story';
import type { Tables } from './Tables';
import type { Text } from './Text';
import type { TextFramePreference } from './TextFramePreference';
import type { TextPath } from './TextPath';
import type { TextPaths } from './TextPaths';
import type { TextVariableInstances } from './TextVariableInstances';
import type { PageItemParent, TextParent } from './_base/Parents';
import type { Character } from './Character';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Graphics } from './Graphics';
import type { Groups } from './Groups';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { ObjectStyle } from './ObjectStyle';
import type { Ovals } from './Ovals';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { Preferences } from './Preferences';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SVGs } from './SVGs';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/** A text frame or path in a thread: a {@link TextFrame} or a {@link TextPath}. */
export type TextThreadEnd = TextFrame | TextPath;

/**
 * A frame that holds and displays text — the primary container for a story's
 * flowing content.
 *
 * Reachable at any granularity — {@link characters}, {@link words},
 * {@link paragraphs} — and searchable with find/change. Threads into other
 * frames so text overflows from one to the next ({@link nextTextFrame},
 * {@link previousTextFrame}), and carries its own frame-level text and path
 * settings.
 */
export interface TextFrame<TParent = PageItemParent, M extends Mode = 'single'>
  extends PageItem<TParent, Character, M>,
    TextContainerContent<TextParent, M>,
    ShapeContainer<Character, M>,
    FormFieldContainer<Character, M>,
    EndnoteFrameContainer<Character, M> {
  /** The object's DOM class name — reports the specific kind, such as `'EndnoteTextFrame'` when the object is a {@link EndnoteTextFrame}. */
  readonly constructorName: 'TextFrame' | 'EndnoteTextFrame';

  /** Resolves the proxy into the individual {@link TextFrame} objects it stands for. */
  getElements(): TextFrame<TParent, 'single'>[];

  /** Forces the frame's text to recompose, applying any pending composition changes. */
  recompose(): Read<M, void>;

  /** Columns, insets, vertical justification, and auto-size settings — see {@link TextFramePreference}. */
  readonly textFramePreferences: Read<M, TextFramePreference>;

  /** Frame-local baseline grid overriding the document grid — see {@link BaselineFrameGridOption}. */
  readonly baselineFrameGridOptions: Read<M, BaselineFrameGridOption>;

  /** Inline / anchored-object positioning settings — see {@link AnchoredObjectSetting}. */
  readonly anchoredObjectSettings: Read<M, AnchoredObjectSetting>;

  /** Reflowable-export options — see {@link ObjectExportOption}. */
  readonly objectExportOptions: Read<M, ObjectExportOption>;

  /** Default grid metrics for the frame's story grid — see {@link GridDataInformation}. */
  readonly gridData: Read<M, GridDataInformation>;

  /** The {@link Story} whose text flows through this frame. Shared by every frame in the same thread. */
  readonly parentStory: Read<M, Story>;

  /** The first frame in this frame's thread — a {@link TextFrame} or {@link TextPath}. */
  readonly startTextFrame: Read<M, TextThreadEnd>;

  /** The last frame in this frame's thread — a {@link TextFrame} or {@link TextPath}. */
  readonly endTextFrame: Read<M, TextThreadEnd>;

  /** This frame's zero-based position within its story's thread. */
  readonly textFrameIndex: Read<M, number>;

  /** Whether text overflows past the end of this thread (overset text). */
  readonly overflows: Read<M, boolean>;

  /** {@link Footnotes} anchored in this frame's text. */
  readonly footnotes: Footnotes;

  /** {@link TextVariableInstances} resolved within this frame's text. */
  readonly textVariableInstances: TextVariableInstances;

  /** {@link Tables} anchored in this frame's text. */
  readonly tables: Tables;

  /** {@link Notes} attached to this frame's text. */
  readonly notes: Notes;

  /** {@link HiddenTexts} (conditional/hidden runs) in this frame's text. */
  readonly hiddenTexts: HiddenTexts;

  /** The editable Bezier {@link Paths} of the frame's outline. */
  readonly paths: Paths;

  /** {@link TextPaths} contained in this frame. */
  readonly textPaths: TextPaths;

  /** The kind of content the frame may hold (graphic, text, or unassigned). */
  get contentType(): Read<M, ContentType>;
  set contentType(value: ContentType);

  /**
   * The frame's plain-text contents.
   *
   * Reading yields the text as a `string`, or a {@link SpecialCharacters} value when the
   * frame holds only a single special character. Assigning a {@link TextFrameContents} value
   * fills the frame with placeholder text.
   */
  get contents(): Read<M, string | TextFrameContents | SpecialCharacters>;
  set contents(value: string | TextFrameContents | SpecialCharacters);

  /**
   * The previous frame in the thread — a {@link TextFrame} or {@link TextPath}.
   * Assign a frame to thread into it, or {@link NothingEnum.NOTHING} to break the
   * incoming link.
   */
  get previousTextFrame(): Read<M, TextThreadEnd | null>;
  set previousTextFrame(value: TextThreadEnd | NothingEnum | null);

  /**
   * The next frame in the thread — a {@link TextFrame} or {@link TextPath}.
   * Assign a frame to thread into it, or {@link NothingEnum.NOTHING} to break the
   * outgoing link.
   */
  get nextTextFrame(): Read<M, TextThreadEnd | null>;
  set nextTextFrame(value: TextThreadEnd | NothingEnum | null);

  /**
   * Finds text matching the transliterate (character-type) find query.
   * @param reverseOrder If `true`, results come back last-to-first. Defaults to `false`.
   */
  findTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text matching the transliterate find query and applies the change settings.
   * @param reverseOrder If `true`, results come back last-to-first. Defaults to `false`.
   */
  changeTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Creates a linked copy of a story and places it into this frame.
   * @param parentStory The {@link Story} to link from.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   * @deprecated Use {@link PageItem.contentPlace} instead.
   */
  placeAndLink(parentStory: Story, showingOptions?: boolean): Read<M, Story>;

  /** Converts the frame's placeholder/formatted contents to raw editable text. */
  convertToRawText(): Read<M, void>;

  /**
   * Brings the frame to the front of its layer, or just in front of `reference`.
   * @param reference An item with the same parent to move directly in front of.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the frame to the back of its layer, or just behind `reference`.
   * @param reference An item with the same parent to move directly behind.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the frame forward one step in the stacking order. */
  bringForward(): Read<M, void>;

  /** Sends the frame backward one step in the stacking order. */
  sendBackward(): Read<M, void>;

  /** Combines the frame's path with others into a single compound path. */
  makeCompoundPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Releases a compound path back into its separate paths. */
  releaseCompoundPath(): Read<M, PageItem[]>;

  /** Creates a new shape from the intersection of the frame and others; errors if they do not overlap. */
  intersectPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Creates a new shape from the union of the frame and others; deletes non-overlapping objects. */
  addPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Creates a new shape by subtracting the overlapping areas of the other objects from the frame. */
  subtractPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Creates a new shape by subtracting the frame from the objects behind it. */
  minusBack(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Creates a new shape from the areas where the frame and others do *not* overlap. */
  excludeOverlapPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;
}

/**
 * A text frame InDesign reports as a plain {@link TextFrame} rather than as an
 * {@link EndnoteTextFrame} — that is, a frame you placed, not one InDesign created and manages
 * itself to hold a story's collected endnotes.
 */
export interface PlainTextFrame<TParent = PageItemParent, M extends Mode = 'single'> extends TextFrame<TParent, M> {
  /** Always `'TextFrame'` — this is the textframe case, by construction. */
  readonly constructorName: 'TextFrame';
}

