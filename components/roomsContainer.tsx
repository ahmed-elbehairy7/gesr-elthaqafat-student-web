import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "./container";
import RoomBox, { RoomBoxProps } from "./roomBox";

const RoomsContainer = ({ lang, setLang }: RoomsContainerProps) => {
	const [rooms, setRooms] = useState<RoomBoxProps[]>([]);

	useEffect(() => {
		setRooms([
			{
				lang: "ar",
				meetingLink: "https://us50.zoom.us",
				start: "3 min ago",
				open: true,
				teacher: "Omar Abdelnaser",
			},
			{
				lang: "ar",
				meetingLink: "https://us50.zoom.us",
				start: "2 hrs ago",
				end: "2 mins ago",
				teacher: "Omar Abdelnaser",
			},
		]);
	}, []);
	return (
		<Container
			title="Available rooms"
			rightNode={
				<select className="rounded-lg" defaultValue={lang}>
					<option value={"ma"}>ma</option>
					<option value={"ar"}>عر</option>
				</select>
			}
		>
			<div className="space-y-5 md:space-y-10">
				{rooms.map((v, index) => (
					<RoomBox {...v} key={index} />
				))}
			</div>
		</Container>
	);
};

export type RoomsContainerProps = {
	lang: "ar" | "ma";
	setLang: Dispatch<SetStateAction<"ar" | "ma">>;
};

export default RoomsContainer;
