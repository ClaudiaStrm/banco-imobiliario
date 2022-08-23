## Banco imobiliário

O programa foi feito utilizando node versão 16.15.0.
Para rodar, entre na pasta, abra o terminal e realize as instalações necessárias.
```sh
cd banco-imobiliario
npm i
```
Quando as instalações forem finalizada, inicie o programa com npm start:
```
npm start
```

A api possui dois endpoints:
- http://localhost:8000/resultado -> essa url trará o resultado final do jogo, com o vencedor e um array com os jogadores ordenado na ordem inversa a que foram eliminados.
Em caso de mais de um jogador terminar o jogo sem perder todo o dinheiro, o nome de ambos aparecerá na chave `Vencedor`

- http://localhost:8000/historico -> criada para poder acompanhar a evolução do jogo e ajudar no debug durante o desenvolvimento da aplicação. Nela vão estar as ações ocorridas durante as rodadas (compra de propriedade, pagamento de aluguel e jogador saindo do jogo). Algumas rodadas podem aparecer sem nenhuma informação salva -- isso acontece quando o jogador joga mas não realiza uma ação (quando para sobre uma propriedade disponível mas não a compra).

Caso a url `/historico` seja acessada antes da url `/resultado`, ela exibirá a mensagem "Sem informações disponíveis".