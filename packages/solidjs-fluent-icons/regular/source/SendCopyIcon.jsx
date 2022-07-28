import { splitProps } from "solid-js";
function SendCopyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.65 2.15c.2-.2.5-.2.7 0l3 3a.5.5 0 01-.7.7L9.5 3.71v7.79a.5.5 0 01-1 0V3.7L6.35 5.86a.5.5 0 11-.7-.7l3-3zM5.27 17c.34.6.99 1 1.73 1h6a4 4 0 004-4v-3.5a.5.5 0 10-1 0V14a3 3 0 01-3 3H5.27zM4 8.5a.5.5 0 00-1 0V14c0 1.1.9 2 2 2h8a2 2 0 002-2V8.5a.5.5 0 00-1 0V14a1 1 0 01-1 1H5a1 1 0 01-1-1V8.5z"/>
    </svg>);
}
export default SendCopyIcon;
