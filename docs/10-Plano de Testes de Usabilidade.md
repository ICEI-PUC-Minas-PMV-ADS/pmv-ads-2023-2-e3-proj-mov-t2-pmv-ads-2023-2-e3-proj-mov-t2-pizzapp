# Plano de Testes de Usabilidade

O teste de usabilidade é a forma que permite avaliar a qualidade da interface com o usuário final da aplicação interativa. Observando interações de voluntários reais com a aplicação sob estudo, o Plano de Testes de Usabilidade é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Com ele é possível diagnosticar erros e identificar problemas relacionados à clareza, eficiência e eficácia da navegação.

Para mensurar os testes será aplicada a Escala de Likert que é um tipo de escala de resposta psicométrica usada habitualmente em questionários, e é a escala mais usada em pesquisas de opinião. Ao responderem a um questionário os pesquisados seu nível de concordância com uma afirmação apresentada.

O formato típico de um item Likert é:
1.	Discordo totalmente
2.	Discordo parcialmente
3.	Indiferente
4.	Concordo parcialmente
5.	Concordo totalmente

### Objetivos:

Os principais objetivos desse plano são:

•	Verificar o quão fácil e eficiente é para os usuários interagirem com a aplicação e atingirem seus objetivos;

•	Identificar problemas de usabilidade que pode afetar a eficiência da aplicação, tais como dificuldades de navegação, confusões na interface, erros de design, entre outros;

•	Identifica itens que possa melhorar a usabilidade da aplicação leva a uma maior satisfação do usuário;

•	Coletar feedback direto dos usuários, incluindo suas opiniões, sugestões e preocupações em relação à aplicação;

•	Tornar a aplicação mais intuitiva, eficaz e agradável de usar.

### Participantes:

A escolha dos participantes para a coleta de observações dependerá das personas estabelecidas como usuários da aplicação. Portanto, é de fundamental importância incluir uma variedade de pessoas, abrangendo diferentes faixas etárias, níveis de conhecimento em tecnologia e uma distinção entre clientes e funcionários do estabelecimento.

### Procedimentos:

Devido à localização geográfica da equipe de desenvolvimento do software, optou-se por conduzir os Testes Remotos Não Moderados de Usabilidade. Esta abordagem permite a realização de testes de usabilidade online, resultando na redução dos custos de implementação e na conveniência para os participantes, que podem realizá-los em seus próprios dispositivos, como smartphones, tablets e laptop sem a necessidade de deslocamento.

Quanto ao método de observação, ele é usado para avaliar a usabilidade da interface por meio da análise do comportamento dos usuários durante a interação. Neste projeto, iremos utilizar o método de observação por medição, que possibilitará a quantificação de diversos aspectos da interação, incluindo duração, ocorrência de erros, frequência de uso, entre outros por meio de câmeras, sensores e cronômetros, visando coletar dados objetivos e padronizados sobre a usabilidade da interface da aplicação.

### Tarefas a serem executadas:

#### Caso de Teste	CT-01 – Realização de pedido

Perfil:	Usuário Cliente

Objetivo do Teste:	Avaliar a inclusão, alteração e exclusão de pedidos pelo cliente

Ações Necessárias:
- Acessar principal;
- Clicar na opção "Cardápio";
- Realizar inclusão, alteração ou exclusão de pedido que já foram para posteriormente encaminha para a cozinha;
- Clicar em “Encaminhar".

#### Caso de Teste	CT-02 – Verificação do Status do pedido

Perfil:	Usuário Cliente

Objetivo do Teste:	Avaliar a informação de status do pedido

Ações Necessárias:
- Acessar principal;
- Clicar na opção "Pedido";
- Verificar o status do pedido.
  
#### Caso de Teste	CT-03 – Solicitação da conta

Perfil:	Usuário Cliente

Objetivo do Teste:	Avaliar a finalização do atendimento e solicitação da conta

Ações Necessárias:
- Acessar principal;
- Clicar na opção "Conta";
- Realizar solicitação da conta.
  
#### Caso de Teste	CT-04 – Cadastro de Funcionários

Perfil:	Usuário funcionário

