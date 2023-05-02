import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testes de inserção de email', () => {

  test('1 - Verifica se existe um input de email na tela', () => {
    // 1° acessar os elementos da tela:
    render(<App />);
    const inputEmail = screen.getByLabelText("Email"); // usando o seletor (getByLabeText) a partir do screen: o RTL vai na aplicação e pega o componente que atende todas as regras do seletor e retorna ele p/usar nos testes;
    
    // 2: interagir com os elementos (só se for necessário)
    // -> neste caso não foi necessário interação.
    
    // 3° fazer os testes
    expect(inputEmail).toBeInTheDocument(); // garantir se está sendo renderizada
    expect(inputEmail.type).toBe("email"); // garantir que o input é do tipo email
  });
  
  test('2 - Verifica se existem dois botões na tela', () => {
    // 1° acessar os elementos da tela:
    render(<App />);
    const inputsBTN = screen.getAllByRole("button"); // getAllByRole: retorna um array
    
    // 2: interafir com os elementos (só se for necessário)
    // -> neste caso não foi necessário interação.
    
    // 3° fazer os testes
    expect(inputsBTN).toHaveLength(2); 
  });
  
  test('3 - Verifica se existe botão de enviar', () => {
    // 1° acessar os elementos da tela:
    render(<App />);
    const btnEnviar = screen.getByTestId("id-send"); // 
    
    // 2: interagir com os elementos (só se for necessário)
    // -> neste caso não foi necessário interação.
    
    // 3° fazer os testes
    expect(btnEnviar).toBeInTheDocument(); // garantindo que está sendo renderizado
    expect(btnEnviar).toHaveValue("Enviar"); 
  });
  
  // test('4 - Verifica se ao digitar o email e clicar em "Enviar", o email é renderizado', () => {    
  //   const EMAIL_USER = 'teste@teste.com';
  //   //1°
  //   const userEmailH2 = screen.getByTestId('id-email-user');
  //   const btnSend = screen.getByTestId('id-send');
  //   const inputEmail = screen.getByLabelText('Email');
  //   //2°
  //   userEvent.type(inputEmail, EMAIL_USER);
  //   userEvent.click(btnSend);
  //   //3°
  //   expect(inputEmail).toHaveValue('');
  //   expect(userEmailH2).toBeInTheDocument();
  //   expect(userEmailH2).toHaveTextContent('Valor:');
  //   expect(userEmailH2).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  // });
})