import Link from "next/link";
import React from "react";

const NotifyBar = ({
	href = "/",
	onClick,
	good,
	text,
	className,
}: NotifyBarProps) => {
	return (
		<Link
			href={href}
			onClick={
				onClick &&
				((e) => {
					e.preventDefault();
					onClick();
				})
			}
			className={`p-3 w-5/6 text-sm rounded-md text-center ${
				good
					? "text-primary-color bg-primary-color border-primary-color"
					: "text-errRed bg-errRed border-errRed"
			} bg-opacity-20 border ${className} `}
		>
			<p>{text}</p>
		</Link>
	);
};

export type NotifyBarProps = {
	href?: string;
	onClick?: () => null;
	good: boolean;
	text: string;
	className?: string;
};

export default NotifyBar;
