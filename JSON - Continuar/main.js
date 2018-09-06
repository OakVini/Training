var nome = document.getElementById('nome');
var telefone = document.getElementById('telefone');
var mensagem = document.getElementById('msn');
var tbody = document.querySelector('#tabela tbody');


function vazio() {    
  if (nome.value == "") {
    if (mensagem.innerHTML == "" || mensagem.innerHTML == "Preencha o campo Telefone") {
      document.getElementById('nome').style = "border: 2px solid red;";
      mensagem.innerHTML += "Preencha o campo Nome; ";
    }
    else
    {
      document.getElementById('nome').style = "border: 2px solid red;";
      mensagem.innerHTML += "";
    }
  }
  else {
    document.getElementById('nome').style = "";
    mensagem.innerHTML += "";
  }
  
  if (telefone.value == "") {
    if (mensagem.innerHTML == "" || mensagem.innerHTML == "Preencha o campo Nome; ") {
      document.getElementById('telefone').style = "border: 2px solid red;";
      mensagem.innerHTML += "Preencha o campo Telefone.";
    }
    else 
    {
      document.getElementById('telefone').style = "border: 2px solid red;";
      mensagem.innerHTML += "";
    }
  }
  else {
    document.getElementById('telefone').style = "";
    mensagem.innerHTML += "";
  }
}

function adicionar() {
  if (nome.value == "" || telefone.value == "") {
    
  }
  else {
    var contato = {
      cnome: nome.value,
      ctelefone: telefone.value
    }

    addline(contato);
    
    $('#exampleModal').modal('hide');
    msn.innerHTML = "";
    nome.value = "";
    telefone.value = "";
  }
} 

function abrirModal() {
  $('#exampleModal').modal('toggle');
  msn.innerHTML = '';
  nome.value = '';
  telefone.value = '';
  nome.style = '';
  telefone.style = '';
}

function addline(contato) {
  tbody.innerHTML += `<tr>
  <td> ${contato.cnome} </td>
  <td> ${contato.ctelefone} </td>
  <td> 
  <button class='btn btn-outline-info' onclick="editar()">Editar</button> 
  <button class='btn btn-outline-danger'>Excluir</button> 
  </td>
  </tr>`;  
}

function editar() {
  var tbody = document.querySelector('#tbody');

  document.querySelector('#nome1').innerHTML = `<input type="text" value="" name="">`;
  
}