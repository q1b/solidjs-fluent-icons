import { splitProps } from "solid-js";
function PanelRightAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 6a2 2 0 00-2-2H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5.2c-.08-.32-.15-.66-.18-1H4a1 1 0 01-1-1V6a1 1 0 011-1h8v4.6a5.48 5.48 0 016 .66V6zm-3.5 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default PanelRightAddIcon;
