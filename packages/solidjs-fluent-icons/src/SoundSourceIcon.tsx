import { splitProps, ComponentProps, JSX } from "solid-js"

function SoundSourceIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 10a7 7 0 1112.14 4.75l.65.77a8 8 0 10-11.58 0l.65-.77A6.97 6.97 0 013 10zm11.16 3.6a5.5 5.5 0 10-8.32 0l.65-.78a4.5 4.5 0 117.01 0l.66.78zm-1.65-1.96a3 3 0 10-5.02 0l.69-.81a2 2 0 113.64 0l.69.81zm-2.13-.96a.5.5 0 00-.76 0l-5.5 6.5a.5.5 0 00.38.82h11a.5.5 0 00.38-.82l-5.5-6.5zM14.42 17H5.58L10 11.77 14.42 17z" />
		</svg>
	)
}
export default SoundSourceIcon
