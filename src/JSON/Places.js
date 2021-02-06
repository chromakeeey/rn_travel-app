const jsonImages = [
    {
        url: '',

        props: {
          source: require('../images/auth-1.jpg')
        }
    },
    {
        url: '',

        props: {
          source: require('../images/auth-2.jpg')
        }
    },
    {
        
        url: '',

        props: {
          source: require('../images/auth-3.jpg')
        }
    }
]

export const user = {
    surname: 'Palamarchuk',
    name: 'Oleksandr',
  
    places: 3,
    reviews: 32,

    avatar: require('../images/avatar.jpeg')
}

const review = {
    dateCreate: '16.05.2020',
  
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.',
  
    user: user
}

export const Places = [
    {
        id: 0,

        name: 'Castle',
        location: 'Spain',
        rating: 4.5,
        price: 10,

        authorName: 'John',
        dateCreate: '16-05-2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa. Cras adipiscing enim eu turpis egestas. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. In pellentesque massa placerat duis ultricies lacus. Tellus elementum sagittis vitae et leo duis. Cursus eget nunc scelerisque viverra mauris in. Sed arcu non odio euismod lacinia at quis risus sed. Vitae auctor eu augue ut lectus. Mi quis hendrerit dolor magna. Quam quisque id diam vel. Mi quis hendrerit dolor magna eget est lorem. Ridiculus mus mauris vitae ultricies. Risus pretium quam vulputate dignissim suspendisse. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.',

        backgroundImage: require('../images/auth-1.jpg'),
        fontColor: 'white',

        images: jsonImages,
        reviews: [review, review, review, review, review, review, review, review, review],

        coordinate: {
            latitude: 40.490146,
            longitude: -2.344941
        }
    },
    {
        id: 1,

        name: 'Mountain',
        location: 'Ireland',
        rating: 4.9,
        price: 10,

        authorName: 'Mike',
        dateCreate: '21-05-2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa. Cras adipiscing enim eu turpis egestas. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. In pellentesque massa placerat duis ultricies lacus. Tellus elementum sagittis vitae et leo duis. Cursus eget nunc scelerisque viverra mauris in. Sed arcu non odio euismod lacinia at quis risus sed. Vitae auctor eu augue ut lectus. Mi quis hendrerit dolor magna. Quam quisque id diam vel. Mi quis hendrerit dolor magna eget est lorem. Ridiculus mus mauris vitae ultricies. Risus pretium quam vulputate dignissim suspendisse. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.',

        backgroundImage: require('../images/auth-2.jpg'),
        fontColor: 'white',

        images: jsonImages,
        reviews: [review, review, review, review, review, review, review, review, review],

        coordinate: {
            latitude: 53.050750,
            longitude: -7.973560
        }
    },
    {
        id: 2,

        name: 'Vila',
        location: 'France',
        rating: 4.2,
        price: 10,

        authorName: 'Nikola',
        dateCreate: '13-09-2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa. Cras adipiscing enim eu turpis egestas. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. In pellentesque massa placerat duis ultricies lacus. Tellus elementum sagittis vitae et leo duis. Cursus eget nunc scelerisque viverra mauris in. Sed arcu non odio euismod lacinia at quis risus sed. Vitae auctor eu augue ut lectus. Mi quis hendrerit dolor magna. Quam quisque id diam vel. Mi quis hendrerit dolor magna eget est lorem. Ridiculus mus mauris vitae ultricies. Risus pretium quam vulputate dignissim suspendisse. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.',

        backgroundImage: require('../images/auth-3.jpg'),
        fontColor: 'white',

        images: jsonImages,
        reviews: [review, review, review, review, review, review, review, review, review],

        coordinate: {
            latitude: 46.949176,
            longitude: 2.431845
        }
    },

]


