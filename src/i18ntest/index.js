import es from './es.json'
import pt from './pt.json'


export const defaultLocale = navigator.language.substring(0, 2);;

export const languages = {
    es: es,
    pt: pt,
}