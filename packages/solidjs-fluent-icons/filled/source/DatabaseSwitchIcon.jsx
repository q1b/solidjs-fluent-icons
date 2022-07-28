import { splitProps } from "solid-js";
function DatabaseSwitchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.85 18.85a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.81.16.5.5 0 01-.1.54L10.7 16h5.58l-1.14-1.15a.5.5 0 01.16-.81.5.5 0 01.54.1l2 2a.5.5 0 010 .71l-2 2a.5.5 0 01-.81-.16.5.5 0 01.1-.54L16.3 17h-5.58l1.14 1.15a.5.5 0 010 .7zM10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3zm-1.56 9.56a1.5 1.5 0 010-2.12l2-2a1.5 1.5 0 012.12 0 1.5 1.5 0 01.35 1.56h1.18A1.5 1.5 0 0116 13.1V7.11a4.93 4.93 0 01-1.31.9c-.33.16-.66.3-1.01.42-1.19.38-2.43.57-3.68.56-1.25.01-2.5-.18-3.68-.57a8.15 8.15 0 01-1.7-.81 4.93 4.93 0 01-.62-.5V15c0 1.45 2.07 2.66 4.81 2.93l-.37-.37z"/>
    </svg>);
}
export default DatabaseSwitchIcon;
