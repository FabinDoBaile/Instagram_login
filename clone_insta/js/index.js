

function logar(){
    let email = document.getElementById("e-mail").value
    let senha = document.getElementById("senha").value
    
    
     if(email === '' && senha === ''){

        alert('Preencha o email (campo obrigatório)')
        alert('Preencha o campo senha (campo obrigatório)')
    }
    
    else if(email === ''){
        alert('Preencha o email (campo obrigatório)')
        
    } 
    
    else if(senha === ''){
        
        alert('Preencha o campo senha (campo obrigatório)')
    }

   
   
    else{
        alert('Obrigado por se cadastrar no nosso site!')
    }
    
    
}