import { useState } from "react"

    // declaração de constantes para distribuição de tarefas setorizando cada função

const Formulario = () => {

    const  [altura, setAltura] = useState('');
    const  [peso, setPeso] = useState('');
    const  [imc, setImc] = useState(null);
    const  [classificacao, setClassificacao] = useState('');

    const calculaIMC = (e) => {
        e.preventDefault();
        if (altura && peso) {
            const alturaEmMetros = altura / 100;
            const valorImc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed();
            const imcFormatado = valorImc.toString().slice(0, 5);
            setImc(imcFormatado);
            classificacaoIMC(imcFormatado);

        }
    };

    const classificacaoIMC = (imc) => {
        const numeroImc = parseFloat(imc);
        let classificacao = '';
        if (numeroImc< 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (numeroImc>= 18.5 && numeroImc< 24.9) {
            classificacao = 'Peso normal';
        }else if (numeroImc>= 25 && numeroImc< 29.9) {
            classificacao = 'Peso normal';
        }else if (numeroImc>= 25 && numeroImc< 29.9) {
            classificacao = 'Sobrepeso';
        }else {
            classificacao = 'obesidade';
        }
        setClassificacao(classificacao);


    };

    return (
        <div>
            <h1>Calculadora IMC </h1>
            <form onSubmit={calculaIMC}> 
                <div>
                    <label>Altura (cm):</label>
                    <input type="number" placeholder=" Digite a sua Altura" value={altura} onChange={evento => setAltura(evento.target.value)}/>
                </div>
                <div>
                    <label>Peso (Kg):</label>
                    <input type="number" placeholder="Digite o seu Peso " value={peso} onChange={evento => setPeso(evento.target.value)}/>    
                </div>
                <button type="submit"> Calcular IMC</button>
            </form>
            {imc && (
                <div>
                    <h2> Seu IMC: {imc}</h2>
                    <h3>classificacao: {classificacao}</h3>
                </div>
            )}
        </div>
    )
}

export default Formulario;