const daysOfTheWeek = require("./days-of-the-week");

function getClientType(str) {
    const arr = strToArray(str);
    try {
        if (
            arr[0].toLowerCase() === "regular" ||
            arr[0].toLowerCase() === "rewards"
        ) {
            return arr[0].toLowerCase();
        } else {
            throw new Error("Misspelling client type name");
        }
    } catch (err) {
        return err.message;
    }
}

function strToArray(str) {
    return str.replace(/,|:/g, "").split(" ");
}

function getDayOfTheWeek(str) {
    let indexStart = str.search(/[(]/) + 1;
    let indexEnd = str.search(/[)]/);
    return str.substring(indexStart, indexEnd);
}

function getWeekday(str) {
    if (daysOfTheWeek.weekday.includes(str)) {
        return "weekday";
    } else if (daysOfTheWeek.weekend.includes(str)) {
        return "weekend";
    }
    return null;
}

function bookingDates(str, index = 1) {
    const arr = [];
    const strArray = strToArray(str);
    for (index; index < strArray.length; index++) {
        arr.push(getDayOfTheWeek(strArray[index]));
    }
    return arr;
}

function getHotelPrices(hotels, dates, clientType) {
    let hotelPrices = [];
    hotels.forEach((hotel, index) => {
        hotelPrices[index] = hotel.getBudgetValue(dates, clientType);
    });
    return hotelPrices;
}

function getAllCheapest(arr, min) {
    const indexes = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === min) {
            indexes.push(index);
        }
    }
    return indexes;
}

exports.getClientType = getClientType;
exports.bookingDates = bookingDates;
exports.getWeekday = getWeekday;
exports.getHotelPrices = getHotelPrices;
exports.getAllCheapest = getAllCheapest;
