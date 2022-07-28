import { splitProps } from "solid-js";
function ArrowCircleDownRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.85 12.86a.5.5 0 01-.35.14h-5a.5.5 0 010-1h3.8L7.14 7.85a.5.5 0 11.7-.7L12 11.29V7.5a.5.5 0 011 0v5a.5.5 0 01-.14.35zM10 18a8 8 0 100-16 8 8 0 000 16zm7-8a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>);
}
export default ArrowCircleDownRightIcon;
