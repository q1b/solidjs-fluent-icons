import { splitProps } from "solid-js";
function ArrowDownLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.5 16a.5.5 0 010 1h-8a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v6.8L16.15 3.14a.5.5 0 11.7.7L4.71 16h6.79z"/>
    </svg>);
}
export default ArrowDownLeftIcon;
