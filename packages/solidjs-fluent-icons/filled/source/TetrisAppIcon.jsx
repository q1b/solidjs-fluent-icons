import { splitProps } from "solid-js";
function TetrisAppIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 2.75c0-.41.34-.75.75-.75H11v4H7V2.75zM2.75 7a.75.75 0 00-.75.75v2.5c0 .41.34.75.75.75H6V7H2.75zM11 7H7v4h3.25c.41 0 .75-.34.75-.75V7zm4.25-5H12v4h3.25c.41 0 .75-.34.75-.75v-2.5a.75.75 0 00-.75-.75zM4 14.75c0-.41.34-.75.75-.75H8v4H4.75a.75.75 0 01-.75-.75v-2.5zM13 18v-4H9v4h4zm5-4v3.25c0 .41-.34.75-.75.75H14v-4h4zm-3.25-5a.75.75 0 00-.75.75V13h4V9.75a.75.75 0 00-.75-.75h-2.5z"/>
    </svg>);
}
export default TetrisAppIcon;
