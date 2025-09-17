import { Link } from "react-router-dom";
import { ExternalLink, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">RC</span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">Radar Cívico</div>
                <div className="text-sm text-muted-foreground">radarcivico.org</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Militante pela democracia, vigilante contra privilégios. 
              Monitoramento cidadão do Congresso Nacional com dados abertos e transparentes.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navegação</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Início
              </Link>
              <Link to="/pec-3-2021" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                PEC da Blindagem
              </Link>
              <Link to="/sobre" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre o Projeto
              </Link>
            </div>
          </div>

          {/* Sources & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Fontes Oficiais</h3>
            <div className="space-y-2">
              <a 
                href="https://www.camara.leg.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Câmara dos Deputados</span>
              </a>
              <a 
                href="https://www.senado.leg.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Senado Federal</span>
              </a>
              <a 
                href="https://www.tse.jus.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                <span>TSE</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Radar Cívico • Dados oficiais, leitura militante
            </p>
            <p className="text-xs text-muted-foreground">
              Portal independente de fiscalização parlamentar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;