export function getUsuario() {
    return {
        "data": {
            "ContasQuery": [
                {
                    "banco": {
                        "codigo": 318,
                        "nome": "BANCO BMG S/A"
                    },
                    "numero": "684257",
                    "agencia": "49",
                    "saldo": '5.254,00',
                    "extratos": [
                        {
                            "dataCriacao": "29/05/2020",
                            "agrupamentos": [
                                {
                                    "data": "26/05/2020",
                                    "saldo": '5.254,00',
                                    "lancamentos": [
                                        {
                                            "titulo": "Compra",
                                            "descricao": "Americanas",
                                            "valor": '98,00'
                                        },
                                        {
                                            "titulo": "Compra",
                                            "descricao": "cartão de crédito",
                                            "valor": '49,00'
                                        },
                                        {
                                            "titulo": "Compra",
                                            "descricao": "Padaria do João",
                                            "valor": '88,00'
                                        }
                                    ]
                                },
                                {
                                    "data": "25/05/2020",
                                    "saldo": 548900,
                                    "lancamentos": []
                                }
                            ]
                        }
                    ]
                }
            ],
            "CartaoQuery": [
                {
                    "status": "Normal",
                    "tipoCartao": "BMG Multi",
                    "ultimosDigitos": "4861",
                    "faturas": [
                        {
                            "dataVencimento": "2020-06-03",
                            "valor": 35300,
                            "valorMinimo": 0,
                            "lancamentoFaturas": [
                                {
                                    "data": "2020-05-11",
                                    "valor": 44700,
                                    "titulo": "Compra",
                                    "descricao": "supermercado",
                                    "codigoMoedaEstrangeira": 0,
                                    "valorMoedaEstrangeira": 0,
                                    "iof": 0
                                },
                                {
                                    "data": "2020-05-20",
                                    "valor": 4300,
                                    "titulo": "Compra",
                                    "descricao": "padaria",
                                    "codigoMoedaEstrangeira": 0,
                                    "valorMoedaEstrangeira": 0,
                                    "iof": 0
                                },
                                {
                                    "data": "2020-05-20",
                                    "valor": 1500,
                                    "titulo": "Compra",
                                    "descricao": "padaria",
                                    "codigoMoedaEstrangeira": 0,
                                    "valorMoedaEstrangeira": 0,
                                    "iof": 0
                                },
                                {
                                    "data": "2020-05-27",
                                    "valor": -15200,
                                    "titulo": "Compra",
                                    "descricao": "online",
                                    "codigoMoedaEstrangeira": 0,
                                    "valorMoedaEstrangeira": 0,
                                    "iof": 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}