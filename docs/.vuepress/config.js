module.exports = {
    title: 'Shipwright',
    description: 'Shipwright is the design system of New Perspectives.',
    dest: 'dist/docs',
    base: '/docs/',
    themeConfig: {
        logo: '/assets/logo.png', //located in public folder
        sidebar:
            [
                {
                    title: 'The Essentials',
                    path: '/essentials/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '/essentials/1-introduction',
                        '/essentials/2-principles',
                        '/essentials/3-organization',
                        '/essentials/4-implementation',
                    ]
                },
                {
                    title: 'The Materials',
                    path: '/materials/',
                    collapsable: false,
                    children: [
                        '/materials/00-Utility',
                        '/materials/01-Color',
                        '/materials/02-Typography',
                        '/materials/03-Spacing',
                        '/materials/04-Layout',
                    ]
                },
                // {
                //     title: 'The Materials',
                //     collapsable: false,
                //     children: [
                //         '00-Utility',
                //         '01-Color',
                //         '02-Typography',
                //         '03-Spacing',
                //         '04-Layout',
                //     ]
                // },
            ],

    },
    plugins: [
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>',
        }],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@img': '../../img'
            }
        }
    },


}