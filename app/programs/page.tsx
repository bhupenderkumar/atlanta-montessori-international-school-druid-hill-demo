export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Image from 'next/image';

function ProgramsPage() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Atlanta Montessori International School - Druid Hills</title>
        <meta name="description" content="AMS Druid Hills Programs" />
      </Head>

      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Atlanta Montessori International School - Druid Hills</h1>
          <p>1215 S Ponce De Leon Ave NE, Atlanta, GA 30306</p>
          <p>Phone: (404) 500-0501</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <section className="bg-white py-8">
          <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
          <p>
            Atlanta Montessori International School - Druid Hills offers a range of programs for students from toddlerhood to high school graduation.
          </p>
          <ul className="list-disc ml-8">
            <li>Montessori Toddler Program (18 months - 3 years)</li>
            <li>Primary Program (3 years - 6 years)</li>
            <li>Elementary Program (6 years - 9 years)</li>
            <li>Secondary Program (9 years - 12 years)</li>
            <li>High School Program (12 years - 18 years)</li>
          </ul>
        </section>

        <section className="bg-gray-100 py-8">
          <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
          <p>
            Our programs are designed to foster a love of learning and a strong foundation in academics, as well as social and emotional growth.
          </p>
          <ul className="list-disc ml-8">
            <li>Language and Literacy</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>History and Culture</li>
            <li>Art and Music</li>
          </ul>
        </section>

        <section className="bg-white py-8">
          <h2 className="text-2xl font-bold mb-4">Faculty</hassistant
            Our faculty is dedicated to providing a supportive and inclusive learning environment.
          </p>
          <p>
            Meet our faculty and learn more about their backgrounds and qualifications.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Meet Our Faculty
          </button>
        </section>

        <section className="bg-gray-100 py-8">
          <h2 className="text-2xl font-bold mb-4">Admissions</h2>
          <p>
            We welcome students from diverse backgrounds and are committed to making our school a welcoming and inclusive community.
          </p>
          <ul className="list-disc ml-8">
            <li>Application Process</li>
            <li>Tour and Interview</li>
            <li>Enrollment and Tuition</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply Now
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <p>&copy; 2023 Atlanta Montessori International School - Druid Hills</p>
        </div>
      </footer>
    </div>
  );
}

export default ProgramsPage;
```
    </section>
  );
}
