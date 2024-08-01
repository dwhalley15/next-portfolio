import { sql } from "@vercel/postgres";

export async function getAllData() {
  const navLinks = await sql`SELECT * FROM nav_links`;
  const headerInfo = await sql`SELECT * FROM header_info`;
  const socialLinks = await sql`SELECT * FROM social_links`;
  const servicesInfo = await sql`SELECT * FROM services_info`;
  const skillsInfo = await sql`SELECT * FROM skills_info`;
  const educationInfo = await sql`SELECT * FROM education_info`;
  const contactInfo = await sql`SELECT * FROM contact_info`;

  return {
    navLinks: navLinks.rows,
    headerInfo: headerInfo.rows,
    socialLinks: socialLinks.rows,
    servicesInfo: servicesInfo.rows,
    skillsInfo: skillsInfo.rows,
    educationInfo: educationInfo.rows,
    contactInfo: contactInfo.rows,
  };
}

export async function getNavLinks() {
  const navLinks = await sql`SELECT * FROM nav_links`;
  return navLinks.rows;
}

export async function getHeaderInfo() {
  const headerInfo = await sql`SELECT * FROM header_info`;
  return headerInfo.rows;
}

export async function getSocialLinks() {
  const socialLinks = await sql`SELECT * FROM social_links`;
  return socialLinks.rows;
}

export async function getPageDescriptions(){
  const pageDescriptions = await sql`SELECT * FROM page_descriptions`;
  return pageDescriptions.rows;
}

export async function getProjectData() {
  const projects = await sql`SELECT * FROM projects ORDER BY id DESC`;

  return {
    projects: projects.rows,
  };
}

export async function getProjectByName( projectName: string ) {
  const row = await sql`SELECT * FROM projects WHERE url = ${projectName}`;
  return row;
}