import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import GeoChoroplethBR, { type UFKey, type Datum } from '@/components/charts/GeoChoroplethBR';
import { Download, Search } from 'lucide-react';

// Mock data simulating PEC votes by state
const mockData: Array<{ uf: UFKey; deputado: string; partido: string; voto: string }> = [
  { uf: "SP", deputado: "João Silva", partido: "PT", voto: "Sim" },
  { uf: "SP", deputado: "Maria Santos", partido: "PSDB", voto: "Sim" },
  { uf: "SP", deputado: "Pedro Costa", partido: "PL", voto: "Sim" },
  { uf: "SP", deputado: "Ana Oliveira", partido: "PP", voto: "Sim" },
  { uf: "SP", deputado: "Carlos Lima", partido: "MDB", voto: "Sim" },
  { uf: "RJ", deputado: "Rafael Souza", partido: "PT", voto: "Sim" },
  { uf: "RJ", deputado: "Lucia Pereira", partido: "PSD", voto: "Sim" },
  { uf: "RJ", deputado: "Roberto Alves", partido: "PP", voto: "Sim" },
  { uf: "MG", deputado: "Fernanda Rocha", partido: "PSDB", voto: "Sim" },
  { uf: "MG", deputado: "Gustavo Mendes", partido: "PL", voto: "Sim" },
  { uf: "MG", deputado: "Patricia Ferreira", partido: "PT", voto: "Sim" },
  { uf: "BA", deputado: "Diego Barbosa", partido: "PP", voto: "Sim" },
  { uf: "BA", deputado: "Camila Dias", partido: "PSD", voto: "Sim" },
  { uf: "RS", deputado: "Marcelo Gomes", partido: "PDT", voto: "Sim" },
  { uf: "RS", deputado: "Juliana Castro", partido: "PSB", voto: "Sim" },
  { uf: "PR", deputado: "Alexandre Cunha", partido: "PL", voto: "Sim" },
  { uf: "SC", deputado: "Renata Cardoso", partido: "MDB", voto: "Sim" },
  { uf: "GO", deputado: "Thiago Martins", partido: "PP", voto: "Sim" },
  { uf: "PE", deputado: "Beatriz Moura", partido: "PSB", voto: "Sim" },
  { uf: "CE", deputado: "Leonardo Araujo", partido: "PDT", voto: "Sim" },
  { uf: "AM", deputado: "Gabriela Ribeiro", partido: "PSD", voto: "Sim" },
  { uf: "PA", deputado: "Felipe Nunes", partido: "PT", voto: "Sim" },
];

const MapDemo: React.FC = () => {
  const [selectedUFs, setSelectedUFs] = useState<UFKey[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartido, setSelectedPartido] = useState<string>('');

  // Filter data based on selections
  const filteredData = useMemo(() => {
    return mockData.filter(row => {
      const matchesUF = selectedUFs.length === 0 || selectedUFs.includes(row.uf);
      const matchesSearch = !searchTerm || 
        row.deputado.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.partido.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPartido = !selectedPartido || row.partido === selectedPartido;
      
      return matchesUF && matchesSearch && matchesPartido;
    });
  }, [selectedUFs, searchTerm, selectedPartido]);

  // Aggregate data by UF for the map
  const mapData: Datum[] = useMemo(() => {
    const aggregation = new Map<UFKey, number>();
    
    filteredData.forEach(row => {
      if (row.voto === "Sim") {
        aggregation.set(row.uf, (aggregation.get(row.uf) || 0) + 1);
      }
    });

    return Array.from(aggregation, ([uf, value]) => ({ uf, value }));
  }, [filteredData]);

  // Get unique parties for filter
  const partidos = useMemo(() => {
    return Array.from(new Set(mockData.map(row => row.partido))).sort();
  }, []);

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Deputado,Partido,UF,Voto\n" +
      filteredData.map(row => `${row.deputado},${row.partido},${row.uf},${row.voto}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "pec-blindagem-filtrado.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearFilters = () => {
    setSelectedUFs([]);
    setSearchTerm('');
    setSelectedPartido('');
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Demo: Mapa Interativo do Brasil</h1>
        <p className="text-lg text-muted-foreground">
          Demonstração do componente GeoChoroplethBR com dados simulados da PEC 3/2021
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros e Controles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Buscar Deputado/Partido</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Digite para buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Filtrar por Partido</label>
              <select
                value={selectedPartido}
                onChange={(e) => setSelectedPartido(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                <option value="">Todos os partidos</option>
                {partidos.map(partido => (
                  <option key={partido} value={partido}>{partido}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Ações</label>
              <div className="flex gap-2">
                <Button onClick={clearFilters} variant="outline" size="sm">
                  Limpar Filtros
                </Button>
                <Button onClick={handleExport} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  CSV
                </Button>
              </div>
            </div>
          </div>

          {/* Selected UFs */}
          {selectedUFs.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium">UFs Selecionadas:</label>
              <div className="flex flex-wrap gap-2">
                {selectedUFs.map(uf => (
                  <Badge key={uf} variant="secondary">
                    {uf}
                    <button
                      onClick={() => setSelectedUFs(prev => prev.filter(u => u !== uf))}
                      className="ml-2 hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{filteredData.length}</div>
            <div className="text-sm text-muted-foreground">Votos "Sim" Filtrados</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-secondary">{mapData.length}</div>
            <div className="text-sm text-muted-foreground">UFs com Votos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">{selectedUFs.length}</div>
            <div className="text-sm text-muted-foreground">UFs Selecionadas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-warning">{partidos.length}</div>
            <div className="text-sm text-muted-foreground">Partidos Total</div>
          </CardContent>
        </Card>
      </div>

      {/* Map */}
      <Card>
        <CardHeader>
          <CardTitle>Mapa do Brasil - Votos "Sim" por UF</CardTitle>
        </CardHeader>
        <CardContent>
          <GeoChoroplethBR
            data={mapData}
            selectedUFs={selectedUFs}
            onSelect={setSelectedUFs}
            height={400}
            colorBins={[0, 1, 2, 3, 5, 8]}
          />
          <div className="mt-4 text-sm text-muted-foreground text-center">
            <p>
              <strong>Instruções:</strong> Clique em um estado para selecioná-lo. 
              Use Ctrl+Click para seleção múltipla. Clique no fundo para limpar seleção.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Dados Filtrados 
            <Badge variant="outline" className="ml-2">{filteredData.length} registros</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border max-h-96 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Deputado</TableHead>
                  <TableHead>Partido</TableHead>
                  <TableHead>UF</TableHead>
                  <TableHead>Voto</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                      Nenhum resultado encontrado com os filtros aplicados
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.deputado}</TableCell>
                      <TableCell>{row.partido}</TableCell>
                      <TableCell>
                        <Badge variant={selectedUFs.includes(row.uf) ? "default" : "outline"}>
                          {row.uf}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={row.voto === "Sim" ? "destructive" : "secondary"}>
                          {row.voto}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapDemo;