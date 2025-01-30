"use client";

import Link from "next/link";
import React from "react";

function Button({
	text,
	link = "/",
	fill = true,
	textColor = "#f2f2f2",
	backgroundOrBorderColor = "#18cad3",
	onclick,
}: ButtonProps) {
	return (
		<Link
			href={link}
			onClick={
				onclick &&
				((e) => {
					e.preventDefault();
					onclick();
				})
			}
		>
			<button
				aria-label={text}
				className={`font-bold text-base rounded-lg
          ${
				!fill
					? `bg-transparent py-[14px] px-[55px] border-solid border-2`
					: "py-[13px] px-[35px]"
			}
                    ${textColor}
                    ${backgroundOrBorderColor}
          `}
			>
				<h4>{text}</h4>
			</button>
		</Link>
	);
}

export default Button;

export type ButtonProps = {
	text: string;
	link?: string;
	fill?: boolean;
	textColor?: string;
	backgroundOrBorderColor?: string;
	onclick?: Function;
};
