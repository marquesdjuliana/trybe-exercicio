//Primeiro: garantir que a interação do DOM com o HTML faça alterações somente depois que a página for carregada: window.onload;
// Crio o select (lembrando que a ordem que coloco ele no HTML importa em relação a seu local na página) no arquivo HTML com a ptions com value de cores; e nome das cores;
// Recupero meu elemento 'select' atribuindo-o uma variável;
// Passo um escutador na variável (que possui meu elemento select): nele atribuo um evento change e uma função (que diz o que quero que aconteça);
// atribuo também o selectedOptions (um atributo HTML collection - em formato de lista ("array") ), nele acesso o value (que é o nome das cores), seleciono a posição[0];
// minha função: deve alterar a cor do body, por isso acesso ele como objeto, e atribuio a estilização de cor do background;
// obs: não atribuo o select e sim selected pois quero que meu background color seja uma string/um texto e não um objeto ... e esse texto está em value, por isso: selected.value - para alterar cores do background;
window.onload = function (){
  let select = document.querySelector('select');
  select.addEventListener('change', function(){
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value
//Terceiro 1.1: É preciso salvar as alterações (a cada alteração que aconteça preciso salvar:1° salvar cor/ 2° salvar tamanho) que quero na memória do computador: localStorage
//criar o item: setItem (dando um nome/string para a chave [que identifique em relação ao documento]); e passar o valor (que são as cores que criei) - lembrando que: aqui só estou criando e não 'pegando' essa informação, ous eja, salvei e deixei lá quieto no localStorage;
  localStorage.setItem('dia4-secao4-background', selected.value);
})
//Segundo: Para que o usuário altere a fonte, crio o input; salvo elemento em uma variável;
// passo um escutador do evento de mudança com uma função que pegue o parágrafo e altere o estilo da fonte
// lembrando que atribui o tamanho da fonte em uma templete literal
  let inputFontSize = document.getElementById('changeSize');
  inputFontSize.addEventListener('change', function (){
    let p = document.querySelector('p');
    p.style.fontSize = `${inputFontSize.value}px`;
  //Terceiro 2.1: salvar essa alteração de tamanho também. repito os passos:
    localStorage.setItem('dia4-secao4-font-size', `${inputFontSize.value}px`);
  })

//Terceiro 1.2: preciso "pegar" a informação que salvei:
//Por isso crio uma variável com esse valor: pegando o item criado;
//Depois preciso recuperar o body para atribuir esse valor;
  let savedBackground = localStorage.getItem('dia4-secao4-background');
  document.body.style.backgroundColor = savedBackground;

//Terceiro 2.2: pegar essa informação que salvei; como no 1.2.
//Obs: se usar a mesma lógica e pegar p.style.fontSize (definido no código de cima) dará erro:
//porque o p está definido em uma variável somente dentro do segundo passo;
// o p não 'pego' como fiz com o body.. declaro-o primeiro (posso copiar o que já foi feito):
  let savedFontSize = localStorage.getItem('dia4-secao4-font-size');
  let p = document.querySelector('p');
  p.style.fontSize = savedFontSize;

// OBS.: Coloquei select e input pra fazer algo quando ele mudar/ receber determinado valor;
//já o getItem não: estão fora de funções/estão diretos no window.onload, por isso ele é executado no momento em que a página carrega!

}


