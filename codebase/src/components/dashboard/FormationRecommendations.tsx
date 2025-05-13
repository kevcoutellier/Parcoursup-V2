import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  PlusCircle,
  BookOpen,
  MapPin,
  GraduationCap,
  BarChart3,
  ArrowRightLeft,
} from "lucide-react";

interface FormationProps {
  id: string;
  name: string;
  establishment: string;
  location: string;
  level: string;
  domain: string;
  admissionRate: number;
  matchScore: number;
}

interface FormationRecommendationsProps {
  recommendations?: FormationProps[];
  domains?: string[];
  locations?: string[];
  levels?: string[];
}

const FormationRecommendations: React.FC<FormationRecommendationsProps> = ({
  recommendations = [
    {
      id: "1",
      name: "Licence Informatique",
      establishment: "Université Paris-Saclay",
      location: "Île-de-France",
      level: "Licence",
      domain: "Informatique",
      admissionRate: 75,
      matchScore: 92,
    },
    {
      id: "2",
      name: "DUT Informatique",
      establishment: "IUT de Villetaneuse",
      location: "Île-de-France",
      level: "DUT",
      domain: "Informatique",
      admissionRate: 65,
      matchScore: 88,
    },
    {
      id: "3",
      name: "Classe Préparatoire MP",
      establishment: "Lycée Louis-le-Grand",
      location: "Île-de-France",
      level: "CPGE",
      domain: "Mathématiques",
      admissionRate: 25,
      matchScore: 85,
    },
    {
      id: "4",
      name: "Licence Mathématiques",
      establishment: "Université de Bordeaux",
      location: "Nouvelle-Aquitaine",
      level: "Licence",
      domain: "Mathématiques",
      admissionRate: 80,
      matchScore: 82,
    },
    {
      id: "5",
      name: "BTS SIO",
      establishment: "Lycée Turgot",
      location: "Île-de-France",
      level: "BTS",
      domain: "Informatique",
      admissionRate: 70,
      matchScore: 78,
    },
  ],
  domains = [
    "Informatique",
    "Mathématiques",
    "Sciences",
    "Économie",
    "Droit",
    "Santé",
    "Arts",
  ],
  locations = [
    "Île-de-France",
    "Nouvelle-Aquitaine",
    "Auvergne-Rhône-Alpes",
    "Occitanie",
    "Hauts-de-France",
  ],
  levels = ["Licence", "BTS", "DUT", "CPGE", "École spécialisée"],
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Formations recommandées</h2>
          <p className="text-muted-foreground">
            Basées sur votre profil et vos centres d'intérêt
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Affiner les recommandations
          </Button>
          <Button variant="outline" size="sm">
            Voir tout
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Filtres rapides</h3>
        <div className="flex flex-wrap gap-2">
          <Tabs defaultValue="all">
            <TabsList className="mb-2">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="domain">Domaine</TabsTrigger>
              <TabsTrigger value="location">Localisation</TabsTrigger>
              <TabsTrigger value="level">Niveau</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary"
                >
                  Tous
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary"
                >
                  Meilleur match
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary"
                >
                  Taux d'admission élevé
                </Badge>
              </div>
            </TabsContent>

            <TabsContent value="domain">
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <Badge
                    key={domain}
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary"
                  >
                    {domain}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <Badge
                    key={location}
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary"
                  >
                    {location}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="level">
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <Badge
                    key={level}
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary"
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ScrollArea className="h-[220px] pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((formation) => (
            <Card key={formation.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base">
                      {formation.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {formation.establishment}
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    {formation.matchScore}% match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{formation.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span>{formation.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{formation.domain}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    <span>Taux d'admission: {formation.admissionRate}%</span>
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="pt-2 flex justify-between">
                <Button variant="ghost" size="sm" className="text-xs">
                  <ArrowRightLeft className="h-3 w-3 mr-1" />
                  Comparer
                </Button>
                <Button size="sm" className="text-xs">
                  <PlusCircle className="h-3 w-3 mr-1" />
                  Ajouter à mes voeux
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FormationRecommendations;
