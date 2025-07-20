import { Heart, ExternalLink, Plus } from 'lucide-react';
import { useState } from 'react';

const santos = [
  {
    nome: "São Francisco de Assis",
    descricao: "Fundador da Ordem Franciscana, São Francisco é conhecido por sua vida de pobreza e dedicação aos mais necessitados. Ele recebeu os estigmas de Cristo e é considerado o padroeiro da ecologia.",
    tags: ["Pobreza", "Ecologia", "Estigmas"],
    festa: "4 de outubro"
  },
  {
    nome: "Santa Teresinha do Menino Jesus",
    descricao: "Conhecida pelo 'Pequeno Caminho', Santa Teresinha ensinou que a santidade está ao alcance de todos através de pequenos atos de amor. É Doutora da Igreja e padroeira das missões.",
    tags: ["Pequeno Caminho", "Missões", "Doutora da Igreja"],
    festa: "1º de outubro"
  },
  {
    nome: "São Padre Pio",
    descricao: "Místico italiano que recebeu os estigmas por 50 anos. Era conhecido por seus dons sobrenaturais, incluindo bilocação e curas milagrosas. Sua devoção ao sofrimento de Cristo o tornou um santo muito venerado.",
    tags: ["Estigmas", "Bilocação", "Curas Milagrosas"],
    festa: "23 de setembro"
  },
  {
    nome: "Santa Teresa d'Ávila",
    descricao: "Mística espanhola, reformadora da Ordem Carmelita e Doutora da Igreja. Conhecida por suas visões místicas e seus escritos sobre oração mental.",
    tags: ["Mística", "Carmelita", "Oração"],
    festa: "15 de outubro"
  },
  {
    nome: "São João da Cruz",
    descricao: "Místico espanhol, poeta e Doutor da Igreja. Companheiro de Santa Teresa na reforma carmelita. Autor de 'Noite Escura da Alma'.",
    tags: ["Místico", "Poeta", "Noite Escura"],
    festa: "14 de dezembro"
  },
  {
    nome: "Santo Agostinho",
    descricao: "Bispo de Hipona, filósofo e teólogo. Uma das figuras mais importantes da Igreja primitiva. Autor de 'Confissões' e 'A Cidade de Deus'.",
    tags: ["Filosofia", "Teologia", "Confissões"],
    festa: "28 de agosto"
  },
  {
    nome: "São Tomás de Aquino",
    descricao: "Doutor Angélico, filósofo e teólogo dominicano. Autor da 'Suma Teológica', uma das obras mais influentes da filosofia cristã.",
    tags: ["Filosofia", "Suma Teológica", "Dominicano"],
    festa: "28 de janeiro"
  },
  {
    nome: "Santa Catarina de Siena",
    descricao: "Mística italiana, terciária dominicana e Doutora da Igreja. Influenciou o Papa a retornar de Avignon para Roma.",
    tags: ["Mística", "Política Papal", "Dominicana"],
    festa: "29 de abril"
  },
  {
    nome: "São Bento de Núrsia",
    descricao: "Patriarca do monaquismo ocidental. Fundador da Ordem Beneditina e autor da Regra de São Bento. Padroeiro da Europa.",
    tags: ["Monaquismo", "Beneditino", "Europa"],
    festa: "11 de julho"
  },
  {
    nome: "São Jerônimo",
    descricao: "Tradutor da Bíblia para o latim (Vulgata). Eremita, estudioso e Doutor da Igreja. Conhecido por sua erudição e temperamento ardente.",
    tags: ["Bíblia", "Vulgata", "Erudição"],
    festa: "30 de setembro"
  },
  {
    nome: "Santa Mônica",
    descricao: "Mãe de Santo Agostinho. Modelo de perseverança na oração pelos filhos. Suas lágrimas e orações levaram à conversão de seu filho.",
    tags: ["Maternidade", "Oração", "Perseverança"],
    festa: "27 de agosto"
  },
  {
    nome: "São José",
    descricao: "Esposo de Maria e pai adotivo de Jesus. Padroeiro da Igreja Universal, dos trabalhadores e da boa morte.",
    tags: ["Família Sagrada", "Trabalho", "Proteção"],
    festa: "19 de março"
  },
  {
    nome: "Santa Rita de Cássia",
    descricao: "Santa dos casos impossíveis. Esposa, mãe, viúva e freira agostiniana. Conhecida por sua paciência e devoção aos espinhos de Cristo.",
    tags: ["Casos Impossíveis", "Espinhos", "Agostiniana"],
    festa: "22 de maio"
  },
  {
    nome: "São João Bosco",
    descricao: "Educador italiano, fundador dos Salesianos. Dedicou sua vida à educação de jovens pobres. Conhecido por seus sonhos proféticos.",
    tags: ["Educação", "Jovens", "Salesianos"],
    festa: "31 de janeiro"
  },
  {
    nome: "Santa Bernadette Soubirous",
    descricao: "Vidente de Lourdes. Aos 14 anos, teve 18 aparições de Nossa Senhora. Tornou-se freira e foi canonizada em 1933.",
    tags: ["Lourdes", "Aparições", "Juventude"],
    festa: "16 de abril"
  },
  {
    nome: "São Vicente de Paulo",
    descricao: "Padre francês dedicado aos pobres. Fundador das Filhas da Caridade. Organizou a caridade de forma sistemática.",
    tags: ["Caridade", "Pobres", "Organização"],
    festa: "27 de setembro"
  },
  {
    nome: "Santa Faustina Kowalska",
    descricao: "Freira polaca que recebeu visões de Jesus misericordioso. Promoveu a devoção à Divina Misericórdia.",
    tags: ["Misericórdia", "Visões", "Polonia"],
    festa: "5 de outubro"
  },
  {
    nome: "São Maximiliano Kolbe",
    descricao: "Frade franciscano polaco que ofereceu sua vida por um pai de família em Auschwitz. Mártir da caridade.",
    tags: ["Martírio", "Auschwitz", "Caridade"],
    festa: "14 de agosto"
  },
  {
    nome: "Santa Teresa de Calcutá",
    descricao: "Missionária da Caridade que dedicou sua vida aos mais pobres entre os pobres em Calcutá, Índia.",
    tags: ["Pobres", "Calcutá", "Missionária"],
    festa: "5 de setembro"
  },
  {
    nome: "São Francisco Xavier",
    descricao: "Jesuíta espanhol, grande missionário do Oriente. Evangelizou na Índia, Japão e outras regiões da Ásia.",
    tags: ["Missões", "Ásia", "Jesuíta"],
    festa: "3 de dezembro"
  },
  {
    nome: "Santo Inácio de Loyola",
    descricao: "Fundador da Companhia de Jesus (Jesuítas). Desenvolveu os Exercícios Espirituais e promoveu a educação.",
    tags: ["Jesuítas", "Exercícios Espirituais", "Educação"],
    festa: "31 de julho"
  },
  {
    nome: "São Luís Gonzaga",
    descricao: "Jovem jesuíta italiano, padroeiro da juventude. Morreu aos 23 anos cuidando de vítimas da peste.",
    tags: ["Juventude", "Pureza", "Peste"],
    festa: "21 de junho"
  },
  {
    nome: "Santa Cecília",
    descricao: "Mártir romana do século III, padroeira dos músicos. Cantava para Deus mesmo durante seu martírio.",
    tags: ["Música", "Martírio", "Roma"],
    festa: "22 de novembro"
  },
  {
    nome: "São Sebastião",
    descricao: "Soldado romano martirizado por Diocleciano. Invocado contra a peste e padroeiro dos atletas.",
    tags: ["Soldado", "Peste", "Atletas"],
    festa: "20 de janeiro"
  },
  {
    nome: "Santa Lucia",
    descricao: "Mártir siciliana do século IV. Padroeira da visão e invocada contra doenças dos olhos.",
    tags: ["Visão", "Olhos", "Sicília"],
    festa: "13 de dezembro"
  },
  {
    nome: "São Pedro",
    descricao: "Primeiro Papa, pescador chamado por Jesus. Recebeu as chaves do Reino dos Céus.",
    tags: ["Papa", "Pescador", "Chaves"],
    festa: "29 de junho"
  },
  {
    nome: "São Paulo",
    descricao: "Apóstolo dos gentios, grande missionário e escritor de várias cartas do Novo Testamento.",
    tags: ["Apóstolo", "Missões", "Cartas"],
    festa: "29 de junho"
  },
  {
    nome: "São João Evangelista",
    descricao: "O discípulo amado, autor do quarto Evangelho e do livro do Apocalipse.",
    tags: ["Evangelho", "Apocalipse", "Discípulo"],
    festa: "27 de dezembro"
  },
  {
    nome: "Santa Maria Madalena",
    descricao: "Seguidora de Jesus, primeira testemunha da Ressurreição. Chamada de 'Apóstola dos Apóstolos'.",
    tags: ["Ressurreição", "Testemunha", "Apóstola"],
    festa: "22 de julho"
  },
  {
    nome: "São João Batista",
    descricao: "Precursor de Jesus, batizou-o no Rio Jordão. Último profeta do Antigo Testamento.",
    tags: ["Batismo", "Precursor", "Profeta"],
    festa: "24 de junho"
  },
  {
    nome: "Santo Antônio de Pádua",
    descricao: "Franciscano português conhecido como o santo dos milagres. Grande pregador e doutor da Igreja, é invocado para encontrar objetos perdidos.",
    tags: ["Milagres", "Pregação", "Perdidos"],
    festa: "13 de junho"
  },
  {
    nome: "Santa Clara de Assis",
    descricao: "Fundadora das Clarissas, seguiu São Francisco na vida de pobreza radical. É padroeira da televisão.",
    tags: ["Clarissas", "Pobreza", "Televisão"],
    festa: "11 de agosto"
  },
  {
    nome: "São Bento Menni",
    descricao: "Religioso hospitalário espanhol que dedicou sua vida ao cuidado dos doentes mentais.",
    tags: ["Hospitalário", "Doentes", "Mental"],
    festa: "24 de abril"
  },
  {
    nome: "Santa Bernadette Soubirous",
    descricao: "Vidente de Lourdes que teve 18 aparições de Nossa Senhora. Foi canonizada em 1933.",
    tags: ["Lourdes", "Aparições", "Vidente"],
    festa: "16 de abril"
  },
  {
    nome: "São Carlos Borromeu",
    descricao: "Cardeal milanês que promoveu a reforma da Igreja no Concílio de Trento.",
    tags: ["Cardeal", "Reforma", "Trento"],
    festa: "4 de novembro"
  },
  {
    nome: "Santa Catarina Labouré",
    descricao: "Freira francesa que recebeu a visão da Medalha Milagrosa de Nossa Senhora.",
    tags: ["Medalha", "Milagrosa", "Visão"],
    festa: "28 de novembro"
  },
  {
    nome: "São Cristóvão",
    descricao: "Mártir do século III, padroeiro dos viajantes e motoristas.",
    tags: ["Mártir", "Viajantes", "Motoristas"],
    festa: "25 de julho"
  },
  {
    nome: "São Domingos de Gusmão",
    descricao: "Fundador da Ordem dos Pregadores (Dominicanos) e do Santo Rosário.",
    tags: ["Dominicanos", "Rosário", "Pregadores"],
    festa: "8 de agosto"
  },
  {
    nome: "Santa Edite Stein",
    descricao: "Filósofa judia convertida ao catolicismo, morreu em Auschwitz. Co-padroeira da Europa.",
    tags: ["Filósofa", "Conversão", "Auschwitz"],
    festa: "9 de agosto"
  },
  {
    nome: "São Francisco Xavier",
    descricao: "Jesuíta missionário que evangelizou a Ásia. Padroeiro das missões orientais.",
    tags: ["Jesuíta", "Ásia", "Missões"],
    festa: "3 de dezembro"
  },
  {
    nome: "Santa Gema Galgani",
    descricao: "Mística italiana que recebeu os estigmas e teve visões de Jesus e Maria.",
    tags: ["Mística", "Estigmas", "Visões"],
    festa: "11 de abril"
  },
  {
    nome: "São Gregório Magno",
    descricao: "Papa e Doutor da Igreja, organizou o canto gregoriano e evangelizou a Inglaterra.",
    tags: ["Papa", "Gregoriano", "Inglaterra"],
    festa: "3 de setembro"
  },
  {
    nome: "Santa Helena",
    descricao: "Mãe do imperador Constantino, encontrou a verdadeira cruz de Cristo em Jerusalém.",
    tags: ["Imperatriz", "Cruz", "Jerusalém"],
    festa: "18 de agosto"
  },
  {
    nome: "Santo Inácio de Antioquia",
    descricao: "Bispo mártir do século II, discípulo do apóstolo João.",
    tags: ["Bispo", "Mártir", "Discípulo"],
    festa: "17 de outubro"
  },
  {
    nome: "São João Crisóstomo",
    descricao: "Arcebispo de Constantinopla conhecido como 'Boca de Ouro' por sua eloquência.",
    tags: ["Arcebispo", "Eloquência", "Constantinopla"],
    festa: "13 de setembro"
  },
  {
    nome: "Santa Joana d'Arc",
    descricao: "Donzela de Orléans que libertou a França dos ingleses. Mártir e padroeira da França.",
    tags: ["França", "Guerra", "Mártir"],
    festa: "30 de maio"
  },
  {
    nome: "São José de Cupertino",
    descricao: "Franciscano conhecido por suas levitações durante a oração. Padroeiro dos aviadores.",
    tags: ["Levitação", "Aviadores", "Oração"],
    festa: "18 de setembro"
  },
  {
    nome: "Santa Lúcia de Siracusa",
    descricao: "Mártir siciliana do século IV, padroeira da visão e dos cegos.",
    tags: ["Mártir", "Visão", "Cegos"],
    festa: "13 de dezembro"
  },
  {
    nome: "São Luís Rei de França",
    descricao: "Rei francês que promoveu a justiça e participou das Cruzadas.",
    tags: ["Rei", "Justiça", "Cruzadas"],
    festa: "25 de agosto"
  },
  {
    nome: "Santa Margarida Maria Alacoque",
    descricao: "Religiosa francesa que difundiu a devoção ao Sagrado Coração de Jesus.",
    tags: ["Sagrado Coração", "Devoção", "Religiosa"],
    festa: "16 de outubro"
  },
  {
    nome: "São Martinho de Tours",
    descricao: "Soldado romano que se converteu e se tornou bispo. Dividiu sua capa com um mendigo.",
    tags: ["Soldado", "Bispo", "Caridade"],
    festa: "11 de novembro"
  },
  {
    nome: "São Nicolau de Mira",
    descricao: "Bispo conhecido por sua caridade com as crianças. Inspirou a figura do Papai Noel.",
    tags: ["Bispo", "Crianças", "Caridade"],
    festa: "6 de dezembro"
  },
  {
    nome: "Santa Paulina do Coração Agonizante",
    descricao: "Primeira santa nascida no Brasil, fundou as Irmãzinhas da Imaculada Conceição.",
    tags: ["Brasil", "Fundadora", "Irmãzinhas"],
    festa: "9 de julho"
  },
  {
    nome: "São Pio de Pietrelcina (Padre Pio)",
    descricao: "Frade capuchinho que recebeu os estigmas e tinha dons sobrenaturais.",
    tags: ["Capuchinho", "Estigmas", "Dons"],
    festa: "23 de setembro"
  },
  {
    nome: "Santa Rosa de Lima",
    descricao: "Primeira santa canonizada das Américas, viveu como terciária dominicana no Peru.",
    tags: ["Américas", "Dominicana", "Peru"],
    festa: "23 de agosto"
  },
  {
    nome: "São Sebastião",
    descricao: "Soldado romano martirizado no século III. Padroeiro contra a peste.",
    tags: ["Soldado", "Mártir", "Peste"],
    festa: "20 de janeiro"
  },
  {
    nome: "Santa Teresa de Calcutá",
    descricao: "Missionária da Caridade que serviu aos pobres em Calcutá, Índia.",
    tags: ["Missionária", "Pobres", "Índia"],
    festa: "5 de setembro"
  },
  {
    nome: "São Vicente de Paulo",
    descricao: "Sacerdote francês que organizou obras de caridade. Fundador das Filhas da Caridade.",
    tags: ["Caridade", "Fundador", "França"],
    festa: "27 de setembro"
  },
  {
    nome: "Santo Afonso de Ligório",
    descricao: "Doutor da Igreja, fundador dos Redentoristas e patrono dos confessores.",
    tags: ["Doutor", "Redentoristas", "Confessores"],
    festa: "1º de agosto"
  },
  {
    nome: "Santa Águeda",
    descricao: "Mártir siciliana do século III, padroeira contra incêndios e terremotos.",
    tags: ["Mártir", "Incêndios", "Terremotos"],
    festa: "5 de fevereiro"
  },
  {
    nome: "Santo Alberto Magno",
    descricao: "Dominicano alemão, filósofo e cientista. Mestre de São Tomás de Aquino.",
    tags: ["Dominicano", "Filósofo", "Cientista"],
    festa: "15 de novembro"
  },
  {
    nome: "Santo Alexandre Sauli",
    descricao: "Bispo barnabita que reformou sua diocese na Córsega.",
    tags: ["Bispo", "Barnabita", "Córsega"],
    festa: "11 de outubro"
  },
  {
    nome: "Santo Ambrósio de Milão",
    descricao: "Bispo de Milão e Doutor da Igreja. Converteu Santo Agostinho.",
    tags: ["Bispo", "Doutor", "Milão"],
    festa: "7 de dezembro"
  },
  {
    nome: "Santo André Apóstolo",
    descricao: "Apóstolo de Jesus, irmão de São Pedro. Padroeiro da Escócia.",
    tags: ["Apóstolo", "Pedro", "Escócia"],
    festa: "30 de novembro"
  },
  {
    nome: "Santa Ângela de Mérici",
    descricao: "Fundadora das Ursulinas, primeira congregação feminina dedicada ao ensino.",
    tags: ["Ursulinas", "Ensino", "Congregação"],
    festa: "27 de janeiro"
  },
  {
    nome: "Santo Anselmo de Cantuária",
    descricao: "Arcebispo de Cantuária e Doutor da Igreja. Desenvolveu o argumento ontológico.",
    tags: ["Arcebispo", "Doutor", "Filosofia"],
    festa: "21 de abril"
  },
  {
    nome: "Santo Antônio de Pádua",
    descricao: "Franciscano português, doutor da Igreja e padroeiro dos objetos perdidos.",
    tags: ["Franciscano", "Doutor", "Perdidos"],
    festa: "13 de junho"
  },
  {
    nome: "São Bartolomeu Apóstolo",
    descricao: "Apóstolo de Jesus que evangelizou a Armênia onde foi martirizado.",
    tags: ["Apóstolo", "Armênia", "Mártir"],
    festa: "24 de agosto"
  },
  {
    nome: "São Basílio Magno",
    descricao: "Bispo de Cesareia e Doutor da Igreja Oriental. Irmão de São Gregório de Nissa.",
    tags: ["Bispo", "Oriental", "Cesareia"],
    festa: "2 de janeiro"
  },
  {
    nome: "Santo Benedito de São Filadelfo",
    descricao: "Franciscano negro nascido na Sicília, conhecido como 'o Santo Negro'.",
    tags: ["Franciscano", "Negro", "Sicília"],
    festa: "4 de abril"
  },
  {
    nome: "São Bernardino de Siena",
    descricao: "Franciscano italiano que promoveu a devoção ao Nome de Jesus.",
    tags: ["Franciscano", "Nome", "Jesus"],
    festa: "20 de maio"
  },
  {
    nome: "São Brás",
    descricao: "Bispo mártir do século IV, padroeiro da garganta e dos animais.",
    tags: ["Bispo", "Garganta", "Animais"],
    festa: "3 de fevereiro"
  },
  {
    nome: "São Bruno",
    descricao: "Fundador da Ordem dos Cartuxos, vida contemplativa no silêncio.",
    tags: ["Cartuxos", "Contemplativo", "Silêncio"],
    festa: "6 de outubro"
  },
  {
    nome: "São Camilo de Lellis",
    descricao: "Fundador dos Camilos, padroeiro dos enfermeiros e hospitais.",
    tags: ["Camilos", "Enfermeiros", "Hospitais"],
    festa: "14 de julho"
  },
  {
    nome: "Santa Catarina de Alexandria",
    descricao: "Mártir do século IV, padroeira dos filósofos e estudantes.",
    tags: ["Mártir", "Filósofos", "Estudantes"],
    festa: "25 de novembro"
  },
  {
    nome: "São Charbel Makhlouf",
    descricao: "Eremita libanês maronita conhecido por seus milagres após a morte.",
    tags: ["Eremita", "Libanês", "Milagres"],
    festa: "24 de julho"
  },
  {
    nome: "Santa Cita",
    descricao: "Mártir romana do século III, padroeira das domésticas.",
    tags: ["Mártir", "Romana", "Domésticas"],
    festa: "15 de maio"
  },
  {
    nome: "São Ciríaco",
    descricao: "Diácono mártir romano do século IV.",
    tags: ["Diácono", "Mártir", "Romano"],
    festa: "8 de agosto"
  },
  {
    nome: "São Clemente Romano",
    descricao: "Terceiro sucessor de São Pedro, Papa e mártir.",
    tags: ["Papa", "Sucessor", "Mártir"],
    festa: "23 de novembro"
  },
  {
    nome: "Santa Columba",
    descricao: "Virgem e mártir espanhola do século IX.",
    tags: ["Virgem", "Mártir", "Espanhola"],
    festa: "17 de setembro"
  },
  {
    nome: "São Cosme e São Damião",
    descricao: "Irmãos médicos mártires, padroeiros dos médicos e cirurgiões.",
    tags: ["Médicos", "Irmãos", "Cirurgiões"],
    festa: "26 de setembro"
  },
  {
    nome: "São Davi",
    descricao: "Rei de Israel, autor de muitos salmos, ancestral de Jesus.",
    tags: ["Rei", "Salmos", "Israel"],
    festa: "29 de dezembro"
  },
  {
    nome: "São Dionísio",
    descricao: "Primeiro bispo de Paris, mártir e padroeiro da França.",
    tags: ["Bispo", "Paris", "França"],
    festa: "9 de outubro"
  },
  {
    nome: "Santo Estêvão",
    descricao: "Primeiro mártir cristão, um dos sete diáconos escolhidos pelos apóstolos.",
    tags: ["Primeiro", "Mártir", "Diácono"],
    festa: "26 de dezembro"
  },
  {
    nome: "São Expedito",
    descricao: "Soldado romano mártir, invocado para causas urgentes.",
    tags: ["Soldado", "Urgentes", "Mártir"],
    festa: "19 de abril"
  },
  {
    nome: "São Felipe Apóstolo",
    descricao: "Apóstolo de Jesus que evangelizou a Frigia.",
    tags: ["Apóstolo", "Frigia", "Evangelização"],
    festa: "3 de maio"
  },
  {
    nome: "São Felipe Neri",
    descricao: "Fundador do Oratório, conhecido como o 'Santo da Alegria'.",
    tags: ["Oratório", "Alegria", "Fundador"],
    festa: "26 de maio"
  },
  {
    nome: "Santa Filomena",
    descricao: "Virgem e mártir, muito venerada no século XIX.",
    tags: ["Virgem", "Mártir", "Venerada"],
    festa: "11 de agosto"
  },
  {
    nome: "São Frei Galvão",
    descricao: "Primeiro santo nascido no Brasil, franciscano conhecido pelas 'pílulas'.",
    tags: ["Brasil", "Franciscano", "Pílulas"],
    festa: "25 de outubro"
  },
  {
    nome: "São Gabriel Arcanjo",
    descricao: "Arcanjo mensageiro que anunciou a Encarnação à Maria.",
    tags: ["Arcanjo", "Mensageiro", "Encarnação"],
    festa: "29 de setembro"
  },
  {
    nome: "Santa Genoveva",
    descricao: "Padroeira de Paris, salvou a cidade dos hunos pela oração.",
    tags: ["Paris", "Hunos", "Oração"],
    festa: "3 de janeiro"
  },
  {
    nome: "São Geraldo Majella",
    descricao: "Irmão redentorista conhecido por seus milagres, padroeiro das mães.",
    tags: ["Redentorista", "Milagres", "Mães"],
    festa: "16 de outubro"
  },
  {
    nome: "Santo Hilário de Poitiers",
    descricao: "Bispo e Doutor da Igreja, combateu o arianismo na Gália.",
    tags: ["Bispo", "Doutor", "Arianismo"],
    festa: "13 de janeiro"
  },
  {
    nome: "Santo Hipólito",
    descricao: "Presbítero e mártir romano do século III.",
    tags: ["Presbítero", "Mártir", "Romano"],
    festa: "13 de agosto"
  },
  {
    nome: "São Isidoro Lavrador",
    descricao: "Camponês espanhol padroeiro dos agricultores e trabalhadores rurais.",
    tags: ["Camponês", "Agricultores", "Rural"],
    festa: "15 de maio"
  },
  {
    nome: "São Ivo",
    descricao: "Advogado bretão padroeiro dos juristas e órfãos.",
    tags: ["Advogado", "Juristas", "Órfãos"],
    festa: "19 de maio"
  },
  {
    nome: "São Januário",
    descricao: "Bispo mártir de Nápoles, famoso pelo milagre do sangue que se liquefaz.",
    tags: ["Bispo", "Nápoles", "Sangue"],
    festa: "19 de setembro"
  },
  {
    nome: "São João de Deus",
    descricao: "Fundador da Ordem Hospitalária, padroeiro dos hospitais e enfermeiros.",
    tags: ["Hospitalária", "Hospitais", "Enfermeiros"],
    festa: "8 de março"
  },
  {
    nome: "São João Nepomuceno",
    descricao: "Mártir tcheco padroeiro do sigilo da confissão e das pontes.",
    tags: ["Mártir", "Confissão", "Pontes"],
    festa: "16 de maio"
  },
  {
    nome: "São Joaquim",
    descricao: "Pai de Maria Santíssima e avô de Jesus, padroeiro dos avós.",
    tags: ["Pai", "Maria", "Avós"],
    festa: "26 de julho"
  },
  {
    nome: "Santa Josefina Bakhita",
    descricao: "Ex-escrava sudanesa que se tornou religiosa na Itália.",
    tags: ["Escrava", "Sudanesa", "Religiosa"],
    festa: "8 de fevereiro"
  },
  {
    nome: "São Judas Tadeu",
    descricao: "Apóstolo invocado em causas impossíveis e desesperadas.",
    tags: ["Apóstolo", "Impossíveis", "Desesperadas"],
    festa: "28 de outubro"
  },
  {
    nome: "Santa Juliana",
    descricao: "Mártir de Nicomédia do século IV.",
    tags: ["Mártir", "Nicomédia", "Século IV"],
    festa: "16 de fevereiro"
  },
  {
    nome: "São Justino",
    descricao: "Filósofo e mártir, um dos primeiros apologistas cristãos.",
    tags: ["Filósofo", "Mártir", "Apologista"],
    festa: "1º de junho"
  },
  {
    nome: "Santa Kateri Tekakwitha",
    descricao: "Primeira nativa americana canonizada, conhecida como 'Lírio dos Mohawks'.",
    tags: ["Nativa", "Americana", "Mohawks"],
    festa: "14 de julho"
  },
  {
    nome: "São Leão Magno",
    descricao: "Papa e Doutor da Chiesa que deteve Átila nas portas de Roma.",
    tags: ["Papa", "Doutor", "Átila"],
    festa: "10 de novembro"
  },
  {
    nome: "São Leonardo de Porto Maurício",
    descricao: "Franciscano italiano que propagou a Via Sacra.",
    tags: ["Franciscano", "Via Sacra", "Italiano"],
    festa: "26 de novembro"
  },
  {
    nome: "Santa Luísa de Marillac",
    descricao: "Co-fundadora das Filhas da Caridade com São Vicente de Paulo.",
    tags: ["Co-fundadora", "Caridade", "Vicente"],
    festa: "15 de março"
  },
  {
    nome: "São Marcos Evangelista",
    descricao: "Evangelista autor do segundo Evangelho, discípulo de São Pedro.",
    tags: ["Evangelista", "Evangelho", "Pedro"],
    festa: "25 de abril"
  },
  {
    nome: "Santa Maria Goretti",
    descricao: "Mártir da pureza, morreu aos 11 anos defendendo sua castidade.",
    tags: ["Mártir", "Pureza", "Castidade"],
    festa: "6 de julho"
  },
  {
    nome: "São Mateus Evangelista",
    descricao: "Apóstolo e evangelista, antigo cobrador de impostos.",
    tags: ["Apóstolo", "Evangelista", "Impostos"],
    festa: "21 de setembro"
  },
  {
    nome: "São Miguel Arcanjo",
    descricao: "Arcanjo guerreiro, protetor da Igreja e vencedor de Satanás.",
    tags: ["Arcanjo", "Guerreiro", "Igreja"],
    festa: "29 de setembro"
  },
  {
    nome: "Santa Mônica",
    descricao: "Mãe de Santo Agostinho, modelo de perseverança na oração pelos filhos.",
    tags: ["Mãe", "Agostinho", "Perseverança"],
    festa: "27 de agosto"
  },
  {
    nome: "São Norberto",
    descricao: "Fundador dos Premonstratenses, arcebispo de Magdeburgo.",
    tags: ["Premonstratenses", "Arcebispo", "Magdeburgo"],
    festa: "6 de junho"
  },
  {
    nome: "Nossa Senhora das Graças",
    descricao: "Título mariano baseado nas aparições a Santa Catarina Labouré.",
    tags: ["Mariano", "Aparições", "Graças"],
    festa: "27 de novembro"
  },
  {
    nome: "São Patrício",
    descricao: "Evangelizador da Irlanda, padroeiro dos irlandeses.",
    tags: ["Irlanda", "Evangelizador", "Irlandeses"],
    festa: "17 de março"
  },
  {
    nome: "São Paulo Apóstolo",
    descricao: "Apóstolo dos gentios, grande missionário e escritor do Novo Testamento.",
    tags: ["Apóstolo", "Gentios", "Missionário"],
    festa: "29 de junho"
  },
  {
    nome: "São Pedro Apóstolo",
    descricao: "Primeiro Papa, pescador chamado por Jesus, recebeu as chaves do Reino.",
    tags: ["Papa", "Pescador", "Chaves"],
    festa: "29 de junho"
  },
  {
    nome: "Santa Perpétua",
    descricao: "Mártir cartaginesa do século III, morreu no anfiteatro.",
    tags: ["Mártir", "Cartaginesa", "Anfiteatro"],
    festa: "7 de março"
  },
  {
    nome: "São Rafael Arcanjo",
    descricao: "Arcanjo curador, guia de Tobias, padroeiro dos médicos.",
    tags: ["Arcanjo", "Curador", "Médicos"],
    festa: "29 de setembro"
  },
  {
    nome: "Santa Rafaela Maria",
    descricao: "Fundadora das Escravas do Sagrado Coração de Jesus.",
    tags: ["Fundadora", "Escravas", "Sagrado Coração"],
    festa: "6 de janeiro"
  },
  {
    nome: "São Raimundo de Peñafort",
    descricao: "Dominicano espanhol, codificador do direito canônico.",
    tags: ["Dominicano", "Direito", "Canônico"],
    festa: "7 de janeiro"
  },
  {
    nome: "Santa Rita de Cássia",
    descricao: "Santa dos casos impossíveis, esposa, mãe, viúva e religiosa.",
    tags: ["Impossíveis", "Esposa", "Religiosa"],
    festa: "22 de maio"
  },
  {
    nome: "São Roberto Belarmino",
    descricao: "Cardeal jesuíta, Doutor da Igreja e apologista.",
    tags: ["Cardeal", "Jesuíta", "Apologista"],
    festa: "17 de setembro"
  },
  {
    nome: "São Roque",
    descricao: "Peregrino francês padroeiro contra a peste e epidemias.",
    tags: ["Peregrino", "Peste", "Epidemias"],
    festa: "16 de agosto"
  },
  {
    nome: "Santa Rosália",
    descricao: "Eremita siciliana padroeira de Palermo.",
    tags: ["Eremita", "Siciliana", "Palermo"],
    festa: "4 de setembro"
  },
  {
    nome: "Santo Simeão Estilita",
    descricao: "Asceta sírio que viveu 37 anos sobre uma coluna.",
    tags: ["Asceta", "Sírio", "Coluna"],
    festa: "5 de janeiro"
  },
  {
    nome: "São Tiago Maior",
    descricao: "Apóstolo, primeiro mártir entre os Doze, padroeiro da Espanha.",
    tags: ["Apóstolo", "Mártir", "Espanha"],
    festa: "25 de julho"
  },
  {
    nome: "São Tomé Apóstolo",
    descricao: "Apóstolo que evangelizou a Índia, conhecido por sua dúvida inicial.",
    tags: ["Apóstolo", "Índia", "Dúvida"],
    festa: "3 de julho"
  },
  {
    nome: "Santa Úrsula",
    descricao: "Mártir britânica com suas 11.000 companheiras.",
    tags: ["Mártir", "Britânica", "Companheiras"],
    festa: "21 de outubro"
  },
  {
    nome: "São Valentim",
    descricao: "Mártir romano do século III, padroeiro dos namorados.",
    tags: ["Mártir", "Romano", "Namorados"],
    festa: "14 de fevereiro"
  },
  {
    nome: "Santa Verônica",
    descricao: "Mulher que enxugou o rosto de Jesus na Via Crucis.",
    tags: ["Mulher", "Jesus", "Via Crucis"],
    festa: "12 de julho"
  },
  {
    nome: "São Vito",
    descricao: "Mártir siciliano do século IV, padroeiro dos epilépticos.",
    tags: ["Mártir", "Siciliano", "Epilépticos"],
    festa: "15 de junho"
  },
  {
    nome: "São Zacarias",
    descricao: "Pai de São João Batista, sacerdote do Templo de Jerusalém.",
    tags: ["Pai", "João Batista", "Sacerdote"],
    festa: "5 de novembro"
  },
  {
    nome: "Santo Abdias",
    descricao: "Profeta menor do Antigo Testamento.",
    tags: ["Profeta", "Antigo", "Testamento"],
    festa: "19 de novembro"
  },
  {
    nome: "Santo Abel",
    descricao: "Primeiro mártir da humanidade, filho de Adão e Eva.",
    tags: ["Primeiro", "Mártir", "Humanidade"],
    festa: "28 de dezembro"
  },
  {
    nome: "Santo Abraão",
    descricao: "Patriarca e pai da fé, chamado por Deus para deixar sua terra.",
    tags: ["Patriarca", "Fé", "Chamado"],
    festa: "9 de outubro"
  },
  {
    nome: "Santa Adelaide",
    descricao: "Imperatriz do Sacro Império Romano, conhecida por sua piedade.",
    tags: ["Imperatriz", "Sacro", "Piedade"],
    festa: "16 de dezembro"
  },
  {
    nome: "Santo Adriano",
    descricao: "Mártir romano do século IV.",
    tags: ["Mártir", "Romano", "Século IV"],
    festa: "8 de setembro"
  },
  {
    nome: "Santa Agatônica",
    descricao: "Mártir cristã do século II.",
    tags: ["Mártir", "Cristã", "Século II"],
    festa: "10 de janeiro"
  },
  {
    nome: "Santo Ageu",
    descricao: "Profeta menor que incentivou a reconstrução do Templo.",
    tags: ["Profeta", "Templo", "Reconstrução"],
    festa: "16 de dezembro"
  },
  {
    nome: "Santa Aída",
    descricao: "Abadessa beneditina irlandesa do século VII.",
    tags: ["Abadessa", "Beneditina", "Irlandesa"],
    festa: "31 de janeiro"
  },
  {
    nome: "Santo Alan",
    descricao: "Monge bretão evangelizador da Bretanha.",
    tags: ["Monge", "Bretão", "Bretanha"],
    festa: "26 de setembro"
  },
  {
    nome: "Santa Albina",
    descricao: "Mártir romana do século III.",
    tags: ["Mártir", "Romana", "Século III"],
    festa: "16 de dezembro"
  },
  {
    nome: "Santo Alcuíno",
    descricao: "Monge inglês conselheiro de Carlos Magno, renovador dos estudos.",
    tags: ["Monge", "Carlos Magno", "Estudos"],
    festa: "19 de maio"
  },
  {
    nome: "Santa Aldegunda",
    descricao: "Abadessa franca fundadora do mosteiro de Maubeuge.",
    tags: ["Abadessa", "Franca", "Mosteiro"],
    festa: "30 de janeiro"
  },
  {
    nome: "Santo Aleixo",
    descricao: "Romano que viveu como mendigo na casa dos próprios pais.",
    tags: ["Romano", "Mendigo", "Pais"],
    festa: "17 de julho"
  },
  {
    nome: "Santa Alexandrina",
    descricao: "Mártir romana com suas companheiras.",
    tags: ["Mártir", "Romana", "Companheiras"],
    festa: "20 de março"
  },
  {
    nome: "Santo Alonso Rodriguez",
    descricao: "Jesuíta espanhol porteiro, místico e escritor espiritual.",
    tags: ["Jesuíta", "Porteiro", "Místico"],
    festa: "31 de outubro"
  },
  {
    nome: "Santa Alpais",
    descricao: "Mística francesa que viveu apenas da Eucaristia.",
    tags: ["Mística", "Francesa", "Eucaristia"],
    festa: "3 de novembro"
  },
  {
    nome: "Santo Amós",
    descricao: "Profeta menor conhecido por sua defesa da justiça social.",
    tags: ["Profeta", "Justiça", "Social"],
    festa: "31 de março"
  },
  {
    nome: "Santa Anastácia",
    descricao: "Mártir romana do século IV.",
    tags: ["Mártir", "Romana", "Século IV"],
    festa: "25 de dezembro"
  }
];

