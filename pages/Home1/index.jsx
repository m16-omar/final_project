import { Helmet } from "react-helmet";
import { Img, Heading, Button, Slider, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDetails from "../../components/ProductDetails";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const data = [
    {
        userImageEightyOne: "images/img_image_81.png",
        userImageOneHundredSix: "images/img_image_106.png",
        diningText: "Dining",
    },
    {
        userImageEightyOne: "images/img_image_76.png",
        userImageOneHundredSix: "images/img_image_106.png",
        diningText: "Living",
    },
    {
        userImageEightyOne: "images/img_image_82.png",
        userImageOneHundredSix: "images/img_image_101.png",
        diningText: "Bedroom",
    },
];

const data1 = [
    {
        mainImage: "images/img_image_8.png",
        secondaryImage1: "images/img_image_7.png",
        secondaryImage2: "images/img_image_6.png",
        secondaryImage3: "images/img_image_9.png",
        syltherine: "images/img_image_3.png",
        syltherinenine: "images/img_image_4.png",
        syltherine1: "images/img_image_2.png",
        image: "images/img_image_1.png",
        discountText: "-30%",
        productName: "Syltherine",
        productDescription: "Stylish cafe chair",
        currentPrice: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
    },
];

export default function HomePage() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    return (
        <div>
            <Helmet>
                <title>Youthrive</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col gap-[3.63rem] bg-color-white sm:gap-[1.81rem]">
                <Header />
                <img
                    src="images/img_mask_group.png"
                    alt="image"
                    className="relative ml-[0.25rem] h-[45.13rem] w-full object-cover md:h-auto"
                />
                <div className="flex flex-col">
                    <div className="container-xs flex flex-col items-center gap-[3.50rem] px-[1.75rem] md:p-[1.25rem] sm:px-[1.25rem]">
                        <div className="flex flex-col items-start">
                            <Heading
                                size="heading2xl"
                                as="h2"
                                className="leading-[4rem] tracking-[1.4px] sm:leading-[2.75rem]"
                            >
                                Unique and Authentic
                            </Heading>
                            <Heading
                                size="heading2xl"
                                as="h2"
                                className="leading-[4rem] tracking-[1.4px] sm:leading-[2.75rem]"
                            >
                                Vintage Designer Jewellery
                            </Heading>
                        </div>
                        <Text
                            size="body2"
                            className="leading-[2rem] text-color-primary opacity-[0.8]"
                        >
                            Handcrafted with care to deliver the best value for our clients.
                            Shop our unique collection of vintage designer jewellery to add an
                            authentic touch to your style.
                        </Text>
                        <Button
                            type="button"
                            className="leading-[1.125rem] tracking-[0.5px] bg-color-primary py-[1.125rem] px-[1.625rem] text-color-white"
                            text="Explore"
                            onClick={() => { }}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[3.63rem] px-[1.75rem] md:px-[1.25rem] sm:px-[1.25rem]">
                    <div className="flex flex-col gap-[3.63rem] sm:gap-[2.75rem]">
                        <div className="flex flex-row items-center gap-[2rem] w-full">
                            <Slider ref={sliderRef} index={sliderState} onIndexChange={setSliderState}>
                                {data.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex flex-row items-center gap-[2rem] w-full">
                                            <Img src={item.userImageEightyOne} alt="image" className="w-[33.5rem]" />
                                            <Img src={item.userImageOneHundredSix} alt="image" className="w-[33.5rem]" />
                                            <Text
                                                size="heading2xl"
                                                className="leading-[4rem] text-color-primary sm:leading-[2.75rem]"
                                            >
                                                {item.diningText}
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <Button
                                type="button"
                                className="leading-[1.125rem] tracking-[0.5px] bg-color-primary py-[1.125rem] px-[1.625rem] text-color-white"
                                text="Explore"
                                onClick={() => sliderRef.current.slickNext()}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-[1.50rem] md:flex-col">
                    <div className="relative h-[36.38rem] flex self-center md:h-auto md:w-full md:flex-none md:self-stretch">
                        <img
                            src="images/img_rectangle_24.png"
                            alt="image"
                            className="h-[36.38rem] w-full flex object-cover"
                        />
                        <div className="absolute bottom-[1.50rem] left-0 right-0 mx-auto flex flex-1 items-center">
                            <div className="flex-[0.66] flex-col items-center bg-white_700_b7 px-[1.00rem] py-[1.50rem] sm:py-[1.25rem] md:px-[0.75rem]">
                                <Heading as="h4" className="text-color-gray_2">
                                    <i>Bed Room</i>
                                </Heading>
                                <Heading size="heading2xl" as="h6" className="text-color-gray_1">
                                    Inner Peace
                                </Heading>
                            </div>
                            <img
                                src="images/img_arrow_left.svg"
                                alt="arrowleft"
                                className="h-[3.00rem] w-[3.00rem] self-end"
                            />
                        </div>
                        <img
                            src="images/img_rectangle_25.png"
                            alt="image"
                            className="h-[36.38rem] w-[46%] object-cover md:w-full"
                        />
                    </div>
                </div>
                <div className="flex items-start gap-[1.00rem] sm:flex-col">
                    <img
                        src="images/img_rectangle_26.png"
                        alt="image"
                        className="relative z-[1] ml-[3.25rem] mt-[2.75rem] h-[30.38rem] w-[24%] object-cover md:ml-0 md:w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center px-[1.75rem] md:p-[1.25rem] sm:px-[1.25rem]">
                        <Heading size="heading2xl" as="h2" className="leading-[4rem] text-color-gray_2">
                            Share your setup with
                        </Heading>
                        <Heading size="heading5xl" as="h3" className="text-color-gray_1">
                            #funirofurniture
                        </Heading>
                    </div>
                </div>
                <div className="flex items-start gap-[1.00rem] sm:flex-col">
                    <img
                        src="images/img_rectangle_35.png"
                        alt="image"
                        className="h-[19.50rem] w-full flex-1 object-cover"
                    />
                    <img
                        src="images/img_rectangle_36.png"
                        alt="image"
                        className="absolute bottom-0 left-0 right-0 top-0 h-[23.88rem] w-full flex-1 object-cover"
                    />
                    <img
                        src="images/img_rectangle_38.png"
                        alt="image"
                        className="h-[19.50rem] w-[84%] self-end object-cover sm:w-full sm:self-auto"
                    />
                </div>
                <div className="flex items-start gap-[1.00rem] sm:flex-col">
                    <img
                        src="images/img_rectangle_37.png"
                        alt="image"
                        className="h-[20.13rem] w-[34%] self-center object-cover sm:w-full"
                    />
                    <img
                        src="images/img_rectangle_39.png"
                        alt="image"
                        className="relative bottom-0 right-0 top-0 h-[20.13rem] w-full flex-1 object-cover"
                    />
                </div>

                <Footer />
            </div>
        </div>
    );
}
