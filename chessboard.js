/*
Claire - Co Pilote
Anais  - 
Salim  - 
Arnaud - Pilote
Ranto  - 
*/


/* 1 - initier un tableau vide
2 - Faire boucle pour remplir le tableau ligne par ligne */


const chessboard = () => {
    const chess = [];
    const lettres =["a","b","c","d","e","f","g","h"];

    const coordinate = lettres.map((lettre) => {
        const ligne = [];
        for (i=0; i < lettres.length; i++){
            ligne.push(`${lettre} - ${i+1}`);
        }
        return ligne;
    });

    return coordinate;

};

module.exports = chessboard;
