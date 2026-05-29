const fs = require('fs');

const newBlog = [
  {
    id: 1,
    eyebrow: "Bastidores",
    cat: "Bastidores · Criação",
    title: "Como nasceu o universo das Pigmentadoras?",
    excerpt: "Sinceramente, eu não lembro muito bem, mas mais ou menos há um ano e meio atrás. Por aí… minha memória é muito ruim. Eu amo videogame e meu gênero preferido é RPG e aventura. Fico sempre maravilhada com a construção de mundo de alguns jogos, como Dragon Age, Baldur’s Gate 3, Mass Effect, Cyberpunk 2077 e Horizon Zero Dawn. Inspirada por eles, comecei a construir o meu próprio universo. Na realidade, me despertou a vontade. A princípio, não havia os diferentes mundos (reinos) e sim um único reino, onde raças coexistiam, sob uma grande Árvore. Eu ainda não tinha pensado nas raças direito ou nesses biomas. Também tive a vontade de inventar bruxas que guardavam essa árvore e esse reino. Sempre gostei de bruxas e do misticismo que as cercam.",
    body: "<p>Sinceramente, eu não lembro muito bem, mas mais ou menos há um ano e meio atrás. Por aí… minha memória é muito ruim.</p><p>Eu amo videogame e meu gênero preferido é RPG e aventura. Fico sempre maravilhada com a construção de mundo de alguns jogos, como Dragon Age, Baldur’s Gate 3, Mass Effect, Cyberpunk 2077 e Horizon Zero Dawn. Inspirada por eles, comecei a construir o meu próprio universo. Na realidade, me despertou a vontade. A princípio, não havia os diferentes mundos (reinos) e sim um único reino, onde raças coexistiam, sob uma grande Árvore. Eu ainda não tinha pensado nas raças direito ou nesses biomas. Também tive a vontade de inventar bruxas que guardavam essa árvore e esse reino. Sempre gostei de bruxas e do misticismo que as cercam.</p><p>Mas, estava faltando algo, queria desenvolver uma história complexa, mas com um entendimento “fácil”, sabe?</p><p>Com isso, tempo depois, ainda quando estava terminando O Toque Letal do Corvo, comecei a assistir à série The Wheel of Time. Algo estalou dentro de mim, uma inspiração muito forte, e eu pensei: “PRONTO!”.</p><p>Alguns dias depois, eu sonhei com as minhas protagonistas.</p><p>Tudo começou com Tainá e Celestria: um casal improvável entre uma serva (uma bruxa dos reinos) e a sua Deusa. No início, eu não tinha exatamente uma história: a primeira cena que surgiu na minha mente foi Tainá caída, ferida no chão por um corte profundo que atravessava seu tórax. Uma criatura estava morta, ela havia conseguido completar sua missão, mas pensou que fosse perecer também. Foi então que Celestria apareceu, abrindo um véu dourado no ar.</p><p>A primeira coisa que se destacava nela era o olhar dourado. Ela se posicionou na frente de Tainá, com os raios de sol iluminando seus cabelos. O dourado estava presente em cada parte de seu ser. Ela se agachou e pegou Tainá no colo. Nesse momento, tramas douradas nasceram em seus braços, os filamentos correram pelos corpos de ambas até alcançarem o ferimento de Tainá, curando-a.</p><p>Tainá a abraçou, escondendo o rosto no pescoço de Celestria, e foi quando ela sentiu o cheiro de verão.</p><p>Eu ainda não tinha um plot, ou as Pigmentadoras, apenas a idea das bruxas, o reino e essa cena. Mas foi ali que a vontade de escrever uma romantasia surgiu, latejante. Por algum motivo, algo sempre me impedia — não sei ao certo o que era. Acho que era a insegurança de tomar a responsabilidade de criar muitas coisas.</p><p>Então comecei a desenvolver a história e, a partir das Pigmentadoras, os reinos se desenharam. Elas eram mais importantes do que o mundo que as permeava. Minha intenção era trazer mulheres completamente diferentes umas das outras, com passados e vivências únicas.</p><p>Agnes foi a primeira a nascer. Uma mulher de pele sáfira, implacável e com chifres. A princípio, ela teria um gigante martelo de fogo, já que os pincéis ainda não eram algo, e seria guardiã de um reino tomado por vulcões.</p>",
    featured: true
  },
  {
    id: 2,
    eyebrow: "Mundo",
    cat: "Mundo · Lore",
    title: "A Árvore Celestial e o eixo dos nove mundos",
    excerpt: "Como disse anteriormente, mesmo tendo a ideia do reino, foi através das Pigmentadoras que fui construindo cada um deles.",
    body: "<p>Como disse anteriormente, mesmo tendo a ideia do reino — que mais tarde se transformou em nove mundos ligados à Árvore Celestial —, foi através das Pigmentadoras que fui construindo cada um deles. Fui me baseando na necessidade e na personalidade de cada Pigmentadora. Queria deixá-los distintos entre si, para o leitor conseguir vislumbrar a riqueza do bioma de cada lugar e, de certa forma, quando os reinos fossem apresentados, ele conseguisse ver a semelhança entre os reinos e as Pigmentadoras.</p><p>Como por exemplo: Agnes é impaciente, intempestiva, leal e guerreira. Brasas Constantes é um lugar cheio de fogo. O magma se alastra sem pedir permissão, é imprevisível, e mortífero.</p>",
    featured: false
  },
  {
    id: 3,
    eyebrow: "Personagens",
    cat: "Personagens · Análise",
    title: "Tainá e Celestria: o amor como ato de coragem",
    excerpt: "Na minha perspectiva, Tainá amava Celestria antes mesmo de conhecê-la — ou, ao menos, amava a ideia que tinha dela.",
    body: "<p>Na minha perspectiva, Tainá amava Celestria antes mesmo de conhecê-la — ou, ao menos, amava a ideia que tinha dela. Muitas vezes, como autora, eu me apego às minhas personagens quando começo a desenhá-las em minha mente, e acho que Tainá deu um passo além e se apaixonou pela mulher de seus sonhos. Sua sorte foi que Celestria existia de verdade e, quando ela a encontrou pela primeira vez no salão da Deusa, Tainá apenas confirmou que já sabia, que sempre foi apaixonada por Celestria antes mesmo de conhecê-la.</p><p>Acredito que, para Celestria, foi um processo um pouco mais longo por causa de todas as suas amarras e do seu passado. Mas acho que o fato de ela sentir Tainá, a sua cor roxa e a devoção a ajudou a desatar todos esses nós. Acho que foi estarrecedor para Celestria sentir tudo isso, algo que a pegou totalmente desprevenida e ela gostou disso.</p><p>De certa forma, Tainá a desafia também, de uma maneira diferente de todas as outras Pigmentadoras. Tainá veio para sacudir o marasmo de seu poder como guardiã da Árvore e foi isso o que lhe chamou a atenção.</p><p>Na minha cabeça é assim: Tainá fell first, Celestria fell harder.</p><p>Tainá se apaixonou primeiro, mas Celestria se apaixonou com mais intensidade.</p>",
    featured: false
  },
  {
    id: 4,
    eyebrow: "Processo",
    cat: "Processo · Escrita",
    title: "O pincel de Tainá e a origem do sistema de magia",
    excerpt: "Foi através das cores que a magia surgiu. Queria que as habilidades das Pigmentadoras e dos seres fossem relacionadas a algo artístico.",
    body: "<p>Como sonhei com Celestria saindo pelo véu, tentei pensar em como as Pigmentadoras poderiam atravessar os véus dos reinos e se locomover mais rapidamente de um lugar para o outro — embora eu não quisesse que isso fosse algo disponível o tempo inteiro. Então, imaginei o pincel rasgando o ar e, conectada a éle, a cor e, consequentemente, a quantidade do receptáculo da cor de cada ser.</p><p>Foi através das cores que a magia surgiu. Queria que as habilidades das Pigmentadoras e dos seres fossem relacionadas a algo artístico. Como se cada uma fosse um artista, um pintor com o seu estilo de arte.</p><p>E as pigmentadoras têm seu próprio estilo de arte, isso é explícito no jeito em que elas se portam durante as batalhas.</p><p>Depois disso, vieram os elementos principais e os subelementos derivados deles. Tentei vincular as cores com todos esses elementos de maneira que fizesse sentido.</p><p>Entretanto, as cores de Celestria e Tainá deveriam ser diferentes: o dourado representando o celestial, e o roxo, o vazio. O tudo e a ausência de algo (o nada).</p>",
    featured: false
  },
  {
    id: 5,
    eyebrow: "Bastidores",
    cat: "Bastidores · As Pigmentadoras",
    title: "Como criei cada Pigmentadora e seu reino — Parte 1",
    excerpt: "O surgimento das Pigmentadoras partiu do momento em que desejei criar guardiãs para proteger a Grande Árvore. Eu queria construir um espaço matriarcal...",
    body: "<p>O surgimento das Pigmentadoras partiu do momento em que desejei criar guardiãs para proteger a Grande Árvore. Eu queria construir um espaço matriarcal e poderoso, onde mulheres defendem a coisa mais importante do universo do livro — que não é a Deusa Celestria, mas sim a Grande Árvore. Quando elas surgiram, os reinos começaram a se desenhar na minha cabeça. Eles ganharam formas e camadas de acordo com as características físicas, as personalidades e as cores das Pigmentadoras. Confesso que tive vontade de passar mais tempo neles, os mundos eram ricos, mas se fosse assim, teríamos no mínimo uns 9 volumes de livros.</p><p>Ao menos aqui, vocês podem ter um gostinho a mais de tudo o que foi pensado.</p><p>Foi assim que os reinos foram elaborados:</p><p>Agnes é impaciente, intempestiva, leal e guerreira. Brasas Constantes é um lugar cheio de fogo e vulcões implacáveis. O magma se alastra sem pedir permissão; é imprevisível e mortífero. Traços muito presentes na Pigmentadora Vermelha. Agnes é como Brasas Constantes ao carregar o fogo selvagem, a boemia e a letalidade de sua raça, mas diverge ao vencer a morte e a extinção. O fogo, afinal, a alimenta e a mata.</p><p>Nanima é calma, compreensível e cortês. Aqualina, embora não esteja no livro, é um local onde a ordem para a paz deve ser levada à risca, então a paciência e a calma precisam ser fatores essenciais para que essa ordem esteja sempre presente. Aqueles que não seguem são jogados ao caos das cavernas subaquáticas. Afinal, a água também pode ser revoltada e, quando isso acontece, é tão incontrolável quanto o fogo. Enquanto o reino escolheu a anestesia de uma “falsa” paz, Nanima optou por arriscar a viver e a experimentar a liberdade. Por isso, a dualidade entre Nanima e Agnes foi um relacionamento gostoso de ser explorado.</p><p>Vespera é disciplinada, rude, pode ser cruel quando quer, mas é extremamente leal. Acredito que, de todas as Pigmentadoras, Florivena é a que menos condiz com a personalidade de sua guardiã. O que, como autora, só me dei conta mais tarde. Acredito que Vespera tinha muita opinião em minhas ideias. Vespera vem de um mundo que já se exterminou e está em um “segundo” ciclo de vida. Eles precisam ser um povo resiliente, que se mistura entre o novo e o antigo. O moderno que já pereceu e o rudimentar que está florescendo. Querendo ou não, Vespera também é isso no mundo das Pigmentadoras: ela é a mais velha entre todas. Já não há mais flores ou ervas em sua galhada, apenas o arcabouço dela, assim como os prédios esquecidos em seu reino, que são usados como alicerce para os novos.</p><p>Pietra é rígida e não gosta de mudanças, mas é maternal. Pietra converge com Itaveah em sua solidez, estabilidade e aversão a mudanças, mas trocou o imutável pela vida multicultural na Cidade Celestial, transformando sua rigidez em um instinto protetor.</p>",
    featured: false
  },
  {
    id: 6,
    eyebrow: "Bastidores",
    cat: "Bastidores · As Pigmentadoras",
    title: "Como criei cada Pigmentadora e seu reino — Parte 2",
    excerpt: "Calindra é doce, perspicaz e calma. Ela tem um aspecto frio e etéreo, assim como todos os moradores que vivem na gélida Nevalis...",
    body: "<p>Calindra é doce, perspicaz e calma. Ela tem um aspecto frio e etéreo, assim como todos os moradores que vivem na gélida Nevalis, mas, da mesma forma que eles, ela é pulsing, embora dentro de uma calmaria absoluta.</p><p>Taaf é acolhedora e terna, diferente da vida que tivera em Mentálida, mas é colorida e vibrante como seu reino. Taaf converge com Mentálida por ser o ápice do misticismo. Mentálida é bela, mas cruel com as mulheres que vivem nela, com isso, Taaf tenta se tornar um símbolo de cura e liberdade contra um sistema projetado para quebrá-la.</p><p>Lyra não nasceu em seu reino, veio da Cidade Celestial, embora sua mãe fosse do reino de Nuvens Exaltadas. Mas, mesmo não tendo nascido lá, Lyra é leve como os moradores daquele lugar.</p><p>Lunara, assim como os Falcor, usa os restos mecânicos dos criadores para sustentar o equilíbrio do reino, usa seu poder em missões para proteger e salvar suas colegas, buscando a preservação da paz. Os Falcor se estruturam em uma sociedade que consideram perfeita e Lunara tenta buscar essa perfeição, já que é considerada imperfeita na sociedade que a criou. Embora evoluídos, o tipo de tecnologia estacionou exatamente onde os criadores deixaram os Falcor, diferente de Lunara, que teve a oportunidade de experimentar todas as tecnologias dos outros reinos.</p><p>Caligobris é um reino que domina as artes do oculto e flerta com a morte. Tenebra, mesmo tentando fugir disso, carrega essa essência dentro de si. No reino, os seres sobrevivem quase como amaldiçoados pela vida difícil, mas tentam ser resilientes dentro do que restou, onde não há espaço para a fraqueza. Tenebra personifica isso: ela sobreviveu à ruína de sua vida. Ela queria a paz da terra, mas foi moldada pela violência de um lugar que não tolera a inocência.</p>",
    featured: false
  },
  {
    id: 7,
    eyebrow: "Reflexões",
    cat: "Reflexões · Autoria",
    title: "O que esse livro tem de diferente dos outros",
    excerpt: "Foi, de longe, o livro que mais me “enlouqueceu”. Muitas tramas apresentadas, reinos distintos e mulheres diferentes umas das outras...",
    body: "<p>Foi, de longe, o livro que mais me “enlouqueceu”. Muitas tramas apresentadas, reinos distintos e mulheres diferentes umas das outras com suas próprias trajetórias, acertos e erros. A Escolhida da Deusa também foi o livro mais longo que já escrevi, talvez, por todas as ramificações que o universo se expandiu.</p><p>Queria criar um mundo complexo, mas de fácil entendimento e mesmo dentro desse “fácil entendimento”, foi difícil. São inúmeras nuances de cultura, biomas, personalidades e costumes. Tentar criar coisas distintas sem soar igual é, com certeza, extremamente difícil e também desafiador, porque há a possibilidade de se perder algumas vezes.</p><p>Quando estava escrevendo as cenas, principalmente nos reinos e nas batalhas, eu realmente vislumbrava tudo. As tramas de Tainá, a cor de Celestria, as habilidades das Pigmentadoras e os ambientes naturais de cada Reino.</p><p>Gostava de passar horas descrevendo os lugares, porque queria que os leitores se sentissem presentes ali. Claro que tive vontade de explorar mais cada pedacinho e ampliar as histórias das outras pigmentadoras, mas senti que, neste livro, não haveria espaço e que a trama principal deveria ser Celestria e Tainá. O mundo que as rondava era importante, mas não mais do que o amor entre elas.</p><p>Quem sabe, futuramente, mais enredos possam surgir, porque o universo criado em A Escolhida da Deusa me deu essa oportunidade. Existem, agora, 11 reinos, os últimos dois foram adicionados após a morte de Griara e a tentativa de desequilíbrio sempre vai existir. Inimigos poderosos também podem surgir e Tainá, embora poderosa com dois poderes primordiais, não teve a oportunidade de explorá-los. Certamente há coisas positivas e MUITO negativas de ser tão poderosa assim.</p><p>O gênero Romantasia sempre me encantou. Na realidade, eu sou o tipo de autora que gosta de flertar com quase todos os gêneros. Mas a história de Celestria e Tainá e esse amor tão diferente me arrebatou demais, algo que mexeu diretamente com o meu âmago.</p>",
    featured: false
  }
];

