import { Text, Img } from "../..";
import React from "react";

export default function BlogRowgoingallin({
    userimage = "images/img_rectangle_69.png",
    headingtext = "Going all-in with millennial design",
    datetext = "03 Aug 2022",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex items-center gap-[0.75rem]`}>
            <Img src={userimage} alt="image" className="h-[5.00rem] w-[5.00rem] rounded-[50%]" />
            <div className="flex flex-1 flex-col items-start gap-[0.38rem]">
                <Text size="md" as="p" className="w-full leading-[1.31rem]">
                    {headingtext}
                </Text>
                <Text size="xs" as="p" className="!text-gray-500">
                    {datetext}
                </Text>
            </div>
        </div>
    );
}
