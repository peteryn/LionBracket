import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type ChampionNodeComponent } from "./types";

export function ChampionNodeComponent({ data }: NodeProps<ChampionNodeComponent>) {
    return (
        <div className="champion-node">
            <p className="bourgeois champion-title">CHAMPION</p>
            <div className="champion-area">
                <div className="champion-image-container">
                    <img src="/logos/dignitas.png" alt="" />
                </div>
                <p className="bebas-neue-regular champion-name">The Ultimates</p>
            </div>
        </div>
    )
}