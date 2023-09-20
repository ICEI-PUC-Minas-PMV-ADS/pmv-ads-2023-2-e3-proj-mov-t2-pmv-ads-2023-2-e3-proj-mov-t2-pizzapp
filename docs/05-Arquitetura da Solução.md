# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![265857599-62aed18a-2deb-4103-8f33-0b76cbc2d681](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-pizzapp/assets/111783703/15302bf2-e654-4786-b7ba-247bd796cb07)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

  ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-pizzapp/assets/81201021/2c85e6fd-c7e5-4e7a-8cf8-0489ef116865)


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

-- Criação do banco de dados --
> CREATE DATABASE pizzaria;

 -- Criação da tabela 'clientes' --
> CREATE TABLE clientes (
>    cliente_id INT PRIMARY KEY AUTO_INCREMENT,
>    nome VARCHAR(100),
>     mesa INT
>);

-- Criação da tabela 'menu_pizzas' --
> CREATE TABLE menu_pizzas (
>    pizza_id INT PRIMARY KEY AUTO_INCREMENT,
>    nome VARCHAR(100),
>    preco DECIMAL(10, 2)
> );

 -- Criação da tabela 'pedidos' --
> CREATE TABLE pedidos (
>    pedido_id INT PRIMARY KEY AUTO_INCREMENT,
>    cliente_id INT,
>    status ENUM('pendente', 'em_preparo', 'pronto'),
>    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
>    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
> );

 -- Criação da tabela 'itens_pedido' --
> CREATE TABLE itens_pedido (
>    item_id INT PRIMARY KEY AUTO_INCREMENT,
>    pedido_id INT,
>    pizza_id INT,
>    quantidade INT,
>    FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
>    FOREIGN KEY (pizza_id) REFERENCES menu_pizzas(pizza_id)
> );

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Nosso aplicativo não necessitará de hospedagem, pois será executado localmente.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

**O modelo de qualidade**

Qualidade consiste no cumprimento dos requisitos funcionais e não funcionais de um projeto, dentro do prazo e orçamento estipulado. Trata-se de uma característica que indica o quão bem a realização de um projeto atinge os objetivos estipulados por ele. 
Para que a qualidade seja atingida é necessário que se estabeleça um modelo que determine como ela será verificada e indicadores por meio dos quais ela será atestada. O modelo estabelece o que será entendido como qualidade, isto é, como cumprimento dos objetivos, e os indicadores medirão quão bem esses objetivos são cumpridos. Há um laço entre o modelo de qualidade, seus indicadores e os elementos resultantes do projeto, portanto.  
Contudo, enquanto o prazo e orçamento possuem valores ou datas que não podem ser ultrapassados e que, em função disso, servem como métricas claras de qualidade, outros aspectos do projeto não estabelecem automaticamente suas métricas. Assim, é preciso elaborá-las a partir de um modelo de qualidade. Existem diferentes modelos desse tipo, no entanto, para os fins deste projeto, adotaremos a norma técnica ISO/IEC 25010 (uma atualização da ISO/IEC 9126) e usaremos alguns de seus indicadores para avaliar se os requisitos do Pizzap foram bem cumpridos ou não na entrega do aplicativo.
Serão identificadas a partir de métricas que, de um lado, medirão a eficiência do software em cumprir o que foi estipulado, de outro, medirão a lucratividade do negócio em função de suas metas comerciais. Elas serão derivadas diretamente da ISO/IEC 25010 e relacionadas com os requisitos (funcionais e não funcionais) do projeto e seus objetivos como negócio. 

  **Métricas de qualidade**

Dentro da ISO serão utilizadas características atinentes à Funcionalidade e Usabilidade. 
No que diz respeito à Funcionalidade do software, duas subcaracterísticas serão priorizadas: Acurácia e Segurança de Acesso. A primeira indica o quanto as funcionalidades desenvolvidas cumprem os objetivos estipulados no projeto, algo que, nesse caso, aplica-se especificamente ao funcionamento “mecânico” do aplicativo; não propriamente a sua capacidade de produzir um negócio de sucesso. A Acurácia será aqui tomada como uma medida qualitativa, que será considerada satisfatória se os requisitos implementados funcionarem tal como foram planejados. Para indicá-la será elaborada uma Tabela de Testes de Tempo, que conterá quatro indicadores (Tempo oscilação de desempenho, Média de tempo de visualização de item, Tempo que o pedido leva para chegar à cozinha, Tempo levado pela alteração de status de pedidos) que servirão para medir se as funções do aplicativo funcionarão dentro de um intervalo de tempo aceitável. Caso qualquer um desses indicadores mostre um valor muito alto (superior a dez segundos), será preciso refazer a função de modo a atingir essa eficiência, do contrário, a acurácia será considerada satisfatória. A segunda subcaracterística, Segurança de Acesso, indica se o sistema está protegido de acessos externos indesejados. Ela é crucial para garantir que o aplicativo seja acessado apenas por usuários específicos (os funcionários da cozinha e os clientes nas mesas), entretanto, ela não pode ser convertida em número. Por isso, a Segurança de Acesso será medida qualitativamente, como existindo ou não de acordo com os dispositivos implementados para garantir o acesso limitado de usuários.
No que diz respeito à Usabilidade, a subcaracterística a ser priorizada será o Comportamento em relação ao tempo. Ela indica o tempo de resposta das funções do aplicativo, algo que será mensurado por meio da Tabela de Testes de Tempo, que estipula até dez segundos como um tempo aceitável como tempo de resposta das funções. A partir dos dados coletados, consequentemente, será possível perceber quais funções tem demandado mais tempo do aplicativo e quais delas será possível melhorar, buscando diminuir tanto quanto possível o tempo de resposta.
Por fim, uma segunda tabela servirá para mensurar o sucesso financeiro do restaurante a partir de suas vendas, a Tabela de Vendas por Dia da Semana. Nela serão colocados dois indicadores: Média de Clientes Atendidos por Dia, Itens mais pedidos por dia. O primeiro visa identificar a quantidade de clientes, mensurando o público frequentador; o segundo mensura os itens mais pedidos do cardápio, contribuindo para as estratégias de venda da empresa.

  **Julgamento das métricas de qualidade**

As métricas de qualidade (quanto à Funcionalidade do Software: Acurácia e Segurança de Acesso; quanto à Usabilidade: Comportamento em relação ao tempo; quanto ao sucesso financeiro: Média de Clientes Atendidos por Dia, Itens mais pedidos por dia) serão utilizadas para determinar se o aplicativo entregue cumpre os objetivos planejados.
Aquelas que constarão na Tabela de Testes de Tempo serão consideradas de três maneiras: se as funções gerarem respostas de mais de dez segundos, elas serão consideradas insatisfatórias; se gerarem respostas de até dez segundos, satisfatórias, se gerarem uma resposta de até três segundos serão consideradas muito satisfatórias.
Aquelas que constarão Tabela de Vendas por Dia da Semana terão métricas estipuladas pelo próprio restaurante, uma vez que elas variam de acordo com a lotação do mesmo e a quantidade de clientes que ele pode atender diariamente. Caso a média de clientes atendidos por dia seja inferior a um terço da lotação máxima do restaurante, o negócio a qualidade será considera insatisfatória, caso seja igual a um terço, será considerada satisfatória e, caso seja maior, muito satisfatória.

