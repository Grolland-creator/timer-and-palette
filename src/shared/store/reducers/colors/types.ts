import { IColor } from "../../../types/IColor";

export interface ColorsState {
    colors: IColor[]
}

export enum ColorsActionEnum {
    ADD_COLOR = 'ADD_COLOR',
    DELETE_COLOR = 'DELETE_COLOR',
    CHANGE_COLOR = 'CHANGE_COLOR'
}

export interface AddColorAction {
    type: ColorsActionEnum.ADD_COLOR;
    payload: IColor;
}

export interface DeleteColorAction {
    type: ColorsActionEnum.DELETE_COLOR;
    payload: number;
}

export interface ChangeColorAction {
    type: ColorsActionEnum.CHANGE_COLOR;
    payload: {id: number, hex: string};
}

export type ColorsAction =
    AddColorAction |
    DeleteColorAction |
    ChangeColorAction
    