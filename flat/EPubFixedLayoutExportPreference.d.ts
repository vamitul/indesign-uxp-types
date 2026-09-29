/**
 * EPubFixedLayoutExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Book } from './Book';
import type { Document } from './Document';
import type { EpubCover } from './Enums/EpubCover';
import type { EpubFixedLayoutSpreadControl } from './Enums/EpubFixedLayoutSpreadControl';
import type { EpubNavigationStyle } from './Enums/EpubNavigationStyle';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageConversion } from './Enums/ImageConversion';
import type { ImageResolution } from './Enums/ImageResolution';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { PageRangeFormat } from './Enums/PageRangeFormat';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * Export settings for a fixed-layout (page-for-page, non-reflowable) EPUB: package
 * metadata (title, creator, publisher, rights…), accessibility metadata, image
 * conversion, and spread/navigation options specific to fixed layout.
 */
export interface EPubFixedLayoutExportPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Book | Document;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<EPubFixedLayoutExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EPubFixedLayoutExportPreference, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'EPubFixedLayoutExportPreference';
  /** Resolves the proxy into the individual {@link EPubFixedLayoutExportPreference} objects it stands for. */
  getElements(): EPubFixedLayoutExportPreference[];
  /** The unique ID of the object. */
  get id(): string;
  set id(value: string);
  /** The PNG compression level. */
  readonly level: number;
  /** Becomes `dc:publisher`. */
  get epubPublisher(): string;
  set epubPublisher(value: string);
  /** Whether the EPUB has no cover image or uses the first page rasterized as one; see {@link EpubCover}. */
  get epubCover(): EpubCover;
  set epubCover(value: EpubCover);
  /** The epub cover image file path. */
  get coverImageFile(): string;
  set coverImageFile(value: string);
  /** The export resolution. */
  get imageExportResolution(): ImageResolution;
  set imageExportResolution(value: ImageResolution);
  /** The file format for converted images, or `Automatic` to pick the best format per image; see {@link ImageConversion}. Note: Valid only when copy optimized images and/or copy formatted images is true. */
  get imageConversion(): ImageConversion;
  set imageConversion(value: ImageConversion);
  /** The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. */
  get gifOptionsPalette(): GIFOptionsPalette;
  set gifOptionsPalette(value: GIFOptionsPalette);
  /** If true, generates interlaced GIFs. Note: Not valid when image conversion is JPEG. */
  get gifOptionsInterlaced(): boolean;
  set gifOptionsInterlaced(value: boolean);
  /** The quality of converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsQuality(): JPEGOptionsQuality;
  set jpegOptionsQuality(value: JPEGOptionsQuality);
  /** The formatting method for converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsFormat(): JPEGOptionsFormat;
  set jpegOptionsFormat(value: JPEGOptionsFormat);
  /** The name of TOC style to generate epub TOC. */
  get tocStyleName(): string;
  set tocStyleName(value: string);
  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): string[];
  set externalStyleSheets(value: string[]);
  /** The file path of external javascripts. */
  get javascripts(): string[];
  set javascripts(value: string[]);
  /** Becomes the EPUB package's `dc:title`. Defaults to the document name when empty. */
  get epubTitle(): string;
  set epubTitle(value: string);
  /** Becomes `dc:creator` — the author shown by reading systems. */
  get epubCreator(): string;
  set epubCreator(value: string);
  /** Becomes `dc:subject`. Comma-separated values are written as separate subjects. */
  get epubSubject(): string;
  set epubSubject(value: string);
  /** Becomes `dc:description`. */
  get epubDescription(): string;
  set epubDescription(value: string);
  /** Becomes `dc:date`. Written verbatim, so an ISO 8601 date is the safe form. */
  get epubDate(): string;
  set epubDate(value: string);
  /** Becomes `dc:rights` — the copyright statement. */
  get epubRights(): string;
  set epubRights(value: string);
  /** The pages to export when {@link epubPageRangeFormat} is set to export a page range. */
  get epubPageRange(): string;
  set epubPageRange(value: string);
  /** Whether all pages are exported or only those in {@link epubPageRange}; see {@link PageRangeFormat}. */
  get epubPageRangeFormat(): PageRangeFormat;
  set epubPageRangeFormat(value: PageRangeFormat);
  /** Whether spreads follow the document's own layout or are forced to physical (single-page) spreads; see {@link EpubFixedLayoutSpreadControl}. */
  get epubSpreadControlOptions(): EpubFixedLayoutSpreadControl;
  set epubSpreadControlOptions(value: EpubFixedLayoutSpreadControl);
  /** Whether the EPUB has no navigation or uses filename-based navigation; see {@link EpubNavigationStyle}. */
  get epubNavigationStyles(): EpubNavigationStyle;
  set epubNavigationStyles(value: EpubNavigationStyle);
  /** Becomes `schema:accessibilityFeature`, listing what aids the book provides (`alternativeText`, `structuralNavigation`, …). */
  get epubAccessibilityFeature(): string;
  set epubAccessibilityFeature(value: string);
  /** Becomes `schema:accessibilityHazard` — content that could harm a susceptible reader, such as `flashing` or `motionSimulation`. `none` is a meaningful value. */
  get epubAccessibilityHazard(): string;
  set epubAccessibilityHazard(value: string);
  /** Becomes `schema:accessMode`: the senses a reader needs to use the book at all (`textual`, `visual`, …). */
  get epubAccessibilityMode(): string;
  set epubAccessibilityMode(value: string);
  /** Becomes `schema:accessModeSufficient`: a combination of senses that is enough on its own, which is not the same as listing every mode present. */
  get epubAccessibilityModeSufficient(): string;
  set epubAccessibilityModeSufficient(value: string);
  /** Becomes `schema:accessibilitySummary` — prose for a human deciding whether the book is usable. */
  get epubAccessibilitySummary(): string;
  set epubAccessibilitySummary(value: string);
  /** Becomes `dcterms:conformsTo` — the accessibility specification claimed, given as its URL. */
  get epubAccessibilityConformsTo(): string;
  set epubAccessibilityConformsTo(value: string);
  /** Becomes `a11y:certifiedBy` — who vouched for the accessibility claim. */
  get epubAccessibilityCertifiedBy(): string;
  set epubAccessibilityCertifiedBy(value: string);
  /** Becomes `a11y:certifierCredential` — the certifier's qualification. */
  get epubAccessibilityCredentials(): string;
  set epubAccessibilityCredentials(value: string);
  /** Becomes `a11y:certifierReport` — a URL for the full accessibility report. */
  get epubAccessibilityReportLink(): string;
  set epubAccessibilityReportLink(value: string);
}


