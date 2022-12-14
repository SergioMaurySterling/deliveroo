export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant'
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the restaurant'
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the restaurant'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter rating for the restaurant from 1-5 starts',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a rating between 1 and 5")
    },
    {
      name: 'type',
      title: 'Category of the restaurant',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
      name: 'dishes',
      type: 'array',
      title: "Dishes for the restaurant",
      of: [{type: "reference", to: [{type: 'dish'}]}]
    }
  ],
}
