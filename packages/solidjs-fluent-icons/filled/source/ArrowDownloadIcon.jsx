import { splitProps } from "solid-js"
function ArrowDownloadIcon(props) {
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
			<path d="M15.24 16.5a.75.75 0 01.1 1.5H4.76a.75.75 0 01-.1-1.5h10.6zM10 2c.38 0 .7.28.75.65V12.95l2.97-2.98c.27-.26.68-.29.98-.07l.08.07c.27.27.3.68.07.98l-.07.08-4.24 4.25-.07.07-.1.05-.03.03-.1.03-.11.03-.07.01H10l-.15-.01-.08-.03a.73.73 0 01-.26-.14l-4.29-4.29A.75.75 0 016.2 9.9l.08.07 2.97 2.97V2.75c0-.41.34-.75.75-.75z" />
		</svg>
	)
}
export default ArrowDownloadIcon
