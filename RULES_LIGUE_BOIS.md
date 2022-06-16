Ce challenge est inspiré du jeu de société Samsara

# Objectif

Le jeu se déroule dans le service informatique d’une entreprise. La direction vient de lancer un hackathon sur le thème du Green IT. Deux équipes de développement sont en compétition pour la place de l'équipe la plus efficace. Développez et livrez vos applications avant l'équipe adverse pour maximiser vos points, mais faites attention à la dette technique et à l’aspect Green IT.

# Règles

Chaque joueur incarne une équipe de développement informatique. Le jeu se déroule dans un open space contenant 8 postes de travail. Le hackathon se déroule sur plusieurs tours. À chaque tour, les deux joueurs jouent l’un après l’autre.

Ce jeu utilise le principe du Deck Building. Chaque équipe aura un lot de cartes personnelles qui s'enrichira au cours de la partie.

Chaque équipe commence la partie avec 4 cartes compétence BONUS et 4 cartes Dette Technique Ces cartes seront sa pioche personnelle et sa défausse sera recyclée pour refaire une pioche quand cette dernière sera épuisée.

Deckbuilding: la défausse du joueur est mélangée pour créer sa pioche 
L'équipe pourra récupérer d’autres cartes et en perdre certaines au cours de la partie.

# La zone de jeu (Open Space)

L’open space est composé de 8 postes de travail, chacun dédié à une tâche particulière

Formation TRAINING (0)

Développement CODING (1)

Point d'équipe quotidien DAILY_ROUTINE (2)

Priorisation des tâches TASK_PRIORITIZATION (3)

Etude d'architecture ARCHITECTURE_STUDY (4)

Intégration Continue CONTINUOUS_INTEGRATION (5)

Revue de code CODE_REVIEW (6)

REFACTORING (7)

Ces postes sont numérotés de 0 à 7. Chacun de ces postes contient 5 cartes de compétence au début de la partie.

A cause de la covid-19, la direction a imposé un sens de déplacement dans les couloirs afin de ne pas se croiser. On doit donc toujours se déplacer dans le même sens.

# Les Applications

Chaque application nécessite certaines tâches pour être livrée. Les applications sont communes aux deux équipes. Une fois l'application livrée, elle n'est plus livrable par l'autre équipe.

Les applications seront de plus en plus grosses au cours des ligues.

Une petite application aura besoin de 3 lots de 2 tâches (par ex, 2 REFACTORING, 2 TRAINING et 2 CODING)

Une grosse application aura besoin de 2 lots de 4 tâches (par ex, 4 DAILY_ROUTINE et 4 CODE_REVIEW)

Chaque compétence BONUS permet de remplir une tâche (n’importe laquelle) de façon correcte et une tâche de façon baclée.

Chaque compétence spécifique permet de remplir 2 tâches (liées à cette compétence) de façon correcte et 2 tâches (n’importe lesquelles) de façon bâclée.

Par ex, la compétence CODING permet de remplir 2 tâches CODING. Et à côté, elle peut aussi remplir 2 tâches TRAINING de façon bâclée.

Chaque tâche bâclée lors de la livraison d’une application rapporte une carte Dette Technique. Ces cartes ne servent à rien, à part à ralentir l’équipe de développement quand elles s’accumulent en encombrant la main tirée au début de chaque tour. 
Exemples de livraison d'une application avec différentes compétences

# Description d'un tour

A chaque tour, votre équipe récupère au hasard 4 cartes compétences parmi toutes celles qu’elle possède dans sa pioche.

1. Déplacement

L’équipe commence par changer de poste de travail (afin de laisser la place à d’autres équipes).
Elle récupère alors une carte compétence correspondant au poste de travail où elle va (formation, revue de code, refactoring, développement...).
S’il n’y en a plus de disponible, elle récupère une carte compétence BONUS.

2. Faire une action

Non applicable dans cette ligue.

3. Livrer une application

L’équipe peut (si elle le désire) utiliser ses compétences disponibles en main pour livrer une application. 
Le jeu ne vous proposera cette phase que si elle est possible. 
N’oubliez pas, si vous bâclez des tâches, vous recevrez des cartes Dette Technique !

4. Fin du tour

Les cartes restant en main (compétences et Dette Technique) sont défaussées.

# Fin du jeu

Le hackathon s’arrête dès qu’une équipe a réussi à livrer 5 applications.

Attention, comme le hackathon est sous le thème du Green IT, les organisateurs sont très vigilants sur la qualité de la dernière application livrée. 
La 5ème application d’une équipe ne pourra donc pas être livrée avec des tâches bâclées !

A partir du moment où une équipe a livré 5 applications, la partie s’arrête une fois que les deux équipes ont joué autant de tours.

Le joueur gagnant est celui qui a livré le plus d’applications.
Si les joueurs ont livré le même nombre d’applications, le gagnant est le joueur qui possède le moins de cartes Dette Technique.

