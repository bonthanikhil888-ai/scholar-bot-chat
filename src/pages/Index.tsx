import Header from "@/components/Header";
import ChatBot from "@/components/ChatBot";
import campusHero from "@/assets/campus-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={campusHero} 
            alt="Modern university campus"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Need Help Navigating Campus?</h2>
              <p className="text-lg opacity-90">Ask me anything about your campus experience!</p>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <ChatBot />
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          {[
            { title: "Library Hours", icon: "📚", desc: "Check opening times & resources" },
            { title: "Dining Options", icon: "🍽️", desc: "Find cafeterias & meal plans" },
            { title: "Class Schedules", icon: "📅", desc: "View timetables & locations" },
            { title: "Campus Map", icon: "🗺️", desc: "Navigate buildings & facilities" }
          ].map((card, index) => (
            <div key={index} className="bg-card rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">{card.icon}</div>
              <h3 className="font-semibold mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
