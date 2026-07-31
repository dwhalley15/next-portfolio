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

export async function getPageDescriptions() {
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

// Page and component data fetching
export async function getLayoutInfo() {
  const [page] = await sql`
    SELECT 
      p.*,
      m.meta_title,
      m.meta_description,
      m.meta_image_url,
      m.canonical_url
    FROM page_info p
    LEFT JOIN meta_info m ON p.meta_data = m.id
    WHERE p.name = 'layout'
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
        component.component_id,
      ),
    })),
  );

  return {
    ...page,
    components: populatedComponents,
  };
}

// Reusable function to fetch page data by path
export async function getHomePageInfo() {
  const [page] = await sql`
    SELECT 
      p.*,
      m.meta_title,
      m.meta_description,
      m.meta_image_url,
      m.canonical_url
    FROM page_info p
    LEFT JOIN meta_info m ON p.meta_data = m.id
    WHERE p.name = 'home'
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
        component.component_id,
      ),
    })),
  );

  return {
    ...page,
    components: populatedComponents,
  };
}

export async function getSkillsInfo() {
  return await sql`SELECT * FROM skills_info`;
}

export async function getAboutPageData() {
  return await sql`SELECT * FROM about_page_info`;
}

// Helper function to fetch component data based on type and ID
async function getComponentData(type: string, id: string) {
  switch (type) {
    case "large_header_content":
      return (
        await sql`
          SELECT *
          FROM large_header_content
          WHERE id = ${id}
        `
      )[0];

    case "timeline_content":
      return (
        await sql`
          SELECT *
          FROM timeline_content
          WHERE id = ${id}
        `
      )[0];

    case "small_header_content":
      return (
        await sql`
            SELECT *
            FROM small_header_content
            WHERE id = ${id}
          `
      )[0];

    case "work_list_content":
      return (
        await sql`
              SELECT *
              FROM work_list_content
              WHERE id = ${id}
            `
      )[0];

    case "stack_list_content":
      return (
        await sql`
                SELECT *
                FROM stack_list_content
                WHERE id = ${id}
              `
      )[0];

    case "cta_content":
      return (
        await sql`
                    SELECT *
                    FROM cta_content
                    WHERE id = ${id}
                  `
      )[0];

    case "navigation_content":
      return (
        await sql`
                      SELECT *
                      FROM navigation_content
                      WHERE id = ${id}
                    `
      )[0];

    case "footer_content":
      return (
        await sql`
                      SELECT *
                      FROM footer_content
                      WHERE id = ${id}
                    `
      )[0];

    case "services_content":
      return (
        await sql`
                        SELECT *
                        FROM services_content
                        WHERE id = ${id}
                      `
      )[0];

    case "skills_content":
      return (
        await sql`
                          SELECT *
                          FROM skills_content
                          WHERE id = ${id}
                        `
      )[0];

    case "education_content":
      return (
        await sql`
                          SELECT *
                          FROM education_content
                          WHERE id = ${id}
                        `
      )[0];

    case "list_content":
      return (
        await sql`
                            SELECT *
                            FROM list_content
                            WHERE id = ${id}
                          `
      )[0];

    case "contact_form_content":
      return (
        await sql`
                              SELECT *
                              FROM contact_form_content
                              WHERE id = ${id}
                            `
      )[0];

    case "contact_details_content":
      return (
        await sql`
                                SELECT *
                                FROM contact_details_content
                                WHERE id = ${id}
                              `
      )[0];

    case "dynamic_work_list_content": {
      const list = (
        await sql`
      SELECT *
      FROM dynamic_work_list_content
      WHERE id = ${id}
    `
      )[0];

      const workItems = await sql`
    SELECT *
    FROM dynamic_work_list_items
    WHERE list_id = ${id}
    ORDER BY sort_order
  `;

      return {
        ...list,
        workItems,
      };
    }

    case "dynamic_notes_list_content": {
      const list = (
        await sql`
      SELECT *
      FROM dynamic_notes_list_content
      WHERE id = ${id}
    `
      )[0];

      const noteItems = await sql`
    SELECT *
    FROM dynamic_notes_list_items
    WHERE list_id = ${id}
    ORDER BY sort_order
  `;

      return {
        ...list,
        noteItems,
      };
    }

    case "work_header_content":
      return (
        await sql`
                      SELECT *
                      FROM work_header_content
                      WHERE id = ${id}
                    `
      )[0];

    case "links_content":
      return (
        await sql`
                      SELECT *
                      FROM links_content
                      WHERE id = ${id}
                    `
      )[0];

    case "text_content":
      return (
        await sql`
                      SELECT * 
                      FROM text_content
                      WHERE id = ${id}
                    `
      )[0];

    case "number_list_content":
      return (
        await sql`
                      SELECT *
                      FROM number_list_content
                      WHERE id = ${id}
                    `
      )[0];

    case "media_content":
      return (
        await sql`
                      SELECT *
                      FROM media_content
                      WHERE id = ${id}
                    `
      )[0];

    case "arrow_list_content":
      return (
        await sql`
                      SELECT *
                      FROM arrow_list_content
                      WHERE id = ${id}
                    `
      )[0];

    default:
      return null;
  }
}

// Generic function to fetch page data by path
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
        component.component_id,
      ),
    })),
  );

  return {
    ...page,
    components: populatedComponents,
  };
}
