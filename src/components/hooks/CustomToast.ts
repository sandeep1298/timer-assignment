import { toast } from "sonner";
import { ToastOptions } from "../../types/timer";


export const CustomToast = () => {
  const showToast = ({
    message,
    duration = 5000,
    position = window.innerWidth < 768 ? "bottom-right" : "top-right",
    action
  }: ToastOptions) => {
    toast.success(message, {
      duration,
      position,
      action: action
        ? {
            label: action.label,
            onClick: (event) => {
              action.onClick(event);
            }
          }
        : undefined
    });
  };

  return { showToast };
};
