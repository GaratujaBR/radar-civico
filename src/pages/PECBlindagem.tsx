import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Calendar, 
  Users, 
  Vote,
  BarChart3,
  Download,
  Map
} from "lucide-react";

const PECBlindagem = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="destructive" className="text-lg px-4 py-2">
          PEC da Blindagem
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          PEC 3/2021
        </h1>
        <p className="text-xl text-muted-foreground">
          Proposta de Emenda à Constituição que visa blindar parlamentares de investigações
        </p>
      </section>

      {/* Key Info */}
      <section className="max-w-6xl mx-auto">
        <Card className="card-shadow border-l-4 border-l-destructive">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Informações da Votação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <Calendar className="h-8 w-8 text-muted-foreground mx-auto" />
                <div className="font-semibold text-lg">16/09/2025</div>
                <div className="text-sm text-muted-foreground">Data da Votação</div>
              </div>
              <div className="text-center space-y-2">
                <Vote className="h-8 w-8 text-destructive mx-auto" />
                <div className="font-semibold text-lg text-destructive">344</div>
                <div className="text-sm text-muted-foreground">Votos "Sim"</div>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 text-muted-foreground mx-auto" />
                <div className="font-semibold text-lg">2º Turno</div>
                <div className="text-sm text-muted-foreground">Fase da Votação</div>
              </div>
              <div className="text-center space-y-2">
                <BarChart3 className="h-8 w-8 text-muted-foreground mx-auto" />
                <div className="font-semibold text-lg">ID 13158</div>
                <div className="text-sm text-muted-foreground">Identificação Oficial</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Painel Interativo</h2>
          <p className="text-lg text-muted-foreground">
            Explore os dados da votação através de visualizações interativas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Preview */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Mapa do Brasil
              </CardTitle>
              <CardDescription>
                Visualização por estado dos votos favoráveis à PEC
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Map className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Mapa Interativo</p>
                  <p className="text-sm text-muted-foreground">Em desenvolvimento</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Charts Preview */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Gráficos Comparativos
              </CardTitle>
              <CardDescription>
                Análise por partido e unidade federativa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Gráficos Interativos</p>
                  <p className="text-sm text-muted-foreground">Em desenvolvimento</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="card-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-sm font-medium">Filtros por UF</div>
              <div className="text-xs text-muted-foreground">27 estados</div>
            </CardContent>
          </Card>
          <Card className="card-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-sm font-medium">Filtros por Partido</div>
              <div className="text-xs text-muted-foreground">29 partidos</div>
            </CardContent>
          </Card>
          <Card className="card-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-sm font-medium">Busca por Nome</div>
              <div className="text-xs text-muted-foreground">513 deputados</div>
            </CardContent>
          </Card>
          <Card className="card-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-sm font-medium">Exportação CSV</div>
              <div className="text-xs text-muted-foreground">Dados abertos</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Context Information */}
      <section className="max-w-4xl mx-auto">
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Contexto da PEC</CardTitle>
            <CardDescription>
              Por que esta votação é importante para a democracia brasileira
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              A PEC 3/2021, conhecida como "PEC da Blindagem", propõe alterações na Constituição 
              que dificultariam investigações contra parlamentares. A proposta estabelece que 
              deputados e senadores só podem ser investigados com autorização da Casa Legislativa 
              a que pertencem, criando um escudo protetor contra o sistema de justiça.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com 344 votos favoráveis no 2º turno, a PEC demonstra uma articulação ampla 
              de diferentes partidos em favor da proteção parlamentar. Esta votação representa 
              um marco na tensão entre os poderes e levanta questões fundamentais sobre 
              accountability e transparência no sistema político brasileiro.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Coming Soon */}
      <section className="max-w-4xl mx-auto text-center">
        <Card className="card-shadow bg-gradient-to-br from-primary/5 to-success/5">
          <CardHeader>
            <CardTitle className="text-2xl">Painel em Desenvolvimento</CardTitle>
            <CardDescription className="text-lg">
              O dashboard interativo com todos os dados da votação estará disponível em breve
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Map className="h-4 w-4 text-primary" />
                <span>Mapa interativo do Brasil</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <BarChart3 className="h-4 w-4 text-success" />
                <span>Gráficos comparativos</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Download className="h-4 w-4 text-warning" />
                <span>Exportação de dados</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Enquanto finalizamos o desenvolvimento, você pode explorar outros recursos do Radar Cívico.
              </p>
              <Button variant="outline" size="lg" disabled>
                Dashboard Interativo (Em Breve)
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default PECBlindagem;