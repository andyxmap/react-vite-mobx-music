import { Typography } from "@material-tailwind/react";
import Icon from "./Icon";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {

    return (
        <div className="grid place-content-center justify-center">

            <Typography variant="h1" className="p-2 leading-relaxed text-white">Made with 💖</Typography>
            <div className="flex flex-1 justify-center">
            <a className="w-10 h-10 m-1 rounded-full flex items-center justify-center">
                <Icon></Icon>
            </a>
            <a className="w-10 h-10 m-1 rounded-full flex items-center justify-center">
                <LinkedInIcon></LinkedInIcon>
            </a>
            </div>
            <Typography variant="lead" className="p-2 leading-relaxed text-white">&copy; Violex Map. All rights reserved.</Typography>
            


        </div>
    )
}