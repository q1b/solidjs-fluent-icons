import { splitProps } from "solid-js"
function RecycleIcon(props) {
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
			<path d="M8.9 3.04a1.25 1.25 0 012.2 0l1.66 3.09-1.02-.34a.75.75 0 00-.48 1.42l3 1a.75.75 0 00.98-.59l.5-3a.75.75 0 10-1.48-.24l-.17 1.04-1.67-3.1a2.75 2.75 0 00-4.84 0L5.84 5.57a.75.75 0 001.33.7L8.9 3.05zm8.04 10.87l-1.91-3.56a.75.75 0 111.32-.71l1.91 3.56a2.75 2.75 0 01-2.42 4.05H12.3l.72.72a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2a.75.75 0 111.06 1.06l-.72.72h3.53c.94 0 1.55-1 1.1-1.84zm-9.69 1.84a.75.75 0 010 1.5H4.16a2.75 2.75 0 01-2.42-4.05L3.6 9.76l-1.35.45a.75.75 0 01-.48-1.42l3-1a.75.75 0 01.95.47l1 3a.75.75 0 11-1.42.48l-.4-1.22-1.83 3.39c-.44.83.16 1.84 1.1 1.84h3.09z" />
		</svg>
	)
}
export default RecycleIcon
