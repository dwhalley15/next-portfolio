import type { MetadataRoute } from "next";
import { getNavLinks, getProjectData } from "./services/dbServices/dbService";
import { NavbarItem } from "./components/Navbar/Navbar";
import { url } from "inspector";

const BASE_URL = "https://ortheyus-portfolio.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const navLinks = await getNavLinks();

    const Pages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/skills`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "yearly" as const,
        },
        {
            url: `${BASE_URL}/education`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "yearly" as const,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "yearly" as const,
        },
    ];

    const navItems: NavbarItem[] = navLinks.map(row => ({
        id: row.id,
        link_name: row.link_name,
    }));

    const filteredNavItems = navItems.filter(item => item.link_name.toLowerCase() !== "home");

    const staticPages: MetadataRoute.Sitemap = filteredNavItems.map(link => ({
        url: `${BASE_URL}/${link.link_name}`,
        lastModified: new Date().toISOString(),
        priority: 0.8,
        changeFrequency: 'yearly',
    }));

    const { projects } = await getProjectData();

    const projectPages: MetadataRoute.Sitemap = projects.map(project => ({
        url: `${BASE_URL}/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: project.date?.toISOString() ?? new Date().toISOString(),
        priority: 0.5,
        changeFrequency: 'yearly',
    }));

    staticPages.unshift({ url: BASE_URL, lastModified: new Date().toISOString(), priority: 1.0, changeFrequency: 'yearly' });

    staticPages.push(...Pages);

    staticPages.push(...projectPages);

    return staticPages;
}
