import React, { useEffect, useState } from "react";
import Container from "./container";
import RoomBox from "./roomBox";
import RoomDetails from "./roomDetails";
import Image from "next/image";
import returnIcon from "@/assets/return.png";
import { roomsContainerLocaleType } from "@/locales/dashboard";
import apiClient from "@/utils/apiClient";

const RoomsContainer = ({
	disableAll,
	eligible,
	locale,
}: RoomsContainerProps) => {
	const [rooms, setRooms] = useState<any[]>([]);
	const [roomDetails, setRoomDetails] = useState<number>(0);
	const [subject, setSubject] = useState("None");

	const { subjects } = locale;

	useEffect(() => {
		setSubject(localStorage.getItem("preferredSubject") || "None");
	}, []);

	useEffect(() => {
		(async () => {
			if (subject !== "None") {
				localStorage.setItem("preferredSubject", subject);
				const rooms = await apiClient.get(
					`/rooms/available/${subject}`
				);
				setRooms(rooms);
			}
		})();
	}, [subject]);

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
						className="rounded-lg text-xs md:text-base w-2/5 md:w-fit"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					>
						<option value={"None"} disabled>
							{subjects.chooseSubject}
						</option>
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
									locale={locale.roomBox}
									subjectsLocale={subjects}
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
					locale={locale.roomBox}
					subjectsLocale={subjects}
					{...rooms.find((v, i) => i == roomDetails - 1)}
				/>
			)}
		</Container>
	);
};

export type RoomsContainerProps = {
	disableAll: boolean;
	eligible: boolean;
	locale: roomsContainerLocaleType;
};

export default RoomsContainer;
