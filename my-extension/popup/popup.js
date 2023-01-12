document.getElementById('text').addEventListener('input', function() {
  var note = document.getElementById('text').value;
  chrome.storage.sync.set({'note': note}, function() {
    console.log('Anotación guardada');
  });
});

document.getElementById('load-button').addEventListener('click', function() {
 chrome.storage.sync.get('note', function(data) {
    var note = data.note;
    if (note) {
      document.getElementById('text').value = note;
    } else {
      alert('No se ha guardado ninguna anotación aún.');
    }
  });
});
