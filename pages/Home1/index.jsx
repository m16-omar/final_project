import { Helmet } from "react-helmet";
import {Img, Heading, Button, Text, Slider} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

export default function Home1Page() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    return (
        <><Helmet>
            <title>Youthrive Project</title>
            <meta name="description" content="Web state created using create-react-app" />
        </Helmet>
        <div className="w-full overflow-auto bg-white-A700">
            <div className="flex flex-col items-center">
                <div className=" w-[82%] md:w-full md:p-[1.25rem]">
                    <Header />
                    <Img src="images/img_mask_group.png" alt="image" 
                    className="relative mt-[-0.25rem] h-[45.19rem] object-cover md:h-auto" />
                </div>
            </div>
        </div>
        <div className="mt-[4.00rem] flex flex-col gap-[4.25rem] sm:gap-[2.13rem]">
            <div className="container-xs flex flex-col items-center gap-[2.63rem] md:p-[2.13rem]">
                <div className="flex w-[95%] flex-col items-center gap-[3.63rem] md:w-full sm:gap-[1.81rem]">
                    <div className="flex flex-col item-start">
                       <Heading size="2xl" as="h1" className="ml-[5.56rem] !textblue_gray-900 md:ml-0">
                        Browse The Range
                       </Heading>
                       <Text size="3xl" as="p" className="relative mt-[-0.06rem] !text-gray-700_01">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                       </Text>
                    </div>
                    <div className="flex gap-[1.25rem] self-stretch md:flex-col">
                        <div className="flex w-full flex-co items-center gap-[1.94rem]">
                            <div className="relative h-[30.00rem] self-stretch md:h-auto">
                                <Img 
                                src="images/img_image_81.png"
                                alt="imageeightyone"
                                className="h-[30.00rem] w-full rounded-[10px] object-cover"
                                />
                                <Img 
                                src="images/img_image_106.png"
                                alt="image106"
                                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[30.00rem] w-full rounded-[10px] object-cover"
                                />
                            </div>
                            <Heading as="h2" className="!text-blue_gray-900"> 
                                Dining
                            </Heading>
                        </div>
                        <div className="flex w-full flex-col item-center gap-[1.94rem]">
                            <div className="relative h-[30.300rem] self-stretch md:h-auto">
                            <Img 
                                src="images/img_image_76.png"
                                alt="imageseventysix"
                                className="h-[30.00rem] w-full rounded-[10px] object-cover"
                                />
                                <div className="absolute bottom-0 left right-0 top-0 m-auto h-[30.00rem] w-full md:h-auto">
                                    <Img src="images/img_image_100.png" 
                                         alt="image100" 
                                         className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[30.00rem] w-full rounded-[10px] object-over"
                                    />
                                </div>
                                </div>
                            </div>
                            <Heading as="h3" className="!text-blue_gray-900">
                                Living
                            </Heading>
                        </div>
                        <div className="flex w-full flex-col item-center gap-[1.81rem]">
                            <div className="relative h-[30.00rem] self-stretch md:h-auto">
                                <Img 
                                src="images/img_image_82.png"
                                alt="imageeightyone"
                                className="h-[30.00rem] w-[98%] rounded-[10px] object-cover"
                                />
                                <Img 
                                src="images/img_image_101.png"
                                alt="image101"
                                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[30.00rem] w-full rounded-[10px] object-over"
                                />
                            </div>
                            <Heading as="h4" className="!text-blue_gray-900">
                                Bedroom
                            </Heading>
                        </div>
                    </div>
                </div>
                <div className="self-stretch">
                    <div className="flex flex-col items-center gap-[1.81rem] px-[0.31rem]">
                        <Heading size="5x1" as="h5">
                            Our Products
                        </Heading>
                        <div className="grid grid-cols-4 justify-center gap-[2.00rem] self-stretch md:grid-cols-2 sm:grid-cols-1">
                        <div className="flex w-full flex-col">
                            <div className="relative h-[18.81rem] md:h-auto">
                                <Img 
                                  src="images/img_image_8.png" 
                                  alt="syltherine" 
                                  className="h-[18.18rem] w-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[18.81rem] w-full md:h-auto">
                                <Img 
                                  src="images/img_image_7.png" 
                                  alt="syltherine" 
                                  className="h-[18.18rem] w-full object-cover"
                                  />
                                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[18.81rem] w-full md:h-auto">
                                  <Img 
                                  src="images/img_image_6.png" 
                                  alt="syltherine" 
                                  className="h-[18.18rem] w-full object-cover"
                                  />
                                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[18.81rem] w-full md:h-auto"></div>
                                  </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        








        </>
    )
}