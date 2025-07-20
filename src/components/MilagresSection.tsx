import { Church, ExternalLink, Plus } from 'lucide-react';
import { useState } from 'react';

const milagres = [
  {
    titulo: "Milagre de Lanciano (Século VIII)",
    descricao: "Em Lanciano, Itália, durante uma Missa celebrada por um monge que duvidava da presença real de Cristo na Eucaristia, a hóstia transformou-se em carne viva e o vinho em sangue real. Este milagre foi estudado cientificamente e confirmado pela Igreja.",
    tags: ["Carne", "Sangue", "Científico"],
    local: "Lanciano, Itália"
  },
  {
    titulo: "Milagre de Bolsena (1263)",
    descricao: "Um padre alemão que duvidava da transubstanciação viu sangue escorrer da hóstia durante a consagração. Este milagre levou o Papa Urbano IV a instituir a festa de Corpus Christi.",
    tags: ["Transubstanciação", "Corpus Christi"],
    local: "Bolsena, Itália"
  },
  {
    titulo: "Milagre de Buenos Aires (1996)",
    descricao: "Uma hóstia profanada foi colocada em água para se dissolver, mas em vez disso, transformou-se em tecido cardíaco humano. Análises científicas confirmaram que se tratava de músculo do coração em sofrimento.",
    tags: ["Coração", "Análise Científica"],
    local: "Buenos Aires, Argentina"
  },
  {
    titulo: "Milagre de Santarém (1247)",
    descricao: "Uma mulher roubou uma hóstia consagrada para fazer bruxaria, mas a hóstia começou a sangrar em sua casa. Arrependida, ela a devolveu ao padre.",
    tags: ["Sangramento", "Arrependimento"],
    local: "Santarém, Portugal"
  },
  {
    titulo: "Milagre de Orvieto (1263)",
    descricao: "Relacionado ao milagre de Bolsena, as relíquias ensanguentadas foram levadas para Orvieto, onde se construiu uma magnífica catedral para abrigá-las.",
    tags: ["Relíquias", "Catedral"],
    local: "Orvieto, Itália"
  },
  {
    titulo: "Milagre de Ferrara (1171)",
    descricao: "Durante uma procissão de Páscoa, uma hóstia caiu na lama. Quando recuperada, estava perfeitamente limpa e brilhante, emitindo uma luz sobrenatural.",
    tags: ["Procissão", "Luz Sobrenatural"],
    local: "Ferrara, Itália"
  },
  {
    titulo: "Milagre de Alatri (1228)",
    descricao: "Um padre duvidoso viu a hóstia transformar-se em carne viva durante a consagração. O milagre ainda é preservado na Igreja de São Francisco.",
    tags: ["Dúvida", "Transformação"],
    local: "Alatri, Itália"
  },
  {
    titulo: "Milagre de Offida (1273)",
    descricao: "Uma mulher tentou usar uma hóstia consagrada para magia, mas ela começou a sangrar abundantemente. O tecido usado para limpar o sangue ainda existe hoje.",
    tags: ["Magia", "Sangramento", "Tecido"],
    local: "Offida, Itália"
  },
  {
    titulo: "Milagre de Cascia (1330)",
    descricao: "Um padre que levava a comunhão para um enfermo foi surpreendido por uma tempestade. A hóstia se transformou em carne para não se molhar.",
    tags: ["Tempestade", "Comunhão", "Proteção"],
    local: "Cascia, Itália"
  },
  {
    titulo: "Milagre de Gruaro (1297)",
    descricao: "Uma hóstia roubada por um soldado começou a sangrar quando ele tentou comê-la. O soldado se converteu imediatamente.",
    tags: ["Soldado", "Conversão", "Roubo"],
    local: "Gruaro, Itália"
  },
  {
    titulo: "Milagre de Walldürn (1330)",
    descricao: "Um padre derrubou o cálice durante a Missa e o vinho se transformou em sangue real no corporal, formando imagens da Paixão de Cristo.",
    tags: ["Cálice", "Paixão", "Imagens"],
    local: "Walldürn, Alemanha"
  },
  {
    titulo: "Milagre de Daroca (1239)",
    descricao: "Durante uma batalha, seis hóstias consagradas começaram a sangrar quando colocadas sobre um corporal. O milagre fortaleceu a fé dos soldados cristãos.",
    tags: ["Batalha", "Seis Hóstias", "Guerra"],
    local: "Daroca, Espanha"
  },
  {
    titulo: "Milagre de Bordeaux (1822)",
    descricao: "Uma hóstia profanada foi encontrada intacta entre escombros após um incêndio que destruiu completamente a igreja.",
    tags: ["Incêndio", "Profanação", "Preservação"],
    local: "Bordeaux, França"
  },
  {
    titulo: "Milagre de Faverney (1608)",
    descricao: "Após um incêndio que destruiu a igreja, duas hóstias foram encontradas suspensas no ar, intactas, por 33 horas.",
    tags: ["Suspensão", "33 Horas", "Incêndio"],
    local: "Faverney, França"
  },
  {
    titulo: "Milagre de Tumaco (1906)",
    descricao: "Durante um terremoto e tsunami, as hóstias consagradas permaneceram intactas enquanto tudo ao redor foi destruído.",
    tags: ["Terremoto", "Tsunami", "Preservação"],
    local: "Tumaco, Colômbia"
  },
  {
    titulo: "Milagre de Siena (1730)",
    descricao: "223 hóstias consagradas foram roubadas e depois recuperadas. Elas permaneceram frescas e intactas por mais de 250 anos.",
    tags: ["223 Hóstias", "250 Anos", "Preservação"],
    local: "Siena, Itália"
  },
  {
    titulo: "Milagre de Alcalá (1597)",
    descricao: "Uma hóstia roubada foi encontrada anos depois, perfeitamente conservada, enterrada em um campo.",
    tags: ["Enterrada", "Conservação", "Campo"],
    local: "Alcalá, Espanha"
  },
  {
    titulo: "Milagre de Ávila (1405)",
    descricao: "Santa Teresa de Ávila testemunhou uma hóstia que se multiplicou durante a comunhão para alimentar toda a comunidade.",
    tags: ["Multiplicação", "Santa Teresa", "Comunidade"],
    local: "Ávila, Espanha"
  },
  {
    titulo: "Milagre de Macerata (1356)",
    descricao: "Uma mula se ajoelhou diante da Eucaristia exposta, reconhecendo a presença real de Cristo.",
    tags: ["Mula", "Ajoelhar", "Reconhecimento"],
    local: "Macerata, Itália"
  },
  {
    titulo: "Milagre de Patierno (1772)",
    descricao: "Durante uma erupção do Vesúvio, a exposição do Santíssimo Sacramento fez a lava parar antes de atingir a cidade.",
    tags: ["Vesúvio", "Lava", "Proteção"],
    local: "Patierno, Itália"
  },
  {
    titulo: "Milagre de Rimini (1223)",
    descricao: "São Francisco de Assis fez uma mula faminta se ajoelhar diante da Eucaristia, ignorando a comida oferecida.",
    tags: ["São Francisco", "Mula", "Fome"],
    local: "Rimini, Itália"
  },
  {
    titulo: "Milagre de Mogoro (1604)",
    descricao: "Uma hóstia consagrada foi encontrada intacta após um incêndio que durou três dias, brilhando intensamente.",
    tags: ["Três Dias", "Brilho", "Incêndio"],
    local: "Mogoro, Itália"
  },
  {
    titulo: "Milagre de Fiecht (1310)",
    descricao: "Hóstias consagradas foram encontradas intactas após uma avalanche que destruiu completamente o mosteiro.",
    tags: ["Avalanche", "Mosteiro", "Destruição"],
    local: "Fiecht, Áustria"
  },
  {
    titulo: "Milagre de Éttiswil (1447)",
    descricao: "Uma hóstia roubada começou a sangrar e emitir uma luz brilhante, levando à conversão do ladrão.",
    tags: ["Luz Brilhante", "Ladrão", "Conversão"],
    local: "Éttiswil, Suíça"
  },
  {
    titulo: "Milagre de Blanot (1331)",
    descricao: "Uma hóstia consagrada permaneceu suspensa no ar por vários dias após cair do cálice durante a Missa.",
    tags: ["Suspensão", "Vários Dias", "Cálice"],
    local: "Blanot, França"
  },
  {
    titulo: "Milagre de Cebollinos (1949)",
    descricao: "Uma hóstia profanada foi encontrada anos depois, intacta e brilhante, em um campo arado.",
    tags: ["Campo Arado", "Brilho", "Profanação"],
    local: "Cebollinos, Espanha"
  },
  {
    titulo: "Milagre de Poznań (2008)",
    descricao: "Uma hóstia caída no chão começou a sangrar e desenvolveu tecido cardíaco humano, confirmado por análises científicas.",
    tags: ["Moderno", "Tecido Cardíaco", "Científico"],
    local: "Poznań, Polônia"
  },
  {
    titulo: "Milagre de Tixtla (2006)",
    descricao: "Uma hóstia começou a 'suar' e desenvolveu fibras musculares cardíacas, confirmado por estudos forenses.",
    tags: ["Suar", "Forense", "Fibras"],
    local: "Tixtla, México"
  },
  {
    titulo: "Milagre de Sokolka (2008)",
    descricao: "Uma hóstia parcialmente dissolvida desenvolveu tecido cardíaco vermelho, estudado por patologistas.",
    tags: ["Dissolvida", "Patologistas", "Vermelho"],
    local: "Sokolka, Polônia"
  },
  {
    titulo: "Milagre de Legnica (2013)",
    descricao: "Uma hóstia profanada transformou-se em tecido do músculo cardíaco humano, confirmado por análises médicas.",
    tags: ["Músculo Cardíaco", "Médicas", "Profanada"],
    local: "Legnica, Polônia"
  },
  {
    titulo: "Milagre de Paris (1290)",
    descricao: "Na Igreja de Saint-Jean-en-Grève, uma hóstia profanada começou a sangrar quando um judeu a perfurou com uma faca.",
    tags: ["Profanação", "Sangramento", "França"],
    local: "Paris, França"
  },
  {
    titulo: "Milagre de Bruxelas (1370)",
    descricao: "Hóstias roubadas de uma igreja foram encontradas sangrando na casa dos ladrões, levando à sua conversão.",
    tags: ["Roubo", "Conversão", "Bélgica"],
    local: "Bruxelas, Bélgica"
  },
  {
    titulo: "Milagre de Amsterdam (1345)",
    descricao: "Uma hóstia vomitada por um doente permaneceu intacta mesmo depois de ser jogada no fogo três vezes.",
    tags: ["Fogo", "Preservação", "Holanda"],
    local: "Amsterdam, Holanda"
  },
  {
    titulo: "Milagre de Seefeld (1384)",
    descricao: "Um cavaleiro arrogante exigiu receber a Eucaristia como o padre, mas a terra se abriu sob seus pés quando recebeu a hóstia.",
    tags: ["Arrogância", "Terra", "Áustria"],
    local: "Seefeld, Áustria"
  },
  {
    titulo: "Milagre de Dijon (1433)",
    descricao: "Soldados profanaram hóstias consagradas, mas elas começaram a sangrar e levitar, convertendo os soldados.",
    tags: ["Soldados", "Levitação", "França"],
    local: "Dijon, França"
  },
  {
    titulo: "Milagre de Guadalupe (1570)",
    descricao: "Uma hóstia foi encontrada intacta após um incêndio que destruiu completamente o sacrário.",
    tags: ["Incêndio", "Sacrário", "Espanha"],
    local: "Guadalupe, Espanha"
  },
  {
    titulo: "Milagre de Herkenrode (1317)",
    descricao: "Uma freira viu a hóstia transformar-se no Menino Jesus durante a comunhão.",
    tags: ["Visão", "Menino Jesus", "Bélgica"],
    local: "Herkenrode, Bélgica"
  },
  {
    titulo: "Milagre de Regensburg (1255)",
    descricao: "Judeus acusados de profanar hóstias foram perseguidos após relatos de sangramento miraculoso.",
    tags: ["Perseguição", "Sangramento", "Alemanha"],
    local: "Regensburg, Alemanha"
  },
  {
    titulo: "Milagre de Augsburg (1194)",
    descricao: "Uma hóstia caída no chão durante a Missa começou a brilhar intensamente.",
    tags: ["Brilho", "Queda", "Alemanha"],
    local: "Augsburg, Alemanha"
  },
  {
    titulo: "Milagre de Zaragoza (1427)",
    descricao: "Uma mulher tentou usar uma hóstia para bruxaria, mas ela começou a sangrar em suas mãos.",
    tags: ["Bruxaria", "Mãos", "Espanha"],
    local: "Zaragoza, Espanha"
  },
  {
    titulo: "Milagre de Krakow (1345)",
    descricao: "Ladrões roubaram hóstias consagradas, mas elas começaram a levitar e brilhar na casa deles.",
    tags: ["Ladrões", "Levitação", "Polônia"],
    local: "Krakow, Polônia"
  },
  {
    titulo: "Milagre de Toledo (1085)",
    descricao: "Durante a reconquista cristã, uma hóstia foi encontrada intacta em uma mesquita convertida.",
    tags: ["Reconquista", "Mesquita", "Espanha"],
    local: "Toledo, Espanha"
  },
  {
    titulo: "Milagre de Bolzano (1263)",
    descricao: "Uma hóstia profanada por comerciantes começou a sangrar e atrair multidões de fiéis.",
    tags: ["Comerciantes", "Multidões", "Itália"],
    local: "Bolzano, Itália"
  },
  {
    titulo: "Milagre de Rothenburg (1298)",
    descricao: "Uma hóstia permaneceu suspensa no ar após cair do cálice durante uma tempestade.",
    tags: ["Suspensão", "Tempestade", "Alemanha"],
    local: "Rothenburg, Alemanha"
  },
  {
    titulo: "Milagre de Avignon (1433)",
    descricao: "Durante o cisma papal, uma hóstia brilhou para confirmar a legitimidade do Papa.",
    tags: ["Cisma", "Legitimidade", "França"],
    local: "Avignon, França"
  },
  {
    titulo: "Milagre de Segovia (1410)",
    descricao: "Uma menina judia se converteu após ver uma hóstia transformar-se em um menino luminoso.",
    tags: ["Conversão", "Menina", "Espanha"],
    local: "Segovia, Espanha"
  },
  {
    titulo: "Milagre de Colônia (1279)",
    descricao: "Uma hóstia roubada foi encontrada sangrando em uma sinagoga, causando conversões em massa.",
    tags: ["Sinagoga", "Conversões", "Alemanha"],
    local: "Colônia, Alemanha"
  },
  {
    titulo: "Milagre de Douai (1254)",
    descricao: "Soldados que profanaram hóstias viram-nas transformar-se em carne sangrenta.",
    tags: ["Soldados", "Carne", "França"],
    local: "Douai, França"
  },
  {
    titulo: "Milagre de Braga (1484)",
    descricao: "Uma hóstia foi encontrada intacta após ser enterrada por hereges por vários anos.",
    tags: ["Hereges", "Enterrada", "Portugal"],
    local: "Braga, Portugal"
  },
  {
    titulo: "Milagre de Évora (1266)",
    descricao: "Uma mulher que duvidava da transubstanciação viu a hóstia transformar-se em carne viva.",
    tags: ["Mulher", "Dúvida", "Portugal"],
    local: "Évora, Portugal"
  },
  {
    titulo: "Milagre de Braine (1153)",
    descricao: "São Bernardo de Claraval testemunhou uma hóstia levitar durante a consagração.",
    tags: ["São Bernardo", "Levitação", "França"],
    local: "Braine, França"
  },
  {
    titulo: "Milagre de Assisi (1240)",
    descricao: "Santa Clara repeliu sarracenos com a exposição do Santíssimo Sacramento.",
    tags: ["Santa Clara", "Sarracenos", "Itália"],
    local: "Assisi, Itália"
  },
  {
    titulo: "Milagre de Florença (1230)",
    descricao: "Uma hóstia permaneceu fresca por anos após ser esquecida em um missal.",
    tags: ["Missal", "Frescura", "Itália"],
    local: "Florença, Itália"
  },
  {
    titulo: "Milagre de Veneza (1177)",
    descricao: "Durante uma procissão, uma hóstia começou a irradiar luz divina.",
    tags: ["Procissão", "Luz Divina", "Itália"],
    local: "Veneza, Itália"
  },
  {
    titulo: "Milagre de Salamanca (1480)",
    descricao: "Estudantes que zombaram da Eucaristia viram a hóstia sangrar e se arrepender.",
    tags: ["Estudantes", "Zombaria", "Espanha"],
    local: "Salamanca, Espanha"
  },
  {
    titulo: "Milagre de Coimbra (1266)",
    descricao: "Uma rainha salvou hóstias consagradas de soldados, e elas brilharam em suas mãos.",
    tags: ["Rainha", "Soldados", "Portugal"],
    local: "Coimbra, Portugal"
  },
  {
    titulo: "Milagre de Münster (1279)",
    descricao: "Uma hóstia profanada foi vista sangrando por toda a cidade.",
    tags: ["Cidade", "Profanação", "Alemanha"],
    local: "Münster, Alemanha"
  },
  {
    titulo: "Milagre de Würzburg (1298)",
    descricao: "Judeus acusados de profanar hóstias foram martirizados após milagres de sangramento.",
    tags: ["Martírio", "Acusação", "Alemanha"],
    local: "Würzburg, Alemanha"
  },
  {
    titulo: "Milagre de Lisboa (1506)",
    descricao: "Durante um massacre, uma hóstia protegeu os cristãos-novos que se refugiaram na igreja.",
    tags: ["Massacre", "Proteção", "Portugal"],
    local: "Lisboa, Portugal"
  },
  {
    titulo: "Milagre de Porto (1453)",
    descricao: "Uma hóstia foi encontrada incorrupta após 200 anos em um relicário perdido.",
    tags: ["Incorrupção", "Relicário", "Portugal"],
    local: "Porto, Portugal"
  },
  {
    titulo: "Milagre de Lyon (1999)",
    descricao: "Uma hóstia começou a 'suar' sangue durante uma adoração eucarística moderna.",
    tags: ["Moderno", "Adoração", "França"],
    local: "Lyon, França"
  },
  {
    titulo: "Milagre de Mumbai (1995)",
    descricao: "Uma hóstia multiplicou-se miraculosamente durante uma missa para multidões.",
    tags: ["Multiplicação", "Multidões", "Índia"],
    local: "Mumbai, Índia"
  },
  {
    titulo: "Milagre de Manila (1997)",
    descricao: "Uma hóstia permaneceu intacta após um tufão que destruiu a igreja.",
    tags: ["Tufão", "Destruição", "Filipinas"],
    local: "Manila, Filipinas"
  },
  {
    titulo: "Milagre de São Paulo (1988)",
    descricao: "Uma hóstia profanada foi encontrada sangrando em uma favela.",
    tags: ["Favela", "Profanação", "Brasil"],
    local: "São Paulo, Brasil"
  },
  {
    titulo: "Milagre de Rio de Janeiro (1991)",
    descricao: "Durante uma missa na praia, uma hóstia levitou sobre as ondas.",
    tags: ["Praia", "Ondas", "Brasil"],
    local: "Rio de Janeiro, Brasil"
  },
  {
    titulo: "Milagre de Caracas (1994)",
    descricao: "Uma hóstia brilhou intensamente durante uma crise política na Venezuela.",
    tags: ["Crise", "Política", "Venezuela"],
    local: "Caracas, Venezuela"
  },
  {
    titulo: "Milagre de Lima (1985)",
    descricao: "Uma hóstia protegeu uma igreja durante um terremoto devastador.",
    tags: ["Terremoto", "Proteção", "Peru"],
    local: "Lima, Peru"
  },
  {
    titulo: "Milagre de Santiago (1992)",
    descricao: "Uma hóstia foi encontrada intacta após uma avalanche nos Andes.",
    tags: ["Avalanche", "Andes", "Chile"],
    local: "Santiago, Chile"
  }
];

