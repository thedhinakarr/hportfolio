import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../../components/Layout.js";


const EnterpriseArchitecture = () => {
  return (
    <Layout>
      <div className="bg-blue text-white text-center pt-20 pb-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold py-4">Enterprise Architecture Services</h1>
        <hr className="w-1/2" />
        <p className="mt-4 text-xl">Our enterprise architecture solutions drive innovation and agility across your organization.</p>
      </div>


      <div className="container mx-auto py-12 px-4 mb-12">



        {/* Service 3: Enterprise Architecture */}
        <div className="flex items-start mb-12">

          <div>
            {/* <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />Enterprise Architecture</h2>
              <p className="text-black text-xl mb-0">
                Our enterprise architecture solutions drive innovation and agility across your organization.
              </p>
              <p className="text-black text-xl mb-4">
                Our services include:
              </p>
            </div> */}
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
                      src="../../images/architecture-assessment-and-planning-image.png"
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
                      src="../../images/enterprise-integration-image.png"
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
                      src="../../images/scalability-and-resilience-image.png"
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
                      src="../../images/security-architecture-image.png"
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

    </Layout>
  )
}

export default EnterpriseArchitecture

export const Head = () => <title>EA Services - Hiptify</title>
