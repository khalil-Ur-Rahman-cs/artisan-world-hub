import HeroSection from "@/components/ui/hero-section";
import PitchSection from "@/components/ui/pitch-section";
import ProblemSolution from "@/components/ui/problem-solution";
import MarketOpportunity from "@/components/ui/market-opportunity";
import BusinessModel from "@/components/ui/business-model";
import CompetitiveAdvantage from "@/components/ui/competitive-advantage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Users, Award, Globe, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem & Solution */}
      <PitchSection title="The Opportunity" gradient>
        <ProblemSolution />
      </PitchSection>

      {/* Market Opportunity */}
      <PitchSection title="Market Opportunity">
        <MarketOpportunity />
      </PitchSection>

      {/* Product Overview */}
      <PitchSection title="Product Overview" gradient>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Users className="w-6 h-6 mr-3 text-primary" />
                For Artisans
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Professional storefront with cultural storytelling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Easy product listing with photo guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Analytics dashboard and sales insights</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Direct messaging with buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Secure payment processing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Globe className="w-6 h-6 mr-3 text-accent" />
                For Buyers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Curated authentic handmade products</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Rich cultural stories behind each item</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Direct connection with artisans</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Secure checkout and buyer protection</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Community reviews and recommendations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </PitchSection>

      {/* Business Model */}
      <PitchSection title="Business Model">
        <BusinessModel />
      </PitchSection>

      {/* Competitive Advantage */}
      <PitchSection title="Competitive Advantage" gradient>
        <CompetitiveAdvantage />
      </PitchSection>

      {/* Go-to-Market Strategy */}
      <PitchSection title="Go-to-Market Strategy">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Artisan Outreach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Partner with local craft organizations and artisan networks in target regions</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Digital Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Social media campaigns on Instagram, Pinterest, and Facebook targeting conscious consumers</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-secondary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-lg">Influencer Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Collaborate with craft bloggers, sustainable living influencers, and cultural advocates</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Education & Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Free workshops teaching artisans digital selling skills and online presence</p>
            </CardContent>
          </Card>
        </div>
      </PitchSection>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Global Craft Revolution
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              GCH bridges cultural gaps, promotes fair trade, and empowers artisans worldwide. 
              A mission-driven platform with clear revenue potential and massive social impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                View Full Business Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                Schedule Investor Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-white text-center">
        <div className="container px-6">
          <h3 className="text-2xl font-bold mb-4">Global Craft Hub</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Connecting authentic handmade artistry with conscious global consumers. 
            Building bridges between cultures, one craft at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
