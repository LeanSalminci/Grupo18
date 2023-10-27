function enviarFormulario() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let warnings = document.getElementById("warnings");
    
    if (name === "" || email === "" || mensaje === "") {
      warnings.textContent = "Por favor, completa todos los campos.";
      return false; 
    }
  
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
      warnings.textContent = "El correo electrónico no es válido.";
      return false; 
    }
  
    return true;
  }
   
    