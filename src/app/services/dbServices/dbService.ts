import { sql } from "@vercel/postgres";

export async function getAllData() {
  const navLinks = await sql`SELECT * FROM nav_links`;
  const headerInfo = await sql`SELECT * FROM header_info`;
  const socialLinks = await sql`SELECT * FROM social_links`;
  const servicesInfo = await sql`SELECT * FROM services_info`;
  const skillsInfo = await sql`SELECT * FROM skills_info`;
  const educationInfo = await sql`SELECT * FROM education_info`;

  return {
    navLinks: navLinks.rows,
    headerInfo: headerInfo.rows,
    socialLinks: socialLinks.rows,
    servicesInfo: servicesInfo.rows,
    skillsInfo: skillsInfo.rows,
    educationInfo: educationInfo.rows,
  };
}