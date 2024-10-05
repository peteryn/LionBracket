import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";

import { type MatchNode } from "./types";

export function MatchNode({
    data,
}: NodeProps<MatchNode>) {

function declareWinner(e: any, team: string) {
    console.log(`Winner declared for ${team}: ${e.target.value}`);
    const newEdge: Edge = {
            id: `edge-${team}`,
            source: 'a', // Replace with actual source node ID
            target: 'c', // Replace with actual target node ID
            type: 'smoothstep', // or any other type you prefer
        };
    data.update(newEdge)
}
    return (
        <div className="react-flow__node-default">
            <div>
                {data.team1}
                <input id="t1" type="text" style={{width: 10, marginLeft: 10}} onChange={(e) => declareWinner(e, 'team1')} />
            </div>
            <div>
                {data.team2}
                <input id="t2" type="text" style={{width: 10, marginLeft: 10}} />
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