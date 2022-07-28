import { splitProps } from "solid-js";
function SparkleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.4 12.8a1.04 1.04 0 001.59-.51l.45-1.37a2.34 2.34 0 011.47-1.48l1.4-.45A1.04 1.04 0 0012.25 7l-1.37-.45A2.34 2.34 0 019.4 5.08L8.95 3.7a1.03 1.03 0 00-.82-.68 1.04 1.04 0 00-1.15.7l-.46 1.4a2.34 2.34 0 01-1.44 1.45L3.7 7a1.04 1.04 0 00.02 1.97l1.37.45a2.33 2.33 0 011.48 1.48l.46 1.4c.07.2.2.37.38.5zm6.14 4.05a.8.8 0 001.22-.4l.25-.76a1.09 1.09 0 01.68-.68l.77-.25a.8.8 0 00-.02-1.52l-.77-.25a1.08 1.08 0 01-.68-.68l-.25-.77a.8.8 0 00-1.52.01l-.24.76a1.1 1.1 0 01-.67.68l-.77.25a.8.8 0 000 1.52l.77.25a1.09 1.09 0 01.68.68l.25.77c.06.16.16.3.3.4z"/>
    </svg>);
}
export default SparkleIcon;
