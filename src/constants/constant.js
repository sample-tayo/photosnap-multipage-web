const isMobile = window.innerWidth <= 768;

export const featuredetails = [
  {
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    iconSrc: "./assets/responsive.svg",
  },
  {
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    iconSrc: "./assets/no-limit.svg",
  },
  {
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    iconSrc: "./assets/embed.svg",
  },
  {
    title: "Custom Domain",
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    iconSrc: "./assets/custom-domain.svg",
  },
  {
    title: "Boost Your Exposure",
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    iconSrc: "./assets/boost-exposure.svg",
  },
  {
    title: "Drag & Drop Image",
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    iconSrc: "./assets/drag-drop.svg",
  },
];

export const homeContent = [
  {
    title: "CREATE AND SHARE YOUR PHOTO STORIES",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    arrowtext: "GET AN INVITE",
    imgSrc: "./assets/create-and-share.jpg",
  },
  {
    title: "BEAUTIFUL STORIES EVERYTIME",
    text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    arrowtext: "VIEW THE STORIES",
    imgSrc: "./assets/beautiful-stories.jpg",
    style: true,
    bgColor: "#fff",
    color: "#000",
  },
  {
    title: "DESIGNED FOR EVERYONE",
    text: "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    arrowtext: "GET AN INVITE",
    imgSrc: "./assets/designed-for-everyone.jpg",
    bgColor: "#fff",
    color: "#000",
  },
  {
    title: "FEATURES",
    text: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    // arrowtext: "GET AN INVITE",
    // imgSrc: "./assets/hero.jpg",
    imgSrc: isMobile ? "./assets/hero-f.jpg" : "./assets/hero-f.jpg",
  },
  {
    title: "PRICING",
    text: "Create your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
    imgSrc: isMobile ? "./assets/hero-m.jpg" : "./assets/hero.jpg",
  },
];

export const stories = [
  {
    title: "The Mountains",
    author: "John Applessed",
    backgroundImage: "./assets/mountains.jpg",
  },
  {
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
    backgroundImage: "./assets/cityscapes.jpg",
  },
  {
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
    backgroundImage: "./assets/18-days-voyage.jpg",
  },
  {
    title: "Architecturals",
    author: "by Samantha Brooke",
    backgroundImage: "./assets/architecturals.jpg",
  },
  {
    title: "World Tour 2019",
    author: "by Timothy Wagner",
    backgroundImage: "./assets/world-tour.jpg",
  },
  {
    title: "Unforeseen Corners",
    author: "by William Malcolm",
    backgroundImage: "./assets/unforeseen-corners.jpg",
  },
  {
    title: "King on Africa: Part II",
    author: "by Tim Hillenburg",
    backgroundImage: "./assets/king-on-africa.jpg",
  },
  {
    title: "The Trip to Nowhere",
    author: "by Felicia Rourke",
    backgroundImage: "./assets/trip-to-nowhere.jpg",
  },
  {
    title: "Rage of The Sea",
    author: "by Mohammed Abdul",
    backgroundImage: "./assets/rage-of-the-sea.jpg",
  },
  {
    title: "Running Free",
    author: "by Michelle",
    backgroundImage: "./assets/running-free.jpg",
  },
  {
    title: "Behind the Waves",
    author: "by Lamarr Wilson",
    backgroundImage: "./assets/behind-the-waves.jpg",
  },
  {
    title: "Calm Waters",
    author: "by Samantha Brooke",
    backgroundImage: "./assets/calm-waters.jpg",
  },
  {
    title: "The Milky Way",
    author: "by Benjamin Cruz",
    backgroundImage: "./assets/milky-way.jpg",
  },
  {
    title: "Night at The Dark Forest",
    author: "by Mohammed Abdul",
    backgroundImage: "./assets/dark-forest.jpg",
  },
  {
    title: "Somwarpet’s Beauty",
    author: "by Michelle",
    backgroundImage: "./assets/somwarpet.jpg",
  },
  {
    title: "Land of Dreams",
    author: "by William Malcolm",
    backgroundImage: "./assets/land-of-dreams.jpg",
  },
];

export const appalacia = {
  subHeading: "LAST MONTH’S FEATURED STORY",
  title: "HAZY FULL MOON OF APPALACHIA",
  date: "March 2nd 2020",
  author: "by John Appleseed",
  text: `The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.`,
};
export const plans = [
  {
    name: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: ["UNLIMITED STORY POSTING", "UNLIMITED PHOTO UPLOAD"],
  },
  {
    name: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    monthlyPrice: 39,
    yearlyPrice: 390,
    features: [
      "UNLIMITED STORY POSTING",
      "UNLIMITED PHOTO UPLOAD",
      "EMBEDDING CUSTOM CONTENT",
      "CUSTOMIZE METADATA",
      "ADVANCED METRICS",
    ],
  },
  {
    name: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "UNLIMITED STORY POSTING",
      "UNLIMITED PHOTO UPLOAD",
      "EMBEDDING CUSTOM CONTENT",
      "CUSTOMIZE METADATA",
      "ADVANCED METRICS",
      "PHOTO DOWNLOADS",
      "SEARCH ENGINE INDEXING",
      "CUSTOM ANALYTICS",
    ],
  },
];
export const planFeatures = [
  "UNLIMITED STORY POSTING",
  "UNLIMITED PHOTO UPLOAD",
  "EMBEDDING CUSTOM CONTENT",
  "CUSTOMIZE METADATA",
  "ADVANCED METRICS",
  "PHOTO DOWNLOADS",
  "SEARCH ENGINE INDEXING",
  "CUSTOM ANALYTICS",
];
