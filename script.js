// Elementos do DOM
const colorInput = document.getElementById('color-input');
const calculateBtn = document.getElementById('calculate-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');

// Elementos de áudio
const themeAudio = document.getElementById('theme-audio');
const playBtn = document.getElementById('play-audio');
const pauseBtn = document.getElementById('pause-audio');

// Controle de áudio
playBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Função principal: Mesclar duas cores hexadecimais
function mixColors(hex1, hex2) {
  // Remove o símbolo '#' se presente
  const cleanHex1 = hex1.replace('#', '');
  const cleanHex2 = hex2.replace('#', '');

  // Validação básica de formato hexadecimal
  if (cleanHex1.length !== 6 || cleanHex2.length !== 6) {
    throw new Error('Os códigos hexadecimais devem ter 6 caracteres');
  }

  // Converte hex para RGB
  const r1 = parseInt(cleanHex1.substring(0, 2), 16);
  const g1 = parseInt(cleanHex1.substring(2, 4), 16);
  const b1 = parseInt(cleanHex1.substring(4, 6), 16);

  const r2 = parseInt(cleanHex2.substring(0, 2), 16);
  const g2 = parseInt(cleanHex2.substring(2, 4), 16);
  const b2 = parseInt(cleanHex2.substring(4, 6), 16);

  // Calcula a média dos canais RGB e arredonda
  const rMix = Math.round((r1 + r2) / 2);
  const gMix = Math.round((g1 + g2) / 2);
  const bMix = Math.round((b1 + b2) / 2);

  // Converte RGB de volta para hexadecimal
  const rHex = rMix.toString(16).padStart(2, '0').toUpperCase();
  const gHex = gMix.toString(16).padStart(2, '0').toUpperCase();
  const bHex = bMix.toString(16).padStart(2, '0').toUpperCase();

  const resultHex = `#${rHex}${gHex}${bHex}`;

  // Retorna objeto com todos os dados para exibição
  return {
    hex1: `#${cleanHex1.toUpperCase()}`,
    hex2: `#${cleanHex2.toUpperCase()}`,
    rgb1: { r: r1, g: g1, b: b1 },
    rgb2: { r: r2, g: g2, b: b2 },
    rgbMix: { r: rMix, g: gMix, b: bMix },
    resultHex: resultHex
  };
}

// Função para exibir o resultado detalhado
function displayResult(data) {
  resultContent.innerHTML = `
        <div class="calculation-step">
            <strong>🎨 Cor 1:</strong> ${data.hex1}<br>
            <strong>RGB:</strong> R=${data.rgb1.r}, G=${data.rgb1.g}, B=${data.rgb1.b}
        </div>
        
        <div class="calculation-step">
            <strong>🎨 Cor 2:</strong> ${data.hex2}<br>
            <strong>RGB:</strong> R=${data.rgb2.r}, G=${data.rgb2.g}, B=${data.rgb2.b}
        </div>
        
        <div class="calculation-step">
            <strong>🔮 Cálculo da Mistura:</strong><br>
            R = (${data.rgb1.r} + ${data.rgb2.r}) / 2 = ${data.rgbMix.r}<br>
            G = (${data.rgb1.g} + ${data.rgb2.g}) / 2 = ${data.rgbMix.g}<br>
            B = (${data.rgb1.b} + ${data.rgb2.b}) / 2 = ${data.rgbMix.b}
        </div>
        
        <div class="final-result">
            <h3>✨ Cor Resultante ✨</h3>
            <div class="color-display">
                <div class="color-box" style="background-color: ${data.resultHex};"></div>
                <div class="color-hex">${data.resultHex}</div>
            </div>
        </div>
    `;

  resultSection.classList.add('show');
}

// Evento: Botão CALCULAR
calculateBtn.addEventListener('click', () => {
  const input = colorInput.value.trim();

  // Validação da entrada
  if (!input) {
    alert('⚠️ Por favor, insira dois códigos hexadecimais separados por vírgula.');
    return;
  }

  // Divide a entrada em duas cores
  const colors = input.split(',').map(c => c.trim());

  if (colors.length !== 2) {
    alert(
      '⚠️ Por favor, insira exatamente dois códigos hexadecimais separados por vírgula.\nExemplo: #FF5733, #33FFE5'
    );
    return;
  }

  try {
    const result = mixColors(colors[0], colors[1]);
    displayResult(result);
  } catch (error) {
    alert('⚠️ Erro: ' + error.message + '\nVerifique se os códigos hexadecimais estão corretos.');
  }
});

// Evento: Botão RETORNAR
returnBtn.addEventListener('click', () => {
  colorInput.value = '';
  resultSection.classList.remove('show');
  resultContent.innerHTML = '';
});

// Permite calcular pressionando Enter no input
colorInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    calculateBtn.click();
  }
});
