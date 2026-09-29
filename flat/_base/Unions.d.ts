/**
 * Unions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PageItemParent } from './Parents';
import type { Behavior, PlainBehavior } from '../Behavior';
import type { AnimationBehavior } from '../AnimationBehavior';
import type { ClearFormBehavior } from '../ClearFormBehavior';
import type { GotoAnchorBehavior } from '../GotoAnchorBehavior';
import type { GotoFirstPageBehavior } from '../GotoFirstPageBehavior';
import type { GotoLastPageBehavior } from '../GotoLastPageBehavior';
import type { GotoNextPageBehavior } from '../GotoNextPageBehavior';
import type { GotoNextStateBehavior } from '../GotoNextStateBehavior';
import type { GotoNextViewBehavior } from '../GotoNextViewBehavior';
import type { GotoPageBehavior } from '../GotoPageBehavior';
import type { GotoPreviousPageBehavior } from '../GotoPreviousPageBehavior';
import type { GotoPreviousStateBehavior } from '../GotoPreviousStateBehavior';
import type { GotoPreviousViewBehavior } from '../GotoPreviousViewBehavior';
import type { GotoStateBehavior } from '../GotoStateBehavior';
import type { GotoURLBehavior } from '../GotoURLBehavior';
import type { MovieBehavior } from '../MovieBehavior';
import type { OpenFileBehavior } from '../OpenFileBehavior';
import type { PrintFormBehavior } from '../PrintFormBehavior';
import type { ShowHideFieldsBehavior } from '../ShowHideFieldsBehavior';
import type { SoundBehavior } from '../SoundBehavior';
import type { SubmitFormBehavior } from '../SubmitFormBehavior';
import type { ViewZoomBehavior } from '../ViewZoomBehavior';
import type { PageItem, PlainPageItem } from '../PageItem';
import type { Rectangle } from '../Rectangle';
import type { Oval } from '../Oval';
import type { Polygon } from '../Polygon';
import type { GraphicLine } from '../GraphicLine';
import type { Group } from '../Group';
import type { TextFrame, PlainTextFrame } from '../TextFrame';
import type { EndnoteTextFrame } from '../EndnoteTextFrame';
import type { Graphic, PlainGraphic } from '../Graphic';
import type { Image } from '../Image';
import type { EPS } from '../EPS';
import type { PDF } from '../PDF';
import type { WMF } from '../WMF';
import type { PICT } from '../PICT';
import type { ImportedPage } from '../ImportedPage';
import type { SVG } from '../SVG';
import type { MediaItem } from '../MediaItem';
import type { Movie } from '../Movie';
import type { Sound } from '../Sound';
import type { Button } from '../Button';
import type { CheckBox } from '../CheckBox';
import type { ComboBox } from '../ComboBox';
import type { ListBox } from '../ListBox';
import type { RadioButton } from '../RadioButton';
import type { TextBox } from '../TextBox';
import type { SignatureField } from '../SignatureField';
import type { MultiStateObject } from '../MultiStateObject';
import type { EPSText } from '../EPSText';
import type { HtmlItem } from '../HtmlItem';
import type { FlexObject } from '../FlexObject';
import type { Page } from '../Page';
import type { Spread } from '../Spread';
import type { MasterSpread } from '../MasterSpread';
import type { Layer } from '../Layer';
import type { Character } from '../Character';
import type { InsertionPoint } from '../InsertionPoint';
import type { Text } from '../Text';
import type { Story } from '../Story';
import type { XmlStory } from '../XmlStory';
import type { Cell } from '../Cell';
import type { TextPath } from '../TextPath';
import type { Footnote } from '../Footnote';
import type { Note } from '../Note';
import type { Change } from '../Change';
import type { HiddenText } from '../HiddenText';
import type { XMLElement } from '../XMLElement';
import type { XMLAttribute } from '../XMLAttribute';
import type { XMLComment } from '../XMLComment';
import type { XMLInstruction } from '../XMLInstruction';
import type { XMLItem, PlainXMLItem } from '../XMLItem';
import type { DTD } from '../DTD';
import type { Asset } from '../Asset';
import type { PlainSplineItem } from '../SplineItem';
import type { PlainFormField } from '../FormField';
import type { PlainMediaItem } from '../MediaItem';
import type { Swatch, PlainSwatch } from '../Swatch';
import type { Color, PlainColor } from '../Color';
import type { Tint } from '../Tint';
import type { Gradient } from '../Gradient';
import type { MixedInk } from '../MixedInk';
import type { MixedInkGroup } from '../MixedInkGroup';
import type { ParagraphStyle } from '../ParagraphStyle';
import type { ParagraphStyleGroup } from '../ParagraphStyleGroup';
import type { CharacterStyle } from '../CharacterStyle';
import type { CharacterStyleGroup } from '../CharacterStyleGroup';
import type { CellStyle } from '../CellStyle';
import type { CellStyleGroup } from '../CellStyleGroup';
import type { TableStyle } from '../TableStyle';
import type { TableStyleGroup } from '../TableStyleGroup';
import type { Document } from '../Document';
import type { Application } from '../Application';
import type { ClippingPathSettings } from '../ClippingPathSettings';
import type { TextWrapPreference } from '../TextWrapPreference';
import type { Word } from '../Word';
import type { Line } from '../Line';
import type { Paragraph } from '../Paragraph';
import type { TextColumn } from '../TextColumn';
import type { TextStyleRange } from '../TextStyleRange';
import type { Table } from '../Table';
import type { Row } from '../Row';
import type { Column } from '../Column';
import type { Guide } from '../Guide';
import type { SplineItem } from '../SplineItem';
import type { Behaviors } from '../Behaviors';
import type { Graphics } from '../Graphics';
import type { Swatches } from '../Swatches';
import type { PageItemHolder } from './PageItemMixins';

/** The four concrete drawable spline shapes. (`SplineItem` itself is the base class.) */
export type AnySplineItem = Rectangle | Oval | Polygon | GraphicLine;

