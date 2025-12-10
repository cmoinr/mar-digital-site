// Configuración de campos para cada tipo de Brief
// Basado en el modelo briefs-modelo.txt con personalizaciones por servicio

export const briefTypes = {
  WEB_DESIGN: 'web-design',
  BRANDING: 'branding',
  SOCIAL_MEDIA: 'social-media',
  MARKETING: 'marketing',
  CONSULTING: 'consulting'
};

// Campos comunes a todos los briefs (Sección 1: Datos del cliente)
export const commonClientFields = [
  {
    id: 'fullName',
    type: 'text',
    required: true,
    section: 'client',
    validation: 'text'
  },
  {
    id: 'email',
    type: 'email',
    required: true,
    section: 'client',
    validation: 'email'
  },
  {
    id: 'whatsapp',
    type: 'tel',
    required: true,
    section: 'client',
    validation: 'phone'
  },
  {
    id: 'companyName',
    type: 'text',
    required: true,
    section: 'client',
    validation: 'text'
  },
  {
    id: 'location',
    type: 'text',
    required: true,
    section: 'client',
    validation: 'text'
  }
];

// Campos específicos por tipo de brief
export const briefSpecificFields = {
  [briefTypes.WEB_DESIGN]: {
    projectDetails: [
      {
        id: 'websiteType',
        type: 'select',
        required: true,
        options: ['landing', 'corporate', 'ecommerce', 'blog', 'other']
      },
      {
        id: 'websiteGoal',
        type: 'textarea',
        required: true,
        rows: 4
      },
      {
        id: 'pagesCount',
        type: 'text',
        required: true
      },
      {
        id: 'contentReady',
        type: 'radio',
        required: true,
        options: ['complete', 'logo-only', 'nothing']
      },
      {
        id: 'domainHosting',
        type: 'radio',
        required: true,
        options: ['both', 'domain-only', 'hosting-only', 'none']
      }
    ],
    visualStyle: [
      {
        id: 'referenceWebsites',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'designStyle',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'brandColors',
        type: 'text',
        required: true
      },
      {
        id: 'hasLogo',
        type: 'radio',
        required: true,
        options: ['yes', 'no', 'logo-only']
      }
    ],
    features: [
      {
        id: 'requiredFeatures',
        type: 'checkbox',
        required: true,
        options: ['contact-form', 'whatsapp-button', 'map', 'gallery', 'social-media', 'other']
      },
      {
        id: 'integrations',
        type: 'textarea',
        required: false,
        rows: 3
      }
    ],
    attachments: [
      {
        id: 'additionalComments',
        type: 'textarea',
        required: true,
        rows: 4
      }
    ]
  },
  
  [briefTypes.BRANDING]: {
    projectDetails: [
      {
        id: 'brandingType',
        type: 'select',
        required: true,
        options: ['complete-identity', 'logo-only', 'rebrand', 'brand-manual', 'other']
      },
      {
        id: 'brandGoal',
        type: 'textarea',
        required: true,
        rows: 4
      },
      {
        id: 'targetAudience',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'brandValues',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'competitors',
        type: 'textarea',
        required: false,
        rows: 3
      }
    ],
    visualStyle: [
      {
        id: 'referenceLogos',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'brandPersonality',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'preferredColors',
        type: 'text',
        required: true
      },
      {
        id: 'avoidColors',
        type: 'text',
        required: false
      }
    ],
    deliverables: [
      {
        id: 'requiredDeliverables',
        type: 'checkbox',
        required: true,
        options: ['logo', 'color-palette', 'typography', 'business-cards', 'letterhead', 'social-media-templates', 'brand-manual', 'other']
      }
    ],
    attachments: [
      {
        id: 'additionalComments',
        type: 'textarea',
        required: true,
        rows: 4
      }
    ]
  },

  [briefTypes.SOCIAL_MEDIA]: {
    projectDetails: [
      {
        id: 'serviceType',
        type: 'select',
        required: true,
        options: ['content-creation', 'community-management', 'copywriting', 'complete-package', 'other']
      },
      {
        id: 'platforms',
        type: 'checkbox',
        required: true,
        options: ['instagram', 'facebook', 'tiktok', 'linkedin', 'twitter', 'youtube', 'other']
      },
      {
        id: 'postFrequency',
        type: 'select',
        required: true,
        options: ['daily', '3-per-week', 'weekly', 'biweekly', 'other']
      },
      {
        id: 'contentGoal',
        type: 'textarea',
        required: true,
        rows: 4
      },
      {
        id: 'targetAudience',
        type: 'textarea',
        required: true,
        rows: 3
      }
    ],
    visualStyle: [
      {
        id: 'referenceAccounts',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'contentStyle',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'brandGuidelines',
        type: 'radio',
        required: true,
        options: ['yes', 'no', 'need-help']
      }
    ],
    contentNeeds: [
      {
        id: 'contentTypes',
        type: 'checkbox',
        required: true,
        options: ['static-posts', 'carousels', 'reels', 'stories', 'covers', 'other']
      },
      {
        id: 'copywritingNeeds',
        type: 'radio',
        required: true,
        options: ['yes-full', 'yes-partial', 'no']
      }
    ],
    attachments: [
      {
        id: 'additionalComments',
        type: 'textarea',
        required: true,
        rows: 4
      }
    ]
  },

  [briefTypes.MARKETING]: {
    projectDetails: [
      {
        id: 'campaignType',
        type: 'select',
        required: true,
        options: ['google-ads', 'meta-ads', 'linkedin-ads', 'complete-setup', 'optimization', 'other']
      },
      {
        id: 'campaignGoal',
        type: 'textarea',
        required: true,
        rows: 4
      },
      {
        id: 'targetAudience',
        type: 'textarea',
        required: true,
        rows: 3
      },
      {
        id: 'monthlyBudget',
        type: 'select',
        required: true,
        options: ['less-500', '500-1000', '1000-3000', '3000-5000', 'more-5000']
      },
      {
        id: 'hasExperience',
        type: 'radio',
        required: true,
        options: ['yes', 'no', 'some']
      }
    ],
    setupDetails: [
      {
        id: 'platformsToSetup',
        type: 'checkbox',
        required: true,
        options: ['google-analytics', 'google-tag-manager', 'facebook-pixel', 'google-ads', 'meta-business', 'conversion-tracking', 'other']
      },
      {
        id: 'hasWebsite',
        type: 'radio',
        required: true,
        options: ['yes', 'no', 'need-landing']
      },
      {
        id: 'websiteUrl',
        type: 'text',
        required: false
      }
    ],
    objectives: [
      {
        id: 'kpis',
        type: 'checkbox',
        required: true,
        options: ['leads', 'sales', 'traffic', 'brand-awareness', 'app-installs', 'other']
      }
    ],
    attachments: [
      {
        id: 'additionalComments',
        type: 'textarea',
        required: true,
        rows: 4
      }
    ]
  },

  [briefTypes.CONSULTING]: {
    projectDetails: [
      {
        id: 'consultingType',
        type: 'select',
        required: true,
        options: ['business-strategy', 'digital-transformation', 'process-optimization', 'growth-strategy', 'other']
      },
      {
        id: 'consultingGoal',
        type: 'textarea',
        required: true,
        rows: 4
      },
      {
        id: 'currentSituation',
        type: 'textarea',
        required: true,
        rows: 4
      },
      {
        id: 'mainChallenges',
        type: 'textarea',
        required: true,
        rows: 4
      },
      {
        id: 'companySize',
        type: 'select',
        required: true,
        options: ['solo', '2-10', '11-50', '51-200', 'more-200']
      }
    ],
    scope: [
      {
        id: 'areasOfInterest',
        type: 'checkbox',
        required: true,
        options: ['marketing', 'sales', 'operations', 'technology', 'finance', 'hr', 'other']
      },
      {
        id: 'timeframe',
        type: 'select',
        required: true,
        options: ['urgent', '1-month', '2-3-months', '3-6-months', 'flexible']
      },
      {
        id: 'expectedDeliverables',
        type: 'textarea',
        required: true,
        rows: 4
      }
    ],
    resources: [
      {
        id: 'availableResources',
        type: 'textarea',
        required: false,
        rows: 3
      },
      {
        id: 'teamInvolvement',
        type: 'radio',
        required: true,
        options: ['full', 'partial', 'minimal']
      }
    ],
    attachments: [
      {
        id: 'additionalComments',
        type: 'textarea',
        required: true,
        rows: 4
      }
    ]
  }
};

// Secciones por tipo de brief
export const sectionsByBriefType = {
  [briefTypes.WEB_DESIGN]: ['client', 'projectDetails', 'visualStyle', 'features', 'attachments'],
  [briefTypes.BRANDING]: ['client', 'projectDetails', 'visualStyle', 'deliverables', 'attachments'],
  [briefTypes.SOCIAL_MEDIA]: ['client', 'projectDetails', 'visualStyle', 'contentNeeds', 'attachments'],
  [briefTypes.MARKETING]: ['client', 'projectDetails', 'setupDetails', 'objectives', 'attachments'],
  [briefTypes.CONSULTING]: ['client', 'projectDetails', 'scope', 'resources', 'attachments']
};

export default {
  briefTypes,
  commonClientFields,
  briefSpecificFields,
  sectionsByBriefType
};
