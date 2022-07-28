import { splitProps, ComponentProps, JSX } from "solid-js"

function FoodChickenLegIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M18 7a5 5 0 00-9.93-.87c-.42 1.5-.83 2.29-1.04 2.63l-1.88 1.89a.5.5 0 00.35.85h.39l-2 2a2 2 0 00-1.15 3.55c.08.06.15.13.2.21A2 2 0 006.5 16.1l2-2v.4a.5.5 0 00.85.35l1.88-1.87c.34-.21 1.15-.63 2.7-1.07A4.97 4.97 0 0018 7zm-9.5 5.69l-2.78 2.78a.75.75 0 00-.22.53 1 1 0 01-1.78.63c-.1-.13-.22-.25-.35-.35A1 1 0 014 14.5c.18 0 .37-.06.51-.21l2.8-2.79H8.5v1.19zM13 3a4 4 0 011.37 7.76 11.6 11.6 0 00-3.8 1.47L9.49 13.3v-2.23a.5.5 0 00-.15-.35l-.06-.06a.5.5 0 00-.35-.15H6.71l1.07-1.07a11.53 11.53 0 001.28-3.1 3.97 3.97 0 01.23-.82A4 4 0 0113 3z" />
		</svg>
	)
}
export default FoodChickenLegIcon
