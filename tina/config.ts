import { defineConfig, LocalAuthProvider } from 'tinacms';

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  contentApiUrlOverride: isLocal ? '/api/tina/gql' : undefined,
  authProvider: isLocal ? new LocalAuthProvider() : undefined,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'src/content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page Title',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Meta Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'seoTitle',
            label: 'SEO Title (optional, overrides page title)',
          },
          {
            type: 'image',
            name: 'ogImage',
            label: 'Social Share Image',
          },
          {
            type: 'boolean',
            name: 'noIndex',
            label: 'Hide from Search Engines',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            isBody: true,
          },
        ],
      },
      {
        name: 'service',
        label: 'Services',
        path: 'src/content/services',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Service Title',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'URL Slug',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Meta Description',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Hero Image',
            required: true,
          },
          {
            type: 'string',
            name: 'icon',
            label: 'Icon Name',
            options: [
              'residential',
              'developments',
              'flipping',
              'multifamily',
              'office',
              'padsplit',
              'retail',
            ],
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
          },
          {
            type: 'object',
            name: 'features',
            label: 'Features',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Feature Title',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Feature Description',
                required: true,
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: 'object',
            name: 'faqs',
            label: 'FAQs',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'question',
                label: 'Question',
                required: true,
              },
              {
                type: 'string',
                name: 'answer',
                label: 'Answer',
                required: true,
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            isBody: true,
          },
        ],
      },
      {
        name: 'post',
        label: 'Blog Posts',
        path: 'src/content/posts',
        format: 'mdx',
        defaultItem: () => ({
          publishDate: new Date().toISOString(),
          author: 'LendCity Team',
        }),
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Excerpt/Meta Description',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'publishDate',
            label: 'Publish Date',
            required: true,
          },
          {
            type: 'datetime',
            name: 'updatedDate',
            label: 'Last Updated',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Featured Image',
            required: true,
          },
          {
            type: 'string',
            name: 'imageAlt',
            label: 'Image Alt Text',
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            options: [
              'The Wisdom, Lifestyle, Money Show',
              'Close More Deals Podcast',
              'Investing Tips',
              'Mortgage Advice',
              'Market Updates',
              'Success Stories',
            ],
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
          },
          {
            type: 'number',
            name: 'readingTime',
            label: 'Reading Time (minutes)',
          },
          {
            type: 'string',
            name: 'status',
            label: 'Status',
            options: ['draft', 'scheduled', 'published'],
            required: true,
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured Post',
          },
          {
            type: 'string',
            name: 'podcastEpisodeId',
            label: 'Podcast Episode ID (if from podcast)',
          },
          {
            type: 'string',
            name: 'podcastAudioUrl',
            label: 'Podcast Audio URL',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            isBody: true,
          },
        ],
      },
      {
        name: 'team',
        label: 'Team Members',
        path: 'src/content/team',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Full Name',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'URL Slug',
            required: true,
          },
          {
            type: 'string',
            name: 'role',
            label: 'Role/Title',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Photo',
            required: true,
          },
          {
            type: 'string',
            name: 'email',
            label: 'Email',
          },
          {
            type: 'string',
            name: 'phone',
            label: 'Phone',
          },
          {
            type: 'string',
            name: 'linkedin',
            label: 'LinkedIn URL',
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Show on Homepage',
          },
          {
            type: 'string',
            name: 'specialties',
            label: 'Specialties',
            list: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Bio',
            isBody: true,
          },
        ],
      },
      {
        name: 'location',
        label: 'Locations',
        path: 'src/content/locations',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Location Name',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'URL Slug',
            required: true,
          },
          {
            type: 'string',
            name: 'country',
            label: 'Country',
            required: true,
            options: ['Canada', 'USA', 'Mexico'],
          },
          {
            type: 'string',
            name: 'region',
            label: 'Province/State',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Meta Description',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'image',
            label: 'Location Image',
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            isBody: true,
          },
        ],
      },
      {
        name: 'event',
        label: 'Events',
        path: 'src/content/events',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Event Title',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'URL Slug',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Short Description',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'startDate',
            label: 'Start Date & Time',
            required: true,
          },
          {
            type: 'datetime',
            name: 'endDate',
            label: 'End Date & Time',
          },
          {
            type: 'string',
            name: 'location',
            label: 'Location',
          },
          {
            type: 'string',
            name: 'locationType',
            label: 'Location Type',
            options: ['in-person', 'virtual', 'hybrid'],
          },
          {
            type: 'string',
            name: 'registrationUrl',
            label: 'Registration URL',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Event Image',
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured Event',
          },
          {
            type: 'boolean',
            name: 'includeInNewsletter',
            label: 'Include in Newsletter',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Event Details',
            isBody: true,
          },
        ],
      },
      {
        name: 'faq',
        label: 'Global FAQs',
        path: 'src/content/faqs',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'question',
            label: 'Question',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'answer',
            label: 'Answer',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            options: [
              'General',
              'Residential',
              'Commercial',
              'Investment',
              'Process',
              'Rates',
            ],
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
          },
        ],
      },
      {
        name: 'siteSettings',
        label: 'Site Settings',
        path: 'src/content/settings',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'string',
            name: 'siteName',
            label: 'Site Name',
          },
          {
            type: 'string',
            name: 'tagline',
            label: 'Tagline',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Default Meta Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Logo',
          },
          {
            type: 'image',
            name: 'logoWhite',
            label: 'Logo (White)',
          },
          {
            type: 'image',
            name: 'ogImage',
            label: 'Default Social Image',
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact Information',
            fields: [
              { type: 'string', name: 'email', label: 'Email' },
              { type: 'string', name: 'phone', label: 'Phone' },
              { type: 'string', name: 'address', label: 'Address' },
              { type: 'string', name: 'city', label: 'City' },
              { type: 'string', name: 'province', label: 'Province' },
              { type: 'string', name: 'postalCode', label: 'Postal Code' },
            ],
          },
          {
            type: 'object',
            name: 'social',
            label: 'Social Media',
            fields: [
              { type: 'string', name: 'facebook', label: 'Facebook URL' },
              { type: 'string', name: 'instagram', label: 'Instagram URL' },
              { type: 'string', name: 'linkedin', label: 'LinkedIn URL' },
              { type: 'string', name: 'youtube', label: 'YouTube URL' },
              { type: 'string', name: 'twitter', label: 'Twitter/X URL' },
            ],
          },
          {
            type: 'object',
            name: 'cta',
            label: 'Default CTA',
            fields: [
              { type: 'string', name: 'title', label: 'CTA Title' },
              { type: 'string', name: 'subtitle', label: 'CTA Subtitle' },
              { type: 'string', name: 'buttonText', label: 'Button Text' },
              { type: 'string', name: 'buttonUrl', label: 'Button URL' },
            ],
          },
          {
            type: 'object',
            name: 'newsletter',
            label: 'Newsletter Settings',
            fields: [
              { type: 'string', name: 'title', label: 'Newsletter Title' },
              { type: 'string', name: 'subtitle', label: 'Newsletter Subtitle' },
              { type: 'string', name: 'signupUrl', label: 'Signup URL' },
            ],
          },
          {
            type: 'string',
            name: 'licenseInfo',
            label: 'License Information',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
      {
        name: 'popup',
        label: 'Pop-ups',
        path: 'src/content/popups',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Pop-up Name',
            required: true,
            isTitle: true,
          },
          {
            type: 'boolean',
            name: 'enabled',
            label: 'Enabled',
          },
          {
            type: 'string',
            name: 'trigger',
            label: 'Trigger Type',
            options: ['exit-intent', 'timed', 'scroll', 'click'],
            required: true,
          },
          {
            type: 'number',
            name: 'delay',
            label: 'Delay (seconds, for timed trigger)',
          },
          {
            type: 'number',
            name: 'scrollPercent',
            label: 'Scroll Percentage (for scroll trigger)',
          },
          {
            type: 'string',
            name: 'title',
            label: 'Pop-up Title',
            required: true,
          },
          {
            type: 'string',
            name: 'content',
            label: 'Pop-up Content',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'image',
            label: 'Pop-up Image',
          },
          {
            type: 'string',
            name: 'buttonText',
            label: 'Button Text',
          },
          {
            type: 'string',
            name: 'buttonUrl',
            label: 'Button URL',
          },
          {
            type: 'string',
            name: 'pages',
            label: 'Show on Pages (comma-separated paths, or * for all)',
          },
          {
            type: 'datetime',
            name: 'startDate',
            label: 'Start Showing',
          },
          {
            type: 'datetime',
            name: 'endDate',
            label: 'Stop Showing',
          },
        ],
      },
    ],
  },
});
