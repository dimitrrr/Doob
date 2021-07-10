document.querySelector('.more a').onclick = (e) => {
  e.preventDefault();
}

document.querySelector('.title__button .btn').onclick = (e) => {
  e.preventDefault();
}

document.querySelector('form .btn').onclick = (e) => {
  e.preventDefault();
}

document.querySelector('.icon').onclick = () => {
  let x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}