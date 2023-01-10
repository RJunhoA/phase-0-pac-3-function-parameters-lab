function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language) {
    switch (language) {
        case 'Python':
            language = 'Python'
            break;
        default:
            language = 'JavaScript'
    }
    return `Hi, my name is ${name} and I am learning to program in ${language}.`

}