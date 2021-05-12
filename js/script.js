const ajouterErreur = (ligne, col) => {
    const input = document.getElementById('case' + ligne + '-' + col)
    input.classList.add('invalide')
    input.addEventListener('input',() => {
    input.classList.remove('invalide')
    }, {once:true})
}

const verifier = () => {
    //verifier que les nombres saisis son bien entre 1 et 9

    //recupérer tout les inputs
    const listInput = document.querySelectorAll('input');

    //enlever toutes les class invalide
    for (const input of listInput){
        input.classList.remove('invalide')
    }
    
    //chacun des inputs
    
    for (const input of listInput){
    //Vérifier que le champs est valide
        const validiteInput = input.checkValidity()

        if (validiteInput === false) {
            //si c'est pas valide, arrêtez le programme
            return
        }
    }
    
    //Tableau qui rajoute toutes les lignes
    const sudoku = []

    //Récupérer toutes les valeurs
    for (let ligne = 0; ligne<9; ligne+=1){
        const sudokuLigne = []
        
        for (let col=0; col<9; col+=1){
            
            const identifiant = 'case' + ligne + '-' + col
            const input = document.getElementById(identifiant)
            const valeur = input.value
            let nombre
           
            if (valeur === ''){
            //si valeur est un champs de texte vide
            // rien n'est saisi
            nombre = ''
            } else {
            //si valeur n'est pas vide
            //transformer valeur en nombre
                nombre=parseInt(valeur, 10)
            }

            //ajouter la valeur à la ligne
            sudokuLigne.push(nombre)
        } 

        //ajouter la ligne au sudoku
        sudoku.push(sudokuLigne)

    }

    console.log(sudoku)

    //verifier qu'il ni a pas de doublon dans les lignes
    //parcourir les lignes
    for (let ligne = 0; ligne<9; ligne+=1){
        const liste = new Set()
        
        //parcourir les éléments de la ligne
        for (let col=0; col<9; col+=1){
            const valeur = sudoku[ligne][col]
            
            //tester valeur vide
            //si valeur vide, ne rien faire
            if (valeur === ''){
                        
            }else{//sinon ajouter élément a une liste et qu'il n'y ai pas déjà
                const valeurExiste = liste.has(valeur)

                if (valeurExiste){
                    console.log('Erreur doublon' + ' ' + ligne + '-' + col)

                    //ajouter une class d'erreur au champs
                    ajouterErreur(ligne, col)
                }else{
                    //ajouter élément à la liste
                    liste.add(valeur)
                }
            }
            
        }
    }

    //parcourir les colonnes
    for (let col = 0; col<9; col+=1){
        const liste = new Set()
        
        //parcourir les éléments de la ligne
        for (let ligne=0; ligne<9; ligne+=1){
            const valeur = sudoku[ligne][col]
            
            //tester valeur vide
            //si valeur vide, ne rien faire
            if (valeur === ''){
                        
            }else{//sinon ajouter élément a une liste et qu'il n'y ai pas déjà
                const valeurExiste = liste.has(valeur)

                if (valeurExiste){
                    console.log('Erreur doublon' + ' ' + ligne + '-' + col)

                    //ajouter une class d'erreur au champs
                    ajouterErreur(ligne, col)
                }else{
                    //ajouter élément à la liste
                    liste.add(valeur)
                }
            }
            
        }
    }

    //indice des carrés
    const carres =[
        [
            [0,0],[0,1],[0,2],
            [1,0],[1,1],[1,2],
            [2,0],[2,1],[2,2],
        ],
        [
            [0,3],[0,4],[0,5],
            [1,3],[1,4],[1,5],
            [2,3],[2,4],[2,5],
        ],
        [
            [0,6],[0,7],[0,8],
            [1,6],[1,7],[1,8],
            [2,6],[2,7],[2,8],
        ],
        [
            [3,0],[3,1],[3,2],
            [4,0],[4,1],[4,2],
            [5,0],[5,1],[5,2],
        ],
        [
            [3,3],[3,4],[3,5],
            [4,3],[4,4],[4,5],
            [5,3],[5,4],[5,5],
        ],
        [
            [3,6],[3,7],[3,8],
            [4,6],[4,7],[4,8],
            [5,6],[5,7],[5,8],
        ],
        [
            [6,0],[6,1],[6,2],
            [7,0],[7,1],[7,2],
            [8,0],[8,1],[8,2],
        ],
        [
            [6,3],[6,4],[6,5],
            [7,3],[7,4],[7,5],
            [8,3],[8,4],[8,5],
        ],
        [
            [6,6],[6,7],[6,8],
            [7,6],[7,7],[7,8],
            [8,6],[8,7],[8,8],
        ],
    ]

    //parcourir les carrés
    for (const carre of carres){
        const liste = new Set()

        //pour chaque carré
        for (const element of carre){
            const ligne = element[0]
            const col = element[1]

            const valeur = sudoku[ligne][col]
            
            //tester valeur vide
            //si valeur vide, ne rien faire
            if (valeur === ''){
                        
            }else{//sinon ajouter élément a une liste et qu'il n'y ai pas déjà
                const valeurExiste = liste.has(valeur)

                if (valeurExiste){
                    console.log('Erreur doublon' + ' ' + ligne + '-' + col)

                    //ajouter une class d'erreur au champs
                    ajouterErreur(ligne, col)
                }else{
                    //ajouter élément à la liste
                    liste.add(valeur)
                }
            }
        }
    }

    //utiliser les indices pour vérifier les doublons

}

// Récupérer le bouton

const button = document.getElementById('verification');

//Assigner l'événement click à la fontion vérifier

button.addEventListener('click', verifier)