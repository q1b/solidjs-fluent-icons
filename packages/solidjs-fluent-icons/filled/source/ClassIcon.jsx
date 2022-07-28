import { splitProps } from "solid-js";
function ClassIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2h-3v6.5a.5.5 0 01-.8.4L8.5 7.62 6.8 8.9a.5.5 0 01-.8-.4V2zm4 0H7v5.5l1.2-.9a.5.5 0 01.6 0l1.2.9V2z"/>
    </svg>);
}
export default ClassIcon;
