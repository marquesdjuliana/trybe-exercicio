import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Testa a aplicação, e o input', () => {
  test('Testa a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    render(<App />);
    //1°:
    const inputTodo = screen.getByLabelText('Tarefa:');
    const addBtn = screen.getByText('Adicionar');

    //2°:
    listTodo.map((tarefa) => {
      userEvent.type(inputTodo, tarefa);
      userEvent.click(addBtn);
    });

    //3°:
    listTodo.map((tarefa) => {
      expect(screen.getByText(tarefa)).toBeInTheDocument();
    });
  });
});

describe('Testa o Componente item', () => {
  test('Ao receber uma string como props, ela precisa aparecer na tela.', () => {
    render(<Item content="Teste" />);
    //1° e 3°:
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
});
