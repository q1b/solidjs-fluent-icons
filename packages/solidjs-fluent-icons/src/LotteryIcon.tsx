import { splitProps, ComponentProps, JSX } from "solid-js"

function LotteryIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.5 3.67a2 2 0 013 0c.3-.17.6-.31.94-.42a3 3 0 00-4.88 0c.33.1.65.25.95.42zM3 8a3 3 0 015.4-1.8c.35-.09.7-.15 1.08-.18a4 4 0 10-5.85 5.2c.07-.36.17-.71.3-1.05A3 3 0 013 8zm11-4a4 4 0 00-3.48 2.02c.37.03.73.09 1.08.18a3 3 0 114.47 3.97c.13.34.23.69.3 1.05A4 4 0 0014 4zm-8.5 8.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM10 7a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm-1.5 3a.5.5 0 000 1h2.24l-.32.48a7.65 7.65 0 00-1.17 2.96.5.5 0 101 .12c.1-.9.56-1.82 1.02-2.54a11.1 11.1 0 01.84-1.17l.01-.02a.5.5 0 00-.37-.83H8.5z" />
		</svg>
	)
}
export default LotteryIcon
