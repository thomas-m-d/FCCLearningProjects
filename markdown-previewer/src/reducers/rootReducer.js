import { UPDATEPREVIEW } from '../actions/actionNames';
import { initialState } from '../store';
import marked from 'marked';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATEPREVIEW:
            return {
                markdownText: action.text,
                formattedText: marked(action.text)
            };
        default:
            return state;
    }
}

export default rootReducer;