import { splitProps, ComponentProps, JSX } from "solid-js"

function PresenceOfflineIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M13.7 6.3a1 1 0 010 1.4L11.42 10l2.3 2.3a1 1 0 01-1.42 1.4L10 11.42l-2.3 2.3a1 1 0 01-1.4-1.42L8.58 10l-2.3-2.3a1 1 0 011.42-1.4L10 8.58l2.3-2.3a1 1 0 011.4 0zM0 10a10 10 0 1120 0 10 10 0 01-20 0zm10-8a8 8 0 100 16 8 8 0 000-16z" />
		</svg>
	)
}
export default PresenceOfflineIcon
