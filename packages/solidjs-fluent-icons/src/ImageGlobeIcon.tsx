import { splitProps, ComponentProps, JSX } from "solid-js"

function ImageGlobeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.55 2.15A8.9 8.9 0 004.01 5h2.98a8.9 8.9 0 00-.54-2.85 2.93 2.93 0 00-.53-.91C5.73 1.04 5.59 1 5.5 1c-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91zm-.72-.83A9.92 9.92 0 003 5H1.03a4.5 4.5 0 012.8-3.68zm3.34 0A9.92 9.92 0 017.99 5h1.98a4.5 4.5 0 00-2.8-3.68zM9.97 6H8a9.92 9.92 0 01-.82 3.68A4.5 4.5 0 009.97 6zM5.5 10c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85H4.01a8.9 8.9 0 00.54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24zm-1.67-.32A4.5 4.5 0 011.03 6H3a9.92 9.92 0 00.82 3.68zM14 4h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3v-3.6c.32.16.65.3 1 .4V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 012.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 00-2-2zm0 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0zM6 16h8a2 2 0 001.01-.27l-4.66-4.58a.5.5 0 00-.7 0l-4.66 4.58A2 2 0 006 16z" />
		</svg>
	)
}
export default ImageGlobeIcon
