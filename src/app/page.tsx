import Link from "next/link";
// import TestQuery from "./TestQuery";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen"> {/* Set up a flex container with full height */}
        <header className="bg-black text-white p-4">
          <div className="container mx-auto flex justify-between items-center flex-wrap"> {/* Allow wrapping on small screens */}
            <h1 className="text-2xl md:text-4xl font-bold">My Website</h1>
            <nav className="w-full md:w-auto"> {/* Make nav full width on small screens */}
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 gap-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </nav>
           {/* <Link href="/api/auth/signin" ><button type="button" className="bg-gray-700 text-white px-4 py-2 rounded-lg mt-2 md:mt-0">Sign In</button></Link> */}
           <Link href="./login" ><button type="button" className="bg-gray-700 text-white px-4 py-2 rounded-lg mt-2 md:mt-0">Sign In2</button></Link>
          </div>
        </header>
        <main className="container mx-auto py-8 flex-grow"> {/* Allow main to grow and take available space */}
          <h2 className="text-3xl font-bold mb-4">Welcome to My Website!</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </main>
        
        <footer className="bg-black text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2022 My Website. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;