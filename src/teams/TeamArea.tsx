import { Team } from "./Team";

export function TeamArea({
	team,
    inputId,
	onChange,
}: {
	team: Team | undefined;
    inputId: string;
	onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<div className="team-area">
			<div>
				<img src={team?.logo} alt="" className="image-fit" />
				{team?.name}
			</div>
			<input
				id={inputId}
				type="text"
				style={{ width: 10, marginLeft: 10 }}
				onChange={onChange}
				className="nodrag"
			/>
		</div>
	);
}
