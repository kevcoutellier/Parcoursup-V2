import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Eye,
  FileText,
  MessageCircle,
  MoreHorizontal,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Candidature {
  id: string;
  formation: string;
  etablissement: string;
  ville: string;
  status: "acceptée" | "en attente" | "refusée";
  dateReponse?: string;
  progression: number;
}

interface CandidatureOverviewProps {
  candidatures?: Candidature[];
  totalProgress?: number;
}

const CandidatureOverview: React.FC<CandidatureOverviewProps> = ({
  candidatures = [
    {
      id: "1",
      formation: "Licence Informatique",
      etablissement: "Université Paris-Saclay",
      ville: "Paris",
      status: "acceptée",
      dateReponse: "15/05/2023",
      progression: 100,
    },
    {
      id: "2",
      formation: "DUT Informatique",
      etablissement: "IUT de Villetaneuse",
      ville: "Villetaneuse",
      status: "en attente",
      progression: 70,
    },
    {
      id: "3",
      formation: "Prépa MPSI",
      etablissement: "Lycée Louis-le-Grand",
      ville: "Paris",
      status: "refusée",
      dateReponse: "10/05/2023",
      progression: 100,
    },
    {
      id: "4",
      formation: "Licence Mathématiques",
      etablissement: "Université Paris Diderot",
      ville: "Paris",
      status: "en attente",
      progression: 50,
    },
  ],
  totalProgress = 75,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "acceptée":
        return "bg-green-100 text-green-800";
      case "en attente":
        return "bg-amber-100 text-amber-800";
      case "refusée":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "acceptée":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "en attente":
        return <Clock className="h-4 w-4 text-amber-600" />;
      case "refusée":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "acceptée":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 border-green-200"
          >
            Acceptée
          </Badge>
        );
      case "en attente":
        return (
          <Badge
            variant="outline"
            className="bg-amber-100 text-amber-800 border-amber-200"
          >
            En attente
          </Badge>
        );
      case "refusée":
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 border-red-200"
          >
            Refusée
          </Badge>
        );
      default:
        return <Badge variant="outline">Inconnue</Badge>;
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Mes candidatures</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {candidatures.length} formations
            </span>
            <Button variant="outline" size="sm">
              Ajouter une formation
            </Button>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Progression globale</span>
            <span className="text-sm font-medium">{totalProgress}%</span>
          </div>
          <Progress value={totalProgress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {candidatures.map((candidature) => (
            <div
              key={candidature.id}
              className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{candidature.formation}</h3>
                    {getStatusBadge(candidature.status)}
                  </div>
                  <p className="text-sm text-gray-600">
                    {candidature.etablissement}, {candidature.ville}
                  </p>
                  {candidature.dateReponse && (
                    <p className="text-xs text-gray-500">
                      Réponse reçue le {candidature.dateReponse}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Voir les détails</DropdownMenuItem>
                      <DropdownMenuItem>Comparer</DropdownMenuItem>
                      <DropdownMenuItem>Retirer de ma liste</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">
                    Progression du dossier
                  </span>
                  <span className="text-xs text-gray-500">
                    {candidature.progression}%
                  </span>
                </div>
                <Progress value={candidature.progression} className="h-1.5" />
              </div>
              {candidature.status === "acceptée" && (
                <div className="mt-3 flex justify-end">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Confirmer mon choix
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidatureOverview;
