import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Users, Target, Award, Globe2 } from "lucide-react";

const CompetitiveAdvantage = () => {
  return (
    <div className="space-y-12">
      {/* Main Differentiators */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary-glow/15 hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <CardTitle className="text-xl">100% Handmade Only</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Unlike Etsy or Amazon, GCH exclusively features authentic handmade crafts with verified artisan profiles.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Rigorous artisan verification process</li>
              <li>• Craft authenticity guarantees</li>
              <li>• Story behind every product</li>
              <li>• No mass-produced items allowed</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-accent/15 hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-accent mr-3" />
              <CardTitle className="text-xl">Fair Trade Focus</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Lower fees and better artisan support ensure more profits go directly to craftspeople.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 3% vs 6.5% (Etsy) transaction fees</li>
              <li>• Direct artisan support programs</li>
              <li>• Cultural preservation initiatives</li>
              <li>• Community-driven platform</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Table */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Platform Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary">
                    Global Craft Hub
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">Etsy</th>
                  <th className="text-center py-4 px-4 font-semibold">Amazon Handmade</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Transaction Fees</td>
                  <td className="py-4 px-4 text-center bg-primary/10 text-primary font-semibold">3%</td>
                  <td className="py-4 px-4 text-center text-gray-600">6.5%</td>
                  <td className="py-4 px-4 text-center text-gray-600">15%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Monthly Fees</td>
                  <td className="py-4 px-4 text-center bg-primary/10 text-primary font-semibold">$5</td>
                  <td className="py-4 px-4 text-center text-gray-600">$0</td>
                  <td className="py-4 px-4 text-center text-gray-600">$39.99</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Handmade Only</td>
                  <td className="py-4 px-4 text-center bg-primary/10">
                    <Award className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center text-gray-400">Partial</td>
                  <td className="py-4 px-4 text-center text-gray-400">Partial</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Artisan Support</td>
                  <td className="py-4 px-4 text-center bg-primary/10">
                    <Users className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center text-gray-400">Limited</td>
                  <td className="py-4 px-4 text-center text-gray-400">Minimal</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Regional Focus</td>
                  <td className="py-4 px-4 text-center bg-primary/10">
                    <Target className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center text-gray-400">Global Generic</td>
                  <td className="py-4 px-4 text-center text-gray-400">Global Generic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Unique Value Propositions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardHeader>
            <Globe2 className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <CardTitle className="text-lg">Cultural Spotlight</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Dedicated features highlighting the cultural heritage and stories behind each craft tradition.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle className="text-lg">Personal Onboarding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              One-on-one support for artisans to set up their digital presence and optimize their listings.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-accent/5 to-accent/10">
          <CardHeader>
            <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
            <CardTitle className="text-lg">Community First</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Built by and for the craft community, with features designed based on real artisan feedback.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompetitiveAdvantage;