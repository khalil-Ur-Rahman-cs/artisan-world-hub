import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Megaphone, Zap } from "lucide-react";

const BusinessModel = () => {
  return (
    <div className="space-y-12">
      {/* Revenue Streams */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-xl text-primary">Monthly Subscriptions</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$5/month</div>
            <p className="text-gray-600 mb-4">Per active seller</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Unlimited product listings</li>
              <li>• Professional storefront</li>
              <li>• Analytics dashboard</li>
              <li>• Marketing tools access</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="text-xl text-accent">Transaction Fees</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3%</div>
            <p className="text-gray-600 mb-4">Per successful sale</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Much lower than Etsy (6.5%)</li>
              <li>• Covers payment processing</li>
              <li>• Includes buyer protection</li>
              <li>• Dispute resolution service</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <Megaphone className="w-8 h-8 text-secondary" />
            </div>
            <CardTitle className="text-xl text-secondary">Premium Features</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">$10-50</div>
            <p className="text-gray-600 mb-4">Monthly add-ons</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Featured product placements</li>
              <li>• Social media promotion</li>
              <li>• Priority customer support</li>
              <li>• Advanced analytics</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Financial Projections */}
      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-primary mr-3" />
            <CardTitle className="text-2xl">Financial Projections</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 text-primary">Year 1 Target</h4>
              <div className="space-y-3">
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">500</div>
                  <div className="text-sm text-gray-600">Active Sellers</div>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$2,500</div>
                  <div className="text-sm text-gray-600">Monthly Subscriptions</div>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent">$5,000</div>
                  <div className="text-sm text-gray-600">Transaction Fees</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 text-primary">Year 2 Target</h4>
              <div className="space-y-3">
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">2,000</div>
                  <div className="text-sm text-gray-600">Active Sellers</div>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$10,000</div>
                  <div className="text-sm text-gray-600">Monthly Subscriptions</div>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent">$25,000</div>
                  <div className="text-sm text-gray-600">Transaction Fees</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 text-primary">Year 3 Target</h4>
              <div className="space-y-3">
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">5,000</div>
                  <div className="text-sm text-gray-600">Active Sellers</div>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$25,000</div>
                  <div className="text-sm text-gray-600">Monthly Subscriptions</div>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent">$75,000</div>
                  <div className="text-sm text-gray-600">Transaction Fees</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-2">Total Monthly Revenue Potential</h4>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              $100,000+
            </div>
            <p className="text-gray-600 mt-2">By Year 3, with additional premium features and advertising revenue</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessModel;