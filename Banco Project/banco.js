var saldo = 100.5; 
		var nome = prompt("Por favor, insira seu nome:")
		function inicio() {
			
			var escolha = parseInt(prompt("Ola " + nome + " é um prazer ter você por aqui!. Selecione uma das  opçãoes.)Saldo 1)Extrato 2.) Saque 3.) Depósito 4.(Transferência 5.( Sair 6."));
	    
			switch (escolha) {
                case 1:
                    ver_saldo();
                    break;
                case 2:
                    extratos();
                    break;
                case 3:
                    fazer_saque();
                    break;
                case 4:
                    fazer_deposito();
                    break;
				case 5:
                    transferencia();
                    break;
			    case 6:
                    sair();
                    break;
                default:
                    erro();
                    break;
            }
		}

		function ver_saldo() {
			ver_senha();
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
		
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			} else {
				saldo += deposito;
			
				ver_saldo();
			}
		}

		function fazer_saque() {
			ver_senha();
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número.');
				fazer_saque();
			}
		    else if (saque >= 100.5 || saque <= 0){
                alert('Operação não autorizada.')
				fazer_saque();				
			}
			else {
				saldo -= saque;
				ver_saldo();
			}
		}
	 function extratos(){
		ver_senha();
        alert("Leite ninho -R$ 20,25 Arooz -R$ -15,10 Haineken -R$ -8,25 Vodka -R$ -25,55");
		inicio();
	 }
	  
    function transferencia() {
		ver_senha();
		var num_conta = parseInt(prompt("Por favor, digite o numero da conta que recebera o pixc!"));
		var transferencia1 = parseFloat(prompt('Qual o valor para a transferencia ?'));
			
            
			if (isNaN(num_conta) || (num_conta) === '') {
				alert('Por favor, informe um número.');
				transferencia();
			}
			if (isNaN(transferencia1) || transferencia1 === '') {
				alert('Por favor, informe um número.');
				transferencia();
			}
		    else if (transferencia1 >= 100.5 || transferencia1 <= 0){
                alert('Operação não autorizada.')
				transferencia();		
			}
			else {
				saldo -= transferencia1;
				ver_saldo();
			}
		}
		function ver_senha() {
            var senha = parseInt(prompt("Digite sua senha: "));

            if (senha != 3589 || senha === " ") {
                alert("Senha inválida..."); 
				ver_senha();
            }	
		}
		function erro() {
			alert('Por favor, informe um número entre 1 e 5.');
			inicio();
		}
		function sair() {
            var confirma = confirm('Você deseja sair?');
            if (confirma) {
				alert("Agrademos por utilizar os serviços do banco. "+ nome + " foi um plazer você por aqui!");
                window.close();
            } else {
                inicio();
           }
          }
		
		
		inicio();	