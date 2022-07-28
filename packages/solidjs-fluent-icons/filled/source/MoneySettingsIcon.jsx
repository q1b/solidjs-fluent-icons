import { splitProps } from "solid-js";
function MoneySettingsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h5.52A5.5 5.5 0 0116 9.2V5.5c0-.83-.67-1.5-1.5-1.5h-11zM6 6a2 2 0 01-2 2H3V7h1a1 1 0 001-1V5h1v1zm3 4.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM3 11v-1h1a2 2 0 012 2v1H5v-1a1 1 0 00-1-1H3zm10-5a1 1 0 001 1h1v1h-1a2 2 0 01-2-2V5h1v1zm-8.91 9h4.93c.03.34.1.68.19 1H5.5a1.5 1.5 0 01-1.41-1zM18 7.5v2.76a5.5 5.5 0 00-1-.66V6.09c.58.2 1 .76 1 1.41zm-5.94 3.94a2 2 0 01-1.43 2.48l-.46.12a4.73 4.73 0 00.01 1.02l.35.08A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z"/>
    </svg>);
}
export default MoneySettingsIcon;
