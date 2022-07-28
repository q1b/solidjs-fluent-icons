import { splitProps } from "solid-js";
function LikertIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 16v-5.5H2V13a3 3 0 003 3h1zm1 0h8a3 3 0 003-3v-2.5H7V16zm2-2a.75.75 0 110-1.5.75.75 0 010 1.5zm2.25 0a.75.75 0 110-1.5.75.75 0 010 1.5zm2.25 0a.75.75 0 110-1.5.75.75 0 010 1.5zm2.25 0a.75.75 0 110-1.5.75.75 0 010 1.5zM18 9.5V7a3 3 0 00-3-3H7v5.5h11zM9.75 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6 4H5a3 3 0 00-3 3v2.5h4V4z"/>
    </svg>);
}
export default LikertIcon;
