import { SwissBracketFlow } from "../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";

export class ExitNodeType {
  [key: string]: unknown;
  title: string;
  colorClass: string;
  swissBracket: SwissBracketFlow;
  parent: string;
  inputHandleId: string;
  isPromoted: boolean;

  constructor(
    title: string,
    colorClass: string,
    swissBracket: SwissBracketFlow,
    parent: string,
    inputHandleId: string,
    isPromoted: boolean
  ) {
    this.title = title;
    this.colorClass = colorClass;
    this.swissBracket = swissBracket;
    this.parent = parent;
    this.inputHandleId = inputHandleId;
    this.isPromoted = isPromoted;
  }
}
