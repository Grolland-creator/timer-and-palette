import { IColor } from "../../../types/IColor";
import { AddColorAction, ChangeColorAction, ColorsActionEnum, DeleteColorAction } from "./types";


export const ColorsActionCreators = {
    addColor: (color: IColor): AddColorAction => ({ type: ColorsActionEnum.ADD_COLOR, payload: color }),
    deleteColor: (id: number): DeleteColorAction => ({ type: ColorsActionEnum.DELETE_COLOR, payload: id }),
    changeColor: (id: number, hex: string): ChangeColorAction => ({ type: ColorsActionEnum.CHANGE_COLOR, payload: {id, hex} }),
}
