// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks()); 
//faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock. 
//Isso é bem útil para que não haja interferência entre um teste e outro.

it('fetches a joke', async () => { //async para conseguir utilizar await em findByText -> ou seja, espere até que consiga encontrar o texto no DOM ou uma mensagem de erro por limite de tempo
  //Atenção: constante joke cria um objeto similar ao que é retornado da API;
  // se não fizer salvando em const é necessário fazer dentro da simulação do fetch
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.', 
    status: 200,
  };

  //1° opção de mock:
  //O jest.spyOn espiona as chamadas à função fetch do objeto global. 
  //É por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo, a função parseInt;
  jest.spyOn(global, 'fetch'); 
  global.fetch.mockResolvedValue({  
    json: jest.fn().mockResolvedValue(joke),
  });
// Outra forma de mock do fetch:      DETALHE: se for necessário testar se a função for chamada é preciso usar o JEST.FN()
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));

//Outra forma de mock:
  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));
  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1); //essa e função abaixo servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('fetches a new joke when button is clicked', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke1),
  });
  
  render(<App />);
  const newJokeButton = screen.getByRole('button', { name: 'New joke' });

  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke2),
   });
   userEvent.click(newJokeButton);
   expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
   expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
   expect(global.fetch).toBeCalledTimes(2);
});