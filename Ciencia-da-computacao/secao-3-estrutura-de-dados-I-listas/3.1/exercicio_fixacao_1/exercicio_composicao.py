class Ventilador:
    def __init__(self, preco, marca, potencia, velocidade):
        self.preco = preco
        self.__marca = marca
        self.__potencia = potencia
        self.__velocidade = velocidade

    def marca(self):
        return self.__marca


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return f"{self.nome} - possui um ventilador."
        return f"{self.nome} - não possui um ventilador."


ventilador_arco = Ventilador(
    preco=100, marca="arco", potencia=250, velocidade=220
)
pessoa = Pessoa("Juliana", saldo_na_conta=2000)
pessoa.comprar_ventilador(ventilador_arco)

print(pessoa)
