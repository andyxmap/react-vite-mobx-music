
import {
    Card,
    CardHeader,
    CardBody,

} from "@material-tailwind/react";



export default function Response({ content1, content2 }: { content1: JSX.Element, content2: JSX.Element }) {
    return (

        <Card className="w-full shadow-lg p-4">
            <CardHeader color="blue-gray" className="flex place-items-center justify-center">
                <div className="h-2/3 ">
                {content1}
                </div>
            </CardHeader>
            <CardBody className="text-center">
                {content2}
            </CardBody>


        </Card>
    );

}






