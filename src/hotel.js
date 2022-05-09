const Client = require("./client");
const { getWeekday } = require("./util");

class Hotel {
    constructor(name, classification, regular, rewards) {
        this.name = name;
        this.classification = classification;
        this.regular = regular;
        this.rewards = rewards;
    }
    getBudgetValue(dayArray, clientType) {
        let totalBudget = 0;
        try {
            dayArray.forEach((day) => {
                let dayOfTheWeek = getWeekday(day);
                if(dayOfTheWeek === null){
                    throw new Error("Nullified day of the week");
                }
                totalBudget += this[clientType][dayOfTheWeek];
            });
        } catch (err) {
            return err.message;
        }
        return totalBudget;
    }
}

const Lakewood = new Hotel(
    "Lakewood",
    3,
    new Client(110, 90),
    new Client(80, 80)
);

const Bridgewood = new Hotel(
    "Bridgewood",
    4,
    new Client(160, 60),
    new Client(110, 50)
);

const Ridgewood = new Hotel(
    "Ridgewood",
    5,
    new Client(220, 150),
    new Client(100, 40)
);

exports.Lakewood = Lakewood;
exports.Bridgewood = Bridgewood;
exports.Ridgewood = Ridgewood;
