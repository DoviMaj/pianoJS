// create 7 notes of c maj scale
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const note = document.querySelector(`div[data-key="${e.key}"]`)
  if(!audio) return;

  note.classList.add('playing')
  audio.currentTime = 0;
  audio.play()  
})  

const notes = Array.from(document.querySelectorAll('.note'));
notes.forEach(notes => notes.addEventListener('transitionend', removeTransition));

// add footer
// add piano icon link ()