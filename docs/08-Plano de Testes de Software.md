# Plano de Testes de Software


O Plano de Teste do Software tem como finalidade atingir os seguintes objetivos:

1.	Garantir que a aplicação esteja funcionando corretamente em qualquer dispositivo móvel, tais como smartphones, tablets e computadores;
2.	Verificar se todas as funcionalidades estão operando corretamente, garantindo assim que a aplicação esteja cumprindo suas funções de forma eficaz;
3.	Assegurar que os usuários consigam utilizar a aplicação com facilidade e sem dificuldades;
4.	Assegurar a acessibilidade, independentemente de possíveis limitações do usuário.

Caso de Teste	CT-01 – Gerenciamento do Pedido pelo Cliente
Requisito Associado	- O sistema deve permitir a adição, edição e exclusão de pedidos no sistema antes de serem enviados para a cozinha.
Objetivo do Teste	- Verificar se as funcionalidades de adição, edição e exclusão de pedidos estão funcionando corretamente e se as informações são armazenadas corretamente no sistema.
Passos	- Acessar o sistema.
- Acessar o cardápio.
- Navegar pelo cardápio.
- Executar os seguintes casos de teste em sequência:
 Clicar no item que deseja fazer o Pedido.
a) Na tela de pedido clicar no pedido errado e excluir antes do envio.
B) Na tela do pedido fazer a edição acrescentando mais quantidade do mesmo item antes do envio.
c) Verificar os itens escolhidos foram encaminhados para preparo na cozinha.
Critérios de Êxito	- Os casos de teste são executados sem erros ou falhas.
- O sistema é capaz de adicionar, editar e excluir o pedido
Caso de Teste	CT-02 – Acompanhar Status do Pedido pelo Cliente
Requisito Associado	- O sistema deve permitir o acompanhamento do status do pedido.
Objetivo do Teste	- Verificar se o sistema é capaz de acompanhar o status do pedido encaminhado para a cozinha.
Passos	- Acessar o sistema.
- Navegar para a página do status do pedido.
- Selecionar o pedido.
- Verificar o status atual do pedido.
Critérios de Êxito	- Os casos de teste são executados sem erros ou falhas.
- O sistema é capaz de acompanhar o status de cada ferramenta corretamente.
Caso de Teste	CT-03 – Gerenciamento do Pedido pelo Funcionário
Requisito Associado	- O sistema deve permitir a adição, edição e exclusão de pedidos enviado para a cozinha no sistema.
Objetivo do Teste	- Verificar se as funcionalidades de adição, edição e exclusão de pedidos enviados para a cozinha estão funcionando corretamente e se as informações são armazenadas corretamente no sistema conforme a ação executada.
Passos	- Acessar o sistema.
- Acessar os pedidos realizado pelo cliente e já encaminhados para a cozinha.
- Executar os seguintes casos de teste em sequência:
 Clicar no item que deseja fazer alterar no pedido.
a) Na tela de pedido clicar no pedido errado e excluir.
B) Na tela do pedido fazer a edição acrescentando mais quantidade do mesmo item.
c) Verificar os itens alterados foram encaminhados para preparo na cozinha.
Critérios de Êxito	- Os casos de teste são executados sem erros ou falhas.
- O sistema é capaz de adicionar, editar e excluir o pedido mesmo com o status de encaminhado para o preparo.
Caso de Teste	CT-04 – Gerenciamento do Cardápio pelo Funcionário
Requisito Associado	- O sistema deve permitir que os funcionários adicione, altere e retire itens do cardápio e seu preço.
Objetivo do Teste	- Verificar se as funcionalidades de adição, edição e exclusão dos itens do cardápio estão funcionando corretamente e se as informações são armazenadas corretamente no sistema.
Passos	- Acessar o sistema.
- Realizar login como usuário.
- Acessar o cardápio.
- Executar os seguintes casos de teste em sequência:
 Clicar no item que deseja fazer alterar do cardápio.
a) Na tela do cardápio clicar no item e efetuar a exclusão.
B) Na tela do cardápio clicar no item e fazer a edição do cardápio alterando preços e descrição de itens.
c) Na tela do cardápio acrescentar o item que deseja ao cardápio.
Acessar o sistema de gerenciamento de aluguel de ferramentas.
- Realizar login como usuário.
Critérios de Êxito	- Os casos de teste são executados sem erros ou falhas.
- O sistema é capaz de adicionar, editar e excluir itens do cardápio

 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
