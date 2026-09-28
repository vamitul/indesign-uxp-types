/**
 * Parents.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Spread } from '../Spread';
import type { Button } from '../Button';
import type { MultiStateObject } from '../MultiStateObject';
import type { RadioButton } from '../RadioButton';
import type { CheckBox } from '../CheckBox';
import type { ComboBox } from '../ComboBox';
import type { ListBox } from '../ListBox';
import type { TextBox } from '../TextBox';
import type { SignatureField } from '../SignatureField';
import type { Rectangle } from '../Rectangle';
import type { Oval } from '../Oval';
import type { Polygon } from '../Polygon';
import type { GraphicLine } from '../GraphicLine';
import type { SplineItem } from '../SplineItem';
import type { Snippet } from '../Snippet';
import type { PlaceGun } from '../PlaceGun';
import type { FlexObject } from '../FlexObject';
import type { Sound } from '../Sound';
import type { Movie } from '../Movie';
import type { HtmlItem } from '../HtmlItem';
import type { FormField } from '../FormField';
import type { MediaItem } from '../MediaItem';
import type { EPSText } from '../EPSText';
import type { SVG } from '../SVG';
import type { ImportedPage } from '../ImportedPage';
import type { PICT } from '../PICT';
import type { WMF } from '../WMF';
import type { PDF } from '../PDF';
import type { EPS } from '../EPS';
import type { Image } from '../Image';
import type { Graphic } from '../Graphic';
import type { PageItem } from '../PageItem';
import type { Page } from '../Page';
import type { MasterSpread } from '../MasterSpread';
import type { Group } from '../Group';
import type { Cell } from '../Cell';
import type { State } from '../State';
import type { Character } from '../Character';
import type { Word } from '../Word';
import type { Line } from '../Line';
import type { Paragraph } from '../Paragraph';
import type { TextColumn } from '../TextColumn';
import type { TextStyleRange } from '../TextStyleRange';
import type { InsertionPoint } from '../InsertionPoint';
import type { Text } from '../Text';
import type { XMLElement } from '../XMLElement';
import type { Document } from '../Document';
import type { Application } from '../Application';
import type { Story } from '../Story';
import type { XmlStory } from '../XmlStory';
import type { Endnote } from '../Endnote';
import type { Footnote } from '../Footnote';
import type { Note } from '../Note';
import type { HiddenText } from '../HiddenText';
import type { Change } from '../Change';
import type { TextFrame } from '../TextFrame';
import type { TextPath } from '../TextPath';
import type { ColorGroup } from '../ColorGroup';
import type { ParagraphStyle } from '../ParagraphStyle';
import type { TextDefault } from '../TextDefault';
import type { Menu } from '../Menu';
import type { Submenu } from '../Submenu';
import type { DialogColumn } from '../DialogColumn';
import type { DialogRow } from '../DialogRow';
import type { EnablingGroup } from '../EnablingGroup';
import type { BorderPanel } from '../BorderPanel';
import type { RadiobuttonGroup } from '../RadiobuttonGroup';
import type { Dialog } from '../Dialog';
import type { EndnoteTextFrame } from '../EndnoteTextFrame';
import type { GraphicLayerOption } from '../GraphicLayerOption';
import type { NamedGrid } from '../NamedGrid';
import type { GraphicLayer } from '../GraphicLayer';
import type { Behavior } from '../Behavior';
import type { CellStyleMapping } from '../CellStyleMapping';
import type { CharStyleMapping } from '../CharStyleMapping';
import type { GridDataInformation } from '../GridDataInformation';
import type { Ink } from '../Ink';
import type { MenuElement } from '../MenuElement';
import type { NestedGrepStyle } from '../NestedGrepStyle';
import type { NestedLineStyle } from '../NestedLineStyle';
import type { NestedStyle } from '../NestedStyle';
import type { ParaStyleMapping } from '../ParaStyleMapping';
import type { RadiobuttonControl } from '../RadiobuttonControl';
import type { ShowHideFieldsBehavior } from '../ShowHideFieldsBehavior';
import type { StrokeStyle } from '../StrokeStyle';
import type { Swatch } from '../Swatch';
import type { TabStop } from '../TabStop';
import type { TableStyleMapping } from '../TableStyleMapping';
import type { Widget } from '../Widget';

/**
 * The runtime `.parent` of a {@link PageItem}: the specific object that directly holds it.
 *
 * An item placed directly on a page reports a {@link Spread} or
 * {@link MasterSpread}; one nested inside another reports the {@link Group},
 * {@link Cell} or {@link State} holding it; an anchored object in text reports
 * the enclosing {@link Character}. A placed-content frame ({@link Rectangle},
 * {@link Oval}, {@link Polygon}, {@link GraphicLine}, {@link SplineItem},
 * {@link FlexObject}, or a {@link FormField} leaf) reports itself when it
 * directly contains the item. {@link Snippet} and {@link PlaceGun} cover
 * content that is loaded but not yet placed.
 */
export type PageItemParent =
  | Spread
  | MasterSpread
  | Group
  | Cell
  | State
  | Character
  | XMLElement
  | Rectangle
  | Oval
  | Polygon
  | GraphicLine
  | SplineItem
  | Snippet
  | PlaceGun
  | FlexObject
  | Button
  | CheckBox
  | ComboBox
  | ListBox
  | RadioButton
  | TextBox
  | SignatureField
  | MultiStateObject
  | TextFrame
  | EndnoteTextFrame
  | Sound
  | Movie
  | HtmlItem
  | FormField
  | MediaItem
  | EPSText
  | SVG
  | ImportedPage
  | PICT
  | WMF
  | PDF
  | EPS
  | Image
  | Graphic
  | PageItem;

