import { RoundNode } from "../../LionBracketEngine/src/models/round_node";
import { SwissBracket } from "../../LionBracketEngine/src/swiss_bracket/swiss_bracket";

export class RoundNodeType {
  [key: string]: unknown;
  name: string;
  roundNode: RoundNode;
  swissBracket: SwissBracket;
  updateSwissFun:
    | React.Dispatch<React.SetStateAction<RoundNode>>
    | undefined;
  inputHandleId: string;
  outputHandleId: string;
  qualifiedHandleId: string;
  eliminatedHandleId: string;

  constructor(
    name: string,
    roundNode: RoundNode,
    swissBracket: SwissBracket,
    updateSwissFun:
      | React.Dispatch<React.SetStateAction<RoundNode>>
      | undefined,
    inputHandleId: string,
    outputHandleId: string,
    qualifiedHandleId: string,
    eliminatedHandleId: string
  ) {
    this.name = name;
    this.roundNode = roundNode;
    this.swissBracket = swissBracket;
    this.updateSwissFun = updateSwissFun;
    this.inputHandleId = inputHandleId;
    this.outputHandleId = outputHandleId;
    this.qualifiedHandleId = qualifiedHandleId;
    this.eliminatedHandleId = eliminatedHandleId;
  }
}
