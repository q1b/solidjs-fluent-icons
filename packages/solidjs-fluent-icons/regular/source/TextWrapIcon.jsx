import { splitProps } from "solid-js";
function TextWrapIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5H16a3 3 0 110 6h-4.3l.65.65a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5a.5.5 0 01.7.7l-.64.65H16a2 2 0 100-4H2.5a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"/>
    </svg>);
}
export default TextWrapIcon;
