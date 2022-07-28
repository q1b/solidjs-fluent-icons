import { splitProps } from "solid-js";
function TextFieldIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm5-.5v1a.5.5 0 001 0V7h1.5v6H9a.5.5 0 000 1h2a.5.5 0 000-1h-.5V7H12v.5a.5.5 0 001 0v-1a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default TextFieldIcon;
