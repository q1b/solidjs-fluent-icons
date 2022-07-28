import { splitProps } from "solid-js";
function BookDatabaseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v11a1 1 0 01-1 1H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2V4zm4.48 2.34C8.13 6.55 8 6.8 8 7c0 .21.13.45.48.66.36.2.9.34 1.52.34a3.1 3.1 0 001.52-.34c.35-.21.48-.45.48-.66 0-.21-.13-.45-.48-.66A3.1 3.1 0 0010 6a3.1 3.1 0 00-1.52.34zm-.5-.86C7.43 5.8 7 6.31 7 7v4c0 .63.45 1.14.97 1.46A3.9 3.9 0 0010 13c.78 0 1.5-.21 2.03-.54.52-.32.97-.83.97-1.46V7c0-.69-.43-1.2-.98-1.52A4.08 4.08 0 0010 5c-.76 0-1.47.16-2.02.48zM12 11V8.53A4.1 4.1 0 0110 9a4.1 4.1 0 01-2-.47V11c0 .12.1.36.5.6.36.23.9.4 1.5.4s1.14-.17 1.5-.4c.4-.24.5-.48.5-.6z"/>
    </svg>);
}
export default BookDatabaseIcon;
