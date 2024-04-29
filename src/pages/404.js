import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="bg-blue-500 min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-black">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" && (
          <>
            <br />
            Try creating a page in <code className="text-orange">src/pages/</code>.
            <br />
          </>
        )}
        <br />
        <Link to="/" className="text-orange font-bold hover:underline text-2xl "> Click here to go back home</Link>
      </p>
    </main>

  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
