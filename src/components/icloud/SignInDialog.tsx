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

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInDialog = ({ open, onOpenChange }: SignInDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt:', { email, password });
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
            />
          </div>
          
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-muted/50 border-border placeholder:text-muted-foreground"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-medium"
          >
            Sign In
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
