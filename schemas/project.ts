export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Project Name'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug'
        },
        {
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Project Description'
        },
        {
            name: 'content',
            type: 'text',
            title: 'Content Ⓜ️↓'
        },
        {
            name: 'public',
            type: 'boolean',
            title: 'Public'
        },
        {
            name: 'links',
            type: 'array',
            title: 'Links',
            of: [
                {
                    type: 'reference',
                    title: 'Link',
                    to: [
                        {
                            type: 'links',
                            title: 'Links'
                        }
                    ]
                }
            ]
        }
    ]
}