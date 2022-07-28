import { splitProps } from "solid-js";
function PulseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.01 3c.33 0 .62.23.71.55l2.82 10.07 2.24-7.1a.75.75 0 011.4-.07L15.5 9.5h1.76a.75.75 0 010 1.5H15a.75.75 0 01-.69-.45l-.7-1.65-2.4 7.58a.75.75 0 01-1.43-.03L6.97 6.41l-1.25 4.06A.75.75 0 015 11H2.75a.75.75 0 010-1.5h1.7l1.83-5.97c.1-.32.4-.53.73-.53z"/>
    </svg>);
}
export default PulseIcon;
