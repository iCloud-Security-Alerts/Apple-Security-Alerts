import { LucideIcon } from 'lucide-react';

interface AppIconProps {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  size?: 'sm' | 'md' | 'lg';
}

const AppIcon = ({ icon: Icon, color, bgColor, size = 'md' }: AppIconProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 28,
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center shadow-lg`}
      style={{ backgroundColor: bgColor }}
    >
      <Icon size={iconSizes[size]} color={color} strokeWidth={1.5} />
    </div>
  );
};

export default AppIcon;
