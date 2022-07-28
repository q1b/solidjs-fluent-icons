import { splitProps } from "solid-js";
function QrCodeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13 11h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2zM5 5h2v2H5V5zm0-2a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 01-.5-.5v-2.5zM5 13h2v2H5v-2zm0-2a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 01-.5-.5v-2.5zM13 5h2v2h-2V5zm0-2a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 01-.5-.5v-2.5z"/>
    </svg>);
}
export default QrCodeIcon;
