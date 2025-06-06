import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Мгновенная доставка",
    description: "Получите валюту в течение 2-5 минут после оплаты",
  },
  {
    icon: "Shield",
    title: "100% безопасность",
    description: "Защищенные транзакции и гарантия возврата средств",
  },
  {
    icon: "Clock",
    title: "24/7 поддержка",
    description: "Круглосуточная техническая поддержка в Telegram",
  },
  {
    icon: "Star",
    title: "Лучшие цены",
    description: "Самые выгодные курсы на рынке игровой валюты",
  },
  {
    icon: "Users",
    title: "50,000+ клиентов",
    description: "Нам доверяют тысячи игроков по всему миру",
  },
  {
    icon: "CheckCircle",
    title: "Проверенная репутация",
    description: "5 лет на рынке, тысячи положительных отзывов",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы гарантируем надежность, скорость и лучший сервис
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg">
                    <Icon
                      name={feature.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
