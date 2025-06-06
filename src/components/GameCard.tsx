import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface GameCardProps {
  title: string;
  image: string;
  currency: string;
  price: string;
  originalPrice?: string;
  isPopular?: boolean;
  deliveryTime: string;
}

const GameCard = ({
  title,
  image,
  currency,
  price,
  originalPrice,
  isPopular,
  deliveryTime,
}: GameCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
      <CardHeader className="p-0 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {isPopular && (
          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <Icon name="Star" size={16} className="mr-1" />
            Популярно
          </Badge>
        )}
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{currency}</p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-purple-600">{price}</span>
          {originalPrice && (
            <span className="text-lg line-through text-gray-400">
              {originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Icon name="Clock" size={16} className="mr-2" />
          Доставка: {deliveryTime}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
