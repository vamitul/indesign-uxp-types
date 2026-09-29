/**
 * UITools.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __UITools: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface UITools extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<UITools>): boolean;

  /**
   * @internal **WARNING:** `__UITools` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__UITools]: never;
}


/**
 * No selection
 */
interface UITools_NONE extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * The selection tool
 */
interface UITools_SELECTION_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936018548;
}

/**
 * The direct selection tool
 */
interface UITools_DIRECT_SELECTION_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685277812;
}

/**
 * The gap tool
 */
interface UITools_GAP_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1734430836;
}

/**
 * The pen tool
 */
interface UITools_PEN_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885687412;
}

/**
 * The add anchor point tool
 */
interface UITools_ADD_ANCHOR_POINT extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1633767540;
}

/**
 * The delete anchor point tool
 */
interface UITools_DELETE_ANCHOR_POINT extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684099188;
}

/**
 * The convert direction point tool
 */
interface UITools_CONVERT_DIRECTION_POINT extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667518580;
}

/**
 * The line tool
 */
interface UITools_LINE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819169900;
}

/**
 * The type tool
 */
interface UITools_TYPE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1954107508;
}

/**
 * The type on a path tool
 */
interface UITools_TYPE_ON_PATH_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953452148;
}

/**
 * The pencil tool
 */
interface UITools_PENCIL_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886274412;
}

/**
 * The smooth tool
 */
interface UITools_SMOOTH_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936544872;
}

/**
 * The erase tool
 */
interface UITools_ERASE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701991269;
}

/**
 * The polygon frame tool
 */
interface UITools_POLYGON_FRAME_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885754476;
}

/**
 * The rectangle frame tool
 */
interface UITools_RECTANGLE_FRAME_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919308908;
}

/**
 * The ellipse frame tool
 */
interface UITools_ELLIPSE_FRAME_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701205100;
}

/**
 * The polygon tool
 */
interface UITools_POLYGON_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886147692;
}

/**
 * The rectangle tool
 */
interface UITools_RECTANGLE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919243372;
}

/**
 * The ellipse tool
 */
interface UITools_ELLIPSE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701598316;
}

/**
 * The rotate tool
 */
interface UITools_ROTATE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919898732;
}

/**
 * The scale tool
 */
interface UITools_SCALE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1935889516;
}

/**
 * The shear tool
 */
interface UITools_SHEAR_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936217196;
}

/**
 * The scissors tool
 */
interface UITools_SCISSORS_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1935891060;
}

/**
 * The free transform tool
 */
interface UITools_FREE_TRANSFORM_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718899820;
}

/**
 * The gradient swatch tool
 */
interface UITools_GRADIENT_SWATCH_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1735611500;
}

/**
 * The gradient feather tool
 */
interface UITools_GRADIENT_FEATHER_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1734759532;
}

/**
 * The note tool
 */
interface UITools_NOTE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852789868;
}

/**
 * The eye dropper tool
 */
interface UITools_EYE_DROPPER_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701074028;
}

/**
 * The measure tool
 */
interface UITools_MEASURE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835357292;
}

/**
 * The hand tool
 */
interface UITools_HAND_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1751209068;
}

/**
 * The zoom tool
 */
interface UITools_ZOOM_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053985388;
}

/**
 * The table creation tool
 */
interface UITools_TABLE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952601196;
}

/**
 * The place cursor tool which gets set after an import via the Place command
 */
interface UITools_PLACE_CURSOR_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885557868;
}

/**
 * The motion path tool
 */
interface UITools_MOTION_PATH_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1836078188;
}

/**
 * The page tool
 */
