import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "./container";
import RoomBox, { RoomBoxProps } from "./roomBox";

const RoomsContainer = ({ lang, setLang, eligible }: RoomsContainerProps) => {
	const [rooms, setRooms] = useState<RoomBoxProps[]>([]);

	useEffect(() => {
		//backend todo fetch real available rooms
		setRooms([
			{
				lang: "ar",
				meetingLink: "https://us50.zoom.us",
				start: "3 min ago",
				open: true,
				teacher: "Omar Abdelnaser",
				click: eligible,
			},
			{
				lang: "ar",
				meetingLink: "https://us50.zoom.us",
				start: "2 hrs ago",
				end: "2 mins ago",
				teacher: "Omar Abdelnaser",
				click: eligible,
			},
		]);
	}, []);
	return (
		<Container
			title="Available rooms"
			rightNode={
				<select
					className="rounded-lg"
					defaultValue={lang}
					onChange={(e) => setLang(e.target.value as "ar" | "ma")}
				>
					<option value={"ma"}>ma</option>
					<option value={"ar"}>عر</option>
				</select>
			}
		>
			<div className="space-y-5 md:space-y-10">
				{rooms.map((v, index) => (
					<RoomBox {...v} click={eligible} key={index} />
				))}
			</div>
		</Container>
	);
};

export type RoomsContainerProps = {
	lang: "ar" | "ma";
	setLang: Dispatch<SetStateAction<"ar" | "ma">>;
	eligible: boolean;
};

export default RoomsContainer;
