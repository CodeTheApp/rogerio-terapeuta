export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "o-silencio-que-habita-em-nos",
    title: "O Silencio que Habita em Nos: Encontrando Pausa na Era da Pressa",
    excerpt:
      "Vivemos em um mundo que nao dorme. Neste artigo, exploramos como o silencio nao e apenas ausencia de som, mas um espaco de cura e reencontro com nossa essencia mais profunda.",
    content: `
      <p class="mb-10 text-xl md:text-2xl italic leading-relaxed">
        "O mundo esta excessivamente barulhento. Nao apenas o som das ruas, mas o ruido constante das notificacoes, das expectativas alheias e da pressa que nos consome antes mesmo do cafe esfriar."
      </p>
      <p>Vivemos em uma cultura que glorifica a ocupacao. Estar "muito ocupado" tornou-se um simbolo de status, uma prova de importancia social. No entanto, nessa corrida desenfreada para preencher cada minuto com produtividade, perdemos a capacidade mais essencial do ser humano: a de simplesmente ser.</p>
      <h2>A Anatomia da Pressa</h2>
      <p>A pressa nao e apenas um ritmo fisico; e um estado mental. Ela atua como um veu que nos impede de perceber as nuances da nossa propria vida. Quando corremos, nossos olhos focam apenas na linha de chegada, ignorando as cores, os sentimentos e as pessoas que cruzam nosso caminho.</p>

      <blockquote>O silencio nao e a ausencia de som, mas a presenca de si mesmo.</blockquote>

      <p>Em minha pratica clinica, vejo frequentemente como a ansiedade floresce nos espacos onde a pausa foi proibida. Corpos cansados que nao sabem mais como descansar porque o silencio tornou-se algo ameacador. No silencio, somos forcados a ouvir o que temos evitado.</p>

      <h2>Praticando a Pausa Sagrada</h2>
      <p>Encontrar o silencio nao requer uma viagem a um mosteiro remoto. Requer a coragem de estabelecer fronteiras digitais e mentais no cotidiano. E o minuto extra que voce passa olhando para o ceu antes de entrar no carro. E a respiracao consciente entre uma reuniao e outra.</p>

      <ul>
        <li><strong>O Despertar Analogico:</strong> Dedique os primeiros 20 minutos do dia a algo que nao envolva telas. Escreva, alongue-se, ou apenas observe o cafe ser preparado.</li>
        <li><strong>Caminhadas de Escuta:</strong> Caminhe sem fones de ouvido. Permita que os sons do ambiente e os seus proprios pensamentos fluam sem interferencia ritmica.</li>
      </ul>

      <p>O silencio e o solo onde a cura acontece. E no vazio da pausa que as respostas mais honestas costumam surgir. Permita-se nao ter pressa. O mundo pode esperar um pouco; a sua alma, talvez nao possa mais.</p>
    `,
    category: "Reflexao",
    date: "14 de Outubro, 2024",
    readTime: "8 min de leitura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQdor-N8-gKRTvBMNAw_i09WI37YsN6NHxtBKvizA4fqhh_5rXXCa6xhnU3a1yxu5jr9xBt6ijjIQLt95BtgViZJDCvr1prCeaNl9OaYpl12k7kL6Euep89x-mVS3qli1TBxy4IY1hoyunMjpKI-THpN4H277O3XlKLCjcWFwevyTPBCBym7Bws3e9O9gJaYxykGqZdy7VDwbWvYKEnflKcFqnH-6EkyU7u_px5U-_YB9E5V8m2okr2ainTao4gyMMcrBwv9CJTVk",
    featured: true,
  },
  {
    id: "2",
    slug: "as-mascaras-que-usamos",
    title: "As Mascaras que Usamos: A Jornada da Autenticidade",
    excerpt:
      "Por que sentimos a necessidade de esconder nossa vulnerabilidade? Um olhar clinico sobre a coragem de ser quem somos.",
    content: `
      <p>A autenticidade e um dos maiores desafios da vida moderna. Vivemos em uma era de vitrines digitais, onde a perfeicao e a moeda de troca e a vulnerabilidade e frequentemente vista como fraqueza.</p>

      <h2>O Peso das Mascaras</h2>
      <p>Desde cedo, aprendemos a moldar nosso comportamento para sermos aceitos. Criamos mascaras para o trabalho, para a familia e ate para nossos relacionamentos mais intimos. O problema surge quando a mascara se torna tao pesada que esquecemos o rosto que esta por baixo dela.</p>

      <blockquote>"A vulnerabilidade nao e o oposto de forca, e a medida mais precisa da nossa coragem."</blockquote>

      <h2>A Coragem de Ser Imperfeito</h2>
      <p>O processo terapeutico muitas vezes comeca com a retirada lenta dessas camadas. E um processo doloroso, mas profundamente libertador. Ao aceitarmos nossas imperfeicoes, abrimos espaco para conexoes reais e significativas.</p>

      <p>Ser autentico nao significa nao ter medos, mas sim nao permitir que o medo de nao ser "o suficiente" dite nossas escolhas.</p>
    `,
    category: "Autoconhecimento",
    date: "12 Out, 2024",
    readTime: "5 min de leitura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHuLCRkpTDKOnIyXi5lBAAb9sD8xVnlS4L1kWPa8A6raccBkHlIE2jXQxFwUQTBCgBovRWlIpAa0JjTFfgTd8aE-fpY3HU1stAXCjGOYdQ3zwh4QUcCD51uIfXzIadn9gUn25YFcoVhQrRoeHoyBOCwqJFtyYzIWEm-xxzH2j5qOiofZnky3byt2V7MiEp_wg5xcUIqn3g3VRS3sdJNBEoDIY2zE7OL2B_iwN1RHYjPwrbiJ4n7bqx40iedKno0-u8CudwUcWtooA",
  },
  {
    id: "3",
    slug: "limites-ato-de-amor",
    title: "Limites: O Ato Mais Profundo de Amor ao Proximo",
    excerpt:
      "Dizer nao e, muitas vezes, a unica forma de preservar a saude de um vinculo. Aprenda a estabelecer fronteiras saudaveis.",
    content: `
      <p>Muitas pessoas confundem limites com egoismo ou falta de afeto. Na realidade, estabelecer limites e a forma mais honesta de manter um relacionamento saudavel e duradouro.</p>

      <h2>Por que temos medo de dizer nao?</h2>
      <p>O medo da rejeicao ou de causar decepcao muitas vezes nos leva a dizer "sim" quando todo o nosso ser grita "nao". Esse comportamento gera ressentimento e esgotamento emocional.</p>

      <h2>Fronteiras que Protegem</h2>
      <p>Um limite nao e um muro, e uma porta. Ele define onde eu termino e onde o outro comeca. Sem essa distincao, a empatia se transforma em fusao, e a ajuda se transforma em sacrificio desnecessario.</p>

      <p>Aprender a dizer "nao" com gentileza e firmeza e um exercicio de autocompaixao que beneficia a todos ao seu redor.</p>
    `,
    category: "Relacionamentos",
    date: "08 Out, 2024",
    readTime: "4 min de leitura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGA3ZnztmiMw_FYLBC1wlDbIAMHGomDMFeiMk_Ebmf9RsEDYw1J1AschdQVx-iQBlkbfuqGpK7lF6SGK5IhAigsJW79dOhsa9mgxt0sQ5grGKRDiWyU-EDskLip2ovonyl-gQwncPm_guPErHfzBjD8MGTrDTzPfOqenIwZsNNahCXCwukDqCMIQO9M0E2ymDERPbmuwS3-CHTFp_YOlGH70ICcmx8fB9yd9xLSlnUKbt9VFtmU2Cik82UFjTMXOtNPd0mFmjw7xE",
  },
  {
    id: "4",
    slug: "navegando-em-mares-agitados",
    title: "Navegando em Mares Agitados: Lidando com a Incerteza",
    excerpt:
      "Tecnicas de presenca plena para momentos onde o futuro parece um fardo pesado demais para carregar.",
    content: `
      <p>A incerteza e uma das experiencias mais desafiadoras para o ser humano. Nosso cerebro e programado para buscar previsibilidade, e quando o futuro se torna nebuloso, a ansiedade se instala como uma tempestade interior.</p>

      <h2>O Medo do Desconhecido</h2>
      <p>Vivemos em uma epoca onde a ilusao de controle foi amplificada pela tecnologia. Podemos prever o clima, rastrear encomendas, monitorar nossa saude em tempo real. Quando algo escapa ao nosso controle, a sensacao de vulnerabilidade e avassaladora.</p>

      <blockquote>"Nao e a incerteza que nos faz sofrer, mas a nossa resistencia a ela."</blockquote>

      <h2>A Arte de Navegar sem Mapa</h2>
      <p>A presenca plena nos ensina que o unico momento real e este. O futuro e uma construcao mental, e o passado uma memoria editada. Quando ancoramos nossa atencao no agora, a incerteza perde seu poder paralisante.</p>

      <p>Pratique a respiracao consciente. Sinta seus pes no chao. Observe o que esta ao seu redor sem julgamento. Neste instante, voce esta seguro. E isso basta.</p>
    `,
    category: "Ansiedade",
    date: "01 Out, 2024",
    readTime: "7 min de leitura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdNNOKPne4XYRDLgqjM8nPvgSliNDL0a4QO_76CjO5Gd5KiFiXwwK6d2TfL5ltN1iqNPl3juBa7KUMx7Aua5fw1DBm6-wtWQybcIPRU2wcQXaDnBHwnqTRGADKxkSyXpalaQhEfR4kpcgOVg5bQM5ZdGCrHsL7mfQ3xoECP_TWd8n5rfm5cgnAZMAfI2jwRK2viHJnP2pkuQPjn0eUL1OVdZYF6bCBjTN5JmjLMF2Sydy6JetgWpnw9d4seED2ULSJqIjyBzbu8q8",
  },
  {
    id: "5",
    slug: "o-desabrochar-da-dor",
    title: "O Desabrochar da Dor: Como a Adversidade nos Molda",
    excerpt:
      "Reflexoes sobre o crescimento pos-traumatico e a beleza que reside na reconstrucao da alma.",
    content: `
      <p>A dor e uma das experiencias mais universais e, paradoxalmente, mais solitarias da existencia humana. Cada um de nos carrega feridas que moldaram quem somos — algumas visiveis, outras profundamente enterradas sob camadas de protecao.</p>

      <h2>A Ferida como Portal</h2>
      <p>Na psicologia, falamos sobre crescimento pos-traumatico: a capacidade humana de nao apenas sobreviver a adversidade, mas de emergir dela transformado. Nao se trata de romantizar o sofrimento, mas de reconhecer a forca que reside na reconstrucao.</p>

      <blockquote>"A cicatriz nao e um sinal de fraqueza. E a prova de que voce foi mais forte do que aquilo que tentou te destruir."</blockquote>

      <h2>Reconstruindo com Ouro</h2>
      <p>A arte japonesa do Kintsugi repara ceramicas quebradas com ouro, celebrando as rachaduras em vez de esconde-las. Da mesma forma, nossas experiencias dolorosas podem se tornar as partes mais luminosas da nossa historia.</p>

      <p>O caminho da cura nao e linear. Ha dias de avanco e dias de retrocesso. Mas cada passo, mesmo o mais hesitante, e um ato de coragem que merece ser honrado.</p>
    `,
    category: "Resiliencia",
    date: "25 Set, 2024",
    readTime: "9 min de leitura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_nC8JUgmpZuCduKdqiHBzZbV6c2ibqF6eiP5bX2V5VN9BQq7B6jp5rCo6J8FmPEvvvmk9QFSl7rzLnTxAcWQsRriUiAMwZjq0d0DiYiJ_d9H4ncT6__aiKvLnI7mS3vN3Xi8wXWjkbpZUNRyZp1lmWilh54JO8gRSu8FspQfbceikd01VifpdcVlw6ZY4jFbvr0uJSdBCoDiC5X_1aMhSOQxYl9a5LiSnMHjDLiczu1fxDdOfKezPh47eVWh8VoffVtjmDh5hHc",
  },
];
