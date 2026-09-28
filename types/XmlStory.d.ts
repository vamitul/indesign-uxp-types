/**
 * XmlStory.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject } from './_base/DomObjects';
import type { CharacterFormatAttributes, ParagraphFormatAttributes, TextGraphicAttributes } from './_base/TextAttributes';
import type { TextRangeContent } from './_base/TextContent';

import type { LockStateValues } from './Enums/LockStateValues';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { StoryTypes } from './Enums/StoryTypes';

import type { Buttons } from './Buttons';
import type { CellStyleMappings } from './CellStyleMappings';
import type { CharacterStyle } from './CharacterStyle';
import type { CharStyleMappings } from './CharStyleMappings';
import type { CheckBoxes } from './CheckBoxes';
import type { Changes } from './Changes';
import type { ComboBoxes } from './ComboBoxes';
import type { Document } from './Document';
import type { EndnoteRanges } from './EndnoteRanges';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { EPSTexts } from './EPSTexts';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { GridDataInformation } from './GridDataInformation';
import type { Groups } from './Groups';
import type { InCopyExportOption } from './InCopyExportOption';
import type { Link } from './Link';
import type { LinkedStoryOption } from './LinkedStoryOption';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { ParaStyleMappings } from './ParaStyleMappings';
import type { Polygons } from './Polygons';
import type { Preferences } from './Preferences';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { StoryPreference } from './StoryPreference';
import type { TableStyleMappings } from './TableStyleMappings';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { XMLElement } from './XMLElement';
import type { Character } from './Character';
import type { Endnotes } from './Endnotes';
import type { NamedGrid } from './NamedGrid';
import type { TextFrame } from './TextFrame';
import type { TextPath } from './TextPath';
import type { LocationOptions } from './Enums/LocationOptions';
import type { ExportFormat } from './Enums/ExportFormat';
import type { BackgroundTask } from './BackgroundTask';
import type { PDFExportPreset } from './PDFExportPreset';
import type { FilePath } from './_base/Types';
import type { Text, TextDuplicateReference } from './Text';
import type { XMLItem } from './XMLItem';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';
import type { Story } from './Story';
import type { Bullet } from './Bullet';
import type { Color } from './Color';
import type { BalanceLinesStyle } from './Enums/BalanceLinesStyle';
import type { Capitalization } from './Enums/Capitalization';
import type { CornerOptions } from './Enums/CornerOptions';
import type { DigitsTypeOptions } from './Enums/DigitsTypeOptions';
import type { Leading } from './Enums/Leading';
import type { NumberingStyle } from './Enums/NumberingStyle';
import type { ParagraphJustificationOptions } from './Enums/ParagraphJustificationOptions';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyTypes } from './Enums/RubyTypes';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Font } from './Font';
import type { Footnotes } from './Footnotes';
import type { Gradient } from './Gradient';
import type { HiddenTexts } from './HiddenTexts';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { MixedInk } from './MixedInk';
import type { Notes } from './Notes';
import type { NumberingRestartPolicy } from './NumberingRestartPolicy';
import type { ParagraphStyle } from './ParagraphStyle';
import type { Swatch } from './Swatch';
import type { TabStop } from './TabStop';
import type { Tables } from './Tables';
import type { TextVariableInstances } from './TextVariableInstances';
import type { Tint } from './Tint';

/**
 * XML text content not yet placed in the layout — a {@link Story} generated
 * from an imported XML document before it is flowed into a text frame.
 *
 * Smaller than {@link Story}: it carries the same character, paragraph, and
 * text-graphic formatting and the same per-granularity text collections, but
 * lacks the workflow methods that only apply once a story is placed —
 * check-in/out, revert, the story editor, and XML markup — since an XmlStory
 * has no on-page presence yet.
 */
