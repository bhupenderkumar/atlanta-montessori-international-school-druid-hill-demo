export default function About() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Image from 'next/image';

function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Atlanta Montessori International School - Druid Hills</title>
        <meta name="description" content="Learn about Atlanta Montessori International School - Druid Hills" />
      </Head>

      <main className="container mx-auto p-4 pt-6 pb-6 md:p-6 lg:p-12">
        <header className="mb-12 text-center">
          <Image
            src="/logo.png" // replace with your school's logo
            alt="Atlanta Montessori International School - Druid Hills Logo"
            width={200}
            height={100}
            className="shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4 mb-2">Welcome to Atlanta Montessori International School - Druid Hills</h1>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            Our mission is to provide a nurturing and supportive environment that fosters intellectual, social, and emotional growth in our students. We aim to develop curious, independent, and compassionate individuals who are equipped to succeed in an ever-changing world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our History</h2>
          <p>
            Atlanta Montessori International School - Druid Hills was founded in 2000 with the goal of providing a high-quality Montessori education to children in the Atlanta area. Over the years, we have grown to become a respected and beloved institution in the community, known for our commitment to academic excellence and our dedication to the well-being of our students and staff.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
          <p>
            We believe that every child is unique and capable of achieving great things with the right support and guidance. Our Montessori program is designed to promote self-directed learning, hands-on activity, and collaborative play, allowing our students to develop at their own pace and in their own style.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            We would love to hear from you! If you have any questions or would like to schedule a tour, please don't hesitate to contact us.
          </p>
          <p className="mt-4">
            Phone: (404) 500-0501
          </p>
          <p>
            Address: 1215 S Ponce De Leon Ave NE, Atlanta, GA 30306
          </p>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
```

This JSX code defines a basic page structure and content for the About page of the Atlanta Montessori International School - Druid Hills website. You can customize it as per your needs and add more content, images, or other features as required.
    </section>
  );
}
