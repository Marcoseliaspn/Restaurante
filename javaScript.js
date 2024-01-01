document.addEventListener('DOMContentLoaded', function () {
    // Carregar nota salva, se existir
    const savedNote = localStorage.getItem('savedNote');
    if (savedNote) {
        document.getElementById('note-text').value = savedNote;
    }
});

function saveNote() {
    const noteText = document.getElementById('note-text').value;

    // Salvar nota no localStorage
    localStorage.setItem('savedNote', noteText);

    // Registrar o tempo
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;
    console.log(`Anotação salva em ${timeString}`);
}
