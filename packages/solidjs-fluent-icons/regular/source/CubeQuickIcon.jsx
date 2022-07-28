import { splitProps } from "solid-js";
function CubeQuickIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.27 5.56a.5.5 0 01.46 0l3 1.54a.5.5 0 01.27.44v3.92a.5.5 0 01-.27.44l-3 1.54a.5.5 0 01-.46 0l-3-1.54a.5.5 0 01-.27-.44V7.54c0-.18.1-.36.27-.44l3-1.54zm.92-.9a1.5 1.5 0 00-1.38 0l-3 1.55c-.5.26-.81.77-.81 1.33v3.92c0 .56.31 1.07.81 1.33l3 1.54c.43.22.95.22 1.38 0l3-1.54c.5-.26.81-.77.81-1.33V7.54a1.5 1.5 0 00-.81-1.33l-3-1.54zM3 6.5c0-.28.22-.5.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5zm-1 3c0-.28.22-.5.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5zm1 3c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm8.05-4.72a.5.5 0 01.67-.23l1.78.9 1.78-.9a.5.5 0 11.44.9L14 9.3v2.19a.5.5 0 11-1 0V9.3l-1.72-.85a.5.5 0 01-.23-.67z"/>
    </svg>);
}
export default CubeQuickIcon;
