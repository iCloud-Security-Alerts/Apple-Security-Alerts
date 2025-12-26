import { 
  Mail, 
  MapPin, 
  Bell, 
  Image, 
  FileText, 
  Calendar,
  Users,
  Clock,
  Folder,
  StickyNote,
  Bookmark,
  Mic
} from 'lucide-react';
import AppIcon from './AppIcon';

const AppIconGrid = () => {
  const apps = [
    { icon: Mail, color: '#fff', bgColor: '#007AFF' },
    { icon: MapPin, color: '#fff', bgColor: '#34C759' },
    { icon: Bell, color: '#fff', bgColor: '#FF3B30' },
    { icon: Image, color: '#fff', bgColor: 'linear-gradient(135deg, #FF9500, #FF2D55, #AF52DE)' },
    { icon: FileText, color: '#fff', bgColor: '#5856D6' },
    { icon: Calendar, color: '#FF3B30', bgColor: '#fff' },
    { icon: Users, color: '#fff', bgColor: '#FF9500' },
    { icon: Clock, color: '#fff', bgColor: '#FF9500' },
    { icon: Folder, color: '#fff', bgColor: '#007AFF' },
    { icon: StickyNote, color: '#000', bgColor: '#FFCC00' },
    { icon: Bookmark, color: '#fff', bgColor: '#007AFF' },
    { icon: Mic, color: '#fff', bgColor: 'linear-gradient(135deg, #5856D6, #AF52DE)' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
      {/* Safety check added below with apps?.map */}
      {apps?.map((app, index) => (
        <div
          key={index}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
          style={{ 
            background: app.bgColor.includes('gradient') ? app.bgColor : app.bgColor,
            border: app.bgColor === '#fff' ? '1px solid hsl(var(--border))' : 'none'
          }}
        >
          <app.icon size={24} color={app.color} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
};

export default AppIconGrid;
