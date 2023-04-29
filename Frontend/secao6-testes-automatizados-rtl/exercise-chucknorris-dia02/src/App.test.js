import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Jokes', () => {

  it('Verifica se o título está sendo corretamente exibido na tela', () => {
    render(<App />);
    // const title = screen.getByText(/piadas do Chuck Norris/i);
    // Exemplo abaixo aria role pegar elemento no RTL

    const title = screen.getByRole( 'heading', {name: 'Piadas do Chuck Norris', level: 1}); // name = conteúdo 
    expect(title).toBeInTheDocument();
  });

  it('Verifica se exibe o texto da piada na tela', async ()  => {
    const expectedJoke = "Chuck Norris quebrou uma Hilux...";

    //pegando a implementação do fetch de forma global e alterando
    //jest.fn () não é necessário aqui mas da poderes maior caso queira fazer comparações 
    //fetch: retorna uma promise então é preciso representa esse comportamento com async -> retorna json
    // json: retorna tb uma promise retorno um objeto literal: 
    global.fetch = jest.fn( async () => ({
      json: async () => ({ value: expectedJoke}),  // o "value" é uma chave do objeto da API que tem como valor a piada; e atribuo a piada que salvei (expectedJoke)
    }));

    //isso tudo antes do render; porque é com a renderização que o App faz o fetch. -> portanto, a alteração da implementação do fetch precisa ser antes de renderizar

    render(<App />);
    const joke = await screen.findByText(expectedJoke); // getByText não dá -> porque o teste pe assíncrono; por isso o findByText


  })
});


