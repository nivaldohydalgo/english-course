
## ESTRUTURA DO PROJETO

gera-json=ingles/
│
├── index.js
├── input.xlsx
└── output/

## COMO EXECUTAR

node index.js


## COMO FUNCIONA

- Lê a planilha
- Converte para JSON
- Filtra apenas as colunas desejadas
- Divide o array em blocos de 13 registros
- Gera 1 arquivo JSON por bloco