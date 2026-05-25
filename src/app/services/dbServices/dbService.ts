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

export async function getAboutPageData() {
  return await sql`SELECT * FROM about_page_info`;
}

async function getComponentData(
  type: string,
  id: string
) {
  switch (type) {

    case "timeline_info":
      return (
        await sql`
          SELECT *
          FROM timeline_info
          WHERE id = ${id}
        `
      )[0];

      case "small_header_info":
        return (
          await sql`
            SELECT *
            FROM small_header_info
            WHERE id = ${id}
          `
        )[0];

    default:
      return null;
  }
}

export async function getPage(path: string) {
  const [page] = await sql`
    SELECT 
      p.*,
      m.meta_title,
      m.meta_description,
      m.meta_image_url,
      m.canonical_url
    FROM page_info p
    LEFT JOIN meta_info m ON p.meta_data = m.id
    WHERE p.path = ${path}
  `;

  if (!page) return null;

  const components = await sql`
    SELECT *
    FROM page_components
    WHERE page_id = ${page.id}
    ORDER BY sort_order
  `;

  const populatedComponents = await Promise.all(
    components.map(async (component) => ({
      ...component,
      data: await getComponentData(
        component.component_type,
        component.component_id
      ),
    }))
  );

  return {
    ...page,
    components: populatedComponents,
  };
}