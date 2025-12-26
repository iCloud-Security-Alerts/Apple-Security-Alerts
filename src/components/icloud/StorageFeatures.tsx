import { Cloud, Shield, Share2, HardDrive } from 'lucide-react';

const StorageFeatures = () => {
  const features = [
    { icon: Cloud, title: "iCloud Photos", description: "Safe and up to date photos.", color: "text-blue-500" },
    { icon: Shield, title: "iCloud Drive", description: "Access files everywhere.", color: "text-blue-500" },
    { icon: Share2, title: "Shared with You", description: "Find shared content easily.", color: "text-blue-500" }
  ];

  return (
    <div className="space-y-6 py-4">
      <div className="bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/20 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <HardDrive className="text-blue-500" size={24} />
          <h3 className="font-semibold text-lg">iCloud Storage</h3>
        </div>
        <div className="h-3 w-full bg-gray-200/50 rounded-full overflow-hidden flex mb-2">
          {/* Optional chaining on storage segments */}
          {[
            { width: '35%', color: 'bg-blue-500' },
            { width: '20%', color: 'bg-purple-500' },
            { width: '15%', color: 'bg-yellow-500' }
          ]?.map((section, i) => (
            <div key={i} style={{ width: section.width }} className={section.color} />
          ))}
        </div>
        <p className="text-sm text-gray-500">45.2 GB of 50 GB used</p>
      </div>
      <div className="grid gap-4">
        {/* Optional chaining on feature list */}
        {features?.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 backdrop-blur border border-white/10">
            <div className={`p-2 rounded-xl bg-white shadow-sm ${feature.color}`}>
              <feature.icon size={20} />
            </div>
            <div>
              <h4 className="font-medium">{feature.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorageFeatures;