export interface XmlStory<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | XMLElement, M>,
    IndexedDOMObject<Document | XMLElement, M>,
    CharacterFormatAttributes<M>,
    ParagraphFormatAttributes<M>,
    TextGraphicAttributes<M>,
    TextRangeContent<XmlStory, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XmlStory';

  /** Resolves the proxy into the individual {@link XmlStory} objects it stands for. */
  getElements(): XmlStory<'single'>[];

  /** The unique numeric ID of the story within its document. */
  readonly id: Read<M, number>;

  /** The story's name — an alias for {@link label}, with no uniqueness constraint. */
  get name(): Read<M, string>;
  set name(value: string);

  /** {@link Endnotes} anchored in this story. */
  readonly endnotes: Endnotes;

  /** Whether the story holds real user text rather than placeholder text. */
  get userText(): Read<M, boolean>;
  set userText(value: boolean);

  /** The {@link NamedGrid} the story composes against. */
  get appliedNamedGrid(): Read<M, NamedGrid>;
  set appliedNamedGrid(value: NamedGrid | string);

  /** The {@link TextFrame}s or {@link TextPath}s this story's text flows through, in thread order. Empty until the XML content is placed. */
  readonly textContainers: Read<M, Array<TextFrame | TextPath>>;

  /** Whether track changes is switched on for this story. */
  get trackChanges(): Read<M, boolean>;
  set trackChanges(value: boolean);

  /** The story's title, as used by the InCopy workflow. */
  get storyTitle(): Read<M, string>;
  set storyTitle(value: string);

  /** The number of characters in the story. */
  readonly length: Read<M, number>;

  /** Whether the applied style has been overridden with additional attributes anywhere in the story. */
  readonly styleOverridden: Read<M, boolean>;

  /**
   * The story's plain-text contents, as a `string` or a {@link SpecialCharacters}
   * value when it holds a single special character. Read-only: XML text content
   * is edited through the document's XML tree, not through this accessor.
   */
  readonly contents: Read<M, string | SpecialCharacters>;

  /** The check-in / check-out / lock status of the story. */
  readonly lockState: Read<M, LockStateValues>;

  /** The {@link XMLItem} (element, comment, or processing instruction) associated with the story. */
  readonly associatedXMLElement: Read<M, XMLItem>;

  /** Whether this is an endnote story. */
  readonly isEndnoteStory: Read<M, boolean>;

  /** {@link StoryPreference} settings for this story. */
  readonly storyPreferences: Read<M, StoryPreference>;

  /** Whether the story has overset (unplaced) text. */
  readonly overflows: Read<M, boolean>;

  /** The kind of story — see {@link StoryTypes}. */
  readonly storyType: Read<M, StoryTypes>;

  /** The {@link CharacterStyle}s dictated by nested styles for each character in the story. */
  readonly appliedNestedStyles: Read<M, CharacterStyle[]>;

  /** {@link LinkedStoryOption} settings governing synchronization with a linked source story. */
  readonly linkedStoryOptions: Read<M, LinkedStoryOption>;

  /** The {@link Link} to this story's source file, if it was placed from or exported to one. */
  readonly itemLink: Read<M, Link>;

  /** Export options for the InCopy INCX document format — see {@link InCopyExportOption}. */
  readonly incopyExportOptions: Read<M, InCopyExportOption>;

  /** Every {@link PageItem} anchored anywhere in the story, recursing into nested groups. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /** Every {@link Graphic} anchored anywhere in the story, recursing into nested groups. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** Default grid metrics for the story's frame grid — see {@link GridDataInformation}. */
  readonly gridData: Read<M, GridDataInformation>;

  /** {@link EndnoteRanges} in this story. */
  readonly endnoteRanges: EndnoteRanges;

  /** A collection of {@link ParaStyleMappings} used when exporting to or importing from InCopy. */
  readonly paraStyleMappings: ParaStyleMappings;

  /** A collection of {@link CharStyleMappings} used when exporting to or importing from InCopy. */
  readonly charStyleMappings: CharStyleMappings;

  /** A collection of {@link TableStyleMappings} used when exporting to or importing from InCopy. */
  readonly tableStyleMappings: TableStyleMappings;

  /** A collection of {@link CellStyleMappings} used when exporting to or importing from InCopy. */
  readonly cellStyleMappings: CellStyleMappings;

  /** {@link Changes} recorded by track changes in this story. */
  readonly changes: Changes;

  /** {@link Ovals} (ellipses) anchored in this story. */
  readonly ovals: Ovals<Character>;

  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) anchored in this story. */
  readonly splineItems: SplineItems<Character>;

  /** Every {@link PageItem} anchored in this story, regardless of type. */
  readonly pageItems: PageItems<Character>;

  /** {@link Rectangles} anchored in this story. */
  readonly rectangles: Rectangles<Character>;

  /** {@link GraphicLines} anchored in this story. */
  readonly graphicLines: GraphicLines<Character>;

  /** {@link TextFrames} anchored in this story. */
  readonly textFrames: TextFrames<Character>;

  /** {@link Polygons} anchored in this story. */
  readonly polygons: Polygons<Character>;

  /** {@link EndnoteTextFrames} anchored in this story. */
  readonly endnoteTextFrames: EndnoteTextFrames<Character>;

  /** {@link Groups} anchored in this story. */
  readonly groups: Groups<Character>;

  /** {@link EPSTexts} anchored in this story. */
  readonly epstexts: EPSTexts<Character>;

  /** {@link FormFields} of every kind anchored in this story. */
  readonly formFields: FormFields<Character>;

  /** {@link Buttons} anchored in this story. */
  readonly buttons: Buttons<Character>;

  /** {@link MultiStateObjects} anchored in this story. */
  readonly multiStateObjects: MultiStateObjects<Character>;

  /** {@link CheckBoxes} anchored in this story. */
  readonly checkBoxes: CheckBoxes<Character>;

  /** {@link ComboBoxes} anchored in this story. */
  readonly comboBoxes: ComboBoxes<Character>;

  /** {@link ListBoxes} anchored in this story. */
  readonly listBoxes: ListBoxes<Character>;

  /** {@link RadioButtons} anchored in this story. */
  readonly radioButtons: RadioButtons<Character>;

  /** {@link TextBoxes} anchored in this story. */
  readonly textBoxes: TextBoxes<Character>;

  /** {@link SignatureFields} anchored in this story. */
  readonly signatureFields: SignatureFields<Character>;

  /** Preferences objects — see {@link Preferences}. */
  readonly preferences: Preferences;

  /**
   * Sets the Nth design axis of a variable font applied within the story.
   * @param nthAxisIndex Index of the design axis.
   * @param nthAxisValue Value to set the axis to.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): Read<M, void>;

  /** Whether the Nth design axis of the story's variable font is hidden. @param nthAxisIndex Index of the design axis. */
  isNthDesignAxisHidden(nthAxisIndex: number): Read<M, boolean>;

  /**
   * Duplicates the story's text into a new location.
   * @param to Where to insert the copy relative to `reference`, or within the containing object.
   * @param reference Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  duplicate(to: LocationOptions, reference?: TextDuplicateReference): Read<M, Text>;

  /**
   * Exports the story to a file on a background thread, returning the
   * {@link BackgroundTask} that tracks it.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using An export preset such as a {@link PDFExportPreset}.
   */
  asynchronousExportFile(
    format: ExportFormat | string,
    to: FilePath,
    showingOptions?: boolean,
    using?: PDFExportPreset,
    versionComments?: string,
    forceSave?: boolean,
  ): BackgroundTask;
}
