# 🌌 O Planeta Prisma - Desafio do Mago das Cores

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

## 📖 Sobre o Desafio

O **Planeta Prisma** é um projeto interativo que simula a magia de misturar cores no cosmos. Inspirado na lenda do Mago das Cores, este desafio combina programação com arte visual, criando uma experiência imersiva de fusão cromática.

### 🎯 Objetivo

Criar uma aplicação web que:
- Receba dois códigos hexadecimais de cores
- Misture as cores calculando a média dos canais RGB
- Exiba o resultado em formato hexadecimal com visualização interativa
- Apresente o cálculo detalhado passo a passo

## 🚀 Demonstração

🔗 **[Acesse o projeto ao vivo](https://github.com/luizfxdev/desafio_329)**

## 🧮 Lógica de Solução

### Algoritmo de Mistura de Cores

A fusão de cores segue este processo matemático:

1. **Conversão Hexadecimal → RGB**
   ```
   #FF5733 → R: 255, G: 87, B: 51
   #33FFE5 → R: 51, G: 255, B: 229
   ```

2. **Cálculo da Média (arredondada)**
   ```
   R = round((255 + 51) / 2) = 153
   G = round((87 + 255) / 2) = 171
   B = round((51 + 229) / 2) = 140
   ```

3. **Conversão RGB → Hexadecimal**
   ```
   RGB(153, 171, 140) → #99AB8C
   ```

### Implementação em JavaScript

```javascript
function mixColors(hex1, hex2) {
    // Remove '#' e extrai valores RGB
    const r1 = parseInt(hex1.substring(1, 3), 16);
    const g1 = parseInt(hex1.substring(3, 5), 16);
    const b1 = parseInt(hex1.substring(5, 7), 16);
    
    const r2 = parseInt(hex2.substring(1, 3), 16);
    const g2 = parseInt(hex2.substring(3, 5), 16);
    const b2 = parseInt(hex2.substring(5, 7), 16);
    
    // Calcula médias arredondadas
    const rMix = Math.round((r1 + r2) / 2);
    const gMix = Math.round((g1 + g2) / 2);
    const bMix = Math.round((b1 + b2) / 2);
    
    // Converte para hexadecimal
    return '#' + 
        rMix.toString(16).padStart(2, '0').toUpperCase() +
        gMix.toString(16).padStart(2, '0').toUpperCase() +
        bMix.toString(16).padStart(2, '0').toUpperCase();
}
```

## 📊 Exemplos de Entrada e Saída

| Entrada | Saída Esperada | Visualização |
|---------|----------------|--------------|
| `#FF5733, #33FFE5` | `#99AB8C` | ![#99AB8C](https://via.placeholder.com/50/99AB8C/99AB8C) |
| `#123456, #654321` | `#3A3A3B` | ![#3A3A3B](https://via.placeholder.com/50/3A3A3B/3A3A3B) |
| `#FF0000, #0000FF` | `#800080` | ![#800080](https://via.placeholder.com/50/800080/800080) |
| `#00FF00, #FFFF00` | `#80FF00` | ![#80FF00](https://via.placeholder.com/50/80FF00/80FF00) |

### 🔍 Detalhamento dos Exemplos

**Exemplo 1:** Vermelho + Azul = Roxo
```
Entrada: #FF0000, #0000FF
R: (255 + 0) / 2 = 128 → 80
G: (0 + 0) / 2 = 0 → 00
B: (0 + 255) / 2 = 128 → 80
Resultado: #800080
```

**Exemplo 2:** Verde + Amarelo = Verde-Limão
```
Entrada: #00FF00, #FFFF00
R: (0 + 255) / 2 = 128 → 80
G: (255 + 255) / 2 = 255 → FF
B: (0 + 0) / 2 = 0 → 00
Resultado: #80FF00
```

## 🎨 Funcionalidades

- ✨ Interface imersiva com vídeo de fundo cósmico
- 🎵 Música ambiente temática
- 🌈 Animações de glow nos botões
- 📱 Design 100% responsivo
- 🧮 Cálculo detalhado exibido passo a passo
- 🎨 Visualização da cor resultante em tempo real
- ⚡ Validação de entrada com feedback ao usuário

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com animações
- **JavaScript (Vanilla)** - Lógica de negócio
- **Flexbox & Grid** - Layout responsivo

## 📦 Estrutura do Projeto

```
desafio_329/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── background.mp4
│   └── theme.mp3
└── README.md
```

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/luizfxdev/desafio_329.git
```

2. Navegue até a pasta do projeto:
```bash
cd desafio_329
```

3. Adicione os arquivos de mídia na pasta `assets/`:
   - `background.mp4` (vídeo de fundo)
   - `theme.mp3` (música tema)

4. Abra o arquivo `index.html` em seu navegador

## 💡 Como Usar

1. Digite dois códigos hexadecimais separados por vírgula
   - Exemplo: `#FF5733, #33FFE5`
2. Clique no botão **CALCULAR**
3. Visualize o resultado com o cálculo detalhado
4. Use **RETORNAR** para fazer uma nova consulta

## 🎯 Recursos Técnicos

- **Conversão Hexadecimal ↔ RGB**
- **Manipulação de Strings** com métodos nativos
- **Arredondamento Matemático** para precisão
- **Validação de Entrada** robusta
- **Event Listeners** otimizados
- **DOM Manipulation** eficiente

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ✨ por **[Luiz FX](https://luizfxdev.com.br)**

---

<div align="center">

### ⭐ Se você gostou deste projeto, deixe uma estrela!

[![GitHub](https://img.shields.io/badge/GitHub-luizfxdev-181717?style=for-the-badge&logo=github)](https://github.com/luizfxdev)

</div>
