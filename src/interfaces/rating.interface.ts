import {TypeAttributes} from "rsuite/esm/@types/common";
import Size = TypeAttributes.Size;

export interface IRating {
    defaultValue: number,
    size: Size,
    readOnly: boolean,
}
