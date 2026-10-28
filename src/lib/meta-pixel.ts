// Meta (Facebook/Instagram) Pixel. Off until NEXT_PUBLIC_META_PIXEL_ID is set at build time.
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''

type Fbq = (cmd: 'track' | 'trackCustom', event: string, params?: Record<string, unknown>, opts?: { eventID?: string }) => void

/** Fire a standard Meta event. No-op when the pixel is off or blocked. */
export function trackMeta(event: string, params?: Record<string, unknown>, eventId?: string): void {
  if (!META_PIXEL_ID || typeof window === 'undefined') return
  const fbq = (window as unknown as { fbq?: Fbq }).fbq
  if (!fbq) return
  try { fbq('track', event, params, eventId ? { eventID: eventId } : undefined) } catch { /* ignore */ }
}
