/**
 * CommentTypeEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CommentTypeEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CommentTypeEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CommentTypeEnum>): boolean;

  /**
   * @internal **WARNING:** `__CommentTypeEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CommentTypeEnum]: never;
}


/**
 * A sticky note.
 */
interface CommentTypeEnum_STICKY_NOTE_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021678;
}

/**
 * Highlighted text.
 */
interface CommentTypeEnum_HIGHLIGHT_TEXT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635018860;
}

/**
 * Underlined text.
 */
interface CommentTypeEnum_UNDERLINE_TEXT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635022188;
}

/**
 * Text marked with a squiggly underline.
 */
interface CommentTypeEnum_SQUIGGLY_TEXT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021681;
}

/**
 * Struck-through text.
 */
interface CommentTypeEnum_STRIKETHROUGH_TEXT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021682;
}

/**
 * A mark proposing replacement text.
 */
interface CommentTypeEnum_REPLACE_TEXT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021428;
}

/**
 * A mark proposing inserted text.
 */
interface CommentTypeEnum_INSERT_TEXT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635019124;
}

/**
 * Typewriter text.
 */
interface CommentTypeEnum_TEXT_TYPEWRITER_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021940;
}

/**
 * A text box.
 */
interface CommentTypeEnum_TEXT_BOX_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021922;
}

/**
 * A freeform drawing.
 */
interface CommentTypeEnum_FREEFORM_DRAWING_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635018340;
}

/**
 * A straight line.
 */
interface CommentTypeEnum_LINE_SEGMENT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635019891;
}

/**
 * An oval.
 */
interface CommentTypeEnum_OVAL_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635020662;
}

/**
 * A rectangle.
 */
interface CommentTypeEnum_RECTANGLE_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021420;
}

/**
 * A polygon.
 */
interface CommentTypeEnum_POLYGON_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635020908;
}

/**
 * An arrow.
 */
interface CommentTypeEnum_ARROW_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635017074;
}

/**
 * A text callout.
 */
interface CommentTypeEnum_TEXT_CALLOUT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021923;
}

/**
 * A stamp.
 */
interface CommentTypeEnum_STAMP_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635021680;
}

/**
 * A series of connected line segments.
 */
interface CommentTypeEnum_CONNECTED_LINES_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635017582;
}

/**
 * A cloud-shaped outline.
 */
interface CommentTypeEnum_CLOUD_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635017572;
}

/**
 * An invalid comment type.
 */
interface CommentTypeEnum_INVALID_COMMENT_TYPE extends CommentTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635019118;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The kind of comment or markup a PDF annotation carries.
 */
export declare namespace CommentTypeEnum {
/**
 * Type is sticky note
 */
type STICKY_NOTE_TYPE = CommentTypeEnum_STICKY_NOTE_TYPE;

/**
 * Type is highlight text
 */
type HIGHLIGHT_TEXT_TYPE = CommentTypeEnum_HIGHLIGHT_TEXT_TYPE;

/**
 * Type is underline text
 */
type UNDERLINE_TEXT_TYPE = CommentTypeEnum_UNDERLINE_TEXT_TYPE;

/**
 * Type is squiggly text
 */
type SQUIGGLY_TEXT_TYPE = CommentTypeEnum_SQUIGGLY_TEXT_TYPE;

/**
 * Type is strikethrough text
 */
type STRIKETHROUGH_TEXT_TYPE = CommentTypeEnum_STRIKETHROUGH_TEXT_TYPE;

/**
 * Type is replace text
 */
type REPLACE_TEXT_TYPE = CommentTypeEnum_REPLACE_TEXT_TYPE;

/**
 * Type is insert text
 */
type INSERT_TEXT_TYPE = CommentTypeEnum_INSERT_TEXT_TYPE;

/**
 * Type is text typewriter
 */
type TEXT_TYPEWRITER_TYPE = CommentTypeEnum_TEXT_TYPEWRITER_TYPE;

/**
 * Type is text box
 */
type TEXT_BOX_TYPE = CommentTypeEnum_TEXT_BOX_TYPE;

/**
 * Type is freeform drawing
 */
type FREEFORM_DRAWING_TYPE = CommentTypeEnum_FREEFORM_DRAWING_TYPE;

/**
 * Type is line segment
 */
type LINE_SEGMENT_TYPE = CommentTypeEnum_LINE_SEGMENT_TYPE;

/**
 * Type is oval
 */
type OVAL_TYPE = CommentTypeEnum_OVAL_TYPE;

/**
 * Type is rectangle
 */
type RECTANGLE_TYPE = CommentTypeEnum_RECTANGLE_TYPE;

/**
 * Type is polygon
 */
type POLYGON_TYPE = CommentTypeEnum_POLYGON_TYPE;

/**
 * Type is arrow
 */
type ARROW_TYPE = CommentTypeEnum_ARROW_TYPE;

/**
 * Type is text callout
 */
type TEXT_CALLOUT_TYPE = CommentTypeEnum_TEXT_CALLOUT_TYPE;

/**
 * Type is stamp
 */
type STAMP_TYPE = CommentTypeEnum_STAMP_TYPE;

/**
 * Type is connected lines
 */
type CONNECTED_LINES_TYPE = CommentTypeEnum_CONNECTED_LINES_TYPE;

/**
 * Type is cloud
 */
type CLOUD_TYPE = CommentTypeEnum_CLOUD_TYPE;

/**
 * Type is invalid comment type
 */
type INVALID_COMMENT_TYPE = CommentTypeEnum_INVALID_COMMENT_TYPE;

}
/**
 * The kind of comment or markup a PDF annotation carries.
 */
