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
}

const MONTHS_PT: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  marco: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

const parsePtDate = (s: string): number => {
  const match = s.match(/^(\d{1,2})\s+de\s+([^\s,]+),\s*(\d{4})$/i);
  if (!match) return 0;
  const [, day, monthName, year] = match;
  const month = MONTHS_PT[monthName.toLowerCase()];
  if (month === undefined) return 0;
  return new Date(Number(year), month, Number(day)).getTime();
};

const rawPosts: Post[] = [
  {
    id: '8',
    slug: 'solidao-solitude-solicitude',
    title:
      'Solidão e Solicitude: a diferença entre estar só e saber se relacionar na ótica da psicanálise',
    excerpt:
      'Nunca estivemos tão conectados e, ao mesmo tempo, tão sozinhos. Entre a solidão que machuca e a solitude que fortalece existe um terceiro caminho: a solicitude, a capacidade de olhar para o outro com cuidado e responsabilidade afetiva.',
    content: `
      <p>Vivemos em uma época marcada por profundas contradições. Nunca estivemos tão conectados por meio das redes sociais e das tecnologias de comunicação, mas, ao mesmo tempo, nunca ouvimos tantos relatos de pessoas que se sentem profundamente sozinhas. A solidão tornou-se um dos grandes desafios emocionais da sociedade contemporânea. Entretanto, existe uma diferença importante entre solidão e solicitude, e compreendê-la pode transformar a maneira como enxergamos nossos relacionamentos e nossa própria saúde emocional.</p>

      <p>Na perspectiva da psicanálise, a solidão não é apenas a ausência de pessoas ao nosso redor. Muitas vezes, alguém pode estar cercado por familiares, amigos ou colegas de trabalho e, ainda assim, experimentar um intenso vazio interior. Isso acontece porque a verdadeira solidão nasce quando o sujeito não consegue estabelecer vínculos afetivos seguros consigo mesmo e com o outro.</p>

      <p>Desde os primeiros anos de vida, nossa forma de nos relacionarmos é construída a partir das experiências vividas com aqueles que cuidam de nós. Quando a criança encontra acolhimento, proteção, escuta e afeto, desenvolve gradualmente a capacidade de confiar nas pessoas e em si mesma. Porém, quando essas experiências são marcadas por abandono, rejeição, negligência ou críticas constantes, podem surgir feridas emocionais profundas que acompanham o indivíduo durante toda a vida.</p>

      <p>É justamente nesse ponto que a psicanálise compreende a solidão como uma experiência psíquica. Muitas pessoas não têm medo de ficar sozinhas fisicamente; elas têm medo do encontro consigo mesmas. Quando o silêncio chega, surgem lembranças dolorosas, inseguranças, culpas e conflitos que permaneceram reprimidos durante anos. Por isso, algumas pessoas vivem constantemente ocupadas, cercadas por distrações ou buscando relacionamentos sucessivos. Não porque precisem do outro, mas porque desejam fugir da própria dor.</p>

      <p>Entretanto, existe outro caminho possível: o da solicitude.</p>

      <figure class="my-12">
        <img src="/blog/solidao-solitude-solicitude.jpg" alt="Mão pousada com delicadeza sobre o braço de outra pessoa, em luz dourada e acolhedora" class="rounded-3xl w-full" />
      </figure>

      <p>Solicitude é a capacidade de olhar para o outro com cuidado, respeito e responsabilidade afetiva. Antes de ser um comportamento externo, ela representa uma postura interior. Uma pessoa solícita não apenas oferece ajuda quando necessário, mas reconhece a existência do outro como alguém digno de atenção e acolhimento.</p>

      <p>Curiosamente, a solicitude só é plenamente possível quando aprendemos a desenvolver uma relação saudável conosco mesmos. Quem vive em permanente guerra interior dificilmente consegue oferecer paz aos outros. Quem nunca experimentou acolhimento emocional encontra enorme dificuldade em acolher.</p>

      <p>A clínica psicanalítica frequentemente revela esse fenômeno. Muitos pacientes chegam dizendo sentir-se abandonados, mas, ao longo do processo terapêutico, descobrem que também abandonam a si mesmos. Ignoram seus sentimentos, desrespeitam seus limites, anulam seus desejos e vivem exclusivamente para atender às expectativas alheias. Nesses casos, a solidão não nasce apenas da falta de companhia, mas da ausência de uma relação verdadeira consigo mesmo.</p>

      <p>Freud demonstrou que boa parte dos nossos conflitos permanece inconsciente. Aquilo que não elaboramos continua influenciando nossos pensamentos, emoções e comportamentos. Assim, experiências antigas de abandono podem fazer com que um adulto interprete pequenos afastamentos como rejeições definitivas. Uma demora em responder uma mensagem, por exemplo, pode despertar angústias muito maiores do que a situação realmente justificaria.</p>

      <p>É nesse contexto que a solicitude adquire um papel terapêutico. Quando uma pessoa encontra relações marcadas por respeito, escuta e empatia, ela começa lentamente a reconstruir sua capacidade de confiar. A experiência emocional corretiva oferecida por vínculos saudáveis ajuda o psiquismo a reorganizar antigos padrões de sofrimento.</p>

      <p>No consultório, o próprio vínculo entre terapeuta e paciente representa um exercício de solicitude. O analista escuta sem julgamentos precipitados, oferece um espaço seguro para a livre expressão e auxilia o paciente a compreender os significados ocultos de seus conflitos. Essa escuta cuidadosa favorece a integração daquilo que antes permanecia fragmentado.</p>

      <p>Mas a solicitude não deve existir apenas dentro da terapia. Ela precisa alcançar os relacionamentos familiares, conjugais, profissionais e sociais. Demonstrar interesse genuíno, ouvir antes de responder, respeitar os limites do outro, reconhecer suas dores e evitar julgamentos precipitados são atitudes que fortalecem vínculos e diminuem o sentimento de isolamento emocional.</p>

      <p>É importante destacar que aprender a ficar sozinho também faz parte do amadurecimento psicológico. Existe uma grande diferença entre solidão e solitude. A solidão costuma ser marcada pelo sofrimento decorrente da sensação de abandono. A solitude, por outro lado, representa a capacidade saudável de desfrutar da própria companhia. Quem desenvolve essa habilidade não depende da presença constante de outras pessoas para sentir-se completo.</p>

      <p>A psicanálise busca justamente conduzir o indivíduo a essa maturidade emocional. Ao compreender sua própria história, reconhecer seus conflitos inconscientes e elaborar suas dores, a pessoa deixa de buscar desesperadamente nos outros aquilo que precisa construir dentro de si.</p>

      <p>Quando isso acontece, a solicitude deixa de ser um esforço e torna-se uma consequência natural. Quem aprende a cuidar de si passa a cuidar melhor dos outros. Quem encontra paz interior oferece relações mais saudáveis. Quem supera o medo do abandono já não vive aprisionado pela necessidade constante de aprovação.</p>

      <p>Vivemos em uma sociedade que valoriza a aparência das relações, mas nem sempre sua profundidade. Ter centenas de contatos nas redes sociais não significa possuir vínculos verdadeiros. A psicanálise nos lembra que a qualidade das relações importa muito mais do que sua quantidade.</p>

      <p>Talvez o maior desafio da vida emocional seja justamente este: transformar a solidão que machuca em solitude que fortalece e, dessa experiência, desenvolver uma solicitude genuína para com aqueles que caminham ao nosso lado.</p>

      <p>Quando aprendemos a escutar nossa própria história sem medo, tornamo-nos capazes de escutar também a história do outro. E é nesse encontro entre autoconhecimento e cuidado que nascem os relacionamentos mais saudáveis, mais maduros e verdadeiramente humanos.</p>
    `,
    category: 'Relacionamentos',
    date: '21 de Julho, 2026',
    readTime: '6 min de leitura',
    image: '/blog/solidao-solitude-hero.jpg',
  },
  {
    id: '7',
    slug: 'solidao-pastoral-peso-invisivel',
    title: 'A Solidão Pastoral: O Peso Invisível dos Que Cuidam de Todos',
    excerpt:
      'Por trás dos púlpitos e das mensagens que confortam multidões, existe uma realidade pouco discutida: a solidão de quem cuida de todos, mas raramente encontra com quem dividir o próprio peso.',
    content: `
      <p>Por trás dos púlpitos, das mensagens inspiradoras e dos sorrisos que confortam multidões, existe uma realidade pouco discutida dentro das igrejas: a solidão pastoral. Muitos líderes religiosos carregam uma carga emocional extremamente pesada, enfrentando desafios psicológicos, espirituais e físicos que raramente são compartilhados com alguém. Enquanto cuidam das dores dos outros, frequentemente negligenciam as próprias feridas.</p>

      <p>A imagem popular do pastor é a de alguém forte, inabalável e sempre preparado para oferecer respostas. Entretanto, a realidade é que pastores são seres humanos. Sentem medo, tristeza, ansiedade, insegurança e cansaço como qualquer outra pessoa. A diferença é que, muitas vezes, acreditam que não podem demonstrar essas emoções por receio de serem vistos como fracos ou despreparados para o ministério.</p>

      <p>A solidão pastoral não acontece apenas porque o líder está fisicamente sozinho. Ela surge principalmente quando ele sente que não possui um ambiente seguro para expressar suas fragilidades. Em muitos casos, o pastor se torna o conselheiro de todos, mas não encontra ninguém em quem possa confiar plenamente para compartilhar suas próprias lutas.</p>

      <p>A pressão ministerial é constante. Além da responsabilidade espiritual de conduzir uma igreja, existe a preocupação com a administração financeira, os conflitos internos, a assistência às famílias, o acompanhamento de enfermos, a preparação de sermões, a organização de eventos e o cuidado com a expansão do trabalho ministerial. Essas demandas podem se tornar esmagadoras.</p>

      <p>Muitos líderes vivem sob a expectativa de serem exemplos perfeitos. Espera-se que tenham um casamento perfeito, filhos exemplares, fé inabalável e comportamento irrepreensível. Qualquer erro pode ser amplamente criticado e interpretado como falha espiritual. Essa cobrança excessiva produz um estado permanente de vigilância emocional.</p>

      <p>Quando uma pessoa vive constantemente sob pressão, seu organismo responde produzindo níveis elevados de hormônios relacionados ao estresse. Com o passar do tempo, essa condição pode desencadear diversos sintomas físicos e emocionais. A ansiedade passa a fazer parte da rotina, mesmo quando não é reconhecida ou admitida.</p>

      <p>A ansiedade pastoral costuma apresentar características específicas. O líder frequentemente se preocupa excessivamente com o futuro da igreja, com as necessidades dos membros e com situações que estão além de seu controle. O pensamento permanece acelerado durante o dia e, muitas vezes, durante a noite.</p>

      <p>O sono começa a ser afetado. Muitos pastores relatam dificuldade para adormecer, despertares frequentes durante a madrugada e sensação de cansaço ao acordar. A privação do sono compromete a capacidade de concentração, a memória, a tomada de decisões e a estabilidade emocional.</p>

      <p>Outro fator importante é o sentimento de responsabilidade excessiva. Alguns líderes acabam acreditando que precisam resolver todos os problemas da igreja. Carregam sobre si questões que deveriam ser compartilhadas com outros líderes, diáconos, presbíteros e membros da equipe ministerial.</p>

      <p>Essa sobrecarga emocional pode gerar sintomas psicossomáticos. A psicossomática estuda a influência das emoções sobre o corpo. Quando sentimentos de ansiedade, preocupação e estresse permanecem por longos períodos sem serem elaborados adequadamente, o organismo pode começar a manifestar sinais físicos.</p>

      <p>Entre os sintomas mais comuns estão dores de cabeça frequentes, tensão muscular, dores cervicais, problemas gastrointestinais, gastrite, refluxo, alterações intestinais, fadiga crônica, palpitações, pressão arterial elevada e baixa imunidade. Muitas vezes, exames médicos não identificam causas orgânicas proporcionais à intensidade dos sintomas.</p>

      <p>O corpo passa a falar aquilo que a alma não consegue expressar.</p>

      <figure class="my-12">
        <img src="/blog/solidao-pastoral-igreja.jpg" alt="Homem sentado sozinho em uma igreja vazia ao entardecer, banhado por luz dourada" class="rounded-3xl w-full" />
      </figure>

      <p>Além das manifestações físicas, também podem surgir sintomas emocionais como irritabilidade, desânimo, sensação de fracasso, dificuldade de concentração, perda de prazer em atividades antes apreciadas e sentimentos de inadequação.</p>

      <p>Infelizmente, ainda existe um preconceito significativo em alguns ambientes religiosos quando se fala sobre saúde mental. Alguns líderes evitam buscar ajuda psicológica ou psicanalítica por medo de julgamento ou por acreditarem que deveriam resolver tudo apenas através da oração.</p>

      <p>A fé é uma ferramenta poderosa de fortalecimento emocional e espiritual. Entretanto, ela não exclui a necessidade de cuidados humanos e profissionais. Assim como um pastor procura um médico quando sente dores físicas, também pode buscar auxílio especializado quando enfrenta sofrimento emocional.</p>

      <p>Ao longo das Escrituras encontramos exemplos de homens de Deus que passaram por momentos de profunda exaustão emocional. Elias desejou desistir após um período intenso de enfrentamentos. Jeremias expressou sua dor em diversos momentos. Davi registrou angústias profundas nos Salmos. Até mesmo Jesus buscava momentos de solitude e descanso para restaurar suas forças.</p>

      <p>Esses exemplos mostram que reconhecer limitações não é sinal de fraqueza, mas de humanidade.</p>

      <p>A cultura da perfeição tem adoecido muitos líderes. Quando um pastor acredita que não pode errar, cria uma pressão interna impossível de sustentar. A perfeição não é uma característica humana. O ministério não exige perfeição, mas dependência de Deus, maturidade e disposição para crescer continuamente.</p>

      <p>Outro aspecto frequentemente negligenciado é a importância das amizades saudáveis. Muitos líderes possuem inúmeros conhecidos, mas poucos amigos verdadeiros. A ausência de relacionamentos profundos contribui significativamente para o sentimento de isolamento.</p>

      <p>Todo pastor precisa de pessoas confiáveis com quem possa conversar sem medo de julgamentos. Precisa de espaços onde não seja visto apenas como líder, mas como ser humano. Precisa de apoio emocional, escuta acolhedora e relacionamentos autênticos.</p>

      <p>O cuidado com a saúde física também exerce papel fundamental na prevenção do adoecimento emocional. Alimentação equilibrada, atividade física regular, hidratação adequada e sono reparador contribuem diretamente para a estabilidade psicológica.</p>

      <p>A sonoterapia, por exemplo, tem demonstrado a importância de um sono contínuo e restaurador para o equilíbrio emocional. Durante o sono ocorrem processos essenciais de recuperação cerebral, consolidação da memória e regulação hormonal. A privação crônica do sono aumenta significativamente os níveis de ansiedade e estresse.</p>

      <p>Da mesma forma, momentos de lazer não devem ser vistos como perda de tempo. O descanso é uma necessidade humana e também um princípio bíblico. O próprio Deus estabeleceu ritmos de trabalho e descanso para preservar a saúde integral do ser humano.</p>

      <p>Pastores que ignoram continuamente suas necessidades emocionais correm o risco de desenvolver quadros mais graves, incluindo transtornos de ansiedade, síndrome de burnout e episódios depressivos. O esgotamento ministerial é uma realidade crescente em diversas partes do mundo.</p>

      <p>O burnout pastoral caracteriza-se por exaustão física e emocional intensa, sensação de incapacidade, perda de entusiasmo pelo ministério e redução significativa da energia para desempenhar atividades que antes eram realizadas com alegria.</p>

      <p>Muitas vezes, o líder continua exercendo suas funções mesmo estando profundamente adoecido. Por fora, mantém a aparência de normalidade. Por dentro, sente-se vazio, cansado e sem forças.</p>

      <p>Por isso, é fundamental desenvolver uma cultura de cuidado dentro das igrejas. Líderes também precisam ser cuidados. Pastores também precisam de apoio. Quem cuida de pessoas necessita igualmente ser cuidado.</p>

      <p>Igrejas saudáveis reconhecem que seus líderes não são máquinas espirituais. São homens e mulheres que possuem limites emocionais, físicos e psicológicos. Quando essa compreensão existe, cria-se um ambiente mais humano, acolhedor e equilibrado.</p>

      <p>O ministério pastoral é uma das missões mais nobres que existem. Entretanto, não deve ser exercido à custa da saúde mental, da família ou da qualidade de vida do líder. Deus não chamou seus servos para viverem exaustos, mas para servirem com equilíbrio, sabedoria e dependência da graça divina.</p>

      <p>A solidão pastoral é real. A ansiedade pastoral é real. Os sintomas psicossomáticos são reais. Mas também é real a possibilidade de encontrar apoio, cuidado, restauração e esperança.</p>

      <p>Nenhum pastor precisa carregar sozinho o peso do ministério. Buscar ajuda não diminui a fé. Compartilhar dores não reduz a autoridade espiritual. Reconhecer limites não enfraquece o chamado.</p>

      <p>Pelo contrário, líderes que cuidam da própria saúde emocional tornam-se mais preparados para cuidar das pessoas que Deus colocou sob sua responsabilidade.</p>

      <p>O pastor continua sendo um servo de Deus, mas também continua sendo humano. E é justamente nessa humanidade, reconhecida e acolhida, que nasce a possibilidade de uma liderança mais saudável, mais equilibrada e mais duradoura.</p>
    `,
    category: 'Saúde Emocional',
    date: '10 de Junho, 2026',
    readTime: '8 min de leitura',
    image: '/blog/solidao-pastoral-hero.jpg',
  },
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
  {
    id: '6',
    slug: 'estetica-visual-confianca-antes-da-palavra',
    title:
      'Por que a estética visual do seu consultório influencia antes mesmo da primeira palavra',
    excerpt:
      'Como o cérebro forma impressões em milissegundos e por que cuidar da identidade visual é o primeiro ato clínico de acolhimento.',
    content: `
    <p>Quando alguém entra no site do seu psicanalista, no Instagram da clínica ou recebe um cartão de visita, uma decisão silenciosa já está sendo tomada. Ela acontece antes que o pensamento racional entre em cena.</p>

    <p>A neurociência mostra que o cérebro humano processa estímulos visuais em milissegundos. Pesquisas indicam que conseguimos identificar o conteúdo de uma imagem complexa em menos de 150 milissegundos, muito antes de qualquer raciocínio consciente sobre o que estamos vendo. É o que Daniel Kahneman chamou de <strong>"Sistema 1"</strong>: uma resposta automática, rápida e emocional, que precede o pensamento deliberado.</p>

    <h2>O que isso significa na prática</h2>
    <p>Antes do paciente ler "psicanálise clínica" no seu site, o cérebro dele já formou uma impressão sobre você. Cores, tipografia, espaçamento, qualidade das imagens, organização da página. Tudo isso é interpretado como sinal de confiança, cuidado e profissionalismo. Ou o contrário.</p>

    <p>No contexto da saúde mental, isso ganha um peso ainda maior. Quem busca um psicanalista geralmente está em um momento de vulnerabilidade. O ambiente visual precisa transmitir, sem dizer uma palavra:</p>

    <ul>
      <li><strong>Segurança:</strong> esse é um lugar onde posso me abrir.</li>
      <li><strong>Profissionalismo:</strong> há rigor e seriedade no trabalho.</li>
      <li><strong>Acolhimento:</strong> não vou ser julgado aqui.</li>
    </ul>

    <blockquote>"O primeiro contato com quem chega não acontece nas palavras. Acontece nos olhos, em segundos."</blockquote>

    <h2>Estética visual não é vaidade, é comunicação</h2>
    <p>Existe uma ideia equivocada de que investir em design é algo "estético" no sentido superficial. Para um consultório, design é o primeiro ato clínico de cuidado com quem chega. É a forma como você diz "te recebo bem" antes mesmo do primeiro olá.</p>

    <p>Cores, por exemplo, não são neutras. Tons frios e equilibrados tendem a transmitir tranquilidade. Alto contraste e cores saturadas podem gerar alerta. Tipografias com bom espaçamento facilitam a leitura para quem já está com a mente cansada. Imagens reais criam identificação onde bancos de imagem genéricos criam distância.</p>

    <h2>A confiança começa antes da consulta</h2>
    <p>A relação terapêutica se constrói na escuta, no vínculo, no tempo. Mas o primeiro contato, aquele que decide se o paciente vai ou não marcar a sessão, acontece nos olhos, em segundos.</p>

    <p>Cuidar da identidade visual do consultório é, no fundo, estender o cuidado clínico para fora da sala. É garantir que a mensagem certa chegue antes mesmo das palavras.</p>

    <p><em>Se você está pensando em começar uma análise, te convido a conhecer um pouco mais sobre o trabalho aqui no consultório. </br><a href="/agendar">Agende sua consulta</a> e dê o primeiro passo.</em></p>
  `,
    category: 'Reflexão',
    date: '18 de Maio, 2026',
    readTime: '2 min de leitura',
    image:
      'https://images.unsplash.com/photo-1631832293782-2eda7804489b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mdCUyMG1vcm5pbmclMjBsaWdodCUyMHdpbmRvd3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

export const posts: Post[] = [...rawPosts].sort(
  (a, b) => parsePtDate(b.date) - parsePtDate(a.date),
);
