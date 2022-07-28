import { splitProps } from "solid-js";
function ChevronDoubleUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.15 9.65a.5.5 0 00.7.7L10 5.2l5.15 5.16a.5.5 0 10.7-.7L10.4 4.16a.55.55 0 00-.78 0L4.15 9.65zm0 5a.5.5 0 00.7.7L10 10.2l5.15 5.16a.5.5 0 10.7-.7L10.4 9.16a.55.55 0 00-.78 0l-5.46 5.49z"/>
    </svg>);
}
export default ChevronDoubleUpIcon;
