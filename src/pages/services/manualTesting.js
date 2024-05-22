import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../../components/Layout.js";

const ManualTesting = () => {
  return (
    <Layout>
      <div className="bg-blue text-white text-center pt-20 pb-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold py-4"> Manual Testing Services
        </h1>
        <hr className="w-1/2" />
        <p className=" text-xl mt-4">HIPTIFY Offers End-to-End Software Services to ensure the desired Quality and User Experience</p>
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
                  <p className="text-lg">
                    <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
                      <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6 text-center text-black">
                          HIPTIFY: Elevating Testing Excellence
                        </h1>
                        <p className="text-lg text-black mb-8">
                          HIPTIFY brings a unique blend of testing processes, tools, and technology expertise, and domain knowledge to ensure that the product is delivered without defects in an accelerated timeframe.
                        </p>
                        <p className="text-lg text-black mb-8">
                          HIPTIFY provides end-to-end manual testing services for your functional testing needs with a foundation of matured test processes, in-house accelerators, and experience with all industry-leading functional testing tools.
                        </p>
                        <p className="text-lg text-black mb-8">
                          We undertake complete responsibility for the testing activities from creating an optimized test plan to post-production support. We adopt a user-centric testing approach, delivering continuous value improvement in our engagements.
                        </p>
                        <p className="text-lg text-black mb-8">
                          We ensure complete traceability of the business requirements to the test cases designed and executed for extensive test coverage. As a professional company for manual testing, we provide extensive reporting with customized dashboards at regular intervals to keep you on top of the testing progress and defects.
                        </p>
                      </div>
                    </div></p>
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
                    <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
                      <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-center text-black">
                          Why HIPTIFY for Manual Testing Services?
                        </h2>
                        <ul className="list-disc text-lg text-black mb-8">
                          <li>Experienced on a wide range of applications, including the web, desktop, mobile, packaged products, etc.</li>
                          <li>Support various development methodologies, like Agile, waterfall, DevOps, Kandan, and Hybrid models and work collaboratively with the development teams.</li>
                          <li>Testing professionals with extensive experience across various domains.</li>
                          <li>Test requirement techniques to ensure Bi-Directional traceability.</li>
                          <li>Organized approach to testing and the organization of test cases to promote repeatability.</li>
                          <li>Risk-based Testing Methodology addressing Business, Project, and Technology risks.</li>
                          <li>Detailed defect documentation processes to ensure reproducibility of defects.</li>
                          <li>Expertise on all leading tools for application lifecycle management, test management, defect management, test data management, etc.</li>
                          <li>Structured project communications, including daily, weekly, and monthly status reports with detailed test execution status and analysis delivered through a customized dashboard.</li>
                          <li>Optimized cost of testing.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>



              <li>
                <div className="flex flex-row justify-center items-center">

                  <div className="p-8">
                    <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
                      <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-center text-black">
                          Software Testing Services?
                        </h2>
                        <p className="text-lg text-black mb-8">
                          We offer a wide range of all-round manual testing services to verify all the aspects of your software perform as expected. We have 10 in-house engineers specializing in Testing Service, most of them having an average of 5 years of hands-on experience.
                        </p>

                        <div className="bg-white py-6 sm:px-12 lg:px-24">
                          <div className="max-w-4xl mx-auto">
                            <table className="w-full border-collapse border border-black">
                              <tbody>
                                <tr className="bg-white text-black">
                                  <th className="border border-black px-4 py-2">Functional Testing</th>
                                  <th className="border border-black px-4 py-2">OS Compatibility Testing</th>
                                  <th className="border border-black px-4 py-2">Integration Testing</th>
                                </tr>
                              </tbody>
                              <tbody className="text-black">
                                <tr className="bg-white text-black">
                                  <td className="border border-black px-4 py-2">Regression Testing</td>
                                  <td className="border border-black px-4 py-2">Browser Compatibility Testing</td>
                                  <td className="border border-black px-4 py-2">Smoke/ Sanity Testing</td>
                                </tr>
                                <tr>
                                  <td className="border border-black px-4 py-2">Localization Testing</td>
                                  <td className="border border-black px-4 py-2">Configuration Testing</td>
                                  <td className="border border-black px-4 py-2">Integration Testing</td>
                                </tr>
                                <tr className="bg-white text-black">
                                  <td className="border border-black px-4 py-2">System Testing</td>
                                  <td className="border border-black px-4 py-2">Usability Testing</td>
                                  <td className="border border-black px-4 py-2">Business Scenario Based Testing</td>
                                </tr>
                                <tr className="bg-white text-black">
                                  <td className="border border-black px-4 py-2">UI/UX Testing</td>
                                  <td className="border border-black px-4 py-2">Exploratory Testing</td>
                                  <td className="border border-black px-4 py-2">Acceptance Testing</td>
                                </tr>
                                <tr className="bg-white text-black">
                                  <td className="border border-black px-4 py-2">End to End Testing</td>
                                  <td className="border border-black px-4 py-2">Security Testing</td>
                                  <td className="border border-black px-4 py-2">Performance Testing</td>
                                </tr>
                                <tr className="bg-white text-black">
                                  <td className="border border-black px-4 py-2">API Testing</td>
                                  <td className="border border-black px-4 py-2">User Acceptance Testing</td>
                                  <td className="border border-black px-4 py-2">Load and Stress Testing</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ManualTesting

export const Head = () => <title>Manual Testing Services - Hiptify</title>
