/**
 * WidgetMixins.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './Types';
import type { Widgets } from '../Widgets';
import type { TextEditboxes } from '../TextEditboxes';
import type { IntegerEditboxes } from '../IntegerEditboxes';
import type { MeasurementEditboxes } from '../MeasurementEditboxes';
import type { RealEditboxes } from '../RealEditboxes';
import type { AngleEditboxes } from '../AngleEditboxes';
import type { PercentEditboxes } from '../PercentEditboxes';
import type { IntegerComboboxes } from '../IntegerComboboxes';
import type { MeasurementComboboxes } from '../MeasurementComboboxes';
import type { RealComboboxes } from '../RealComboboxes';
import type { AngleComboboxes } from '../AngleComboboxes';
import type { PercentComboboxes } from '../PercentComboboxes';
import type { CheckboxControls } from '../CheckboxControls';
import type { StaticTexts } from '../StaticTexts';
import type { Dropdowns } from '../Dropdowns';
import type { BorderPanels } from '../BorderPanels';
import type { EnablingGroups } from '../EnablingGroups';
import type { RadiobuttonGroups } from '../RadiobuttonGroups';

/**
 * The shared child-widget collection surface of every dialog container
 * (`DialogColumn`, `DialogRow`, `EnablingGroup`, `BorderPanel`): one
 * collection accessor per leaf control type that can be placed inside it.
 */
export interface WidgetContainer<M extends Mode = 'single'> {
  /** All widgets directly inside the container, regardless of type. */
  readonly widgets: Widgets;
  /** The text editboxes inside the container. */
  readonly textEditboxes: TextEditboxes;
  /** The integer editboxes inside the container. */
  readonly integerEditboxes: IntegerEditboxes;
  /** The measurement editboxes inside the container. */
  readonly measurementEditboxes: MeasurementEditboxes;
  /** The real-number editboxes inside the container. */
  readonly realEditboxes: RealEditboxes;
  /** The angle editboxes inside the container. */
  readonly angleEditboxes: AngleEditboxes;
  /** The percent editboxes inside the container. */
  readonly percentEditboxes: PercentEditboxes;
  /** The integer comboboxes inside the container. */
  readonly integerComboboxes: IntegerComboboxes;
  /** The measurement comboboxes inside the container. */
  readonly measurementComboboxes: MeasurementComboboxes;
  /** The real-number comboboxes inside the container. */
  readonly realComboboxes: RealComboboxes;
  /** The angle comboboxes inside the container. */
  readonly angleComboboxes: AngleComboboxes;
  /** The percent comboboxes inside the container. */
  readonly percentComboboxes: PercentComboboxes;
  /** The checkbox controls inside the container. */
  readonly checkboxControls: CheckboxControls;
  /** The static text objects inside the container. */
  readonly staticTexts: StaticTexts;
  /** The dropdowns inside the container. */
  readonly dropdowns: Dropdowns;
  /** The border panels inside the container. */
  readonly borderPanels: BorderPanels;
  /** The enabling groups inside the container. */
  readonly enablingGroups: EnablingGroups;
  /** The radiobutton groups inside the container. */
  readonly radiobuttonGroups: RadiobuttonGroups;
}

/**
 * The shared numeric-editbox surface (integer, real, percent, angle kinds —
 * the kind distinction is nominal only, all four share this exact member set).
 */
export interface NumericEditboxSurface<M extends Mode = 'single'> {
  /**
   * The minimum value a user may type into the control.
   */
  get minimumValue(): Read<M, number>;
  set minimumValue(value: number);
  /**
   * The maximum value a user may type into the control.
   */
  get maximumValue(): Read<M, number>;
  set maximumValue(value: number);
  /**
   * The amount to increment/decrement the value when the control is selected
   * and an arrow key is pressed.
   */
  get smallNudge(): Read<M, number>;
  set smallNudge(value: number);
  /**
   * The amount to increment/decrement the value when the control is selected
   * and Shift+arrow key is pressed.
   */
  get largeNudge(): Read<M, number>;
  set largeNudge(value: number);
  /**
   * The default text shown in the control. Do not set both `editContents`
   * and {@link editValue} — whichever is assigned later wins.
   */
  get editContents(): Read<M, string>;
  set editContents(value: string);
  /**
   * The default numeric value of the control. Do not set both `editValue`
   * and {@link editContents} — whichever is assigned later wins.
   */
  get editValue(): Read<M, number>;
  set editValue(value: number);
}

/**
 * The shared numeric-combobox surface: a {@link NumericEditboxSurface} plus
 * the dropdown item list.
 */
export interface NumericComboboxSurface<M extends Mode = 'single'> extends NumericEditboxSurface<M>{
  /** The menu items shown in the combobox's dropdown list. */
  get stringList(): Read<M, string[]>;
  set stringList(value: string[]);
}
