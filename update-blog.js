const fs = require('fs');

const newBlog = [
  {
    id: 1,
    eyebrow: "Bastidores",
    cat: "Bastidores · Criação",
    title: "Como nasceu o universo das Pigmentadoras?",
    excerpt: "Sinceramente, eu não lembro muito bem, mas mais ou menos há um ano e meio atrás. Por aí… minha memória é muito ruim. Eu amo videogame e meu gênero preferido é RPG e aventura. Fico sempre maravilhada com a construção de mundo de alguns jogos, como Dragon Age, Baldur’s Gate 3, Mass Effect, Cyberpunk 2077 e Horizon Zero Dawn. Inspirada por eles, comecei a construir o meu próprio universo. Na realidade, me despertou a vontade. A princípio, não havia os diferentes mundos (reinos) e sim um único reino, onde raças coexistiam, sob uma grande Árvore. Eu ainda não tinha pensado nas raças direito ou nesses biomas. Também tive a vontade de inventar bruxas que guardavam essa árvore e esse reino. Sempre gostei de bruxas e do misticismo que as cercam.",
    body: "<p>Sinceramente, eu não lembro muito bem, mas mais ou menos há um ano e meio atrás. Por aí… minha memória é muito ruim.</p><p>Eu amo videogame e meu gênero preferido é RPG e aventura. Fico sempre maravilhada com a construção de mundo de alguns jogos, como Dragon Age, Baldur’s Gate 3, Mass Effect, Cyberpunk 2077 e Horizon Zero Dawn. Inspirada por eles, comecei a construir o meu próprio universo. Na realidade, me despertou a vontade. A princípio, não havia os diferentes mundos (reinos) e sim um único reino, onde raças coexistiam, sob uma grande Árvore. Eu ainda não tinha pensado nas raças direito ou nesses biomas. Também tive a vontade de inventar bruxas que guardavam essa árvore e esse reino. Sempre gostei de bruxas e do misticismo que as cercam.</p><p>Mas, estava faltando algo, queria desenvolver uma história complexa, mas com um entendimento “fácil”, sabe?</p><p>Com isso, tempo depois, ainda quando estava terminando O Toque Letal do Corvo, comecei a assistir à série The Wheel of Time. Algo estalou dentro de mim, uma inspiração muito forte, e eu pensei: “PRONTO!”.</p><p>Alguns dias depois, eu sonhei com as minhas protagonistas.</p><p>Tudo começou com Tainá e Celestria: um casal improvável entre uma serva (uma bruxa dos reinos) e a sua Deusa. No início, eu não tinha exatamente uma história: a primeira cena que surgiu na minha mente foi Tainá caída, ferida no chão por um corte profundo que atravessava seu tórax. Uma criatura estava morta, ela havia conseguido completar sua missão, mas pensou que fosse perecer também. Foi então que Celestria apareceu, abrindo um véu dourado no ar.</p><p>A primeira coisa que se destacava nela era o olhar dourado. Ela se posicionou na frente de Tainá, com os raios de sol iluminando seus cabelos. O dourado estava presente em cada parte de seu ser. Ela se agachou e pegou Tainá no colo. Nesse momento, tramas douradas nasceram em seus braços, os filamentos correram pelos corpos de ambas até alcançarem o ferimento de Tainá, curando-a.</p><p>Tainá a abraçou, escondendo o rosto no pescoço de Celestria, e foi quando ela sentiu o cheiro de verão.</p><p>Eu ainda não tinha um plot, ou as Pigmentadoras, apenas a ideia das bruxas, o reino e essa cena. Mas foi ali que a vontade de escrever uma romantasia surgiu, latejante. Por algum motivo, algo sempre me impedia — não sei ao certo o que era. Acho que era a insegurança de tomar a responsabilidade de criar muitas coisas.</p><p>Então comecei a desenvolver a história e, a partir das Pigmentadoras, os reinos se desenharam. Elas eram mais importantes do que o mundo que as permeava. Minha intenção era trazer mulheres completamente diferentes umas das outras, com passados e vivências únicas.</p><p>Agnes foi a primeira a nascer. Uma mulher de pele sáfira, implacável e com chifres. A princípio, ela teria um gigante martelo de fogo, já que os pincéis ainda não eram algo, e seria guardiã de um reino tomado por vulcões.</p>",
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
    body: "<p>Na minha perspectiva, Tainá amava Celestria antes mesmo de conhecê-la — ou, ao menos, amava a ideia que tinha dela. Muitas vezes, como autora, eu me apego às minhas personagens quando começo a desenhá-las in minha mente, e acho que Tainá deu um passo além e se apaixonou pela mulher de seus sonhos. Sua sorte foi que Celestria existia de verdade e, quando ela a encontrou pela primeira vez no salão da Deusa, Tainá apenas confirmou que já sabia, que sempre foi apaixonada por Celestria antes mesmo de conhecê-la.</p><p>Acredito que, para Celestria, foi um processo um pouco mais longo por causa de todas as suas amarras e do seu passado. Mas acho que o fato de ela sentir Tainá, a sua cor roxa e a devoção a ajudou a desatar todos esses nós. Acho que foi estarrecedor para Celestria sentir tudo isso, algo que a pegou totalmente desprevenida e ela gostou disso.</p><p>De certa forma, Tainá a desafia também, de uma maneira diferente de todas as outras Pigmentadoras. Tainá veio para sacudir o marasmo de seu poder como guardiã da Árvore e foi isso o que lhe chamou a atenção.</p><p>Na minha cabeça é assim: Tainá fell first, Celestria fell harder.</p><p>Tainá se apaixonou primeiro, mas Celestria se apaixonou com mais intensidade.</p>",
    featured: false
  },
  {
    id: 4,
    eyebrow: "Processo",
    cat: "Processo · Escrita",
    title: "O pincel de Tainá e a origem do sistema de magia",
    excerpt: "Foi através das cores que a magia surgiu. Queria que as habilidades das Pigmentadoras e dos seres fossem relacionadas a algo artístico.",
    body: "<p>Como sonhei com Celestria saindo pelo véu, tentei pensar em como as Pigmentadoras poderiam atravessar os véus dos reinos e se locomover mais rapidamente de um lugar para o outro — embora eu não quisesse que isso fosse algo disponível o tempo inteiro. Então, imaginei o pincel rasgando o ar e, conectada a ele, a cor e, consequentemente, a quantidade do receptáculo da cor de cada ser.</p><p>Foi através das cores que a magia surgiu. Queria que as habilidades das Pigmentadoras e dos seres fossem relacionadas a algo artístico. Como se cada uma fosse um artista, um pintor com o seu estilo de arte.</p><p>E as pigmentadoras têm seu próprio estilo de arte, isso é explícito no jeito em que elas se portam durante as batalhas.</p><p>Depois disso, vieram os elementos principais e os subelementos derivados deles. Tentei vincular as cores com todos esses elementos de maneira que fizesse sentido.</p><p>Entretanto, as cores de Celestria e Tainá deveriam ser diferentes: o dourado representando o celestial, e o roxo, o vazio. O tudo e a ausência de algo (o nada).</p>",
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
    desc: "Uma Pigmentadora amável que carrega um passado extremamente sofrido. Torna-se um alicerce essencial para a sobrevivência de Tainá nos nove reinos.",
    bio: "Vinda de Mentálida, onde apenas homens contém a maior quantidade de cor e controlam a política local, Taaf foi a mulher mais poderosa de sua geração. Em seu nascimento, seu destino já havia sido traçado, meninas como elas eram raras e extremamente úteis para controle de massa. \n\nVendida pelos pais para um homem com ambição de se tornar um governador, Taaf teve que se casar aos 12 anos de idade. Sua infância foi rasgada e substituída por opressão e abusos constantes. Embora sofrendo, Taaf achava que estava fazendo o certo, um bem maior que nem mesmo ela compreendia. Foi explorada como uma arma viva em guerras, com sua mente treinada à força para destruir.\n\nCresceu isolada e, em seu aniversário de vinte e cinco anos, depois de tentar fugir e não conseguir, Celestria a libertou, levando-a para a Árvore Celestial, onde seus dons poderiam florescer com propósito e não com dor. \n\nCelestria a ajudou, tratou-a e, depois de anos de cura, a divindade lhe atribuiu o título de Pigmentadora."
  },
  {
    num: "02",
    name: "Agnes",
    realm: "Brasas Constantes",
    power: "Fogo & Raio",
    color: "#ff3333",
    colorBg: "#330000",
    desc: "Agnes é cortante, impaciente, mas extremamente leal. Atroz quando se trata em acabar com os inimigos. Apaixonada por Nanima.",
    bio: "Agnes era uma mercenária em Brasas Constantes. Movida por boemia, sexo e dinheiro, a Pigmentadora do Fogo nunca seguiu regras, além de suas próprias, e por vezes, falhava. Sem escrúpulos, aceitava quase qualquer trabalho, o que lhe rendeu uma longa lista de assassinatos e inimigos. Apesar disso, era muito respeitada; afinal, uma mercenária mortífera como ela logo ganharia notoriedade.\n\nMigrando de uma cidade para outra, Agnes passou muito tempo escondida entre as dobras das montanhas vulcânicas, respirando a névoa que se tornava ainda mais densa perto das bocas de magma. Devido às suas desventuras, ela desenvolveu a doença térmica degenerativa que compromete a respiração da grande maioria dos habitantes de Brasas Constantes. \n\nDiferente de muitos, Agnes não aceitava a condição que lhe fora imposta. Tentou de todos os meios achar a própria cura. Muitas vezes, extrapolando a linha tênue do certo, fazendo o necessário para encontrá-la, mas infelizmente, mais rastros de corpos foram deixados no caminho. \n\nMesmo sendo cética em relação a Celestria, Agnes rogou por ela no topo do vulcão mais alto de seu reino. No momento em que deu seu último suspiro e seu corpo pendeu para a frente, pronto para cair no magma infernal, Celestria apareceu e a salvou, concedendo-lhe a Bênção da Pigmentadora. Hoje, Agnes é a pessoa mais velha viva de seu mundo e extremamente leal à divindade e às Pigmentadoras."
  },
  {
    num: "03",
    name: "Nanima",
    realm: "Aqualina",
    power: "Água & Cura",
    color: "#00b0ff",
    colorBg: "#001833",
    desc: "Abriu mão da realeza para servir Celestria, é calma e paciente. Apaixonada por Agnes. A maioria das Pigmentadoras acredita que Nanima é a Pigmentadora mais forte dentre todas.",
    bio: "Nanima era a princesa herdeira de Aqualina. Sua vida foi marcada por protocolos, proibições e o peso da coroa. Um cotidiano que poderia soar perfeito e, de fato, para muitos e inclusive para ela, talvez fosse. A paz e a ordem que seus pais impunham ao reino garantiam exatamente essa estabilidade. \n\nContudo, manter a harmonia (equilíbrio) a todo custo gerava uma estagnação terrível e uma ociosidade angustiante, não apenas para ela, mas para muitos habitantes que eram obrigados a seguir seu ofício (determinado pelo reino) à risca, sem jamais quebrar as regras. Muitos dos seres sofriam com isso, com a terrível falta de desafio e marasmo, consequentemente o índice de suicídio entre os Aqualianos sempre foi alto. Entretanto, ignorado, pois parte da população almejava por essa paz que por muito tempo não existia. Era apenas um “efeito colateral” que, segundo os habitantes, valia a pena. Durante anos a fio, o reino se fragmentou em várias partes, trazendo guerra e fome. Foram os pais de Nanima que o unificaram como uma grande nação perfeita. \n\nNa superfície da água, Aqualina parecia impecável, mas foi justamente nessa busca pela perfeição que Nanima percebeu que sua liberdade era uma ilusão — e que conquistá-la teria um preço alto a se pagar.\n\nAlém de renunciar ao cargo, sentir a decepção dos pais que amava profundamente, se fosse capturada, ela seria banida para a tormenta das profundezas das cavernas aquáticas, onde o caos existia. Largada ao léu para viver à margem da sociedade e malfeitores. Foi nesse momento de angústia que Celestria a conheceu; em uma prece por liberdade, a Deusa atendeu ao seu chamado, concedendo-lhe o título de Pigmentadora.\n\nNanima tornou-se, assim, um símbolo de renúncia e coragem. Sua decisão rompeu tradições e, por isso, ela passou a ser vista pelos rebeldes com profundo respeito."
  },
  {
    num: "04",
    name: "Lunara",
    realm: "Luxanara",
    power: "Tempo & Luz",
    color: "#ffd600",
    colorBg: "#1a1400",
    desc: "Lunara demorou anos para dominar sua cor. Vinda de uma família de nobres e extremamente conservadores, Lunara tornou-se uma vergonha para a família, mesmo sendo uma Pigmentadora Amarela. É leve e afável.",
    bio: "Lunara nasceu em meio ao prestígio e ao peso de uma linhagem de grandes canalizadores da cor amarela. Era esperado que ela fosse um prodígio — mas, aos olhos da família, nasceu \"sem talento\". Um desperdício de receptáculo. Demorou anos para que sua cor se desenvolvesse e, quando isso aconteceu, Lunara não conseguiu controlá-lo do jeito esperado.\n\nDurante muito tempo, foi tratada como uma decepção, até mesmo quando foi notada pela própria deusa e a chamou para ser Pigmentadora. A própria imperatriz de Luxanara, seus pais e informantes ainda são resistentes à escolha de Celestria.\n\nMesmo sem saber controlar seus dons, a Deusa viu nela um brilho que não podia ser ignorado. Levou-a para a Árvore Celestial, treinou-a, até que finalmente estivesse pronta para as suas missões.\n\nLunara tinha vergonha de si mesma, principalmente, por se considerar uma “Felcor” falha, incapaz de controlar sua própria cor. Entretanto, isso mudou, quando a cada missão que passava, mais forte se tornava. Esforçou-se imensamente e, junto com Pietra e Calindra, levou-se ao limite para evoluir. Embora, até hoje, toda vez que volta ao seu reino, ainda consiga ver os olhares atravessados daqueles que sabem que ela é uma Pigmentadora. Como se ela não valesse a pena ter conseguido o posto de Pigmentadora. \n\nControladora do tempo, Lunara já determinou o destino de algumas batalhas importantes e, inclusive, salvou suas colegas inúmeras vezes."
  },
  {
    num: "05",
    name: "Tenebra",
    realm: "Caligobris",
    power: "Magia da Morte",
    color: "#aaaaaa",
    colorBg: "#050505",
    desc: "Após perder o marido e o filho, Tenebra rogou uma praga na cidade de seu Reino. Vendo o sofrimento, Celestria chamou-a para ser sua Pigmentadora. Tenebra é calada, fria, mas tem como sua principal amizade, Lyra.",
    bio: "Tenebra vem de um lugar onde o luxo dos raios de sol acontece apenas dois meses por ano: Caligobris é um reino sombrio habitado por criaturas noturnas que flertam diretamente com a morte e a arte do oculto. \n\nDurante muito tempo, ela se dedicou a administrar sua vinícola, sem qualquer interesse em explorar as próprias habilidades, ainda que a quantidade de sua cor preta fosse extremamente estarrecedora. Tenebra viveu uma vida feliz com a sua família, não desejava se aprofundar na arte do misticismo ou da necromancia. Ser uma “fazendeira”, a fazia bem. Era assim que almejava viver até o fim de sua vida. Tranquila, aproveitando os pequenos momentos.\n\nTudo mudou quando sua safra foi infectada por um fungo devastador que, por consequência, envenenou e matou dezenas de habitantes locais.\n\nComo castigo pelo desastre, Tenebra foi forçada a assistir à execução de seu marido e de seu filho pelos conselheiros de sua cidade. \n\nCom a vinícola destruída e sua casa queimada, Tenebra seria a próxima a morrer, mas a fúria e o luto fizeram suas habilidades florescerem de forma avassaladora, espalhando-se como o próprio fungo que atacou suas uvas. Em um estalo de puro desespero, Tenebra dizimou parte da cidade, cometendo uma verdadeira chacina.\n\nConsumida pela dor da perda, tentou trazer sua família de volta, mas após tentativas frustradas, amaldiçoou a própria cor, tornando-se vazia, e sacrificou o próprio corpo: seu braço tornou-se fantasmagórico, uma extensão viva do oculto e da morte. \n\nEsse despertar chamou a atenção de Celestria, que a convocou para se tornar uma Pigmentadora, oferecendo-lhe uma chance de curar a ferida eterna de sua alma."
  },
  {
    num: "06",
    name: "Vespera",
    realm: "Florivena",
    power: "Veneno & Sangue",
    color: "#00e676",
    colorBg: "#001a00",
    desc: "Vespera é a Pigmentadora mais velha dentre todas, pode não ser a mais poderosa, mas todos a temem. Beira quase a perversidade, embora assim como Agnes é leal à causa das Pigmentadoras e as suas colegas.",
    bio: "Vespera é la Pigmentadora mais velha entre todas. Apesar da idade e de não ter uma grande quantidade de cor dentro de seu âmago, ela carrega uma imponência e uma experiência que poucas Pigmentadoras já tiveram. Participou de inúmeras guerras e vislumbrou a frágil paz construída nos nove reinos. Viu algumas de suas companheiras Pigmentadoras perecerem e sofreu com suas perdas, contudo, com o passar do tempo, tentou criar um tipo de armadura que apenas a deixou mais distante das suas companheiras. \n\nSeu passado é um pouco indistinto, embora, dentro de seu próprio reino, seja extremamente respeitada. Na verdade, Véspera é respeitada por todos os reinos. Seja pelo medo ou pela referência, Vespera não se importa qual dos sentimentos almeja e aprecia esse tipo de atenção. \n\nPerdeu parte de sua perna em uma batalha sangrenta em Aqualina; Celestria ofereceu-lhe a reconstrução do membro, mas ela recusou, desejando encontrar a força através de sua perda e, de fato, encontrou. Sua prótese é um símbolo de resiliência entre as Pigmentadoras e um símbolo de respeito entre aqueles que a conhecem.\n\nAlém de ser uma excelente estrategista, o principal papel de Véspera é recolher respostas como ninguém — muitas vezes, de maneira um tanto quanto violenta. Ela usa a tortura e parece gostar disso. \n\nÉ mãe de Saino, o braço direito de Celestria e o único homem que trabalha diretamente com a divindade, e casada com a prefeita da Cidade Celestial. Ela ama sua família mais do que tudo, inclusive mais do que o seu próprio ofício de Pigmentadora. \n\nVéspera é dura, ríspida e letal, mas extremamente leal e respeitosa perante a sua deusa."
  },
  {
    num: "07",
    name: "Calindra",
    realm: "Nevalis",
    power: "Vento & Gelo",
    color: "#b0d4ff",
    colorBg: "#001a33",
    desc: "Calindra é doce, com um humor ligeiramente ácido e é casada com o braço direito de Celestria, Saino. Ela e Tainá descobrem ter uma ligação espiritual muito forte.",
    bio: "Nascida em Nevalis, Calindra teve uma infância quase comum. Criada em meio a armas potentes na loja BIG BANG BOOM de sua mãe, Kalinda sempre dominou sua cor branca. Entre brincadeiras na neve, desenvolvendo sua expertise em armas e cultivando um coração empático, cresceu destacando-se como uma das melhores atiradoras de seu reino. Naturalmente, sua habilidade chamou a atenção de Celestria. \n\nAo ingressar no grupo das Pigmentadoras, conheceu Saino. A paixão entre os dois foi instantânea, uma conexão profunda que logo se transformou em um amor visceral. Juntos, sonham em cultivar uma família. \n\nTornou-se amiga de Lunara rapidamente e, em pouco tempo, as duas — que dividiam a paixão pela construção — passaram a desenvolver armas ainda mais potentes para otimizar a canalização de sua cor branca. Juntas, perdiam a noção das horas entre uma missão e outra, obcecadas em projetar o armamento perfeito. \n\nEntretanto, o equilíbrio parecia reservar um destino maior para ela. Anos depois, após perder a mãe e conhecer Tainá, descobriu que carregava o sangue do Vazio; embora não manifestasse a cor roxa, Calindra era capaz de caminhar entre as fendas. \n\nEla e Tainá construíram um laço extremamente forte, não apenas pelo sangue que dividiam, mas pelos sentimentos puros de quem deseja ter uma família real. Ambas tornaram-se próximas quase que imediatamente e cultivaram o significado da palavra família."
  },
  {
    num: "08",
    name: "Lyra",
    realm: "Nuvens Exaltadas",
    power: "Magia Brutal",
    color: "#d7ccc8",
    colorBg: "#0a0a0a",
    desc: "Engraçada é a mais nova das Pigmentadoras, Lyra é extremamente forte e positiva. Tornou-se Pigmentadora após a morte da mãe, que também era uma.",
    bio: "Filha de uma das mais respeitadas Pigmentadoras da Deusa — vinda das Nuvens Exaltadas — Lyra herdou o pincel cinza da mãe, forjado em bravura e poder. Embora, durante muitos anos, tivesse dificuldade de controlá-lo, já que o artefato foi moldado especialmente para sua mãe e não para ela.\n\nA mãe de Lyra pereceu em uma missão, morrendo na grande terceira guerra dos Brasas Constante e deixando para a filha um legado tão vasto quanto difícil de carregar. Por anos, sua progenitora foi amante de Celestria, e foi sob as asas dessa divindade que Lyra encontrou refúgio e um lar.\n\nMovida por essa ligação, Celestria moldou o caminho da jovem, através de uma promessa: ao completar vinte e cinco anos, Lyra se tornaria a nova Pigmentadora Cinza. Criada entre os galhos da Árvore Celestial e educada pelos Informantes, Lyra adquiriu um conhecimento sobre os reinos que nenhuma outra de sua casta jamais possuiu.\n\nSua ligação com Tenebra foi extremamente importante para o seu crescimento. Ambas vieram da dor da perda, embora Lyra não se lembrasse de sua mãe. As duas tão diferentes encaixaram-se perfeitamente, formando uma das amizades mais fortes entre Pigmentadoras."
  },
  {
    num: "09",
    name: "Pietra",
    realm: "Itaveah",
    power: "Pedra & Metal",
    color: "#8d6e63",
    colorBg: "#1a0f00",
    desc: "Pietra faz poucas missões, sendo mãe de duas meninas. Extremamente poderosa em batalhas, a Pigmentadora Marrom é resistente a mudanças, principalmente, após a chegada de Tainá. Embora reservada, gosta de ter as Pigmentadoras reunidas.",
    bio: "Pietra era uma professora em Itaveah. Ensinava os seres a dominarem suas habilidades e cores. Paciente com aqueles que tinham dificuldade, Pietra logo chamou a atenção de Celestria, que a convocou para ser uma Pigmentadora. Teve hesitação de ir para a Árvore Celestial, ainda que sempre tivera grande respeito pela Deusa Celestria. Os motivos das preocupações eram: não se achava capaz para o ofício de Pigmentadora e a outra, achou que seria apenas um peão que a qualquer momento poderia ser descartada.\n\nCom sua chegada na cidade Celestial, Pietra se apaixonou por um professor universitário, da única universidade da cidade. Casaram-se e tiveram duas filhas. Uma delas com as características da mãe e a outra a do Pai, um braseiro, com dois chifres pontudos.\n\nÉ austera não apenas com a criação de suas filhas, mas também com o jeito que responde às Pigmentadoras. \n\nNão gosta de mudanças, principalmente durante as missões. Por isso, muitas vezes, prefere fazê-las junto com Vespera e Tenebra. \n\nPor vezes, tem um lado maternal perante elas. Principalmente Calindra, que perdeu sua mãe."
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
    descricao: "Reino dos psíquicos, mediúnicos e manipuladores de mente. Um lugar rodeado de floresta tropical neon. Lar de Taaf. Poucas mulheres nascem com habilidades, mas quando elas aparecem são as mais fortes do reino.",
    lore: [
      {
        icon: "◈",
        texto: "Com um céu de duas luas e cor magenta, Mentálida é cercada por uma floresta tropical neon. De estruturas baixas, coloridas e palácios em formato pirâmide, o Reino Magenta é regido quase que inteiramente por homens. São eles os que mais têm cores em seus receptáculos, embora, a cada punhado de anos, mulheres nasçam com grandes habilidades."
      },
      {
        icon: "◈",
        texto: "Em seu nascimento, as meninas já são predestinadas, e casam-se ainda pequenas para serem usadas na política de manipulação de acordo com a política de interesse dos homens."
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
    descricao: "Lar do gelo e do vento castigador. Os seres desse local não usam as habilidades diretamente com as mãos e sim, através de arma de fogo. Um local caótico e belo, onde o excesso de luz e a falta de calor desenham as personalidades. Lugar onde Calindra nasceu.",
    lore: [
      {
        icon: "◈",
        texto: "Em Nevalis o mundo é congelado, pois o ar revolto traz consigo a neve. Há lugares melhores do que outros, mas, em geral, todas as cidades estão contornadas por uma nevasca. Os prédios e as casas são ligados por túneis e corredores que carregam seus moradores e protegê-los. Mas, mesmo no lugar inóspito, os Nevaleanos puderam transformar a paisagem gelada e branca num local cheio de outdoors coloridos de néon e interativos."
      },
      {
        icon: "◈",
        texto: "De aspecto etéreo e de cores azuis, os Nevareanos utilizam placas cibernéticas, fios condutores e próteses tecnológicas que misturam suas dermes azuladas com a tecnologia do reino branco."
      },
      {
        icon: "◈",
        texto: "Os Nevaleanos têm muitas vezes dificuldade de canalizar suas cores, com isso, usam a tecnologia para lhes auxiliar. Por isso, as armas de fogo são amplamente usadas para que as habilidades guardadas no âmago dos seres possam ser externalizadas."
      },
      {
        icon: "◈",
        texto: "As minas espalhadas por Nevalis são altamente exploradas, pois é através dos metais retirados de lá que são feitos a maioria dos apetrechos tecnológicos. Um trabalho extremamente perigoso, mas monetariamente favorável."
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
    descricao: "Lugar cruel, lar de Agnes. Cercado por vulcões, Embora sejam uma raça de guerreiros, seus moradores têm problemas pulmonares que acabam não sobrevivendo por muito tempo.",
    lore: [
      {
        icon: "◈",
        texto: "Brasas Constantes é um reino forjado por guerreiros e guerreiras. Quase chegaram à extinção por duas vezes, devido às guerras que clãs, com interesses distintos, provocaram. Em um desses conflitos, uma das Pigmentadoras mais fortes de Celestria morreu."
      },
      {
        icon: "◈",
        texto: "Durante séculos, a paz (quase) reinou, até a chegada dos panteões, forjando um culto fanático para cultuar o Deus do Primordial."
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
        texto: "Sua culinária é conhecida por peixes magmas, pimentas e pepinos ultra apimentados."
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
    descricao: "Um local próspero, lindo e totalmente organizado. Entre zepelins e autônomos, os moradores tendem a buscar pela paz. Lar de Lunara.",
    lore: [
      {
        icon: "◈",
        texto: "Os Luxanaros são conhecidos como Falcor. São seres não orgânicos que vivem como se fossem orgânicos, pois, após a bênção de Celestria, que lhes concedeu a cor, finalmente se tornaram capazes de sentir. Agora, capazes de sentir, os Falcor se estruturam em uma sociedade perfeita."
      },
      {
        icon: "◈",
        texto: "Criados por seres antecessores, essas “criaturas” testemunharam seus criadores perecerem diante da própria ganância, o que levou à destruição da fauna e da flora de Luxanara. Através da evolução e do curar do reino, os Falcor passaram a buscar a harmonia entre todas as coisas."
      },
      {
        icon: "◈",
        texto: "Apreciadores da arte, as cidades de Luxanara parecem ter saído de telas de grandes artistas. Edifícios altos mesclam o clássico com o mecânico, funcionando por meio de engrenagens, pistões, caldeiras e fumaça — vestígios do povo antigo, agora reaproveitados para sustentar o equilíbrio entre todos."
      },
      {
        icon: "◈",
        texto: "Os Luxanaras, sendo seres não orgânicos, não “morrem”, embora passem por rituais semelhantes aos dos seres dos Nove Reinos. Afinal, almejam a normalidade de seres orgânicos, mesmo buscando a perfeição, algo impossível para um organismo."
      },
      {
        icon: "◈",
        texto: "Por meio de um dispositivo, a cor dada por Celestria é inserida in um corpo humanoide e, com o passar dos anos, essa “casca” envelhece. Após esse ciclo, a cor é retirada e transferida para um novo corpo, renovando assim o ser. A cor é renovada a cada novo ciclo, sendo assim, quando ela é inserida na casca humanoide, a cor não carrega lembranças das “vidas” passadas."
      },
      {
        icon: "◈",
        texto: "A Felcor primordial ainda vive, sendo uma das três imperatrizes que governam Luxanara. O ser mais antigo pisou e pisa no reino. É justa, embora externalize sua insatisfação por Lunara ter sido a escolhida da Deusa."
      },
      {
        icon: "◈",
        texto: "Os primeiros Felcor organizam-se in famílias respeitadas, cada uma com um símbolo que representa seu poder. É o caso da família de Lunara, cujo símbolo é a ampulheta."
      },
      {
        icon: "◈",
        texto: "Essas famílias, normalmente, cuidam da parte administrativa e econômica das cidades."
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
    descricao: "Um lugar onde os escombros de uma cidade esquecida, lotadas de arranha-céus e a simplicidade de casas de madeira são construídas como enfeites de árvores de Natal. Lar de Vespera.",
    lore: [
      {
        icon: "◈",
        texto: "Uma vez, a sociedade do reino já foi altamente evoluída e tecnológica, contudo, após uma extinção em massa, a natureza e a vida animal invadiram as grandes cidades. Aqueles que sobreviveram utilizaram o que havia restado dos grandes arranha-céus para construir suas casas."
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
        texto: "Floriveranos são criaturas com chifres e neles flores, frutos ou ervas crescem. Quanto mais o ser tem, mais poderoso ele é. Além disso, muitos usam seus próprios frutos para a alquimia local. Curiosamente, Vespera tem os chifres nus, parte pela sua idade avançada. É a Pigmentadora mais velha de sua geração."
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
    descricao: "Um Reino escondido dentro de montanhas e casas feitas por gemas coloridas e cavernas. Lá a noite e o dia não existem. Lar de Pietra.",
    lore: [
      {
        icon: "◈",
        texto: "Em um reino onde o céu não existe, Itaveah se esconde no interior de montanhas, colinas e morros. O brilho das gemas incrustadas nas paredes ocas, que servem tanto de matéria-prima quanto de iluminação para tudo o que foi construído."
      },
      {
        icon: "◈",
        texto: "As cidades não possuem chão. As casas luminosas se erguem in níveis suspensos, moldadas na rocha e conectadas por pontes naturais que serpenteiam entre os abismos colossais. Como em Florivena, seus habitantes aprenderam a aproveitar cada curva, fenda e parede do ambiente, transformando o próprio relevo em lar."
      },
      {
        icon: "◈",
        texto: "Abaixo dessas camadas de moradia, há um vasto lago subterrâneo. É dele que emana uma luz constante, responsável por iluminar parte do reino. É nele que vem a principal fonte de nutriente para os Itaveahnos: os peixes adaptados à escuridão e os corais que os permitem respirar."
      },
      {
        icon: "◈",
        texto: "Cortando as cidades, um sistema de trens percorre túneis esculpidos na pedra — o Critenis — conectando regiões distantes e mantendo o fluxo de vida entre os níveis e regiões, pois, em geral, é um reino extenso."
      },
      {
        icon: "◈",
        texto: "Na superfície de Itaveah, erguem-se três imensas florestas de cristais. Nas suas formações reluzentes habitam criaturas pré-históricas (parecidos com os dinossauros da terra), capazes de destruir qualquer itaveahno que se aventure além dos limites seguros. Há rumores de que o núcleo do reino esteja protegido nessas florestas perigosas — um segredo guardado onde ninguém conseguiu chegar, até aparecer Dimara, irmã de Tainá."
      },
      {
        icon: "◈",
        texto: "Os Itaveahnos são seres onde as gemas fazem parte de seu ser, onde suas cores brilham em sua derme. Como se, de certa forma, eles fizessem parte daquelas montanhas ocas."
      },
      {
        icon: "◈",
        texto: "Quando morrem, eles endurecem, virando, de fato, uma alegoria da própria cidade."
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
    descricao: "Um reino medieval, onde o sol não é permitido. Lugares de castelos, torres e muralhas. Onde seus habitantes brincam com a morte e os espíritos. Lar de Tenebra.",
    lore: [
      {
        icon: "◈",
        texto: "Caligobris é frequentemente descrita por Tenebra como um reino cruel e horrendo, onde a beleza não ousa existir. Ainda assim, essa visão não é unânime, especialmente quando observada pela perspectiva da Pigmentadora Preta, que, em seu desprezo pelo próprio lar, talvez enxergue apenas aquilo que deseja odiar."
      },
      {
        icon: "◈",
        texto: "De fato, Caligobris assusta. Mas até o medo carrega sua própria forma de beleza."
      },
      {
        icon: "◈",
        texto: "Com apenas dois meses de sol por ano, o reino vive submerso em uma noite quase eterna. Árvores retorcidas oferecem frutos tão perigosos quanto sedutores. As cidades, escondidas dentro de muralhas destruídas há eras, sobrevivem em dificuldade alucinante, embora dentro da “infelicidade” haja a risada genuína. Casas de madeira rangem sob o vento constante, e ruas estreitas são cortadas por uma água escura e oleosa."
      },
      {
        icon: "◈",
        texto: "Os Caligobris dominam as artes do oculto. Brincam com a morte como quem desafia o inevitável — e, por isso, frequentemente atraem o olhar de Celestria."
      },
      {
        icon: "◈",
        texto: "Não há um poder central que governe o reino. Em seu lugar, pequenos grupos de representantes se estabeleceram em antigos castelos abandonados, reivindicando autoridade. E, assim como seu povo, as criaturas que habitam as florestas são igualmente ameaçadoras. Em Caligobris, os fracos não sobrevivem, eles são lembrados apenas pelos entes queridos, como o filho e o marido de Tenebra."
      }
    ]
  },
  {
    nome: "Nuvens Exaltadas",
    sigla: "N",
    gema: "Gema Cinza",
    rc: "#d7ccc8",
    rcBg: "#0a0a0a",
    pigmentadora: "Lyra",
    num: "08",
    delay: "0.42s",
    descricao: "Um reino feito por ilhotas que flutuam no céu. Conectadas por pontes e cachoeiras. Lá, muitos conseguem se transformar em diferentes animais, exceto por Lyra, seu lugar de morada.",
    lore: [
      {
        icon: "◈",
        texto: "Embora não explorada por Tainá, Nuvens Exaltadas despertou o interesse da Pigmentadora do Vazio. Trata-se de um reino formado por ilhas suspensas, cobertas por natureza exuberante, interligadas por pontes e cachoeiras com correntes calmas o suficiente para os seres poderem usá-las como transporte."
      },
      {
        icon: "◈",
        texto: "Nuvens Exaltadas não é um lugar populoso. Em cada pequena ilha, há apenas um punhado de casas com telhados curvos em tons avermelhados e dourados, refletindo uma arquitetura tranquila e harmoniosa com o ambiente."
      },
      {
        icon: "◈",
        texto: "Na ilhota mais elevada, erguem-se formações rochosas esculpidas com cabeças de animais. São eles: Um felino e Um lobo. É nesse local sagrado que os oráculos regem a sociedade, guiando o destino do povo através de presságios religiosos."
      },
      {
        icon: "◈",
        texto: "Os habitantes, conhecidos como Exaltantes, vivem conectados à rica natureza do reino. Organizam-se in tribos ou vilas e seguem um sistema de subsistência baseado na codependência, onde cada indivíduo desempenha um papel essencial para o equilíbrio coletivo. Funciona, até certo ponto, já que a individualidade muitas vezes é deturpada."
      },
      {
        icon: "◈",
        texto: "Não há animais em Nuvens Exaltadas, todos os seres são veganos. Embora, num passado longevo, houvesse episódios isolados de canibalismo."
      },
      {
        icon: "◈",
        texto: "O reino abriga duas grandes cidades: uma habitada por aqueles de traços felinos, outra por indivíduos de natureza canina. A mistura entre os dois povos é estritamente proibida, pois, além de trazer mutações negativas, a política seguida por cada um é totalmente diferente."
      },
      {
        icon: "◈",
        texto: "Apesar de viverem sob uma paz aparente há muitos anos, felinos e caninos carregam um conflito ancestral, um equilíbrio frágil que pode se romper a qualquer momento."
      },
      {
        icon: "◈",
        texto: "Nem mesmo eles sabem ao certo por que esse conflito existe."
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
    descricao: "Um reino híbrido, onde parte dos moradores moram debaixo dos oceanos e outros na terra firme. Lugares de grandes artistas. Nanima vem de lá. Eles têm a capacidade de criar caldas aquáticas.",
    lore: [
      {
        icon: "◈",
        texto: "Aqualina é um reino parcialmente aquático, sendo assim, os seres que vivem lá podem transformar suas caudas aquáticas em pernas."
      },
      {
        icon: "◈",
        texto: "Um povo que não aprecia guerra ou violência. Resolvem tudo na base do diálogo e da compreensão do outro."
      },
      {
        icon: "◈",
        texto: "Os moradores de Aqualina são grandes artistas e intelectuais, onde pintam delicadas ilustrações em grandes conchas abertas e descobrem curas para as doenças que circulam no reino. A paz é tão “excessiva” que os seres vivem em uma ociosidade angustiante. Aqueles que tentam mudar alguma coisa, são presos nas cavernas subaquáticas. Nanima foi um desses seres. Princesa do reino. Antes, porém, que pudesse ser presa, Celestria a chamou para ser Pigmentadora."
      }
    ]
  },
  {
    nome: "Cidade Celestial",
    sigla: "C",
    gema: "Gema Dourada",
    rc: "#ffd700",
    rcBg: "#1a1400",
    pigmentadora: "Celestria",
    num: "10",
    delay: "0.54s",
    descricao: "Onde as Pigmentadoras vivem junto à Celestria. Lá a grande Árvore reside, assim como os moradores selecionados dos outros reinos. Um local em que a harmonia da fauna e da flora e da mistura da arquitetura são permitidas.",
    lore: [
      {
        icon: "◈",
        texto: "A cidade perfeita cresce sob a Grande Árvore Celestial. Embora pequena em extensão e controlada para que tudo aconteça harmoniosamente, ela é um microcosmo, abrigando em si a essência e os biomas dos nove reinos."
      },
      {
        icon: "◈",
        texto: "Formando nove distritos, cada um deles mantém a natureza, os animais, a arquitetura e a cultura dos reinos. Os distritos se organizam em um gracioso leque a partir do centro, onde a arquitetura reflete o gosto etéreo de Celestria. Apesar de todos os reinos presentes, é a lei da divindade que predomina."
      },
      {
        icon: "◈",
        texto: "Na cidade Celestial, a vida possui um propósito compartilhado: cada habitante, à sua maneira, dedica-se à manutenção e ao equilíbrio da Grande Árvore. Em troca, recebem a Bênção de Celestria. Este dom não apenas os torna resistentes às variações climáticas de cada bioma, mas lhes dá a oportunidade da compreensão do dialeto de cada reino, fazendo com que todos se compreendam mutuamente."
      },
      {
        icon: "◈",
        texto: "É, em todos os sentidos, a cidade perfeita."
      }
    ]
  }
];

const data = JSON.parse(fs.readFileSync('public/content.json', 'utf8'));
data.membros.blog = newBlog;
data.membros.pigmentadoras = newPigmentadoras;
data.membros.reinos = newReinos;

fs.writeFileSync('public/content.json', JSON.stringify(data, null, 2), 'utf8');
console.log('content.json updated successfully with exact author texts for Pigmentadoras and Reinos (including Cidade Celestial).');