/**
 * The broadcast proxy for {@link EPubFixedLayoutExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link EPubFixedLayoutExportPreference} there.
 */
export interface EPubFixedLayoutExportPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Book | Document)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<EPubFixedLayoutExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<EPubFixedLayoutExportPreferencePlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'EPubFixedLayoutExportPreference';
  /** Resolves the proxy into the individual {@link EPubFixedLayoutExportPreference} objects it stands for. */
  getElements(): EPubFixedLayoutExportPreference[];
  /** The unique ID of the object. */
  get id(): (string)[];
  set id(value: string);
  /** The PNG compression level. */
  readonly level: (number)[];
  /** Becomes `dc:publisher`. */
  get epubPublisher(): (string)[];
  set epubPublisher(value: string);
  /** Whether the EPUB has no cover image or uses the first page rasterized as one; see {@link EpubCover}. */
  get epubCover(): (EpubCover)[];
  set epubCover(value: EpubCover);
  /** The epub cover image file path. */
  get coverImageFile(): (string)[];
  set coverImageFile(value: string);
  /** The export resolution. */
  get imageExportResolution(): (ImageResolution)[];
  set imageExportResolution(value: ImageResolution);
  /** The file format for converted images, or `Automatic` to pick the best format per image; see {@link ImageConversion}. Note: Valid only when copy optimized images and/or copy formatted images is true. */
  get imageConversion(): (ImageConversion)[];
  set imageConversion(value: ImageConversion);
  /** The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. */
  get gifOptionsPalette(): (GIFOptionsPalette)[];
  set gifOptionsPalette(value: GIFOptionsPalette);
  /** If true, generates interlaced GIFs. Note: Not valid when image conversion is JPEG. */
  get gifOptionsInterlaced(): (boolean)[];
  set gifOptionsInterlaced(value: boolean);
  /** The quality of converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsQuality(): (JPEGOptionsQuality)[];
  set jpegOptionsQuality(value: JPEGOptionsQuality);
  /** The formatting method for converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsFormat(): (JPEGOptionsFormat)[];
  set jpegOptionsFormat(value: JPEGOptionsFormat);
  /** The name of TOC style to generate epub TOC. */
  get tocStyleName(): (string)[];
  set tocStyleName(value: string);
  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): (string[])[];
  set externalStyleSheets(value: string[]);
  /** The file path of external javascripts. */
  get javascripts(): (string[])[];
  set javascripts(value: string[]);
  /** Becomes the EPUB package's `dc:title`. Defaults to the document name when empty. */
  get epubTitle(): (string)[];
  set epubTitle(value: string);
  /** Becomes `dc:creator` — the author shown by reading systems. */
  get epubCreator(): (string)[];
  set epubCreator(value: string);
  /** Becomes `dc:subject`. Comma-separated values are written as separate subjects. */
  get epubSubject(): (string)[];
  set epubSubject(value: string);
  /** Becomes `dc:description`. */
  get epubDescription(): (string)[];
  set epubDescription(value: string);
  /** Becomes `dc:date`. Written verbatim, so an ISO 8601 date is the safe form. */
  get epubDate(): (string)[];
  set epubDate(value: string);
  /** Becomes `dc:rights` — the copyright statement. */
  get epubRights(): (string)[];
  set epubRights(value: string);
  /** The pages to export when {@link epubPageRangeFormat} is set to export a page range. */
  get epubPageRange(): (string)[];
  set epubPageRange(value: string);
  /** Whether all pages are exported or only those in {@link epubPageRange}; see {@link PageRangeFormat}. */
  get epubPageRangeFormat(): (PageRangeFormat)[];
  set epubPageRangeFormat(value: PageRangeFormat);
  /** Whether spreads follow the document's own layout or are forced to physical (single-page) spreads; see {@link EpubFixedLayoutSpreadControl}. */
  get epubSpreadControlOptions(): (EpubFixedLayoutSpreadControl)[];
  set epubSpreadControlOptions(value: EpubFixedLayoutSpreadControl);
  /** Whether the EPUB has no navigation or uses filename-based navigation; see {@link EpubNavigationStyle}. */
  get epubNavigationStyles(): (EpubNavigationStyle)[];
  set epubNavigationStyles(value: EpubNavigationStyle);
  /** Becomes `schema:accessibilityFeature`, listing what aids the book provides (`alternativeText`, `structuralNavigation`, …). */
  get epubAccessibilityFeature(): (string)[];
  set epubAccessibilityFeature(value: string);
  /** Becomes `schema:accessibilityHazard` — content that could harm a susceptible reader, such as `flashing` or `motionSimulation`. `none` is a meaningful value. */
  get epubAccessibilityHazard(): (string)[];
  set epubAccessibilityHazard(value: string);
  /** Becomes `schema:accessMode`: the senses a reader needs to use the book at all (`textual`, `visual`, …). */
  get epubAccessibilityMode(): (string)[];
  set epubAccessibilityMode(value: string);
  /** Becomes `schema:accessModeSufficient`: a combination of senses that is enough on its own, which is not the same as listing every mode present. */
  get epubAccessibilityModeSufficient(): (string)[];
  set epubAccessibilityModeSufficient(value: string);
  /** Becomes `schema:accessibilitySummary` — prose for a human deciding whether the book is usable. */
  get epubAccessibilitySummary(): (string)[];
  set epubAccessibilitySummary(value: string);
  /** Becomes `dcterms:conformsTo` — the accessibility specification claimed, given as its URL. */
  get epubAccessibilityConformsTo(): (string)[];
  set epubAccessibilityConformsTo(value: string);
  /** Becomes `a11y:certifiedBy` — who vouched for the accessibility claim. */
  get epubAccessibilityCertifiedBy(): (string)[];
  set epubAccessibilityCertifiedBy(value: string);
  /** Becomes `a11y:certifierCredential` — the certifier's qualification. */
  get epubAccessibilityCredentials(): (string)[];
  set epubAccessibilityCredentials(value: string);
  /** Becomes `a11y:certifierReport` — a URL for the full accessibility report. */
  get epubAccessibilityReportLink(): (string)[];
  set epubAccessibilityReportLink(value: string);
}
