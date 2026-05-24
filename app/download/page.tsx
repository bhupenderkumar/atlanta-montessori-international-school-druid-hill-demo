export default function Download() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Image from 'next/image';

function DownloadPage() {
    return (
        <>
            <Head>
                <title>Download - Atlanta Montessori International School</title>
                <meta name="description" content="Download resources and materials from Atlanta Montessori International School" />
            </Head>

            <header className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between">
                        <h1 className="text-3xl font-bold">Atlanta Montessori International School</h1>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-200 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white">About</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white">Admissions</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold mb-8">Download Resources</h2>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded shadow-md p-8">
                            <h3 className="text-2xl font-bold mb-4">Our Catalog</h3>
                            <p>Download our latest catalog to learn more about our school and programs.</p>
                            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Now</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded shadow-md p-8">
                            <h3 className="text-2xl font-bold mb-4">Our Brochure</h3>
                            <p>Learn more about our school's mission, values, and programs in our brochure.</p>
                            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Now</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded shadow-md p-8">
                            <h3 className="text-2xl font-bold mb-4">Our Handbook</h3>
                            <p>Review our school's policies, procedures, and guidelines in our handbook.</p>
                            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Now</a>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <ul className="flex justify-between">
                        <li>
                            <Image src="/logo.png" alt="Atlanta Montessori International School Logo" width={100} height={100} />
                        </li>
                        <li>
                            <p>1215 S Ponce De Leon Ave NE, Atlanta, GA 30306</p>
                            <p>(404) 500-0501</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default DownloadPage;
```

This JSX code creates a basic structure for the download page of the Atlanta Montessori International School. It includes a header with a navigation menu, a main content section with links to download various resources, and a footer with the school's address and phone number. The styles are added using Tailwind CSS classes. You can customize the styles and add more content as per your requirements.
    </section>
  );
}
