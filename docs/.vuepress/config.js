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
                ]
            },
            {
                title: 'Tokens',
                collapsable: false,

                children: [
                    'tokens/color',
                    'tokens/font-size',
                    'tokens/spacing'
                ]
            }

        ],
        displayAllHeaders: true
    }
}