interface UITools_PAGE_TOOL extends UITools {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936741484;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which tool in the Tools panel is active — a selection, drawing, transform, or navigation
 * tool, or none.
 */
export declare namespace UITools {
/**
 * No selection
 */
type NONE = UITools_NONE;

/**
 * The selection tool
 */
type SELECTION_TOOL = UITools_SELECTION_TOOL;

/**
 * The direct selection tool
 */
type DIRECT_SELECTION_TOOL = UITools_DIRECT_SELECTION_TOOL;

/**
 * The gap tool
 */
type GAP_TOOL = UITools_GAP_TOOL;

/**
 * The pen tool
 */
type PEN_TOOL = UITools_PEN_TOOL;

/**
 * The add anchor point tool
 */
type ADD_ANCHOR_POINT = UITools_ADD_ANCHOR_POINT;

/**
 * The delete anchor point tool
 */
type DELETE_ANCHOR_POINT = UITools_DELETE_ANCHOR_POINT;

/**
 * The convert direction point tool
 */
type CONVERT_DIRECTION_POINT = UITools_CONVERT_DIRECTION_POINT;

/**
 * The line tool
 */
type LINE_TOOL = UITools_LINE_TOOL;

/**
 * The type tool
 */
type TYPE_TOOL = UITools_TYPE_TOOL;

/**
 * The type on a path tool
 */
type TYPE_ON_PATH_TOOL = UITools_TYPE_ON_PATH_TOOL;

/**
 * The pencil tool
 */
type PENCIL_TOOL = UITools_PENCIL_TOOL;

/**
 * The smooth tool
 */
type SMOOTH_TOOL = UITools_SMOOTH_TOOL;

/**
 * The erase tool
 */
type ERASE_TOOL = UITools_ERASE_TOOL;

/**
 * The polygon frame tool
 */
type POLYGON_FRAME_TOOL = UITools_POLYGON_FRAME_TOOL;

/**
 * The rectangle frame tool
 */
type RECTANGLE_FRAME_TOOL = UITools_RECTANGLE_FRAME_TOOL;

/**
 * The ellipse frame tool
 */
type ELLIPSE_FRAME_TOOL = UITools_ELLIPSE_FRAME_TOOL;

/**
 * The polygon tool
 */
type POLYGON_TOOL = UITools_POLYGON_TOOL;

/**
 * The rectangle tool
 */
type RECTANGLE_TOOL = UITools_RECTANGLE_TOOL;

/**
 * The ellipse tool
 */
type ELLIPSE_TOOL = UITools_ELLIPSE_TOOL;

/**
 * The rotate tool
 */
type ROTATE_TOOL = UITools_ROTATE_TOOL;

/**
 * The scale tool
 */
type SCALE_TOOL = UITools_SCALE_TOOL;

/**
 * The shear tool
 */
type SHEAR_TOOL = UITools_SHEAR_TOOL;

/**
 * The scissors tool
 */
type SCISSORS_TOOL = UITools_SCISSORS_TOOL;

/**
 * The free transform tool
 */
type FREE_TRANSFORM_TOOL = UITools_FREE_TRANSFORM_TOOL;

/**
 * The gradient swatch tool
 */
type GRADIENT_SWATCH_TOOL = UITools_GRADIENT_SWATCH_TOOL;

/**
 * The gradient feather tool
 */
type GRADIENT_FEATHER_TOOL = UITools_GRADIENT_FEATHER_TOOL;

/**
 * The note tool
 */
type NOTE_TOOL = UITools_NOTE_TOOL;

/**
 * The eye dropper tool
 */
type EYE_DROPPER_TOOL = UITools_EYE_DROPPER_TOOL;

/**
 * The measure tool
 */
type MEASURE_TOOL = UITools_MEASURE_TOOL;

/**
 * The hand tool
 */
type HAND_TOOL = UITools_HAND_TOOL;

/**
 * The zoom tool
 */
type ZOOM_TOOL = UITools_ZOOM_TOOL;

/**
 * The table creation tool
 */
type TABLE_TOOL = UITools_TABLE_TOOL;

/**
 * The place cursor tool which gets set after an import via the Place command
 */
type PLACE_CURSOR_TOOL = UITools_PLACE_CURSOR_TOOL;

/**
 * The motion path tool
 */
type MOTION_PATH_TOOL = UITools_MOTION_PATH_TOOL;

/**
 * The page tool
 */
type PAGE_TOOL = UITools_PAGE_TOOL;

}
/**
 * Which tool in the Tools panel is active — a selection, drawing, transform, or navigation
 * tool, or none.
 */
export declare const UITools: typeof Enumeration & {

  /**
   * No selection
   */
  readonly NONE: UITools_NONE;
  /**
   * No selection
   */
  readonly none: UITools_NONE;

  /**
   * The selection tool
   */
  readonly SELECTION_TOOL: UITools_SELECTION_TOOL;
  /**
   * The selection tool
   */
  readonly selectionTool: UITools_SELECTION_TOOL;
  /**
   * The selection tool
   */
  readonly selectiontool: UITools_SELECTION_TOOL;

  /**
   * The direct selection tool
   */
  readonly DIRECT_SELECTION_TOOL: UITools_DIRECT_SELECTION_TOOL;
  /**
   * The direct selection tool
   */
  readonly directSelectionTool: UITools_DIRECT_SELECTION_TOOL;
  /**
   * The direct selection tool
   */
  readonly directselectiontool: UITools_DIRECT_SELECTION_TOOL;

  /**
   * The gap tool
   */
  readonly GAP_TOOL: UITools_GAP_TOOL;
  /**
   * The gap tool
   */
  readonly gapTool: UITools_GAP_TOOL;
  /**
   * The gap tool
   */
  readonly gaptool: UITools_GAP_TOOL;

  /**
   * The pen tool
   */
  readonly PEN_TOOL: UITools_PEN_TOOL;
  /**
   * The pen tool
   */
  readonly penTool: UITools_PEN_TOOL;
  /**
   * The pen tool
   */
  readonly pentool: UITools_PEN_TOOL;

  /**
   * The add anchor point tool
   */
  readonly ADD_ANCHOR_POINT: UITools_ADD_ANCHOR_POINT;
  /**
   * The add anchor point tool
   */
  readonly addAnchorPoint: UITools_ADD_ANCHOR_POINT;
  /**
   * The add anchor point tool
   */
  readonly addanchorpoint: UITools_ADD_ANCHOR_POINT;

  /**
   * The delete anchor point tool
   */
  readonly DELETE_ANCHOR_POINT: UITools_DELETE_ANCHOR_POINT;
  /**
   * The delete anchor point tool
   */
  readonly deleteAnchorPoint: UITools_DELETE_ANCHOR_POINT;
  /**
   * The delete anchor point tool
   */
  readonly deleteanchorpoint: UITools_DELETE_ANCHOR_POINT;

  /**
   * The convert direction point tool
   */
  readonly CONVERT_DIRECTION_POINT: UITools_CONVERT_DIRECTION_POINT;
  /**
   * The convert direction point tool
   */
  readonly convertDirectionPoint: UITools_CONVERT_DIRECTION_POINT;
  /**
   * The convert direction point tool
   */
  readonly convertdirectionpoint: UITools_CONVERT_DIRECTION_POINT;

  /**
   * The line tool
   */
  readonly LINE_TOOL: UITools_LINE_TOOL;
  /**
   * The line tool
   */
  readonly lineTool: UITools_LINE_TOOL;
  /**
   * The line tool
   */
  readonly linetool: UITools_LINE_TOOL;

  /**
   * The type tool
   */
  readonly TYPE_TOOL: UITools_TYPE_TOOL;
  /**
   * The type tool
   */
  readonly typeTool: UITools_TYPE_TOOL;
  /**
   * The type tool
   */
  readonly typetool: UITools_TYPE_TOOL;

  /**
   * The type on a path tool
   */
  readonly TYPE_ON_PATH_TOOL: UITools_TYPE_ON_PATH_TOOL;
  /**
   * The type on a path tool
   */
  readonly typeOnPathTool: UITools_TYPE_ON_PATH_TOOL;
  /**
   * The type on a path tool
   */
  readonly typeonpathtool: UITools_TYPE_ON_PATH_TOOL;

  /**
   * The pencil tool
   */
  readonly PENCIL_TOOL: UITools_PENCIL_TOOL;
  /**
   * The pencil tool
   */
  readonly pencilTool: UITools_PENCIL_TOOL;
  /**
   * The pencil tool
   */
  readonly penciltool: UITools_PENCIL_TOOL;

  /**
   * The smooth tool
   */
  readonly SMOOTH_TOOL: UITools_SMOOTH_TOOL;
  /**
   * The smooth tool
   */
  readonly smoothTool: UITools_SMOOTH_TOOL;
  /**
   * The smooth tool
   */
  readonly smoothtool: UITools_SMOOTH_TOOL;

  /**
   * The erase tool
   */
  readonly ERASE_TOOL: UITools_ERASE_TOOL;
  /**
   * The erase tool
   */
  readonly eraseTool: UITools_ERASE_TOOL;
  /**
   * The erase tool
   */
  readonly erasetool: UITools_ERASE_TOOL;

  /**
   * The polygon frame tool
   */
  readonly POLYGON_FRAME_TOOL: UITools_POLYGON_FRAME_TOOL;
  /**
   * The polygon frame tool
   */
  readonly polygonFrameTool: UITools_POLYGON_FRAME_TOOL;
  /**
   * The polygon frame tool
   */
  readonly polygonframetool: UITools_POLYGON_FRAME_TOOL;

  /**
   * The rectangle frame tool
   */
  readonly RECTANGLE_FRAME_TOOL: UITools_RECTANGLE_FRAME_TOOL;
  /**
   * The rectangle frame tool
   */
  readonly rectangleFrameTool: UITools_RECTANGLE_FRAME_TOOL;
  /**
   * The rectangle frame tool
   */
  readonly rectangleframetool: UITools_RECTANGLE_FRAME_TOOL;

  /**
   * The ellipse frame tool
   */
  readonly ELLIPSE_FRAME_TOOL: UITools_ELLIPSE_FRAME_TOOL;
  /**
   * The ellipse frame tool
   */
  readonly ellipseFrameTool: UITools_ELLIPSE_FRAME_TOOL;
  /**
   * The ellipse frame tool
   */
  readonly ellipseframetool: UITools_ELLIPSE_FRAME_TOOL;

  /**
   * The polygon tool
   */
  readonly POLYGON_TOOL: UITools_POLYGON_TOOL;
  /**
   * The polygon tool
   */
  readonly polygonTool: UITools_POLYGON_TOOL;
  /**
   * The polygon tool
   */
  readonly polygontool: UITools_POLYGON_TOOL;

  /**
   * The rectangle tool
   */
  readonly RECTANGLE_TOOL: UITools_RECTANGLE_TOOL;
  /**
   * The rectangle tool
   */
  readonly rectangleTool: UITools_RECTANGLE_TOOL;
  /**
   * The rectangle tool
   */
  readonly rectangletool: UITools_RECTANGLE_TOOL;

  /**
   * The ellipse tool
   */
  readonly ELLIPSE_TOOL: UITools_ELLIPSE_TOOL;
  /**
   * The ellipse tool
   */
  readonly ellipseTool: UITools_ELLIPSE_TOOL;
  /**
   * The ellipse tool
   */
  readonly ellipsetool: UITools_ELLIPSE_TOOL;

  /**
   * The rotate tool
   */
  readonly ROTATE_TOOL: UITools_ROTATE_TOOL;
  /**
   * The rotate tool
   */
  readonly rotateTool: UITools_ROTATE_TOOL;
  /**
   * The rotate tool
   */
  readonly rotatetool: UITools_ROTATE_TOOL;

  /**
   * The scale tool
   */
  readonly SCALE_TOOL: UITools_SCALE_TOOL;
  /**
   * The scale tool
   */
  readonly scaleTool: UITools_SCALE_TOOL;
  /**
   * The scale tool
   */
  readonly scaletool: UITools_SCALE_TOOL;

  /**
   * The shear tool
   */
  readonly SHEAR_TOOL: UITools_SHEAR_TOOL;
  /**
   * The shear tool
   */
  readonly shearTool: UITools_SHEAR_TOOL;
  /**
   * The shear tool
   */
  readonly sheartool: UITools_SHEAR_TOOL;

  /**
   * The scissors tool
   */
  readonly SCISSORS_TOOL: UITools_SCISSORS_TOOL;
  /**
   * The scissors tool
   */
  readonly scissorsTool: UITools_SCISSORS_TOOL;
  /**
   * The scissors tool
   */
  readonly scissorstool: UITools_SCISSORS_TOOL;

  /**
   * The free transform tool
   */
  readonly FREE_TRANSFORM_TOOL: UITools_FREE_TRANSFORM_TOOL;
  /**
   * The free transform tool
   */
  readonly freeTransformTool: UITools_FREE_TRANSFORM_TOOL;
  /**
   * The free transform tool
   */
  readonly freetransformtool: UITools_FREE_TRANSFORM_TOOL;

  /**
   * The gradient swatch tool
   */
  readonly GRADIENT_SWATCH_TOOL: UITools_GRADIENT_SWATCH_TOOL;
  /**
   * The gradient swatch tool
   */
  readonly gradientSwatchTool: UITools_GRADIENT_SWATCH_TOOL;
  /**
   * The gradient swatch tool
   */
  readonly gradientswatchtool: UITools_GRADIENT_SWATCH_TOOL;

  /**
   * The gradient feather tool
   */
  readonly GRADIENT_FEATHER_TOOL: UITools_GRADIENT_FEATHER_TOOL;
  /**
   * The gradient feather tool
   */
  readonly gradientFeatherTool: UITools_GRADIENT_FEATHER_TOOL;
  /**
   * The gradient feather tool
   */
  readonly gradientfeathertool: UITools_GRADIENT_FEATHER_TOOL;

  /**
   * The note tool
   */
  readonly NOTE_TOOL: UITools_NOTE_TOOL;
  /**
   * The note tool
   */
  readonly noteTool: UITools_NOTE_TOOL;
  /**
   * The note tool
   */
  readonly notetool: UITools_NOTE_TOOL;

  /**
   * The eye dropper tool
   */
  readonly EYE_DROPPER_TOOL: UITools_EYE_DROPPER_TOOL;
  /**
   * The eye dropper tool
   */
  readonly eyeDropperTool: UITools_EYE_DROPPER_TOOL;
  /**
   * The eye dropper tool
   */
  readonly eyedroppertool: UITools_EYE_DROPPER_TOOL;

  /**
   * The measure tool
   */
  readonly MEASURE_TOOL: UITools_MEASURE_TOOL;
  /**
   * The measure tool
   */
  readonly measureTool: UITools_MEASURE_TOOL;
  /**
   * The measure tool
   */
  readonly measuretool: UITools_MEASURE_TOOL;

  /**
   * The hand tool
   */
  readonly HAND_TOOL: UITools_HAND_TOOL;
  /**
   * The hand tool
   */
  readonly handTool: UITools_HAND_TOOL;
  /**
   * The hand tool
   */
  readonly handtool: UITools_HAND_TOOL;

  /**
   * The zoom tool
   */
  readonly ZOOM_TOOL: UITools_ZOOM_TOOL;
  /**
   * The zoom tool
   */
  readonly zoomTool: UITools_ZOOM_TOOL;
  /**
   * The zoom tool
   */
  readonly zoomtool: UITools_ZOOM_TOOL;

  /**
   * The table creation tool
   */
  readonly TABLE_TOOL: UITools_TABLE_TOOL;
  /**
   * The table creation tool
   */
  readonly tableTool: UITools_TABLE_TOOL;
  /**
   * The table creation tool
   */
  readonly tabletool: UITools_TABLE_TOOL;

  /**
   * The place cursor tool which gets set after an import via the Place command
   */
  readonly PLACE_CURSOR_TOOL: UITools_PLACE_CURSOR_TOOL;
  /**
   * The place cursor tool which gets set after an import via the Place command
   */
  readonly placeCursorTool: UITools_PLACE_CURSOR_TOOL;
  /**
   * The place cursor tool which gets set after an import via the Place command
   */
  readonly placecursortool: UITools_PLACE_CURSOR_TOOL;

  /**
   * The motion path tool
   */
  readonly MOTION_PATH_TOOL: UITools_MOTION_PATH_TOOL;
  /**
   * The motion path tool
   */
  readonly motionPathTool: UITools_MOTION_PATH_TOOL;
  /**
   * The motion path tool
   */
  readonly motionpathtool: UITools_MOTION_PATH_TOOL;

  /**
   * The page tool
   */
  readonly PAGE_TOOL: UITools_PAGE_TOOL;
  /**
   * The page tool
   */
  readonly pageTool: UITools_PAGE_TOOL;
  /**
   * The page tool
   */
  readonly pagetool: UITools_PAGE_TOOL;

}
