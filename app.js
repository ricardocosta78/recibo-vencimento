//CALCULAR VALOR HORA

function calcular(vencimento,horas){
	
	let resultado = ((vencimento *12)/(horas*52)).toFixed(4)
	document.getElementById('valor').value = resultado
	
	document.getElementById('vencimento_final').value = parseFloat(vencimento).toFixed(2)
	return resultado
}

document.getElementById('button').addEventListener('click',function(){
	let vencimento = document.getElementById('vencimento').value;
	let horas = document.getElementById('horas').value;
	calcular(vencimento,horas);
});

//CALCULAR SUBSIDIO ALIMENTACAO
function total_subsidio(dias){
	let valor_dia = 4.77;
	var total = (valor_dia * dias).toFixed(2)
	document.getElementById('total_subsidio').value = total
	document.getElementById('subs_final').value = total
}

document.getElementById('button7').addEventListener('click',function(){
	let dias = document.getElementById('dias_subsidio').value;
	total_subsidio(dias)
	
});


// SUPLEMENTOS NOITE SABADO

function horasNoiteSabado(resultado,noiteSabado){
	
	let suplNoiteSabado = (noiteSabado)*((100*resultado)/100).toFixed(4)
	document.getElementById('resultadoNoiteSabado').value = suplNoiteSabado.toFixed(2)
	totalSuplementos.push(suplNoiteSabado)
}

document.getElementById('button1').addEventListener('click', function(){
	let resultado = document.getElementById('valor').value;
	let noiteSabado = document.getElementById('horasNoiteSabado').value;
	horasNoiteSabado(resultado,noiteSabado);

})

// SUPLEMENTOS NOITE SEMANA

function horasNoiteSemana(resultado,noiteSemana){
	let suplNoiteSemana = (noiteSemana)*((50*resultado)/100).toFixed(4)
	document.getElementById('resultadoNoiteSemana').value = suplNoiteSemana.toFixed(2)
	totalSuplementos.push(suplNoiteSemana);
}


document.getElementById('button2').addEventListener('click',function(){
	let resultado = document.getElementById('valor').value;
	let noiteSemana = document.getElementById('horasNoiteSemana').value;
	horasNoiteSemana(resultado,noiteSemana)
	
})

// SUPLEMENTOS SABADO APOS 13H

function horasDiaSabado(resultado,diaSabado){
	let suplDiaSabado = (diaSabado)*((50*resultado)/100).toFixed(4);
	document.getElementById('resultadoDiaSabado').value = suplDiaSabado.toFixed(2)
	totalSuplementos.push(suplDiaSabado)
}
document.getElementById('button3').addEventListener('click',function(){
	let resultado = document.getElementById('valor').value;
	let diaSabado = document.getElementById('horasDiaSabado').value;
	horasDiaSabado(resultado,diaSabado);
	
})

// CALCULAR O VALOR TOTAL DOS SUPLEMENTOS


let totalSuplementos = []
document.getElementById('button5').addEventListener('click', function(){
	var total = totalSuplementos.reduce(function(a,b){
		return (parseFloat(a)+parseFloat(b)).toFixed(2)
	}, 0)
	console.log(total)
	document.getElementById('resultadoTotal').value = total
	document.getElementById('suplem_final').value = total
})

// CALCULAR HORAS EXTRAS AUXILIARES

//NOITE SABADO