const handleLerMais = (nome: string) => {
  const searchQuery = encodeURIComponent(`${nome} santo católico biografia`);
  window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
};

const SantosSection = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, santos.length));
  };

  const visibleSantos = santos.slice(0, visibleCount);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-8 h-8 text-red-400" />
        <h2 className="text-3xl font-bold text-white">Santos da Igreja</h2>
        <span className="text-slate-400 text-sm">({santos.length} santos)</span>
      </div>
      
      <div className="grid gap-6">
        {visibleSantos.map((santo, index) => (
          <div key={index} className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">{santo.nome}</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              {santo.descricao}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {santo.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className={`px-3 py-1 text-white text-sm rounded-full ${
                    tagIndex % 6 === 0 ? 'bg-blue-600' : 
                    tagIndex % 6 === 1 ? 'bg-green-600' : 
                    tagIndex % 6 === 2 ? 'bg-purple-600' : 
                    tagIndex % 6 === 3 ? 'bg-red-600' : 
                    tagIndex % 6 === 4 ? 'bg-yellow-600' : 'bg-pink-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-blue-400 font-medium">Festa: {santo.festa}</p>
              <button
                onClick={() => handleLerMais(santo.nome)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Ler mais
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < santos.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMore}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-lg transition-all transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Mostrar mais ({Math.min(10, santos.length - visibleCount)} de {santos.length - visibleCount} restantes)
          </button>
        </div>
      )}
    </div>
  );
};

export default SantosSection;
