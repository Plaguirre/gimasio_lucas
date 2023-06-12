
function cargarPlaylistDefault() {
  mostrarPlaylist('energy');
}


function mostrarPlaylist(tipo) {
    var playlistContainer = document.getElementById("playlistContainer");
  
    // Eliminar cualquier iframe de playlist existente
    playlistContainer.innerHTML = "";
  
    // Crear y agregar el iframe correspondiente según el tipo seleccionado
    if (tipo === "chill") {
      playlistContainer.innerHTML = '<iframe src="https://open.spotify.com/embed/artist/69pKWucH8a724g60GjxW9R?utm_source=generator" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
    } else if (tipo === "energy") {
      playlistContainer.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/7ke8MsoH2gF3zNguHGKU38?utm_source=generator" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
    } else if (tipo === "strong") {
      playlistContainer.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4jY1WOSNjgxX?utm_source=generator" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
  });

  function restablecerContrasena() {
    alert("Se ha enviado un email para restablecer su contraseña");
  }

  function registroExitoso() {
    alert("Se ha registrado correctamente");
  }