## Conditions de Victoire
Vous avez livré 5 applications avant l'adversaire.
Vous avez livré plus d'applications que votre adversaire après 200 phases de jeu.
En cas d'égalité, vous avez moins de cartes Dette Technique que votre adversaire.

## Conditions de Défaite
Votre programme ne fournit pas d'instruction valide dans le temps imparti.

# 🐞 Conseils de débogage
Survolez un pion, une carte ou une pile de cartes pour voir davantage d'informations
Ajoutez du texte à la fin d'une instruction pour afficher ce texte au-dessus de votre pion
Cliquez sur la roue dentée pour afficher les options supplémentaires
Utilisez le clavier pour contrôler l'action : espace pour play / pause, les flèches pour avancer pas à pas
 	Entrées / Sorties du Jeu

# Entrées / Sorties du Jeu
## Entrées pour un Tour de Jeu
Ligne 1 : le nom gamePhase de la phase actuelle avec l’action attendue. Peut être MOVE, RELEASE 
Ligne 2 : applicationCount pour le nombre d'applications restant à livrer. 
Les applicationCount lignes suivantes : le mot APPLICATION suivi de 9 entiers, la description des applications à livrer et les compétences nécessaires pour les livrer (APPLICATION applicationId trainingNeeded codingNeeded dailyRoutineNeeded taskPrioritizationNeeded architectureStudyNeeded continuousDeliveryNeeded codeReviewNeeded refactoringNeeded). 
1 ligne par joueur : 4 entiers (vous êtes toujours le premier joueur):
location : le poste de travail occupé (-1 au premier tour).
score : le nombre d’applications livrées.
permanentDailyRoutineCards : non utilisé dans cette ligue.
permanentArchitectureStudyCards : non utilisé dans cette ligue.

Ligne suivante : cardLocationsCount pour le nombre d'emplacements où on a des cartes. 
Les cardLocationsCount lignes suivantes : le nom de l'emplacement suivi de 10 entiers, le nombre de cartes de chaque type dans cet emplacement (cardLocation trainingCardsCount codingCardsCount dailyRoutineCardsCount taskPrioritizationCardsCount architectureStudyCardsCount continuousDeliveryCardsCount codeReviewCardsCount refactoringCardsCount bonusCardsCount technicalDebtCardsCount). L'emplacement peut être HAND votre main, DRAW votre pioche, DISCARD votre défausse ou OPPONENT_CARDS (l'ensemble des cartes de l'adversaire entre sa main, sa pioche et sa défausse) 
Ligne suivante : possibleMovesCount pour le nombre de coups possibles à jouer. 
Les possibleMovesCount lignes suivantes : une chaine de caractères, un coup possible. 

## Sorties pour un Tour de Jeu
1 ligne contenant l'une des actions suivantes selon les phases de jeu :
RANDOM : le joueur choisit de faire une des actions possibles au hasard.
WAIT : le joueur choisit de ne pas faire l'action optionnelle.
MOVE zoneId : le joueur se déplace sur le poste de travail donné. 
Cette action est obligatoire et n'est disponible que dans la phase MOVE.
RELEASE applicationId : le joueur livre l'application donnée. 
Cette action est facultative et n'est disponible que dans la phase RELEASE.
Ajoutez du texte à la fin d'une instruction pour afficher ce texte au-dessus de votre pion. 

Exemples:
MOVE 3
RELEASE 16
WAIT rien à faire...
RANDOM je n'ai pas d'idée...

## Contraintes
Temps de réponse par tour ≤ 50ms (on économise les ressources quand on fait du Green IT)
Temps de réponse au premier tour ≤ 1000ms

# Qu'est-ce qui m'attend dans les prochaines ligues ?
Les nouvelles règles débloquées dans les prochaines ligues sont :
Les joueurs pourront jouer certaines cartes
Un joueur devra donner une carte à son adversaire s'il se place trop près de lui (pas des dettes techniques)
La moitié des applications nécessiteront plus de ressources

# Pour en savoir plus sur le Green IT
Les ambitions du Groupe Societe Generale sur le Green IT, qui devient un enjeu d’ampleur dans le contexte actuel : https://youtu.be/ZstnO7j1y4c

Notre partenariat avec l’INR et notre signature à la Charte du Numérique responsable : https://careers.societegenerale.com/green-it-program

Les Masterclasses de nos experts en vidéos – tout savoir sur le Green IT

Masterclass #1 Pourquoi le numérique responsable? : https://youtu.be/eLffG8Z0iXU

Masterclass #2 Les enjeux de l'E-accessibilité pour l'IT : https://youtu.be/oRA_CrGxGgw

Masterclass #3 Architecture sous le prisme du Green IT : https://youtu.be/x2fMjGqinLA

Masterclass #4 Vers une conception numérique responsable : https://youtu.be/kb2PM7OniRk