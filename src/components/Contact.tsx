import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Наша команда всегда готова помочь вам 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
            <CardHeader className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              <CardTitle className="text-white">Telegram</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-4">
                Самый быстрый способ связаться с нами
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" className="mr-2" size={16} />
                Написать в Telegram
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
            <CardHeader className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <CardTitle className="text-white">Discord</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-4">
                Техническая поддержка в Discord
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Users" className="mr-2" size={16} />
                Присоединиться
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
            <CardHeader className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <CardTitle className="text-white">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-4">Для официальных вопросов</p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Icon name="Send" className="mr-2" size={16} />
                Отправить письмо
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Режим работы поддержки</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <Icon name="Clock" size={20} />
                <span>Онлайн поддержка: 24/7</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="Phone" size={20} />
                <span>Среднее время ответа: 2 минуты</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