const newPigmentadoras = [
  {
    num: "01",
    name: "Taaf",
    realm: "Mentálida",
    power: "Magia Psíquica",
    color: "#d500f9",
    colorBg: "#2d004a",
    desc: "Pigmentadora Magenta. Uma guardiã amável que carrega um passado extremamente sofrido. Torna-se um alicerce essencial para a sobrevivência de Tainá nos nove reinos.",
    bio: "Taaf é acolhedora e terna, diferente da vida que tivera em Mentálida, mas é colorida e vibrante como seu reino. Taaf converge com Mentálida por ser o ápice do misticismo. Mentálida é bela, mas cruel com as mulheres que vivem nela, com isso, Taaf tenta se tornar um símbolo de cura e liberdade contra um sistema projetado para quebrá-la."
  },
  {
    num: "02",
    name: "Agnes",
    realm: "Brasas Constantes",
    power: "Fogo & Raio",
    color: "#ff3333",
    colorBg: "#330000",
    desc: "Pigmentadora Vermelha. Cortante, impaciente, mas extremamente leal. Atroz quando se trata de acabar com os inimigos. Apaixonada por Nanima.",
    bio: "Agnes é impaciente, intempestiva, leal e guerreira. Brasas Constantes é um lugar cheio de fogo e vulcões implacáveis. O magma se alastra sem pedir permissão; é imprevisível e mortífero. Traços muito presentes na Pigmentadora Vermelha. Agnes é como Brasas Constantes ao carregar o fogo selvagem, a boemia e a letalidade de sua raça, mas diverge ao vencer a morte e a extinção. O fogo, afinal, a alimenta e a mata."
  },
  {
    num: "03",
    name: "Nanima",
    realm: "Aqualina",
    power: "Água & Cura",
    color: "#00b0ff",
    colorBg: "#001833",
    desc: "Pigmentadora Azul. Abriu mão da realeza para servir Celestria. Calma e paciente. A maioria das Pigmentadoras acredita que ela é a mais forte dentre todas. Apaixonada por Agnes.",
    bio: "Nanima é calma, compreensível e cortês. Aqualina, embora não esteja no livro, é um local onde a ordem para a paz deve ser levada à risca, então a paciência e a calma precisam ser fatores essenciais para que essa ordem esteja sempre presente. Aqueles que não seguem são jogados ao caos das cavernas subaquáticas. Afinal, a água também pode ser revoltada e, quando isso acontece, é tão incontrolável quanto o fogo. Enquanto o reino escolheu a anestesia de uma “falsa” paz, Nanima optou por arriscar a viver e a experimentar a liberdade. Por isso, a dualidade entre Nanima e Agnes foi um relacionamento gostoso de ser explorado."
  },
  {
    num: "04",
    name: "Lunara",
    realm: "Luxanara",
    power: "Tempo & Luz",
    color: "#ffd600",
    colorBg: "#1a1400",
    desc: "Pigmentadora Amarela. Demorou anos para dominar sua cor. Vinda de uma família nobre e conservadora. É leve e afável.",
    bio: "Lunara, assim como os Falcor, usa os restos mecânicos dos criadores para sustentar o equilíbrio do reino, usa seu poder em missões para proteger e salvar suas colegas, buscando a preservação da paz. Os Falcor se estruturam em uma sociedade que consideram perfeita e Lunara tenta buscar essa perfeição, já que é considerada imperfeita na sociedade que a criou. Embora evoluídos, o tipo de tecnologia estacionou exatamente onde os criadores deixaram os Falcor, diferente de Lunara, que teve a oportunidade de experimentar todas as tecnologias dos outros reinos."
  },
  {
    num: "05",
    name: "Tenebra",
    realm: "Caligobris",
    power: "Magia da Morte",
    color: "#aaaaaa",
    colorBg: "#050505",
    desc: "Pigmentadora Preta. Após perder o marido e o filho, rogou uma praga em seu reino. Calada e fria, tem como principal amizade Lyra.",
    bio: "Caligobris é um reino que domina as artes do oculto e flerta com a morte. Tenebra, mesmo tentando fugir disso, carrega essa essência dentro de si. No reino, os seres sobrevivem quase como amaldiçoados pela vida difícil, mas tentam ser resilientes dentro do que restou, onde não há espaço para a fraqueza. Tenebra personifica isso: ela sobreviveu à ruína de sua vida. Ela queria a paz da terra, mas foi moldada pela violência de um lugar que não tolera a inocência."
  },
  {
    num: "06",
    name: "Vespera",
    realm: "Florivena",
    power: "Veneno & Sangue",
    color: "#00e676",
    colorBg: "#001a00",
    desc: "Pigmentadora Verde. A mais velha dentre todas. Beira quase a perversidade, embora seja leal à causa e às suas colegas.",
    bio: "Vespera é disciplinada, rude, pode ser cruel quando quer, mas é extremamente leal. Acredito que, de todas as Pigmentadoras, Florivena é a que menos condiz com a personalidade de sua guardiã. O que, como autora, só me dei conta mais tarde. Acredito que Vespera tinha muita opinião em minhas ideias. Vespera vem de um mundo que já se exterminou e está em um “segundo” ciclo de vida. Eles precisam ser um povo resiliente, que se mistura entre o novo e o antigo. O moderno que já pereceu e o rudimentar que está florescendo. Querendo ou não, Vespera também é isso no mundo das Pigmentadoras: ela é a mais velha entre todas. Já não há mais flores ou ervas em sua galhada, apenas o arcabouço dela, assim como os prédios esquecidos em seu reino, que são usados como alicerce para os novos."
  },
  {
    num: "07",
    name: "Calindra",
    realm: "Nevalis",
    power: "Vento & Gelo",
    color: "#b0d4ff",
    colorBg: "#001a33",
    desc: "Pigmentadora Branca. Doce, com humor ligeiramente ácido. Casada com o braço direito de Celestria, Saino. Ela e Tainá têm uma ligação espiritual muito forte.",
    bio: "Calindra é doce, perspicaz e calma. Ela tem um aspecto frio e etéreo, assim como todos os moradores que vivem na gélida Nevalis, mas, da mesma forma que eles, ela é pulsing, embora dentro de uma calmaria absoluta."
  },
  {
    num: "08",
    name: "Lyra",
    realm: "Nuvens Exaltadas",
    power: "Magia Brutal",
    color: "#d7ccc8",
    colorBg: "#0a0a0a",
    desc: "Pigmentadora Cinza. A mais nova das Pigmentadoras. Extremamente forte e positiva. Tornou-se Pigmentadora após a morte da mãe, que também era uma.",
    bio: "Lyra não nasceu em seu reino, veio da Cidade Celestial, embora sua mãe fosse do reino de Nuvens Exaltadas. Mas, mesmo não tendo nascido lá, Lyra é leve como os moradores daquele lugar."
  },
  {
    num: "09",
    name: "Pietra",
    realm: "Itaveah",
    power: "Pedra & Metal",
    color: "#8d6e63",
    colorBg: "#1a0f00",
    desc: "Pigmentadora Marrom. Mãe de duas meninas, faz poucas missões. Extremamente poderosa em batalhas e resistente a mudanças. Embora reservada, gosta de ter as Pigmentadoras reunidas.",
    bio: "Pietra é rígida e não gosta de mudanças, mas é maternal. Pietra converge com Itaveah em sua solidez, estabilidade e aversão a mudanças, mas trocou o imutável pela vida multicultural na Cidade Celestial, transformando sua rigidez em um instinto protetor."
  }
];

