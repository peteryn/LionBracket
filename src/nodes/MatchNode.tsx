import { Handle, Position, type NodeProps } from "@xyflow/react";

import { type MatchNode } from "./types";

export function MatchNode({
    data,
}: NodeProps<MatchNode>) {
    return (
        <div className="react-flow__node-default">
            {/* {data.label && <div>{data.label}</div>} */}

            <div>
                {data.team1}
            </div>
            <div>
                {data.team2}
            </div>

            <StartingNode isStarting={data.isStarting ?? false}></StartingNode>
            <EndingNode isEnding={data.isEnding ?? false}></EndingNode>
        </div>
    )
}

function StartingNode({isStarting}: {isStarting: boolean}) {
    if (!isStarting) {
        return (
            <>
                <Handle type="target" position={Position.Left} id="a" style={{top: 20}}/>
                <Handle type="target" position={Position.Left} id="b" style={{top: 40}}/>
            </>
        )
    } else {
        return null;
    }
}

function EndingNode({ isEnding }: { isEnding: boolean }) {
    if (!isEnding) {
        return (
            <>
                <Handle type="source" position={Position.Right} id="c" style={{top: 20}}/>
                <Handle type="source" position={Position.Right} id="d" style={{top: 40}}/>
            </>
        );
    } else {
        return null;
    }
}