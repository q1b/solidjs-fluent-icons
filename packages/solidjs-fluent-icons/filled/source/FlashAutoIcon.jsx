import { splitProps } from "solid-js"
function FlashAutoIcon(props) {
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
			<path d="M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l4.82-4.93 1.42-3.78a1.5 1.5 0 012.6-.37c.38-.68-.08-1.6-.93-1.6H12.2l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2zm7.29 7c.2 0 .4.13.47.32l3 8a.5.5 0 11-.94.36l-1-2.68h-3.06l-1 2.68a.5.5 0 01-.94-.36l3-8A.5.5 0 0114.5 9zm1.15 5l-1.15-3.08L13.35 14h2.3z" />
		</svg>
	)
}
export default FlashAutoIcon
