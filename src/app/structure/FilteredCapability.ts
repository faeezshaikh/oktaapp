import { Capability, Level1sChild } from "./Capability";

export interface FilteredCapability {
    capability: Capability;
    matchingChildren: Level1sChild[];
}
