/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
  env: {
    // CONNECTION_URI: 'mongodb://localhost:27017/house-shope',
    CONNECTION_URI: `mongodb+srv://danico:jehovah077@cluster0.jxrgu.mongodb.net/house-shope?retryWrites=true&w=majority`,

    NEXTAUTH_URL: 'http://localhost:3000',

    // CONNECTION_URI: '',
    TEST: 123,
    PORT: 5000,
    JWT_SECRET: 'danico_secret_of_a_secure_jwt_token_key',
    JWT_EXPIRES_IN: '90d',
    JWT_COOKIE_EXPIRES_IN: '90',

    MAILTRAP_HOST: 'smtp.mailtrap.io',
    MAILTRAP_PORT: 2525,
    MAILTRAP_USER: 'af2c8aef627d10',
    MAILTRAP_PASS: '014394cbd70971',

    SENDGRID_USERNAME: 'apikey',
    SENDGRID_PASSWORD:
      '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',
    SENDGRID_EMAIL_FROM: 'contehdaniel1995@gmail.com',
    SENDGRID_HOST: 'smtp.sendgrid.net',
    SENDGRID_PORT: 587,

    GOOGLE_CLIENT_ID:
      '588072545137-3lgmqsa10s4srpf4fdfuf4s5opm2b6sp.apps.googleusercontent.com',
    GOOGLE_SECRET_KEY: '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',

    FACEBOOK_CLIENT_ID: '531948417873089',
    FACEBOOK_CLIENT_SECRET_KEY: '1c92b15bc4ae14151666d895b4c356a3',

    NEXT_PUBLIC_RESULT_PER_PAGE: 9,

    NEXTAUTH_SECRET_KEY:
      '756115623621-rkf35st1pbts55u4m790oiogl2k30ta9a4FwIS2S5utly38g0zj-9HULYmxW0IeCaqTw4bUrDO8johhnytestingGHASHGFGHZXFGHFGHFZGHFT5676VNANBN',
    JWT_SECRET:
      '756115623621-rkf35st1pbts55u4m790oiogl2k30ta9a4FwIS2S5utly38g0zj-9HULYmxW0IeCaqTw4bUrDO8johhnytestingGHASHGFGHZXFGHFGHFERTFGHJNKM,asdfghbjnkml--809',

    CLOUDINARY_NAME: 'dbmrdwsfb',
    CLOUDINARY_API_KEY: 857545946179366,
    CLOUDINARY_API_SECRET: 'xqg9bflE9TuBBxEwlGbAekJtycI',

    NEXT_PUBLIC_STRIP_PUBLIC_KEY:
      'pk_test_51JhEKrHiBu88YUh3vkNIFcvCyQi3gl6eMcECKjvvc2ZGjN7PKKd7igpN5TUs6GYBoxvXebkFU3GTeJcBziSbuYAY00w1AixrNx',

    STRIP_SERVER_SIDE_KEY:
      'sk_test_51JhEKrHiBu88YUh3DM4dwuoC0QhsSNL4e6bcecfgLedmyMmGpGhtqczbkA9IOfRVd6wkb4SqajA8Uf7Vs3f58UNi00a1Sq3RRT',
  },
};
