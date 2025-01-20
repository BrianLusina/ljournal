import { captureException, captureScope, Levels } from '@monitoring';

export default function useCaptureError(
  error: Error | undefined,
  data: Record<string, unknown>,
): void {
  if (error) {
    captureException(error, captureScope({ data }, Levels.Error));
  }
}
