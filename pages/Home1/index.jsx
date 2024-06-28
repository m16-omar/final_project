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
        </>
    )
}