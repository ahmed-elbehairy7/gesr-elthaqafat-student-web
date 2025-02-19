import React, { useEffect, useState } from "react";
import { RoomBoxProps } from "./roomBox";
import Button from "./button";
import Image from "next/image";
import copyIcon from "@/assets/copy.png";
import { subjectsLocaleType } from "@/locales/dashboard";

const RoomDetails = ({
	subject,
	link,
	createdAt,
	teacher,
	locale,
	subjectsLocale,
}: roomDetailsData) => {
	const [copied, setCopied] = useState(false);
	useEffect(() => {
		if (copied == true) {
			setTimeout(() => {
				setCopied(false);
			}, 500);
		}
	}, [copied]);
	return (
		<div className="font-bold flex flex-col justify-center space-y-2 max-w-full">
			<h3 className="font-bold text-base">{teacher}</h3>
			<p className="text-sm">
				{locale.start}: {createdAt}
			</p>
			<p className="text-sm">
				{locale.subject}: {subjectsLocale[subject]}
			</p>
			<div className="my-2 flex flex-row justify-between items-center">
				<p className="break-words text-xs font-medium w-3/4">{link}</p>
				<a
					className={`hidden md:block ${
						copied ? "" : "cursor-pointer"
					}`}
					onClick={() => {
						navigator.clipboard.writeText(link);
						setCopied(true);
					}}
					aria-disabled={copied}
				>
					{!copied && (
						<Image alt="copy-icon" src={copyIcon} width={20} />
					)}
					{copied && (
						<p className="text-black font-normal text-sm ">
							{locale.copied} ✨
						</p>
					)}
				</a>
			</div>
			<div className="flex flex-col items-center w-full mt-3">
				<Button
					{...{
						text: locale.joinConversation,
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						link,
						textColor: "text-bright-one",
						target: "_blank",
					}}
				/>
			</div>
		</div>
	);
};

export interface roomDetailsData extends RoomBoxProps {
	link: string;
	subjectsLocale: subjectsLocaleType;
}

export default RoomDetails;
