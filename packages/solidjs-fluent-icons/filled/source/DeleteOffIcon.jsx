import { splitProps } from "solid-js";
function DeleteOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.3 4L2.14 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-2-2A3 3 0 0112.27 18H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h.8zm8.7 8.7l-1-1V14a.5.5 0 001 0v-1.3zm-3-3l-1-1V14a.5.5 0 001 0V9.7zM12 8v1.88l3.48 3.48.97-8.36h1.05a.5.5 0 000-1h-5a2.5 2.5 0 00-5 0H6.12L11 8.88V8a.5.5 0 011 0zm-.5-4h-3a1.5 1.5 0 113 0z"/>
    </svg>);
}
export default DeleteOffIcon;
