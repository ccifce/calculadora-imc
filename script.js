function aplicarMascaraDecimal(event) {
    let input = event.target;
    let valor = input.value;
    

    
}

const inputAltura = document.getElementById('altura');
const inputPeso = document.getElementById('peso');


inputAltura.addEventListener('input', aplicarMascaraDecimal);
inputPeso.addEventListener('input', aplicarMascaraDecimal);


document.getElementById('calcular').addEventListener('click', function() {
    
    const inputAltura = document.getElementById('altura').value;
    const inputPeso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

        const alturaString = inputAltura.replace(',', '.');
    const pesoString = inputPeso.replace(',', '.');
    
    const altura = parseFloat(alturaString);
    const peso = parseFloat(pesoString);

        resultado.className = '';

    if (!altura || !peso || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Por favor, preencha a altura e o peso corretamente (valores maiores que zero).';
        resultado.classList.add('erro');         resultado.style.borderColor = '#c0392b'; 
        resultado.style.color = '#c0392b';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let orientacao = '';
    let classeCSS = '';

        if (imc < 18.5) {
      classificacao = 'Magreza';
      orientacao = 'O seu IMC indica Baixo Peso/Magreza. É recomendado buscar acompanhamento médico e nutricional para avaliar a causa e garantir a ingestão adequada de nutrientes e ganho de massa saudável.';
      classeCSS = 'magreza';
    } else if (imc < 25.0) {
      classificacao = 'Peso Normal';
      orientacao = 'O seu IMC está na faixa de Peso Normal. Continue mantendo hábitos saudáveis de alimentação equilibrada e exercícios regulares para preservar a saúde e a composição corporal ideal.';
      classeCSS = 'normal';
    } else if (imc < 30.0) {
      classificacao = 'Sobrepeso';
      orientacao = 'O seu IMC indica Sobrepeso (Pré-Obeso). Este é um sinal de alerta para rever os hábitos. Recomenda-se aumentar a atividade física e buscar orientação nutricional para prevenção de doenças crônicas.';
      classeCSS = 'sobrepeso';
    } else if (imc < 35.0) {
      classificacao = 'Obesidade Grau I';
      orientacao = 'O seu IMC indica Obesidade Grau I. É fundamental buscar acompanhamento médico e nutricional para iniciar um plano de perda de peso e reduzir os riscos de doenças associadas como diabetes e hipertensão.';
      classeCSS = 'obesidade1';
    } else if (imc < 40.0) {
      classificacao = 'Obesidade Grau II (Severa)';
      orientacao = 'O seu IMC indica Obesidade Grau II. O risco para a saúde é elevado. É imprescindível o acompanhamento de uma equipe multidisciplinar (médico, nutricionista e educador físico) para tratamento e controle dos fatores de risco.';
      classeCSS = 'obesidade2';
    } else {
      classificacao = 'Obesidade Grau III (Mórbida)';
      orientacao = 'O seu IMC indica Obesidade Grau III. O risco de comorbidades é altíssimo. O acompanhamento médico imediato e um plano de tratamento rigoroso são essenciais para preservar sua qualidade e expectativa de vida.';
      classeCSS = 'obesidade3';
    }

    
    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> kg/m².<br>Classificação: <strong>${classificacao}</strong>.<hr style="background-color: #dcdcdc; height: 1px; margin: 10px 0; border: none;">${orientacao}`;
    resultado.classList.add(classeCSS);
});
