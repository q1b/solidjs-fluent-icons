import { splitProps } from "solid-js";
function BoardIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.5 3v4H3V6a3 3 0 013-3h3.5zm1 0v9H17V6a3 3 0 00-3-3h-3.5zM17 13h-6.5v4H14a3 3 0 003-3v-1zm-7.5 4V8H3v6a3 3 0 003 3h3.5z"/>
    </svg>);
}
export default BoardIcon;