/**
 * Any object that can be created, duplicated, or anchored as a page item — and so
 * can own the per-item settings objects (animation, timing, transparency, text
 * wrap).
 *
 * Distinct from {@link AnyPageItem}, which is what a *collection* of page items
 * hands back and which carries the `Plain*` variants for narrowing. This one is
 * used the other way round: as the `.parent` of a settings object.
 *
 * **`MathObject` is deliberately not here.** It was added to InDesign recently and
 * does not follow the pattern: it declares no superclass, its `mathObjects`
 * collection hangs off `Document` and `Rectangle` only, its parent is always a
 * `Rectangle`, and it has no geometry, transparency or animation members at all —
 * none of the eleven classes that bind this union list it as a possible parent. It
 * is reached through `Rectangle.mathObjects` / `Document.mathObjects`. See [[F32]].
 */
export type PageItemUnion =
  | Rectangle | Oval | Polygon | GraphicLine | Group | TextFrame | EndnoteTextFrame
  | Graphic | Image | EPS | PDF | WMF | PICT | ImportedPage | SVG
  | MediaItem | Movie | Sound
  | Button | CheckBox | ComboBox | ListBox | RadioButton | TextBox | SignatureField | MultiStateObject
  | EPSText | HtmlItem | FlexObject;

/**
 * Every concrete page-item class a container can hand back — the type behind
 * {@link PageItemHolder}'s `allPageItems` and a selection's page items. Check
 * `constructorName` to narrow a value of this type to one specific class.
 */
export type AnyPageItem = AnyPageItemOf;

/**
 * {@link AnyPageItem}, remembering what holds the item — so that reading `.parent` back off
 * one gives the specific container it sits in rather than "any page-item parent".
 */
export type AnyPageItemOf<TParent = PageItemParent> =
  | PlainPageItem<TParent>
  | Rectangle<TParent> | Oval<TParent> | Polygon<TParent> | GraphicLine<TParent> | Group<TParent>
  | PlainTextFrame<TParent> | EndnoteTextFrame<TParent> | EPSText<TParent>
  | Image<TParent> | EPS<TParent> | PDF<TParent> | PICT<TParent> | WMF<TParent> | SVG<TParent>
  | ImportedPage<TParent>
  | Movie<TParent> | Sound<TParent>
  | Button<TParent> | CheckBox<TParent> | ComboBox<TParent> | ListBox<TParent>
  | RadioButton<TParent> | TextBox<TParent>
  | SignatureField<TParent> | MultiStateObject<TParent>
  | HtmlItem<TParent> | FlexObject<TParent>;

/**
 * Every class a {@link Swatches} collection can hand back. Check `constructorName`
 * to narrow — `'Swatch'` is the plain case ({@link PlainSwatch}), which is what
 * `[None]` is.
 */
export type AnySwatch =
  | PlainSwatch | PlainColor | Gradient | Tint | MixedInk | MixedInkGroup;

