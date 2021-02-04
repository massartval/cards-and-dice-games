# cards-and-dice-games

# Projet HTML/CSS/PYTHON de différents mini-jeux

Valentin

Poker aux dés

- objectif pour le 05/02 : implémenter un poker à 5 dés en JS
- objectif suivant : connecter le poker à une DB MySQL avec un back-end en Python

Problèmes :

- Save dice : le code fonctionne, mais il est très répétitif (5 event listeners quasi identiques). J'essaie de regrouper le code pour les event listeners avec une "for loop". Pour l'instant, l'intérieur du "if" renvoit "undefined".
- Save dice : pour l'instant, les dés sauvés sont représentés par une couleur grise (class="text-secondary"). Le but est évidemment de remplacer le texte par des images de dés, et donc d'adapter la modification d'aspect en fonction.

- Roll dice : le code fonctionne et incrémente les 3 lancers. Il est toujours possible de check / uncheck les checkboxes après le troisième lancer, ce qui ne sert à rien.

Prochaines étapes :

- Implémenter un système de tours (au bout de trois lancers, on sauvegarde le score et on remet les dés et les lancers à 0)
