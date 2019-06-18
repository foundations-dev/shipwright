module.exports = {
    title: 'NP Design System',
    description: 'NP Design System hosts the styles of New Perspectives.',
    themeConfig: {
        sidebar: [
            {
                title: 'Basics',
                collapsable: false,
                children: [
                    'getting-started',
                    'principles',
                    'directory-structure',
                ]
            },
            {
                title: 'Modules',
                collapsable: false,
                children: [
                    '00-Utility',
                    '01-Color',
                    '02-Typography',
                    '03-Spacing',
                    '04-Layout',
                ]
            },
        ],
        
    },
    plugins: [
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>',
        }],
    ]
}