/** Every class a {@link Graphics} collection can hand back. */
export type AnyGraphic = AnyGraphicOf;

/**
 * {@link AnyGraphic}, remembering which frame holds the graphic — so that reading `.parent`
 * back off one gives that frame rather than "any page-item parent".
 */
export type AnyGraphicOf<TParent = PageItemParent> =
  | PlainGraphic<TParent>
  | Image<TParent> | EPS<TParent> | PDF<TParent> | WMF<TParent> | PICT<TParent>
  | ImportedPage<TParent> | SVG<TParent>;

/**
 * What a selection can hold — page items, text ranges, table parts, the layout
 * objects the Selection tool can reach, and the Structure pane's XML nodes.
 *
 * A selection may legitimately hold several kinds of object at once, so filter
 * or check `constructorName` before acting on it. Note that InDesign may report
 * a narrower class than the one you selected: selecting a row or a column
 * leaves a `Cell`, and selecting a text range leaves a `TextColumn`.
 */
export type SelectionItem =
  | AnyPageItem
  | PlainSplineItem | PlainFormField | PlainMediaItem | PlainGraphic
  | Text | Character | Word | Line | Paragraph | TextColumn | TextStyleRange | InsertionPoint
  | Table | Cell | Row | Column
  | Page | Spread | MasterSpread | Guide
  | XMLElement | XMLAttribute | XMLComment | XMLInstruction | PlainXMLItem
  | DTD | Asset;

/**
 * A page item that can be driven by the timing model: an animation, a media object, or a
 * multi-state object.
 */
/**
 * Every class a {@link Behaviors} collection can hand back.
 *
 * Check `constructorName` to tell which one you have. Almost everything worth reading — a
 * URL, a page number, a sound, the fields to show — belongs to one specific kind of behavior
 * rather than to all of them, so the check is how you reach it.
 */
export type AnyBehavior =
  | PlainBehavior
  | AnimationBehavior
  | ClearFormBehavior
  | GotoAnchorBehavior
  | GotoFirstPageBehavior
  | GotoLastPageBehavior
  | GotoNextPageBehavior
  | GotoNextStateBehavior
  | GotoNextViewBehavior
  | GotoPageBehavior
  | GotoPreviousPageBehavior
  | GotoPreviousStateBehavior
  | GotoPreviousViewBehavior
  | GotoStateBehavior
  | GotoURLBehavior
  | MovieBehavior
  | OpenFileBehavior
  | PrintFormBehavior
  | ShowHideFieldsBehavior
  | SoundBehavior
  | SubmitFormBehavior
  | ViewZoomBehavior;

/**
 * Anything an animation, timing or interactive behaviour can be pointed at: a page item, a
 * placed graphic, a behaviour, or a media clip.
 */
export type DynamicTarget = PageItem | Graphic | Behavior | MediaItem;

/** Any object exposing a text flow (consumers of {@link TextContainerContent}). */
export type TextContainer =
  | TextFrame | EndnoteTextFrame | Story | XmlStory | Cell | TextPath
  | Footnote | Note | Change | HiddenText | XMLElement | Text;

/** A colorant reference: a swatch object or its name (fill/stroke setters). */
export type SwatchReference =
  | Swatch | Color | Tint | Gradient | MixedInk | MixedInkGroup | string;

/**
 * The `reference` accepted by a named style's `move(to, reference)` method when `to` is
 * {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}: any named style or style
 * group, or the document/application root.
 *
 * Shared by every style family — paragraph, character, cell, and table styles and their
 * groups.
 */
export type StyleMoveReference =
  | ParagraphStyle | ParagraphStyleGroup
  | CharacterStyle | CharacterStyleGroup
  | CellStyle | CellStyleGroup
  | TableStyle | TableStyleGroup
  | Document | Application;

/**
 * The runtime `.parent` of a {@link Path}: any spline shape, the frame types
 * that carry a clipping or text-wrap path, or a media item's poster-frame path.
 */
export type PathOwner =
  | AnySplineItem | TextFrame | EndnoteTextFrame
  | MediaItem | Sound | Movie
  | Button | MultiStateObject
  | ClippingPathSettings | TextWrapPreference | FlexObject;

/** The runtime `.parent` of a {@link TextPath}: any spline shape, text-frame type, or {@link EPSText}. */
export type TextPathOwner = AnySplineItem | TextFrame | EndnoteTextFrame | EPSText;