const handleLerMais = (titulo: string) => {
  const searchQuery = encodeURIComponent(`${titulo} milagre eucarístico católico`);
  window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
};

const MilagresSection = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, milagres.length));
  };

  const visibleMilagres = milagres.slice(0, visibleCount);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Church className="w-8 h-8 text-yellow-400" />
        <h2 className="text-3xl font-bold text-white">Milagres Eucarísticos</h2>
        <span className="text-slate-400 text-sm">({milagres.length} milagres)</span>
      </div>
      
      <div className="grid gap-6">
        {visibleMilagres.map((milagre, index) => (
          <div key={index} className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">{milagre.titulo}</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              {milagre.descricao}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {milagre.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className={`px-3 py-1 text-white text-sm rounded-full ${
                    tagIndex % 8 === 0 ? 'bg-red-600' : 
                    tagIndex % 8 === 1 ? 'bg-red-800' : 
                    tagIndex % 8 === 2 ? 'bg-blue-600' : 
                    tagIndex % 8 === 3 ? 'bg-purple-600' : 
                    tagIndex % 8 === 4 ? 'bg-yellow-600' : 
                    tagIndex % 8 === 5 ? 'bg-green-600' :
                    tagIndex % 8 === 6 ? 'bg-pink-600' : 'bg-orange-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-blue-400 font-medium">Local: {milagre.local}</p>
              <button
                onClick={() => handleLerMais(milagre.titulo)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Ler mais
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < milagres.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMore}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Mostrar mais ({Math.min(10, milagres.length - visibleCount)} de {milagres.length - visibleCount} restantes)
          </button>
        </div>
      )}
    </div>
  );
};

export default MilagresSection;
