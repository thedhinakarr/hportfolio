import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../../components/Layout.js";

const QAAutomation = () => {
  return (
    <Layout>
      <div className="bg-blue text-white text-center pt-20 pb-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold py-4">QA Automation Services</h1>
        <hr className="w-1/2" />
        <p className=" text-xl mt-4"> Our QA automation services ensure the reliability and quality of your software applications.</p>
      </div>


      <div className="container mx-auto py-12 px-4 mb-12">

        {/* Service 2: QA Automation */}
        <div className="flex items-start mt-12 mb-12">
          <div>

            {/* <div className="text-balance">
              <h2 className="text-3xl flex text-orange font-bold mb-2"><MdOutlineDoubleArrow className="mt-1 mr-1" />QA Automation</h2>
              <p className="text-black text-xl mb-0">
                Our QA automation services ensure the reliability and quality of your software applications.
              </p>
              <p className="text-black text-xl mb-4">
                We offer:
              </p>
            </div> */}

            <ul>
              <div className="flex flex-row justify-center items-center">
                <div className="w-1/2 p-8">
                  <h2 className="text-3xl  font-bold mb-4">Test Automation Frameworks</h2>
                  <p className="text-lg">
                    We develop robust automation frameworks using industry-standard tools, enabling efficient and reliable testing across various scenarios.
                  </p>
                </div>
                <div className="w-1/2">
                  <StaticImage
                    src="../../images/test-automation-frameworks-image.png"
                    alt="Test Automation Frameworks"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2">
                    <StaticImage
                      src="../../images/test-case-design-and-execution-image.png"
                      alt="Test Case Design and Execution"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Test Case Design and Execution</h2>
                    <p className="text-lg">
                      Our comprehensive test case design covers functional, regression, performance, and security testing requirements, ensuring thorough validation of software quality.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">

                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Continuous Integration and Continuous Testing</h2>
                    <p className="text-lg">
                      Integration of automated testing into the CI/CD pipeline enables continuous validation of software changes, enhancing overall quality and release agility.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <StaticImage
                      src="../../images/cicd.png"
                      alt="Continuous Integration and Continuous Testing"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>

              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2">
                    <StaticImage
                      src="../../images/performance-testing-image.png"
                      alt="Performance Testing"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Performance Testing</h2>
                    <p className="text-lg">
                      We conduct load, stress, and scalability testing to assess performance characteristics and identify potential bottlenecks under various conditions.
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

export default QAAutomation

export const Head = () => <title>QA Automation Services - Hiptify</title>
