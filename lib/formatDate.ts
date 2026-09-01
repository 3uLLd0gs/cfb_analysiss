const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
}

/**
 * Format a post date for display.
 *
 * Post frontmatter carries date-only strings, which JS parses as UTC midnight.
 * Pliny's formatDate renders those in the runtime's timezone, so a post dated
 * 2026-09-02 shows as September 2 when built on Vercel (UTC) but September 1
 * when built locally in US Central. Formatting in UTC keeps the displayed day
 * equal to the day written in the frontmatter, wherever the build runs.
 */
export const formatDate = (date: string, locale = 'en-US') =>
  new Date(date).toLocaleDateString(locale, options)
