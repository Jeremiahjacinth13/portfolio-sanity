export default {
    name: 'links',
    title: 'Links',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Link Title'
        },
        {
            name: 'url',
            type: 'url',
            title: 'Link URL'
        }
    ]
}