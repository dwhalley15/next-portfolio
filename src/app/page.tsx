import { sql } from "@vercel/postgres";
import  Navbar, {QueryResultRow}  from "./components/Navbar/Navbar"; 
import Header from "./components/Header/Header";
import '@fortawesome/fontawesome-svg-core/styles.css'

export default async function Home() {

  const { rows: navLinks } = await sql`SELECT * from nav_links`;

  return (
   <>
    <Navbar navLinks={navLinks as QueryResultRow[]} />
    <main>
      <Header />
    </main>
   </>
  );
}
