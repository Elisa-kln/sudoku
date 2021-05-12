const nombreAleatoire = nombreMax =>
    Math.trunc(Math.random() * nombreMax + 1)

const importerGrille = async() =>{
    //recupérer les données JSON du fichier
    //creer un objet à partir des données JSON
    const grilles = await fetch('grilles.json')
        .then(reponse => {
            if (reponse.ok === true){
                return reponse.json()
            }else {
                return Promise.reject('Fichier pas trouvé')
            }
        })

    // Choisir aléatoirement une grille dans la liste
    const numeroGrille = nombreAleatoire(grilles.length)
    const sudoku = grilles[numeroGrille - 1]
    const grille = sudoku.grille

    console.log(sudoku)


    //parcourir les lignes et les colonnes du tableau de tableau
    for (let ligne=0; ligne<9; ligne+=1){
        for (let col=0; col<9; col+=1){
        const valeur = grille[ligne][col]

        //Pour chaque champs,
        //si y'a une valeur,
        if (valeur != null){
            //rendre le champ texte non modifiable
            const identifiant = 'case' + ligne + '-' + col
            const input = document.getElementById(identifiant)
            input.readOnly = true

            //Ajouter la valeur au champs
            input.value = valeur
        }
        
        
        //si y'a pas de valeur,
        //ne rien faire
        
        }
    }

    
}

importerGrille()