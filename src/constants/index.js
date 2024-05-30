

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMedal, faUsers, faHands } from "@fortawesome/free-solid-svg-icons";

import Bands from '../assets/bands.png'
import NeoPack from '../assets/neo_pack.png'
import ProductLogo1 from '../assets/product_logo_1.png'
import Strap1 from '../assets/strap_1.png'
import Strap2 from '../assets/strap_2.png'
import Strap3 from '../assets/strap_3.png'
import Strap4 from '../assets/strap_4.png'
import Straps from '../assets/straps.png'
import BestDivers from '../assets/best_divers.png'
import StrapPack from '../assets/strap_pack.png'
import Brylok from '../assets/brylok.png'
import BottleCap from '../assets/nakladki_butla.png'
import WetSuit from '../assets/COLOURS.jpg'
import Surfer from '../assets/surfer.jpg'
import Handmade from '../assets/handmade.jpg'
import Fitting from '../assets/fitting.jpg'

export const gallery = [Bands,NeoPack,ProductLogo1,Strap1,Strap2,Strap3,Strap4,Straps,BestDivers,StrapPack,Brylok,BottleCap,WetSuit];

export const footerShortDesc = 'Experience quality and innovation with our neoprene products. Dive into comfort and functionality!';


export const home_intro = 'Discover the world of unique neoprene products where quality meets innovative design. Our products are the result of meticulous craftsmanship and a passion for excellence. Immerse yourself in the comfort and functionality offered by our diverse range of neoprene goods.'
export const home_sec_2_h = 'Strap - our flagship product';
export const home_sec_2_desc = 'Discover our signature neoprene product, meticulously hand-stitched for premium quality and unrivaled comfort.';
export const home_sec_3_h = 'Send your logo to us';
export const home_sec_3_desc = "Send us your logo, and we'll make it an exceptional feature on the neoprene surface. Our precision and high quality ensure flawless execution.";
export const home_sec_4_h = 'We create all our products by hand';
export const home_sec_4_desc = 'Our company is a mastery of craftsmanship - every product is exclusively handmade, with meticulous attention to the highest quality materials. Discover uniqueness in every detail!';
export const home_sec_5_h = 'A company with experience';
export const home_sec_5_desc = 'With a legacy spanning many years, our company has become synonymous with quality and innovation in the neoprene industry. Our dedication to craftsmanship and attention to detail ensure that each product meets the highest standards of performance and durability. Join the countless dive centers who rely on us for their neoprene needs, and experience the difference firsthand.';
export const home_sec_6_h = 'Dont wait to ask for an offer';
export const home_sec_6_desc = 'Reach out today and discover the perfect solution for your needs. Our team is ready to assist you in finding the ideal neoprene product for your requirements, ensuring both quality and satisfaction.';

export const products_intro = "Browse through our diverse range of products and find the perfect match for you. Not sure where to start? Get in touch with us, and we'll help tailor the offer to your expectations and needs.";
export const product_what_manufature = "We specialize in manufacturing a wide range of neoprene diving accessories, including jackets, wetsuits, gloves, gear bags, and more. Additionally, we offer a customization service, allowing us to embroider any logo on any of our products to meet the individual needs and preferences of our customers.";
export const check_products = "Explore our product gallery! Take a glimpse into what we've crafted so far and invite you to browse through our collection. From sleek neoprene accessories to functional gear, discover the variety and quality we offer. Find something that speaks to you and enhances your experience today.";

export const ask_for_an_offer = "Ready to find the perfect fit? Reach out and let us tailor an offer just for you. Whether it's customizing products to your exact specifications or exploring our range for the ideal solution, we're here to ensure your needs are met. Contact us today and let's create something uniquely yours!";

export const about_intro_part_1 = "Up4Q is a new brand based on decades of experience in manufacturing neoprene products dating back to the 1950s. We use specialized machinery tailored to work with neoprene. Our team's experience includes thousands of products, many of which are unique and fully designed by us.";
export const about_intro_part_2 = "Our product range is very wide - from custom-made suits, to practical items for water sports and recreation, to products for all branches of industry, medicine, rescue, ...";

export const about_neopren_1 = "Neoprene is a unique, practical and versatile material with unique properties. Only 100% original European neoprene provides the full range of benefits. The manufacturing process produces a foamed plastic, filled with micro air particles.";
export const about_neopren_2 = "Neoprene is flexible, perfectly adapting to the shape of the object. Thanks to the appropriate production technology, this material is waterproof. It provides protection against mechanical damage and thermal protection limiting the impact of high and low temperatures.";

export const about_handmade_1 = "Production is a complex process aimed at obtaining products of the highest quality.Our experience in design and our machinery allow us to create unique items, often made to individual order.";
export const about_handmade_2 = "Each order is discussed in detail and tailored to the expectations and capabilities of the customer. Many works are still made by hand, with the utmost care.";

