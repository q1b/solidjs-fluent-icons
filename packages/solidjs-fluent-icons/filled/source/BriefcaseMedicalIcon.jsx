import { splitProps } from "solid-js";
function BriefcaseMedicalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 3a.5.5 0 00-.5.5V6H5a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V9a3 3 0 00-3-3h-2V3.5a.5.5 0 00-.5-.5h-5zM12 6H8V4h4v2zm-2 3c.28 0 .5.22.5.5v2h2a.5.5 0 010 1h-2v2a.5.5 0 01-1 0v-2h-2a.5.5 0 010-1h2v-2c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default BriefcaseMedicalIcon;
