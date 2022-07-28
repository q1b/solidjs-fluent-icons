import { splitProps } from "solid-js";
function TabDesktopCopyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 2A2.5 2.5 0 005 4.5v8A2.5 2.5 0 007.5 15h8a2.5 2.5 0 002.5-2.5v-8A2.5 2.5 0 0015.5 2h-8zM17 4.5V5h-6.5a.5.5 0 01-.5-.5V3h5.5c.83 0 1.5.67 1.5 1.5zm-8 0c0 .83.67 1.5 1.5 1.5H17v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 016 12.5v-8C6 3.67 6.67 3 7.5 3H9v1.5zM12.5 18a2.5 2.5 0 002.45-2h-1.04c-.2.58-.76 1-1.41 1H6a3 3 0 01-3-3V7.5c0-.65.42-1.2 1-1.41V5.05A2.5 2.5 0 002 7.5V14a4 4 0 004 4h6.5z"/>
    </svg>);
}
export default TabDesktopCopyIcon;
