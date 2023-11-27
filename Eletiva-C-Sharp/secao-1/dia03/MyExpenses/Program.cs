using System;

class Program
{
// // EXMEPLO 01 - UTLIZANDO ARRAY SIMPLES:
//   // Variável publica - Declara o array simples:
//   public int[] expensesCost;

//   // Cria método para :...
//   static void Main(string[] args)
//   {
//     // Declara um novo ARRAY SIMPLES de inteiros local para armazenar os custos das despesas
//     int[] expensesCost;
    
//     // Solicita ao usuário que entre com o número de despesas
//     Console.WriteLine("Entre com o número de despesas: ");
    
//     // Obtém o número de despesas por meio de uma função externa (não fornecida no código)
//     int numberOfExpenses = getNumberOfExpenses();
    
//     // Preenche o array expensesCost com os custos das despesas fornecidos pelo usuário
//     for (int i=0; i < numberOfExpenses; i++)
//     {
//       expensesCost[i] = getExpenseCostFromUser();
//     }

//     // Inicializa uma variável para armazenar o total dos custos das despesas
//     int totalExpenses = 0;

//     // Calcula o total somando os valores dos custos das despesas
//     for (int i = 0; i < numberOfExpenses; i++)
//     {
//       totalExpenses += expensesCost[i];
//     }

//     // Exibe o total dos custos das despesas na tela
//     Console.WriteLine("O total das despesas é: " + totalExpenses);
//   }


// EXEMPLO 02 - UTILIZANDO ARRAY MULTIDIMENSIONAL:

  // Variável publica - Declara o array multimensional:
  // int[,] expensesCost;
  
  // static void Main(string[] args)
  // {
  //   // Declaração de outra variavel
  //   int[,] expensesCost;
  //   Console.WriteLine("Entre com o número de despesas: ");
  //   int numberOfExpenses = getNumberOfExpenses();

  //   // Inicializa uma nova matriz com 'numberOfExpenses' linhas e 2 colunas.
  //   expensesCost = new int[numberOfExpenses, 2];

  //   for (int i=0; i < numberOfExpenses; i++)
  //   {
  //     for (int j=0; j < 2; j++)
  //     {
  //       expensesCost[i, j] = getExpenseCostFromUser();
  //     }
  //   }
  // }


// EXEMPLO 03 -  COMO SERIA UM CÓDIGO REAL:

    public static int[] expensesCost;

    static void Main(string[] args)
    {
        Console.WriteLine("Entre com o número de despesas: ");
        int numberOfExpenses = GetNumberOfExpenses();

        expensesCost = new int[numberOfExpenses];

        for (int i = 0; i < numberOfExpenses; i++)
        {
            expensesCost[i] = GetExpenseCostFromUser(i + 1);
        }

        int totalExpenses = 0;
        for (int i = 0; i < numberOfExpenses; i++)
        {
            totalExpenses += expensesCost[i];
        }

        Console.WriteLine("O total das despesas é: " + totalExpenses);
    }
    static int GetNumberOfExpenses()
    {
        int numberOfExpenses;
        while (true)
        {
            if (!int.TryParse(Console.ReadLine(), out numberOfExpenses))
            {
                Console.WriteLine("Por favor, insira um número válido.");
                continue;
            }
            break;
        }
        return numberOfExpenses;
    }

    static int GetExpenseCostFromUser(int expenseNumber)
    {
        int expenseCost;
        while (true)
        {
            Console.WriteLine($"Entre com o custo da despesa {expenseNumber}: ");
            if (!int.TryParse(Console.ReadLine(), out expenseCost))
            {
                Console.WriteLine("Por favor, insira um número válido.");
                continue;
            }
            break;
        }
        return expenseCost;
    }
}
