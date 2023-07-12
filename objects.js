function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Bob", last: "Sam" });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 3, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, "- ").concat(song.artist));
}
calculatePayout({});
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123455,
    credits: {
        producer: "phil septor",
        writer: "Alex North"
    }
};
calculatePayout(mySong);
printSong(mySong);