Objetivo do Teste:	Avaliar a tela de cadastro de novo usuário

Ações Necessárias:
- Acessar principal;
- Clicar na opção “Login”;
- Clicar na opção "Cadastre-se";
- Preencher as informações solicitadas;
- Concordar com os termos e condições;
- Clicar em “Cadastrar".
  
#### Caso de Teste	CT-05 – Login de funcionário

Perfil:	Usuário funcionário

Objetivo do Teste:	Avaliar a usabilidade da tela de Login

Ações Necessárias:
- Acessar a tela home da aplicação;
- Clicar na opção “Login” no canto superior direito.
- Preencher as informações de login e senha;

#### Caso de Teste	CT-06 – Alteração de Cardápio e Preços

Perfil:	Usuário funcionário

Objetivo do Teste:	Avaliar a inclusão, alteração e exclusão de itens e preços do cardápio

Ações Necessárias:
- Acessar principal;
- Efetuar “Login”;
- Clicar na opção "Cardápio ";
- Realizar inclusão, alteração ou exclusão de itens;
- Clicar em “Finalizar".
  
#### Caso de Teste	CT-07 – Alteração de Pedidos Encaminhados para a Cozinha

Perfil:	Usuário funcionário

Objetivo do Teste:	Avaliar a inclusão, alteração e exclusão de pedidos já encaminhados para a cozinha

Ações Necessárias:
- Acessar principal;
- Clicar na opção pedido “Login”;
- Clicar na opção "Cardápio";
- Realizar inclusão, alteração ou exclusão de pedido que já foram encaminhados para a cozinha;
- Clicar em “Finalizar".

## Dados a Coletados:

Os dados importantes a serem coletados incluem:

Taxa de Sucesso: Mede a capacidade dos usuários em concluir tarefas específicas com êxito.

Tempo de Conclusão: Avalia quanto tempo os usuários levam para realizar determinadas tarefas na aplicação.

Taxa de Erro: Registra a quantidade e o tipo de erros cometidos pelos usuários durante a interação com a aplicação.

Satisfação do Usuário: Pode ser medida por meio de questionários pós-teste, escalas de avaliação ou entrevistas para obter feedback subjetivo dos participantes.

Facilidade de Aprendizado: Avalia o quão rapidamente os novos usuários conseguem aprender a usar a aplicação.

Eficiência: Mede o esforço e o número de etapas necessárias para realizar uma tarefa.

Memorização: Avalia a facilidade com que os usuários lembram como realizar tarefas após a primeira interação.

Frustração: Registra o nível de frustração ou dificuldade que os usuários enfrentam durante a interação.

Padrões de Navegação: Observa como os usuários navegam pela aplicação, quais caminhos eles escolhem e se seguem os fluxos esperados.

Comentários Verbais: Registra os comentários, dúvidas e observações feitas pelos participantes durante o teste.

Métricas de Desempenho: Avaliam o desempenho técnico da aplicação, incluindo tempos de carregamento, resposta a comandos e uso de recursos do sistema.

Métricas de Retenção: Verificam se os usuários retornam à aplicação após a primeira interação.

## Pré-requisitos:

Os pré-requisitos necessários para a aplicação do teste são:

•	Disponibilidade de acesso à rede de internet, wi-fi ou dados moveis;

•	Disponibilidade de aparelho eletrônico capaz de acessar o site da aplicação (celular, tablet ou computador).





> **Links Úteis**:
> - [Teste De Usabilidade: O Que É e Como Fazer Passo a Passo (neilpatel.com)](https://neilpatel.com/br/blog/teste-de-usabilidade/)
> - [Teste de usabilidade: tudo o que você precisa saber! | by Jon Vieira | Aela.io | Medium](https://medium.com/aela/teste-de-usabilidade-o-que-voc%C3%AA-precisa-saber-39a36343d9a6/)
> - [Planejando testes de usabilidade: o que (e o que não) fazer | iMasters](https://imasters.com.br/design-ux/planejando-testes-de-usabilidade-o-que-e-o-que-nao-fazer/)
> - [Ferramentas de Testes de Usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)
