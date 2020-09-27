import { createSelector } from 'reselect';

const getDatesHeader = state => {console.log(state);
    return state.datesHeader};

export const getNearViewedMonths = createSelector(
    [getDatesHeader],
    (datesHeaderState, rightId, leftId) => {
        console.log(datesHeaderState, rightId, leftId)
        return {
            "right": {
                "year": datesHeaderState.viewedYear[rightId], 
                "month": datesHeaderState.viewedMonth[rightId],
            },
            "left": {
                "year": datesHeaderState.viewedYear[leftId],
                "month": datesHeaderState.viewedMonth[leftId],
            },
        }
    }
)