import { splitProps } from "solid-js";
function LockMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 3a2 2 0 012 2v1H7V5c0-1.1.9-2 2-2zm3 3V5a3 3 0 10-6 0v1h-.5C4.67 6 4 6.67 4 7.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H12zM6.09 16c.2.58.76 1 1.41 1h5a3.5 3.5 0 003.5-3.5v-4c0-.65-.42-1.2-1-1.41v5.41a2.5 2.5 0 01-2.5 2.5H6.1zM10 10.5a1 1 0 11-2 0 1 1 0 012 0z"/>
    </svg>);
}
export default LockMultipleIcon;
