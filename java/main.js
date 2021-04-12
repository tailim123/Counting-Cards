var card_deck = [1,2,3,4,5,6,7,8,9,10,"J","Q","K",'A'];
var count = 0;
var player = [];
let submitCards = () =>
{
    var newcard1 = document.querySelector('.newcard1').value;
    var newcard2 = document.querySelector('.newcard2').value;
    var newcard3 = document.querySelector('.newcard3').value;
    var newcard4 = document.querySelector('.newcard4').value;
    var newcard5 = document.querySelector('.newcard5').value;

    player.push(newcard1, newcard2, newcard3, newcard4, newcard5);
    alert("Click to 'Draw Cards'");
}
let calculateScore = (card) =>
{
    card === 2 || card === 3 || card === 4 || card === 5 || card === 6
    ? count++
    : (card === 7 || card === 8 || card === 9
    ? count += 0
    : (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A'
    ? count --
    : null));
    return count;
}

let showScore = () =>
{
    document.querySelector('#playercard').innerHTML = "Card/s: " + player; 
}

let countingScore = () =>
{
    calculateScore(player[0]), 
    calculateScore(player[1]), 
    calculateScore(player[2]), 
    calculateScore(player[3], 
    calculateScore(player[4]));
    document.querySelector('#total').innerHTML = count + ((count>0) ? ' Bet' : ' Hold');
}

let resetField = () =>
{
    window.location.reload();
}