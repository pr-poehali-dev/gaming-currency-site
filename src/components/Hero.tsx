import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239b87f5%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            GameCoin Market
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Покупайте игровую валюту быстро и безопасно. Мгновенная доставка,
            лучшие цены, гарантия возврата.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="Gamepad2" className="mr-2" size={20} />
            Купить валюту
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-300 hover:bg-purple-800 px-8 py-4 text-lg"
          >
            <Icon name="Shield" className="mr-2" size={20} />
            Узнать больше
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20 p-6">
            <Icon
              name="Zap"
              className="mx-auto mb-4 text-yellow-400"
              size={32}
            />
            <h3 className="text-lg font-semibold mb-2">Мгновенно</h3>
            <p className="text-gray-300">
              Получите валюту в течение 2 минут после оплаты
            </p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20 p-6">
            <Icon
              name="Shield"
              className="mx-auto mb-4 text-green-400"
              size={32}
            />
            <h3 className="text-lg font-semibold mb-2">Безопасно</h3>
            <p className="text-gray-300">
              100% гарантия безопасности и возврат средств
            </p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20 p-6">
            <Icon
              name="DollarSign"
              className="mx-auto mb-4 text-blue-400"
              size={32}
            />
            <h3 className="text-lg font-semibold mb-2">Выгодно</h3>
            <p className="text-gray-300">Лучшие курсы обмена на рынке</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
