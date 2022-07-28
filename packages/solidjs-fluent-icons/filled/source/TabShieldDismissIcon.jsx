import { splitProps } from "solid-js";
function TabShieldDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v2.73c-.34-.2-.67-.46-1-.8a1.4 1.4 0 00-.5-.34V5.5a1 1 0 00-1-1h-9a1 1 0 00-1 1v9a1 1 0 001 1h5.07a5.8 5.8 0 00.96 1.5H5.5A2.5 2.5 0 013 14.5v-9zm12.28 2.62c1 1.04 2.1 1.55 3.32 1.55.2 0 .36.14.4.34v2.57c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 01-.26 0c-2.48-.86-3.79-2.6-3.87-5.15v-2.75a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0zM15 12.47l-1.36-1.36a.38.38 0 00-.53.53L14.47 13l-1.36 1.35a.38.38 0 00.54.54L15 13.53l1.35 1.36a.38.38 0 00.54-.54L15.53 13l1.36-1.36a.38.38 0 00-.54-.53L15 12.47z"/>
    </svg>);
}
export default TabShieldDismissIcon;
