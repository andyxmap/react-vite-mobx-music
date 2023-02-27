
import { Joke } from "@/models/joke";
import {
    Card,
    CardHeader,
    CardBody,

} from "@material-tailwind/react";
import React from "react";


export default function TecCard({ img, content }: { img: JSX.Element, content: JSX.Element }) {
    return (

        <Card className="w-full shadow-lg p-4">
            <CardHeader color="blue-gray" className="h-32 flex place-items-center justify-center place-content-center">
                <div className="h-2/3">
                {img}
                </div>
            </CardHeader>
            <CardBody className="text-center">
                {content}
            </CardBody>


        </Card>
    );

}

export const ListCard = ({ children }: any) => {

    return (
        
            <div className="grid md:grid-cols-3 gap-6">
                {children}
            </div>
        
    )
}





