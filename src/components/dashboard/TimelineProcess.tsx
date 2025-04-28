import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, CheckCircle, Clock, AlertCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming" | "missed";
  important?: boolean;
}

interface TimelineProcessProps {
  events?: TimelineEvent[];
}

const TimelineProcess = ({ events = defaultEvents }: TimelineProcessProps) => {
  return (
    <Card className="w-full bg-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            Calendrier du processus d'admission
          </h2>
          <Badge variant="outline" className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            <span>Étape actuelle: Réponses des établissements</span>
          </Badge>
        </div>

        <div className="relative mt-6">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

          {/* Timeline events */}
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="flex gap-4">
                <div className="relative z-10">
                  {event.status === "completed" && (
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  )}
                  {event.status === "current" && (
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                  {event.status === "upcoming" && (
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                    </div>
                  )}
                  {event.status === "missed" && (
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{event.title}</h3>
                    {event.important && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge variant="destructive" className="text-xs">
                              Important
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Date limite critique pour votre dossier</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <p className="text-sm mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span>Complété</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <span>En cours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gray-400"></div>
            <span>À venir</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span>Échéance manquée</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const defaultEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "20 décembre 2023",
    title: "Ouverture de la plateforme",
    description:
      "Création de votre compte et découverte des formations disponibles.",
    status: "completed",
  },
  {
    id: "2",
    date: "18 janvier 2024",
    title: "Début des inscriptions",
    description: "Saisie des vœux et constitution du dossier de candidature.",
    status: "completed",
  },
  {
    id: "3",
    date: "14 mars 2024",
    title: "Date limite de formulation des vœux",
    description:
      "Dernier jour pour ajouter des formations à votre liste de vœux.",
    status: "completed",
    important: true,
  },
  {
    id: "4",
    date: "3 avril 2024",
    title: "Date limite de finalisation des dossiers",
    description:
      "Dernier jour pour compléter votre dossier et confirmer vos vœux.",
    status: "completed",
    important: true,
  },
  {
    id: "5",
    date: "30 mai 2024",
    title: "Réponses des établissements",
    description:
      "Début de la phase d'admission principale et réception des premières réponses.",
    status: "current",
  },
  {
    id: "6",
    date: "11 juillet 2024",
    title: "Fin de la phase principale",
    description:
      "Dernier jour pour accepter une proposition d'admission en phase principale.",
    status: "upcoming",
    important: true,
  },
  {
    id: "7",
    date: "12 septembre 2024",
    title: "Fin de la phase complémentaire",
    description: "Clôture définitive de la procédure Parcoursup.",
    status: "upcoming",
  },
];

export default TimelineProcess;
