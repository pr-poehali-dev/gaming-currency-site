import Hero from "@/components/Hero";
import GameGrid from "@/components/GameGrid";
import Features from "@/components/Features";
import OrderForm from "@/components/OrderForm";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <GameGrid />
      <Features />
      <OrderForm />
      <Contact />
    </div>
  );
};

export default Index;
