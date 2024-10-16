import { TeamArea } from "../teams/TeamArea";
import { Match } from "./Match";

export default function MatchComponent({
	data,
	onChange,
}: {
	data: Match;
	onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<>
			<TeamArea
				team={data.team1}
				inputId={data.getTeam1InputId()}
				onChange={onChange}
			></TeamArea>
			<hr />
			<TeamArea
				team={data.team2}
				inputId={data.getTeam2InputId()}
				onChange={onChange}
			></TeamArea>
		</>
	);
}
