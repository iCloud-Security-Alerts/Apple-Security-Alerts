import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CloudLogo from '@/components/icloud/CloudLogo';
import AppIconGrid from '@/components/icloud/AppIconGrid';
import FeatureCard from '@/components/icloud/FeatureCard';
import StorageFeatures from '@/components/icloud/StorageFeatures';
import Footer from '@/components/icloud/Footer';
import SignInDialog from '@/components/icloud/SignInDialog';

const Index = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <CloudLogo />
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight mb-6">
            iCloud
          </h1>
          <Button 
            onClick={() => setSignInOpen(true)}
            className="rounded-full px-8 py-6 text-lg font-medium bg-foreground text-background hover:bg-foreground/90 transition-all"
          >
            Sign In
          </Button>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            The best place for all your photos, files, notes, mail, and more.
          </p>
        </div>
      </section>

      {/* App Icons Section */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto">
          <AppIconGrid />
        </div>
      </section>

      {/* Feature 1 */}
      <FeatureCard
        title="Easily access apps and data from your iPhone on the web"
        description="iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you're always up to date."
      />

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-border"></div>
      </div>

      {/* Feature 2 - iCloud+ */}
      <FeatureCard
        title="More storage, plus features to protect your privacy and connect with friends"
        description="Upgrade to iCloud+ to get more storage, plan events with Apple Invites, and have peace of mind with privacy features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video. You can even share your subscription with your family."
      >
        <StorageFeatures />
        <a 
          href="https://apple.com/icloud" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-8 text-[hsl(var(--accent))] hover:underline font-medium"
        >
          Learn more at apple.com/icloud
        </a>
      </FeatureCard>

      <Footer />

      <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />
    </div>
  );
};

export default Index;
