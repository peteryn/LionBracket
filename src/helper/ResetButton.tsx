import { Panel } from "@xyflow/react";
import { MouseEventHandler } from "react";

export default function ResetButton({ resetBracket }: {
	resetBracket: MouseEventHandler<HTMLButtonElement> | undefined
}) {
	return (
		<Panel position="bottom-center" className="reset-panel">
			<button onClick={resetBracket} className="bourgeois ">
				RESET
			</button>
		</Panel>
	);
}