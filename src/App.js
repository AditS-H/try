import { useState } from "react";

function App() {
  const [currentView, setCurrentView] = useState("initial");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYesClick = () => {
    setCurrentView("askMukki");
  };

  const handleNoClick = () => {
    setCurrentView("happy");
    triggerConfetti();
  };

  const handleYesMukki = () => {
    setCurrentView("mukki");
    triggerConfetti();
  };

  const handleNoMukki = () => {
    setCurrentView("hug");
    triggerConfetti();
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const resetToInitial = () => {
    setCurrentView("initial");
    setShowConfetti(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-red-300 relative overflow-hidden flex items-center justify-center p-4">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-2xl animate-bounce delay-100">💖</div>
        <div className="absolute top-20 right-20 text-xl animate-bounce delay-300">✨</div>
        <div className="absolute bottom-20 left-20 text-3xl animate-bounce delay-500">💕</div>
        <div className="absolute bottom-32 right-10 text-xl animate-bounce delay-700">🌸</div>
        <div className="absolute top-1/3 left-1/4 text-lg animate-bounce delay-1000">⭐</div>
        <div className="absolute top-2/3 right-1/3 text-2xl animate-bounce delay-1200">💝</div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '1.5s'
              }}
            >
              {['🎉', '✨', '💖', '🎊', '⭐'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Main Content Container */}
      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-white/30">
        
        {currentView === "initial" && (
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-8 animate-pulse">
              Hi Khushi, are u dukhi? 🥺
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleYesClick}
                className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-400/50 active:animate-bounce"
              >
                Yes 😢
              </button>
              
              <button
                onClick={handleNoClick}
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-400/50 active:animate-bounce"
              >
                No 😁
              </button>
            </div>
          </div>
        )}

        {currentView === "askMukki" && (
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6 animate-pulse">
              Do u want take a mukki? 🥊😂
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleYesMukki}
                className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-400/50 active:animate-bounce"
              >
                Yes give me mukki 🥺
              </button>
              
              <button
                onClick={handleNoMukki}
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-400/50 active:animate-bounce"
              >
                Noo 😭
              </button>
            </div>

            <button
              onClick={resetToInitial}
              className="text-pink-600 hover:text-pink-800 underline text-sm mt-4 transition-colors duration-200"
            >
              ← Go back
            </button>
          </div>
        )}

        {currentView === "mukki" && (
          <div className="space-y-6">
            <div className="text-6xl animate-bounce mb-4">💥</div>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 animate-pulse">
              Thuddd!! 💥
            </h2>
            <p className="text-2xl text-pink-700 font-semibold">
              Okay ab hasi aa gyi na? 😘
            </p>
            
            <button
              onClick={resetToInitial}
              className="bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg mt-6"
            >
              Play Again! 🎮
            </button>
          </div>
        )}

        {currentView === "hug" && (
          <div className="space-y-6">
            <div className="text-6xl animate-bounce mb-4">🫂</div>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800">
              Okay no mukki...
            </h2>
            <p className="text-2xl text-pink-700 font-semibold animate-pulse">
              only hug 🫂❤️
            </p>
            
            <button
              onClick={resetToInitial}
              className="bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg mt-6"
            >
              Play Again! 🎮
            </button>
          </div>
        )}

        {currentView === "happy" && (
          <div className="space-y-6">
            <div className="text-6xl animate-bounce mb-4">🥳</div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 animate-pulse">
              Wahh! Masti karte ho 😎✨
            </h2>
            <p className="text-2xl text-red-700 font-semibold">
              Ab chalo party karte hain 🥳🍕
            </p>
            
            <button
              onClick={resetToInitial}
              className="bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg mt-6"
            >
              Play Again! 🎮
            </button>
          </div>
        )}
      </div>

      {/* Cute kawaii decorations */}
      <div className="absolute bottom-4 right-4 text-pink-600 font-bold text-sm opacity-75">
        Made with 💖 for Khushi
      </div>
    </div>
  );
}

export default App;