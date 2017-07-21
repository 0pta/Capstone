exports.seed = function(knex) {
  return knex('images').del()
  .then(() => {
    return knex('images').insert(
      [
        {
          id: 1,
          item_id: 1,
          img_url: 'http://www.medievalcollectibles.com/images/PRODUCT/large/DS-1340B_1_.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          item_id: 1,
          img_url: 'http://www.medievalcollectibles.com/images/PRODUCT/large/DS-1340B_3_.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          item_id: 1,
          img_url: 'http://www.medievalcollectibles.com/images/PRODUCT/large/DS-1340B_5_.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          item_id: 2,
          img_url: 'https://cdnimg.webstaurantstore.com/images/products/extra_large/63150/402526.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          item_id: 2,
          img_url: 'https://i.ytimg.com/vi/8NvTpRpeTgI/maxresdefault.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          item_id: 2,
          img_url: 'http://www.delcampotortillas.com/img/tortilla-chips.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          item_id: 2,
          img_url: 'https://i1.wp.com/food.theplainjane.com/wp-content/uploads/2010/12/cotixan-mexican-shop-chips-salsa-500x375.jpg?resize=350%2C200',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          item_id: 2,
          img_url: 'http://cdn.playbuzz.com/cdn/993f99d7-7beb-47ff-8e70-8bb1f426777d/8d99131c-fe72-410b-878b-30b6198ac84e.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          item_id: 3,
          img_url: 'https://res.cloudinary.com/dnqlnjcaf/image/upload/v1499882120/FB_IMG_1498091480623_ccxalu.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          item_id: 3,
          img_url: 'https://res.cloudinary.com/dnqlnjcaf/image/upload/v1499882129/IMG-20150323-WA0006_on3k3h.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          item_id: 4,
          img_url: 'https://res.cloudinary.com/dnqlnjcaf/image/upload/v1499882120/FB_IMG_1498091480623_ccxalu.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          item_id: 4,
          img_url: 'https://res.cloudinary.com/dnqlnjcaf/image/upload/v1499882129/IMG-20150323-WA0006_on3k3h.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
      ]
    )
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('images_id_seq', (SELECT MAX(id) FROM images));"
    )
  })
}
