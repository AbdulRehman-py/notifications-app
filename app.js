const mark_all_read = document.querySelector('.mark');
const list = document.getElementById('unorder-list');

const listItems = document.querySelectorAll("#unorder-list li");
const sep_p1 = document.querySelector(".sep-p");
const sep_p2 = document.querySelector(".sep-p-2");
const note_div = document.querySelectorAll(".note");
const number = document.querySelector('.number-of');

const pargraphs = [];
let totalRedDots = 0;

 listItems.forEach((li) => {
  const para = li.querySelector('p');

    pargraphs.push(para);
 });

 const [first_p , second_p , third_p, forth_p, fifth_p, six_p, seven_p] = pargraphs;

 
 const namesToHighlight = ['Mark Webber', 'Angela Gray', 'Jacob Thompson', 'Rizky Hasanuddin', 'Kimberly Smith', 'Nathan Peterson', 'Anna Kim'];
 
 function change() {
   pargraphs.forEach((para) => {
     namesToHighlight.forEach((name) => {
      if (para.textContent.includes(name)) {
        const newText = para.innerHTML.replaceAll(name, `<span class="highlight">${name}</span>`);
        para.innerHTML = newText;
      }
     })
   })
}



const highlight = ['My first tournament today!','Chess Club', '5 end-game','strategies to increase your win rate']

function highlightcomment () {
  pargraphs.forEach((para) => {
    highlight.forEach((high) => {
      if (para.textContent.includes(high)) {
        const newText = para.innerHTML.replaceAll(high, `<span class="highlight-2">${high}</span>`);
        para.innerHTML = newText;
      }

    })
    
  })
}



const chess = ['Chess Club'];

function chess_high() {
  pargraphs.forEach((para) => {
    chess.forEach((chess) => {
      if (para.textContent.includes(chess)) {
        const newText = para.innerHTML.replaceAll(chess, `<span class="highlight-3">${chess}</span>`);
        para.innerHTML = newText;
      }
    })
  })

}



notes_divs = [];

note_div.forEach((note) => {
  notes_divs.push(note);
})



function reddot() {
  for (const notes of note_div) {
    const dot_element = document.createElement('span');
    dot_element.classList.add('red-dot');
    notes.appendChild(dot_element);
    totalRedDots++;
  }

  number.textContent = `${totalRedDots}`;
}




const lists = [];

listItems.forEach((li) => {
  lists.push(li);
});


function read() {
    lists.forEach((list) => {
    list.addEventListener('mouseover', () => {
    const dot_class = list.querySelector('.red-dot');
    if (dot_class) {
      dot_class.classList.remove('red-dot');
      totalRedDots--;
      number.textContent = `${totalRedDots}`;
    }
     
    })
    })
}


function clear_all () {
  mark_all_read.addEventListener('click', (e) => {
    if (e) {
      const dots = document.querySelectorAll('.red-dot');
      dots.forEach((dot)=> {
        dot.classList.remove('red-dot');
        totalRedDots = 0;
        number.textContent = `${totalRedDots}`;
      })
    }
  })
}

clear_all();
change();
highlightcomment();
chess_high();
reddot();
read();