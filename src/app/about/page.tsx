import "./about.css";
import Link from "next/link";
import mainImage from "../../../public/main-image.jpg";

export default async function About() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ortheyus",
        "url": "https://next-portfolio-delta-snowy.vercel.app/about",
        "sameAs": [
            "https://www.linkedin.com/in/davidwhalleyprofile",
            "https://github.com/dwhalley15",
            "https://www.instagram.com/ortheyus/",
            "https://www.youtube.com/channel/UCWikZ6mdoqSzCTOvy8MjsLQ"
        ],
        "jobTitle": "Software Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "the human tech agency"
        },
        "image": {
            "@type": "ImageObject",
            "url": mainImage,
            "width": 800,
            "height": 600
        },
        "description": "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise."
    };

    return (
        <>
            <section className="about-site-section">
                <Link href="/" className="sticky-link">Back to Portfolio</Link>
                <h1>About this Portfolio</h1>
                <p>{"Welcome to my portfolio! This page is dedicated to explaining the technology stack and choices behind this site. Here, you'll find insights into why I chose each component for building this portfolio."}</p>
                <h2>Why use Next.js?</h2>
                <p>{"Next.js is a powerful React framework that allows for server-side rendering, static site generation, and client-side rendering all in one. Here are some key reasons I chose Next.js:"}</p>
                <ul>
                    <li><strong>Performance</strong>{": Server-side rendering improves the performance of the site by delivering fully rendered pages from the server, reducing load times."}</li>
                    <li><strong>SEO Friendly</strong>{": By rendering pages on the server, Next.js improves the SEO performance of the site, making it easier for search engines to index the content."}</li>
                    <li><strong>Developer Experience</strong>{": Next.js offers a smooth development experience with built-in features like routing, image optimization, and API routes."}</li>
                    <li><strong>Flexibility</strong>{": Whether I need static pages, dynamic content, or API endpoints, Next.js handles it all seamlessly."}</li>
                </ul>
                <h2>Why use TypeScript?</h2>
                <p>{"TypeScript is a superset of JavaScript that adds static types. Here’s why I opted for TypeScript:"}</p>
                <ul>
                    <li><strong>Type Safety</strong>{": TypeScript helps catch errors at compile time rather than at runtime, reducing the likelihood of bugs."}</li>
                    <li><strong>Improved Developer Experience</strong>{": By rendering pages on the server, Next.js improves the SEO performance of the site, making it easier for search engines to index the content."}</li>
                    <li><strong>Scalability</strong>{": TypeScript's strong type system makes it easier to maintain and scale large codebases."}</li>
                </ul>
                <h2>Why use Vercel?</h2>
                <p>{"Vercel is a cloud platform for static sites and Serverless Functions that makes deployment simple and efficient. Here’s why I chose Vercel:"}</p>
                <ul>
                    <li><strong>Easy Deployment</strong>{": With seamless integration with GitHub, Vercel allows for automatic deployments on every push."}</li>
                    <li><strong>Performance</strong>{": Vercel optimizes the delivery of the site with its global CDN, ensuring fast load times for users worldwide."}</li>
                    <li><strong>Built for Next.js</strong>{": As the creators of Next.js, Vercel offers first-class support and optimizations for Next.js applications."}</li>
                    <li><strong>Developer Experience</strong>{": Vercel’s dashboard and CLI provide an intuitive interface for managing deployments and viewing logs."}</li>
                </ul>
                <h2>Why use PostgreSQL?</h2>
                <p>{"PostgreSQL is a powerful, open-source relational database system. Here’s why I chose PostgreSQL:"}</p>
                <ul>
                    <li><strong>Reliability</strong>{": PostgreSQL is known for its robustness and reliability, making it a trusted choice for many developers."}</li>
                    <li><strong>Advanced Features</strong>{": It offers advanced features like full ACID compliance, complex queries, and JSONB support for flexibility."}</li>
                    <li><strong>Performance</strong>{": PostgreSQL delivers strong performance for both read and write operations, ensuring the site can handle data efficiently."}</li>
                    <li><strong>Extensibility</strong>{": With support for extensions, PostgreSQL can be customized to fit the specific needs of the application."}</li>
                </ul>
                <h2>Conclusion</h2>
                <p>{"By leveraging Next.js, TypeScript, Vercel, and PostgreSQL, this site is built to be performant, scalable, and developer-friendly. Each technology was chosen to provide the best possible user and developer experience."}</p>
                <p>{"Thank you for visiting my portfolio! If you have any questions or would like to know more, feel free to reach out."}</p>
            </section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
