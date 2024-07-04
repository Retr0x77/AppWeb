const softwareSection = document.getElementById('software');
const algoritmoSection = document.getElementById('algoritmo');

const btnDerecha = document.getElementById('derecha');
const btnIzquierda = document.getElementById('izquierda');

let currentSection = 'software';
btnIzquierda.style.fill='#181818'

btnDerecha.addEventListener('click', function() {
    if (currentSection === 'software') {
        algoritmoSection.style.left = '0%';
        softwareSection.style.left = '-100%';
        btnDerecha.style.fill='#181818'
        btnIzquierda.style.fill='#d3d3d3'
        currentSection = 'algoritmo';
    }
  });

btnIzquierda.addEventListener('click', function() {
    if (currentSection === 'algoritmo') {
        softwareSection.style.left = '0%';
        algoritmoSection.style.left = '100%';
        btnIzquierda.style.fill='#181818'
        btnDerecha.style.fill='#d3d3d3'
        currentSection = 'software';
      }
});
