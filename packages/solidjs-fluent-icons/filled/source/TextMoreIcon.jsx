import { splitProps } from "solid-js";
function TextMoreIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.25 2c.3 0 .58.18.7.47L14.04 15a2.24 2.24 0 00-1.69-.17l-.95-2.34H5.08l-1.64 4.03a.75.75 0 11-1.39-.56l5.5-13.5a.75.75 0 01.7-.47zM13 15.75c.63 0 1.15.46 1.24 1.07l.01.18A1.25 1.25 0 1113 15.75zM5.7 11h5.1L8.25 4.74 5.7 11zm4.55 6a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM17 18.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>
    </svg>);
}
export default TextMoreIcon;
