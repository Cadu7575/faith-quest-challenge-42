
import { Sparkles, Computer, Heart, Star, ExternalLink } from 'lucide-react';

const handleLerMais = () => {
  const searchQuery = encodeURIComponent('Carlo Acutis beato santo jovem tecnologia biografia');
  window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
};

const CarloAcutisSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-yellow-400" />
        <h2 className="text-3xl font-bold text-white">Beato Carlo Acutis</h2>
      </div>
      
      <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 backdrop-blur-lg rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Computer className="w-8 h-8 text-white" />
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
        <p className="text-slate-200 leading-relaxed mb-3">
          Sua frase famosa: "A Eucaristia é a minha autoestrada para o céu" mostra sua profunda devoção 
          ao Santíssimo Sacramento.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Tecnologia</span>
          <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Evangelização</span>
          <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">Eucaristia</span>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleLerMais}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ler mais
          </button>
        </div>
      </div>

      <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">Características Especiais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-red-400 mt-1" />
            <span className="text-slate-200">Participava da Missa diariamente desde os 7 anos</span>
          </div>
          <div className="flex items-start gap-3">
            <Computer className="w-5 h-5 text-blue-400 mt-1" />
            <span className="text-slate-200">Criou uma exposição online sobre milagres eucarísticos</span>
          </div>
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-green-400 mt-1" />
            <span className="text-slate-200">Ajudava os pobres e defendia crianças com deficiência</span>
          </div>
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-yellow-400 mt-1" />
            <span className="text-slate-200">Foi beatificado em 2020 pelo Papa Francisco</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarloAcutisSection;
