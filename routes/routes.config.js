const htmlConfig = {
    language: 'hu',
    characterSet: 'UTF-8',
    cssFolder: 'style',
    imagesFolder: 'images'
}

const copyRightInfo = {
    name: 'Példa Név',
    address: '6724, Szeged',
    phone: '+36123456789',
    email: 'info@pelda.hu',
    year: new Date().getFullYear()
}

const pageNames = {
    index: 'Kezdőlap',
    work: 'Feladat',
    contact: 'Kapcsolat',
    about: 'Rólunk',
    highlited: 'GitHub',
    error: 'Hiba - 404'
}

module.exports = {
    htmlSettings: htmlConfig,
    copyRightInfo: copyRightInfo,
    pageNames: pageNames
};
