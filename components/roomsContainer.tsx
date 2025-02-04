import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "./container";
import RoomBox, { RoomBoxProps } from "./roomBox";
import RoomDetails, { roomDetailsData } from "./roomDetails";

const RoomsContainer = ({
	disableAll,
	lang,
	setLang,
	eligible,
}: RoomsContainerProps) => {
	const [rooms, setRooms] = useState<roomDetailsData[]>([]);
	const [roomDetails, setRoomDetails] = useState<number>(0);

	useEffect(() => {
		//backend todo fetch real available rooms
		setRooms([
			{
				lang: "ar",
				meetingLink:
					"https://us50.zoom.us/fdsfefsdfheufsfheskfhueskfusefhilsehfuselfijlsehflsehfislehfisle",
				start: "3 min ago",
				open: true,
				teacher: "Omar Abdelnaser",
				click: eligible,
				onClick: () => null,
			},
		]);
	}, []);
	return (
		<Container
			title={roomDetails == 0 ? "Available rooms" : "Room details"}
			rightNode={
				roomDetails ? (
					<button onClick={() => setRoomDetails(0)}>{"<="}</button>
				) : (
					<select
						className="rounded-lg"
						defaultValue={lang}
						onChange={(e) => setLang(e.target.value as "ar" | "ma")}
					>
						<option value={"ma"}>ma</option>
						<option value={"ar"}>عر</option>
					</select>
				)
			}
		>
			{roomDetails == 0 ? (
				<>
					{(disableAll || rooms.length == 0) && (
						<div className="m-auto pb-5">
							<p className="font-semibold text-center opacity-50">
								There's no any available rooms for now!
							</p>
						</div>
					)}
					{!disableAll && rooms.length > 0 && (
						<div className="space-y-5 md:space-y-10">
							{rooms.map((v, index) => (
								<RoomBox
									{...v}
									click={eligible}
									key={index}
									onClick={() =>
										eligible && setRoomDetails(index + 1)
									}
								/>
							))}
						</div>
					)}
				</>
			) : (
				<RoomDetails
					{...(rooms.find((v, i) => i == roomDetails - 1) as any)}
				/>
			)}
		</Container>
	);
};

export type RoomsContainerProps = {
	disableAll: boolean;
	lang: "ar" | "ma";
	setLang: Dispatch<SetStateAction<"ar" | "ma">>;
	eligible: boolean;
};

export default RoomsContainer;
