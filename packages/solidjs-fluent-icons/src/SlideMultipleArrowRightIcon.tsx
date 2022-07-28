import { splitProps, ComponentProps, JSX } from "solid-js"

function SlideMultipleArrowRightIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M6 3a4 4 0 00-4 4v5c0 1.1.9 2 2 2v-1a1 1 0 01-1-1V7a3 3 0 013-3h7a1 1 0 011 1h1a2 2 0 00-2-2H6zm1 3a2 2 0 00-2 2v7c0 1.1.9 2 2 2h2.6c-.16-.32-.3-.65-.4-1H7a1 1 0 01-1-1V8a1 1 0 011-1h9a1 1 0 011 1v1.6c.36.18.7.4 1 .66V8a2 2 0 00-2-2H7zm7.5 4a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default SlideMultipleArrowRightIcon
