import { splitProps } from "solid-js";
function BarcodeScannerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 5.75A2.75 2.75 0 014.75 3h.75a.75.75 0 010 1.5h-.75c-.69 0-1.25.56-1.25 1.25v.75a.75.75 0 01-1.5 0v-.75zm11.75-2c0-.41.34-.75.75-.75h.75A2.75 2.75 0 0118 5.75v.75a.75.75 0 01-1.5 0v-.75c0-.69-.56-1.25-1.25-1.25h-.75a.75.75 0 01-.75-.75zm-11 9c.41 0 .75.34.75.75v.75c0 .69.56 1.25 1.25 1.25h.75a.75.75 0 010 1.5h-.75A2.75 2.75 0 012 14.25v-.75c0-.41.34-.75.75-.75zm14.5 0c.41 0 .75.34.75.75v.75A2.75 2.75 0 0115.25 17h-.75a.75.75 0 010-1.5h.75c.69 0 1.25-.56 1.25-1.25v-.75c0-.41.34-.75.75-.75zM5.5 6c.41 0 .75.34.75.75v6.5a.75.75 0 01-1.5 0v-6.5c0-.41.34-.75.75-.75zm3.75.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5zM11.5 6c.41 0 .75.34.75.75v6.5a.75.75 0 01-1.5 0v-6.5c0-.41.34-.75.75-.75zm3.75.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z"/>
    </svg>);
}
export default BarcodeScannerIcon;
