import { splitProps, ComponentProps, JSX } from "solid-js"

function Wifi2Icon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.6 9.36c.47.47.88 1.04 1.2 1.65a.5.5 0 11-.9.46 5.45 5.45 0 00-9.73-.01.5.5 0 01-.89-.46A6.45 6.45 0 0114.6 9.35zm-1.71 2.5c.35.35.64.78.85 1.25a.5.5 0 11-.92.4 3.03 3.03 0 00-5.56-.01.5.5 0 11-.92-.4 4.03 4.03 0 016.54-1.24zm-1.93 1.93a1.3 1.3 0 11-1.83 1.83 1.3 1.3 0 011.83-1.83z" />
		</svg>
	)
}
export default Wifi2Icon
