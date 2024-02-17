import { sql } from "@vercel/postgres";
import  Navbar, {QueryResultRow}  from "./components/Navbar/Navbar"; 
import '@fortawesome/fontawesome-svg-core/styles.css'

export default async function Home() {

  const { rows } = await sql`SELECT * from nav_links`;

  return (
   <>
    <Navbar navLinks={rows as QueryResultRow[]} />
   </>
  );
}
