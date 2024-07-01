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
                       <Text size="3xl" as="p" className="relative mt-[-0.06rem] !text-gray-700_01">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                       </Text>
                    </div>
                </div>
            </div>
        </div>
        








        </>
    )
}