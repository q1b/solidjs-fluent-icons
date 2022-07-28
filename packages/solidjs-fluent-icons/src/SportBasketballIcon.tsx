import { splitProps, ComponentProps, JSX } from "solid-js"

function SportBasketballIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 9.3l1.08-1.09a7.57 7.57 0 01-1.06-1.96 17.37 17.37 0 01-.85-3.2 6.97 6.97 0 00-3.75 1.66L10 9.29zm1.79-.38L10.71 10l4.58 4.58a6.97 6.97 0 001.66-3.75l-.42-.07c-.9-.18-1.88-.43-2.77-.78a7.57 7.57 0 01-1.97-1.06zm5.2.9a6.97 6.97 0 00-1.7-4.4L12.5 8.2c.43.32.99.6 1.61.85a16.39 16.39 0 002.89.78zM11.8 7.5l2.8-2.8A6.98 6.98 0 0010.16 3l.06.27c.17.87.4 1.8.72 2.62.25.62.53 1.18.85 1.6zM10 10.7L8.92 11.8c.44.55.79 1.25 1.06 1.96a17.37 17.37 0 01.86 3.2 6.97 6.97 0 003.74-1.66L10 10.71zm-1.8 1.8l-2.78 2.8a6.97 6.97 0 004.4 1.7c0-.1-.03-.18-.04-.27-.18-.87-.41-1.8-.73-2.62a6.83 6.83 0 00-.84-1.6zm-.7-.7c-.43-.33-.98-.6-1.61-.85A16.38 16.38 0 003 10.17c.04 1.58.61 3.15 1.7 4.41l2.8-2.79zm.71-.72L9.3 10 4.71 5.42a6.97 6.97 0 00-1.66 3.74l.42.08c.9.18 1.88.43 2.78.78.72.28 1.4.62 1.96 1.06zm7.45 4.58A8 8 0 114.34 4.34a8 8 0 0111.32 11.32z" />
		</svg>
	)
}
export default SportBasketballIcon
