// Exemplo 00:
// Console.WriteLine("Hello, World!");

// Exemplo 01 - escrevendo:
// Console.WriteLine("Digite seu nome:");
// string nome = Console.ReadLine();
// Console.WriteLine($"Olá, {nome}!");

// Exemplo 02 - Entrada de Dados:
// int Age = int.Parse(Console.ReadLine());
// decimal Average = decimal.Parse(Console.ReadLine());
// bool Permission = bool.Parse(Console.ReadLine());
// string Name = Console.ReadLine();

// Console.WriteLine(Age);
// Console.WriteLine(Average);
// Console.WriteLine(Permission);
// Console.WriteLine(Name);

//Exemplo 03 - concatenação de Dados:
// int Number = 10;
// string Name = "Trybe";
// Console.WriteLine("O valor da variável numero é: "+Number);
// Console.WriteLine("Eu sou um estudante " + Name +"!");

//ENTRADA DE DADOS
// Console.WriteLine("Boas vindas ao programa 'Calcula Lâmpada'!");
// Console.WriteLine("Informe o nome do cômodo: ");
// string convenient = Console.ReadLine();

// Console.WriteLine("Informe em metros a largura deste cômodo: ");
// decimal width = decimal.Parse(Console.ReadLine());

// Console.WriteLine("Informe em metros o comprimento deste cômodo: ");
// decimal length = decimal.Parse(Console.ReadLine());

// Console.WriteLine("Informe a potência em watts da lâmpada que será utilizada: ");
// int power = int.Parse(Console.ReadLine());

// //PROCESSAMENTO
// decimal squareMeter = width * length;
// decimal quotientX = power / 18M;
// decimal totalLightBulbs = squareMeter / quotientX;

// //SAIDA DE DADOS
// Console.WriteLine("Para iluminar o cômodo: " + convenient + " com " + squareMeter.ToString("N2") + " metros quadrados " + "será necessário a instalação de " + totalLightBulbs.ToString("N2") + " lâmpada(s)");

// Exemplo 04 - Criando um enum:

// namespace namespaceExample;

// enum CardinalPoints
// {
//     Norte,
//     Sul,
//     Leste,
//     Oeste
// };

// class Program
// {
//     public static void Main()
//     {
//         //Utilizando um enum
//         CardinalPoints direction = CardinalPoints.Norte;
//         Console.WriteLine("Ponto Cardeal: " + direction);
//     }
// }


// Exemplo de Operações Aritméticas:
//Adição
int a = 50, b = 50;
int result1 = a + b;
Console.WriteLine(result1);

// //Subtração
int c = 77, d = 21;
int result2 = c - d;
Console.WriteLine(result2);

// //Multiplicação
int e = 5, f = 5;
int result3 = e * f;
Console.WriteLine(result3);

// //divisão
int g = 90, h = 9;
int result4 = g / h;
Console.WriteLine(result4);

// //módulo
int i = 36, j = 7;
int result5 = i % j;
Console.WriteLine(result5);