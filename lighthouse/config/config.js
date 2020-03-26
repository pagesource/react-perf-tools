const defaultConfig = {
    extends: 'lighthouse:default',
    audits: [
        'byte-efficiency/uses-optimized-images',
    ],
    categories: {
        'performance': {
            title: 'Performance',
            description: 'Performance of react app',
            auditRefs: [
                { id: 'first-cpu-idle', weight: 3, group: 'metrics' },
                { id: 'interactive', weight: 5, group: 'metrics' },
            ],
        },
        'accessibility': {
            title: 'Accessibility',
        },
        'best-practices': {
            title: 'Best-Practices',
        },
        'seo': {
            title: 'SEO',
        },
        'pwa': {
            title: 'PWA',
        }
    },
    groups: {
        'metrics': {
            title: 'Metrics',
            description: 'These metrics encapsulate your web app\'s performance.'
        },
    }
}

module.exports = defaultConfig;