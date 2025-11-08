

// Success response
export const success = <T = unknown>(message: string, data?: T) => ({
  success: true,
  message,
  data,
});

// Failure response
export const failure = (message: string, error?: unknown) => ({
  success: false,
  message,
  error,
});
