/**
 * Public marketing feature flags.
 *
 * Pricing is intentionally opt-in so unfinished tiers can never be exposed by
 * a missing environment variable. Set NEXT_PUBLIC_SHOW_PRICING=true at build
 * time when the agency is ready to publish plans.
 */
export const SHOW_PUBLIC_PRICING =
  process.env.NEXT_PUBLIC_SHOW_PRICING === 'true'
