import { splitProps } from "solid-js";
function ChessIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 2a.5.5 0 00-.5.5v2.6a3 3 0 002.2 2.89 16.03 16.03 0 01-1.67 6.05c.18.21.36.37.5.49.51.43.97 1.14.97 2.02 0 .54-.18 1.04-.48 1.45H17c.83 0 1.5-.67 1.5-1.5v-.3c0-.35-.12-.68-.3-.94A15.03 15.03 0 0115.8 8 3 3 0 0018 5.1V2.5a.5.5 0 00-.5-.5h-.75a.75.75 0 00-.75.75v.75a.5.5 0 01-1 0v-.75a.75.75 0 00-.75-.75h-.5a.75.75 0 00-.75.75v.75a.5.5 0 01-1 0v-.75a.75.75 0 00-.75-.75h-.75zm-4 3a3 3 0 00-2.24 5H4a1 1 0 100 2h.52a5.76 5.76 0 01-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 018.48 12H9a1 1 0 100-2h-.26A3 3 0 006.5 5z"/>
    </svg>);
}
export default ChessIcon;
