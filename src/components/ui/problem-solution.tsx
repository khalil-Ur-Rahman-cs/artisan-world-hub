import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Target, Users, Globe2, Zap, Heart } from "lucide-react";

const ProblemSolution = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Problem */}
      <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl text-red-700">The Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Artisans struggle with:</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Lack of dedicated platforms for handmade crafts
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                High platform fees (up to 20%) and complex processes
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Limited global visibility and technical knowledge
              </li>
            </ul>
          </div>
          <div className="space-y-3 pt-4">
            <h4 className="font-semibold text-gray-800">Buyers want authentic goods but:</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Can't find them easily in mass-market platforms
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Lack trust in product authenticity
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Solution */}
      <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-primary-glow/10">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Our Solution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 text-center font-medium">
            GCH offers a dedicated online marketplace designed exclusively for handmade crafts
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h5 className="font-semibold text-sm">User-Friendly</h5>
            </div>
            <div className="text-center p-4">
              <Globe2 className="w-8 h-8 text-accent mx-auto mb-2" />
              <h5 className="font-semibold text-sm">Global Reach</h5>
            </div>
            <div className="text-center p-4">
              <Zap className="w-8 h-8 text-primary-glow mx-auto mb-2" />
              <h5 className="font-semibold text-sm">Low-Cost</h5>
            </div>
            <div className="text-center p-4">
              <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
              <h5 className="font-semibold text-sm">Fair Trade</h5>
            </div>
          </div>

          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Preserve traditional skills & cultural heritage</li>
              <li>• Empower artisans with global market access</li>
              <li>• Connect conscious buyers with authentic products</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProblemSolution;