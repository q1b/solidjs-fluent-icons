import { splitProps } from "solid-js";
function GestureIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 4.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3.5 16.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.75 4a.75.75 0 00-.3 1.43l9.06 4.1-9.6 4.8a.75.75 0 10.68 1.34l11-5.5a.75.75 0 00-.03-1.35L9.23 5.5h5.52a.75.75 0 000-1.5h-9z"/>
    </svg>);
}
export default GestureIcon;
