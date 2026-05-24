import { sql } from "./db";

export async function getAllData() {
  const [
    navLinks,
    headerInfo,
    socialLinks,
    servicesInfo,
    skillsInfo,
    educationInfo,
    contactInfo,
  ] = await Promise.all([
    sql`SELECT * FROM nav_links`,
    sql`SELECT * FROM header_info`,
    sql`SELECT * FROM social_links`,
    sql`SELECT * FROM services_info`,
    sql`SELECT * FROM skills_info`,
    sql`SELECT * FROM education_info`,
    sql`SELECT * FROM contact_info`,
  ]);

  return {
    navLinks,
    headerInfo,
    socialLinks,
    servicesInfo,
    skillsInfo,
    educationInfo,
    contactInfo,
  };
}

export async function getNavLinks() {
  return await sql`SELECT * FROM nav_links`;
}

export async function getHeaderInfo() {
  return await sql`SELECT * FROM header_info`;
}

export async function getSocialLinks() {
  return await sql`SELECT * FROM social_links`;
}

export async function getPageDescriptions(){
  return await sql`SELECT * FROM page_descriptions`;
}

export async function getProjectData() {
  const projects = await sql`SELECT * FROM projects ORDER BY id DESC`;

  return {
    projects,
  };
}

export async function getProjectByName(projectName: string) {
  const rows = await sql`
    SELECT *
    FROM projects
    WHERE url = ${projectName}
  `;

  return rows[0] ?? null;
}

export async function getAboutInfo() {
  return await sql`SELECT * FROM about_info`;
}

export async function getHomePageInfo() {
  return await sql`SELECT * FROM home_page`;
}

export async function getSkillsInfo() {
  return await sql`SELECT * FROM skills_info`;
}