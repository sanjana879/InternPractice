/**
 * Language class is a simple polymorphism example with instanceof
 * 
 */
export class Language {
    greeting() {
        console.log("Music is a universal language.");
    }
}
/**
 * English class for greeting into english
 */
export class English extends Language {
    greeting() {
        console.log("Hello");
    }
}
/**
 * French class for greeting into french
 */
export class French extends Language{
    greeting() {
        console.log("Bonjour");
    }
}

/**
 * function takes language object and call proper greeting method of appropriate class
 * @param {Language} language The object of English/French/General language class
 */
export function intro(language) {
    if(language instanceof Language) {
        language.greeting();
    }
}



