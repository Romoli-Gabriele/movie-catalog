const availableLanguages = [{
        iso_639_1: "de",
        english_name: "German",
        name: "Deutsch",
    },
    {
        iso_639_1: "it",
        english_name: "Italian",
        name: "Italiano",
    },
    {
        iso_639_1: "ja",
        english_name: "Japanese",
        name: "日本語",
    },
    {
        iso_639_1: "fr",
        english_name: "French",
        name: "Français",
    },
    {
        iso_639_1: "en",
        english_name: "English",
        name: "English",
    },
    {
        iso_639_1: "es",
        english_name: "Spanish",
        name: "Español",
    },
]

export const languageService = {
    getLanguageById(isoLanguage) {
        return availableLanguages.find(l => l.iso_639_1 === isoLanguage)
    }
}
