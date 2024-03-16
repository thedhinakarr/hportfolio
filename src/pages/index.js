import * as React from "react"

const IndexPage = () => {
  return (
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Site Under Development</h1>
        <p className="text-gray-600 mb-6">Sorry, this page is currently under development. Please check back later!</p>
      </div>
    </div> 
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
