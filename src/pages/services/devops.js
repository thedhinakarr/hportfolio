import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../../components/Layout.js";


const DevOps = () => {
  return (
    <Layout>
      <div className="bg-blue text-white text-center pt-20 pb-10 flex flex-col items-center">
        <h1 className="text-6xl font-bold py-4">DevOps Services</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Experience excellence with our unparalleled services.</p>
      </div>


      <div className="container mx-auto py-12 px-4 mb-12">
        {/* Service 1: Development */}
        <div className="flex items-start mb-12">
          <div>
            {/* <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />DevOps</h2>
              <p className="text-black text-xl mb-0">
                We offer a comprehensive range of devops services tailored to your business needs.
              </p>
              <p className="text-black text-xl mb-4">
                Our expertise includes:
              </p>
            </div> */}
            <ul >
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Continuous Integration and Continuous Deployment (CI/CD)</h2>
                    <p className="text-lg">
                      Implementation of CI/CD pipelines to automate software build, test, and deployment processes, enabling frequent and reliable releases of software updates.
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
                    <h2 className="text-3xl font-bold mb-4">Infrastructure as Code (IaC)</h2>
                    <p className="text-lg">
                      Provisioning and management of infrastructure using code-based configuration tools such as Terraform and Ansible, facilitating consistency, repeatability, and scalability of infrastructure deployments.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Monitoring and Logging</h2>
                    <p className="text-lg">
                      Our iterative approach to prototyping and MVP development allows us to validate concepts, gather feedback, and accelerate time-to-market for new products and features.
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
                    <h2 className="text-3xl font-bold mb-4">DevSecOps</h2>
                    <p className="text-lg">
                      Integration of security practices into the DevOps workflow, including automated security testing, vulnerability scanning, and compliance checks, to minimize security risks and ensure secure software delivery.
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

export default DevOps

export const Head = () => <title>DevOps Services - Hiptify</title>
