import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, BarChart2, ArrowRight, Search, Compass } from "lucide-react";

interface DecisionToolsProps {
  formations?: Formation[];
}

interface Formation {
  id: string;
  name: string;
  institution: string;
  location: string;
  admissionRate: number;
  coordinates?: [number, number];
  requirements?: {
    bac: string;
    average: number;
    specialities: string[];
  };
}

const DecisionTools: React.FC<DecisionToolsProps> = ({
  formations = defaultFormations,
}) => {
  const [selectedFormations, setSelectedFormations] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [studentProfile, setStudentProfile] = useState({
    average: 14,
    bac: "Général",
    specialities: ["Mathématiques", "Physique-Chimie"],
  });

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Outils d'aide à la décision
        </CardTitle>
        <CardDescription>
          Explorez et comparez les formations pour faire un choix éclairé
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="compare">
          <TabsList className="mb-4">
            <TabsTrigger value="compare" className="flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              Comparateur
            </TabsTrigger>
            <TabsTrigger value="simulator" className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Simulateur d'admission
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Carte des établissements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="compare" className="space-y-4">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher une formation..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <Button variant="outline">Ajouter à la comparaison</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {formations.slice(0, 3).map((formation) => (
                <Card key={formation.id} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      {formation.name}
                    </CardTitle>
                    <CardDescription>{formation.institution}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Taux d'admission:</span>
                      <Badge
                        variant={
                          formation.admissionRate > 50 ? "secondary" : "outline"
                        }
                      >
                        {formation.admissionRate}%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Localisation:</span>
                      <span className="text-sm font-medium">
                        {formation.location}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-2">
                      Voir détails
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="simulator" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Votre profil</h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Moyenne générale
                  </label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[studentProfile.average]}
                      min={0}
                      max={20}
                      step={0.5}
                      onValueChange={(value) =>
                        setStudentProfile({
                          ...studentProfile,
                          average: value[0],
                        })
                      }
                      className="flex-1"
                    />
                    <span className="w-12 text-center">
                      {studentProfile.average}/20
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Type de Bac</label>
                  <Select
                    value={studentProfile.bac}
                    onValueChange={(value) =>
                      setStudentProfile({ ...studentProfile, bac: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un type de Bac" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Général">Bac Général</SelectItem>
                      <SelectItem value="Technologique">
                        Bac Technologique
                      </SelectItem>
                      <SelectItem value="Professionnel">
                        Bac Professionnel
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-2">
                  <Button className="w-full">Simuler mes chances</Button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-4">
                  Résultats de simulation
                </h3>

                <div className="space-y-3">
                  {formations.slice(0, 3).map((formation) => {
                    // Calcul simple de compatibilité basé sur la moyenne
                    const compatibility = Math.min(
                      100,
                      Math.max(
                        0,
                        (studentProfile.average / 20) *
                          100 *
                          (formation.admissionRate / 100),
                      ),
                    );

                    return (
                      <div
                        key={formation.id}
                        className="flex justify-between items-center p-2 border-b last:border-0"
                      >
                        <div>
                          <p className="font-medium">{formation.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {formation.institution}
                          </p>
                        </div>
                        <Badge
                          variant={
                            compatibility > 70
                              ? "default"
                              : compatibility > 40
                                ? "secondary"
                                : "outline"
                          }
                          className="ml-2"
                        >
                          {Math.round(compatibility)}% compatible
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="map"
            className="h-[400px] relative border rounded-md"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
              <div className="text-center">
                <Compass className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="mt-2 text-muted-foreground">
                  Carte interactive des établissements
                </p>
                <p className="text-sm text-muted-foreground">
                  Explorez les formations par localisation géographique
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Données par défaut pour les formations
const defaultFormations: Formation[] = [
  {
    id: "1",
    name: "Licence Informatique",
    institution: "Université Paris-Saclay",
    location: "Île-de-France",
    admissionRate: 65,
    requirements: {
      bac: "Général",
      average: 12,
      specialities: ["Mathématiques", "Numérique et sciences informatiques"],
    },
  },
  {
    id: "2",
    name: "DUT Techniques de commercialisation",
    institution: "IUT de Lyon",
    location: "Auvergne-Rhône-Alpes",
    admissionRate: 45,
    requirements: {
      bac: "Général",
      average: 13,
      specialities: ["SES", "HGGSP"],
    },
  },
  {
    id: "3",
    name: "CPGE MPSI",
    institution: "Lycée Louis-le-Grand",
    location: "Île-de-France",
    admissionRate: 25,
    requirements: {
      bac: "Général",
      average: 16,
      specialities: ["Mathématiques", "Physique-Chimie"],
    },
  },
  {
    id: "4",
    name: "BTS Management Commercial Opérationnel",
    institution: "Lycée Gustave Eiffel",
    location: "Nouvelle-Aquitaine",
    admissionRate: 70,
    requirements: {
      bac: "Général",
      average: 11,
      specialities: ["SES"],
    },
  },
  {
    id: "5",
    name: "Licence Droit",
    institution: "Université de Strasbourg",
    location: "Grand Est",
    admissionRate: 55,
    requirements: {
      bac: "Général",
      average: 12,
      specialities: ["HGGSP", "SES"],
    },
  },
];

export default DecisionTools;
