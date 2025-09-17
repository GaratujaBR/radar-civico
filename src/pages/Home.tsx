import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Vote, 
  Eye, 
  Shield, 
  TrendingUp, 
  FileText,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-success/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20">
                Portal de Fiscalização Parlamentar
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Radar Cívico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Militante pela democracia, vigilante contra privilégios
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Acompanhamos a atuação dos congressistas brasileiros com dados oficiais, 
              análises transparentes e uma leitura comprometida com a defesa da democracia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary-hover">
                <Link to="/pec-3-2021">
                  Acessar PEC da Blindagem
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/sobre">
                  Conheça o Projeto
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-bold text-primary">513</CardTitle>
              <CardDescription>Deputados Monitorados</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="card-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-bold text-success">29</CardTitle>
              <CardDescription>Partidos Cobertos</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="card-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-bold text-warning">1</CardTitle>
              <CardDescription>Votação Rastreada</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="card-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-bold text-destructive">344</CardTitle>
              <CardDescription>Votos "Sim" na PEC</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Transparência em Ação
            </h2>
            <p className="text-lg text-muted-foreground">
              Ferramentas modernas para acompanhar decisões que impactam a democracia brasileira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <Vote className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Votações Nominais</CardTitle>
                <CardDescription>
                  Rastreamento detalhado de como cada parlamentar vota em questões importantes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-success mb-2" />
                <CardTitle>Análises Visuais</CardTitle>
                <CardDescription>
                  Mapas, gráficos e dashboards interativos para compreender padrões de votação
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-8 w-8 text-warning mb-2" />
                <CardTitle>Perfis Parlamentares</CardTitle>
                <CardDescription>
                  Histórico de votos e posicionamentos de cada deputado em questões-chave
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-destructive mb-2" />
                <CardTitle>Dados Oficiais</CardTitle>
                <CardDescription>
                  Informações extraídas diretamente do Portal da Câmara e fontes governamentais
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Filtros Avançados</CardTitle>
                <CardDescription>
                  Pesquise por estado, partido, nome do parlamentar ou posicionamento específico
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-success mb-2" />
                <CardTitle>Exportação</CardTitle>
                <CardDescription>
                  Baixe dados em formato aberto para suas próprias análises e pesquisas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlighted Section - PEC da Blindagem */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-shadow border-l-4 border-l-destructive">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="destructive">Em Destaque</Badge>
                    <CardTitle className="text-2xl">PEC da Blindagem (PEC 3/2021)</CardTitle>
                    <CardDescription className="text-base">
                      Proposta que visa blindar parlamentares de investigações. 
                      Votação do 2º turno em 16/09/2025 com 344 votos favoráveis.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>📊 Painel interativo com mapa do Brasil</span>
                  <span>🔍 Filtros por estado e partido</span>
                  <span>📋 Lista nominal completa</span>
                  <span>📈 Gráficos comparativos</span>
                </div>
                <Button className="bg-destructive hover:bg-destructive-hover" asChild>
                  <Link to="/pec-3-2021">
                    Acessar Painel da PEC
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            A Democracia Não Se Defende Sozinha
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aqui para expor privilégios e fortalecer a cidadania com dados claros e abertos. 
            Junte-se a nós nesta missão de transparência.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-hover" asChild>
            <Link to="/sobre">
              Saiba Mais Sobre Nossa Missão
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;