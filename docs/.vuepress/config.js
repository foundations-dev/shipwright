module.exports = {
    title: 'Shipwright',
    description: 'Shipwright is the design system of New Perspectives.',
    themeConfig: {
        logo: './images/hero-ship.png',
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
    ],

}