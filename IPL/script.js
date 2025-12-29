var arr = [
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        fullName: 'Mumbai Indians',
        captain: 'Rohit Sharama'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black',
        fullName: 'Royal Challengers Bengaluru',
        captain: 'Virat Kholi'
    },
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        fullName: 'Chennai Super Kings',
        captain: 'MS Dhoni'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        fullName: 'Kolkata Knight Riders',
        captain: 'Ajinkya Rahane'
    },
    {
        team: 'RR',
        primary: 'pink',
        secondary: 'blue',
        fullName: 'Rajasthan Royals',
        captain: 'Ravindra Jadeja'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        fullName: 'Mumbai Indians',
        captain: 'Rohit Sharama'
    },
    {
        team: 'PBKS',
        primary: 'red',
        secondary: 'gold',
        fullName: 'Punjab Kings',
        captain: 'Shreyas Iyer'
    },
    {
        team: 'LSG',
        primary: 'skybule',
        secondary: 'orange',
        fullName: 'Lucknow Super Giants',
        captain: 'Rishabh Pant'
    },
    {
        team: 'GT',
        primary: 'lavender',
        secondary: 'sky',
        fullName: 'Gujarat Titans',
        captain: 'Shubman Gill'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black',
        fullName: 'Sunrisers Hyderabad',
        captain: 'Pat Cummins'
    },
]


var h1 = document.querySelector('h1');
var btn = document.querySelector('button');
var con = document.querySelector('#container');
var box = document.querySelector('#box');

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length);
    h1.textContent = arr[num].team;
    box.style.backgroundColor = arr[num].primary;
    con.style.backgroundColor = arr[num].secondary; 


    console.log(num)
})