const newReinos = [
  {
    nome: "Mentálida",
    sigla: "M",
    gema: "Gema Magenta",
    rc: "#d500f9",
    rcBg: "#2d0040",
    pigmentadora: "Taaf",
    num: "01",
    delay: "0s",
    descricao: "Reino dos psíquicos, mediúnicos e manipuladores de mente. Um lugar rodeado de floresta tropical neon. <strong>Lar de Taaf</strong>. Poucas mulheres nascem com habilidades, mas quando elas aparecem são as mais fortes do reino.",
    lore: [
      {
        icon: "◈",
        texto: "Com um céu de duas luas e cor magenta, Mentálida é cercada por uma floresta tropical neon. De estruturas baixas, coloridas e palácios em formato pirâmide, o Reino Magenta é regido quase que inteiramente por homens. São eles os que mais têm cores em seus receptáculos, embora, a cada punhado de anos, mulheres nasçam com grandes habilidades."
      },
      {
        icon: "◈",
        texto: "Em seu nascimento, as meninas já são predestinadas, e casam-se ainda meninas para serem usadas na política de manipulação de acordo com a política de interesse dos homens."
      },
      {
        icon: "◈",
        texto: "Para a sociedade, ser escolhida é uma honra, mas a realidade é bem diferente. Além de abusos, os homens podem manipular as cores das jovens, colocando colares de ferro com espinhos para evitar que elas usem a habilidade."
      },
      {
        icon: "◈",
        texto: "Taaf foi uma dessas meninas, até que Celestria interveio em seu favor, algo extremamente proibido. Ao invés de cultivar o ódio e a amargura, a Pigmentadora Magenta optou por ir pelo caminho oposto, ainda que a cicatriz doa."
      },
      {
        icon: "◈",
        texto: "Todos os Mentálidas têm runas espalhadas pelo corpo. Elas servem para aumentar o poder receptáculo e assim, abrir ou ajudar a fomentar uma habilidade já existente ou nova. Quanto mais runas o ser tem no corpo, mais poderoso é."
      }
    ]
  },
  {
    nome: "Nevalis",
    sigla: "N",
    gema: "Gema Branca",
    rc: "#b0d4ff",
    rcBg: "#001a33",
    pigmentadora: "Calindra",
    num: "02",
    delay: "0.06s",
    descricao: "Lar do gelo e do vento castigador. Os seres desse local não usam as habilidades diretamente com as mãos e sim, através de arma de fogo. Um local caótico e belo, onde o excesso de luz e a falta de calor desenham as personalidades. <strong>Lugar onde Calindra nasceu.</strong>",
    lore: [
      {
        icon: "◈",
        texto: "O mundo é congelado, pois o ar traz consigo a neve. Há lugares melhores do que outros, mas, em geral, todas as cidades estão contornadas por uma nevasca. Os prédios e as casas são ligados por túneis e corredores. Mas, mesmo no lugar inóspito, os Nevarianos puderam transformar a paisagem gelada e branca num local cheio de outdoors coloridos de néon e interativos."
      },
      {
        icon: "◈",
        texto: "De aspecto etéreo e de cores azuis, os Nevareanos utilizam placas cibernéticas, fios condutores e próteses tecnológicas que misturam suas dermes azuladas com a tecnologia do reino branco."
      },
      {
        icon: "◈",
        texto: "Os Nevareanos têm muitas vezes dificuldade de canalizar suas cores, com isso, usam a tecnologia para lhes auxiliar. Por isso, as armas de fogo são amplamente usadas para que as habilidades guardadas no âmago dos seres possam ser externalizadas."
      },
      {
        icon: "◈",
        texto: "As minas espalhadas por Novalis são altamente exploradas, pois é através dos metais retirados de lá que são feitos a maioria dos apetrechos tecnológicos. Um trabalho extremamente perigoso, mas monetariamente favorável."
      }
    ]
  },
  {
    nome: "Brasas Constantes",
    sigla: "B",
    gema: "Gema Vermelha",
    rc: "#ff3333",
    rcBg: "#330000",
    pigmentadora: "Agnes",
    num: "03",
    delay: "0.12s",
    descricao: "Lugar cruel, <strong>lar de Agnes</strong>. Cercado por vulcões. Embora sejam uma raça de guerreiros, seus moradores têm problemas pulmonares que acabam não sobrevivendo por muito tempo.",
    lore: [
      {
        icon: "◈",
        texto: "Brasas Constantes é um reino forjado por guerreiros e guerreiras. Quase chegaram à extinção por duas vezes, devido às guerras que clãs, com interesses distintos, provocaram. Em um desses conflitos, uma das Pigmentadoras mais fortes de Celestria morreu. "
      },
      {
        icon: "◈",
        texto: "Durante séculos a paz (quase) reinou, até a chegada dos panteões, forjando um culto fanático para cultuar o Deus do Primordial."
      },
      {
        icon: "◈",
        texto: "O mundo é conhecido por uma condição pulmonar que afeta a maioria de seus habitantes — uma doença térmica degenerativa que compromete a respiração com o tempo. Os habitantes vivem mais do que os humanos, mas poucos chegam à velhice."
      },
      {
        icon: "◈",
        texto: "Aqueles que conseguem envelhecer se tornam figuras sagradas e resguardadas, selecionados para reger os destinos do povo."
      },
      {
        icon: "◈",
        texto: "Sua culinária é conhecida por peixes magmas, pimentas e pepinos ultra apimentados. "
      },
      {
        icon: "◈",
        texto: "Boêmios e barulhentos, os Braseiros são impacientes, mas leais."
      }
    ]
  },
  {
    nome: "Luxanara",
    sigla: "L",
    gema: "Gema Amarela",
    rc: "#ffd600",
    rcBg: "#1a1400",
    pigmentadora: "Lunara",
    num: "04",
    delay: "0.18s",
    descricao: "Um local próspero, lindo e totalmente organizado. Entre zepelins e autônomos, os moradores tendem a buscar pela paz. <strong>Lar de Lunara</strong>.",
    lore: [
      {
        icon: "◈",
        texto: "Em breve..."
      }
    ]
  },
  {
    nome: "Florivena",
    sigla: "F",
    gema: "Gema Verde",
    rc: "#00e676",
    rcBg: "#001a00",
    pigmentadora: "Vespera",
    num: "05",
    delay: "0.24s",
    descricao: "Um lugar onde os escombros de uma cidade esquecida, lotadas de arranha-céus e a simplicidade de casas de madeira são construídas como enfeites de árvores de Natal. <strong>Lar de Vespera</strong>.",
    lore: [
      {
        icon: "◈",
        texto: "Uma vez, a sociedade do reino já foi altamente evoluída, contudo, após uma extinção em massa, a natureza e a vida animal invadiram as grandes cidades. Aqueles que sobreviveram utilizaram o que havia restado dos grandes arranha-céus para construir suas casas."
      },
      {
        icon: "◈",
        texto: "O tecnológico e o rudimentar se encontram. Agora, os escombros verticais, que alcançavam os céus, tornaram-se árvores de concreto com casas de madeira. Formando uma floresta pitoresca com frutos iluminados pelos Floriveranos."
      },
      {
        icon: "◈",
        texto: "Sua flora é complexa e usada para todos os fins. Desde o encontro de curas até a execução de uma vida."
      },
      {
        icon: "◈",
        texto: "Floriveranos são criaturas com chifres e neles flores, frutos ou ervas crescem. Quanto mais o ser tem, mais poderoso ele é. Curiosamente, Vespera tem os chifres nus, parte pela sua idade avançada. É a Pigmentadora mais velha de sua geração."
      },
      {
        icon: "◈",
        texto: "Florivena é conhecida por sua culinária e as Rosetara, bolinhas feitas com flores murchas, são os doces preferidos de Tainá."
      }
    ]
  },
  {
    nome: "Itaveah",
    sigla: "I",
    gema: "Gema Marrom",
    rc: "#8d6e63",
    rcBg: "#1a0f00",
    pigmentadora: "Pietra",
    num: "06",
    delay: "0.30s",
    descricao: "Um Reino escondido dentro de montanhas e casas feitas por gemas coloridas e cavernas. Lá a noite e o dia não existem. <strong>Lar de Pietra</strong>.",
    lore: [
      {
        icon: "◈",
        texto: "Em breve..."
      }
    ]
  },
  {
    nome: "Caligobris",
    sigla: "C",
    gema: "Gema Preta",
    rc: "#aaaaaa",
    rcBg: "#050505",
    pigmentadora: "Tenebra",
    num: "07",
    delay: "0.36s",
    descricao: "Um reino medieval, onde o sol não é permitido. Lugares de castelos, torres e muralhas. Onde seus habitantes brincam com a morte e os espíritos. <strong>Lar de Tenebra</strong>.",
    lore: [
      {
        icon: "◈",
        texto: "Em breve..."
      }
    ]
  },
  {
    nome: "Nuvens Exaltadas",
    sigla: "N",
    gema: "Gema Bege",
    rc: "#d7ccc8",
    rcBg: "#0a0a0a",
    pigmentadora: "Lyra",
    num: "08",
    delay: "0.42s",
    descricao: "Um reino feito por ilhotas que flutuam no céu. Conectadas por pontes e cachoeiras. Lá, muitos conseguem se transformar em diferentes animais, exceto por <strong>Lyra, seu lugar de morada</strong>.",
    lore: [
      {
        icon: "◈",
        texto: "Em breve..."
      }
    ]
  },
  {
    nome: "Aqualina",
    sigla: "A",
    gema: "Gema Azul",
    rc: "#00b0ff",
    rcBg: "#001833",
    pigmentadora: "Nanima",
    num: "09",
    delay: "0.48s",
    descricao: "Um reino híbrido, onde parte dos moradores moram debaixo dos oceanos e outros na terra firme. Lugares de grandes artistas. <strong>Nanima vem de lá</strong>. Eles têm a capacidade de criar caldas aquáticas.",
    lore: [
      {
        icon: "◈",
        texto: "Em breve..."
      }
    ]
  }
];

const data = JSON.parse(fs.readFileSync('public/content.json', 'utf8'));
data.membros.blog = newBlog;
data.membros.pigmentadoras = newPigmentadoras;
data.membros.reinos = newReinos;

fs.writeFileSync('public/content.json', JSON.stringify(data, null, 2), 'utf8');
console.log('content.json updated successfully with 7 blog posts, pigmentadoras bios, and original reinos lore.');
