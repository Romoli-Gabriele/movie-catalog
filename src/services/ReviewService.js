import {
    apiService
} from "./apiService";

const REVIEW_FILM_LIST = 'REVIEW_FILM_LIST';
const DATE = 'DATE';

export const reviewService = {
    async saveReviews(force = false) {

        if (this.hasOneDayPassed() || force) {
            await apiService.getMyReviews('tv')
            await apiService.getMyReviews('movie')
            const tvReviews = await apiService.getMyReviews('tv')
            const movieReviews = await apiService.getMyReviews('movie')

            const tvMappedResult = tvReviews.results.map((item) => ({
                id: item.id,
                type: 'tv',
                rating: item.rating,

            }))

            const movieMappedResult = movieReviews.results.map((item) => ({
                id: item.id,
                type: 'movie',
                rating: item.rating,

            }))


            localStorage.setItem(REVIEW_FILM_LIST, JSON.stringify([...tvMappedResult, ...movieMappedResult]))

            localStorage.setItem(DATE, JSON.stringify(new Date().toLocaleDateString()))
        }
    },

    hasOneDayPassed() {

        var date = new Date().toLocaleDateString();
        if (JSON.parse(localStorage.getItem(DATE)) === date) {
            return false;
        }
        return true;
    },

    currentReviews(force = false) {
        return this.saveReviews(force).then(() => JSON.parse(localStorage.getItem(REVIEW_FILM_LIST)))
    },

    getSingleReview(id, type, force = false) {
        return this.currentReviews(force).then((result) => result.find((item) =>
            item.id == id && item.type === type
        ))
    },
}