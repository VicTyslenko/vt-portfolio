export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface FormSubmitResult {
  success: boolean;
  data?: any;
  error?: Error | null;
}
