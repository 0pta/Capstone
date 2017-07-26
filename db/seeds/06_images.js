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
        {
          id: 13,
          item_id: 5,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097667/dining-chairs2_lr6qld.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 14,
          item_id: 5,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097672/dining-chairs4_fbibot.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 15,
          item_id: 5,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097668/dining-chairs3_fbqzly.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 16,
          item_id: 5,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097665/dining-chairs1_vc4xte.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 17,
          item_id: 6,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097729/merica-cabinet2_zteubg.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 18,
          item_id: 6,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097729/merica-cabinet1_p2gdhp.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 19,
          item_id: 6,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097730/merica-cabinet4_hkxhjn.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 20,
          item_id: 6,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097730/merica-cabinet3_w8nt2w.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 21,
          item_id: 7,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097712/jewelry-armoire1_qeivty.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 22,
          item_id: 7,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097713/jewelry-armoire2_xlz5ww.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 23,
          item_id: 7,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097716/jewelry-armoire3_ulxmto.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 24,
          item_id: 7,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097717/jewelry-armoire4_kk7j6a.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 25,
          item_id: 8,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097694/gilded-mirror5_f2gir4.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 26,
          item_id: 8,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097692/gilded-mirror4_ydd1re.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 27,
          item_id: 8,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097689/gilded-mirror3_pl6ga7.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 28,
          item_id: 8,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097687/gilded-mirror2_py4jl0.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 29,
          item_id: 8,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097686/gilded_mirror_cpfjrb.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 30,
          item_id: 9,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097758/silverware-chest2_vyfr2d.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 31,
          item_id: 9,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097758/silverware-chest1_bdnikr.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 32,
          item_id: 10,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097767/slip-cover1_ymsmh6.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 33,
          item_id: 10,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097767/slip-cover4_cfupqn.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 34,
          item_id: 10,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097768/slip-cover3_keqqc6.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 35,
          item_id: 10,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097768/slip-cover2_g28qlj.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 36,
          item_id: 11,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097660/dancing-art1_mfh39u.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 37,
          item_id: 12,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501101876/necklace1_e4pjdo.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 38,
          item_id: 12,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501101899/necklace2_xntfsv.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 39,
          item_id: 12,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501101919/necklace5_ssyy1t.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 40,
          item_id: 12,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501101939/necklace4_nyivqd.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 41,
          item_id: 12,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501101925/necklace6_sdo3m6.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 42,
          item_id: 13,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501102329/sofa-table1_ic7hhh.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 43,
          item_id: 13,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501102329/sofa-table2_gdyx29.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 44,
          item_id: 13,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501102329/sofa-table3_gnr1yv.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 45,
          item_id: 13,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501102330/sofa-table4_qxjeds.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 46,
          item_id: 14,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097675/drexel-desk1_ztr2dj.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 47,
          item_id: 14,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097676/drexel-desk2_gwmxhe.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 48,
          item_id: 15,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097736/pea-coat1_niqjuw.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 49,
          item_id: 15,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097736/pea-coat2_vrji5f.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 50,
          item_id: 15,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097736/pea-coat3_nry4vu.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 51,
          item_id: 15,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097736/pea-coat4_zyoask.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 52,
          item_id: 15,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097737/pea-coat5_iok3dy.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 53,
          item_id: 15,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097737/pea-coat5_iok3dy.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 54,
          item_id: 16,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501102861/hunter-boots1_qpu7cg.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 55,
          item_id: 16,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501102861/hunter-boots2_jers0z.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 56,
          item_id: 16,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501102861/hunter-boots3_nglx7h.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 57,
          item_id: 16,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501102861/hunter-boots4_mo8kxj.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 58,
          item_id: 17,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501103300/trench-jacket4_jsl7pt.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 59,
          item_id: 17,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501103332/trench-jacket3_peies9.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 60,
          item_id: 17,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501103259/trench-jacket2_sapbjg.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 61,
          item_id: 17,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501103357/trench-jacket1_j3cigx.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 62,
          item_id: 18,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097704/gray-dresscoat1_pjvftl.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 63,
          item_id: 18,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097707/gray-dresscoat2_co5yf5.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 64,
          item_id: 18,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097709/gray-dresscoat3_gwzvlh.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 65,
          item_id: 19,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097653/black-coat1_dolivx.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 66,
          item_id: 19,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097655/black-coat2_dt5jb7.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 67,
          item_id: 19,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097656/black-coat3_qu1w19.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 68,
          item_id: 20,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097778/white-skirt1_s6yjvw.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 69,
          item_id: 20,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097778/white-skirt3_btqqog.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 70,
          item_id: 20,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097778/white-skirt2_aotocq.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 71,
          item_id: 21,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097754/ring2_a4kikv.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 72,
          item_id: 21,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097754/ring1_n7kcmn.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 73,
          item_id: 21,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097754/ring3_k8zw4l.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 74,
          item_id: 21,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097754/ring4_bxxque.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 75,
          item_id: 21,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097754/ring5_jsctfu.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 76,
          item_id: 22,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097747/prana-jacket1_yzntmu.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 77,
          item_id: 22,
          img_url: 'http://res.cloudinary.com/dnqlnjcaf/image/upload/v1501097747/prana-jacket2_lf0suk.jpg',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('images_id_seq', (SELECT MAX(id) FROM images));"
    )
  })
}
