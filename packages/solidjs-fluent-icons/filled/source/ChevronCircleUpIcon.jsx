import { splitProps } from "solid-js";
function ChevronCircleUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 10a8 8 0 1016 0 8 8 0 00-16 0zm4.85 1.85a.5.5 0 01-.7-.7l3.5-3.5a.5.5 0 01.7 0l3.5 3.5a.5.5 0 01-.7.7L10 8.71l-3.15 3.14z"/>
    </svg>);
}
export default ChevronCircleUpIcon;
