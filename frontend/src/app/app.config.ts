import { environment } from '../environments/environment';

export const config = {
  serverUrl: '/',
  // defaultAvatarPath: 'https://res.cloudinary.com/hcwwcxz0m/default-avatar180x180.jpg',
  // defaultProductImgPath: 'https://res.cloudinary.com/hcwwcxz0m/default-product180x180.jpg',
  defaultProductImg: 'product',
  defaultAvatar: 'avatar',
  gLogo: 'g_logo',
  graboLogo: 'grabo_logo',
  grabofloorsLogo: 'grabofloors_logo',
  graboplastLogo: 'graboplast_logo',
  stripe: 'stripe',
  blogOptions: {
    showViews: true,
    showComments: true,
    commentsLength: 10,
  },
  imgPath: 'https://res.cloudinary.com/',
  cloudinary: {
    cloud_name: environment.cloud_name
  },
  designStructure: ['дошка', 'художній паркет', 'плитка', 'абстракція', 'дитячий'],
  certAssets: [
    {
      _id: 's_color20nv_red',
      image: 's_color20nv_red',
      description: ''
    },
    {
      _id: 's_color20nv_blue',
      image: 's_color20nv_blue',
      description: ''
    },
    {
      _id: 's_diamond',
      image: 's_diamond',
      description: ''
    },
    {
      _id: 's_fiba',
      image: 's_fiba',
      description: ''
    },
    {
      _id: 's_pvc',
      image: 's_pvc',
      description: ''
    },
    {
      _id: 'sez_pvc_01',
      image: 'sez_pvc_01',
      description: ''
    },
    {
      _id: 'sez_pvc_02',
      image: 'sez_pvc_02',
      description: ''
    },
    {
      _id: 'sez_color_20nv_01',
      image: 'sez_color_20nv_01',
      description: ''
    },
    {
      _id: 'sez_color_20nv_02',
      image: 'sez_color_20nv_02',
      description: ''
    },
  ],
  techAssets: [
    {
      _id: 'fiber',
      image: 'fiber',
      description: ''
    },
    {
      _id: 'europe',
      image: 'europe',
      description: ''
    },
    {
      _id: 'water_resistant',
      image: 'water_resistant',
      description: ''
    },
    {
      _id: 'iguard',
      image: 'iguard',
      description: ''
    },
    {
      _id: 'leaf',
      image: 'leaf',
      description: ''
    },
    {
      _id: 'cdf',
      image: 'cdf',
      description: ''
    },
    {
      _id: 'pur',
      image: 'pur',
      description: ''
    },
    {
      _id: 'san',
      image: 'san',
      description: ''
    },
    {
      _id: 'solvent_free',
      image: 'solvent_free',
      description: ''
    },
    {
      _id: 'tech',
      image: 'tech',
      description: ''
    },
    {
      _id: 'wax',
      image: 'wax',
      description: ''
    },
    {
      _id: 'e_nowaste',
      image: 'e_nowaste',
      description: ''
    },
    {
      _id: 'e_phthalate',
      image: 'e_phthalate',
      description: ''
    },
    {
      _id: 'e_recycle',
      image: 'e_recycle',
      description: ''
    },
    {
      _id: 'e_reachconform',
      image: 'e_reachconform',
      description: ''
    },
    {
      _id: 'heavy_metal',
      image: 'heavy_metal',
      description: ''
    },
    {
      _id: '200cm',
      image: '200cm',
      description: ''
    },
    {
      _id: 'clp',
      image: 'clp',
      description: ''
    },
    {
      _id: 'silver_knight',
      image: 'silver_knight',
      description: ''
    },
    {
      _id: 'floor_score',
      image: 'floor_score',
      description: ''
    },
    {
      _id: 'fiba',
      image: 'fiba',
      description: ''
    },
    {
      _id: 'ihf',
      image: 'ihf',
      description: ''
    },
    {
      _id: 'portable',
      image: 'portable',
      description: ''
    },
    {
      _id: 'e_recycle33',
      image: 'e_recycle33',
      description: ''
    },
  ],
  homeBanner: [
    'banner_residential',
    'banner_commercial',
    'banner_parquet',
    'banner_show',
    'banner_sport',
    'banner_transport',
  ],

};
