import { splitProps } from "solid-js";
function StyleGuideIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.07 6a2 2 0 011.41-2.46l5.46-1.47a2 2 0 012.45 1.41l2.54 9.53a2 2 0 01-1.41 2.45l-5.46 1.47a2 2 0 01-2.45-1.41L5.07 5.99zM9 6.24a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM5 15V9.62l1.77 6.64c.07.27.19.52.34.74H7a2 2 0 01-2-2zm-2.33-1.5L4 8.53V15a3 3 0 00.16.97l-.08-.02a2 2 0 01-1.41-2.45z"/>
    </svg>);
}
export default StyleGuideIcon;
