import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../../components/Layout.js";

const ItSupport = () => {
  return (
    <Layout>
      <div className="bg-blue text-white text-center pt-20 pb-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold py-4">IT Support Services</h1>
        <hr className="w-1/2" />
        <p className="mt-4">Experience excellence with our unparalleled services.</p>
      </div>


      <div className="container mx-auto py-12 px-4 mb-12">
        {/* Service 1: Development */}
        <div className="flex items-start mb-12">
          <div>
            {/* <div className="text-balance">
              <h2 className="flex text-3xl text-orange font-bold mb-2"> <MdOutlineDoubleArrow className="mt-1 mr-1" />Development</h2>
              <p className="text-black text-xl mb-0">
                We offer a comprehensive range of development services tailored to your business needs.
              </p>
              <p className="text-black text-xl mb-4">
                Our expertise includes:
              </p>
            </div> */}
            <ul >
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Help Desk Services</h2>
                    <p className="text-lg">
                      Provision of responsive and reliable help desk support to address user queries, troubleshoot technical issues, and provide assistance with software and hardware problems.
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
                    <h2 className="text-3xl font-bold mb-4">Incident Management</h2>
                    <p className="text-lg">
                      End-to-end development services covering both frontend and backend development, ensuring seamless integration and optimal performance across the entire application stack.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-center items-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">Service Level Agreements (SLAs)</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Remote Support</h2>
                    <p className="text-lg">
                      Remote troubleshooting and support capabilities to assist users located in different geographical locations, leveraging remote desktop tools and collaboration platforms for efficient problem resolution.
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

export default ItSupport

export const Head = () => <title>IT Support Services - Hiptify</title>
