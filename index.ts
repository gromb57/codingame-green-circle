/**
 * Complete the hackathon before your opponent by following the principles of Green IT
 **/
declare function readline(): string;

enum CardType {
    TRAINING = 0,
    CODING = 1,
    DAILY_ROUTINE = 2,
    TASK_PRIORITIZATION = 3,
    ARCHITECTURE_STUDY = 4,
    CONTINUOUS_INTEGRATION = 5,
    CODE_REVIEW = 6,
    REFACTORING = 7,
    BONUS = 8,
    TECHNICAL_DEBT = 9
}

interface PlayerInfos {
    playerLocation: number;
    playerScore: number;
    playerPermanentDailyRoutineCards: number;
    playerPermanentArchitectureStudyCards: number;
}

function readPlayerInfos(): PlayerInfos {
    var inputs: string[] = readline().split(' ');
    const playerLocation: number = parseInt(inputs[0]); // id of the zone in which the player is located
    const playerScore: number = parseInt(inputs[1]);
    const playerPermanentDailyRoutineCards: number = parseInt(inputs[2]); // number of DAILY_ROUTINE the player has played. It allows them to take cards from the adjacent zones
    const playerPermanentArchitectureStudyCards: number = parseInt(inputs[3]); // number of ARCHITECTURE_STUDY the player has played. It allows them to draw more cards
    return { playerLocation, playerScore, playerPermanentDailyRoutineCards, playerPermanentArchitectureStudyCards };
}

// game loop
while (true) {
    const gamePhase: string = readline(); // can be MOVE, GIVE_CARD, THROW_CARD, PLAY_CARD or RELEASE
    const applicationsCount: number = parseInt(readline());
    for (let i = 0; i < applicationsCount; i++) {
        var inputs: string[] = readline().split(' ');
        const objectType: string = inputs[0];
        const id: number = parseInt(inputs[1]);
        const trainingNeeded: number = parseInt(inputs[2]); // number of TRAINING skills needed to release this application
        const codingNeeded: number = parseInt(inputs[3]); // number of CODING skills needed to release this application
        const dailyRoutineNeeded: number = parseInt(inputs[4]); // number of DAILY_ROUTINE skills needed to release this application
        const taskPrioritizationNeeded: number = parseInt(inputs[5]); // number of TASK_PRIORITIZATION skills needed to release this application
        const architectureStudyNeeded: number = parseInt(inputs[6]); // number of ARCHITECTURE_STUDY skills needed to release this application
        const continuousDeliveryNeeded: number = parseInt(inputs[7]); // number of CONTINUOUS_DELIVERY skills needed to release this application
        const codeReviewNeeded: number = parseInt(inputs[8]); // number of CODE_REVIEW skills needed to release this application
        const refactoringNeeded: number = parseInt(inputs[9]); // number of REFACTORING skills needed to release this application
    }
    const playersInfos: PlayerInfos[] = [];
    for (let i = 0; i < 2; i++) {
        playersInfos.push(readPlayerInfos());
    }
    const cardLocationsCount: number = parseInt(readline());
    for (let i = 0; i < cardLocationsCount; i++) {
        var inputs: string[] = readline().split(' ');
        const cardsLocation: string = inputs[0]; // the location of the card list. It can be HAND, DRAW, DISCARD or OPPONENT_CARDS (AUTOMATED and OPPONENT_AUTOMATED will appear in later leagues)
        const trainingCardsCount: number = parseInt(inputs[1]);
        const codingCardsCount: number = parseInt(inputs[2]);
        const dailyRoutineCardsCount: number = parseInt(inputs[3]);
        const taskPrioritizationCardsCount: number = parseInt(inputs[4]);
        const architectureStudyCardsCount: number = parseInt(inputs[5]);
        const continuousDeliveryCardsCount: number = parseInt(inputs[6]);
        const codeReviewCardsCount: number = parseInt(inputs[7]);
        const refactoringCardsCount: number = parseInt(inputs[8]);
        const bonusCardsCount: number = parseInt(inputs[9]);
        const technicalDebtCardsCount: number = parseInt(inputs[10]);
    }
    const possibleMovesCount: number = parseInt(readline());
    for (let i = 0; i < possibleMovesCount; i++) {
        const possibleMove: string = readline();
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    // In the first league: RANDOM | MOVE <zoneId> | RELEASE <applicationId> | WAIT; In later leagues: | GIVE <cardType> | THROW <cardType> | TRAINING | CODING | DAILY_ROUTINE | TASK_PRIORITIZATION <cardTypeToThrow> <cardTypeToTake> | ARCHITECTURE_STUDY | CONTINUOUS_DELIVERY <cardTypeToAutomate> | CODE_REVIEW | REFACTORING;
    if (gamePhase == "MOVE") {
        // Write your code here to move your player
        // You must move from your desk
        console.log(`MOVE ${(playersInfos[0].playerLocation + 1) % 8}`)
    } else if (gamePhase == "GIVE_CARD") {
        // Starting from league 2, you must give a card to the opponent if you move close to them.
        // Write your code here to give a card
        // RANDOM | GIVE cardTypeId
        console.log("RANDOM")
    } else if (gamePhase == "THROW_CARD") {
        // Starting from league 3, you must throw 2 cards away every time you go through the administrative task desk.
        // Write your code here to throw a card
        // RANDOM | THROW cardTypeId
        console.log("RANDOM")
    } else if (gamePhase == "PLAY_CARD") {
        // Starting from league 2, you can play some cards from your hand.
        // Write your code here to play a card
        // WAIT | RANDOM | TRAINING | CODING | DAILY_ROUTINE | TASK_PRIORITIZATION <cardTypeIdToThrow> <cardTypeIdToTake> | ARCHITECTURE_STUDY | CONTINUOUS_INTEGRATION <cardTypeIdToAutomate> | CODE_REVIEW | REFACTORING
        console.log("RANDOM")
    } else if (gamePhase == "RELEASE") {
        // Write your code here to release an application
        // RANDOM | WAIT | RELEASE applicationId
        console.log("RANDOM")
    } else {
        console.log("RANDOM")
    }
}
