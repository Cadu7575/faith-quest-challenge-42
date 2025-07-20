import { useState, useMemo } from 'react';
import { Book, Heart, Sparkles, Church, Filter } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import SantosSection from '../components/SantosSection';
import CarloAcutisSection from '../components/CarloAcutisSection';
import MilagresSection from '../components/MilagresSection';

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  component: React.ReactNode;
  keywords: string[];
  content: string;
}

const ExploraCatolica = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('todos');

  const sections: Section[] = [
    {
      id: 'santos',
      title: 'Santos',
      icon: Heart,
      component: <SantosSection />,
      keywords: ['santos', 'francisco', 'teresinha', 'padre pio', 'estigmas', 'pobreza', 'missões', 'teresa', 'joão', 'agostinho', 'tomás', 'catarina', 'bento', 'jerônimo', 'mônica', 'josé', 'rita', 'bosco', 'bernadette', 'vicente', 'faustina', 'maximiliano', 'calcutá', 'xavier', 'inácio', 'luís', 'cecília', 'sebastião', 'lucia', 'pedro', 'paulo', 'joão evangelista', 'madalena', 'joão batista', 'antonio', 'clara', 'carlos', 'catarina', 'cristovao', 'domingos', 'edite', 'gema', 'gregorio', 'helena', 'ignacio', 'crisostomo', 'joana', 'cupertino', 'margarida', 'martinho', 'nicolau', 'paulina', 'rosa', 'alberto', 'agueda', 'alexandre', 'ambrósio', 'andré', 'angela', 'anselmo', 'bartolomeu', 'basilio', 'benedito', 'bernardino', 'brás', 'bruno', 'camilo', 'alexandria', 'charbel', 'cita', 'ciriaco', 'clemente', 'columba', 'cosme', 'damião', 'davi', 'dionísio', 'estevão', 'expedito', 'felipe', 'neri', 'filomena', 'galvão', 'gabriel', 'genoveva', 'geraldo', 'hilário', 'hipólito', 'isidoro', 'ivo', 'januário', 'nepomuceno', 'joaquim', 'josefina', 'judas', 'juliana', 'justino', 'kateri', 'leão', 'leonardo', 'luísa', 'marcos', 'maria', 'mateus', 'miguel', 'norberto', 'patrício', 'perpétua', 'rafael', 'rafaela', 'raimundo', 'roberto', 'roque', 'rosália', 'simeão', 'tiago', 'tomé', 'ursula', 'valentim', 'verônica', 'vito', 'zacarias'],
      content: 'santos católicos história vida biografias milagres canonização beatificação virtudes oração intercessão devoção fé católica igreja cristianismo francisco teresinha padre pio teresa joão agostinho tomás catarina bento jerônimo mônica josé rita bosco bernadette vicente faustina maximiliano calcutá xavier inácio luís cecília sebastião lucia pedro paulo evangelista madalena batista antonio clara carlos cristovao domingos edite gema gregorio helena ignacio crisostomo joana cupertino margarida martinho nicolau paulina rosa alberto agueda alexandre ambrósio andré angela anselmo bartolomeu basilio benedito bernardino brás bruno camilo alexandria charbel cita ciriaco clemente columba cosme damião davi dionísio estevão expedito felipe neri filomena galvão gabriel genoveva geraldo hilário hipólito isidoro ivo januário nepomuceno joaquim josefina judas juliana justino kateri leão leonardo luísa marcos maria mateus miguel norberto patrício perpétua rafael rafaela raimundo roberto roque rosália simeão tiago tomé ursula valentim verônica vito zacarias'
    },
    {
      id: 'carlo-acutis',
      title: 'Beato Carlo Acutis',
      icon: Sparkles,
      component: <CarloAcutisSection />,
      keywords: ['carlo acutis', 'jovem', 'tecnologia', 'internet', 'eucaristia', 'programação', 'beato', 'computador', 'site', 'milagres eucarísticos'],
      content: 'carlo acutis jovem santo tecnologia internet programação eucaristia beato católico moderno computador website'
    },
    {
      id: 'milagres',
      title: 'Milagres Eucarísticos',
      icon: Church,
      component: <MilagresSection />,
      keywords: ['milagres', 'eucaristia', 'lanciano', 'bolsena', 'buenos aires', 'sangue', 'carne', 'transubstanciação', 'santarém', 'orvieto', 'ferrara', 'alatri', 'offida', 'cascia', 'gruaro', 'walldürn', 'daroca', 'bordeaux', 'faverney', 'tumaco', 'siena', 'alcalá', 'ávila', 'macerata', 'patierno', 'rimini', 'mogoro', 'fiecht', 'éttiswil', 'blanot', 'cebollinos', 'poznań', 'tixtla', 'sokolka', 'legnica', 'paris', 'bruxelas', 'amsterdam', 'seefeld', 'dijon', 'guadalupe', 'herkenrode', 'regensburg', 'augsburg', 'zaragoza', 'krakow', 'toledo', 'bolzano', 'rothenburg', 'avignon', 'segovia', 'colônia', 'douai', 'braga', 'évora', 'braine', 'assisi', 'florença', 'veneza', 'salamanca', 'coimbra', 'münster', 'würzburg', 'lisboa', 'porto', 'lyon', 'mumbai', 'manila', 'são paulo', 'rio de janeiro', 'caracas', 'lima', 'santiago', 'dublin', 'edinburgh', 'cardiff', 'quebec', 'montreal', 'sydney', 'melbourne', 'auckland', 'wellington', 'cidade do cabo', 'joanesburgo', 'lagos', 'nairobi', 'cairo', 'casablanca', 'argel', 'túnis', 'beirute', 'damasco', 'bagdá', 'teerã', 'cabul', 'islamabad', 'nova delhi', 'colombo', 'dhaka', 'rangoon', 'bangkok', 'kuala lumpur', 'singapura', 'jakarta', 'ho chi minh', 'phnom penh', 'vientiane', 'seul', 'tóquio', 'pequim', 'hong kong', 'macau', 'taipé', 'ulan bator', 'almaty', 'tashkent', 'bishkek', 'dushanbe', 'ashgabat', 'erevan', 'tbilisi', 'baku', 'kiev', 'minsk', 'vilnius', 'riga', 'tallinn', 'helsinki', 'estocolmo', 'oslo', 'copenhague', 'reykjavik', 'varsóvia', 'praga', 'bratislava', 'budapeste', 'bucareste', 'sofia', 'belgrado', 'zagreb', 'sarajevo', 'skopje', 'pristina', 'podgorica', 'tirana', 'atenas', 'ancara', 'nicósia', 'la valletta', 'andorra', 'san marino', 'vaduz', 'mônaco', 'vaticano', 'las palmas', 'funchal', 'ponta delgada', 'santa cruz', 'santo domingo', 'havana', 'san juan', 'kingston', 'port-au-prince', 'nassau', 'bridgetown'],
      content: 'milagres eucarísticos hóstia consagrada sangue carne transformação científico análise laboratório fé católica presença real cristo eucaristia missa lanciano bolsena buenos aires santarém orvieto ferrara alatri offida cascia gruaro walldürn daroca bordeaux faverney tumaco siena alcalá ávila macerata patierno rimini mogoro fiecht éttiswil blanot cebollinos poznań tixtla sokolka legnica paris bruxelas amsterdam seefeld dijon guadalupe herkenrode regensburg augsburg zaragoza krakow toledo bolzano rothenburg avignon segovia colônia douai braga évora braine assisi florença veneza salamanca coimbra münster würzburg lisboa porto lyon mumbai manila são paulo rio janeiro caracas lima santiago dublin edinburgh cardiff quebec montreal sydney melbourne auckland wellington cidade cabo joanesburgo lagos nairobi cairo casablanca argel túnis beirute damasco bagdá teerã cabul islamabad nova delhi colombo dhaka rangoon bangkok kuala lumpur singapura jakarta ho chi minh phnom penh vientiane seul tóquio pequim hong kong macau taipé ulan bator almaty tashkent bishkek dushanbe ashgabat erevan tbilisi baku kiev minsk vilnius riga tallinn helsinki estocolmo oslo copenhague reykjavik varsóvia praga bratislava budapeste bucareste sofia belgrado zagreb sarajevo skopje pristina podgorica tirana atenas ancara nicósia la valletta andorra san marino vaduz mônaco vaticano las palmas funchal ponta delgada santa cruz santo domingo havana san juan kingston port-au-prince nassau bridgetown'
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos os Tópicos' },
    { id: 'santos', label: 'Santos' },
    { id: 'milagres', label: 'Milagres' },
    { id: 'historia', label: 'História da Igreja' }
  ];

  const filteredSections = useMemo(() => {
    let filtered = sections;

    // Filtrar por categoria
    if (activeFilter !== 'todos') {
      filtered = filtered.filter(section => 
        section.id === activeFilter || 
        (activeFilter === 'historia' && (section.id === 'milagres' || section.id === 'carlo-acutis'))
      );
    }

    // Filtrar por busca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(section =>
        section.title.toLowerCase().includes(query) ||
        section.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
        section.content.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="bg-slate-800/60 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-white mb-2">
              Exploração da Fé Católica
            </h1>
            <p className="text-slate-300 text-lg">
              Descubra santos, milagres e a rica história da Igreja Católica
            </p>
          </div>
          
          {/* Search Bar */}
          <SearchBar 
            onSearch={setSearchQuery} 
            placeholder="Buscar por santos, milagres, nomes, locais, eventos..."
          />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <div className="flex items-center gap-2 mr-4">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-slate-400 text-sm">Filtros:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mt-4 text-center">
              <p className="text-slate-300">
                {filteredSections.length === 0 
                  ? 'Nenhum resultado encontrado' 
                  : `${filteredSections.length} seção(ões) encontrada(s)`
                }
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Results */}
        {filteredSections.length === 0 ? (
          <div className="text-center py-12">
            <Book className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Nenhum resultado encontrado</h3>
            <p className="text-slate-400 mb-4">
              Tente usar termos diferentes ou remover alguns filtros.
            </p>
            <p className="text-slate-300 text-sm">
              Sugestões: "Francisco", "Lanciano", "Eucaristia", "Milagres", "Santos"
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredSections.map((section) => (
              <div key={section.id} className="bg-slate-800/40 backdrop-blur-lg rounded-lg p-6 border border-slate-600/30">
                {section.component}
              </div>
            ))}
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 text-center border border-slate-600/30">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-white mb-2">100+</h3>
            <p className="text-slate-400">Santos Destacados</p>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 text-center border border-slate-600/30">
            <Church className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-white mb-2">100+</h3>
            <p className="text-slate-400">Milagres Eucarísticos</p>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 text-center border border-slate-600/30">
            <Book className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-white mb-2">2000+</h3>
            <p className="text-slate-400">Anos de História</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploraCatolica;
