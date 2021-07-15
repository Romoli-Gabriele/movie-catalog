import {
    languageService
} from "./languageService";

export const formatterService = {
    formatDate(item) {

        const date = item.release_date ?? item.first_air_date ?? item.birthday;
        if (!date) return ""

        return new Intl.DateTimeFormat(languageService.getCurrentLanguage())
            .format(new Date(date))
    }
}