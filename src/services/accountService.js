let currentUser = null;
export const accountService = {

    saveAccountData(data) {
        currentUser = data
    },
    getUserData() {
        return currentUser
    },
    getUserImage() {
        return currentUser?.avatar.tmdb.avatar_path
    },
    getAccountUsername() {
        return currentUser?.username
    },
}