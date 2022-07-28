import { splitProps, ComponentProps, JSX } from "solid-js"

function SlideTransitionIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.75 4A2.75 2.75 0 002 6.75v6.5A2.75 2.75 0 004.75 16h10.5A2.75 2.75 0 0018 13.25v-6.5A2.75 2.75 0 0015.25 4H4.75zM12 5v10H9V5h3zm1 10V5h2.25c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H13zm-5 0H6V5h2v10zM5 5v10h-.25C3.78 15 3 14.22 3 13.25v-6.5C3 5.78 3.78 5 4.75 5H5z" />
		</svg>
	)
}
export default SlideTransitionIcon
