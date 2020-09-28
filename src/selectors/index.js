import { createSelector } from 'reselect';

const getDatesHeader = (state) => {
    return state.datesHeader;
};

const getIDs = (state, language, id) => {
    const rightId = language === "Hebrew" ? id - 1 : id + 1;
    const leftId = language === "Hebrew" ? id + 1 : id - 1;
    return { rightId, leftId };
};

export const makeGetNearViewedMonths = () => {
    return createSelector(
        [getDatesHeader, getIDs],
        (datesHeaderState, IDs) => {
            const { rightId, leftId } = IDs;
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