export declare const CommentTypeEnum: typeof Enumeration & {

  /**
   * A sticky note.
   */
  readonly STICKY_NOTE_TYPE: CommentTypeEnum_STICKY_NOTE_TYPE;
  /**
   * A sticky note.
   */
  readonly stickyNoteType: CommentTypeEnum_STICKY_NOTE_TYPE;
  /**
   * A sticky note.
   */
  readonly stickynotetype: CommentTypeEnum_STICKY_NOTE_TYPE;

  /**
   * Highlighted text.
   */
  readonly HIGHLIGHT_TEXT_TYPE: CommentTypeEnum_HIGHLIGHT_TEXT_TYPE;
  /**
   * Highlighted text.
   */
  readonly highlightTextType: CommentTypeEnum_HIGHLIGHT_TEXT_TYPE;
  /**
   * Highlighted text.
   */
  readonly highlighttexttype: CommentTypeEnum_HIGHLIGHT_TEXT_TYPE;

  /**
   * Underlined text.
   */
  readonly UNDERLINE_TEXT_TYPE: CommentTypeEnum_UNDERLINE_TEXT_TYPE;
  /**
   * Underlined text.
   */
  readonly underlineTextType: CommentTypeEnum_UNDERLINE_TEXT_TYPE;
  /**
   * Underlined text.
   */
  readonly underlinetexttype: CommentTypeEnum_UNDERLINE_TEXT_TYPE;

  /**
   * Text marked with a squiggly underline.
   */
  readonly SQUIGGLY_TEXT_TYPE: CommentTypeEnum_SQUIGGLY_TEXT_TYPE;
  /**
   * Text marked with a squiggly underline.
   */
  readonly squigglyTextType: CommentTypeEnum_SQUIGGLY_TEXT_TYPE;
  /**
   * Text marked with a squiggly underline.
   */
  readonly squigglytexttype: CommentTypeEnum_SQUIGGLY_TEXT_TYPE;

  /**
   * Struck-through text.
   */
  readonly STRIKETHROUGH_TEXT_TYPE: CommentTypeEnum_STRIKETHROUGH_TEXT_TYPE;
  /**
   * Struck-through text.
   */
  readonly strikethroughTextType: CommentTypeEnum_STRIKETHROUGH_TEXT_TYPE;
  /**
   * Struck-through text.
   */
  readonly strikethroughtexttype: CommentTypeEnum_STRIKETHROUGH_TEXT_TYPE;

  /**
   * A mark proposing replacement text.
   */
  readonly REPLACE_TEXT_TYPE: CommentTypeEnum_REPLACE_TEXT_TYPE;
  /**
   * A mark proposing replacement text.
   */
  readonly replaceTextType: CommentTypeEnum_REPLACE_TEXT_TYPE;
  /**
   * A mark proposing replacement text.
   */
  readonly replacetexttype: CommentTypeEnum_REPLACE_TEXT_TYPE;

  /**
   * A mark proposing inserted text.
   */
  readonly INSERT_TEXT_TYPE: CommentTypeEnum_INSERT_TEXT_TYPE;
  /**
   * A mark proposing inserted text.
   */
  readonly insertTextType: CommentTypeEnum_INSERT_TEXT_TYPE;
  /**
   * A mark proposing inserted text.
   */
  readonly inserttexttype: CommentTypeEnum_INSERT_TEXT_TYPE;

  /**
   * Typewriter text.
   */
  readonly TEXT_TYPEWRITER_TYPE: CommentTypeEnum_TEXT_TYPEWRITER_TYPE;
  /**
   * Typewriter text.
   */
  readonly textTypewriterType: CommentTypeEnum_TEXT_TYPEWRITER_TYPE;
  /**
   * Typewriter text.
   */
  readonly texttypewritertype: CommentTypeEnum_TEXT_TYPEWRITER_TYPE;

  /**
   * A text box.
   */
  readonly TEXT_BOX_TYPE: CommentTypeEnum_TEXT_BOX_TYPE;
  /**
   * A text box.
   */
  readonly textBoxType: CommentTypeEnum_TEXT_BOX_TYPE;
  /**
   * A text box.
   */
  readonly textboxtype: CommentTypeEnum_TEXT_BOX_TYPE;

  /**
   * A freeform drawing.
   */
  readonly FREEFORM_DRAWING_TYPE: CommentTypeEnum_FREEFORM_DRAWING_TYPE;
  /**
   * A freeform drawing.
   */
  readonly freeformDrawingType: CommentTypeEnum_FREEFORM_DRAWING_TYPE;
  /**
   * A freeform drawing.
   */
  readonly freeformdrawingtype: CommentTypeEnum_FREEFORM_DRAWING_TYPE;

  /**
   * A straight line.
   */
  readonly LINE_SEGMENT_TYPE: CommentTypeEnum_LINE_SEGMENT_TYPE;
  /**
   * A straight line.
   */
  readonly lineSegmentType: CommentTypeEnum_LINE_SEGMENT_TYPE;
  /**
   * A straight line.
   */
  readonly linesegmenttype: CommentTypeEnum_LINE_SEGMENT_TYPE;

  /**
   * An oval.
   */
  readonly OVAL_TYPE: CommentTypeEnum_OVAL_TYPE;
  /**
   * An oval.
   */
  readonly ovalType: CommentTypeEnum_OVAL_TYPE;
  /**
   * An oval.
   */
  readonly ovaltype: CommentTypeEnum_OVAL_TYPE;

  /**
   * A rectangle.
   */
  readonly RECTANGLE_TYPE: CommentTypeEnum_RECTANGLE_TYPE;
  /**
   * A rectangle.
   */
  readonly rectangleType: CommentTypeEnum_RECTANGLE_TYPE;
  /**
   * A rectangle.
   */
  readonly rectangletype: CommentTypeEnum_RECTANGLE_TYPE;

  /**
   * A polygon.
   */
  readonly POLYGON_TYPE: CommentTypeEnum_POLYGON_TYPE;
  /**
   * A polygon.
   */
  readonly polygonType: CommentTypeEnum_POLYGON_TYPE;
  /**
   * A polygon.
   */
  readonly polygontype: CommentTypeEnum_POLYGON_TYPE;

  /**
   * An arrow.
   */
  readonly ARROW_TYPE: CommentTypeEnum_ARROW_TYPE;
  /**
   * An arrow.
   */
  readonly arrowType: CommentTypeEnum_ARROW_TYPE;
  /**
   * An arrow.
   */
  readonly arrowtype: CommentTypeEnum_ARROW_TYPE;

  /**
   * A text callout.
   */
  readonly TEXT_CALLOUT_TYPE: CommentTypeEnum_TEXT_CALLOUT_TYPE;
  /**
   * A text callout.
   */
  readonly textCalloutType: CommentTypeEnum_TEXT_CALLOUT_TYPE;
  /**
   * A text callout.
   */
  readonly textcallouttype: CommentTypeEnum_TEXT_CALLOUT_TYPE;

  /**
   * A stamp.
   */
  readonly STAMP_TYPE: CommentTypeEnum_STAMP_TYPE;
  /**
   * A stamp.
   */
  readonly stampType: CommentTypeEnum_STAMP_TYPE;
  /**
   * A stamp.
   */
  readonly stamptype: CommentTypeEnum_STAMP_TYPE;

  /**
   * A series of connected line segments.
   */
  readonly CONNECTED_LINES_TYPE: CommentTypeEnum_CONNECTED_LINES_TYPE;
  /**
   * A series of connected line segments.
   */
  readonly connectedLinesType: CommentTypeEnum_CONNECTED_LINES_TYPE;
  /**
   * A series of connected line segments.
   */
  readonly connectedlinestype: CommentTypeEnum_CONNECTED_LINES_TYPE;

  /**
   * A cloud-shaped outline.
   */
  readonly CLOUD_TYPE: CommentTypeEnum_CLOUD_TYPE;
  /**
   * A cloud-shaped outline.
   */
  readonly cloudType: CommentTypeEnum_CLOUD_TYPE;
  /**
   * A cloud-shaped outline.
   */
  readonly cloudtype: CommentTypeEnum_CLOUD_TYPE;

  /**
   * An invalid comment type.
   */
  readonly INVALID_COMMENT_TYPE: CommentTypeEnum_INVALID_COMMENT_TYPE;
  /**
   * An invalid comment type.
   */
  readonly invalidCommentType: CommentTypeEnum_INVALID_COMMENT_TYPE;
  /**
   * An invalid comment type.
   */
  readonly invalidcommenttype: CommentTypeEnum_INVALID_COMMENT_TYPE;

}
