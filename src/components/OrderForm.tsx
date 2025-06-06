import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const OrderForm = () => {
  const [selectedGame, setSelectedGame] = useState("");
  const [amount, setAmount] = useState("");
  const [contact, setContact] = useState("");

  const games = [
    { value: "wow", label: "World of Warcraft" },
    { value: "dota2", label: "Dota 2" },
    { value: "csgo", label: "CS:GO" },
    { value: "fortnite", label: "Fortnite" },
    { value: "lol", label: "League of Legends" },
    { value: "minecraft", label: "Minecraft" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Быстрый заказ
          </h2>
          <p className="text-xl text-gray-600">
            Заполните форму и получите валюту в течение нескольких минут
          </p>
        </div>

        <Card className="shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <CardTitle className="text-2xl flex items-center">
              <Icon name="ShoppingBag" className="mr-3" size={28} />
              Оформить заказ
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="game" className="text-lg font-medium">
                    Выберите игру
                  </Label>
                  <Select value={selectedGame} onValueChange={setSelectedGame}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите игру" />
                    </SelectTrigger>
                    <SelectContent>
                      {games.map((game) => (
                        <SelectItem key={game.value} value={game.value}>
                          {game.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-lg font-medium">
                    Количество
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Введите количество"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-lg font-medium">
                  Контакт для связи
                </Label>
                <Input
                  id="contact"
                  type="text"
                  placeholder="Telegram, Discord или email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details" className="text-lg font-medium">
                  Дополнительная информация
                </Label>
                <Textarea
                  id="details"
                  placeholder="Укажите детали заказа, ник в игре и другую важную информацию"
                  className="min-h-[100px]"
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="AlertTriangle"
                    size={20}
                    className="text-yellow-600 mt-0.5"
                  />
                  <div className="text-sm text-yellow-700">
                    <p className="font-medium mb-1">Важная информация:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Укажите корректные контактные данные</li>
                      <li>
                        Убедитесь, что у вас есть доступ к игровому аккаунту
                      </li>
                      <li>Доставка занимает от 2 до 10 минут</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                <Icon name="CreditCard" className="mr-3" size={24} />
                Перейти к оплате
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
