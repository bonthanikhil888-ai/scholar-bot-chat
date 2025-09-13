import { GraduationCap, Clock, MapPin, Utensils, BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-primary via-primary-light to-primary-dark text-primary-foreground">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <GraduationCap className="h-10 w-10" />
          <h1 className="text-4xl font-bold">Smart Campus Assistant</h1>
        </div>
        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
          Your AI-powered guide for campus life. Get instant answers about schedules, facilities, dining, and more!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>24/7 Available</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Campus Info</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils className="h-4 w-4" />
            <span>Dining Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Library Services</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;