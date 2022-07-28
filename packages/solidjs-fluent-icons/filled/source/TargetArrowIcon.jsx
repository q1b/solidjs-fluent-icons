import { splitProps } from "solid-js";
function TargetArrowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.6 7.52a8 8 0 11-5.11-5.13l-1.05 1.05a1.5 1.5 0 00-.16.19 6.5 6.5 0 105.09 5.1l.2-.17 1.03-1.04zM14.9 9a5.02 5.02 0 01-4.9 6 5 5 0 111-9.9v1.55A3.5 3.5 0 1013.35 9h1.55zM10 11.5a1.5 1.5 0 001.45-1.89l1.58-1.58a.74.74 0 00.03-.03h2.44a.5.5 0 00.35-.15l2-2A.5.5 0 0017.5 5H15V2.5a.5.5 0 00-.85-.35l-2 2a.5.5 0 00-.15.35v2.44a.76.76 0 00-.03.03l-1.58 1.58a1.5 1.5 0 10-.4 2.95z"/>
    </svg>);
}
export default TargetArrowIcon;
