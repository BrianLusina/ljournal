declare type SocialItem = {
    name: string;
    link: string;
}

declare type BlurbItem = {
    description: string;
    title: string;
    image: {
        url: string;
    }
}

declare type SocialsData = {
    socialCollection: {
        items: SocialItem[]
    }
}

declare type BlurbCollection = {
    blurbCollection: {
        items: BlurbItem[]
    }
}