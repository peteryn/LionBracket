import { NodeProps } from "@xyflow/react";
import { type MatchNodeIsolatedComponent } from "../types.ts";

export function MatchNodeIsolatedComponent({data}: NodeProps<MatchNodeIsolatedComponent>) {
    return (
        <div className="match-node">
            <div className="match-node-area">
                <div className="match-team-area">
                    <div className="match-team-area-image-container">
                        <img src="/logos/g2.png" alt="" />
                    </div>
                    <div className="match-team-area-name bourgeois">G2 Esports</div>
                    <div>input</div>
                </div>

                <div className="match-team-area">
                    <div className="match-team-area-image-container">
                        <img src="/logos/vitality.png" alt="" />
                    </div>
                    <div className="match-team-area-name">Vitality</div>
                    <div>input</div>
                </div>


            </div>
        </div>
    )
}