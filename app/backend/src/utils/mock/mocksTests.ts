// const body = {
//   email: 'admin@admin.com',
//   password: 'secret_admin',
// };

// const dataBase = {
//   id: 1,
//   username: 'Admin',
//   role: 'admin',
//   email: 'admin@admin.com',
//   password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
// };

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
//   + 'eyJjcmVkZW50aWFscyI6eyJlbWFpbCI6ImFkbWluQGFkbWluLm'
//   + 'NvbSIsInBhc3N3b3JkIjoic2VjcmV0X2FkbWluIiwicm9sZSI6ImF'
//   + 'kbWluIn0sImlhdCI6MTY2MTQzODUyMCwiZXhwIjoxNjY0MDMwNTIwfQ.'
//   + 'XsnXjsfUnqSqntsrbPjb4Bf8OmwaUPYmi8xTHH9hD80';

// export default {
//   body,
//   dataBase,
//   token,
// };

export default class MockTests {
  static async body() {
    const body = {
      email: 'admin@admin.com',
      password: 'secret_admin',
    };

    return body;
  }

  static async dataBase() {
    const dataBase = {
      id: 1,
      username: 'Admin',
      role: 'admin',
      email: 'admin@admin.com',
      password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
    };

    return dataBase;
  }

  static async token() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
  + 'eyJjcmVkZW50aWFscyI6eyJlbWFpbCI6ImFkbWluQGFkbWluLm'
  + 'NvbSIsInBhc3N3b3JkIjoic2VjcmV0X2FkbWluIiwicm9sZSI6ImF'
  + 'kbWluIn0sImlhdCI6MTY2MTQzODUyMCwiZXhwIjoxNjY0MDMwNTIwfQ.'
      + 'XsnXjsfUnqSqntsrbPjb4Bf8OmwaUPYmi8xTHH9hD80';

    return token;
  }
}