function ExtraNoiteSabado(resultado,escolha){
	let hora1 = (resultado*2.25);
	let horaUlt = (resultado*2);
	let horaSeg = ((resultado*2.5)*10);
	let horasExtra = (hora1+horaUlt+horaSeg).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//NOITE DOMINGO

function ExtraNoiteDomingo(resultado,escolha){
	let hora1 = (resultado*2.25);
	let horaUlt = (resultado*1.5);
	let horaSeg = ((resultado*2.5)*3);
	let horaFer = ((resultado*2)*7);
	let horasExtra = (hora1+horaUlt+horaSeg+horaFer).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//NOITE FERIADO

function ExtraNoiteFeriado(resultado,escolha){
	let hora1 = (resultado*1.75);
	let horaUlt = (resultado*2.5);
	let horaSeg = ((resultado*2.5)*7);
	let horaFer = ((resultado*2)*3);
	let horasExtra = (hora1+horaUlt+horaSeg+horaFer).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//NOITE SEMANA

function ExtraNoiteSemana(resultado,escolha){
	let hora1 = (resultado*1.75);
	let horaUlt = (resultado*1.5);
	let horaSeg = ((resultado*2)*10);
	let horasExtra = (hora1+horaUlt+horaSeg).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//DIA SABADO

function ExtraDiaSabado(resultado,escolha){
	let hora1 = (resultado*1.75);
	let horaSeg = ((resultado*2)*5);
	let horasExtra = (hora1+horaSeg).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//DIA SEMANA

function ExtraDiaSemana(resultado,escolha){
	let hora1 = (resultado*1.25);
	let horaSeg = ((resultado*1.5)*5);
	let horasExtra = (parseFloat(hora1)+ parseFloat(horaSeg)).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}

// CALCULAR HORAS EXTRAS ENFERMEIROS

//NOITE SABADO

function ExtraNoiteSabadoEnf(resultado,escolha){
	let hora1 = (resultado*2.25);
	let horaUlt = (resultado*2);
	let horaSeg = ((resultado*2.5)*10.5);
	let horasExtra = (hora1+horaUlt+horaSeg).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//NOITE DOMINGO

function ExtraNoiteDomingoEnf(resultado,escolha){
	let hora1 = (resultado*2.25);
	let horaUlt = (resultado*1.5);
	let horaSeg = ((resultado*2.5)*3);
	let horaFer = ((resultado*2)*7.5);
	let horasExtra = (hora1+horaUlt+horaSeg+horaFer).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//NOITE FERIADO

function ExtraNoiteFeriadoEnf(resultado,escolha){
	let hora1 = (resultado*1.75);
	let horaUlt = (resultado*2.5);
	let horaSeg = ((resultado*2.5)*7.5);
	let horaFer = ((resultado*2)*3);
	let horasExtra = (hora1+horaUlt+horaSeg+horaFer).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//NOITE SEMANA

function ExtraNoiteSemanaEnf(resultado,escolha){
	let hora1 = (resultado*1.75);
	let horaUlt = (resultado*1.5);
	let horaSeg = ((resultado*2)*10.5);
	let horasExtra = (hora1+horaUlt+horaSeg).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//DIA SABADO

function ExtraDiaSabadoEnf(resultado,escolha){
	let hora1 = (resultado*1.75);
	let horaSeg = ((resultado*2)*5.5);
	let horasExtra = (hora1+horaSeg).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}
//DIA SEMANA

function ExtraDiaSemanaEnf(resultado,escolha){
	let hora1 = (resultado*1.25);
	let horaSeg = ((resultado*1.5)*5.5);
	let horasExtra = (hora1+horaSeg).toFixed(4)
	document.getElementById('resultadoHorasExtra').value = horasExtra
	totalHorasExtra.push(horasExtra)
}


//ACIONAR ACCAO ATRAVES DO BOTAO
document.getElementById('button4').addEventListener('click',function(){
	let resultado = document.getElementById('valor').value;
	let escolha = document.getElementById('select').value;
	let categoria = document.getElementById('categoria').value

	//SELECIONAR CATEGORIA

	if(categoria ==="aux"){
		if (escolha === 'noiteSabado'){
			ExtraNoiteSabado(resultado,escolha)	
		}		
		else if (escolha === 'noiteDomingo'){
			ExtraNoiteDomingo(resultado,escolha)
		}	
		else if (escolha === 'noiteFeriado'){
			ExtraNoiteFeriado(resultado,escolha)
		}
		else if (escolha === 'noiteSemana'){
			ExtraNoiteSemana(resultado,escolha)			
		}
		else if (escolha === 'diaSabado'){
			ExtraDiaSabado(resultado,escolha)			
		}
		else if (escolha === 'diaSemana'){
			ExtraDiaSemana(resultado,escolha)	
		}else if(escolha ==='sair'){
		}		
	}else if(categoria ==="enf"){
		if (escolha === 'noiteSabado'){
			ExtraNoiteSabadoEnf(resultado,escolha)
		}		
		else if (escolha === 'noiteDomingo'){
			ExtraNoiteDomingoEnf(resultado,escolha)
		}	
		else if (escolha === 'noiteFeriado'){
			ExtraNoiteFeriadoEnf(resultado,escolha)
		}
		else if (escolha === 'noiteSemana'){
			ExtraNoiteSemanaEnf(resultado,escolha)	
		}
		else if (escolha === 'diaSabado'){
			ExtraDiaSabadoEnf(resultado,escolha)
		}
		else if (escolha === 'diaSemana'){
			ExtraDiaSemanaEnf(resultado,escolha)
		}
	}
})

//CALCULAR TOTAL DAS HORAS EXTRA
let totalHorasExtra = []
document.getElementById('button6').addEventListener('click', function(){
	var h_total = totalHorasExtra.reduce(function(a,b){
		return (parseFloat(a)+parseFloat(b)).toFixed(2)
	}, 0)
	console.log(h_total)
	document.getElementById('total_HorasExtra').value = h_total
	document.getElementById('horasExtra_final').value = h_total
})

//CALCULAR IRS

function valorImposto(){
	var vencimento_imposto = document.getElementById('vencimento_final').value
	var suplemento_imposto = document.getElementById('suplem_final').value
	var horas_imposto = document.getElementById('horasExtra_final').value
	var valor_imposto = (parseFloat(vencimento_imposto)+parseFloat(suplemento_imposto)+parseFloat(horas_imposto)).toFixed(2)
	console.log(valor_imposto)
	console.log(`${vencimento_imposto} + ${suplemento_imposto} + ${horas_imposto} = {$valor_imposto}`)

	document.getElementById('valor_impostos').value = valor_imposto
}

function valorIrs(){
	var valor_imposto = document.getElementById('valor_impostos').value
	var taxaIrs = prompt('Qual é a taxa de IRS?')
	var valor_irs = (parseFloat(valor_imposto) * (taxaIrs/100)).toFixed(2)
	document.getElementById('irs_final').value = valor_irs
}
function valorSegSocial(){
	var ss_taxa = 11
	var valor_imposto = document.getElementById('valor_impostos').value
	var valor_ss = (valor_imposto * (ss_taxa/100)).toFixed(2)
	document.getElementById('seguranca_final').value = valor_ss
}

function sindicato(){
	var vencimento = document.getElementById('vencimento').value
	var desc_sind = (parseFloat(vencimento)*(1/100)).toFixed(2)
	document.getElementById('sindicato_final').value = desc_sind
}

function totalAbonos(){
	var valor_imposto = document.getElementById('valor_impostos').value
	var total_subsidio = document.getElementById('total_subsidio').value

	var total_abono = (parseFloat(valor_imposto) + parseFloat(total_subsidio)).toFixed(2)
	document.getElementById('total_abonos').value = total_abono

}
function totalDesconto(){
	var irs = document.getElementById('irs_final').value
	var ss = document.getElementById('seguranca_final').value
	var sindicato = document.getElementById('sindicato_final').value
	var valor_desc = (parseFloat(irs) + parseFloat(ss) + parseFloat(sindicato)).toFixed(2)
	document.getElementById('total_descontos').value = valor_desc
}

function totalFinal(){
	var abonos = document.getElementById('total_abonos').value
	var descontos = document.getElementById('total_descontos').value
	var total = (parseFloat(abonos)-parseFloat(descontos)).toFixed(2)
	document.getElementById('total_final').value = total
}
document.getElementById('button8').addEventListener('click',function(){
	valorImposto()
	totalAbonos()
	valorIrs()
	valorSegSocial()
	sindicato()
	totalDesconto()
	totalFinal()
})