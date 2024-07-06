import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>LithoThrive Project</title>
        <meta name="description" content="New site created using create-react-app" />
      </Helmet>
      <Header />
      <div className="w-full overflow-auto bg-white-A700">
        <div className="w-full flex-col gap-6.25rem">
          <header>
            <Img
              src="images/img_mask_group.png"
              alt="mask group"
              className="relative mt-8.25rem h-61.19rem w-full object-cover md:h-auto"
            />
          </header>
          <div className="flex w-full flex-col items-center gap-4.25rem sm:gap-2.12rem">
            <div className="container-15 flex flex-col items-center gap-2.94rem md:gap-1.25rem">
              <div className="flex w-full flex-col items-center gap-3.63rem md:w-full sm:gap-2.82rem">
                <Heading size="2xl" as="h1" className="mt-3.56rem text-blue_gray-200 md:mt-0">
                  Browse The Range
                </Heading>
                <Text size="3xl" as="p" className="relative mt-0.06rem text-gray-700_01">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </div>
              <div className="flex gap-2.25rem self-stretch md:flex-col">
                <div className="flex w-full flex-col items-center gap-1.90rem">
                  <div className="relative h-30.00rem self-stretch md:h-auto">
                    <Img
                      src="images/img_image_8.png"
                      alt="image eight"
                      className="h-30.00rem w-full rounded-10px object-cover"
                    />
                    <Img
                      src="images/img_image_10.png"
                      alt="image ten"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-30.00rem w-full md:h-auto"
                    />
                  </div>
                </div>
              </div>
              <Heading as="h3" className="text-blue_gray-900">
                Living
              </Heading>
              <div className="flex w-full flex-col items-center gap-11.94rem">
                <div className="relative h-30.00rem self-stretch md:h-auto">
                  <Img
                    src="images/img_image_2.png"
                    alt="image two"
                    className="h-30.00rem w-full rounded-10px object-cover"
                  />
                  <Img
                    src="images/img_image_101.png"
                    alt="image 101"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-30.00rem w-full rounded-10px object-cover"
                  />
                </div>
                <Heading as="h3" className="text-blue_gray-900">
                  Heading
                </Heading>
                <div className="flex w-full flex-col items-center gap-11.81rem">
                  <div className="relative h-30.00rem self-stretch md:h-auto">
                    <Img
                      src="images/img_image_76.png"
                      alt="image seventy-six"
                      className="h-30.00rem w-full rounded-10px object-cover"
                    />
                    <Img
                      src="images/img_image_99.png"
                      alt="image ninety-nine"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-30.00rem w-full rounded-10px object-cover"
                    />
                  </div>
                  <Heading as="h4" className="text-blue_gray-900">
                    Heading
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-center gap-11.81rem">
                  <div className="relative h-30.00rem self-stretch md:h-auto">
                    <Img
                      src="images/img_image_82.png"
                      alt="image eighty-two"
                      className="h-30.00rem w-full rounded-10px object-cover"
                    />
                    <Img
                      src="images/img_image_101.png"
                      alt="image 101"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-30.00rem w-full rounded-10px object-cover"
                    />
                  </div>
                  <Heading as="h4" className="text-blue_gray-900">
                    Heading
                  </Heading>
                </div>
                <div className="flex flex-col items-center gap-11.00rem px-0.31rem">
                  <Heading size="3xl" as="h5">
                    Our Products
                  </Heading>
                  <div className="grid grid-cols-2 justify-center gap-12.00rem self-stretch md:grid-cols-2 sm:grid-cols-1">
                    <a href="https://www.youtube.com/embed/wIoxBK5sz7I" target="_blank">
                      <div className="relative h-18.81rem md:h-auto">
                        <Img
                          src="images/img_image_8.png"
                          alt="image eight"
                          className="h-18.81rem w-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-18.81rem w-full md:h-auto">
                          <Img
                            src="images/img_image_7.png"
                            alt="image seven"
                            className="h-18.81rem w-full object-cover"
                          />
                        </div>
                      </div>
                    </a>
                    <div className="absolute right-1.50rem top-1.50rem m-auto flex h-3.00rem w-3.00rem items-center justify-center rounded-10px bg-red-300 text-center text-white-A700">
                      -30%
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-0.88rem">
                <div className="flex flex-col gap-0.38rem">
                  <Text as="h5" className="text-blue_gray-400">
                    Stylish café chair
                  </Text>
                  <Heading size="2xl" as="h5">
                    Rp 2.500.000
                  </Heading>
                  <Text as="p" className="self-end font-normal text-gray-400 line-through">
                    Rp 3.500.000
                  </Text>
                </div>
                <a href="https://www.youtube.com/embed/wIoxBK5sz7I" target="_blank">
                  <div className="relative h-18.81rem md:h-auto">
                    <Img
                      src="images/img_image_8.png"
                      alt="image eight"
                      className="h-18.81rem w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-18.81rem w-full md:h-auto">
                      <Img
                        src="images/img_image_7.png"
                        alt="image seven"
                        className="h-18.81rem w-full object-cover"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="bg-white py-8 px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col items-center gap-6">
                    <Heading size="lg" className="text-blue_gray-800">
                      Discover Our Collection
                    </Heading>
                    <Text size="md" className="text-gray-600 text-center">
                      We offer a wide range of products to suit your needs. Explore our collection and find the perfect piece for your home.
                    </Text>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="relative">
                      <Img src="images/img_collection1.png" alt="Collection 1" className="w-full h-60 object-cover rounded-md" />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                        <Text size="lg" className="text-white">Collection 1</Text>
                      </div>
                    </div>
                    <div className="relative">
                      <Img src="images/img_collection2.png" alt="Collection 2" className="w-full h-60 object-cover rounded-md" />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                        <Text size="lg" className="text-white">Collection 2</Text>
                      </div>
                    </div>
                    <div className="relative">
                      <Img src="images/img_collection3.png" alt="Collection 3" className="w-full h-60 object-cover rounded-md" />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                        <Text size="lg" className="text-white">Collection 3</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col items-center gap-6">
                    <Heading size="lg" className="text-blue_gray-800">
                      About Us
                    </Heading>
                    <Text size="md" className="text-gray-600 text-center">
                      LithoThrive is committed to providing high-quality, sustainable products that enhance your living space. Learn more about our story and values.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white py-8 px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col items-center gap-6">
                    <Heading size="lg" className="text-blue_gray-800">
                      Contact Us
                    </Heading>
                    <Text size="md" className="text-gray-600 text-center">
                      Have questions? Get in touch with us. We are here to help you find the perfect product for your home.
                    </Text>
                  </div>
                  <form className="mt-8 w-full max-w-md mx-auto">
                    <div className="flex flex-col gap-4">
                      <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded-md" />
                      <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded-md" />
                      <textarea placeholder="Message" className="border border-gray-300 p-2 rounded-md h-32"></textarea>
                      <button type="submit" className="bg-blue-500 text-white py-2 rounded-md">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
