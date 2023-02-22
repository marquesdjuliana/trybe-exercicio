//testando passos de instalação do JEST:
JEST:
- uma biblioteca 
- um framework do Facebook (código aberto);
- ferramenta para testes unitários

PASSOS instalação:
> primeiro: npm -v (para verificar a versão gerenciador de pacotes npm);
> segundo: criar pasta ex: mkdir new-project 
> terceiro: entrar na pasta cd new-project 
> quarto: npm init -y criar arquivo package.json 
> quinto: editar o arquivo package.json para que o JS entenda que irei utlizar o JEST como biblioteca de teste: alterando o valor de test  em script para “jest”; salvar o arquivo e voltar  para terminal.

-- até aqui, preparei o ambiente para instalar o jest no projeto --

> sétimo // confirmar se está na pasta do projeto (pwd) e criar biblioteca jest: 
npm install --save-dev jest (esse comando salva como dependência de produção);
> foi gerado dois arquivos: 
-- node_modules  (é uma pasta que guarda todos os arquivos baixados das dependências instaladas);
-- package-lock.json (é um arquivo que trava as versões das dependências quando outra pessoa for baixar);
