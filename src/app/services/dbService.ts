import { sql } from "@vercel/postgres";

export async function getNavLinks()  {
    const { rows } = await sql`SELECT * FROM nav_links`;
    return rows;
  };
  
  export async function getHeaderInfo() {
    const { rows } = await sql`SELECT * FROM header_info`;
    return rows;
  };

  export async function getSocialLinks(){
    const { rows } = await sql`SELECT * FROM social_links`;
    return rows;
  };

  export async function getServicesInfo() {
    const { rows } = await sql`SELECT * FROM services_info`;
    return rows;
  };

  export async function getSkillsInfo() {
    const { rows } = await sql`SELECT * FROM skills_info`;
    return rows;
  };