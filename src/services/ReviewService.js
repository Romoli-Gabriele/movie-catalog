import {
    apiService
} from "./apiService";

const REVIEW_FILM_LIST = 'REVIEW_FILM_LIST';
const DATE = 'DATE';

export const reviewService = {
    async saveReviews(type, force = false) {
        if (this.hasOneDayPassed() || force) {

            const result = await apiService.getMyReviews(type)
            const mappedResult = await result.results.map((item) => ({
                id: item.id,
                type: type,
                rating: item.rating,

            }))
            localStorage.setItem(REVIEW_FILM_LIST, JSON.stringify(mappedResult))
            localStorage.setItem(DATE, JSON.stringify(new Date().toLocaleDateString()))


        }
    },

    hasOneDayPassed() {
        var date = new Date().toLocaleDateString();
        if (new Date(JSON.parse(localStorage.getItem(DATE))) === date) {
            return false;
        }
        return true;
    },

    currentReviews(type) {
        return this.saveReviews(type).then(() => JSON.parse(localStorage.getItem(REVIEW_FILM_LIST)))
    },

    getSingleReview(id, type) {
        return this.currentReviews(type).then((result) => result.find((item) =>
            item.id == id && item.type === type
        ))
    },
}