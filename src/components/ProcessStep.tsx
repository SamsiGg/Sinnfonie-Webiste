interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export default function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold text-lg shrink-0">
          {step}
        </div>
        <div className="w-px h-full bg-primary-200 mt-3" />
      </div>
      <div className="pb-12">
        <h3 className="font-serif text-xl font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
