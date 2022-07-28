import { splitProps, ComponentProps, JSX } from "solid-js"

function HeadsetVrIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.75 8a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.5 10a.5.5 0 000 1h2a.5.5 0 000-1h-2zm6.5.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM8.5 3a.5.5 0 00-.5.5V5H5.25a3.25 3.25 0 00-3.24 3H1.5a.5.5 0 00-.5.5v3c0 .28.22.5.5.5H2v1.75C2 15.55 3.46 17 5.25 17h1.6c.87 0 1.7-.34 2.3-.95l.6-.6a.35.35 0 01.5 0l.59.6c.6.6 1.44.95 2.3.95h1.61c1.8 0 3.25-1.46 3.25-3.25V12h.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H18a3.25 3.25 0 00-3.25-3H12V3.5a.5.5 0 00-.5-.5h-3zM17 8.25v5.5c0 1.24-1 2.25-2.25 2.25h-1.61c-.6 0-1.17-.24-1.6-.66l-.59-.6a1.35 1.35 0 00-1.9 0l-.6.6c-.42.42-1 .66-1.6.66h-1.6C4.01 16 3 15 3 13.75v-5.5C3 7.01 4 6 5.25 6h9.5C15.99 6 17 7 17 8.25z" />
		</svg>
	)
}
export default HeadsetVrIcon
