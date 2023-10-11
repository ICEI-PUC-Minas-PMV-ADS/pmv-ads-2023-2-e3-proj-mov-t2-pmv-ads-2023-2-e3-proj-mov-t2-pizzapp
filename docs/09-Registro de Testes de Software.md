# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

## Avaliação
[Plano de Teste.webm](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-pizzapp/assets/81201021/f65cf9da-e0ea-431b-bdcb-e11c6e7e22cc)

### screens/Admin/Menu.tsx
Este código gerencia um estado de nome (name) e uma lista de grupos (groups). Quando o usuário tenta adicionar um grupo, o código verifica se o nome não está vazio, cria um novo grupo e atualiza a lista. Além disso, ao montar o componente, ele carrega a lista inicial de grupos.
``` ts
const [name, setName] = useState<string>("");
  const [groups, setGroups] = useState<IGroups[]>([]);

  function handleAddGroup() {
    // Aqui faz a validação do nome vazio
    if (!name) {
      Alert.alert('Erro',"Nome do grupo não pode ser vazio");
      return;
    }
    // O Codigo abaixo faz a chamada da função de criar grupo passando o nome que o usario informou
    createGroup(name).then((response) => {
      // Assim que o grupo e criado ele popula a lista de grupos
      setGroups([...groups, response]);
      // Em seguida limpa o campo
      setName("");
    });
  }

  useEffect(() => {
  // Aqui faz a população dos grupos
    getGroups().then((response) => {
      console.log(response);
      // Assim que o grupo e criado ele popula a lista de grupos
      setGroups(response);
    });
  }, []);
```
### providers/groups.ts 
Ambas as funções utilizam o axios para realizar as requisições HTTP. O axios é uma biblioteca popular para fazer requisições HTTP em ambientes JavaScript/TypeScript. As funções são assíncronas, pois fazem uso de await para aguardar que as requisições HTTP sejam concluídas antes de prosseguir.
Em resumo, essas funções fornecem uma camada de abstração para interagir com um servidor JSON, facilitando a obtenção da lista de grupos existentes e a criação de novos grupos.

``` ts
import axios from "axios";
import { enviroments } from "../enviroments/index";
export interface IGroups {
  id: number;
  name: string;
}

// A função getGroups busca os grupos fazendo comunicação com o json serve
export async function getGroups(): Promise<IGroups[]> {
  const url = `${enviroments.baseUrl}/groups`;
  const groups = await axios.get(url).then((response) => {
    return response.data;
  });
  return groups;
}

// A função createGroups cria o grupo inserindo na db.json
export async function createGroup(name: string): Promise<IGroups> {
  const url = `${enviroments.baseUrl}/groups`;
  const group = await axios
    .post(url, { name })
    .then((response) => response.data);
  return group;
}
```

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
