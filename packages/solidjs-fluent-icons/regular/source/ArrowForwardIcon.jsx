import { splitProps } from "solid-js";
function ArrowForwardIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.3 9l-3.4 3.39a.5.5 0 00.64.76l.07-.05 4.24-4.25a.5.5 0 00.06-.63l-.06-.07-4.24-4.25a.5.5 0 00-.76.64l.05.07L16.3 8H10a7.5 7.5 0 00-7.5 7.26v.24a.5.5 0 001 0A6.5 6.5 0 019.77 9h6.53z"/>
    </svg>);
}
export default ArrowForwardIcon;
