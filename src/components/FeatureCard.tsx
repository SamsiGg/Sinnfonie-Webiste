import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-warm-100">
      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
