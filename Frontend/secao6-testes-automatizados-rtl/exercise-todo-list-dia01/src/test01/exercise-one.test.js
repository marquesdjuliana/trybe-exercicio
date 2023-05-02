import React from 'react';
import { render , screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    //1° acessar o(s) elemento(s):
    const addBtn = screen.getByText(/adicionar/i);
    //2° interagir  o(s) elemento(s): -> neste caso não foi necessário.
    //3° fazer o(s) teste(s):
    expect(addBtn).toBeInTheDocument();
    expect(addBtn.type).toBe('button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    //1° acessar o(s) elemento(s):
    const inputTodo = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');
    const teste = screen.queryByText('Teste');
    //2° interagir  o(s) elemento(s):
    userEvent.type(inputTodo, 'Teste');
    userEvent.click(buttonAdd);
    //3° fazer o(s) teste(s):
    expect(teste).not.toBeInTheDocument();
    expect(screen.getByText('Teste')).toBeInTheDocument();
    expect(inputTodo).toHaveValue("");
  });
});
