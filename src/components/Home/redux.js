// export enum DIALOG_INFO {
//     FRONT_END = 'Angular + React',
//     JSTS = 'Typescript + Javascript',
//     PYTHON = 'Python',
//     CV = 'Computer Vision',
//     ML = 'Machine Learning',
//     GD = 'Game Development',
//     PROTEAN = 'Protean',
//     ERROR = 'Error'
// };
//Update below to above when transition to Typescript

export const FRONT_END = 'Angular + React';
export const JSTS = 'Typescript + Javascript'
export const PYTHON = 'Python'
export const CV = 'Computer Vision'
export const ML = 'Machine Learning'
export const GD = 'Game Development'
export const PROTEAN = 'Protean'
export const ERROR = 'Error'

export const OPEN_TASK = 'Open';
export const CLOSE_TASK = 'Close';

//ACTIONS
export const openDialogTask = (dialogData) => {
    return {
        type: OPEN_TASK,
        payload: dialogData
    }
};

export const closeDialogTask = () => {
    return {
        type: CLOSE_TASK
    }
};

//REDUCER
const initialDialogData = {
    opened: false,
    title: '',
    image: 'react',
    icon: '',
    text: ''
};

const dialogReducer = (state = initialDialogData, action) => {
    switch (action.type) {
        case OPEN_TASK:
            return {
                ...state,
                ...action.payload
            };
        case CLOSE_TASK:
            return {
                ...state,
                opened: false
            }
        default:
            return state;
    }
};

export default dialogReducer;