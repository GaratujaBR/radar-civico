import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">RC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Radar Cívico</span>
              <span className="text-xs text-muted-foreground hidden sm:block">radarcivico.org</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Início
            </Link>
            <Link to="/pec-3-2021" className="text-muted-foreground hover:text-foreground transition-colors">
              PEC da Blindagem
            </Link>
            <Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link to="/pec-3-2021">Acessar Dados</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col space-y-2 p-4">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/pec-3-2021" 
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                PEC da Blindagem
              </Link>
              <Link 
                to="/sobre" 
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Button variant="outline" size="sm" className="mt-2" asChild>
                <Link to="/pec-3-2021" onClick={() => setIsMenuOpen(false)}>
                  Acessar Dados
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;