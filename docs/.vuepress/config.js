module.exports = {
    title: 'Shipwright',
    description: 'Shipwright is the design system of New Perspectives.',
    dest: '../dist/docs',
    themeConfig: {
        logo: './images/hero-ship.png',
        sidebar: [
            {
                title: 'The Essentials',
                collapsable: false,
                children: [
                    'principles',
                    'organization',
                    'materials',
                ]
            },
            {
                title: 'The Materials',
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