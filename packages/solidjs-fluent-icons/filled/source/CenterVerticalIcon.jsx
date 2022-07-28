import { splitProps } from "solid-js";
function CenterVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.5 3a.5.5 0 000 1h15a.5.5 0 000-1h-15zM2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM6 7a2 2 0 00-2 2v2c0 1.1.9 2 2 2h8a2 2 0 002-2V9a2 2 0 00-2-2H6z"/>
    </svg>);
}
export default CenterVerticalIcon;
