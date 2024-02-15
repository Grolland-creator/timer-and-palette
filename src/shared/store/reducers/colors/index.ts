import { ColorsAction, ColorsActionEnum, ColorsState } from "./types";

const initialState: ColorsState = {
    colors: []
}

export default function colorsReducer(state = initialState, action: ColorsAction): ColorsState {

    switch (action.type) {
        case ColorsActionEnum.ADD_COLOR:
            return { ...state, colors: [...state.colors, action.payload] }

        case ColorsActionEnum.DELETE_COLOR:
            let arr1 = [...state.colors];
            arr1 = arr1.filter(item => item.id !== action.payload)

            return { ...state, colors: arr1 }

        case ColorsActionEnum.CHANGE_COLOR:
            let arr2 = [...state.colors]
            arr2 = arr2.map(item =>
                item.id === action.payload.id
                    ? { ...item, hex: action.payload.hex }
                    : item
            )
            
            return { ...state, colors: arr2 }


        default:
            return state;
    }
}
