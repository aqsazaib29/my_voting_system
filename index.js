// let serialno = 1;
// let count = 0;
// function add_friend() {
//     let name = document.getElementById('friendname').value;
//     let newDiv = document.createElement('div');
//     newDiv.className = 'friend_vote';
//     newDiv.id ='friend_vote';
//     let Div1 =newDiv.createElement('div');
//     let Div2 =newDiv.createElement('div');
//     // let Div3 =newDiv.createElement('div');
//     let counter = newDiv.createElement('button');
//     Div1.textContent = serialno;
//     Div2.textContent = name;
//     counter.textContent = count;
//     counter.addEventListener('click',function(){
//         count++;
//     })
//     document.getElementById('friend_vote').appendChild(Div1);
//     document.getElementById('friend_vote').appendChild(Div2);
//     document.getElementById('friend_vote').appendChild(Div3);
//     document.getElementById('friendvotelists').appendChild(newDiv);

//     serialno ++;
// }

// let serialno = 1;
// let count = 0;
// function add_friend() {
//     let name = document.getElementById('friendname').value;
//     let newDiv = document.createElement('div');
//     newDiv.className = 'friend_vote';
//     newDiv.id ='friend_vote';
//     let Div1 =newDiv.createElement('div');
//     let Div2 =newDiv.createElement('div');
//     // let Div3 =newDiv.createElement('div');
//     let counter = newDiv.createElement('button');
//     Div1.textContent = serialno;
//     Div2.textContent = name;
//     counter.textContent = count;
//     counter.addEventListener('click',function(){
//         let currentVotes = parseInt(newDiv.textContent.split('Votes: ')[1]);
//         counter.textContent = count++;
//     })
//     document.getElementById('friend_vote').appendChild(Div1);
//     document.getElementById('friend_vote').appendChild(Div2);
//     document.getElementById('friend_vote').appendChild(Div3);
//     document.getElementById('friendvotelists').appendChild(newDiv);

//     serialno ++;
// }

let serialno = 1;
let count = 0;

function add_friend() {

    // newDiv
    let name = document.getElementById('friendname').value;
    let newDiv = document.createElement('div');
    newDiv.className = 'friend_vote';
    newDiv.id = 'friend_vote';

    // UnderDiv
    let UnderDiv = document.createElement('div');
    UnderDiv.className = "UnderDiv";

    // Div1, Div2, Counter
    let Div1 = document.createElement('div');
    let Div2 = document.createElement('div');
    let Div3 = document.createElement('div');
    Div1.textContent = serialno;
    Div1.className = 'Div1';
    Div2.textContent =  name;
    Div2.className = 'Div2';
    Div3.textContent = count;
    Div3.className = 'Div3';
    
    Div3.addEventListener('click', function () {
        count++;
        Div3.textContent = count;
    });

    // APPENDED CHILDS
    UnderDiv.appendChild(Div1);
    UnderDiv.appendChild(Div2);
    UnderDiv.appendChild(Div3);
    newDiv.appendChild(UnderDiv);
    document.getElementById('friendvotelists').appendChild(newDiv);
    serialno++;
}