/**
 * The runtime `.parent` of a {@link Text} range: the story or flow-bearing
 * object the range resolves within.
 */
export type TextParent =
  | Story
  | XmlStory
  | Cell
  | Text
  | Character
  | Word
  | Line
  | Paragraph
  | TextColumn
  | TextStyleRange
  | InsertionPoint
  | Footnote
  | Note
  | HiddenText
  | Change
  | XMLElement
  | TextFrame
  | EndnoteTextFrame
  | TextPath
  | Endnote;

/** The parent of a named style or style group: the document or its enclosing group. */
export type StyleParent<Group> = Document | Group;

/** The parent of a {@link Swatch}: document, application defaults, or a color group. */
export type SwatchParent = Document | Application | ColorGroup;

/**
 * The runtime `.parent` of a {@link TabStop}, {@link NestedStyle},
 * {@link NestedGrepStyle}, or {@link NestedLineStyle}: any paragraph-formatting
 * carrier — a live text range, the document's text defaults, or a
 * {@link ParagraphStyle} definition.
 */
export type ParagraphAttributeOwner =
  | TextDefault
  | ParagraphStyle
  | Text
  | Character
  | Word
  | Line
  | Paragraph
  | TextColumn
  | TextStyleRange
  | InsertionPoint
  | Story
  | XmlStory;

/**
 * The runtime `.parent` of an {@link Ink}, a {@link ColorGroup}, or a
 * {@link StrokeStyle} (and its `Dashed`/`Dotted`/`Striped` subclasses): the
 * document it belongs to, or the application when it is a default.
 */
export type DocumentOrApplication = Document | Application;

/**
 * The runtime `.parent` of a style-mapping object ({@link ParaStyleMapping},
 * {@link CharStyleMapping}, {@link TableStyleMapping}, {@link CellStyleMapping}):
 * the application or document-level default mapping set, or the {@link Story} /
 * {@link XmlStory} the mapping was defined on when importing XML into a flow.
 */
export type StyleMappingParent = Application | Document | Story | XmlStory;

/**
 * The runtime `.parent` of a {@link State}: the multi-state or toggle-button
 * widget whose appearance states it belongs to.
 */
export type StateOwner = Button | MultiStateObject | RadioButton;

/**
 * The runtime `.parent` of a {@link Behavior} (and every `*Behavior` leaf): the
 * interactive form field the behavior is attached to. Also reused as the
 * element type of {@link ShowHideFieldsBehavior}'s field-visibility arrays.
 */
export type BehaviorParent =
  | Button
  | CheckBox
  | ComboBox
  | ListBox
  | RadioButton
  | TextBox
  | SignatureField;

/**
 * The runtime `.parent` of a {@link MenuElement} (and its `MenuItem` /
 * `MenuSeparator` / `Submenu` leaves): the {@link Menu} or {@link Submenu} it
 * is nested inside.
 */
export type MenuElementParent = Menu | Submenu;

/**
 * The runtime `.parent` of a {@link Widget} and every concrete control leaf
 * that extends it: any dialog container — a {@link DialogColumn}, a
 * {@link DialogRow}, an {@link EnablingGroup}, a {@link BorderPanel}, or a
 * {@link RadiobuttonGroup} (the last only ever holding {@link RadiobuttonControl}
 * children).
 */
export type WidgetParent =
  | DialogColumn
  | DialogRow
  | EnablingGroup
  | BorderPanel
  | RadiobuttonGroup;

/**
 * The runtime `.parent` of a {@link DialogColumn}: the enclosing
 * {@link Dialog} or nested dialog container.
 */
export type DialogContainerParent = Dialog | DialogRow | EnablingGroup | BorderPanel;


/**
 * The runtime `.parent` of a {@link Change}: the flow the tracked change was
 * recorded in — a {@link Story}, an {@link XmlStory}, or a table {@link Cell}.
 */
export type ChangeParent = Story | XmlStory | Cell;

/**
 * The runtime `.parent` of a {@link HiddenText} range: any text container
 * whose content was hidden by a conditional-text or layout operation.
 */
export type HiddenTextParent =
  | Story
  | XmlStory
  | TextFrame
  | EndnoteTextFrame
  | InsertionPoint
  | Note
  | Cell
  | Footnote;

/**
 * The runtime `.parent` of a {@link GraphicLayer}: the top-level
 * {@link GraphicLayerOption} of an imported layered graphic, or another
 * {@link GraphicLayer} when nested inside a layer group.
 */
export type GraphicLayerParent = GraphicLayerOption | GraphicLayer;

/**
 * The runtime `.parent` of a {@link GridDataInformation}: any grid-bearing
 * text flow or frame — a {@link Story}, an {@link XmlStory}, a {@link Page}, a
 * {@link NamedGrid}, a {@link TextFrame}, or an {@link EndnoteTextFrame}.
 */
export type GridDataInformationParent =
  | Story
  | XmlStory
  | Page
  | NamedGrid
  | TextFrame
  | EndnoteTextFrame;
