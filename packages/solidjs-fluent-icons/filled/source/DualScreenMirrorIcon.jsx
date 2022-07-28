import { splitProps } from "solid-js";
function DualScreenMirrorIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 16H16a2 2 0 002-2V6a2 2 0 00-2-2h-5.5v12zm-1-12H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5.5V4zM5.75 8c.18 0 .34.1.43.25l1.75 3a.5.5 0 01-.43.75H4a.5.5 0 01-.43-.75l1.75-3A.5.5 0 015.75 8zm8.93.25l1.75 3A.5.5 0 0116 12h-3.5a.5.5 0 01-.43-.75l1.75-3a.5.5 0 01.86 0z"/>
    </svg>);
}
export default DualScreenMirrorIcon;
