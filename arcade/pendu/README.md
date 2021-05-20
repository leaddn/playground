# Pendu :

## Etapes :

- Générer un mot aléatoire d'une liste de mots de 14 ou 16 lettres.
--> Les lettres du mot sont cachées (hidden?)
- Stocker le nombre de tours déjà joués. Commencer par 1, jusqu'à 9 tentatives.
- Fournir au joueur le moyen de saisir des lettres: Le jeu affiche les lettres de l'alphabet sous forme de bouton contenant chaque lettre.
- Stocker l'ensemble des propositions de lettres pour que le joueur puisse les consulter.
- Vérifier si la lettre saisie par le joueur est correcte.
    - Si elle est correct :
        - Afficher la lettre à l'emplacement du mot.
        - Empêcher que le joueur saisisse de nouveau la lettre. (disabled?)
    - Si elle est fausse et que le joueur a encore des tours à jouer :
        - Informer le joueur que sa proposition de lettre est fausse.
        - Afficher une image de pendu.
        - Lui permettre d'entrer une nouvelle proposition de lettre.
        - Incrémenter le nombre de tours de 1.
    - Si elle est fausse et que le joueur n'a plus de tours à jouer / si le joueur propose le mauvais mot :
        - Informer le joueur qu'il a perdu et que la partie est finie.
        - Afficher une image de pendu.
        - Empêcher que le joueur saisisse de nouveau une lettre.
        - Afficher un contrôle pour que le joueur puisse rejouer.
    - Si le joueur a trouvé toutes les lettres/ s'il a trouvé le mot:
        - Afficher le mot
        - Informer le joueur qu'il a gagné
        - Afficher un contrôle pour que le joueur puisse rejouer.
- Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.