export const about_neopren_where_use = [
    "Industry (automotive, electronics: waterproof and thermal covers for equipment and machinery, winches; foot coverings)",
    "Rescue (protectors, bands, pullers, covers, shields)",
    "Hiking (covers for bottles, thermoses, cups, etc.)",
    "Recreation (water sports - clothes, outfits, accessories, body bands and protectors and equipment)",
    "Fitness (weight loss clothes and belts; wacu equipment seals)",
    "Hobbies (fishing, sailing, motorboating)",
    "Utility items (covers for laptops/notebooks, cell phones, cameras, lenses, GPS electronic devices, etc.).",
    "Sports (equipment covers and pole covers - a lightweight and convenient option for proper protection against bumps and injuries for children and teenagers; protectors, armbands for various parts of the body)",
    "Rehabilitation (a wide range of possible armbands and accessories for rehabilitation, musculoskeletal improvement and coordination with very high safety)",
    "Animals (various products, including: protective bands for horses; vests, shoes for dogs and cats, etc.).",
    "Advertising (advertising gadgets with unique features)"
];

export const about_neopren_solutions = [
    "Available neoprene thicknesses range from 1.5 mm to 10 mm in stock and up to 30 mm on request",
    "The texture of the finish can be rough, smooth or finely crimped",
    "Perforated neoprene is also available on special order, which provides additional properties such as ventilation and breathability",
    "Neoprene can be covered on one or both sides with a variety of materials, such as lycra, stretch, terry, flausch, and others on request",
    "Various colors of neoprene covering are available",
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
		y: 500,
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 2.5,
		},
	},
};

export const rightVariants = {
	offscreen: {
		y: 500,
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 2,
		},
	},
};

export const productIntro = [
    {
        icon: faMedal,
        img: Surfer,
        title: 'High quality material',
        description: "Our neoprene ensures unparalleled durability, flexibility, and user comfort. That's why our products are the perfect choice for those who value high quality and comfort."
    },{
        icon: faHands,
        img: Handmade,
        title: 'Handmade',
        description: "Our products are carefully hand-sewn using specialized sewing machines. This allows us to ensure not only precision in craftsmanship but also attention to every detail."
    },{
        icon: faUsers,
        img: Fitting,
        title: 'Fitted to you',
        description: "We have the ability to create tailor-made products to suit each customer's needs. Whether it's custom sizing, design preferences, or specific requirements"
    },
]


export const footerLinks = [
    {
        title: "Products",
        links: [
            {
                name: "Strap",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "Bands",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "WetSuit",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Pack",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "More",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        title: "Info",
        links: [
            {
                name: "Ask for an offer",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "About us",
                link: "https://www.hoobank.com/partners/",
            }
        ],
    }
];

export const allProductsFromNeopren = [
    {
        title: 'Strap',
        desc: 'Made from soft and durable neoprene, they ensure a snug and comfortable fit, allowing you to enjoy your diving experience to the fullest.'
    },
    {
        title: 'Bands',
        desc: "Made from high-quality neoprene, they provide a secure fit, moisture-wicking, and protection from cold and wind, allowing you to enjoy them all day long."
    },
    {
        title: 'Caps',
        desc: 'Make your mark with our embroidered logo caps.'
    },
    {
        title: 'Wetsuits',
        desc: 'Engineered for comfort, flexibility, and durability, our wetsuits are the perfect companion for your underwater adventures.'
    },
    {
        title: 'Brylok',
        desc: 'Keep your keys secure and add a touch of style with our durable and vibrant key fobs.'
    },{
        title: 'Bottle caps',
        desc: 'Keep your scuba tanks secure and easily identifiable with our durable and vibrant valve caps.'
    },
]


export const strapBenefits = [
    {
        benefit: "Letraset sheets containing Lorem"
    },{
        benefit: "Letraset sheets containing Lorem"
    },{
        benefit: "Letraset sheets containing Lorem"
    },{
        benefit: "Letraset sheets containing Lorem"
    },{
        benefit: "Letraset sheets containing Lorem"
    },{
        benefit: "Letraset sheets containing Lorem"
    }
];

export const aboutGoals = [
    {
        key: "goal_1",
        goal: "Our company stands for QUALITY WITHOUT COMPROMISES"
    },
    {
        key: "goal_2",
        goal: "Our customers include police and rescue services"
    },
    {
        key: "goal_3",
        goal: "We are personally involved in every stage of production"
    },
    {
        key: "goal_4",
        goal: "We manufacture our products exclusively from neoprene and EU-sourced materials"
    },
    {
        key: "goal_5",
        goal: "We sew our products only from the highest quality approved materials of European origin"
    },
    {
        key: "goal_6",
        goal: "The neoprene we use is certified by HumanTest, confirming its safety for human skin"
    }
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
    },
    // {
    //     id: "social-media-3",
    //     icon: faTwitter,
    //     link: "https://www.twitter.com/",
    // },
    // {
    //     id: "social-media-4",
    //     icon: faLinkedin,
    //     link: "https://www.linkedin.com/",
    // },
];

export const navLinks = [
    {
        id: 'home',
        title: 'Home'
    },{
        id: 'products',
        title: 'Products'
    },{
        id: 'about',
        title: 'About'
    },{
        id: 'contact',
        title: 'Contact'
    }
];

export const stats = [
    {
        id: "stats-1",
        title: "products sold",
        value: "30000",
        postfix: "+"
    },{
        id: "stats-2",
        title: "customers",
        value: "500",
        postfix: "+"
    },{
        id: "stats-3",
        title: "years of experience",
        value: "70+",
        postfix: "+"
    }
];