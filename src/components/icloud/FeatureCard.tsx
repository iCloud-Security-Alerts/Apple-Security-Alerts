import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const FeatureCard = ({ title, description, children }: FeatureCardProps) => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {description}
        </p>
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureCard;
