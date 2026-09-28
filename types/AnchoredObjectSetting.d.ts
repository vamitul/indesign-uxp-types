/**
 * AnchoredObjectSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Button } from './Button';
import type { CheckBox } from './CheckBox';
import type { ComboBox } from './ComboBox';
import type { Document } from './Document';
import type { EPSText } from './EPSText';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { FlexObject } from './FlexObject';
import type { FormField } from './FormField';
import type { GraphicLine } from './GraphicLine';
import type { Group } from './Group';
import type { InsertionPoint } from './InsertionPoint';
import type { ListBox } from './ListBox';
import type { MultiStateObject } from './MultiStateObject';
import type { ObjectStyle } from './ObjectStyle';
import type { Oval } from './Oval';
import type { Polygon } from './Polygon';
import type { RadioButton } from './RadioButton';
import type { Rectangle } from './Rectangle';
import type { SignatureField } from './SignatureField';
import type { TextBox } from './TextBox';
import type { TextFrame } from './TextFrame';
import type { AnchorPoint } from './Enums/AnchorPoint';
import type { AnchorPosition } from './Enums/AnchorPosition';
import type { AnchoredRelativeTo } from './Enums/AnchoredRelativeTo';
import type { HorizontalAlignment } from './Enums/HorizontalAlignment';
import type { VerticalAlignment } from './Enums/VerticalAlignment';
import type { VerticallyRelativeTo } from './Enums/VerticallyRelativeTo';

/**
 * The settings for an anchored object.
 */
export interface AnchoredObjectSetting<M extends Mode = 'single'> extends EventTargetDOMObject<FlexObject | Application | Document | EPSText | Polygon | GraphicLine | Rectangle | Oval | Group | TextFrame | EndnoteTextFrame | Button | FormField | SignatureField | TextBox | RadioButton | ListBox | ComboBox | CheckBox | MultiStateObject | ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'AnchoredObjectSetting';

  /** Resolves the proxy into the individual {@link AnchoredObjectSetting} objects it stands for. */
  getElements(): AnchoredObjectSetting<'single'>[];

  /** The position of the anchored object relative to the anchor. */
  get anchoredPosition(): Read<M, AnchorPosition>;
  set anchoredPosition(value: AnchorPosition);

  /** If true, the position of the anchored object is relative to the binding spine of the page or spread. */
  get spineRelative(): Read<M, boolean>;
  set spineRelative(value: boolean);

  /** If true, prevents manual positioning of the anchored object. */
  get lockPosition(): Read<M, boolean>;
  set lockPosition(value: boolean);

  /** If true, pins the position of the anchored object within the text frame top and bottom. */
  get pinPosition(): Read<M, boolean>;
  set pinPosition(value: boolean);

  /** The point in the anchored object to position. */
  get anchorPoint(): Read<M, AnchorPoint>;
  set anchorPoint(value: AnchorPoint);

  /**
   * When {@link anchoredPosition} is {@link AnchorPosition.ABOVE_LINE}, positions the anchored
   * object relative to the text area.
   *
   * When {@link anchoredPosition} is {@link AnchorPosition.ANCHORED},
   * {@link horizontalReferencePoint} sets it instead. Has no effect when
   * {@link anchoredPosition} is {@link AnchorPosition.INLINE_POSITION}.
   */
  get horizontalAlignment(): Read<M, HorizontalAlignment>;
  set horizontalAlignment(value: HorizontalAlignment);

  /** The horizontal reference point on the page. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get horizontalReferencePoint(): Read<M, AnchoredRelativeTo>;
  set horizontalReferencePoint(value: AnchoredRelativeTo);

  /** The vertical alignment of the anchored object's reference point with {@link verticalReferencePoint}. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get verticalAlignment(): Read<M, VerticalAlignment>;
  set verticalAlignment(value: VerticalAlignment);

  /** The vertical reference point on the page. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get verticalReferencePoint(): Read<M, VerticallyRelativeTo>;
  set verticalReferencePoint(value: VerticallyRelativeTo);

  /** The horizontal (x) offset of the anchored object. */
  get anchorXoffset(): Read<M, number>;
  set anchorXoffset(value: MeasurementValue);

  /** The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning. */
  get anchorYoffset(): Read<M, number>;
  set anchorYoffset(value: MeasurementValue);

  /** The space above an above-line anchored object. */
  get anchorSpaceAbove(): Read<M, number>;
  set anchorSpaceAbove(value: MeasurementValue);

  /**
   * Inserts the anchored object into specified story.
   * @param storyOffset The location within the story, specified as an insertion point.
   * @param anchoredPosition The position of the anchored object relative to the anchor.
   */
  insertAnchoredObject(storyOffset: InsertionPoint, anchoredPosition?: AnchorPosition): Read<M, void>;

  /** Releases the anchored object from its associated text. */
  releaseAnchoredObject(): Read<M, void>;
}
