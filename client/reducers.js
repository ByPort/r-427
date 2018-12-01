import { combineReducers } from 'redux';
import { userStatus, answerStatus, pages } from './constants'
import { answerMap } from './questions'
import { loadScore } from './actions'

const defaultUserState = {
    name: null,
    group: null,
    status: userStatus.LOGGED_OUT,
    variant: null,
    elapsedTime: 0,
    result: []
}

const currentPage = (state = { pageName: pages.MAIN, subPageName: null }, action) => ({
    NAVIGATE() {
        return Object.assign(
            {},
            { pageName: pages[action.pageName], subPageName: action.subPageName, anchor: action.anchor }
        )
    }
}[action.type] || (() => state))();

const currentUser = (state = defaultUserState, action) => ({
    LOGIN() {
        return Object.assign(
            {},
            state,
            { name: action.name, group: action.group, variant: action.variant, status: userStatus.WORKING, elapsedTime: 0 }
        );
    },
    NAVIGATE() {
        return defaultUserState;
    },
    SET_TIME() { return Object.assign({}, state, { elapsedTime: action.value }) },
    VALIDATE_ANSWERS() {
        const result = answerMap[action.testID][state.variant].map((e,i) => {
            if(action.answers[i] == null) return answerStatus.NONE;
            return e == action.answers[i] ? answerStatus.TRUE : answerStatus.FALSE;
        });
        return Object.assign({}, state, { result, status: userStatus.FINISHED });
    },
    RETRY() {
        return Object.assign({}, state, { elapsedTime: 0, result: [], status: userStatus.WORKING })
    },
    LOAD_RESULTS() {
        const results = loadScore();
        return Object.assign({}, state, { result: results })
    }
}[action.type] || (() => state))();

export default combineReducers({ currentPage, currentUser });
