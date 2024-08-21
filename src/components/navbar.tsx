import Image from "next/image"
import favicon from '@/app/favicon.ico'
import Link from "next/link"
export default function Navbar(){
    return(
        <>
            <div className="flex justify-left sticky top-0 bg-inherit">
                <Link href='/' >
                <Image 
                    src={favicon}
                    alt="Icon"
                    className="w-20"
                    />
                </Link>
            </div>
        </>
    )
}