exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Dragon',
        last_name: 'Lord',
        email: 'onTheDL@gmail.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        created_at: new Date(),
        updated_at: new Date()
      },{
      id: 2,
      first_name: 'Nacho',
      last_name: 'Libre',
      email: 'thelordschips@gmail.com',
      hashed_password: '$2a$12$mfvuzqgWwmsRu6LOWTDIoO4dqXqHWxsthi1uT/LMyDUeBTDdgdzam',
      created_at: new Date(),
      updated_at: new Date()
    },{
    id: 3,
    first_name: 'Carmin',
    last_name: 'Khalsa',
    email: 'chich@gmail.com',
    hashed_password: '$2a$12$JzQEYqc2X2.caylkd42t..Vhmn7Eq9MSK89gwSRvOSuqBA2WXXqIG',
    created_at: new Date(),
    updated_at: new Date()
  }]);
  })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
