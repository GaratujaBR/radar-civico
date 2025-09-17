import React, { useState, useCallback, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import brasilTopology from '@/data/brazil-states.json';

export type UFKey = "AC"|"AL"|"AM"|"AP"|"BA"|"CE"|"DF"|"ES"|"GO"|"MA"|"MG"|"MS"|"MT"|
                    "PA"|"PB"|"PE"|"PI"|"PR"|"RJ"|"RN"|"RO"|"RR"|"RS"|"SC"|"SE"|"SP"|"TO";

export type Datum = { uf: UFKey; value: number };

export interface GeoChoroplethBRProps {
  data: Datum[];
  title?: string;
  selectedUFs?: UFKey[];
  height?: number;
  colorBins?: number[];
  onSelect?(ufs: UFKey[]): void;
  onHover?(uf: UFKey | null, d?: Datum): void;
}

const ID_TO_UF: Record<string, UFKey> = {
  "12": "AC", "27": "AL", "13": "AM", "16": "AP", "29": "BA", "23": "CE", "53": "DF", "32": "ES", "52": "GO",
  "21": "MA", "31": "MG", "50": "MS", "51": "MT", "15": "PA", "25": "PB", "26": "PE", "22": "PI", "41": "PR",
  "33": "RJ", "24": "RN", "11": "RO", "14": "RR", "43": "RS", "42": "SC", "28": "SE", "35": "SP", "17": "TO"
};

const DEFAULT_BINS = [0, 1, 5, 10, 20, 50];
const DEFAULT_COLORS = ["#D4E5FF", "#B8D2FF", "#81AEFC", "#2670E8", "#155BCB", "#0C326F"];

const GeoChoroplethBR: React.FC<GeoChoroplethBRProps> = ({
  data,
  title,
  selectedUFs = [],
  height = 340,
  colorBins = DEFAULT_BINS,
  onSelect,
  onHover
}) => {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; content: string } | null>(null);

  // Create lookup map for values
  const valueMap = useMemo(() => {
    const map = new Map<UFKey, number>();
    data.forEach(d => map.set(d.uf, d.value));
    return map;
  }, [data]);

  // Get color for value based on bins
  const getColor = useCallback((value: number): string => {
    const bins = colorBins;
    const colors = DEFAULT_COLORS;
    
    for (let i = bins.length - 1; i >= 0; i--) {
      if (value >= bins[i]) {
        return colors[Math.min(i, colors.length - 1)];
      }
    }
    return colors[0];
  }, [colorBins]);

  const handleGeographyClick = useCallback((geo: any, event: React.MouseEvent) => {
    const ufKey = ID_TO_UF[geo.properties.ID] as UFKey;
    if (!ufKey || !onSelect) return;

    if (event.ctrlKey || event.metaKey) {
      // Multi-select
      const newSelection = selectedUFs.includes(ufKey)
        ? selectedUFs.filter(uf => uf !== ufKey)
        : [...selectedUFs, ufKey];
      onSelect(newSelection);
    } else {
      // Single select
      onSelect([ufKey]);
    }
  }, [selectedUFs, onSelect]);

  const handleGeographyMouseEnter = useCallback((geo: any, event: React.MouseEvent) => {
    const ufKey = ID_TO_UF[geo.properties.ID] as UFKey;
    const value = valueMap.get(ufKey) || 0;
    const datum = data.find(d => d.uf === ufKey);
    
    // Set tooltip
    const rect = (event.currentTarget as Element).getBoundingClientRect();
    setTooltip({
      x: event.clientX,
      y: event.clientY,
      content: `${ufKey} — ${value} votos SIM`
    });

    onHover?.(ufKey, datum);
  }, [valueMap, data, onHover]);

  const handleGeographyMouseLeave = useCallback(() => {
    setTooltip(null);
    onHover?.(null);
  }, [onHover]);

  const handleMapClick = useCallback((event: React.MouseEvent) => {
    // Clear selection when clicking empty area
    if (event.target === event.currentTarget && onSelect) {
      onSelect([]);
    }
  }, [onSelect]);

  return (
    <div className="relative bg-background">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">{title}</h3>
      )}
      
      <div 
        className="relative border border-border rounded-lg overflow-hidden"
        style={{ height }}
        onClick={handleMapClick}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [-54, -15],
            scale: 700
          }}
          width={800}
          height={height}
          className="w-full h-full"
        >
          <ZoomableGroup>
            <Geographies geography={brasilTopology}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const ufKey = ID_TO_UF[geo.properties.ID] as UFKey;
                  const value = valueMap.get(ufKey) || 0;
                  const isSelected = selectedUFs.includes(ufKey);
                  const fillColor = getColor(value);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fillColor}
                      stroke="#E5EAF2"
                      strokeWidth={isSelected ? 2 : 0.5}
                      style={{
                        default: {
                          stroke: isSelected ? "#1351B4" : "#E5EAF2",
                          strokeWidth: isSelected ? 2 : 0.5,
                          outline: "none",
                        },
                        hover: {
                          stroke: "#1351B4",
                          strokeWidth: 1.5,
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          stroke: "#1351B4",
                          strokeWidth: 2,
                          outline: "none",
                        },
                      }}
                      onClick={(event) => handleGeographyClick(geo, event)}
                      onMouseEnter={(event) => handleGeographyMouseEnter(geo, event)}
                      onMouseLeave={handleGeographyMouseLeave}
                      tabIndex={0}
                      role="button"
                      aria-label={`${geo.properties.NAME}: ${value} votos`}
                      className="focus:outline-none focus:ring-2 focus:ring-blue-10"
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 bg-popover text-popover-foreground px-3 py-2 rounded-md shadow-lg border text-sm pointer-events-none"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 10,
          }}
        >
          {tooltip.content}
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
        {colorBins.map((bin, index) => (
          <div key={bin} className="flex items-center gap-1">
            <div
              className="w-4 h-4 rounded border border-border"
              style={{ backgroundColor: DEFAULT_COLORS[index] }}
            />
            <span className="text-muted-foreground">
              {index === 0 
                ? `${bin}` 
                : index === colorBins.length - 1
                ? `${bin}+`
                : `${colorBins[index - 1] + 1}-${bin}`
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeoChoroplethBR;