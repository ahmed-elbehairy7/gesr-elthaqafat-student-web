import React, { ReactElement } from "react";

const Container = ({
	rightNode,
	title,
	children,
	className,
}: ContainerProps) => {
	return (
		<section
			className={`w-5/6 rounded-container bg-bright-two py-8 px-8 my-3 ${className}`}
		>
			<div className="flex flex-row justify-between mb-10">
				<div className="flex flex-col">
					<h2 className="text-lg font-bold">{title}</h2>
					<div className="w-20 h-0.5"></div>
				</div>
				{rightNode}
			</div>
			{children}
		</section>
	);
};
export type ContainerProps = {
	title: string;
	rightNode?: ReactElement;
	children: React.ReactNode;
	className?: string;
};

export default Container;
