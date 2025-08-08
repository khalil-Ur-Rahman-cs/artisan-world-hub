import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface PitchSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

const PitchSection = ({ title, children, className = "", gradient = false }: PitchSectionProps) => {
  return (
    <section className={`py-20 ${gradient ? 'bg-gradient-to-br from-primary/5 to-accent/5' : ''} ${className}`}>
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PitchSection;