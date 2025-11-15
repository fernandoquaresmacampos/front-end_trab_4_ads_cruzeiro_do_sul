

// A variável html recebe o cabecalho e depois os dados do cadastro de voluntário em tabela do html.
var html = '<tr><th>NOME</th><th>DT NASCIMENTO</th><th>SEXO</th><th>CPF</th><th>EMAIL</th><th>INSTITUIÇÃO</th><th>DISPONIBILIDADE</th><th>INTERESSE</th></tr>';

// Registra o formulário cadastro de voluntário em variável;
const formulario = document.getElementById('cadastroVoluntario');

// Função responsável por limpar os campos do formulário cadastro de voluntários.
function resetCampos(){
	document.getElementById('nome').value = '';
	document.getElementById('nascimento').value = '';
	document.getElementById('sexo').value = '';
	document.getElementById('cpf').value = '';
	document.getElementById('email').value = '';
	document.getElementById('instituicao').value = '';
	document.getElementById('disponibilidade').value = '';
	document.getElementById('interesse').value = '';
}

// Agrega o evento de submit
formulario.addEventListener('submit', function(evento){
	evento.preventDefault();
	
	// Recebe os dados do formulário
	const nome = document.getElementById('nome').value;
	const nascimento = document.getElementById('nascimento').value;
	const sexo = document.getElementById('sexo').value;
	const cpf = document.getElementById('cpf').value;
	const email = document.getElementById('email').value;
	const instituicao = document.getElementById('instituicao').value;
	const disponibilidade = document.getElementById('disponibilidade').value;
	const interesse = document.getElementById('interesse').value;
	
	// Constroi linha de dados do voluntário cadastrado em tabela do html.
	if( nome != '' && nascimento != '' && sexo != '' && email != '' && instituicao != '' && disponibilidade != '' && interesse != '' ){
		html += '<tr><td>'+nome+'</td>'+'<td>'+nascimento+'</td>'+'<td>'+sexo+'</td>'+'<td>'+cpf+'</td>'+'<td>'+email+'</td>'+'<td>'+instituicao+'</td>'+'<td>'+disponibilidade+'</td>'+'<td>'+interesse+'</td></tr>';
		document.getElementById('voluntarios-cadastrados').innerHTML = html;
		document.getElementById('mensagem').style.display = 'block';
	}
	resetCampos();
});

// Aplica mascara ao campos telefone
document.getElementById('telefone').addEventListener('input', function (campo){
	
	let telefone = campo.target.value.replace(/\D/g,'');
	let cpf = campo.target.value.replace(/\D/g,'');
	
	if(telefone.length > 11)telefone = telefone.slice(0, 11);
		let formatado = telefone;
		if (telefone.length > 0) { formatado = '(' + telefone.slice(0, 2); }
		if (telefone.length >= 3) { formatado += ') ' + telefone.slice(2, 7); }
		if (telefone.length >= 8) { formatado += '-' + telefone.slice(7); }
	campo.target.value = formatado;
});

// Aplica mascara eo campo CPF
document.getElementById('cpf').addEventListener('input', function (campo) {

	// Deleta tudo que não é número
	let value = campo.target.value.replace(/\D/g, '');
	// Limita a 11 dígitos	
	if (value.length > 11) value = value.slice(0, 11);
	// Máscara
	value = value.replace(/(\d{3})(\d)/, '$1.$2');
	value = value.replace(/(\d{3})(\d)/, '$1.$2');
	value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
	campo.target.value = value;
});

		
	