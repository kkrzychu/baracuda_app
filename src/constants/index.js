

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMedal, faUsers, faHands } from "@fortawesome/free-solid-svg-icons";


import { 
    bands,
    neo_pack,
    product_logo_1,
    strap_1,
    strap_2,
    strap_3,
    strap_4,
    straps,
    best_divers,
    strap_pack,
    brylok,
    nakladki_butla,
    wetsuit_color,
    surfer,
    handmade,
    fitting, 
    jacket_1_bg,
    jacket_2_bg,
    jacket_3_bg,
    jacket_4_bg,
    jacket_5_bg,
} from "../assets";

// TEXT INSIDE TRANSLATIONS FOLDER

export const jackets_gallery = [jacket_1_bg, jacket_2_bg, jacket_3_bg, jacket_4_bg, jacket_5_bg];

export const gallery = [bands,neo_pack,product_logo_1,strap_1,strap_2,strap_3,strap_4,straps,best_divers,strap_pack,brylok,nakladki_butla,wetsuit_color];


export const about_neopren_where_use = [
    { key: 'about_used_for_1' },
    { key: 'about_used_for_2' },
    { key: 'about_used_for_3' },
    { key: 'about_used_for_4' },
    { key: 'about_used_for_5' },
    { key: 'about_used_for_6' },
    { key: 'about_used_for_7' },
    { key: 'about_used_for_8' },
    { key: 'about_used_for_9' },
    { key: 'about_used_for_10' },
    { key: 'about_used_for_11' }
];

export const about_neopren_solutions = [
    { key: 'about_solutions_1'},
    { key: 'about_solutions_2'},
    { key: 'about_solutions_3'},
    { key: 'about_solutions_4'},
    { key: 'about_solutions_5'}
];


export const splitStringRegex = (str) => {
    const chars = [];
    const regex = /[\s\S]/gu;
    let match;

    while((match = regex.exec(str)) !== null) {
        chars.push(match[0]);
    }
    return chars;
}

export const leftVariants = {
	offscreen: {
		y: 300,
        opacity: 0
	},
	onscreen: {
		y: 0,
        opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 2,
            delay: 0
		},
	}
};

export const rightVariants = {
	offscreen: {
		y: 300,
        opacity: 0
	},
	onscreen: {
		y: 0,
        opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 2,
            delay: 0.2
		},
	}
};

export const defaultVariants = {
	offscreen: {
		y: 300,
        opacity: 0
	},
	onscreen: {
		y: 0,
        opacity: 1,
	}
};

export const centerVariants = {
    offscreen: {
		y: 300,
        opacity: 0
	},
	onscreen: {
		y: 0,
        opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 2,
		},
	}
}

export const pageVariants = {
    initial: { opacity: 0, y: "100vh" },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: "-100vh" }
};
  
export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
};

export const productIntro = [
    {
        icon: faMedal,
        variant: centerVariants,
        delay: 0,
        img: surfer,
        title: 'home_card_1_title',
        description: "home_card_1_description"
    },{
        icon: faHands,
        variant: centerVariants,
        delay: .5,
        img: handmade,
        title: 'home_card_2_title',
        description: "home_card_2_description"
    },{
        icon: faUsers,
        variant: centerVariants,
        delay: 1,
        img: fitting,
        title: 'home_card_3_title',
        description: "home_card_3_description"
    },
]


export const footerLinks = [
    {
        title: "footer_link_product_title_1",
        links: [
            {
                id: "footer_link_product_1",
                path: "/products#product_3",
                name: "footer_link_product_1",
            },
            {
                id: "footer_link_product_2",
                path: "/products#product_6_1",
                name: "footer_link_product_2",
            },
            {
                id: "footer_link_product_3",
                path: "/products#product_6_2",
                name: "footer_link_product_3",
            },
            {
                id: "footer_link_product_4",
                path: "/products#product_6_4",
                name: "footer_link_product_4",
            },
            {
                id: "footer_link_product_5",
                path: "/products#product_7",
                name: "footer_link_product_5",
            },
        ],
    },
    {
        title: "footer_link_info_title_2",
        links: [
            {
                id: "footer_link_info_1",
                path: "/contact#contact_1",
                name: "footer_link_info_1",
            },
            {
                id: "footer_link_info_2",
                path: "/about#about_1",
                name: "footer_link_info_2",
            }
        ],
    }
];

export const allProductsFromNeopren = [
    {
        title: 'product_manufacture_1_title',
        desc: 'product_manufacture_1_desc'
    },{
        title: 'product_manufacture_2_title',
        desc: "product_manufacture_2_desc"
    },{
        title: 'product_manufacture_3_title',
        desc: 'product_manufacture_3_desc'
    },{
        title: 'product_manufacture_4_title',
        desc: 'product_manufacture_4_desc'
    },{
        title: 'product_manufacture_5_title',
        desc: 'product_manufacture_5_desc'
    },{
        title: 'product_manufacture_6_title',
        desc: 'product_manufacture_6_desc'
    },{
        title: 'product_manufacture_7_title',
        desc: 'product_manufacture_7_desc'
    },{
        title: 'product_manufacture_8_title',
        desc: 'product_manufacture_8_desc'
    },{
        title: 'product_manufacture_9_title',
        desc: 'product_manufacture_9_desc'
    },

]


export const strapBenefits = [
    {
        key: 'products_strap_benefits_1_key',
        benefit: 'products_strap_benefits_1_benefit'
    },{
        key: 'products_strap_benefits_2_key',
        benefit: 'products_strap_benefits_2_benefit'
    },{
        key: 'products_strap_benefits_3_key',
        benefit: 'products_strap_benefits_3_benefit'
    },{
        key: 'products_strap_benefits_4_key',
        benefit: 'products_strap_benefits_4_benefit'
    },{
        key: 'products_strap_benefits_5_key',
        benefit: 'products_strap_benefits_5_benefit'
    },{
        key: 'products_strap_benefits_6_key',
        benefit: 'products_strap_benefits_6_benefit'
    },{
        key: 'products_strap_benefits_7_key',
        benefit: 'products_strap_benefits_7_benefit'
    },{
        key: 'products_strap_benefits_8_key',
        benefit: 'products_strap_benefits_8_benefit'
    },{
        key: 'products_strap_benefits_9_key',
        benefit: 'products_strap_benefits_9_benefit'
    }
];

export const aboutGoals = [
    { key: "about_intro_goal_1" },
    { key: "about_intro_goal_2" },
    { key: "about_intro_goal_3" },
    { key: "about_intro_goal_4" },
    { key: "about_intro_goal_5" },
    { key: "about_intro_goal_6" }
]


export const socialMedia = [
    {
        id: "social-media-1",
        icon: faInstagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: faFacebook,
        link: "https://www.facebook.com/",
    }
];

export const navLinks = [
    {
        id: 'home',
        title: 'nav_title_1'
    },{
        id: 'products',
        title: 'nav_title_2'
    },{
        id: 'about',
        title: 'nav_title_3'
    },{
        id: 'contact',
        title: 'nav_title_4'
    }
];

export const stats = [
    {
        id: "stats-1",
        title: "stat_1",
        value: "30000",
        postfix: "+"
    },{
        id: "stats-2",
        title: "stat_2",
        value: "500",
        postfix: "+"
    },{
        id: "stats-3",
        title: "stat_3",
        value: "70+",
        postfix: "+"
    }
];