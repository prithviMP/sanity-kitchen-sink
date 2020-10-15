export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f87da39d161ad78dd0137f3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6doyvdjk',
                  apiId: '6a9cf9bb-7095-426e-9a6c-0dfb1c4234b8'
                },
                {
                  buildHookId: '5f87da395a048d6b652d66c2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iovw2epo',
                  apiId: 'aee74e23-987f-4ba5-a8d1-008819983a24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prithviMP/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iovw2epo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
