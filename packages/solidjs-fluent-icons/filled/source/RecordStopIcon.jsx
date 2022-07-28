import { splitProps } from "solid-js";
function RecordStopIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1z"/>
    </svg>);
}
export default RecordStopIcon;
