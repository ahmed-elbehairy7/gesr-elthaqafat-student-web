import React from "react";
import { RoomBoxProps } from "./roomBox";
import Button from "./button";

const RoomDetails = ({
	lang,
	meetingLink,
	start,
	teacher,
}: roomDetailsData) => {
	return (
		<div className="font-bold flex flex-col justify-center space-y-2 max-w-full">
			<h3 className="font-bold text-base">{teacher}</h3>
			<p className="text-sm">start: {start}</p>
			<p className="text-sm">Language: {lang}</p>
			<div className="my-2">
				<p className="break-words text-xs font-medium">{meetingLink}</p>
			</div>
			<div className="flex flex-col items-center w-full mt-3">
				<Button
					{...{
						text: "Join conversation room",
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						link: meetingLink,
						textColor: "text-bright-one",
					}}
				/>
			</div>
		</div>
	);
};

export interface roomDetailsData extends RoomBoxProps {
	meetingLink: string;
}

export default RoomDetails;
