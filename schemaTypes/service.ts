export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'conclusion',
      title: 'Conclusion',
      type: 'text',
    },
  ],
};