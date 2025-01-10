import { AFLBracketFlow } from "../../LionBracketEngine/src/afl_bracket/afl_bracket_flow";
import { levelOrderTraversal } from "../../LionBracketEngine/src/util/util";
import { RoundNodeType } from "./RoundNodeType";
import { AppNode } from "./types";


export function createAFLNodes(aflFlow: AFLBracketFlow) {
    const initialNodes: AppNode[] = [];

    const upperQuarterFinal1 = aflFlow.upperQuarterFinal1;
    const roundNodetype = new RoundNodeType()
    const obj = {
        id: upperQuarterFinal1.name,
        position: { x: 0, y: 0},
        data: 
    }
}