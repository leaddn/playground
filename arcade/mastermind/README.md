# Guess the number :

## Etapes :

- Générer un code couleur aléatoire pour 4 boules et 4 couleurs différentes.
- Stocker le nombre de tours déjà joués. Commencer par 1 jusqu'à 12.
- Fournir au joueur le moyen de saisir un code en commençant par la ligne du bas.
- Stocker l'ensemble des propositions de code pour que le joueur puisse les consulter.
- Vérifier si le code saisi par le joueur est correct.
- Pour chaque boule dans code :
    - Si couleur correcte :
        - Si place correcte:
            - point vert
        - Si place incorrecte:
            - point blanc
    - Sinon :
        - point gris
- Vérification des points :
    - Si points tous verts :
        - Afficher un message de félicitations.
        - Empêcher que le joueur saisisse de nouveau un code.
        - Afficher un contrôle pour que le joueur puisse rejouer.
    - Si faux et que le joueur a encore des tours à jouer :
        - Lui permettre d'entrer une nouvelle proposition de code.
        - Incrémenter le nombre de tours de 1.
    - Si faux et que le joueur n'a plus de tours à jouer :
        - Informer le joueur qu'il a perdu et que la partie est finie.
        - Empêcher que le joueur saisisse de nouveau un nombre.
        - Afficher un contrôle pour que le joueur puisse rejouer.
- Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.