"use client";
// import DynamicButton from "@/components/DynamicButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();
	const goHome = () => {
		router.push("/");
	};
	return (
		<div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-black">
			{/* <Image
				width={10}
				height={10}
				src={"/images/logo/logo.svg"}
				alt="Logo"
				className="w-[150px] h-auto mb-2 transform hover:scale-105 transition-transform duration-300 ease-in-out bg-transparent"
				priority
			/> */}
			<h1 className="text-9xl font-bold">404</h1>
			<h2 className="text-3xl dark:text-white mt-4">Page Not Found</h2>
			<p className="mt-2 mb-6">
				Sorry, the page you are looking for does not exist.
			</p>
			<button
				onClick={goHome}
				className="bg-primary px-10 py-2 rounded-full text-white hover:bg-yellow-500 shadow-10 transform hover:scale-105 transition-transform duration-300 ease-in-out"
			>
				Go back to home
			</button>
		</div>
	);
}