import NotFoundImg from "@/im/not-found.jpg"

export default function NotFoundPage() {
    return (
        <div className="flex place-content-center">
            <img src={NotFoundImg} className="w-full h-full"/>
        </div>
    )
}