const htmlSettings = {
    language : 'hu',
    characterSet : 'UTF-8',
    cssFolder: 'style',
    imagesFolder: 'images'
}

const copyRightInfo = {
    companyName : 'Példa Név',
    currentYear : new Date().getFullYear()
}

const pageNames = {
    index: 'Kezdőlap',
    work: 'Feladat',
    contact: 'Kapcsolat',
    about: 'Rólunk',
    error: 'Hiba - 404'
}

module.exports = {
    htmlSettings: htmlSettings,
    copyRightInfo: copyRightInfo,
    pageNames: pageNames
};
