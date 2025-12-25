import { 
  HardDrive, 
  Shield, 
  Mail, 
  Video, 
  Users 
} from 'lucide-react';

const StorageFeatures = () => {
  const features = [
    { icon: HardDrive, label: '12TB', color: '#007AFF' },
    { icon: Shield, label: 'Private Relay', color: '#34C759' },
    { icon: Mail, label: 'Hide My Email', color: '#5856D6' },
    { icon: Video, label: 'Secure Video', color: '#FF9500' },
    { icon: Users, label: 'Family Sharing', color: '#FF2D55' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
            style={{ backgroundColor: feature.color }}
          >
            <feature.icon size={28} color="#fff" strokeWidth={1.5} />
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StorageFeatures;
