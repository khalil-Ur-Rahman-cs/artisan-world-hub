import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Leaf, Star } from "lucide-react";

const MarketOpportunity = () => {
  return (
    <div className="space-y-12">
      {/* Market Size */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full mb-6">
          <TrendingUp className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Massive Market Opportunity</h3>
        <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          $740B
        </div>
        <p className="text-xl text-gray-600">Global handicrafts market in 2024</p>
        <p className="text-lg text-primary font-semibold mt-2">Growing at 12% annually</p>
      </div>

      {/* Market Trends */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-lg">Sustainability Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Rising demand for eco-conscious and sustainable products among millennials and Gen Z</p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">Authenticity Premium</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Consumers willing to pay 20-40% more for authentic, handmade products with cultural stories</p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle className="text-lg">Global E-commerce</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Cross-border e-commerce growing 27% annually, especially in specialty marketplaces</p>
          </CardContent>
        </Card>
      </div>

      {/* Regional Focus */}
      <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Regional Spotlight: Swat Valley, Pakistan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Rich Cultural Heritage</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Traditional embroidery (Swati work) dating back centuries</li>
                <li>• Skilled woodwork and stone carving artisans</li>
                <li>• Unique textile patterns and jewelry designs</li>
                <li>• Strong craft community with passed-down techniques</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-accent">Market Gap</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Limited access to global buyers</li>
                <li>• No dedicated digital marketplace presence</li>
                <li>• High-quality crafts sold at local market prices</li>
                <li>• 10,000+ artisans seeking broader market access</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketOpportunity;