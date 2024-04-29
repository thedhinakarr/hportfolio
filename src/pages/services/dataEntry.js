import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../../components/Layout.js";


const DataEntry = () => {
  return (
    <Layout>
      < div className="bg-blue text-white text-center pt-20 pb-10 flex flex-col items-center" >
        <h1 className="text-6xl font-bold py-4">Data Entry Services</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Experience excellence with our unparalleled services.</p>
      </div >


      <div className="container mx-auto py-12 px-4 mb-12">
        {/* Service 1: Development */}
        <div className="flex items-start mb-12">
          <div>
            <ul >
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4"> Data Capture and Entry</h2>
                    <p className="text-lg">
                      Accurate and efficient data entry services for capturing and digitizing data from various sources, including paper documents, forms, and electronic files.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <StaticImage
                      src="../../images/custom-software-development-image.png"
                      alt="Custom Software Development"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2">
                    <StaticImage
                      src="../../images/full-stack-development-image.png"
                      alt="Full Stack Development"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Data Cleansing and Validation</h2>
                    <p className="text-lg">
                      Validation and cleansing of data to ensure accuracy, completeness, and consistency, including de-duplication, normalization, and error correction.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Data Processing and Conversion</h2>
                    <p className="text-lg">
                      Processing and conversion of data into different formats and structures, such as databases, spreadsheets, and XML/JSON files, to support downstream analysis and usage.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <StaticImage
                      src="../../images/rapid-prototyping-image.png"
                      alt="Rapid Prototyping"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2">
                    <StaticImage
                      src="../../images/legacy-system-modernization-image.png"
                      alt="Legacy System Modernization"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Quality Assurance</h2>
                    <p className="text-lg">
                      Quality assurance checks and audits to verify the integrity and reliability of data entry processes, including validation against predefined business rules and data quality standards.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </Layout>

  )
}

export default DataEntry

export const Head = () => <title>Data Entry Services - Hiptify</title>
