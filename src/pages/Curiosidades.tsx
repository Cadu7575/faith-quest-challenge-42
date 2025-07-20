
import { useState } from 'react';
import { Book, Heart, Sparkles, Church } from 'lucide-react';

interface CuriositySection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  content: React.ReactNode;
}

const Curiosidades = () => {
  const [activeSection, setActiveSection] = useState('santos');

  const sections: CuriositySection[] = [
    {
      id: 'santos',
      title: 'Santos',
      icon: Heart,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-4">Santos da Igreja</h2>
          
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">São Francisco de Assis</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              Fundador da Ordem Franciscana, São Francisco é conhecido por sua vida de pobreza e dedicação aos mais necessitados. 
              Ele recebeu os estigmas de Cristo e é considerado o padroeiro da ecologia.
            </p>
            <p className="text-sm text-blue-400 font-medium">Festa: 4 de outubro</p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Santa Teresinha do Menino Jesus</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              Conhecida pelo "Pequeno Caminho", Santa Teresinha ensinou que a santidade está ao alcance de todos 
              através de pequenos atos de amor. É Doutora da Igreja e padroeira das missões.
            </p>
            <p className="text-sm text-blue-400 font-medium">Festa: 1º de outubro</p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">São Padre Pio</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              Místico italiano que recebeu os estigmas por 50 anos. Era conhecido por seus dons sobrenaturais, 
              incluindo bilocação e curas milagrosas. Sua devoção ao sofrimento de Cristo o tornou um santo muito venerado.
            </p>
            <p className="text-sm text-blue-400 font-medium">Festa: 23 de setembro</p>
          </div>
        </div>
      )
    },
    {
      id: 'carlo-acutis',
      title: 'Beato Carlo Acutis',
      icon: Sparkles,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-4">Beato Carlo Acutis</h2>
          
          <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 backdrop-blur-lg rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">O Jovem Santo da Internet</h3>
                <p className="text-blue-300">1991 - 2006</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Vida e Vocação</h3>
            <p className="text-slate-200 leading-relaxed mb-4">
              Carlo Acutis foi um jovem italiano que viveu apenas 15 anos, mas deixou um legado extraordinário. 
              Apaixonado por tecnologia, ele usou seus conhecimentos em programação para evangelizar, 
              criando sites sobre milagres eucarísticos e aparições marianas.
            </p>
            <p className="text-slate-200 leading-relaxed">
              Sua frase famosa: "A Eucaristia é a minha autoestrada para o céu" mostra sua profunda devoção 
              ao Santíssimo Sacramento.
            </p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Características Especiais</h3>
            <ul className="space-y-2 text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Participava da Missa diariamente desde os 7 anos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Criou uma exposição online sobre milagres eucarísticos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Ajudava os pobres e defendia crianças com deficiência</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Foi beatificado em 2020 pelo Papa Francisco</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'milagres',
      title: 'Milagres Eucarísticos',
      icon: Church,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-4">Milagres Eucarísticos</h2>
          
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Milagre de Lanciano (Século VIII)</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              Em Lanciano, Itália, durante uma Missa celebrada por um monge que duvidava da presença real de Cristo na Eucaristia, 
              a hóstia transformou-se em carne viva e o vinho em sangue real. Este milagre foi estudado cientificamente 
              e confirmado pela Igreja.
            </p>
            <p className="text-sm text-blue-400 font-medium">Local: Lanciano, Itália</p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Milagre de Bolsena (1263)</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              Um padre alemão que duvidava da transubstanciação viu sangue escorrer da hóstia durante a consagração. 
              Este milagre levou o Papa Urbano IV a instituir a festa de Corpus Christi.
            </p>
            <p className="text-sm text-blue-400 font-medium">Local: Bolsena, Itália</p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Milagre de Buenos Aires (1996)</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              Uma hóstia profanada foi colocada em água para se dissolver, mas em vez disso, transformou-se em tecido cardíaco humano. 
              Análises científicas confirmaram que se tratava de músculo do coração em sofrimento.
            </p>
            <p className="text-sm text-blue-400 font-medium">Local: Buenos Aires, Argentina</p>
          </div>
        </div>
      )
    },
    {
      id: 'curiosidades',
      title: 'Curiosidades da Igreja',
      icon: Book,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-4">Curiosidades da Igreja Católica</h2>
          
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">O Vaticano</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              O Vaticano é o menor país do mundo, com apenas 0,17 milhas quadradas (0,44 km²). 
              Possui sua própria moeda, correio e até mesmo uma estação de trem!
            </p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">A Capela Sistina</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              Os afrescos do teto da Capela Sistina, pintados por Michelangelo, levaram 4 anos para serem concluídos (1508-1512). 
              A obra contém mais de 300 figuras humanas.
            </p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Os Papas</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              São Pedro foi o primeiro Papa da Igreja Católica. Desde então, houve 266 Papas. 
              O Papa Francisco é o primeiro Papa jesuíta e o primeiro Papa das Américas.
            </p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Língua Oficial</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              O latim ainda é a língua oficial da Igreja Católica, embora as missas possam ser celebradas 
              em línguas vernáculas desde o Concílio Vaticano II (1962-1965).
            </p>
          </div>
        </div>
      )
    }
  ];

  const activeContent = sections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header similar to quiz game */}
      <div className="bg-slate-800/60 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center mb-4">
            <h1 className="text-2xl font-bold text-white">
              Curiosidades da Fé Católica
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg shadow-md p-4 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-200 hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeContent?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curiosidades;
