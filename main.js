// O código a seguir cria dois gráficos utilizando a biblioteca Chart.js para exibir informações de temperatura e umidade.

// Cria um objeto temperatura que armazena valores de temperatura para cada hora do dia
const temperatura = {
    '12:00': 30,
    '13:00': 29,
    '14:00': 28,
    '15:00': 25,
    '16:00': 22,
    '17:00': 23
};

// Cria um objeto umidade que armazena valores de umidade para cada hora do dia
const umidade = {
    '12:00': 80,
    '13:00': 82,
    '14:00': 80,
    '15:00': 85,
    '16:00': 80,
    '17:00': 83
};

// Obtém o contexto do canvas onde o gráfico será desenhado
const ctx = document.getElementById('meuGrafico').getContext('2d');

// Cria um novo gráfico do tipo "line" com os dados de temperatura e umidade
const meuGrafico = new Chart(ctx, {
    // define o tipo do gráfico como line
    type: 'line',
    data: {
        // Usa as chaves do objeto temperatura como labels no eixo x
        labels: Object.keys(temperatura),
        // Define dois datasets para serem plotados: temperatura e umidade
        datasets: [
            {
                label: 'Temperatura', // Nome do dataset
                data: Object.values(temperatura), // Valores a serem plotados
                borderColor: '#FF6384', // Cor da linha
                backgroundColor: 'rgba(0, 0, 0, 0)', // Cor de fundo transparente
                borderWidth: 2, // Espessura da linha
                lineTension: 0 // Tensão da linha
            },
            {
                label: 'Umidade', // Nome do dataset
                data: Object.values(umidade), // Valores a serem plotados
                borderColor: '#36A2EB', // Cor da linha
                backgroundColor: 'rgba(0, 0, 0, 0)', // Cor de fundo transparente
                borderWidth: 2, // Espessura da linha
                lineTension: 0 // Tensão da linha
            }
        ],
    },
});

// Cria um objeto temperaturaMedia que armazena valores de temperatura média para cada mês
const temperaturaMedia = {
    'Janeiro': 22,
    'Fevereiro': 24,
    'Março': 27,
    'Abril': 23,
    'Maio': 20,
    'Junho': 18
};

// Cria um objeto umidadeMedia que armazena valores de umidade média para cada mês
const umidadeMedia = {
    'Janeiro': 90,
    'Fevereiro': 89,
    'Março': 93,
    'Abril': 87,
    'Maio': 88,
    'Junho': 82
};
// Selecionando o elemento canvas para renderizar o gráfico
const ctx2 = document.getElementById('meuGrafico2').getContext('2d');

// Criando um novo objeto Chart para renderizar o gráfico
const meuGrafico2 = new Chart(ctx2, {
    // Tipo de gráfico, neste caso um gráfico de barras
    type: 'bar',
    // Dados do gráfico
    data: {
        // Rótulos (ou labels) do eixo X, obtidos a partir das chaves do objeto temperaturaMedia
        labels: Object.keys(temperaturaMedia),
        // Conjunto de dados (ou datasets) a serem plotados no gráfico
        datasets: [
            // Primeiro conjunto de dados
            {
                // Label que será exibido na legenda do gráfico
                label: 'Temperatura Média',
                // Valores do conjunto de dados, obtidos a partir dos valores do objeto temperaturaMedia
                data: Object.values(temperaturaMedia),
                // Cor da borda das barras do gráfico
                borderColor: '#FF6384',
                // Cor de fundo das barras do gráfico
                backgroundColor: '#FFB1C1',
            },
            // Segundo conjunto de dados
            {
                // Label que será exibido na legenda do gráfico
                label: 'Umidade Média',
                // Valores do conjunto de dados, obtidos a partir dos valores do objeto umidadeMedia
                data: Object.values(umidadeMedia),
                // Cor da borda das barras do gráfico
                borderColor: '#36A2EB',
                // Cor de fundo das barras do gráfico
                backgroundColor: '#9BD0F5',
            }
        ],
    },
    // Opções de configuração do gráfico
    options: {
        // Escalas do gráfico
        scales: {
            // Configuração da escala do eixo Y
            yAxes: [{
                // Configuração dos ticks (ou marcas) da escala do eixo Y
                ticks: {
                    // Indica se a escala deve começar em zero ou no menor valor dos dados
                    beginAtZero: true
                }
            }]
        }
    }
});