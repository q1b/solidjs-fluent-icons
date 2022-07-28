import { splitProps } from "solid-js";
function WindowAppsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h1v-1H6a2 2 0 01-2-2V7h13V6a3 3 0 00-3-3H6zM4 6c0-1.1.9-2 2-2h8a2 2 0 012 2H4zm10.75 2C13.78 8 13 8.78 13 9.75V13H9.75C8.78 13 8 13.78 8 14.75v2.5c0 .97.78 1.75 1.75 1.75h6.75a2.5 2.5 0 002.5-2.5V9.75C19 8.78 18.22 8 17.25 8h-2.5zM18 16.5c0 .83-.67 1.5-1.5 1.5H14v-4h4v2.5zm-4-6.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V13h-4V9.75zM9.75 14H13v4H9.75a.75.75 0 01-.75-.75v-2.5c0-.41.34-.75.75-.75z"/>
    </svg>);
}
export default WindowAppsIcon;
