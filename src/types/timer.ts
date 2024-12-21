export interface Timer {
  id: string;
  title: string;
  description: string;
  duration: number;
  remainingTime: number;
  isRunning: boolean;
  createdAt: number;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
}

interface ToastAction {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ToastOptions {
  message: string;
  duration?: number;
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  action?: ToastAction;
}

