export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
        },
        {
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image'
        },
        {
            name: 'content',
            type: 'text',
            title: 'Content'
        },
    ]
}