// schema.js

export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
  ],
};