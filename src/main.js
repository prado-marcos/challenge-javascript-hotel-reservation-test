const { Lakewood, Bridgewood, Ridgewood } = require("./hotel");
const {
    getClientType,
    bookingDates,
    getHotelPrices,
    getAllCheapest,
} = require("./util");

function getCheapestHotel(input) {
    try {
        const hotels = [Lakewood, Bridgewood, Ridgewood];
        const clientType = getClientType(input);
        const dates = bookingDates(input);
        const hotelPrices = getHotelPrices(hotels, dates, clientType);
        const cheapestHotel = Math.min(...hotelPrices);
        const cheapestsIndexes = getAllCheapest(hotelPrices, cheapestHotel);
        const indexOfCheapestPrice = cheapestsIndexes.slice(-1);
        return hotels[indexOfCheapestPrice].name;
    } catch (err) {
        return err.message;
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(
    `
    Formato da entrada: <tipo_do_cliente>: <data1>, <data2>, <data3>, …
    Exemplo: Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)
    `,
    (input) => {
        console.log(getCheapestHotel(input));
        readline.close();
    }
);

exports.getCheapestHotel = getCheapestHotel;
