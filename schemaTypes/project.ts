export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL'
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'tools',
      type: 'array',
      title: 'Tools',
      of: [{ type: 'reference', to: [{ type: 'tool' }] }]
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      options: {
        dateFormat: 'YYYY',
      }
    }
  ]
}