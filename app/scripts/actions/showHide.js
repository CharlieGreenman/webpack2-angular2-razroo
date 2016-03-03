import * as types from '../constants/ActionTypes';

export function showBlock(show) {
    return {
        type: types.SHOW,
        show
    };
}

dispatch(showBlock(show));

export function hideBlock(hide) {
    return {
        type: types.Hide,
        hide
    };
}

dispatch(hideBlock(hide));
