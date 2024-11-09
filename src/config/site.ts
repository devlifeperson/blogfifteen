import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Urban Explorer - City Life & Culture ",
  title: "City guides, cultural events, and urban lifestyle tips.",
  description: "",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "SEO Optimization Tools",
    slug: "seo-tools",
    tools: [
      {
        title: "Google Cache Viewer",
        desc: "View the cached version of your website as seen in Google's index.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Meta Tag Analyzer",
        desc: "Analyze and optimize your website's meta tags for improved SEO.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Backlink Generator",
        desc: "Generate high-quality backlinks to boost your site's search rankings.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "Google Index Checker",
        desc: "Check whether your site’s pages are indexed by Google.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "URL Redirect Checker",
        desc: "Examine the redirection paths of your URLs for any issues that could affect SEO.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Website Security Test",
        desc: "Scan your website for security vulnerabilities and potential threats.",
        href: "https://tools360s.com/safe-browsing",
      },
    ],
  },
  {
    title: "Miscellaneous Tools",
    slug: "general-tools",
    tools: [
      {
        title: "Password Generator",
        desc: "Create strong and secure passwords for enhanced online protection.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Public IP Finder",
        desc: "Discover your device’s public IP address.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Browser Update Check",
        desc: "Check if your browser is up to date to improve performance and security.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Invoice Generator",
        desc: "Create detailed invoices for your business or services.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Online Code Formatter",
        desc: "Format your code to improve readability and maintain consistency.",
        href: "https://tools360s.com/code-formatter",
      },
    ],
  },
  {
    title: "Image Tools",
    slug: "image-tools",
    tools: [
      {
        title: "Add Watermark to Images",
        desc: "Insert watermarks on your images to prevent unauthorized use.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Image Compression Tool",
        desc: "Compress your images to reduce file size while retaining quality.",
        href: "https://review360.info",
      },
      {
        title: "Convert Image Formats",
        desc: "Convert your images between different formats, such as JPEG, PNG, and WebP.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Resize Images Online",
        desc: "Resize your images to match the size requirements for your website or blog.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Crop Images",
        desc: "Trim your images to the exact dimensions you need.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Upload Images to Cloud",
        desc: "Upload your images to a cloud storage platform for easy access.",
        href: "https://review360.info/upload-image",
      },
    ],
  },
  {
    title: "URL Utilities",
    slug: "url-utilities",
    tools: [
      {
        title: "Shorten Your URL",
        desc: "Create short, shareable URLs from long web addresses.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "Link Analytics Dashboard",
        desc: "Monitor the performance of your shortened URLs to understand user engagement.",
        href: "https://free-url.short360s.com/stats",
      },
      {
        title: "QR Code Generator",
        desc: "Generate QR codes that link to any URL for quicker sharing.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
    ],
  },
  {
    title: "Text Tools",
    slug: "text-tools",
    tools: [
      {
        title: "Text Comparison Tool",
        desc: "Compare two text documents and identify the differences.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Count Tool",
        desc: "Count the words, characters, and sentences in any given text.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
];
