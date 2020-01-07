import UPDATE from './actionNames';

export const updateAction = (text) => {
    return {
        type: UPDATE,
        markdownText: text
    }
}