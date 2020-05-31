module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Francis Magallen', // Navigation and Site Title
  titleAlt: 'Francis Magallen', // Title for JSONLD
  description: 'Front-end and UX Developer.',
  headline: 'Writing and showcasing of works for Francis Magallen.', // Headline for schema.org JSONLD
  url: 'https://francismagallen.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Francis', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Francis Magallen', // Author for schemaORGJSONLD
  themeColor: '#7E57C2',
  backgroundColor: '#FFFFFF',

  twitter: '@francismagallen', // Twitter Username
  facebook: 'tolap20', // Facebook Site Name
  googleAnalyticsID: 'UA-153086683-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
