import { splitProps } from "solid-js"
function PeopleTeamDeleteIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			shape-rendering="geometricPrecision"
			fill="currentColor"
			aria-hidden="true"
			preserveAspectRatio="xMidYMid meet"
			style={
				typeof props?.style === "string"
					? `display:${props?.hidden ? "none" : "block"}` + ";" + props.style
					: { display: props?.hidden ? "none" : "block", ...props?.style }
			}
			ref={props.ref}
			{...others}
		>
			<path d="M12.5 4.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm5 .5a2 2 0 11-4 0 2 2 0 014 0zm-13 2a2 2 0 100-4 2 2 0 000 4zM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.61 0 1.12.44 1.23 1.02A5.5 5.5 0 0010.25 18L10 18a4 4 0 01-4-4V9.25zm8.99-.23c1.14.1 2.18.55 3.01 1.24V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.65.37 1.02zM5 9.25c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 003.4 2.97C5.14 15.37 5 14.7 5 14V9.25zm14 5.25a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.8 0l1.15-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15z" />
		</svg>
	)
}
export default PeopleTeamDeleteIcon
