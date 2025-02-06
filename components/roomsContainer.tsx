import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "./container";
import RoomBox from "./roomBox";
import RoomDetails, { roomDetailsData } from "./roomDetails";
import Image from "next/image";
import returnIcon from "@/assets/return.png";
import { roomsContainerLocaleType } from "@/locales/dashboard";

const RoomsContainer = ({
	disableAll,
	subject,
	setSubject,
	eligible,
	locale,
}: RoomsContainerProps) => {
	const [rooms, setRooms] = useState<roomDetailsData[]>([]);
	const [roomDetails, setRoomDetails] = useState<number>(0);

	const { subjects } = locale;

	useEffect(() => {
		//backend todo fetch real available rooms
		setRooms([
			{
				meetingLink:
					"https://us50.zoom.us/fdsfefsdfheufsfheskfhueskfusefhilsehfuselfijlsehflsehfislehfisle",
				start: "3 mins ago",
				open: true,
				teacher: "Omar Abdelnaser",
				click: eligible,
				onClick: () => null,
				locale: locale.roomBox,
				subject: "ar",
				subjectsLocale: subjects,
			},
		]);
	}, [eligible]);

	return (
		<Container
			title={roomDetails == 0 ? locale.title : locale.roomBox.roomDetails}
			rightNode={
				roomDetails ? (
					<button onClick={() => setRoomDetails(0)}>
						<Image alt="return-icon" src={returnIcon} width={20} />
					</button>
				) : (
					<select
						className="rounded-lg"
						defaultValue={subject}
						onChange={(e) =>
							setSubject(e.target.value as "ar" | "ma")
						}
					>
						<option value={"mw"}>{subjects.mw}</option>
						<option value={"ar"}>{subjects.ar}</option>
						<option value={"communicationSkills"}>
							{subjects.communicationSkills}
						</option>
						<option value={"quran"}>{subjects.quran}</option>
						<option value={"tajweed"}>{subjects.tajweed}</option>
					</select>
				)
			}
		>
			{roomDetails == 0 ? (
				<>
					{(disableAll || rooms.length == 0) && (
						<div className="m-auto pb-5">
							<p className="font-semibold text-center opacity-50">
								{locale.noAvailableRooms}
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
					{...(rooms.find(
						(v, i) => i == roomDetails - 1
					) as roomDetailsData)}
				/>
			)}
		</Container>
	);
};

export type RoomsContainerProps = {
	disableAll: boolean;
	subject: string;
	setSubject: Dispatch<SetStateAction<string>>;
	eligible: boolean;
	locale: roomsContainerLocaleType;
};

export default RoomsContainer;
