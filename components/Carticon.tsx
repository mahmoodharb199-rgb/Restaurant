import Link from "next/link";
import Image from "next/image";

export default function Carticon() {
    return (
            <Link href="/cart" className="flex items-center gap-2">
                <div className="relative w-8 h-8 md:w-6 md:h-6 ">
                    <Image src="/cart.png" alt="" fill />
                </div>
                <span>Cart(3)</span>
            </Link>
    )
}