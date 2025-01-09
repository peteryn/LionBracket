import { Match } from "../../LionBracketEngine/src/models/match";
import { SwissBracket } from "../../LionBracketEngine/src/swiss_bracket/swiss_bracket";

import { getScore } from "../helper/score";
import TeamInputArea from "./TeamInputArea";
import { addColor } from "../helper/color";
import { serializeBracket } from "../helper/serializer";
import { paths } from "../helper/TeamsTranslator";

export default function VersusRoundComponent({
  match,
  swissBracket,
  updateSwissFun,
}: {
  match: Match;
  swissBracket: SwissBracket;
  updateSwissFun:
    | React.Dispatch<React.SetStateAction<SwissBracketData>>
    | undefined;
}) {
  const upperInputId = `${match.id}upper`;
  const lowerInputId = `${match.id}lower`;

  let upperScore = 0;
  let lowerScore = 0;
  if (match.matchRecord) {
    upperScore = match.matchRecord.upperSeedWins;
    lowerScore = match.matchRecord.lowerSeedWins;
  }

  function onChange() {
    const upperTeamWins = getScore(upperInputId);
    const lowerTeamWins = getScore(lowerInputId);
    const matchRecord = swissBracket.getMatchRecordById(match.id);
    if (matchRecord) {
      matchRecord.upperSeedWins = upperTeamWins;
      matchRecord.lowerSeedWins = lowerTeamWins;
      swissBracket.setMatchRecordById(match.id, matchRecord);
      swissBracket.setMatchRecordWithValueById(
        match.id,
        upperTeamWins,
        lowerTeamWins
      );
      if (updateSwissFun) {
        const cloned = structuredClone(swissBracket.data);
        swissBracket.data = cloned;
        updateSwissFun(cloned);
        serializeBracket(swissBracket.data);
      } else {
        console.log("very bad error");
      }
    } else {
      console.log("match record doesnt exist bad error");
    }
  }

  let upperImagePath = "";
  let lowerImagePath = "";
  if (match.matchRecord) {
    upperImagePath = `/logos/${paths[match.matchRecord.upperSeed - 1]}.png`;
    lowerImagePath = `/logos/${paths[match.matchRecord.lowerSeed - 1]}.png`;
  }
  let classes = "versus ";
  const roundNodeName = match.id.split(".")[0];

  classes = addColor(roundNodeName, classes, [
    "round-winning-text",
    "round-middle-text",
    "round-losing-text",
    "round-start-text",
  ]);

  let colorClass = addColor(roundNodeName, "", [
    "round-winning-text",
    "round-middle-text",
    "round-losing-text",
    "round-start-text",
  ]);
  let upperClass = "";
  let lowerClass = "";
  if (upperScore > lowerScore) {
    upperClass = colorClass;
  } else if (upperScore < lowerScore) {
    lowerClass = colorClass;
  }

  return (
    <div className="versus-container" key={match.id}>
      <TeamInputArea
        updateFun={onChange}
        inputId={upperInputId}
        imagePath={upperImagePath}
        startingScore={upperScore}
        colorClass={upperClass}
      ></TeamInputArea>
      <div className="versus-section">
        <h3 className={classes}>VS</h3>
      </div>
      <TeamInputArea
        updateFun={onChange}
        inputId={lowerInputId}
        imagePath={lowerImagePath}
        startingScore={lowerScore}
        colorClass={lowerClass}
      ></TeamInputArea>
    </div>
  );
}
