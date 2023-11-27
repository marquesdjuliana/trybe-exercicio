using System;
using System.Collections.Generic;
// Exemplo de umlasse genérica: permite armazenar e manipular uma lista de elementos de qualquer tipo.
public class ListaGenerica<T>
{
    private List<T> elementos;

    public ListaGenerica()
    {
        elementos = new List<T>();
    }

    public void Adicionar(T item)
    {
        elementos.Add(item);
    }

    public void MostrarLista()
    {
        Console.WriteLine("Elementos na lista:");
        foreach (var elemento in elementos)
        {
            Console.WriteLine(elemento);
        }
    }
}

class Program
{
    static void Main()
    {
        ListaGenerica<int> listaDeInteiros = new ListaGenerica<int>();
        listaDeInteiros.Adicionar(10);
        listaDeInteiros.Adicionar(20);
        listaDeInteiros.MostrarLista(); // Saída: 10, 20

        ListaGenerica<string> listaDeStrings = new ListaGenerica<string>();
        listaDeStrings.Adicionar("Olá");
        listaDeStrings.Adicionar("Mundo");
        listaDeStrings.MostrarLista(); // Saída: Olá, Mundo
    }
}
