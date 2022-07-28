import { splitProps } from "solid-js";
function FlipVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.66 2.12c.21.14.34.38.34.63v5.5c0 .41-.34.75-.75.75H2.75a.75.75 0 01-.3-1.44l12.5-5.5c.23-.1.5-.08.71.06zM6.32 7.5h8.18V3.9L6.32 7.5zm9.68 10a.5.5 0 01-.71.45l-13-6A.5.5 0 012.5 11h13c.28 0 .5.22.5.5v6z"/>
    </svg>);
}
export default FlipVerticalIcon;
