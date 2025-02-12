import { SwissMatch } from "../../LionBracketEngine/src/models/match";

import { getScore } from "../helper/score";
import TeamInputArea from "./TeamInputArea";
import { addColor } from "../helper/color";
import { serializeBracket } from "../helper/serializer";
import { paths } from "../helper/TeamsTranslator";
import { RoundNode } from "../../LionBracketEngine/src/models/round_node";
import { SwissBracketFlow } from "../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";

export default function VersusRoundComponent({
  match,
  swissBracket,
  updateSwissFun,
}: {
  match: SwissMatch;
  swissBracket: SwissBracketFlow;
  updateSwissFun: React.Dispatch<React.SetStateAction<RoundNode>> | undefined;
}) {
  const roundNodeName = match.id.split(".")[0];

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
    const matchRecord = swissBracket.getMatchRecord(match.id);
    if (matchRecord) {
      matchRecord.upperSeedWins = upperTeamWins;
      matchRecord.lowerSeedWins = lowerTeamWins;
      swissBracket.setMatchRecord(match.id, matchRecord);
      if (updateSwissFun) {
        swissBracket.updateFlow(swissBracket.getRoundNode(roundNodeName));
        const cloned = structuredClone(swissBracket.rootRound);
        swissBracket.rootRound = cloned;
        updateSwissFun(cloned);
        serializeBracket(swissBracket.rootRound, "sb");
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
