# 🎙️ Meu Flow: Assistente de Acessibilidade Web

> Uma interface de comando de voz desenvolvida para permitir a navegação hands-free utilizando a Web Speech API.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Status](https://img.shields.io/badge/Status-Funcional-success?style=for-the-badge)

## 🎯 O Problema
Durante um período de lesão temporária nos braços, o uso convencional de teclado e mouse tornou-se inviável. Eu precisava de uma maneira de interagir com a web e manter a produtividade sem depender de input físico manual.

## 💡 A Solução
Desenvolvi uma aplicação web leve que utiliza a **Web Speech API** nativa do navegador. O sistema captura o áudio do microfone, transcreve em tempo real e mapeia palavras-chave para executar ações no DOM (como rolar a página, mudar temas ou exibir alertas), eliminando a necessidade de digitação para tarefas básicas.

## ⚙️ Funcionalidades
- **Reconhecimento de Voz em Tempo Real:** Captura e processamento imediato de comandos.
- **Controle de Interface:** Comandos para rolar a página (Scroll Up/Down).
- **Modo Escuro por Voz:** Comando "Ativar modo escuro" altera o CSS dinamicamente.
- **Feedback Visual:** O sistema exibe na tela o que entendeu que você disse, para confirmar a ação.

## 🚀 Como Rodar
Este é um projeto estático, ou seja, não precisa de instalação de bibliotecas (npm/pip). Ele roda direto no navegador.

**⚠️ Requisito:** Utilize o **Google Chrome** ou Edge (navegadores baseados em Chromium) para suporte total à API `webkitSpeechRecognition`.

1. Clone este repositório:
```bash
git clone https://github.com/cristalwolfff/meu_flow.git
```
2. Entre na pasta:
```bash
cd meu_flow
```
2. Abra o arquivo index.html:
- Dê um duplo clique no arquivo index.html.
- Ou clique com botão direito -> Abrir com -> Google Chrome.

3. Permita o uso do Microfone quando o navegador solicitar.

## 🛠️ Tecnologias Utilizadas
- JavaScript (ES6): Lógica de controle, manipulação do DOM e Switch Case para comandos.
- Web Speech API: Interface nativa do navegador para reconhecimento de fala (Speech-to-Text).
- HTML5/CSS3: Estrutura e estilização da interface.

## Desenvolvido por Cristalwolf Dias 🐺
