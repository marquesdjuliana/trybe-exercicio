// Exemplo 01 - Cast Implícito:
// //  O C# permite essa atribuição direta de um tipo menor para um tipo maior, pois há uma conversão implícita quando não há risco de perda de dados.
// public class Program
// {
//     public static void Main()
//     {
//         // guarda valor int em long:
//         // int someIntNumber = 51;
//         // long longNumberCast = someIntNumber;

//         // Console.WriteLine(longNumberCast);

//         // ignora as casas decimais automaticamente:
//         int intResult = 5/2;

//         Console.WriteLine(intResult);
//     }
// }

// // Exemplo 01 - Cast Explícito:
// public class Program
// {
//     public static void Main()
//     {
//         // explicitando que é para transformar long em int mesmo que se perda informação:
//         long someLongNumber = 516144564564654;
//         int intNumber = (int) someLongNumber;

//         Console.WriteLine(intNumber);
//     }
// }

// Exemplo 03 - cast explícito de string para número inteiro
public class Program
{
    public static void Main()
    {
        string someString = "42";
        int convertInt = Convert.ToInt32(someString);

        Console.WriteLine(convertInt);
    }
}