export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d5fdddb6c8636e61f4d600e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-92cjuw2e',
                  apiId: 'd18d4a17-dba8-4a33-97c5-08cce7a55b45'
                },
                {
                  buildHookId: '5d5fdddc408efd806eb4f14d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b9b6v3s4',
                  apiId: 'dd3864fc-4705-42be-8bc2-d7a3fe026e2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jan-sternwald/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b9b6v3s4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
