export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

function Programs() {
  return (
    <>
      <Head>
        <title>Atlanta Montessori International School - Druid Hills | Programs</title>
        <meta name="description" content="Atlanta Montessori International School - Druid Hills programs" />
      </Head>
      <header>
        <nav>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About Us</a></Link></li>
            <li><Link href="/programs"><a>Programs</a></Link></li>
            <li><Link href="/admissions"><a>Admissions</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Our Programs</h1>
          <p>At Atlanta Montessori International School - Druid Hills, we offer a range of programs for children from birth to 12th grade.</p>
        </section>
        <section className="programs">
          <h2>Infant and Toddler Program (6 weeks - 3 years)</h2>
          <p>Our infant and toddler program is designed to foster a sense of wonder and curiosity in young children.</p>
          <ul>
            <li>Trained and experienced teachers</li>
            <li>Low student-to-teacher ratio</li>
            <li>Montessori materials and activities</li>
          </ul>
          <h2>Primary Program (3-6 years)</h2>
          <p>Our primary program builds on the foundation established in the infant and toddler program, with a focus on practical life skills and academic preparation.</p>
          <ul>
            <li>Emphasis on self-directed learning</li>
            <li>Hands-on activities and projects</li>
            <li>Preparation for elementary school</li>
          </ul>
          <h2>Elementary Program (6-12 years)</h2>
          <p>Our elementary program is designed to foster a love of learning and a sense of community among students.</p>
          <ul>
            <li>Collaborative learning environment</li>
            <li>Hands-on activities and projects</li>
            <li>Preparation for middle school</li>
          </ul>
          <h2>Upper Elementary and Middle School Programs (9-12 years)</h2>
          <p>Our upper elementary and middle school programs build on the foundation established in the elementary program, with a focus on academic rigor and personal growth.</p>
          <ul>
            <li>Challenging curriculum and activities</li>
            <li>Preparation for high school</li>
            <li>Emphasis on community service and leadership</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; Atlanta Montessori International School - Druid Hills</p>
        <p>1215 S Ponce De Leon Ave NE, Atlanta, GA 30306 | (404) 500-0501</p>
      </footer>
    </>
  );
}

export default Programs;
```

This JSX code generates a Next.js page component for the programs page of the Atlanta Montessori International School - Druid Hills website. The page includes a navigation menu, a hero section with a brief introduction to the programs, and a section detailing the various programs offered by the school. The footer includes the school's contact information.
    </section>
  );
}
