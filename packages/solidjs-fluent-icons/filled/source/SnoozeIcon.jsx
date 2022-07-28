import { splitProps } from "solid-js";
function SnoozeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.75 4a.75.75 0 000 1.5h3.88l-4.45 5.27a.75.75 0 00.57 1.23h5.5a.75.75 0 000-1.5h-3.88l4.45-5.27A.75.75 0 0016.25 4h-5.5zm-7 6a.75.75 0 000 1.5h1.97l-2.56 3.29A.75.75 0 003.75 16h3.5a.75.75 0 000-1.5H5.28l2.56-3.29A.75.75 0 007.25 10h-3.5z"/>
    </svg>);
}
export default SnoozeIcon;
