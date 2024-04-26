import * as React from "react"
import { navigate, Link } from 'gatsby';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StaticImage } from 'gatsby-plugin-image'

const Services = () => {
  return (
    <div>
      <Header />
      <div className="bg-blue text-white text-center py-24 flex flex-col items-center">
        <h1 className="text-6xl font-bold py-4">Services</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Experience excellence with our unparalleled services.</p>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <StaticImage
              src="../images/custom_software_development.jpg"
              alt="Custom Software Development"
              placeholder="blurred"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Custom Software Development</h2>
            <p className="text-gray-600 mb-4">
              We specialize in crafting bespoke software solutions tailored to your unique business needs.
            </p>
            <ul className="list-disc list-inside">
              <li>Web, mobile, and desktop applications</li>
              <li>Technologies: React, Angular, Node.js, .NET, etc.</li>
              <li>Agile development methodology</li>
              <li>Scalable and maintainable codebase</li>
            </ul>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <StaticImage
              src="../images/qa_automation.jpg"
              alt="QA Automation"
              placeholder="blurred"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">QA Automation</h2>
            <p className="text-gray-600 mb-4">
              Our QA automation services ensure the reliability and performance of your software applications.
            </p>
            <ul className="list-disc list-inside">
              <li>Test automation frameworks</li>
              <li>Comprehensive test case design and execution</li>
              <li>Continuous integration and testing</li>
              <li>Performance and load testing</li>
            </ul>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <StaticImage
              src="../images/enterprise_architecture.jpg"
              alt="Enterprise Architecture"
              placeholder="blurred"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Enterprise Architecture</h2>
            <p className="text-gray-600 mb-4">
              Our enterprise architecture solutions drive innovation and agility across your organization.
            </p>
            <ul className="list-disc list-inside">
              <li>Architecture assessment and planning</li>
              <li>Enterprise integration and scalability</li>
              <li>Security architecture and compliance</li>
              <li>Cloud migration and modernization</li>
            </ul>
          </div>
          {/* Add more services */}
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        {/* Service 1: Development */}
        <div className="flex items-start mb-12">
          <StaticImage
            src="../images/development.jpg"
            alt="Development"
            placeholder="blurred"
            className="w-24 h-24 rounded-full mr-8"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Development</h2>
            <p className="text-gray-600 mb-4">
              We offer a comprehensive range of development services tailored to your business needs. Our expertise includes:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Custom Software Development:</strong> We specialize in crafting bespoke solutions for web, mobile, and desktop platforms, utilizing the latest technologies and best practices.
              </li>
              <li>
                <strong>Full Stack Development:</strong> From frontend to backend, we cover all aspects of development to ensure seamless integration and optimal performance across the entire application stack.
              </li>
              <li>
                <strong>Rapid Prototyping:</strong> Our iterative approach to prototyping and MVP development allows us to validate concepts, gather feedback, and accelerate time-to-market for new products and features.
              </li>
              <li>
                <strong>Legacy System Modernization:</strong> We help modernize and migrate legacy systems to modern platforms and architectures, enhancing scalability, maintainability, and security while preserving valuable business logic and data.
              </li>
            </ul>
          </div>
        </div>
        {/* Service 2: QA Automation */}
        <div className="flex items-start mb-12">
          <StaticImage
            src="../images/qa_automation.jpg"
            alt="QA Automation"
            placeholder="blurred"
            className="w-24 h-24 rounded-full mr-8"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">QA Automation</h2>
            <p className="text-gray-600 mb-4">
              Our QA automation services ensure the reliability and quality of your software applications. We offer:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Test Automation Frameworks:</strong> We develop robust automation frameworks using industry-standard tools, enabling efficient and reliable testing across various scenarios.
              </li>
              <li>
                <strong>Test Case Design and Execution:</strong> Our comprehensive test case design covers functional, regression, performance, and security testing requirements, ensuring thorough validation of software quality.
              </li>
              <li>
                <strong>Continuous Integration and Continuous Testing:</strong> Integration of automated testing into the CI/CD pipeline enables continuous validation of software changes, enhancing overall quality and release agility.
              </li>
              <li>
                <strong>Performance Testing:</strong> We conduct load, stress, and scalability testing to assess performance characteristics and identify potential bottlenecks under various conditions.
              </li>
            </ul>
          </div>
        </div>
        {/* Service 3: Enterprise Architecture */}
        <div className="flex items-start mb-12">
          <StaticImage
            src="../images/enterprise_architecture.jpg"
            alt="Enterprise Architecture"
            placeholder="blurred"
            className="w-24 h-24 rounded-full mr-8"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Enterprise Architecture</h2>
            <p className="text-gray-600 mb-4">
              Our enterprise architecture solutions drive innovation and agility across your organization. Our services include:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Architecture Assessment and Planning:</strong> We evaluate existing IT architectures, identify improvement opportunities, and develop strategic roadmaps for future-state architecture goals.
              </li>
              <li>
                <strong>Enterprise Integration:</strong> Our integration solutions connect disparate systems and applications, enabling seamless data exchange and business process automation.
              </li>
              <li>
                <strong>Scalability and Resilience:</strong> We design architectures for scalability, resilience, and high performance, ensuring systems can handle growth, peak loads, and maintain uptime.
              </li>
              <li>
                <strong>Security Architecture:</strong> Our security-focused approach includes threat modeling, access control, encryption, and compliance with regulatory requirements to ensure secure architectures.
              </li>
            </ul>
          </div>
        </div>
        {/* Add more services */}
      </div>
      <Footer />
    </div>
  )
}

export default Services

export const Head = () => <title>Services - Hiptify</title>
