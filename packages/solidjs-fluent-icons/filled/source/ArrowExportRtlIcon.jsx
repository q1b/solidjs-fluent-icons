import { splitProps } from "solid-js";
function ArrowExportRtlIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.25 3.75a.75.75 0 00-.75.75v11a.75.75 0 001.5 0v-11a.75.75 0 00-.75-.75zM15 10a.75.75 0 00-.75-.75H4.06l2.72-2.72a.75.75 0 00-1.06-1.06l-4 4a.76.76 0 00-.22.53.75.75 0 00.22.53l4 4a.75.75 0 101.06-1.06l-2.72-2.72h10.19c.41 0 .75-.34.75-.75z"/>
    </svg>);
}
export default ArrowExportRtlIcon;
