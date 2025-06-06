
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239b87f5" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            GameCoin Market
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Покупайте игровую валюту быстро и безопасно. Мгновенная доставка, лучшие цены, гарантия возврата.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold">
            <Icon name="Gamepad2" className="mr-2" size={24} />
            Выбрать игру
          </Button>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800/20 px-8 py-4 text-lg">
            <Icon name="Shield" className="mr-2" size={24} />
            Гарантии
          </Button>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/20 p-6 text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">50,000+</div>
            <div className="text-gray-300">Довольных клиентов</div>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/20 p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">5 мин</div>
            <div className="text-gray-300">Среднее время доставки</div>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/20 p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Успешных транзакций</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
