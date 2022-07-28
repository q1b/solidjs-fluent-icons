import { splitProps } from "solid-js";
function AutoFitHeightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.25 2a.75.75 0 000 1.5h11a.75.75 0 000-1.5h-11zm0 14.5a.75.75 0 000 1.5h11a.75.75 0 000-1.5h-11zm6.03-1.72l2-2a.75.75 0 10-1.06-1.06l-.72.72V7.56l.72.72a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2a.75.75 0 001.06 1.06L9 7.56v4.88l-.72-.72a.75.75 0 00-1.06 1.06l2 2c.3.3.77.3 1.06 0z"/>
    </svg>);
}
export default AutoFitHeightIcon;
