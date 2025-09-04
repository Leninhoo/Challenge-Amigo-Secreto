# Amigo Secreto - Projeto GitHub

## 🧩 Descrição
Este projeto é uma aplicação simples para gerar sorteios de nomes de amigos, com funcionalidades básicas como adicionar amigos à lista, exibir em listas ou tabelas e sortear um nome aleatório. O código foi escrito utilizando HTML, CSS e JavaScript puro.

---

## 🧱 Instalação

### Pré-requisitos
- Nenhum instalação extra é necessária, mas o projeto requer:
  - Um navegador moderno (Chrome, Firefox, Edge, etc.)
  - Acesso ao arquivo `index.html` (arquivo principal do projeto)

### Passos para Executar
1. **Acesse o arquivo HTML** (`index.html`) diretamente no seu browser.
2. O projeto carregará automaticamente os arquivos CSS e JavaScript (style.css e app.js) que estão no mesmo diretório.

> ⚠️ **Nota:** Este é um projeto estático, ou seja, não requer servidor backend ou banco de dados.

---

## 🧩 Dependências

- **HTML**: Estrutura da página.
- **CSS** (`style.css`): Estilo visual do projeto.
- **JavaScript** (`app.js`): Lógica de funcionalidade (adicionar amigos, sortear nomes).

> ⚠️ **Observação:** O projeto utiliza fontes do Google Fonts, que são carregadas via CDN. Nenhum arquivo local é necessário para isso.

---

## 🧪 Como Funciona

1. **Adicionar amigo**:
   - Digite o nome de um amigo no campo e clique em "Adicionar".
   - O nome será adicionado à lista (listagem, tabela ou resultado).

2. **Sortear amigo**:
   - Clique no botão "Sortear amigo".
   - Um nome aleatório será exibido na área de resultados.

---

## 🚨 Problemas Comuns

### 1. Erro: "Lista vazia"
- **Causa**: Tenta sortear um amigo sem ter adicinado nenhum nome.
- **Solução**: Certifique-se de adicionar pelo menos um amigo antes de clicar no botão "Sortear".

### 2. Erro: Dados perdidos ao recarregar a página
Os amigos são armazenados apenas na memória do navegador.

---

## 🧩 Exemplos de Funcionalidade

### Listagem de Amigos
- Os nomes são exibidos em uma **tabela** ao adicionar um amigo.

### Tabela de Amigos
- Cada amigo é exibido em uma linha da tabela, com clique para mostrar alerta.

### Sorteio Aleatório
- O sistema escolhe aleatoriamente um nome da lista e exibe-o.

