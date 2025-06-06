import GameCard from "./GameCard";

const games = [
  {
    id: 1,
    title: "World of Warcraft",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currency: "WoW Gold",
    price: "1,200 ₽",
    originalPrice: "1,500 ₽",
    isPopular: true,
    deliveryTime: "2-5 мин",
  },
  {
    id: 2,
    title: "Dota 2",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currency: "Steam Wallet",
    price: "800 ₽",
    deliveryTime: "1-3 мин",
  },
  {
    id: 3,
    title: "CS:GO",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currency: "CS:GO Скины",
    price: "2,500 ₽",
    deliveryTime: "5-10 мин",
  },
  {
    id: 4,
    title: "Fortnite",
    image:
      "https://images.unsplash.com/photo-1574282726647-9a4bf0fa4af8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currency: "V-Bucks",
    price: "1,000 ₽",
    isPopular: true,
    deliveryTime: "Мгновенно",
  },
  {
    id: 5,
    title: "League of Legends",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currency: "RP (Riot Points)",
    price: "750 ₽",
    deliveryTime: "1-2 мин",
  },
  {
    id: 6,
    title: "Minecraft",
    image:
      "https://images.unsplash.com/photo-1606181331579-42dbde8c3524?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    currency: "Minecoins",
    price: "500 ₽",
    deliveryTime: "Мгновенно",
  },
];

const GameGrid = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Популярные игры
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите свою любимую игру и получите валюту мгновенно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              image={game.image}
              currency={game.currency}
              price={game.price}
              originalPrice={game.originalPrice}
              isPopular={game.isPopular}
              deliveryTime={game.deliveryTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
