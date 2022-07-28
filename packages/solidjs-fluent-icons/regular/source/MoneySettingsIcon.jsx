import { splitProps } from "solid-js";
function MoneySettingsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 9a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2zM3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h5.52c.03-.34.1-.68.19-1H6v-1a2 2 0 00-2-2H3V8h1a2 2 0 002-2V5h6v1c0 1.1.9 2 2 2h1v1.02c.34.03.68.1 1 .19V5.5c0-.83-.67-1.5-1.5-1.5h-11zM3 5.5c0-.28.22-.5.5-.5H5v1a1 1 0 01-1 1H3V5.5zM13 5h1.5c.28 0 .5.22.5.5V7h-1a1 1 0 01-1-1V5zm-8 8H3.5a.5.5 0 01-.5-.5V11h1a1 1 0 011 1v1zm-.91 2h4.93c.03.34.1.68.19 1H5.5a1.5 1.5 0 01-1.41-1zM18 7.5v2.76a5.5 5.5 0 00-1-.66V6.09c.58.2 1 .76 1 1.41zm-5.94 3.94a2 2 0 01-1.43 2.48l-.46.12a4.73 4.73 0 00.01 1.02l.35.08A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z"/>
    </svg>);
}
export default MoneySettingsIcon;
