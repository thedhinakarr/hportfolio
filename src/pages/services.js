import * as React from "react"
import { navigate, Link } from 'gatsby';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StaticImage } from 'gatsby-plugin-image';
import { MdOutlineDoubleArrow } from "react-icons/md";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="bg-blue text-white text-center py-20 flex flex-col items-center">
        <h1 className="text-6xl font-bold py-4">Services</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Experience excellence with our unparalleled services.</p>
      </div>


      <div className="container mx-auto py-12 px-4 mb-12">
        {/* Service 1: Development */}
        <div className="flex items-start mb-12">
          <div>
            <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />Development</h2>
              <p className="text-black text-xl mb-0">
                We offer a comprehensive range of development services tailored to your business needs.
              </p>
              <p className="text-black text-xl mb-4">
                Our expertise includes:
              </p>
            </div>
            <ul >
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Custom Software Development</h2>
                    <p className="text-lg">
                      Tailored development of web, mobile, and desktop applications to meet specific business requirements, leveraging the latest technologies and best practices.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <StaticImage
                      src="../images/custom-software-development-image.png"
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
                      src="../images/full-stack-development-image.png"
                      alt="Full Stack Development"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Full Stack Development</h2>
                    <p className="text-lg">
                      End-to-end development services covering both frontend and backend development, ensuring seamless integration and optimal performance across the entire application stack.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Rapid Prototyping</h2>
                    <p className="text-lg">
                      Our iterative approach to prototyping and MVP development allows us to validate concepts, gather feedback, and accelerate time-to-market for new products and features.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <StaticImage
                      src="../images/rapid-prototyping-image.png"
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
                      src="../images/legacy-system-modernization-image.png"
                      alt="Legacy System Modernization"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Legacy System Modernization</h2>
                    <p className="text-lg">
                      We help modernize and migrate legacy systems to modern platforms and architectures, enhancing scalability, maintainability, and security while preserving valuable business logic and data.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>


        {/* Service 2: QA Automation */}
        <div className="flex items-start mt-12 mb-12">
          <div>

            <div className="text-balance">
              <h2 className="text-3xl flex text-orange font-bold mb-2"><MdOutlineDoubleArrow className="mt-1 mr-1" />QA Automation</h2>
              <p className="text-black text-xl mb-0">
                Our QA automation services ensure the reliability and quality of your software applications.
              </p>
              <p className="text-black text-xl mb-4">
                We offer:
              </p>
            </div>
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
                    src="../images/test-automation-frameworks-image.png"
                    alt="Test Automation Frameworks"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2">
                    <StaticImage
                      src="../images/test-case-design-and-execution-image.png"
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
                      src="../images/cicd.png"
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
                      src="../images/performance-testing-image.png"
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


        {/* Service 3: Enterprise Architecture */}
        <div className="flex items-start mb-12">

          <div>
            <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />Enterprise Architecture</h2>
              <p className="text-black text-xl mb-0">
                Our enterprise architecture solutions drive innovation and agility across your organization.
              </p>
              <p className="text-black text-xl mb-4">
                Our services include:
              </p>
            </div>
            <ul>
              <li>
                <div className="flex flex-row justify-center items-center">

                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Architecture Assessment and Planning</h2>
                    <p className="text-lg">
                      We evaluate existing IT architectures, identify improvement opportunities, and develop strategic roadmaps for future-state architecture goals.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <StaticImage
                      src="../images/architecture-assessment-and-planning-image.png"
                      alt="Architecture Assessment and Planning"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2">
                    <StaticImage
                      src="../images/enterprise-integration-image.png"
                      alt="Enterprise Integration"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Enterprise Integration</h2>
                    <p className="text-lg">
                      Our integration solutions connect disparate systems and applications, enabling seamless data exchange and business process automation.
                    </p>
                  </div>

                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Scalability and Resilience</h2>
                    <p className="text-lg">
                      We design architectures for scalability, resilience, and high performance, ensuring systems can handle growth, peak loads, and maintain uptime.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <StaticImage
                      src="../images/scalability-and-resilience-image.png"
                      alt="Scalability and Resilience"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2">
                    <StaticImage
                      src="../images/security-architecture-image.png"
                      alt="Security Architecture"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Security Architecture</h2>
                    <p className="text-lg">
                      Our security-focused approach includes threat modeling, access control, encryption, and compliance with regulatory requirements to ensure secure architectures.
                    </p>
                  </div>

                </div>
              </li>
            </ul>
          </div>
        </div>


      </div>





      <Footer />
    </div>
  )
}

export default Services

export const Head = () => <title>Services - Hiptify</title>
