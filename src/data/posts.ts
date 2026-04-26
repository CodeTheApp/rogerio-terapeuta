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
    id: '1',
    slug: 'o-silencio-que-habita-em-nos',
    title: 'O Silêncio que habita em nós: Encontrando pausa na era da pressa',
    excerpt:
      'Vivemos em um mundo que não dorme. Neste artigo, exploramos como o silêncio não é apenas ausência de som, mas um espaço de cura e reencontro com nossa essência mais profunda.',
    content: `
      <p class="mb-10 text-xl md:text-2xl italic leading-relaxed">
        "O mundo está excessivamente barulhento. Não apenas o som das ruas, mas o ruído constante das notificações, das expectativas alheias e da pressa que nos consome antes mesmo do café esfriar."
      </p>
      <p>Vivemos em uma cultura que glorifica a ocupação. Estar "muito ocupado" tornou-se um símbolo de status, uma prova de importância social. No entanto, nessa corrida desenfreada para preencher cada minuto com produtividade, perdemos a capacidade mais essencial do ser humano: a de simplesmente ser.</p>
      <h2>A Anatomia da Pressa</h2>
      <p>A pressa não é apenas um ritmo físico; é um estado mental. Ela atua como um véu que nos impede de perceber as nuances da nossa própria vida. Quando corremos, nossos olhos focam apenas na linha de chegada, ignorando as cores, os sentimentos e as pessoas que cruzam nosso caminho.</p>

      <blockquote>O silêncio não é a ausência de som, mas a presença de si mesmo.</blockquote>

      <p>Em minha prática clínica, vejo frequentemente como a ansiedade floresce nos espaços onde a pausa foi proibida. Corpos cansados que não sabem mais como descansar porque o silêncio tornou-se algo ameaçador. No silêncio, somos forçados a ouvir o que temos evitado.</p>

      <h2>Praticando a Pausa Sagrada</h2>
      <p>Encontrar o silêncio não requer uma viagem a um mosteiro remoto. Requer a coragem de estabelecer fronteiras digitais e mentais no cotidiano. É o minuto extra que você passa olhando para o céu antes de entrar no carro. É a respiração consciente entre uma reunião e outra.</p>

      <ul>
        <li><strong>O Despertar Analógico:</strong> Dedique os primeiros 20 minutos do dia a algo que não envolva telas. Escreva, alongue-se, ou apenas observe o café ser preparado.</li>
        <li><strong>Caminhadas de Escuta:</strong> Caminhe sem fones de ouvido. Permita que os sons do ambiente e os seus próprios pensamentos fluam sem interferência rítmica.</li>
      </ul>

      <p>O silêncio é o solo onde a cura acontece. É no vazio da pausa que as respostas mais honestas costumam surgir. Permita-se não ter pressa. O mundo pode esperar um pouco; a sua alma, talvez não possa mais.</p>
    `,
    category: 'Reflexão',
    date: '14 de Outubro, 2024',
    readTime: '8 min de leitura',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQdor-N8-gKRTvBMNAw_i09WI37YsN6NHxtBKvizA4fqhh_5rXXCa6xhnU3a1yxu5jr9xBt6ijjIQLt95BtgViZJDCvr1prCeaNl9OaYpl12k7kL6Euep89x-mVS3qli1TBxy4IY1hoyunMjpKI-THpN4H277O3XlKLCjcWFwevyTPBCBym7Bws3e9O9gJaYxykGqZdy7VDwbWvYKEnflKcFqnH-6EkyU7u_px5U-_YB9E5V8m2okr2ainTao4gyMMcrBwv9CJTVk',
    featured: true,
  },
  {
    id: '2',
    slug: 'as-mascaras-que-usamos',
    title: 'As máscaras que usamos: A jornada da autenticidade',
    excerpt:
      'Por que sentimos a necessidade de esconder nossa vulnerabilidade? Um olhar clínico sobre a coragem de ser quem somos.',
    content: `
      <p>A autenticidade é um dos maiores desafios da vida moderna. Vivemos em uma era de vitrines digitais, onde a perfeição é a moeda de troca e a vulnerabilidade é frequentemente vista como fraqueza.</p>

      <h2>O Peso das Máscaras</h2>
      <p>Desde cedo, aprendemos a moldar nosso comportamento para sermos aceitos. Criamos máscaras para o trabalho, para a família e até para nossos relacionamentos mais íntimos. O problema surge quando a máscara se torna tão pesada que esquecemos o rosto que está por baixo dela.</p>

      <blockquote>"A vulnerabilidade não é o oposto de força, é a medida mais precisa da nossa coragem."</blockquote>

      <h2>A Coragem de Ser Imperfeito</h2>
      <p>O processo terapêutico muitas vezes começa com a retirada lenta dessas camadas. É um processo doloroso, mas profundamente libertador. Ao aceitarmos nossas imperfeições, abrimos espaço para conexões reais e significativas.</p>

      <p>Ser autêntico não significa não ter medos, mas sim não permitir que o medo de não ser "o suficiente" dite nossas escolhas.</p>
    `,
    category: 'Autoconhecimento',
    date: '12 de Outubro, 2024',
    readTime: '5 min de leitura',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHuLCRkpTDKOnIyXi5lBAAb9sD8xVnlS4L1kWPa8A6raccBkHlIE2jXQxFwUQTBCgBovRWlIpAa0JjTFfgTd8aE-fpY3HU1stAXCjGOYdQ3zwh4QUcCD51uIfXzIadn9gUn25YFcoVhQrRoeHoyBOCwqJFtyYzIWEm-xxzH2j5qOiofZnky3byt2V7MiEp_wg5xcUIqn3g3VRS3sdJNBEoDIY2zE7OL2B_iwN1RHYjPwrbiJ4n7bqx40iedKno0-u8CudwUcWtooA',
  },
  {
    id: '3',
    slug: 'limites-ato-de-amor',
    title: 'Limites: O ato mais profundo de amor ao próximo',
    excerpt:
      'Dizer não é, muitas vezes, a única forma de preservar a saúde de um vínculo. Aprenda a estabelecer fronteiras saudáveis.',
    content: `
      <p>Muitas pessoas confundem limites com egoísmo ou falta de afeto. Na realidade, estabelecer limites é a forma mais honesta de manter um relacionamento saudável e duradouro.</p>

      <h2>Por que temos medo de dizer não?</h2>
      <p>O medo da rejeição ou de causar decepção muitas vezes nos leva a dizer "sim" quando todo o nosso ser grita "não". Esse comportamento gera ressentimento e esgotamento emocional.</p>

      <h2>Fronteiras que Protegem</h2>
      <p>Um limite não é um muro, é uma porta. Ele define onde eu termino e onde o outro começa. Sem essa distinção, a empatia se transforma em fusão, e a ajuda se transforma em sacrifício desnecessário.</p>

      <p>Aprender a dizer "não" com gentileza e firmeza é um exercício de autocompaixão que beneficia a todos ao seu redor.</p>
    `,
    category: 'Relacionamentos',
    date: '08 de Outubro, 2024',
    readTime: '4 min de leitura',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGA3ZnztmiMw_FYLBC1wlDbIAMHGomDMFeiMk_Ebmf9RsEDYw1J1AschdQVx-iQBlkbfuqGpK7lF6SGK5IhAigsJW79dOhsa9mgxt0sQ5grGKRDiWyU-EDskLip2ovonyl-gQwncPm_guPErHfzBjD8MGTrDTzPfOqenIwZsNNahCXCwukDqCMIQO9M0E2ymDERPbmuwS3-CHTFp_YOlGH70ICcmx8fB9yd9xLSlnUKbt9VFtmU2Cik82UFjTMXOtNPd0mFmjw7xE',
  },
  {
    id: '4',
    slug: 'navegando-em-mares-agitados',
    title: 'Navegando em mares agitados: Lidando com a incerteza',
    excerpt:
      'Técnicas de presença plena para momentos onde o futuro parece um fardo pesado demais para carregar.',
    content: `
      <p>A incerteza é uma das experiências mais desafiadoras para o ser humano. Nosso cérebro é programado para buscar previsibilidade, e quando o futuro se torna nebuloso, a ansiedade se instala como uma tempestade interior.</p>

      <h2>O Medo do Desconhecido</h2>
      <p>Vivemos em uma época onde a ilusão de controle foi amplificada pela tecnologia. Podemos prever o clima, rastrear encomendas, monitorar nossa saúde em tempo real. Quando algo escapa ao nosso controle, a sensação de vulnerabilidade é avassaladora.</p>

      <blockquote>"Não é a incerteza que nos faz sofrer, mas a nossa resistência a ela."</blockquote>

      <h2>A Arte de Navegar sem Mapa</h2>
      <p>A presença plena nos ensina que o único momento real é este. O futuro é uma construção mental, e o passado uma memória editada. Quando ancoramos nossa atenção no agora, a incerteza perde seu poder paralisante.</p>

      <p>Pratique a respiração consciente. Sinta seus pés no chão. Observe o que está ao seu redor sem julgamento. Neste instante, você está seguro. E isso basta.</p>
    `,
    category: 'Ansiedade',
    date: '01 de Outubro, 2024',
    readTime: '7 min de leitura',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdNNOKPne4XYRDLgqjM8nPvgSliNDL0a4QO_76CjO5Gd5KiFiXwwK6d2TfL5ltN1iqNPl3juBa7KUMx7Aua5fw1DBm6-wtWQybcIPRU2wcQXaDnBHwnqTRGADKxkSyXpalaQhEfR4kpcgOVg5bQM5ZdGCrHsL7mfQ3xoECP_TWd8n5rfm5cgnAZMAfI2jwRK2viHJnP2pkuQPjn0eUL1OVdZYF6bCBjTN5JmjLMF2Sydy6JetgWpnw9d4seED2ULSJqIjyBzbu8q8',
  },
  {
    id: '5',
    slug: 'o-desabrochar-da-dor',
    title: 'O desabrochar da dor: Como a adversidade nos molda',
    excerpt:
      'Reflexões sobre o crescimento pós-traumático e a beleza que reside na reconstrução da alma.',
    content: `
      <p>A dor é uma das experiências mais universais e, paradoxalmente, mais solitárias da existência humana. Cada um de nós carrega feridas que moldaram quem somos — algumas visíveis, outras profundamente enterradas sob camadas de proteção.</p>

      <h2>A Ferida como Portal</h2>
      <p>Na psicologia, falamos sobre crescimento pós-traumático: a capacidade humana de não apenas sobreviver à adversidade, mas de emergir dela transformado. Não se trata de romantizar o sofrimento, mas de reconhecer a força que reside na reconstrução.</p>

      <blockquote>"A cicatriz não é um sinal de fraqueza. É a prova de que você foi mais forte do que aquilo que tentou te destruir."</blockquote>

      <h2>Reconstruindo com Ouro</h2>
      <p>A arte japonesa do Kintsugi repara cerâmicas quebradas com ouro, celebrando as rachaduras em vez de escondê-las. Da mesma forma, nossas experiências dolorosas podem se tornar as partes mais luminosas da nossa história.</p>

      <p>O caminho da cura não é linear. Há dias de avanço e dias de retrocesso. Mas cada passo, mesmo o mais hesitante, é um ato de coragem que merece ser honrado.</p>
    `,
    category: 'Resiliência',
    date: '25 de Setembro, 2024',
    readTime: '9 min de leitura',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDk_nC8JUgmpZuCduKdqiHBzZbV6c2ibqF6eiP5bX2V5VN9BQq7B6jp5rCo6J8FmPEvvvmk9QFSl7rzLnTxAcWQsRriUiAMwZjq0d0DiYiJ_d9H4ncT6__aiKvLnI7mS3vN3Xi8wXWjkbpZUNRyZp1lmWilh54JO8gRSu8FspQfbceikd01VifpdcVlw6ZY4jFbvr0uJSdBCoDiC5X_1aMhSOQxYl9a5LiSnMHjDLiczu1fxDdOfKezPh47eVWh8VoffVtjmDh5hHc',
  },
];
