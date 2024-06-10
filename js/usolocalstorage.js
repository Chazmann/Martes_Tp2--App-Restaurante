// Guardar
localStorage.setItem("titulo", "Curso de Angular avanzado - Víctor Robles");


// Conseguir elemento
localStorage.getItem("titulo");


// Guardar objetos en el LocalStorage
// Para guardar un objeto primero debemos convertirlo en un string json ya que el localstorage no permite guardar objetos de JavaSciprt como tal.

// Tendríamos que hacer algo así:

localStorage.setItem("usuario", JSON.stringify(mi_objeto));
