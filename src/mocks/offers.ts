export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferPreview = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type OfferFull = Omit<OfferPreview, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

const OfferPreviewData: OfferPreview[] = [
  {
    'id': '6f1c1bee-202b-46fe-a534-60d26e3cda76',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 392,
    'previewImage': 'https://13.design.pages.academy/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': 'f34f5392-df32-4bc5-bcce-7751637ad0a6',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 182,
    'previewImage': 'https://13.design.pages.academy/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '5da60bf0-f6ce-469c-ace0-4c0c24233ebb',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 287,
    'previewImage': 'https://13.design.pages.academy/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '20888446-0a28-4cfb-a59d-7231da818483',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 359,
    'previewImage': 'https://13.design.pages.academy/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  }
];

const OfferPageData: OfferFull[] = [
  {
    ...OfferPreviewData[0],
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'bedrooms': 3,
    'goods': [
      'Air conditioning',
      'Baby seat',
      'Cable TV',
      'Dishwasher'
    ],
    'host': {
      'isPro': false,
      'name': 'Angel',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'images': [
      'https://13.design.pages.academy/static/hotel/15.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg'
    ],
    'maxAdults': 9
  },
  {
    ...OfferPreviewData[1],
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'bedrooms': 1,
    'goods': [
      'Towels',
      'Washer',
      'Baby seat',
      'Laptop friendly workspace',
      'Kitchen',
      'Heating',
      'Dishwasher',
      'Air conditioning',
      'Fridge',
      'Coffee machine',
      'Breakfast',
      'Wi-Fi',
      'Washing machine'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'images': [
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg',
      'https://13.design.pages.academy/static/hotel/18.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg'
    ],
    'maxAdults': 1
  },
  {
    ...OfferPreviewData[2],
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 1,
    'goods': [
      'Heating',
      'Air conditioning',
      'Fridge',
      'Washer',
      'Kitchen',
      'Wi-Fi',
      'Towels',
      'Baby seat',
      'Laptop friendly workspace',
      'Breakfast',
      'Coffee machine'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'images': [
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg',
      'https://13.design.pages.academy/static/hotel/15.jpg',
      'https://13.design.pages.academy/static/hotel/13.jpg'
    ],
    'maxAdults': 4
  },
  {
    ...OfferPreviewData[3],
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'bedrooms': 4,
    'goods': [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Heating',
      'Fridge',
      'Washing machine',
      'Dishwasher',
      'Towels',
      'Cable TV',
      'Kitchen'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'images': [
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg'
    ],
    'maxAdults': 7
  }
];

export { OfferPreviewData, OfferPageData };
