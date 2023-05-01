interface UserProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
        filter_enabled: boolean,
        filter_locked: boolean
    },
    external_urls: { spotify: string; };
    followers: { href: string; total: number; };
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}

interface Image {
    url: string;
    height: number;
    width: number;
}

interface userArtist {
   external_urls: { spotify: string; };
   followers: { href: null; total: []; };
   genres: array [strong];
   href: string;
   id: string;
   images: Images [4];
   name: string;
   popularity: 50;
   type: string;
   uri: string;
}
''

interface Images {
    url: string;
    height: number;
    width: number;
}

