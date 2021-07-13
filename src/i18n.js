import it from "./assets/i18n/it.json"
import de from "./assets/i18n/de.json"
import en from "./assets/i18n/en.json"
import { languageService } from "./services/languageService"
import {
    createI18n
} from "vue-i18n"

export default createI18n({
    locale: languageService.getCurrentLanguage() || 'en',
    messages: {
        it: it,
        de: de,
        en: en
    }
})