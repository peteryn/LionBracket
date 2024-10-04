import { Handle, Position, type NodeProps } from "@xyflow/react";

import { type VerticalInputNode } from "./types";

export function VerticalInputNode({
    positionAbsoluteX,
    positionAbsoluteY,
    data,
}: NodeProps<VerticalInputNode>) {
    const x = `${Math.round(positionAbsoluteX)}px`;
    const y = `${Math.round(positionAbsoluteY)}px`;
    return (
        <div className="react-flow__node-default">
            {/* {data.label && <div>{data.label}</div>} */}

            <div>
                G2
            </div>
            <div>
                BDS
            </div>

            {/* <Handle type="source" position={Position.Right} id="a" style={{top: 10}}/>
            <Handle type="source" position={Position.Right} id="b" style={{bottom: 10, top: 'auto'}}/> */}
            <Handle type="source" position={Position.Right} id="a" style={{top: 20}}/>
            <Handle type="source" position={Position.Right} id="b" style={{top: 40}}/>
        </div>
    )
}