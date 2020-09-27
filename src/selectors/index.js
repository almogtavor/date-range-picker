import { createSelector } from 'reselect';

const getDatesHeader = state => {console.log(state);
    return state.datesHeader};

export const makeGetNearViewedMonths = () => {
    return createSelector(
        [getDatesHeader],
        (datesHeaderState, language, id) => {
            const leftId = language === "Hebrew" ? id + 1 : id - 1;
            const rightId = language === "Hebrew" ? id - 1 : id + 1;
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
}