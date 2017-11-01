// reference https://git.daplie.com/Daplie/knuth-shuffle

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

exports.handler = (event, context, callback) => {
    console.log('event', event);

    var num = parseInt(event.num);
    var max = parseInt(event.max) + 1;

    var correctEntrants = [];
    for(var i = 0; i < max; i++) {
        correctEntrants.push(i);
    }

    correctEntrants = shuffle(correctEntrants);
    console.log(correctEntrants);

    var returnArr = correctEntrants.splice(0, num);

    if(event.jsonResponse) {
        callback(null, returnArr);
    }
    else {
        callback(null, returnArr.join(","));
    }
};
