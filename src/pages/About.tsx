import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Users, 
  Database, 
  ExternalLink,
  Shield,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="outline" className="text-primary border-primary/20">
          Manifesto
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Sobre o Radar Cívico
        </h1>
        <p className="text-xl text-muted-foreground">
          Um projeto independente de fiscalização parlamentar comprometido 
          com a transparência e a defesa da democracia brasileira.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto">
        <Card className="card-shadow border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              Nossa Missão
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A democracia não se defende sozinha.</strong> 
              O Radar Cívico surge da necessidade urgente de monitorar, analisar e divulgar 
              as ações do Congresso Nacional de forma independente e comprometida com o 
              interesse público.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Somos <strong className="text-foreground">militantes pela democracia</strong> e 
              <strong className="text-foreground"> vigilantes contra privilégios</strong>. 
              Nossa abordagem combina rigor técnico com posicionamento político claro: 
              acreditamos que a transparência é fundamental para o fortalecimento das 
              instituições democráticas.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">O Que Fazemos</h2>
          <p className="text-lg text-muted-foreground">
            Transformamos dados parlamentares em informação cidadã
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-shadow">
            <CardHeader>
              <Database className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Coleta de Dados</CardTitle>
              <CardDescription>
                Extraímos informações oficiais do Portal da Câmara, Senado Federal e TSE
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <Eye className="h-8 w-8 text-success mb-2" />
              <CardTitle>Análise Crítica</CardTitle>
              <CardDescription>
                Interpretamos os dados com uma leitura comprometida com o interesse público
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <Users className="h-8 w-8 text-warning mb-2" />
              <CardTitle>Divulgação Cidadã</CardTitle>
              <CardDescription>
                Disponibilizamos informações em formato acessível e exportável
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-4xl mx-auto">
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Shield className="h-6 w-6 text-success" />
              Nossa Metodologia
            </CardTitle>
            <CardDescription>
              Transparência total sobre nossas fontes e processos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Fontes Oficiais
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Portal da Câmara dos Deputados</li>
                  <li>• Senado Federal</li>
                  <li>• Tribunal Superior Eleitoral (TSE)</li>
                  <li>• APIs públicas governamentais</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Processo de Verificação
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cruzamento de fontes múltiplas</li>
                  <li>• Validação de dados históricos</li>
                  <li>• Atualização em tempo real</li>
                  <li>• Arquivamento para auditoria</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Current Focus */}
      <section className="max-w-4xl mx-auto">
        <Card className="card-shadow border-l-4 border-l-destructive">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Foco Atual: PEC da Blindagem
            </CardTitle>
            <CardDescription>
              Por que começamos com esta votação específica
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A PEC 3/2021, conhecida como "PEC da Blindagem", representa um ataque direto 
              às instituições democráticas ao propor blindar parlamentares de investigações. 
              Com 344 votos favoráveis no 2º turno (16/09/2025), esta votação exemplifica 
              a necessidade de vigilância constante sobre o Congresso Nacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="destructive" asChild>
                <Link to="/pec-3-2021">
                  Ver Painel da PEC
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Future Plans */}
      <section className="max-w-4xl mx-auto">
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Próximos Passos</CardTitle>
            <CardDescription>
              Expansão do monitoramento parlamentar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Novas Votações</h3>
                <p className="text-sm text-muted-foreground">
                  Expansão para outras votações relevantes do Congresso Nacional
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Senado Federal</h3>
                <p className="text-sm text-muted-foreground">
                  Inclusão do monitoramento dos senadores e suas votações
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Histórico Parlamentar</h3>
                <p className="text-sm text-muted-foreground">
                  Análise longitudinal do comportamento parlamentar
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">API Pública</h3>
                <p className="text-sm text-muted-foreground">
                  Disponibilização de API para desenvolvedores e pesquisadores
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact/Sources */}
      <section className="max-w-4xl mx-auto">
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Fontes e Transparência</CardTitle>
            <CardDescription>
              Todos os dados são públicos e verificáveis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href="https://www.camara.leg.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-3 border border-border rounded-lg hover:bg-muted/50"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Câmara dos Deputados</span>
              </a>
              <a 
                href="https://www.senado.leg.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-3 border border-border rounded-lg hover:bg-muted/50"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Senado Federal</span>
              </a>
              <a 
                href="https://www.tse.jus.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-3 border border-border rounded-lg hover:bg-muted/50"
              >
                <ExternalLink className="h-4 w-4" />
                <span>TSE</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          Junte-se à Fiscalização
        </h2>
        <p className="text-muted-foreground">
          Comece explorando nossos dados sobre a PEC da Blindagem e 
          acompanhe como seus representantes votaram.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary-hover" asChild>
          <Link to="/pec-3-2021">
            Explorar Dados da PEC
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default About;