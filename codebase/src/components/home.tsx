import React from "react";
import { Bell, User, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CandidatureOverview from "./dashboard/CandidatureOverview";
import TimelineProcess from "./dashboard/TimelineProcess";
import FormationRecommendations from "./dashboard/FormationRecommendations";
import DecisionTools from "./dashboard/DecisionTools";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Parcoursup 2.0</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary">
                Tableau de bord
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary">
                Mes candidatures
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary">
                Formations
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary">
                Calendrier
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary">
                Aide
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-[200px] pl-8 md:w-[300px] rounded-full bg-muted"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Avatar>
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
                alt="Avatar"
              />
              <AvatarFallback>ET</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bonjour, Emma</h2>
            <p className="text-muted-foreground">
              Voici un aperçu de vos candidatures et recommandations.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline">Compléter mon profil</Button>
            <Button className="bg-fr-blue hover:bg-fr-blue-hover">
              Ajouter une candidature
            </Button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="space-y-8">
          {/* Candidature Overview */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Mes candidatures</h3>
              <Button variant="ghost" size="sm">
                Voir tout
              </Button>
            </div>
            <CandidatureOverview />
          </section>

          {/* Timeline Process */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Calendrier du processus</h3>
              <Button variant="ghost" size="sm">
                Détails
              </Button>
            </div>
            <TimelineProcess />
          </section>

          {/* Formation Recommendations */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Formations recommandées</h3>
              <Button variant="ghost" size="sm">
                Plus de recommandations
              </Button>
            </div>
            <FormationRecommendations />
          </section>

          {/* Decision Tools */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                Outils d'aide à la décision
              </h3>
            </div>
            <Tabs defaultValue="compare">
              <TabsList className="mb-4">
                <TabsTrigger value="compare">Comparateur</TabsTrigger>
                <TabsTrigger value="simulator">
                  Simulateur d'admission
                </TabsTrigger>
                <TabsTrigger value="map">Carte des établissements</TabsTrigger>
              </TabsList>
              <TabsContent value="compare">
                <DecisionTools activeTab="compare" />
              </TabsContent>
              <TabsContent value="simulator">
                <DecisionTools activeTab="simulator" />
              </TabsContent>
              <TabsContent value="map">
                <DecisionTools activeTab="map" />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 bg-background">
        <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2023 Parcoursup 2.0. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Aide
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Confidentialité
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Conditions d'utilisation
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
